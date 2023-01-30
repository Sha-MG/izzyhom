// == Import
import './styles.scss';
import PropTypes from 'prop-types';

// == Composant
let SearchBar = ({title, setTitle, town, setTown, rent, setRent, handleSearch, handleReset}) => {

// SearchBar est le composant qui affiche tous les champs de recherche pour l'utilisateur.
// Chaque champs est contrôlé dans le state via une prop "nom" et une fonction "setNom"
// Les deux fonctions handleSearch & handleReset renvoient a des fonctions définies dans App

  return (
    <div className='searchbar-container'>
      <form>

        <div className='searchbar-container--input'>
          <i className="fa-solid fa-magnifying-glass searchbar-container--icons"></i>
          <input type="text" name="title" placeholder='Titre' className='bluesearch' value={title} onChange={(event) => setTitle(event.target.value)}/>
        </div>
        
        <div className='searchbar-container--input'>
          <i className="fa-solid fa-location-crosshairs searchbar-container--icons"></i>
          <input type="text" name="town" placeholder='Ville' className='yellowsearch' value={town} onChange={(event) => setTown(event.target.value)}/>
        </div>
        
        <div className='searchbar-container--range'>
          <span>Budget : {rent} €</span>
          <input className="range" type="range" name="loyer" value={rent} min="0" max="7000" onChange={(event) => setRent(event.target.value)}></input>
        </div>
                
        <button value='Recherche' className='searchbar-container--buttons' onClick={handleSearch}>Recherche</button>
        <button value='Reset' className='searchbar-container--buttons' onClick={handleReset}>Reset</button>

      </form>
    </div>
  );
}

// Déclaration des PropTypes
SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  town: PropTypes.string.isRequired,
  setTown: PropTypes.func.isRequired,
  rent: PropTypes.string.isRequired,
  setRent: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  };

// == Export
export default SearchBar;
