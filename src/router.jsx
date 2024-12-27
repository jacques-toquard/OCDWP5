import { Routes, Route, Navigate } from 'react-router';
import App from './App';

import Home from './pages/Home';
import Housing from './pages/Housing';
import NotFound from './pages/NotFound';
import About from './pages/About';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="logement/:id" element={<Housing />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
};

export default Router;
