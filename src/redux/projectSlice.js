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
  {
    id: 4,
    category: "Technical Writing",
    title: "Technical Blog Posts",
    description: "A comprehensive collection of technical blog posts covering statistics, machine learning, and software engineering topics. Mathematically rigorous content providing clear, practical insights for data scientists and software engineers.",
    techstacks: ["Markdown", "LaTeX", "Statistics", "Machine Learning", "Technical Writing"],
    link: "https://github.com/ioannismesionis/blogposts",
  },
  {
    id: 5,
    category: "Machine Learning",
    title: "Expected Value Framework",
    description: "Implementation of the Expected Value framework to maximise business impact of ML models. Moves beyond accuracy-based metrics by aligning model outputs with business objectives and accounting for asymmetric costs of prediction errors.",
    techstacks: ["Python", "Machine Learning", "Business Optimisation", "Decision Theory", "Scikit-learn"],
    link: "https://github.com/ioannismesionis/the-expected-value-framework",
  },
  {
    id: 6,
    category: "Algorithms",
    title: "LeetCode 30-Day Challenge",
    description: "Python implementations of algorithm and data structure problems from LeetCode's 30-day challenge. Solutions demonstrate algorithm design patterns, time and space complexity optimisation, and problem-solving approaches for technical interviews.",
    techstacks: ["Python", "Algorithms", "Data Structures", "Problem Solving", "Interview Preparation"],
    link: "https://github.com/ioannismesionis/LeetCode",
  },
  {
    id: 7,
    category: "MLOps",
    title: "MLOps Zoomcamp Assignment",
    description: "End-to-end MLOps pipeline for predicting used car prices, showcasing modern machine learning operations practices. Features automated workflow orchestration, experiment tracking, model versioning, and comprehensive monitoring.",
    techstacks: ["Python", "MLOps", "XGBoost", "MLflow", "Prefect", "Docker", "Evidently AI"],
    link: "https://github.com/ioannismesionis/mlops-zoomcamp-assignment",
  },
  {
    id: 8,
    category: "Machine Learning",
    title: "Multi-Armed Bandits & Thompson Sampling",
    description: "Comprehensive implementation and analysis of multi-armed bandit algorithms with focus on Thompson Sampling. Explores Bayesian approaches to solving exploration vs. exploitation problems with practical applications in web advertising and recommendation systems.",
    techstacks: ["Python", "Bayesian Statistics", "Thompson Sampling", "Multi-Armed Bandits", "Probabilistic Decision Making"],
    link: "https://github.com/ioannismesionis/mab-thompson-sampling",
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
