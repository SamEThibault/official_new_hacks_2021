import { configureStore } from "@reduxjs/toolkit";
import orderSliceReducer from "../features/order/orderSlice";
import firestoreSliceReducer from "../features/firestore/firestoreSlice";
import receiptDataSliceReducer from "../features/receiptData/receiptDataSlice";
import checkoutSliceReducer from "../features/checkout/checkoutSlice";
export const store = configureStore({
  reducer: {
    order: orderSliceReducer,
    firestore: firestoreSliceReducer,
    receiptData: receiptDataSliceReducer,
    checkout: checkoutSliceReducer,
  },
});
