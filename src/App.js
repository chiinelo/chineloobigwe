
import Header from "./pages/Header";
// import Home from "./Home";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Route index element={<Home />}></Route>
      </BrowserRouter> */}
      <Navbar />
      <Header />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
