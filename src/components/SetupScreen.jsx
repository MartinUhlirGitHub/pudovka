import { useState } from 'react';

const SetupScreen = ({ onStart }) => {
  const [players, setPlayers] = useState(['Hráč 1', 'Hráč 2']);
  const [targetScore, setTargetScore] = useState(100);
  const [newName, setNewName] = useState('');

  const handleAddPlayer = (e) => {
    e.preventDefault();
    if (newName.trim() !== '') {
      setPlayers([...players, newName.trim()]);
      setNewName('');
    }
  };

  const handleRemovePlayer = (index) => {
    setPlayers(players.filter((_, i) => i !== index));
  };

  const handleStart = () => {
    if (players.length >= 2) {
      onStart(players, targetScore);
    } else {
      alert("Pro hru jsou potřeba alespoň 2 hráči.");
    }
  };

  return (
    <div className="setup-screen card">
      <h1 className="title">Vědomostní Risk</h1>
      
      <div className="settings-section">
        <h2>Nastavení hry</h2>
        <div className="input-group">
          <label>Cílové skóre pro vítězství:</label>
          <input 
            type="number" 
            value={targetScore} 
            onChange={(e) => setTargetScore(Number(e.target.value))} 
            min="10" 
            step="10"
          />
        </div>
      </div>

      <div className="players-section">
        <h2>Hráči</h2>
        <form onSubmit={handleAddPlayer} className="add-player-form">
          <input 
            type="text" 
            placeholder="Jméno hráče..." 
            value={newName} 
            onChange={(e) => setNewName(e.target.value)} 
          />
          <button type="submit" className="btn-add">Přidat</button>
        </form>

        <ul className="players-list">
          {players.map((player, idx) => (
            <li key={idx} className="player-badge">
              {player}
              <button className="btn-remove" onClick={() => handleRemovePlayer(idx)} aria-label="Odstranit">
                ×
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button className="btn-start" onClick={handleStart} disabled={players.length < 2}>
        Spustit hru
      </button>
    </div>
  );
};

export default SetupScreen;
