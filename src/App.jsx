import { useLocation } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Academics from './pages/Academics';
import Facilities from './pages/Facilities';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminEvents from './pages/AdminEvents';
import AdminGallery from "./pages/AdminGallery";

function App() {

  const location = useLocation();

  const hideHeaderFooterRoutes = ['/login', '/admin/events','/admin/gallery'];

  const shouldHide = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHide && <Header />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/academics' element={<Academics />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/login' element={<Login />} />
        <Route path='/admin/events' element={<AdminEvents />} />
        <Route path='/admin/gallery' element={<AdminGallery />} />

      </Routes>

      {!shouldHide && <Footer />}
    </>
  );
}

export default App;
