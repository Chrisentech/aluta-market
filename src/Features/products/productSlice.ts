import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useApi from "../../Shared/Hooks/useApi";
import { alertFailed, alertSuccess } from "../alert/alertSlice";
import axios from "axios";

// Helper function to make API request
const fetchProducts = async () => {
  try {
    const response:any = await axios({
      url: "https://course-api.com/react-useReducer-cart-project",
      method: "GET",
    });
    return response.data;
  } catch (error:any) {
    throw new Error(error.message);
  }
};

const fetchAllProducts = createAsyncThunk(
  "api/fetchAllProducts",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const data = await fetchProducts();
      dispatch(alertSuccess(data.message));
      return data
    } catch (error:any) {
      dispatch(alertFailed(error.message));
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state:any, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export { fetchAllProducts };
export default productSlice.reducer;
