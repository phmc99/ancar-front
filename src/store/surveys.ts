/* eslint-disable comma-dangle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../services';
import { ISurveyResponse } from '../types';

interface SurveyState {
  loading: boolean;
  data: ISurveyResponse | null;
  error: string | undefined;
}

const initialState: SurveyState = {
  loading: false,
  data: null,
  error: '',
};

export const getSurveys = createAsyncThunk(
  'survey/getSurveys',
  (endpoint: string) => {
    return api.get(endpoint).then(res => {
      return res.data;
    });
  }
);

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSurveys.pending, state => {
      state.loading = true;
    });
    builder.addCase(getSurveys.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getSurveys.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message;
    });
  },
});

export default surveySlice.reducer;
