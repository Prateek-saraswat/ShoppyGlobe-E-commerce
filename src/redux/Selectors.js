
export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartItemCount = (state) => state.cart.cartItems.length;

export const selectTotalQuantity = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotal = (state) =>
  state.cart.cartItems
    .reduce((total, item) => {
      const discountedPrice =
        item.price - (item.price * item.discountPercentage) / 100;
      return total + discountedPrice * item.quantity;
    }, 0)
    .toFixed(2);


export const selectSearchQuery = (state) => state.search.query;