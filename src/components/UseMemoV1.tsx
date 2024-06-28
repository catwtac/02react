import React, { useContext } from 'react';
import { UserContext } from './context/ThemeUserProvider'; // Importation du contexte utilisateur



// Définition du composant fonctionnel UseMemoV1
const UseMemoV1: React.FC<any> = () => {
    // Utilisation du hook useContext pour accéder à la valeur du contexte UserContext
    const useContextValue = useContext(UserContext);

    // Vérification que la valeur du contexte est définie
    if (!useContextValue) {
        throw new Error('useContext must be used within a UserProvider'); // Lève une erreur si le contexte n'est pas défini
    }

    // Fonction pour changer le nom de l'utilisateur
    function changerNom(value: string) {
        useContextValue?.setUser(value); // Appelle la fonction setUser du contexte pour mettre à jour le nom de l'utilisateur
    }

    // Rendu du composant
    return (
        <div>
            <button onClick={() => changerNom('Cathy')}>Changer le nom</button>  {/* Bouton pour changer le nom de l'utilisateur */}
            {useContextValue?.user} {/* Affichage du nom de l'utilisateur */}
        </div>
    );
}

export default UseMemoV1; // Exportation du composant pour utilisation ailleurs
