/**
 * @author
 * @function CartItem
 **/

export const CartItem = ({ item, removeItem, updateItemQuantity }) => {
  const { image, price, quantity, itemTotal, id, title, name } = item;

  return (
    <>
      <div class="container">
        <div class="summary_card">
          <div class="card_item">
            <div class="product_img">
              <img src={image} alt="product-img" />
            </div>
            <div class="product_info">
              <h1>{name}</h1>
              <p className="truncate">{title}</p>
              <hr />
              <div class="close-btn">
                <button
                  class="btn waves-light #ffcdd2 red lighten-4 red-text"
                  onClick={() => removeItem(id)}
                >
                  Remove
                  <i class="material-icons right">close</i>
                </button>
              </div>
              <div class="product_rate_info">
                <h1>
                  ${price}+{quantity}={itemTotal}
                </h1>
                <span
                  onClick={() => updateItemQuantity(id, item.quantity - 1)}
                  class="pqt-minus"
                >
                  -
                </span>
                <span class="pqt">{quantity}</span>
                <span
                  onClick={() => updateItemQuantity(id, item.quantity + 1)}
                  class="pqt-plus"
                >
                  +
                </span>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
