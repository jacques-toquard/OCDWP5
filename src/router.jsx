import { Routes, Route } from "react-router";
import App from "./App";

import Home from "./pages/Home";
import Housing from "./pages/Housing";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="logement/:id" element={<Housing />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
