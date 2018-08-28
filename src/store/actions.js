import { push } from "connected-react-router";

export const signIn = () => dispatch => {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log("Go!");
      dispatch(push("/profile"));
    }, 3000)
  );
};
