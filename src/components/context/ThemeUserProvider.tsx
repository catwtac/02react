import React, { createContext, useState, ReactNode, useReducer, useEffect} from 'react';
import IState from '../../interfaces/reducers/IState';
import { reducerTraitement } from '../../reducers/reducerTraitement';

// Définition de l'interface pour les propriétés du contexte utilisateur
interface IUserContextProps {
    user: string; // Le nom de l'utilisateur
    setUser: React.Dispatch<React.SetStateAction<string>>;
    civilite?: string[];
    // Fonction pour mettre à jour le nom de l'utilisateur
}




export const UserContext = createContext<IUserContextProps | undefined>(undefined);
const initialState: IState = { count: 0, civilite: [] };



export const ThemeUserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   
    const [user, setUser] = useState('bob');

    const [state, dispatch] = useReducer(reducerTraitement, initialState);
    
    useEffect(() => {
        dispatch({ type: 'civilite' });
    }, []);


    let civilite = state.civilite;

    return (
        <UserContext.Provider value={{ user, setUser, civilite }}>
            {children}
        </UserContext.Provider>
    );
}
