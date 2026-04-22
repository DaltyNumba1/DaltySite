import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './routes/Home';
import Portfolio from './routes/Portfolio';
import ProjectPage from './routes/ProjectPage';
import Art from './routes/Art';
import About from './routes/About';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<ProjectPage />} />
        <Route path="/art" element={<Art />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
