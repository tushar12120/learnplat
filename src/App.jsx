import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import LevelContainer from './components/LevelContainer';
import { curriculum } from './modules/curriculum';

function App() {
  const [activeLevel, setActiveLevel] = useState(1);

  const handleNavigate = (level) => {
    setActiveLevel(level);
  };

  const currentLevelData = curriculum[activeLevel];

  return (
    <Layout activeLevel={activeLevel} onNavigate={handleNavigate}>
      <div className="container" style={{ paddingBottom: '4rem' }}>
        {currentLevelData ? (
          <LevelContainer data={currentLevelData} />
        ) : (
          <div className="card">
            <h1 className="text-4xl mb-4">Level Not Found</h1>
            <p>This level is coming soon!</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default App;
