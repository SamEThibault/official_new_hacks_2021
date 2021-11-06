import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  
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

export default checkoutSlice.reducer;