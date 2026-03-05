
export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartItemCount = (state) => state.cart.cartItems.length;

export const selectTotalQuantity = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotal = (state) =>
  state.cart.cartItems
    .reduce((total, item) => {
      
      return total + item.price * item.quantity;
    }, 0)
    .toFixed(2);


export const selectSearchQuery = (state) => state.search.query;