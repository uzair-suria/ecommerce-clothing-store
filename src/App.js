import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
