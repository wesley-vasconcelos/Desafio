import { createLogic } from "redux-logic";
import { requestListBooksSuccess, REQUEST_LIST_BOOKS } from ".";

const API_URL = "https://www.googleapis.com/books/v1";

export const handleRequestListBooks = () => {
  return createLogic({
    type: REQUEST_LIST_BOOKS,
    process(_, dispatch, done) {
      console.log("init");
      fetch(`${API_URL}/volumes?q=subject:*`)
        .then((res) => res.json())
        .then((res) => {
          dispatch(requestListBooksSuccess({ list: res }));
        })
        .catch((err) => {
          console.log("err", err);
        })
        .finally(done);
    },
  });
};

const configureBooksLogics = () => {
  return [handleRequestListBooks()];
};

export default configureBooksLogics;
