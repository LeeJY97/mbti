import axios from "axios";

const testApi = axios.create({
  baseURL: "https://ruddy-temporal-law.glitch.me"
})

export default testApi;
