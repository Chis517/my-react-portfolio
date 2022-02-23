import React, { useState } from 'react';
import NavBar from './NavBar';
import Resume from './pages/Resume';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Socials from './Socials';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Socials />
    </div>
  );
}
