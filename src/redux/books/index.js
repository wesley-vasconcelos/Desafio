import { array } from "prop-types";
import { createActions, handleActions } from "redux-actions";

export const REQUEST_LIST_BOOKS = "REQUEST_LIST_BOOKS";
export const REQUEST_LIST_BOOKS_SUCCESS = "REQUEST_LIST_BOOKS_SUCCESS";

export const { requestListBooks, requestListBooksSuccess } = createActions({
  [REQUEST_LIST_BOOKS]: (text) => text,
  [REQUEST_LIST_BOOKS_SUCCESS]: ({ list }) => ({ list }),
});

export const HANDLE_FAVORITES = "HANDLE_FAVORITES";

export const { handleFavorites } = createActions({
  [HANDLE_FAVORITES]: (id) => ({ id }),
});

export const SET_LOADING = "SET_LOADING";

export const { setLoading } = createActions({
  [SET_LOADING]: (boolean) => boolean,
});

export const INITIAL_STATE = {
  list: [],
  favorites: [],
  loading: false,
};

const reducer = handleActions(
  {
    [REQUEST_LIST_BOOKS_SUCCESS]: (
      state,
      {
        payload: {
          list: { items },
        },
      }
    ) => {
      console.log(items)
      return {
        ...state,
        list: items,
      };
    },
    [SET_LOADING]: (state, { payload }) => {
      return {
        ...state,
        loading: payload,
      };
    },
    [HANDLE_FAVORITES]: (state, { payload: { id } }) => {
      if (!!state.favorites.find((i) => i === id)) {
        return {
          ...state,
          favorites: state.favorites.map((i) => i !== id && i),
        };
      } else {
        return {
          ...state,
          favorites: [...state.favorites, id],
        };
      }
    },
  },

  INITIAL_STATE
);

export default reducer;
