import React, { useReducer } from 'react';
import IState from '../interfaces/reducers/IState';
import { reducerTraitement } from '../reducers/reducerTraitement';

// Définition de l'interface State qui représente l'état du composant
// interface IState {
//     count?: number;  // Le seul champ de l'état est 'count', de type nombre
//     civilite?: string [];
// }

// // Définition de l'interface Action qui représente les actions possibles pour modifier l'état
// interface IAction {
//     type: 'increment' | 'decrement' | 'multiplier' | 'diviser'| 'civilite';
//     diviseur?: number;  
// }

// Définition de l'état initial du composant
const initialState: IState = { count: 0, civilite: [] }

// Fonction réductrice (reducer) qui définit comment l'état change en réponse à une action
// function reducer(state: IState, action: IAction): IState {
//     switch (action.type) {
//         case 'increment':
//             return { count: state.count! + 1 };  // Incrémente le compteur
//         case 'decrement':
//             return { count: state.count! - 1 };  // Décrémente le compteur
//         case 'multiplier':
//             return { count: state.count! * 10 };  // Multiplie le compteur par 10
//         case 'diviser':
//             return { count: state.count! / action.diviseur!};  // Divise le compteur par 2
//         case 'civilite':
//             return {civilite: ["M","Mme","Autre"]};
//         default:
//             throw new Error();  // Lève une erreur pour une action non reconnue
//     }
// }

// Composant fonctionnel qui utilise le hook useReducer pour gérer l'état
const UseReducerV1: React.FC = () => {
    const [state, dispatch] = useReducer(reducerTraitement, initialState);  // Initialise l'état et la fonction dispatch

    return (
        <div>
            <p>Count: {state.count}</p>

            <div>Civilité:</div> {state.civilite?.map((value: string, index) =>
                <div key={index}>{value}</div>
            )
            }

            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'multiplier' })}>Multiplier par 10</button>
            <button onClick={() => dispatch({ type: 'diviser', diviseur: 8 })}>Diviser</button>
            <button onClick={() => dispatch({ type: 'civilite' })}>Afficher les civilités</button>
        </div>
    );
}

export default UseReducerV1;  // Exporte le composant pour pouvoir l'utiliser ailleurs
