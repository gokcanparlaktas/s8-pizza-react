import "./reset.css";
import "./App.css";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="bg-main">
      <header className="flex container-lg jc">
        <Header />
      </header>

      <main className="bg-secondary p-ts ">
        <div className="container-md flex-col gap-s barlow">
          <h2>Position Absolute Acılı Pizza</h2>
          <div className="flex between">
            <p className="pricetag">85.50₺</p>
            <div className="flex gap-m review">
              <div>
                <p>Puan</p>
              </div>
              <div>
                <p>Yorum</p>
              </div>
            </div>
          </div>
          <article className="article">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </article>

          <form className="barlow flex between">
            <div className="flex-col gap-s">
              <div className="radio">
                <h3 className="margin-bottom">
                  Boyut Seç <span style={{ color: "red" }}>*</span>
                </h3>
                <label htmlFor="size">
                  <input type="radio" name="size" value="kucuk" />
                  Küçük
                </label>
              </div>
              <div className="radio">
                <label htmlFor="size">
                  <input type="radio" name="size" value="orta" />
                  Orta
                </label>
              </div>
              <div className="radio">
                <label htmlFor="size">
                  <input type="radio" name="size" value="buyuk" />
                  Büyük
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="hamur" className="flex-col">
                <h3 className="margin-bottom">
                  Hamur Kalınlığı <span style={{ color: "red" }}>*</span>
                </h3>
                <select>
                  <option name="hamur" value="ince">
                    Ince
                  </option>
                  <option name="hamur" value="normal">
                    Normal
                  </option>
                  <option name="hamur" value="kalin">
                    Kalın
                  </option>
                </select>
              </label>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
