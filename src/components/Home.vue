<template>
  <div>
    <Header></Header>
    <div class="sidetoside">
      <div>
        <Sidebar></Sidebar>
      </div>

      <div class="home">
        <h3 class="homeTittle">Welcome to the CV Tester.</h3>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
import Footer from "./Footer.vue";

export default {
  data() {
    return {};
  },

  components: {
    Header,
    Sidebar,
    Footer,
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
h3 {
  margin: 20px;
}
.sidetoside {
  display: flex;
  gap: 40px;
}
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140vh;
  height: 70vh;
  text-align: center;
}
.homeTittle {
  color: #3498db;
}
</style>
