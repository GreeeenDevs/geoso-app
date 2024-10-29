import React from 'react';
import SearchSection from '../Components/Search/SearchSection';
import AltoContraste from '../Components/Acessibility/AltoContraste/AltoContraste';
// import DarkMode from '../Components/Acessibility/DarkMode/Darkmode';

function SearchPage() {
  return (
    <div className="flex flex-col">
      <main>
        <SearchSection />
        <AltoContraste />
        {/* <DarkMode /> */}
      </main>
    </div>
  );
}

export default SearchPage;