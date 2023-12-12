<template>
  <div>
    <Header></Header>
    <div class="sidetoside">
      <div>
        <Sidebar></Sidebar>
      </div>

      <div class="profile">
        <h3 class="profileTittle">Profile</h3>

        <!-- SEARCH -->
        <div class="profileSearch">
          <input
            type="text"
            id="s_name"
            v-model="s_name"
            placeholder="Search Name..."
            @input="filterData"
          />
          <input
            type="text"
            id="s_tech"
            v-model="s_tech"
            placeholder="Search Technology..."
            @input="filterData"
          />
          <button class="clear-button" @click="clearFilters">
            Clear Filters
          </button>
        </div>

        <!-- TABLE -->
        <div class="profileTable">
          <table class="cv_table">
            <thead>
              <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Technology</th>
                <th>Level</th>
                <th>Salary Expectation</th>
                <th>Experience</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in items" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.technology }}</td>
                <td>{{ item.level }}</td>
                <td>{{ item.salary_expectation }}</td>
                <td>{{ item.experience_years }}</td>
                <td class="anticon">
                  <!-- DETAIL -->
                  <a-icon
                    type="eye"
                    class="detailIcon"
                    @click="showDetail(item)"
                  />

                  <!-- UPDATE -->
                  <a-icon
                    type="plus-circle"
                    class="updateIcon"
                    @click="showUpdate(item.id, item.cv_status?.status, item)"
                  />

                  <!-- EDIT -->
                  <a-icon
                    type="edit"
                    class="editIcon"
                    @click="showEdit(item)"
                  />

                  <!-- DELETE -->
                  <a-icon
                    type="delete"
                    class="deleteIcon"
                    @click="showDelete(item)"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Details
        v-if="isDetailsModalVisible"
        :selectedItem="selectedItem"
        @closeDetails="closeDetails"
      ></Details>

      <UpdateForm
        v-if="isUpdateFormVisible"
        :id="cv_id"
        :status="selectedStatus"
        :editedItem="selectedItem"
        @closeModal="closeUpdateForm"
      ></UpdateForm>

      <EditForm
        v-if="isEditFormVisible"
        :editedItem="selectedItem"
        @closeEditForm="closeEditForm"
      ></EditForm>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
import Footer from "./Footer.vue";
import Details from "./Details.vue";
import UpdateForm from "./UpdateForm.vue";
import EditForm from "./EditForm.vue";
import api from "../api/Api.js";

export default {
  data() {
    return {
      s_name: "",
      s_tech: "",
      items: [],
      afterClearData: [],
      isDetailsModalVisible: false,
      isUpdateFormVisible: false,
      isEditFormVisible: false,
      cv_id: null,
      selectedItem: null,
      selectedStatus: null,
    };
  },

  components: {
    Header,
    Sidebar,
    Footer,
    Details,
    UpdateForm,
    EditForm,
  },

  mounted() {
    api
      .getData()
      .then((res) => {
        this.items = res.data.data;
        this.afterClearData = this.items;
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  },

  methods: {
    // FILTER
    filterData() {
      const filteredItems = this.items.filter((item) => {
        const nameMatch = item.name
          .toLowerCase()
          .includes(this.s_name.toLowerCase());
        const techMatch = item.technology
          .toLowerCase()
          .includes(this.s_tech.toLowerCase());

        return nameMatch && techMatch;
      });
      this.items = filteredItems;
    },

    clearFilters() {
      this.s_name = "";
      this.s_tech = "";

      this.items = this.afterClearData;
    },

    // DETAIL
    closeDetails() {
      this.isDetailsModalVisible = false;
    },

    showDetail(item) {
      this.selectedItem = item;
      this.isDetailsModalVisible = true;
    },

    //UPDATE
    closeUpdateForm() {
      this.isUpdateFormVisible = false;
    },

    showUpdate(id, status, item) {
      this.cv_id = id;
      this.selectedStatus = status;
      this.selectedItem = item;
      this.isUpdateFormVisible = true;
    },

    //EDIT
    closeEditForm() {
      this.isEditFormVisible = false;
    },

    showEdit(item) {
      this.selectedItem = item;
      this.isEditFormVisible = true;
    },

    //DELETE
    showDelete(item) {
      const confirmDelete = confirm("Are you sure you want to delete?");
      if (confirmDelete) {
        api
          .sendDataDelete(item.id)
          .then(() => {
            this.items = this.items.filter(
              (existingItem) => existingItem.id !== item.id
            );
            console.log("Item deleted successfully!");
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
          });
      }
    },
  },
};
</script>

<style scoped>
.sidetoside {
  display: flex;
  gap: 40px;
}
.profile {
  margin: 10px 50px 10px 10px;
  width: 100%;
}
.profileTittle {
  color: #3498db;
}
.profileSearch {
  display: flex;
  gap: 20px;
}
.profileSearch input,
button {
  border-radius: 10px;
  border: 1px solid #2a1195;
}
.clear-button {
  color: #fff;
  background-color: #e74c3c;
  border: none;
}
.profileTable {
  justify-content: center;
  overflow-y: scroll;
}
.cv_table {
  justify-content: center;
  overflow-y: scroll;
  margin: 10px 0;
  width: 100%;
}
th {
  font-size: 15px;
  font-weight: 900;
  padding: 8px;
  cursor: pointer;
  background-color: #2a1195;
  color: white;
}
td {
  font-size: 14px;
  font-weight: normal;
  padding: 10px 0 10px 10px;
  cursor: pointer;
}
.anticon {
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
}
.detailIcon {
  color: #9cca29;
}
.updateIcon {
  color: #166ed9;
}
.editIcon {
  color: #190b60;
}
.deleteIcon {
  color: #e74c3c;
}
</style>
