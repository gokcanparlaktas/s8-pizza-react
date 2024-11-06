import "./reset.css";
import "./App.css";
import { Header } from "./Components/Header";
import { useState } from "react";

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

const price = 85.5;

function App() {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(count * price);
  const [secimler, setSecimler] = useState([]);

  const decrement = (e) => {
    e.preventDefault();

    count > 1 ? setCount(count - 1) : setCount(1);
  };

  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const secimEkle = (event) => {
    const { value, checked } = event.target;

    // Eğer checkbox işaretlendiyse, değeri `secimler` array'ine ekle
    if (checked) {
      setSecimler((prevSecimler) => [...prevSecimler, value]);
    } else {
      // Eğer checkbox işareti kaldırıldıysa, array'den çıkar
      setSecimler((prevSecimler) =>
        prevSecimler.filter((item) => item !== value)
      );
    }
  };

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
          {/*FORM BAŞLANGICI VE RADİO BUTTONLAR*/}
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
              {/*DROPDOWN KISMI*/}
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
                      <option
                        className="semi-bold"
                        key={kalinlik.id}
                        value={kalinlik.size}
                      >
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
                    <label className="flex gap-s margin-bottom semi-bold">
                      <input
                        onChange={secimEkle}
                        type="checkbox"
                        value={ekstra.name}
                      />
                      {ekstra.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {/*TEXT AREA KISMI*/}

            <div className="flex-col margin-bottom-lg">
              <label htmlFor="siparisNotu">
                {" "}
                <h3>Sipariş Notu:</h3>
              </label>
              <textarea
                name="siparisNotu"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                style={{
                  maxWidth: "960px",
                  minWidth: "376px",
                  borderRadius: "5px",
                }}
                cols={5}
                rows={4}
              />
            </div>

            <hr className="margin-bottom-lg" />
            {/*BUTON VE SİPARİŞ ALANI*/}
            <div className="flex between">
              <div className="buton-div">
                <button className="buton" onClick={decrement}>
                  -
                </button>
                <div className="counter semi-bold">{count}</div>
                <button className="buton" onClick={increment}>
                  +
                </button>
              </div>

              <div className="order-container">
                <div className="flex-col">
                  <h3 className="padding-s">Sipariş Toplamı</h3>
                  <div className="flex between padding-s semi-bold">
                    <div>Seçimler:</div>
                    <div>{secimler.length * 5} TL</div>
                  </div>
                  <div
                    className="flex between padding-s margin-bottom semi-bold"
                    style={{ color: "#CE2829" }}
                  >
                    <div>Toplam:</div>
                    <div>
                      {totalPrice * count + secimler.length * 5 * count} TL
                    </div>
                  </div>
                  <button
                    className="buton semi-bold black padding-s"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Sipariş Verildi");
                    }}
                  >
                    SİPARİŞ VER
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
