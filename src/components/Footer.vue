<template>
  <div class="footer">
    <h5>@CellApp_{{ date }}</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
h5 {
  display: flex;
  justify-content: center;
  padding: 5px;
  color: white;
}
.footer {
  border-radius: 20px;
  background-color: #2a1195;
}
</style>
