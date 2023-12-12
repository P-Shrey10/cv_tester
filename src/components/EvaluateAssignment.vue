<template>
  <div>
    <Header></Header>
    <div class="sidetoside">
      <div>
        <Sidebar></Sidebar>
      </div>

      <div class="evaluateAssignment">
        <h3 class="evaluateAssignmentTittle">Evaluate Assignment</h3>

        <!-- SEARCH -->
        <div class="evaluateAssignmentSearch">
          <a-input-search
            placeholder="Search..."
            style="width: 200px"
            @search="onSearch"
          />
          <a-button-group>
            <a-button type="danger">Clear</a-button>
          </a-button-group>
        </div>

        <!-- TABLE -->
        <div>
          <a-table :columns="columns" :data-source="data">
            <a slot="name" slot-scope="text">{{ text }}</a>
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
          title: "Status",
          dataIndex: "status",
          key: "status",
          scopedSlots: { customRender: "status" },
        },
        {
          title: "Task",
          dataIndex: "task",
          key: "task",
          scopedSlots: { customRender: "task" },
        },
      ],

      data: [],
    };
  },

  mounted() {},

  methods: {
    onSearch() {},
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
.evaluateAssignment {
  margin: 10px;
  width: 100%;
}
.evaluateAssignmentTittle {
  color: #3498db;
}
.evaluateAssignmentSearch {
  display: flex;
  gap: 20px;
}
</style>
