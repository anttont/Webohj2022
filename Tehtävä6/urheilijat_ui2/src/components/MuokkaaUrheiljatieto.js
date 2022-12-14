import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import yhteystiedotContext from "../context/UrheilijaContext";

const MuokkaaPuhelintieto = () => {
  const [nimi, setNimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");
  const [paino, setPaino] = useState("");
  const [wwwlinkki, setWwwlinkki] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
  const [list, setList] = useState([]);
  const YhteystiedotContext = useContext(yhteystiedotContext); //hooks
  const { id } = useParams();

  let history = useNavigate();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const yhteystieto = YhteystiedotContext.getYhteystieto(id).then((res) => {
        setNimi(res.nimi);
        setSyntymavuosi(res.syntymavuosi);
        setPaino(res.paino);
        setWwwlinkki(res.wwwlinkki);
        setLaji(res.laji);
        setSaavutukset(res.saavutukset);
      });
    } else mounted = false;
  }, []);

  const handleSubmit = async (e) => {
    const paivitettyPuhelintieto = {
      nimi: nimi,
      syntymavuosi: syntymavuosi,
      paino: paino,
      wwwlinkki: wwwlinkki,
      laji: laji,
      saavutukset: saavutukset,
    };

    YhteystiedotContext.setYhteystieto(id, paivitettyPuhelintieto);
    history("/");
  };
  const onChangeNimi = (e) => {
    setNimi(e.target.value);
  };
  const onChangeSyntymavuosi = (e) => {
    setSyntymavuosi(e.target.value);
  };
  const onChangePaino = (e) => {
    setPaino(e.target.value);
  };
  const onChangeWwwlinkki = (e) => {
    setWwwlinkki(e.target.value);
  };
  const onChangeLaji = (e) => {
    setLaji(e.target.value);
  };
  const onChangeSaavutukset = (e) => {
    setSaavutukset(e.target.value);
  };
  return (
    <div className="card mb-3">
      <div className="card-header">Muokkaa puhelintieto</div>

      <div className="card-body">
        <form onSubmit={handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="nimi">Nimi</label>
            <input
              type="text"
              name="nimi"
              className="form-control form-control-lg"
              placeholder="Syötä nimi..."
              value={nimi}
              onChange={onChangeNimi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="syntymavuosi">Syntymävuosi</label>
            <input
              type="text"
              name="puhelin"
              className="form-control form-control-lg"
              placeholder="Syötä syntymävuosi..."
              value={syntymavuosi}
              onChange={onChangeSyntymavuosi}
            />
          </div>
          <div className="form-group">
            <label htmlFor="paino">Paino</label>
            <input
              type="text"
              name="paino"
              className="form-control form-control-lg"
              placeholder="Syötä paino..."
              value={paino}
              onChange={onChangePaino}
            />
          </div>
          <div className="form-group">
            <label htmlFor="wwwlinkki">WWW-linkki</label>
            <input
              type="text"
              name="wwwlinkki"
              className="form-control form-control-lg"
              placeholder="Syötä WWW-linkki kuvaan..."
              value={wwwlinkki}
              onChange={onChangeWwwlinkki}
            />
          </div>
          <div className="form-group">
            <label htmlFor="laji">Laji</label>
            <input
              type="text"
              name="laji"
              className="form-control form-control-lg"
              placeholder="Syötä laji..."
              value={laji}
              onChange={onChangeLaji}
            />
          </div>
          <div className="form-group">
            <label htmlFor="saavutukset">Saavutukset</label>
            <input
              type="text"
              name="saavutukset"
              className="form-control form-control-lg"
              placeholder="Syötä saavutukset..."
              value={saavutukset}
              onChange={onChangeSaavutukset}
            />
          </div>

          <input
            type="submit"
            value="Muokkaa"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    </div>
  );
};
export default MuokkaaPuhelintieto;
