import { fetchApi } from "./lib/fetchApi.js";

let data = await fetchApi("https://fakestoreapi.com/products/");
console.log(data);
