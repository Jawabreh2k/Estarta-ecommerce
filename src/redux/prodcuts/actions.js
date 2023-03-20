import * as PRODUCTS_CONSTANTS from "./constants";

export const fetchProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCTS_CONSTANTS.PRODUCTS_LOADING,
  });

  try {
    const response = await fetch(
      "https://run.mocky.io/v3/ebee18cb-838a-440f-bf61-e406587748a2"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    dispatch({
      type: PRODUCTS_CONSTANTS.FETCH_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_CONSTANTS.PRODUCTS_ERROR,
      payload: error.message,
    });
  }
};
