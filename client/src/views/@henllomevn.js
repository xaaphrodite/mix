import axios from "axios";

const url = "/api/mevn";

export default class restAPI {
  static async getAllPost() {
    const response = await axios.get(url);
    return response.data;
  }
}
