import "./HomePage.css";
import { Header } from "../components/Header";
import { formatMoney } from "../utils/money";
import axios from "axios";
import { useEffect, useState } from "react";
export function HomePage({ cart }) {
  //fetch is a asynchronous function ,these function doesnt run right away so we gotta wait for them to finish first before we can use the data that they return. so we need to use async await to wait for the data to be fetched before we can use it.
  //fetch is used to make a request to a server and get data back from it. In this case, we are making a request to our backend server to get the list of products. The fetch function returns a promise that resolves to the response of the request. We can use the .then() method to handle the response and extract the data we need from it. In this case, we are using the .json() method to parse the response as JSON and get the list of products.
  const [products, setProducts] = useState([]);

  // fetch("http://localhost:3000/api/products").then((response) => {
  //   //response.json() is a method that parses the response body as JSON and returns a promise that resolves to the parsed data. In this case, we are using it to get the list of products from the response.it is also a asynchronous function so we need to use await to wait for it to finish before we can use the data that it returns.
  //   return response.json()
  // }).then((data) => {
  //     console.log(data);
  //   });  cleaner way is axios library which is a promise based HTTP client for the browser and node.js. It makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It also supports the Promise API that is native to JS ES6+.
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []); //to not run multiple times we use useEffect hook
  //shortcut of localhost:3000 for vite use server proxy at api so any request at api will be forwarded to that location
  return (
    <>
      <Header cart={cart} />
      <title>Ecommerce project</title>

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image" src={product.image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                  />
                  <div className="product-rating-count link-primary">127</div>
                </div>

                <div className="product-price">
                  {formatMoney(product.priceCents)}
                </div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src="images/icons/checkmark.png" />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
