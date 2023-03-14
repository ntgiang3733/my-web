import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "signin", {
                username,
                password
            })
            .then(response => {
                console.log(response);
                // if (response.data.accessToken) {
                //     localStorage.setItem("user", JSON.stringify(response.data));
                // }

                return response.data;
            });
    }

    register(username, email, password) {
        return axios
            .post(API_URL + "signup", {
                username,
                email,
                password
            })
            .then(response => {
                console.log(response);
                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();