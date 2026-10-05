import { Header } from "../components/Header";
import "./OrdersPage.css";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { formatMoney } from "../utils/money";
export function OrdersPage({ cart }) {
  const [ordersDetail, setOrdersDetail] = useState(null);
  useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      setOrdersDetail(response.data);
    });
  }, []);
  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {ordersDetail &&
            ordersDetail.map((orderDetail) => {
              return (
                <>
                  <div key={orderDetail.id} className="order-container">
                    <div className="order-header">
                      <div className="order-header-left-section">
                        <div className="order-date">
                          <div className="order-header-label">
                            Order Placed:
                          </div>
                          <div>
                            {dayjs(orderDetail.orderTimeMs).format("MMMM D")}
                          </div>
                        </div>
                        <div className="order-total">
                          <div className="order-header-label">Total:</div>
                          <div>{formatMoney(orderDetail.totalCostCents)}</div>
                        </div>
                      </div>

                      <div className="order-header-right-section">
                        <div className="order-header-label">Order ID:</div>
                        <div>{orderDetail.id}</div>
                      </div>
                    </div>

                    <div className="order-details-grid">
                      {orderDetail.products.map((orderProduct) => {
                        let arriveString;
                        if (
                          dayjs().valueOf() >
                          orderProduct.estimatedDeliveryTimeMs
                        ) {
                          arriveString = `Arrived on:${dayjs(
                            orderProduct.estimatedDeliveryTimeMs,
                          ).format("MMMM D")}`;
                        } else {
                          arriveString = `Arriving on:${dayjs(
                            orderProduct.estimatedDeliveryTimeMs,
                          ).format("MMMM D")}`;
                        }
                        return (
                          <Fragment key={orderProduct.productId}>
                            {/* we cant use normal fragments here as each div will need its unique id than to combine we import fragment component from react */}
                            <div className="product-image-container">
                              <img src={orderProduct.product.image} />
                            </div>

                            <div className="product-details">
                              <div className="product-name">
                                {orderProduct.product.name}
                              </div>
                              <div className="product-delivery-date">
                                {arriveString}
                              </div>
                              <div className="product-quantity">
                                Quantity:{orderProduct.quantity}
                              </div>
                              <button className="buy-again-button button-primary">
                                <img
                                  className="buy-again-icon"
                                  src="images/icons/buy-again.png"
                                />
                                <span className="buy-again-message">
                                  Add to Cart
                                </span>
                              </button>
                            </div>

                            <div className="product-actions">
                              <a href="/tracking">
                                <button className="track-package-button button-secondary">
                                  Track package
                                </button>
                              </a>
                            </div>
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
