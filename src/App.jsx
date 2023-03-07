import "./App.css";
import Prva from "./components/PrvaKompa";
import { DrugaKompa as Druga, TrecaKompa } from "./components/DrugaKompa";

function App() {
  return (
    <div className="App">
      <h1>Algebra</h1>
      <Prva />
      <Druga />
      <TrecaKompa />
    </div>
  );
}

export default App;
