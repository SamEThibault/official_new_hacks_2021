import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTotal: "",
  newSubTotal: "0.00",
  discountAmount: "0.00",
  newTotal: "0.00",
  showDiscounts: false,
  suggestedReceipts: [],
  checkoutReceipt: {},
  printReady: true,
  isSearching: false,
  phoneNumEntry: "",
  change: "$0.00",
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,

  reducers: {
    // Totals
    setCurrentTotal: (state, action) => {
      state.currentTotal = action.payload;
    },
    setNewSubTotal: (state, action) => {
      state.newSubTotal = action.payload;
    },
    setDiscountAmount: (state, action) => {
      state.discountAmount = action.payload;
    },
    setNewTotal: (state, action) => {
      state.newTotal = action.payload;
    },
    //CheckoutReceipt State
    setCheckoutReceipt: (state, action) => {
      state.checkoutReceipt = action.payload;
    },
    setCheckoutDiscount: (state, action) => {
      state.checkoutReceipt.discount = action.payload;
    },
    setPrintReady: (state, action) => {
      state.printReady = action.payload;
    },
    setSuggestedReceipts: (state, action) => {
      state.suggestedReceipts = action.payload;
    },
    setIsSearching: (state, action) => {
      state.isSearching = action.payload;
    },
    setPhoneNumEntry: (state, action) => {
      state.phoneNumEntry = action.payload;
    }, 
    setChange: (state, action) => {
      state.change = action.payload;
    },
    setSuggestedDiscount: (state, action)=>{
      state.suggestedReceipts[action.payload.index].discount = action.payload.isDiscounted;
    }
  },
});

export const {setSuggestedDiscount,setChange, setPhoneNumEntry, setIsSearching, setSuggestedReceipts, setNewSubTotal, setDiscountAmount, setNewTotal, setCurrentTotal, setCheckoutDiscount, setCheckoutReceipt, setPrintReady } = checkoutSlice.actions;
export const selectNewSubTotal = (state) => state.checkout.newSubTotal;
export const selectDiscountAmount = (state) => state.checkout.discountAmount;
export const selectGrandTotal = (state) => state.checkout.grandTotal;
export const selectNewTotal = (state) => state.checkout.newTotal;
export const selectCurrentTotal = (state) => state.checkout.currentTotal;
export const selectShowDiscounts = (state) => state.checkout.showDiscounts;
export const selectCheckoutReceipt = (state) => state.checkout.checkoutReceipt;
export const selectPrintReady = (state) => state.checkout.printReady;
export const selectSuggestedReceipts = (state) => state.checkout.suggestedReceipts;
export const selectIsSearching = (state) => state.checkout.isSearching;
export const selectPhoneNumEntry = (state) => state.checkout.phoneNumEntry;
export const selectChange = (state) => state.checkout.change;
export default checkoutSlice.reducer;