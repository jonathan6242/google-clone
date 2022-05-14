import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { GoogleProvider } from "./context/GoogleContext";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <GoogleProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<SearchPage />} />
          </Routes>
        </div>
      </Router>
    </GoogleProvider>
  );
}

export default App;
