import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name:'member',
  initialState:{
    isLoggedIn:false
  },
  reducers:{
    toggleLogin:(state)=>{
      state.isLoggedIn = !state.isLoggedIn
    }
  }
})

export const { toggleLogin } = memberSlice.actions;
export default memberSlice.reducer;