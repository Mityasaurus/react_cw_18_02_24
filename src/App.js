import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
