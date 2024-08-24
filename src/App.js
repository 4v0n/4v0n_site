import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Aboutpage from "./Aboutpage";
import Projectspage from "./Projectspage";
import Contactpage from "./Contactpage";

function App() {
  return (
    <Router>
      <div className="text-white bg-background flex flex-col min-h-screen">
        <Navbar/>
        <div className="flex-grow overflow-y-auto p-8">
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/about" element={<Aboutpage/>} />
            <Route path="/projects" element={<Projectspage/>} />
            <Route path="/contact" element={<Contactpage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
