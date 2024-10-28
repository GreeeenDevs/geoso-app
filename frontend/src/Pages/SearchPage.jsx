import React from 'react';
import SearchSection from '../Components/Search/SearchSection';
import DarkMode from '../Components/Acessibility/DarkMode/Darkmode';

function SearchPage() {
  return (
    <div className="flex flex-col">
      <main>
        <SearchSection />
        <DarkMode />
      </main>
    </div>
  );
}

export default SearchPage;