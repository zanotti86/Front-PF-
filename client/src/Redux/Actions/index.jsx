import axios from "axios";
import {
  GET_ALL_PRODUCTS,
  FILTER_PRICE,
  FILTER_DISCOUNT,
  FILTER_MODEL,
  FILTER_SEXO,
  SEARCH_PRODUCTS,
  DETAIL_PRODUCTS,
  SHOPPING_CART,
  REMOVE_CARD,
  FAVORITE,
  REMOVE_FAVORITE,
  POST_REG_USER,
  GET_COLLECTIONS,
  POST_REVIEW,
  GET_REVIEW,
  GET_ALL_USERS,
} from "./actionTypes";

export function getAllProducts() {
  return async function (dispatch) {
    try {
      let res = await axios("http://localhost:3001/products");

      return dispatch({ type: GET_ALL_PRODUCTS, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterPrice(payload) {
  return {
    type: FILTER_PRICE,
    payload,
  };
}

export function filterDiscount(payload) {
  return {
    type: FILTER_DISCOUNT,
    payload,
  };
}

export function filterModel(collection) {
  return async function (dispatch) {
    try {
      let res = await axios(
        `http://localhost:3001/categories/collection/?collection=${collection}`
      );

      return dispatch({ type: FILTER_MODEL, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterSexo(gender) {
  return async function (dispatch) {
    try {
      let res = await axios(`http://localhost:3001/categories/gender/?gender=${gender}`);

      return dispatch({ type: FILTER_SEXO, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchProducts(name) {
  try {
    return async function (dispatch) {
      let res = await axios(`http://localhost:3001/products/?name=${name}`);
      return dispatch({ type: SEARCH_PRODUCTS, payload: res.data });
    };
  } catch (error) {
    console.log(error);
  }
}

export const detailProducts = id => {
  try {
    return async dispatch => {
      let res = await axios(`http://localhost:3001/products/${id}`);
      return dispatch({
        type: DETAIL_PRODUCTS,
        payload: res.data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const shoppingCart = id => {
  try {
    return async dispatch => {
      let res = await axios(`http://localhost:3001/products/${id}`);
      return dispatch({
        type: SHOPPING_CART,
        payload: res.data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const removeCard = id => {
  return {
    type: REMOVE_CARD,
    payload: id,
  };
};

export const favorite = id => {
  try {
    return async dispatch => {
      let res = await axios(`http://localhost:3001/products/${id}`);
      return dispatch({
        type: FAVORITE,
        payload: res.data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const removeFavorite = id => {
  return {
    type: REMOVE_FAVORITE,
    payload: id,
  };
};

export const postCreateUser = payload => {
  try {
    return async () => {
      let res = await axios.post(`http://localhost:3001/createUser`, payload);
      return res;
    };
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = payload => {
  try {
    return async () => {
      let res = await axios.post(`http://localhost:3001/createProduct`, payload);
      return res;
    };
  } catch (error) {
    console.error(error);
  }
};

export const getCollection = payload => {
  try {
    return async dispatch => {
      let res = await axios(`http://localhost:3001/categories`);
      return dispatch({
        type: GET_COLLECTIONS,
        payload: res.data,
      });
    };
  } catch (error) {
    console.error(error);
  }
};

export const postReview = payload => {
  try {
    return async (dispatch) => {
      let res = await axios.post(`http://localhost:3001/reviews`, payload);
      return dispatch({ type: POST_REVIEW, payload: res.data });
    };
  } catch (error) {
    console.error(error);
  }
};

export const getReview = id => {
  try {
    return async dispatch => {
      let res = await axios(`http://localhost:3001/reviews?id=${id}`);
      return dispatch({
        type: GET_REVIEW,

export const getAllUsers = payload => {
  try {
    return async dispatch => {
      let res = await axios(`http://localhost:3001/getAllUsers`);
      return dispatch({
        type: GET_ALL_USERS,
        
        payload: res.data,
      });
    };
  } catch (error) {
    console.error(error);
  }

export const modifyUser = payload => {
  try {
    return async () => {
      let res = await axios.post(`http://localhost:3001/updateUser`, payload);
      return res;
    };
  } catch (error) {
    console.error(error);
  }
};
