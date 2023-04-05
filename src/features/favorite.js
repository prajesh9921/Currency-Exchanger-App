import {createSlice} from '@reduxjs/toolkit';

const data = [
]

export const FavSlice = createSlice({
    name: 'Favorite',
    initialState: {value: data},
    reducers: {
      floadData: (state, action) => {
        state.value.push(action.payload);
      },
    },
  });
  
  export const {floadData} = FavSlice.actions;
  
  export default FavSlice.reducer;