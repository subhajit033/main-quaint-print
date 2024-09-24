export const getTotalCartValue = (cartItem) => {
  let total = 0;
  for (let i = 0; i < cartItem.length; i++) {
    total = total + cartItem[i].price * 1 * (cartItem[i].quantity * 1);
  }
  return total;
};
