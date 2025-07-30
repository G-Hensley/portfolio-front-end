import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import './styles/globals.css';
import './components/coreComponents/Background';
import Background from "./components/coreComponents/Background";

function App() {

  return (
    <Router basename="/">
      <Background />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  )
}

export default App
