import React, { useState, useEffect } from 'react';
import calculPourcentage from '../utils/tvaFunction';
import ICalculTva from '../interfaces/ICalcultva';
import ComponentInput from './form/ComponentInput';




const CalculTva: React.FC = () => {

    const calculTvaObject: ICalculTva = { nombreACalculer: 0, tva: 0,"information":"info" }
    const [calculTvaState, setCalculTvaState] = useState(calculTvaObject);
    // const [nombreACalculer, setNombreACalculer] = useState<number>(0);
    // const [tva, setTva] = useState<number>(0);
    const [resultat, setResultat] = useState(0);


    useEffect(() => {
        function calculerTvaEffect() {
            let resultatCalcul = calculPourcentage(calculTvaState.nombreACalculer, calculTvaState.tva);
            setResultat(resultatCalcul)
        }
        calculerTvaEffect()
    }, [calculTvaState.tva]);

    function calculerTva() {
        let resultatCalcul = calculPourcentage(calculTvaState.nombreACalculer, calculTvaState.tva);
        setResultat(resultatCalcul);
    }


    function handleChange<T>(attribut: string, value: T): void {
        setCalculTvaState({ ...calculTvaState, [attribut]: value })
    }

    let type = "text";
    let placeholder = "information";
    let value = "information importante"

    return (
        <div>

            <input type="number" onChange={(e) => handleChange("nombreACalculer",
                parseFloat(e.target.value))} value={calculTvaState.nombreACalculer}
                placeholder='Nombre à calculer'></input>

            <input type="number" onChange={(e) => handleChange("tva",
                parseFloat(e.target.value))} value={calculTvaState.tva}
                placeholder='montant tva'></input>



            <button onClick={(() => calculerTva())}>Calculer</button>


            <div>Résultat: {resultat!}</div>

            <ComponentInput type={type} value={calculTvaState.information} 
            placeholder={placeholder} onChangeInput={(valueOfInput: any) => handleChange("information", valueOfInput)} />

        </div>
    )
}

export default CalculTva;
