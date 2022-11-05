import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import {
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import authReducer from "./authSlice";

// import { persistStore } from "redux-persist";

// const persistConfig = {
//   key: "auth",
//   storage,
// };

const rootReducer = combineReducers({
  auth: authReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
});

// export const persistor = persistStore(store);

export const resetStore = async () => {
  // await persistor.purge();
  // await persistor.flush();
};
