import { Routes, Route } from "react-router";
import EmployeePage from "./pages/EmployeePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/employee/:id" element={<EmployeePage />} />
    </Routes>
  );
}

export default App;
