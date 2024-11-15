import "./App.css";
import { useState, useEffect } from "react";
import SiparisFormu from "./Components/siparisFormu";
import { Header } from "./Components/Header";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
function App() {
  const [formData, setFormData] = useState({
    price: 85.5,
    boySecim: "",
    kalinlikSecim: "",
    secimler: [],
    siparisNotu: "",
    total: 85.5,
    npmHizindaTeslimat: false,
  });

  const [count, setCount] = useState(1);

  useEffect(() => {
    const toplam =
      formData.price * count + formData.secimler.length * 5 * count;
    setFormData((prevData) => ({
      ...prevData,
      total: toplam,
    }));
  }, [formData.price, count, formData.secimler]);

  return (
    <BrowserRouter>
      <div className="bg-main">
        <header className="container-md header flex-col gap-s barlow reset-padding">
          <Header />
        </header>

        <main>
          <Switch>
            <Route path="/siparisFormu">
              <nav className="container-md flex header gap-s barlow reset-padding">
                <NavLink
                  to="/"
                  className={(isActive) =>
                    "header-link semi-bold" + (!isActive ? " unselected" : "")
                  }
                >
                  Ana Sayfa
                </NavLink>

                <NavLink
                  to="/siparisFormu"
                  className={(isActive) =>
                    "header-link semi-bold" +
                    (!isActive ? " header-link semi-bold" : "semi-bold")
                  }
                >
                  Sipariş Formu
                </NavLink>
              </nav>
              <SiparisFormu
                formData={formData}
                setFormData={setFormData}
                count={count}
                setCount={setCount}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
