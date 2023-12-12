<template>
  <div class="joining-letter-overlay">
    <div class="joining-letter-container">
      <h3>Joining Letter</h3>
    </div>
    <div class="content">
      <p v-if="isHired">
        <h3>Smart Palika</h3>
        <h4>MaitiGhar,Kathmandu</h4>
        Hello {{ name }},<br />
        Congratulations! We are pleased to inform you that you have been hired
        at Smart Palika for {{ technology }} Developer as a {{ level }} postion.
         Your joining date is {{ formattedDate }}.
      </p>
      <button v-if="isHired" @click="sendJoiningLetter" class="send-button">
        Send
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isHired: Boolean,
    name: String,
    technology: String,
    level: String,
    formattedDate: String,
  },

  data() {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7);

    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);

    return { 
      formattedDate
     };
  },

  mounted() {},

  methods: {
    sendJoiningLetter() {
      alert('Joining letter sent!');
    },},
};
</script>

<style scoped>
.joining-letter-overlay {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.joining-letter-container {
  background-color: #4caf50;
  color: white;
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
}
.content {
  font-family: 'Arial', sans-serif;
  color: #333;
}
p {
  line-height: 1.6;
  margin-bottom: 30px;
}
h3 {
  color: #2196f3;
}
h4 {
  color: #666;
  margin-bottom: 20px;
}
.send-button {
  background-color: #2196f3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
.send-button:hover {
  background-color: #0b7dda;
}
</style>
