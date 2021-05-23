import axios from "axios";
import mevnCookie from "js-cookie";

const url = "/api/henllomevn";
const csrfToken = mevnCookie.get("henllomevn");

axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

export default class restAPI {
  /**
   * Get owner data from database.
   *
   * @return response data
   */
  //! Fetch owner data
  static async getOwner() {
    const response = await axios
      .post(url)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
    return response.data;
  }
}
