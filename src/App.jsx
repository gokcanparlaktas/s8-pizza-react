import "./reset.css";
import "./App.css";
import { Header } from "./Components/Header";
import SiparisFormu from "./Components/siparisFormu";

function App() {
  return (
    <div className="bg-main">
      <header className="container-md header flex-col gap-s barlow">
        <Header />
      </header>

      <main className="bg-secondary p-ts reset-padding ">
        <SiparisFormu />
      </main>
    </div>
  );
}

export default App;
