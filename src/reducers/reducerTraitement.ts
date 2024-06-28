import IState from "../interfaces/reducers/IState";
import IAction from "../interfaces/reducers/IAction";



export function reducerTraitement(state: IState, action: IAction): IState {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count! + 1 };  // Incrémente le compteur
        case 'decrement':
            return { ...state, count: state.count! - 1 };  // Décrémente le compteur
        case 'multiplier':
            return { ...state, count: state.count! * 10 };  // Multiplie le compteur par 10
        case 'diviser':
            return { ...state, count: state.count! / action.diviseur!};  // Divise le compteur par 2
        case 'civilite':
            return {...state, civilite: ["M","Mme","Autre"]};
        default:
            throw new Error();  // Lève une erreur pour une action non reconnue
    }
}
