import React from "react";

/**
 * @author
 * @function CartItem
 **/

export const CartItem = ({ item, removeItem, updateItemQuantity }) => {
  const { img, price, quantity, itemTotal, id } = item;
  console.log(item);
  return (
    <>
      <div class="card-content white-text">
        <img src={img} alt="product_image" />
        <span class="card-title truncate">this is Title</span>
        <div class="input-group plus-minus-input">
          <div class="input-group-button">
            <button
              type="button"
              class="button  hollow circle"
              data-quantity="minus"
              data-field="quantity"
              onClick={() => updateItemQuantity(id, item.quantity - 1)}
            >
          
              <i class="material-icons">remove</i>
            </button>
          </div>
          <input
            class="input-group-field"
            type="number"
            name="quantity"
            value={quantity}
          />
          <div class="input-group-button">
            <button
              onClick={() => updateItemQuantity(id, item.quantity + 1)}
              type="button"
              class="button hollow circle"
              data-quantity="plus"
              data-field={quantity}
            >
              <i class="material-icons">add</i>
            </button>
          </div>
        </div>
        <p>
          Price-$ {price}+{quantity}={itemTotal}
        </p>
        <button onClick={() => removeItem(id)} class="btn-floating black">
          <i class="material-icons red-text">delete</i>
        </button>
      </div>
    </>
  );
};
