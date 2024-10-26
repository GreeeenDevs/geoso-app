import React from 'react';
import SearchSection from './search/SearchSection';
import DarkMode from './darkmode/Darkmode';

function SerachPage() {
  return (
    <div className="flex flex-col">
      <main>
        <SearchSection />
        <DarkMode />
      </main>
    </div>
  );
}

export default SerachPage;