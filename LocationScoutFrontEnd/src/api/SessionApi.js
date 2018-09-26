import { BASE_URL } from "./UrlApi";
import axios from "axios";
class SessionApi {
  static login(credentials) {
    var endpoint = BASE_URL + "auth/login";
    const request = new Request(endpoint, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(credentials)
    });
    return fetch(request)
      .then(response => {
        if (response.status == "200") {
          return response.json();
        }
      })
      .catch(error => {
        return error;
      });
  }

  static signUp(newUser) {
    console.log("Registering new user");
    var endPoint = BASE_URL + "auth/signup";
    var body = JSON.stringify(newUser);
    const request = new Request(endPoint, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(newUser)
    });
    return fetch(request);
    // return fetch(request).then(response => {
    //   return response.json();
    // }).catch(error => {
    //   return error;
    // });
  }

  static getUserDetails(userId) {
    return fetch(BASE_URL + "users/" + userId)
      .then(response => {
        // debugger
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static updateUserDetails(userInfo) {
    console.log("updateUserDetails api called.");
    // debugger;
    const request = new Request(BASE_URL + "users/", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(userInfo)
    });

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
}

export default SessionApi;
