import React, { useEffect, useState } from "react";
import "./Order.css";
import axios from "axios";

const Order = ({ url }) => {
  const [data, setData] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setData(response.data.data);
      console.log(response.data.data);
    } else {
      alert("Error");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {data.map((order, index) => (
          <div className="order-item">
            <p>
              {order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return (
                    <>
                      <img src={url + "/images/" + item.image} />
                      <p>{item.name + " x " + item.quantity}</p>
                      <p>₹{item.price}</p>
                    </>
                  );
                } else {
                  return item.name + " x " + item.quantity;
                }
              })}
            </p>
            <div className="first-last">
              <p>{order.address.firstName}</p>
              <p>{order.address.lastName}</p>
            </div>
            <div>
              <p>{order.address.address}</p>
              <p>
                {order.address.city}-{order.address.zipcode}
              </p>
              <p>Phone:{order.address.phone}</p>
            </div>
            <div>
              <p>{order.address.email}</p>
              <p>{order.address.contry}</p>
            </div>

            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
            >
              <option value="Processing This Items">
                Processing This Items
              </option>
              <option value="Shipping This Items">Shipping This Items</option>
              <option value="Out For delivery This Product">
                Out For delivery This Product
              </option>
              <option value="Delivery This Product">
                Delivery This Product
              </option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
