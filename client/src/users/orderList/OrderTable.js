import { useQuery } from "@apollo/client";
import React from "react";
import { GET_USER_ORDER } from "../../gqlOperation/Query";
import "./orderTable.css";
/**
 * @author
 * @function OrderTable
 **/

export const OrderTable = (props) => {
  const { loading, error, data } = useQuery(GET_USER_ORDER);
console.log(data);
  console.log(data?.getBasket[0].product);
  if (loading) {
    return (
      <h3 className=" card-panel cyan-text center-align">
        Product are loading...
      </h3>
    );
  }
  if (error) {
    return <h3 className=" card-panel red-text cyan-text">{error.message}</h3>;
  }
  return (
    <div>
      <div class="container">
        <h2 class="cyan-text">Collection of order Product</h2>
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">product</div>
            <div class="col col-2">Product tile</div>
            <div class="col col-3">Amount</div>
            <div class="col col-4">Status</div>
          </li>
          {data?.getBasket.map((item) => {
      
            return (
              <li class="table-row">
                <div class="col col-1" data-label="Job Id">
                  <img src={item?.product.image} alt="" />
                </div>
                <div class="col col-2" data-label="Customer Name">
                  <span>{item.product.title}</span>
                </div>
                <div class="col col-3" data-label="Amount">
                  ${item.price}
                </div>
                <div class="col col-4" data-label="Payment Status">
                  Pending
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
