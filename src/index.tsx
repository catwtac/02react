// Importation des modules nécessaires de React et ReactDOM
import React from 'react'; // Importe React pour utiliser JSX et autres fonctionnalités de React
import ReactDOM from 'react-dom/client'; // Importe ReactDOM pour manipuler le DOM avec React
import './styles/index.css'; // Importe le fichier CSS principal pour appliquer des styles globaux
import App from './App'; // Importe le composant principal de l'application
import reportWebVitals from './reportWebVitals'; // Importe une fonction pour mesurer les performances de l'application

// Création de la racine de l'application en utilisant l'élément avec l'ID 'root'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Sélectionne l'élément DOM avec l'ID 'root' et s'assure qu'il est de type HTMLElement
);

// Rendu de l'application à l'intérieur du mode strict de React
root.render(
  <React.StrictMode>
    <App /> // Rendu du composant principal 'App'
  </React.StrictMode>
);

// Mesure des performances de l'application, enregistre les résultats ou les envoie à un endpoint d'analyse
// Pour commencer à mesurer les performances, passe une fonction qui enregistre les résultats (par exemple: reportWebVitals(console.log))
// ou envoie les résultats à un point de terminaison d'analyse. Pour en savoir plus: https://bit.ly/CRA-vitals
reportWebVitals(); // Appelle la fonction pour démarrer la mesure des performances
