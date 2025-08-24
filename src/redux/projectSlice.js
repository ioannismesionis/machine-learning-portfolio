// src/redux/projectSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Static project data
const staticProjects = [
  {
    id: 1,
    category: "Machine Learning",
    title: "MovieLens 100k Recommender Systems",
    description: "Implementation of various recommender system algorithms including collaborative filtering, matrix factorization, and content-based filtering using the MovieLens 100k dataset. Comprehensive evaluation and comparison of different approaches.",
    techstacks: ["Python", "Recommender Systems", "Collaborative Filtering", "Content-based Recommenders"],
    link: "https://github.com/ioannismesionis/movielens-100k-recommender-systems",
  },
  {
    id: 2,
    category: "Explainable AI",
    title: "Counterfactual Explanations",
    description: "Research project exploring counterfactual explanation methods for machine learning models. Implements algorithms to generate actionable explanations that help understand model decisions and improve model transparency.",
    techstacks: ["Python", "Machine Learning", "XAI", "Research", "Model Interpretability"],
    link: "https://github.com/ioannismesionis/counterfactual-explanations",
  },
  {
    id: 3,
    category: "MLOps",
    title: "Model Decay Monitor",
    description: "MLOps tool for monitoring machine learning model performance degradation over time. Tracks model drift, data drift, and performance metrics to ensure models maintain their effectiveness in production environments.",
    techstacks: ["Python", "MLOps", "Model Monitoring", "Data Drift", "Performance Tracking"],
    link: "https://github.com/ioannismesionis/model-decay-monitor",
  },
];

// Async thunk to fetch projects
export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return staticProjects;
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
