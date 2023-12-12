<template>
  <div class="header">
    <h2>CV Tester</h2>
    <router-link to="/" class="logout-link">
      <h5 class="logout-icon"><a-icon type="logout" /></h5>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
h2,
h5 {
  color: white;
  margin: 10px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #2a1195;
}
.logout-link {
  text-decoration: none;
}
.logout-icon:hover {
  color: #f14d28;
}
</style>
