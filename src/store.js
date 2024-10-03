import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
};

const presistdReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: presistdReducer,
});

const persistor = persistStore(store);

export { store, persistor };
