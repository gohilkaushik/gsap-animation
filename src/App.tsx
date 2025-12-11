import { BrowserRouter, Route, Routes } from "react-router-dom";
import TimeLineAnimation from "./page/TimeLineAnimation";
import SimpleAnimation from "./page/SimpleAnimation";
import Header from "./components/Header";
import ScrollAnimation from "./page/ScrollAnimation";
import CustomCursor from "./page/CustomCursor";
import Demo from "./page/Demo";
import Sidebar from "./page/Sidebar";
import ScrollSmoth from "./page/ScrollSmoth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<SimpleAnimation />} />
            <Route path="/timeline-animation" element={<TimeLineAnimation />} />
            <Route path="/scroll-animation" element={<ScrollAnimation />} />
            <Route path="/custom-cursor" element={<CustomCursor />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/scroll-smoth" element={<ScrollSmoth />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
