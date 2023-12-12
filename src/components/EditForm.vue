<template>
  <div>
    <div class="edits-overlay">
      <div class="edits-content">
        <h3 class="form-title">Edit Form</h3>

        <div class="form-group">
          <label for="edit-name">Name:</label>
          <input type="text" id="edit-name" v-model="editedItem.name" />
        </div>

        <div class="form-group">
          <label for="edit-phone">Phone:</label>
          <input type="number" id="edit-phone" v-model="editedItem.phone" />
        </div>

        <div class="form-group">
          <label for="edit-email">Email:</label>
          <input type="text" id="edit-email" v-model="editedItem.email" />
        </div>

        <div class="form-group">
          <label for="edit-references">References:</label>
          <input
            type="text"
            id="edit-references"
            v-model="editedItem.references"
          />
        </div>

        <div class="form-group">
          <label for="edit-technology">Technology:</label>
          <select id="edit-technology" v-model="editedItem.technology">
            <option value="Dot Net">Dot Net</option>
            <option value="React JS">React JS</option>
            <option value="DevOps">DevOps</option>
            <option value="QA">QA</option>
          </select>
        </div>

        <div class="form-group">
          <label for="edit-level">Level:</label>
          <select id="edit-level" v-model="editedItem.level">
            <option value="Junior">Junior</option>
            <option value="Mid">Mid</option>
            <option value="Senior">Senior</option>
          </select>
        </div>

        <div class="form-group">
          <label for="edit-salary_expectation">Salary Expectation:</label>
          <input
            type="text"
            id="edit-salary_expectation"
            v-model="editedItem.salary_expectation"
          />
        </div>

        <div class="form-group">
          <label for="edit-experience_years">Experience Years:</label>
          <input
            type="text"
            id="edit-experience_years"
            v-model="editedItem.experience_years"
          />
        </div>

        <div class="button-group">
          <button class="save-button" @click="saveChanges">
            {{ isLoading ? "Saving..." : "Save Changes" }}
          </button>
          <button class="cancel-button" @click="cancelEdit">Cancel</button>
        </div>
      </div>
    </div>

    <EditForm
      v-if="isEditFormVisible"
      :editedItem="selectedItem"
      @closeEditForm="closeEditForm"
    ></EditForm>
  </div>
</template>

<script>
import api from "../api/Api.js";

export default {
  props: {
    editedItem: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isLoading: false,
      isEditFormVisible: false,
    };
  },

  methods: {
    saveChanges() {
      this.isLoading = true;

      const updatedData = {
        id: this.editedItem.id,
        name: this.editedItem.name,
        phone: this.editedItem.phone,
        email: this.editedItem.email,
        references: this.editedItem.references,
        technology: this.editedItem.technology,
        level: this.editedItem.level,
        salary_expectation: this.editedItem.salary_expectation,
        experience_years: this.editedItem.experience_years,
      };

      api
        .sendDataUpdate(updatedData)
        .then((response) => {
          this.$emit("close");
          console.log("Changes saved successfully", response.data);
          this.closeEditForm();
        })
        .catch((error) => {
          console.error("Error saving changes", error);
        })
        .finally(() => {
          this.isLoading = false;
        });
      this.$emit("closeEditForm");
    },

    cancelEdit() {
      this.$emit("closeEditForm");
    },

    closeEditForm() {
      this.isEditFormVisible = false;
    },
  },
};
</script>

<style scoped>
.edits-overlay {
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
.edits-content {
  padding: 10px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  overflow-y: auto;
}
.form-title {
  color: #3498db;
}
.form-group label {
  display: block;
  color: #333;
}
.form-group input,
.form-group select {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}
.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
}

.save-button,
.cancel-button {
  margin: 0 10px;
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.save-button {
  background-color: #4caf50;
}
.save-button:hover {
  background-color: #45a049;
}
.cancel-button {
  background-color: #f44336;
}
.cancel-button:hover {
  background-color: #d32f2f;
}
</style>
