<template>
  <div>
    <div class="details-overlay">
      <div class="details-content">
        <h3 class="details-title">Details</h3>

        <div v-if="selectedItem" class="details-info">
          <div>
            <span>Name:</span>
            {{ selectedItem.name }}
          </div>
          <div>
            <span>Phone:</span>
            {{ selectedItem.phone }}
          </div>
          <div>
            <span>Email:</span>
            {{ selectedItem.email }}
          </div>
          <div>
            <span>References:</span>
            {{ selectedItem.references }}
          </div>
          <div>
            <span>Technology:</span>
            {{ selectedItem.technology }}
          </div>
          <div>
            <span>Level:</span>
            {{ selectedItem.level }}
          </div>
          <div>
            <span>Salary Expectation:</span>
            {{ selectedItem.salary_expectation }}
          </div>
          <div>
            <span>Experience:</span>
            {{ selectedItem.experience_years }}
          </div>
          <!-- <div>
            <span>Document: </span>
            {{ selectedItem.document }}
          </div> -->
        </div>

        <button @click="$emit('closeDetails')" class="close-button">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/Api.js";

export default {
  props: {
    selectedItem: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },

  mounted() {
    this.fetchItemDetails();
  },

  methods: {
    fetchItemDetails() {
      const itemId = this.selectedItem.id;

      api
        .getData()
        .then((res) => {
          this.selectedItem = res.data.data.find((item) => item.id === itemId);
        })
        .catch((err) => {
          console.log("Error  fetching details: ", err);
        });
    },

    closeDetails() {
      this.isDetailsModalVisible = false;
    },
  },
};
</script>

<style scoped>
.details-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.details-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 50%;
  height: 60%;
}
.details-title {
  color: #3498db;
}
.details-info {
  margin-top: 10px;
  color: #333;
}
.details-info div {
  margin-bottom: 10px;
}
span{
  color: #000;
}
.close-button {
  background: #e74c3c;
  color: #fff;
  border: none;
  margin: 15px 10px;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}
.close-button:hover {
  background: #c0392b;
}
</style>
