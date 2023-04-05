import {createSlice} from '@reduxjs/toolkit';

const values = {"amt": "25", "from": "AFN", "rate": 28.399257, "result": 1959.548733, "to": "ARS"}

export const DataSlice = createSlice({
    name: 'Data',
    initialState: {value: values},
    reducers: {
      setData: (state, action) => {
        state.value = action.payload;
      },
    },
  });
  
  export const {setData} = DataSlice.actions;
  
  export default DataSlice.reducer;