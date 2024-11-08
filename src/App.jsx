import "./reset.css";
import "./App.css";
import { Header } from "./Components/Header";
import SiparisFormu from "./Components/siparisFormu";

function App() {
  return (
    <div className="bg-main">
      <header className="flex container-lg jc">
        <Header />
      </header>

      <main className="bg-secondary p-ts ">
        <SiparisFormu />
      </main>
    </div>
  );
}

export default App;
