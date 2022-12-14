import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import urheilijatiedotContext from "../context/UrheilijaContext";

export default function LisaaPuhelintieto() {
  let history = useNavigate();
  const [nimi, setNimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");
  const [paino, setPaino] = useState("");
  const [wwwlinkki, setWwwlinkki] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
  //const [virheet, setVirheet] = useState({});
  const UrheiljatiedotContext = useContext(urheilijatiedotContext); //hooks

  const handleSubmit = async (e) => {
    const uusiUrheilijatieto = {
      nimi: nimi,
      syntymavuosi: syntymavuosi,
      paino: paino,
      wwwlinkki: wwwlinkki,
      laji: laji,
      saavutukset: saavutukset,
    };
    console.log("Tarkistetaan uusiPuhelintieto -objekti:");
    console.log(uusiUrheilijatieto);

    UrheiljatiedotContext.setYhteystiedot(uusiUrheilijatieto);
    history("/");
  };
  return (
    <div className="card mb-3 bg-secondary">
      <div className="card-header">Lisää Urheilijat</div>
      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="nimi">Nimi</label>
            <input
              id="nimitieto"
              type="text"
              name="nimi"
              className="form-control form-control-lg"
              placeholder="Syötä nimi..."
              value={nimi}
              onChange={(event) => setNimi(event.target.value)}
              //error={virheet.nimi}
            />
            <div className="invalid-feedback">Täytä nimi</div>
          </div>
          <div className="form-group">
            <label htmlFor="puhelin">Syntymavuosi</label>
            <input
              id="syntymatieto"
              type="text"
              name="syntymavuosi"
              className="form-control form-control-lg"
              placeholder="Syötä syntymävuosi..."
              value={syntymavuosi}
              onChange={(event) => setSyntymavuosi(event.target.value)}
              //error={virheet.puhelin}
            />

            <label htmlFor="puhelin">Paino</label>
            <input
              id="painotieto"
              type="text"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={(event) => setPaino(event.target.value)}
              //error={virheet.puhelin}
            />

            <label htmlFor="puhelin">WWW-Linkki</label>
            <input
              id="wwwlinkkitieto"
              type="text"
              name="wwwlinkki"
              className="form-control form-control-lg"
              placeholder="Syötä www-linkki..."
              value={wwwlinkki}
              onChange={(event) => setWwwlinkki(event.target.value)}
              //error={virheet.puhelin}
            />
            <label htmlFor="puhelin">Laji</label>
            <input
              id="lajitieto"
              type="text"
              name="laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji..."
              value={laji}
              onChange={(event) => setLaji(event.target.value)}
              //error={virheet.puhelin}
            />
            <label htmlFor="puhelin">Saavutukset</label>
            <input
              id="saavutuksettieto"
              type="text"
              name="saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={(event) => setSaavutukset(event.target.value)}
              //error={virheet.puhelin}
            />
            <div className="invalid-feedback">Täytä saavutukset</div>
          </div>
          <input
            type="submit"
            value="Lisää"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    </div>
  );
}
