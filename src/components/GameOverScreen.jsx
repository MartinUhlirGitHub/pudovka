import React from 'react';

const GameOverScreen = ({ players, onReset, targetScore }) => {
  // Sort players by score descending
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const highestScore = sortedPlayers[0]?.score || 0;
  
  // Handling multiple winners if they have the same score over target
  const winners = sortedPlayers.filter(p => p.score >= targetScore && p.score === highestScore);
  const isDraw = winners.length > 1;

  return (
    <div className="game-over-screen card">
      <h1 className="title">Konec hry!</h1>
      
      <div className="winner-section">
        {isDraw ? (
          <h2>Remíza! Vítězové: {winners.map(w => w.name).join(', ')} s {highestScore} body!</h2>
        ) : winners.length > 0 ? (
          <h2>Vítěz: {winners[0].name} s {highestScore} body! 🏆</h2>
        ) : (
          <h2>Hra skončila bez naplnění cíle. Nejvíce bodů: {highestScore} bodů</h2>
        )}
      </div>

      <div className="leaderboard">
        <h3>Finální pořadí</h3>
        <ul>
          {sortedPlayers.map((player, idx) => (
            <li key={idx} className={idx === 0 && winners.length > 0 ? 'winner' : ''}>
              <span className="rank">{idx + 1}.</span>
              <span className="name">{player.name}</span>
              <span className="score">{player.score} b</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="btn-start" onClick={onReset}>Hrát znovu</button>
    </div>
  );
};

export default GameOverScreen;
