import products from "../menuData.json";
import recipes from "../recipesData.json";

const initialState = {
  cartProducts: [],
  totalPriceInCart: 0,
  allProducts: products,
  allRecipes: recipes,
  wishlist: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART": {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.name === payload.name
      );
      let newCartProducts;
      if (productIndex <= -1) {
        newCartProducts = [...state.cartProducts, { ...payload, quantity: 1 }];
      } else {
        newCartProducts = state.cartProducts.map((product, index) => {
          if (index === productIndex) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
      }
      return {
        ...state,
        cartProducts: newCartProducts,
        totalPriceInCart: state.totalPriceInCart + payload.price,
      };
    }
    case "REMOVE_FROM_CART": {
      let newCartProducts = [...state.cartProducts];
      newCartProducts = state.cartProducts.filter(
        (product) => product.name !== payload.name
      );
      let newTotalPriceInCart = newCartProducts.reduce(
        (price, product) => price + product.price * product.quantity,
        0
      );
      return {
        ...state,
        cartProducts: newCartProducts,
        totalPriceInCart: newTotalPriceInCart,
      };
    }
    case "INCREASE_PRODUCT": {
      let newTotalPriceInCart = 0;
      let newCartProducts = state.cartProducts.map((product) => {
        if (product.name === payload.name) {
          let updatedProduct = { ...product, quantity: product.quantity + 1 };
          newTotalPriceInCart += updatedProduct.price * updatedProduct.quantity;
          return updatedProduct;
        } else {
          newTotalPriceInCart += product.price * product.quantity;
          return product;
        }
      });
      return {
        ...state,
        cartProducts: newCartProducts,
        totalPriceInCart: newTotalPriceInCart,
      };
    }
    case "DECREASE_PRODUCT": {
      if (payload.quantity > 1) {
        let newTotalPriceInCart = 0;
        let newCartProducts = state.cartProducts.map((product) => {
          if (product.name === payload.name) {
            let updatedProduct = { ...product, quantity: product.quantity - 1 };
            newTotalPriceInCart +=
              updatedProduct.price * updatedProduct.quantity;
            return updatedProduct;
          } else {
            newTotalPriceInCart += product.price * product.quantity;
            return product;
          }
        });
        return {
          ...state,
          cartProducts: newCartProducts,
          totalPriceInCart: newTotalPriceInCart,
        };
      } else {
        return state;
      }
    }
    case "ADD_TO_WISHLIST": {
      return {
        ...state,
        wishlist: state.wishlist.concat(payload),
      };
    }
    case "REMOVE_FROM_WISHLIST": {
      const newWishlist = state.wishlist.filter(
        (recipe) => recipe.title !== payload.title
      );
      return {
        ...state,
        wishlist: newWishlist,
      };
    }
    default:
      return state;
  }
};

export default reducer;
