import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Landing from './pages/Landing';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
