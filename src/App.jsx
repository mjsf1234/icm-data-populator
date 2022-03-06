import React from "react";
import { Route, Routes } from "react-router";
import AppNavbar from "./components/AppPageComponents/AppNavbar";
import Sidebar from "./components/AppPageComponents/Sidebar";
import { routes } from "./constants/routes";
import HomePage from "./pages/HomePage";
import KeywordsBenchmarkingPage from "./pages/KeywordsBenchmarkingPage";

const App = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <AppNavbar />

      <div className="dashboard-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path={routes.keywordBenchmarking}
            element={<KeywordsBenchmarkingPage />}
          />
        </Routes>
      </div>
      <div className="dashboard-footer">
        &copy; InnoventSoft {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default App;
