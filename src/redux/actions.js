import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getDetails = createAsyncThunk("covid/getDetails", async (iso) => {
  const res = await api.get("/provinces", {
    params: { iso: iso },
  });

  return res.data?.data[0];
});
