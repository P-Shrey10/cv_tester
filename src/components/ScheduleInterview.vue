<template>
  <div>
    <Header></Header>
    <div class="sidetoside">
      <div>
        <Sidebar></Sidebar>
      </div>

      <div class="scheduledInterview">
        <h3 class="scheduledInterviewTittle">Scheduled Interview</h3>

        <!-- SEARCH -->
        <div class="scheduledInterviewSearch">
          <a-input-search
            placeholder="Search Status"
            style="width: 200px"
            @click="onSearch"
          />
          <a-button-group>
            <a-button type="danger" @click="onClear">Clear</a-button>
          </a-button-group>
        </div>

        <!-- TABLE -->
        <div>
          <a-table :columns="columns" :data-source="data">
            <a slot="name, email" slot-scope="text">{{ text }}</a>
            <a slot="status" slot-scope="text, record">{{
              record.cv_status.status
            }}</a>
            <a slot="interviewers_list" slot-scope="text, record">{{
              record.cv_status.interviewers_list
            }}</a>
            <a slot="date" slot-scope="text, record">{{
              record.cv_status.interview_date
            }}</a>
          </a-table>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
import Footer from "./Footer.vue";
import api from "../api/Api.js";

export default {
  data() {
    return {
      columns: [
        {
          title: "SN",
          dataIndex: "sn",
          key: "sn",
          scopedSlots: { customRender: "sn" },
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          scopedSlots: { customRender: "name" },
          ellipsis: true,
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
          scopedSlots: { customRender: "email" },
          ellipsis: true,
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
          scopedSlots: { customRender: "status" },
        },
        {
          title: "Interviewer",
          dataIndex: "interviewers_list",
          key: "interviewers_list",
          scopedSlots: { customRender: "interviewers_list" },
        },
        {
          title: "Date",
          dataIndex: "date",
          key: "date",
          scopedSlots: { customRender: "date" },
        },
      ],
      data: [],
      initialData: [],
    };
  },

  mounted() {
    this.getDataStatus();
  },

  methods: {
    onSearch() {
      const filteredData = this.data.filter((item) => {
        const statusMatch = item.cv_status.status
          .toLowerCase()
          .includes(this.item.toLowerCase());
        return statusMatch;
      });
      this.data = filteredData;
    },

    onClear() {
      this.data = this.initialData;
    },

    getDataStatus() {
      api
        .getDataStatus()
        .then((response) => {
          this.data = response.data.data.map((item, i) => {
            return {
              sn: i + 1,
              ...item,
            };
          });
          this.initialData = this.data;
          console.log("Response data here: ", response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },

  components: {
    Header,
    Sidebar,
    Footer,
  },
};
</script>

<style scoped>
.sidetoside {
  display: flex;
  gap: 40px;
}
.scheduledInterview {
  margin: 10px;
  width: 100%;
}
.scheduledInterviewTittle {
  color: #3498db;
}
.scheduledInterviewSearch {
  display: flex;
  gap: 20px;
}
</style>
