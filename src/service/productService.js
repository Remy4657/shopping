import axios from "./customize-axios";

const fetchAllProduct = () => axios.get("/");
const fetchProduct = (id) => axios.get(`/product/${id}`);

export { fetchAllProduct, fetchProduct };
