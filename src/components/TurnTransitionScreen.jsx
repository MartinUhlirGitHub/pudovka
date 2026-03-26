const TurnTransitionScreen = ({ nextPlayer, onReady }) => {
  return (
    <div className="card turn-transition-screen">
      <h1 className="title">Předání zařízení</h1>
      <h2>Nyní hraje: <span className="player-highlight">{nextPlayer.name}</span></h2>
      <p>Až budeš připraven(a), klikni na tlačítko a zobrazí se ti stejná otázka se zamíchanými odpověďmi.</p>
      <button className="btn-start" onClick={onReady} style={{ marginTop: '2rem' }}>
        Jsem připraven(a) k hraní
      </button>
    </div>
  );
};

export default TurnTransitionScreen;
