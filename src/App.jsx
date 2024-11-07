import "./reset.css";
import "./App.css";
import { Header } from "./Components/Header";
import { useState, useEffect } from "react";

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
  const [boySecim, setBoySecim] = useState("");
  const [kalinlikSecim, setKalinlikSecim] = useState("");
  const [siparisNotu, setSiparisNotu] = useState("");
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [secimler, boySecim, kalinlikSecim, count, siparisNotu]);

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

    if (checked) {
      setSecimler((prevSecimler) => [...prevSecimler, value]);
    } else {
      setSecimler((prevSecimler) =>
        prevSecimler.filter((item) => item !== value)
      );
    }
  };

  const handleSizeChange = (event) => {
    setBoySecim(event.target.value);
  };

  const handleDoughChange = (event) => {
    setKalinlikSecim(event.target.value);
  };

  const handleOrderNoteChange = (event) => {
    setSiparisNotu(event.target.value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!boySecim) {
      newErrors.size = "Bir boyut seçmelisiniz.";
    }

    if (!kalinlikSecim) {
      newErrors.dough = "Hamur kalınlığı seçmelisiniz.";
    }

    if (secimler.length < 3) {
      newErrors.extras = "En az 3 malzeme seçmelisiniz.";
    }

    if (siparisNotu && siparisNotu.length < 5) {
      newErrors.orderNote = "Sipariş notu en az 5 karakter olmalıdır.";
    } else if (!siparisNotu) {
      newErrors.siparisNotu = "Sipariş notu boş bırakılamaz.";
    }

    setErrors(newErrors);

    setIsValid(Object.keys(newErrors).length === 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      alert("Sipariş Verildi");
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
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </article>
          <form className="barlow flex-col between" onSubmit={handleSubmit}>
            <div className="flex between margin-bottom">
              <div className="flex-col gap-s">
                <h3 className="margin-bottom">
                  Boyut Seç <span style={{ color: "red" }}>*</span>
                </h3>
                {sizes.map((boyut) => (
                  <label className="flex gap-s" key={boyut.id}>
                    <input
                      type="radio"
                      name="size"
                      value={boyut.boy}
                      checked={boySecim === boyut.boy}
                      onChange={handleSizeChange}
                    />
                    {boyut.boy}
                  </label>
                ))}
                {errors.size && <p style={{ color: "red" }}>{errors.size}</p>}
              </div>

              <div>
                <label htmlFor="hamur" className="flex-col">
                  <h3 className="margin-bottom">
                    Hamur Kalınlığı <span style={{ color: "red" }}>*</span>
                  </h3>
                  <select
                    value={kalinlikSecim}
                    onChange={handleDoughChange}
                    disabled={!boySecim}
                  >
                    <option value="" disabled>
                      Kalınlık Seçiniz
                    </option>
                    {kalinlik.map((kalinlik) => (
                      <option key={kalinlik.id} value={kalinlik.size}>
                        {kalinlik.size}
                      </option>
                    ))}
                  </select>
                </label>
                {errors.dough && <p style={{ color: "red" }}>{errors.dough}</p>}
              </div>
            </div>

            <div>
              <h2>Ek Malzemeler</h2>
              <p className="margin-bottom">
                En az 3, fazla 10 malzeme seçebilirsiniz.
                <span style={{ color: "red", fontWeight: "600" }}>
                  {" "}
                  Tanesi 5 TL
                </span>
              </p>
              <div className="grid-container">
                {ekstralar.map((ekstra) => (
                  <div className="grid-item" key={ekstra.id}>
                    <label className="flex gap-s margin-bottom semi-bold">
                      <input
                        type="checkbox"
                        value={ekstra.name}
                        onChange={secimEkle}
                        disabled={secimler.length >= 10}
                      />
                      {ekstra.name}
                    </label>
                  </div>
                ))}
              </div>
              {errors.extras && <p style={{ color: "red" }}>{errors.extras}</p>}
            </div>

            <div className="flex-col margin-bottom-lg">
              <label htmlFor="siparisNotu">
                <h3>Sipariş Notu:</h3>
              </label>
              <textarea
                name="siparisNotu"
                value={siparisNotu}
                onChange={handleOrderNoteChange}
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                style={{
                  maxWidth: "960px",
                  minWidth: "376px",
                  borderRadius: "5px",
                }}
                cols={5}
                rows={4}
              />
              {errors.siparisNotu && (
                <p style={{ color: "red" }}>{errors.siparisNotu}</p>
              )}
            </div>

            <hr className="margin-bottom-lg" />
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
                    type="submit"
                    className="buton semi-bold black padding-s"
                    disabled={!isValid}
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
