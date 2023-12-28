import './App.css';
import CalculationRow from './components/CalculationRow/CalculationRow';

function App() {
  return (
    <div className="App">
      {/* <h1>Cześć to ja, Michał </h1>
      <p>Mam 22 lata, jestem z Krakowa</p>
      <p>Jestem też programistą, informatykiem. Przyszłym top 10</p>
      <GoalItem title="Przerobić książkę react - koncepcje" description="Książka pozwoli mi utrzymać tempo w nauce,nie przeciąża wzroku. W przeciwieństwie do czytania w internecie nie ma się odruchu otworzenia nowej karty przeglądarki" />
      <GoalItem title="Napiasać własny projekt" description="po przerobieniu książki napiszę własny projekt"/> */}

      <CalculationRow operator="+"/>
    </div>
  );
}

export default App;
