import axios from "axios";

const BASE_URL = "http://192.168.1.98:8000";

export default {
  //Get CV Data
  getData() {
    return axios.get(`${BASE_URL}/api/cv`);
  },

  //Post Store CV Data
  sendDataStoreCV(data) {
    return axios.post(`${BASE_URL}/api/store/cv`, data);
  },

  //Post Login Data
  sendDataLogin(data) {
    return axios.post(`${BASE_URL}/api/login`, data);
  },

  //Post Signup Data
  sendDataSignup(data) {
    return axios.post(`${BASE_URL}/api/signup`, data);
  },

  //Get Login Users Data
  getDataUsers() {
    return axios.get(`${BASE_URL}/api/users`);
  },

  //Post Update
  sendDataUpdate(id, status) {
    return axios.post(`${BASE_URL}/api/update/cv/${id}`, status);
  },

  //Post Delete
  sendDataDelete(data) {
    return axios.post(`${BASE_URL}/api/delete/cv/${data}`);
  },

  //Get Status
  getDataStatus() {
    return axios.get(`${BASE_URL}/api/status/cv`);
  },
};
