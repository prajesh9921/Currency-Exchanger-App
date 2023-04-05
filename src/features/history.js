import {createSlice} from '@reduxjs/toolkit';

export const HistorySlice = createSlice({
    name: 'History',
    initialState: {value: []},
    reducers: {
      loadData: (state, action) => {
        state.value.push(action.payload);
      },
    },
  });
  
  export const {loadData} = HistorySlice.actions;
  
  export default HistorySlice.reducer;