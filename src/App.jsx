import "./reset.css";
import "./App.css";
import { Header } from "./Components/Header";

const sizes = [
  { id: "s", boy: "Küçük" },
  { id: "m", boy: "Orta" },
  { id: "l", boy: "Büyük" },
];

const kalinlik = [
  { id: "i", size: "İnce" },
  { id: "n", size: "Normal" },
  { id: "k", size: "Kalın" },
];

const ekstralar = [
  { id: 1, name: "Pepperoni" },
  { id: 2, name: "Domates" },
  { id: 3, name: "Biber" },
  { id: 4, name: "Sosis" },
  { id: 5, name: "Mısır" },
  { id: 6, name: "Sucuk" },
  { id: 7, name: "Kanada Jambonu" },
  { id: 8, name: "Ananas" },
  { id: 9, name: "Tavuk Izgara" },
  { id: 10, name: "Jalepeno" },
  { id: 11, name: "Kabak" },
  { id: 12, name: "Soğan" },
  { id: 13, name: "Sarımsak" },
];

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

          <form className="barlow flex-col between">
            <div className="flex between margin-bottom">
              <div className="flex-col gap-s">
                <h3 className="margin-bottom">
                  Boyut Seç <span style={{ color: "red" }}>*</span>
                </h3>
                {sizes.map((boyut) => (
                  <label className="flex gap-s" htmlFor="size">
                    <input
                      key={boyut.id}
                      type="radio"
                      name="size"
                      value={boyut.boy}
                    />
                    {boyut.boy}
                  </label>
                ))}
              </div>

              <div>
                <label htmlFor="hamur" className="flex-col">
                  <h3 className="margin-bottom">
                    Hamur Kalınlığı <span style={{ color: "red" }}>*</span>
                  </h3>
                  <select defaultValue={-1}>
                    <option value="-1" disabled="true">
                      Kalınlık Seçiniz
                    </option>
                    {kalinlik.map((kalinlik) => (
                      <option key={kalinlik.id} value={kalinlik.size}>
                        {kalinlik.size}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            {/* CHECKBOX KISMI */}
            <div>
              <div className="margin-bottom-lg">
                <h2>Ek Malzemeler</h2>
                <p>
                  En Fazla 10 malzeme seçebilirsiniz.
                  <span style={{ color: "red", fontWeight: "600" }}>
                    Tanesi 5 TL
                  </span>
                </p>
              </div>
              <div className="grid-container">
                {ekstralar.map((ekstra) => (
                  <div className="grid-item" key={ekstra.id}>
                    <label className="flex gap-s margin-bottom">
                      <input type="checkbox" value={ekstra.name} />
                      {ekstra.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
