import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";
const initialState = {
  isLoggedIn: false,
  userData: {},
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
      console.log(state.isLoggedIn, "isloggedin");
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
      console.log(state.userData);
    },
  },
});

const { setIsLoggedIn, setUserData } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export function useStore() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  return {
    isLoggedIn,
    setIsLoggedIn: (action) => dispatch(setIsLoggedIn(action)),
    setUserData: (action) => dispatch(setUserData(action)),
  };
}

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
