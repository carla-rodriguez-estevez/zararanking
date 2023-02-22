import { Header } from "./components/header";
import { Placeholder } from "./components/placeholder";
import "./app.css";
import { Filters } from "./components/Filters/filters";
import { Summary } from "./components/Summary/summary";
import { Ranking } from "./components/Ranking/ranking";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="filters">
          {/* TODO: Ejercicio 2 - Crea el componente de filtros */}
          <Filters />
        </div>
        <div className="summary">
          {/* TODO: Ejercicio 3 - Crear el componente resumen  */}
          <Summary />
        </div>
        <div className="content">
          <div className="orders">
            {/* TODO: Ejercicio 4 - Crear el componente ordenes  */}
            <Placeholder />
          </div>
          <div className="ranking">
            {/* TODO: Ejercicio 5 - Crear el componente ranking  */}
            <Ranking />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
