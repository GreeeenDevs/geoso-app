import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './HomePage';
import Services from './ServicesPage';
import SearchServices from './SearchPage';
import FAQ from './QuestionsPage';
import About from './AboutPage';
import { RegistrationForm } from'./RegistroPage';
import { LoginForm } from './LoginPage';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/pesquisa" element={<SearchServices />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/registro" element={<RegistrationForm/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;