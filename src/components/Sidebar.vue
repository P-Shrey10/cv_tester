<template>
  <div class="sidebar">
    <router-link to="/home" tag="div" class="sidebar-link">
      <a-icon type="home" theme="filled" :style="{ fontSize: '18px' }" />
      <p>Home</p>
    </router-link>
    <router-link to="/profile" tag="div" class="sidebar-link">
      <a-icon type="profile" theme="filled" :style="{ fontSize: '18px' }"/>
      <p>Profile</p>
    </router-link>
    <router-link to="/upload-profile" tag="div" class="sidebar-link">
      <a-icon type="plus-circle" theme="filled" :style="{ fontSize: '18px' }"/>
      <p>Upload Profile</p>
    </router-link>
    <router-link to="/schedule-interview" tag="div" class="sidebar-link">
      <a-icon type="schedule" theme="filled" :style="{ fontSize: '18px' }"/>
      <p>Scheduled Interview</p>
    </router-link>
    <router-link to="/offer-management" tag="div" class="sidebar-link"
      ><a-icon type="database" theme="filled" :style="{ fontSize: '18px' }"/>
      <p>Offer Management</p>
    </router-link>
    <router-link to="/evaluate-assignment" tag="div" class="sidebar-link"
      ><a-icon type="book" theme="filled" :style="{ fontSize: '18px' }"/>
      <p>Evaluate Assignment</p>
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
p {
  margin: 0px 5px;

}
.sidebar {
  display: flex;
  flex-direction: column;
  width: max-content;
  height: 80vh;
  margin: 10px 0;
  padding: 10px;
  border-radius: 20px;
  color: white;
  background-color: #2a1195;
}
.sidebar-link {
  display: flex;
  padding: 10px;
  margin: 5px 0;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}
.sidebar-link:hover {
  background-color: #5443a1;
}
.sidebar-link.router-link-exact-active {
  background-color: #5443a1;
}
</style>
