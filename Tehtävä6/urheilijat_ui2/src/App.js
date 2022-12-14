import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Urheilijatiedot from "./components/Urheilijatiedot";
import Ylatunniste from "./components/Ylatunniste";
import Tietoa from "./components/pages/Tietoa";
import LisaaUrheiljatieto from "./components/LisaaUrheiljatieto";
import MuokkaaUrheiljatieto from "./components/MuokkaaUrheiljatieto";
import "bootstrap/dist/css/bootstrap.min.css";

import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router>
        <div className="App">
          <Ylatunniste />
          <div className="container">
            <Routes>
              <Route path="/" element={<Urheilijatiedot />} />
              <Route
                path="/puhelintieto/lisaa"
                element={<LisaaUrheiljatieto />}
              />
              <Route
                path="/puhelintieto/muokkaa/:id"
                element={<MuokkaaUrheiljatieto />}
              />
              <Route path="/tietoa" element={<Tietoa />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
