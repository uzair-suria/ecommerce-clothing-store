import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
