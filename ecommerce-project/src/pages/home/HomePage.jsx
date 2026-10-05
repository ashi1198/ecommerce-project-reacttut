import "./HomePage.css";
import { Header } from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsGrid } from "./ProductsGrid";
export function HomePage({ cart }) {
  //fetch is a asynchronous function ,these function doesnt run right away so we gotta wait for them to finish first before we can use the data that they return. so we need to use async await to wait for the data to be fetched before we can use it.
  //fetch is used to make a request to a server and get data back from it. In this case, we are making a request to our backend server to get the list of products. The fetch function returns a promise that resolves to the response of the request. We can use the .then() method to handle the response and extract the data we need from it. In this case, we are using the .json() method to parse the response as JSON and get the list of products.
  const [products, setProducts] = useState([]);

  // fetch("http://localhost:3000/api/products").then((response) => {
  //   //response.json() is a method that parses the response body as JSON and returns a promise that resolves to the parsed data. In this case, we are using it to get the list of products from the response.it is also a asynchronous function so we need to use await to wait for it to finish before we can use the data that it returns.
  //   return response.json()
  // }).then((data) => {
  //     console.log(data);
  //instead of then we will use async await instead of then cause they use promises async await too uses it but it looks cleaner
  //   });  cleaner way is axios library which is a promise based HTTP client for the browser and node.js. It makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It also supports the Promise API that is native to JS ES6+.
  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData(); //we made async new function and did not make the call back in use Effect cause it also returns promise and then we will need to fetch it
    //thats why and gethomedata will return a promise in use Effect there should be nothinf return or clean up functions only useEffect should not return anything or just cleanup function
    //whenver we use useEffect remember to create a new async function with a call back
  }, []); //to not run multiple times we use useEffect hook
  //shortcut of localhost:3000 for vite use server proxy at api so any request at api will be forwarded to that location
  return (
    <>
      <Header cart={cart} />
      <title>Ecommerce project</title>

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
