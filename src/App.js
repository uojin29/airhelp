import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import DepartBookingPage from './pages/DepartBookingPage';
import ArrivBookingPage from './pages/ArrivBookingPage';

 function App() {
     return <Router>
         <Routes>
             <Route path="/" element={<HomePage />} />
             <Route path="/About" element={<AboutPage />} />
             <Route path='/Booking' element={<BookingPage/>} />
             <Route path='/DepartBooking' element={<DepartBookingPage/>} />
             <Route path='/ArrivBooking' element={<ArrivBookingPage/>} />
         </Routes>
     </Router>;
};

export default App;
