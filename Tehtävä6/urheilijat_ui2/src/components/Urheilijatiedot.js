import React, { useContext, useEffect } from "react";
import Urheilijatieto from "./Urheilijatieto";
import UrheilijaContext from "../context/UrheilijaContext";
const Urheilijatiedot = () => {
  const UrheilijatContext = useContext(UrheilijaContext); //hooks
  console.log(UrheilijatContext);
  useEffect(() => {
    //kun komponentti ladataan muistiin -> tapaht. useEffect
    UrheilijatContext.getYhteystiedot(); //haetaan yhteystiedot
    console.log(UrheilijatContext);
  }, []); //Kun komponentti piirretään, suoritetaan kerran
  return (
    <>
      <h1 className="display-4 mb-2">
        <span className="text-dark">Urheilijat</span>
      </h1>
      <React.Fragment>
        {UrheilijatContext.yhteystiedot.length
          ? UrheilijatContext.yhteystiedot.map((yhteystieto) => (
              <Urheilijatieto key={yhteystieto.id} yhteystieto={yhteystieto} />
            ))
          : null}
      </React.Fragment>
    </>
  );
};
export default Urheilijatiedot;
