import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  page: number,
  type: string,
  tag: string,
  search: string,
  location: string,
  searched: boolean,
}

const initialState: FilterState = {
  page: 1,
  type: '',
  tag: '',
  search: '',
  location: '',
  searched: false,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setTag: (state, action: PayloadAction<string>) => {
      state.tag = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setSearched: (state, action: PayloadAction<boolean>) => {
      state.searched = action.payload;
    },

  }
})

export const { setPage, setLocation, setSearch, setTag, setType, setSearched } = filterSlice.actions;

export default filterSlice.reducer;