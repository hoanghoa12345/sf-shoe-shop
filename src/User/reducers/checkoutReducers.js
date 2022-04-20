import { CHECKOUT_CREATE } from "../constants/checkoutConstants";

const createCheckoutReducer = (
  state = {
    checkoutItems: [],
  },
  action
) => {
  switch (action.type) {
    case CHECKOUT_CREATE:
      const item = action.payload;
      return {
        checkoutItems: [...state.checkoutItems, item],
      };

    default:
      return state;
  }
};

export { createCheckoutReducer };
