import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  newNote: false,
  allNotes: [],
};

const noteDataSlice = createSlice({
  name: "noteData",
  initialState,

  reducers: {
    //Authentication
    setEmail: (state, action)=>{
       state.email = action.payload;
    },
    setAllNotes:(state, action)=>{
       state.allNotes = action.payload;
    },
    setNewNote:(state,action)=>{
      state.newNote = action.payload;
    }
  },
});

export const {setEmail, setAllNotes, setNewNote} = noteDataSlice.actions;
export const selectNewNote = (state) =>state.noteData.newNote;
export const selectEmail = (state) => state.noteData.email;
export const selectAllNotes = (state) => state.noteData.allNotes;
export default noteDataSlice.reducer;