import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  bioNotes: [],
  calcNotes: [],
  chemNotes: [],
  econNotes: [],
  histNotes: [],
  physNotes: [],
};

const noteDataSlice = createSlice({
  name: "noteData",
  initialState,

  reducers: {
    //Authentication
    setEmail: (state, action)=>{
       state.email = action.payload;
    },
    // Set Subject Topic Notes
    setBioNotes: (state, action) => {
       state.bioNotes= action.payload;
    },
    setCalcNotes: (state, action) => {
       state.calcNotes= action.payload;
    },
    setChemNotes: (state, action) => {
       state.bioNotes= action.payload;
    },
    setEconNotes: (state, action) => {
       state.bioNotes= action.payload;
    },
    setHistNotes: (state, action) => {
       state.bioNotes= action.payload;
    },
    setPhysNotes: (state, action) => {
       state.bioNotes= action.payload;
    },
    
  },
});

export const {setBioNotes, setCalcNotes, setChemNotes, setEconNotes, setHistNotes, setPhysNotes, setEmail} = noteDataSlice.actions;
export const selectEmail = (state) => state.noteData.email;
export const selectBioNotes = (state) => state.noteData.bioNotes;
export const selectCalcNotes = (state) => state.noteData.calcNotes;
export const selectChemNotes = (state) => state.noteData.chemNotes;
export const selectEconNotes = (state) => state.noteData.econNotes;
export const selectHistNotes = (state) => state.noteData.histNotes;
export const selectPhysNotes = (state) => state.noteData.physNotes;

export default noteDataSlice.reducer;