<template>
  <div>
    <Header></Header>
    <div class="sidetoside">
      <div>
        <Sidebar></Sidebar>
      </div>

      <div class="uploadProfile">
        <h3 class="form-title">Upload Profile</h3>

        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name"><span>*</span>Name:</label>
            <input
              type="text"
              id="name"
              v-model="name"
              placeholder="Name..."
              required
            />
          </div>

          <div class="form-group">
            <label for="phone"><span>*</span>Phone:</label>
            <input
              type="number"
              id="phone"
              v-model="phone"
              placeholder="Phone..."
              required
            />
          </div>

          <div class="form-group">
            <label for="email"><span>*</span>Email:</label>
            <input
              type="text"
              id="email"
              v-model="email"
              placeholder="Email..."
              required
            />
          </div>

          <div class="form-group">
            <label for="references">References:</label>
            <input
              type="text"
              id="references"
              v-model="references"
              placeholder="References..."
            />
          </div>

          <div class="form-group">
            <label for="technology">Technology:</label>
            <select id="technology" v-model="technology">
              <option value="" disabled selected>Select a Technology...</option>
              <option value="Dot Net">Dot Net</option>
              <option value="React JS">React JS</option>
              <option value="DevOps">DevOps</option>
              <option value="QA">QA</option>
            </select>
          </div>

          <div class="form-group">
            <label for="level">Level:</label>
            <select id="level" v-model="level">
              <option value="" disabled selected>Select a level...</option>
              <option value="Junior">Junior</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          <div class="form-group">
            <label for="salary_expectation">Salary Expectation:</label>
            <input
              type="number"
              id="salary_expectation"
              v-model="salary_expectation"
              placeholder="Salary Expectation..."
            />
          </div>

          <div class="form-group">
            <label for="experience_years">Experience Years:</label>
            <input
              type="text"
              id="experience_years"
              v-model="experience_years"
              placeholder="Experience Years..."
            />
          </div>

          <div class="form-group">
            <label for="document"><span>*</span>Document:</label>
            <input
              type="file"
              id="document"
              ref="fileInput"
              @change="handleFileUpload"
              accept=".pdf, .doc, .docx"
              required
            />
          </div>

          <div class="form-button">
            <button type="button" class="register-button" @click="submitForm">
              Register
            </button>
            <button type="button" class="reset-button" @click="resetForm">
              Reset
            </button>
          </div>
        </form>
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
      name: "",
      phone: "",
      email: "",
      references: "",
      technology: "",
      level: "",
      experience_years: "",
      salary_expectation: "",
      document: null,
    };
  },

  components: {
    Header,
    Sidebar,
    Footer,
  },

  mounted() {
    const data = {
      name: "Default Name",
      phone: "Default Phone",
      email: "default@example.com",
      references: "Default Reference",
      technology: "Default Technology",
      level: "Default Level",
      experience_years: "Default Experience Years",
      salary_expectation: "Default Salary Exectation",
      document: null,
    };

    api
      .sendDataStoreCV(data)
      .then((response) => {
        console.log("Form submitted successfully", response.data.data);
      })
      .catch((err) => {
        console.log("Error submitting form", err);
      });
  },

  methods: {
    handleFileUpload() {
      const fileInput = this.$refs.fileInput;
      const file = fileInput.files[0];

      if (file) {
        console.log("Selected file:", file.name);
        console.log("File size:", file.size);
        console.log("File type:", file.type);

        this.document = file;
      }
    },

    submitForm() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("phone", this.phone);
      formData.append("email", this.email);
      formData.append("references", this.references);
      formData.append("technology", this.technology);
      formData.append("level", this.level);
      formData.append("experience_years", this.experience_years);
      formData.append("salary_expectation", this.salary_expectation);
      formData.append("document", this.document);

      api
        .sendDataStoreCV(formData)
        .then((response) => {
          this.resetForm();
          console.log("Form submitted successfully", response.data.data);
        })
        .catch((err) => {
          console.log("Error submitting form", err);
        });
    },

    resetForm() {
      this.name = "";
      this.phone = "";
      this.email = "";
      this.references = "";
      this.technology = "";
      this.level = "";
      this.experience_years = "";
      this.salary_expectation = "";
      this.document = null;
    },
  },
};
</script>

<style scoped>
h3 {
  color: #333;
}
label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}
input,
select {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}
span {
  color: red;
}
button {
  margin: 10px 0;
  color: white;
  background-color: rgb(104, 104, 104);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
.sidetoside {
  display: flex;
  gap: 70px;
}
.uploadProfile {
  margin: 10px 50px;
  padding: 20px;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  width: 50%;
}
.form-title {
  color: #3498db;
}
.form-group {
  margin-bottom: 10px;
}
.form-button {
  display: flex;
  justify-content: center;
  margin: 10px 0 0 0;
  gap: 10px;
}
.register-button {
  background-color: #4d1deb;
}
.reset-button {
  background-color: #f44336;
}
</style>
