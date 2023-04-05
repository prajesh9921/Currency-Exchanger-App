import {createSlice} from '@reduxjs/toolkit';

const val = {from: 'Select', to: 'Select'}

export const CurrencySlice = createSlice({
    name: 'Currency',
    initialState: {value: val},
    reducers: {
      CurrencyData: (state, action) => {
        state.value = action.payload;
      },
    },
  });
  
  export const {CurrencyData} = CurrencySlice.actions;
  
  export default CurrencySlice.reducer;