import { createLogic } from "redux-logic";
import { requestListBooksSuccess, REQUEST_LIST_BOOKS, setLoading } from ".";

const API_URL = "https://www.googleapis.com/books/v1";

export const handleRequestListBooks = () => {
  return createLogic({
    type: REQUEST_LIST_BOOKS,
    process({ action: { payload } }, dispatch, done) {
      dispatch(setLoading(true));
      fetch(`${API_URL}/volumes?q=${payload}?maxResults=40"}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch(requestListBooksSuccess({ list: res }));
          return dispatch(setLoading(false));
        })
        .catch((err) => {
          console.log("err", err);
          alert('Erro ao carregar')
          return dispatch(setLoading(false));
        })
        .finally(done);
    },
  });
};

const configureBooksLogics = () => {
  return [handleRequestListBooks()];
};

export default configureBooksLogics;
