import axios from "axios";

export const baseURL = "http://localhost:3000/expenses";

export default axios.create({
    baseURL
});
