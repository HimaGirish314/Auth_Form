import { Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home/ >}  />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
