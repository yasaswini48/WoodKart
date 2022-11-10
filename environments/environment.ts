
//If u dont give http in URL it is showing cross origin error
export const environment = {
  production: false,
  productsApi:"http://localhost:8000/products",
  updateProductsApi:"http://localhost:8000/updateProductById",
  getProductByIdApi:"http://localhost:8000/getProductById",
  usersApi:"http://localhost:8000/users",
  usersAddToCartApi:"http://localhost:8000/users/addToCart",
  usersRemoveFromCartApi:"http://localhost:8000/users/removeFromCart",
  usersClearCartApi:"http://localhost:8000/users/clearCart",
  usersAllOrdersApi:"http://localhost:8000/users/getAllOrders",
  ordersApi:"http://localhost:8000/users/getOrderById"
};

