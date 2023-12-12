<template>
  <div>
    <div class="update-overlay">
      <div class="update-content">
        <h3 class="form-title">Update Status</h3>

        <div class="form-group">
          <select id="status" v-model="form.status">
            <option value="" disabled selected>Status</option>
            <option value="First Interview">First Interview</option>
            <option value="Second Interview">Second Interview</option>
            <option value="Third Interview">Third Interview</option>
            <option value="Hired">Hired</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div class="form-group">
          <label for="task">Task:</label>
          <input
            type="file"
            id="task"
            ref="fileInput"
            @change="handleFileUpload"
            accept=".pdf, .doc, .docx"
          />
        </div>

        <div class="form-group">
          <label for="date">Date:</label>
          <input
            type="date"
            id="date"
            v-model="form.interview_date"
            placeholder="Date..."
          />
        </div>

        <div class="form-group">
          <select id="interview" v-model="form.interviewers_list">
            <option value="" disabled selected>Interviewers</option>
            <option value="Interviewer 1">Interviewer 1</option>
            <option value="Interviewer 2">Interviewer 2</option>
            <option value="Interviewer 3">Interviewer 3</option>
            <option value="Interviewer 4">Interviewer 4</option>
          </select>
        </div>

        <div class="form-group">
          <label for="remarks">Remarks:</label>
          <input
            type="text"
            id="remarks"
            v-model="form.remarks"
            placeholder="Remarks..."
          />
        </div>
        <div class="button-group">
          <button class="update-button" @click="saveUpdate">Update</button>
          <button class="cancel-button" @click="closeUpdateForm">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/Api.js";

export default {
  props: ["id", "status"],

  data() {
    return {
      form: {
        cv_id: this.id || "",
        status: "",
        task: "",
        interview_date: "",
        interviewers_list: "",
        remarks: "",
      },
      isUpdateFormVisible: false,
      selectedItem: null,
    };
  },

  methods: {
    handleFileUpload() {
      const fileInput = this.$refs.fileInput;
      const file = fileInput.files[0];

      if (file) {
        console.log("Selected file:", file.name);
        console.log("File size:", file.size);
        console.log("File type:", file.type);

        this.form.task = file;
      }
    },

    saveUpdate() {
      let formData = new FormData();

      for (const data in this.form) {
        formData.append(data, this.form[data]);
      }

      api
        .sendDataUpdate(this.id, formData)
        .then(() => {
          this.selectedItem.cv_status.status = this.form.status;
          console.log("Status updated successfully:", this.form.status);

          this.isUpdateFormVisible = false;
        })
        .catch((err) => {
          console.log("Error updating status: ", err);
        });
      this.$emit("closeModal");
    },

    closeUpdateForm() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
label {
  color: #333;
  font-weight: bold;
}
input,
select {
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.update-overlay {
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
.update-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 40%;
  max-height: 80%;
}
.form-title {
  color: #3498db;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-top: 10px;
  width: max-content;
  border-radius: 10px;
  color: #333;
}
.button-group {
  display: flex;
  justify-content: space-between;
}
.update-button,
.cancel-button {
  margin: 10px;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.update-button {
  background-color: #4caf50;
}
.cancel-button {
  background-color: #f44336;
}
</style>
