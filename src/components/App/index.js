// == Import 
// Composants/Interne
import Header from "../Header";
import ResultHouses from "../ResultHouses";
import SearchBar from "../SearchBar";
import Footer from "../Footer";
// Externes/Data
import housesData from "../../data/data";
import { useState } from "react";


// == Composant
function App() {

// Initialisation de toutes les données dont on a besoin dans le state,
// Chaque champs du form de recherche est un champs contrôlé 
// Transmis dans le composant SearchBar ou il sera utilisé et modifié selon l'input de l'utilisateur.
  let [title, setTitle] = useState('');
  let [town, setTown] = useState('');
  let [rent, setRent] = useState('');
  let [houses, setHouses] = useState(housesData)

// Au clic sur le bouton de recherche, on lance la fonction
// Pour chaque propriété qui est différente du state d'origine (donc qui a été modifiée par l'utilisateur)
// On fait un filter sur les données d'origine avant de rendre le nouveau jeu de données
// A ResultHouses qui va les afficher.
// e correspond a l'event et le preventDefault permet de ne pas refresh la page.
  let handleSearch = (e) => {

    e.preventDefault()

    let foundHouses = housesData ;

    if(title != ''){
      foundHouses = foundHouses.filter((house) => house.title.toLowerCase().includes(title.toLowerCase()))
    }
    if(town != ''){
      foundHouses = foundHouses.filter((house) => house.address.city.toLowerCase().includes(town.toLowerCase()) || house.address.postal_code.includes(town))
    }
    if(rent != ''){
      foundHouses = foundHouses.filter((house) => house.full_rent_price <= rent)
    }

    setHouses(foundHouses)
  };

// Au clic sur le bouton de reset on lance cette fonction
// Elle re-définie le jeu de données comme celui d'origine
// Et réinitialise aussi les formulaires.
  let handleReset = (e) => {
    e.preventDefault()
    setTitle('')
    setTown('')
    setRent('')
    setHouses(housesData)
  }

  return (
    <>
      <Header/>
      <SearchBar
        title={title}
        setTitle={setTitle}
        town={town}
        setTown={setTown}
        rent={rent}
        setRent={setRent}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
      <ResultHouses
        houses={houses}
      />
      <Footer/>
    </>
  );
}

// == Export
export default App;
