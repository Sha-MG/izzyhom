// == Import
import House from './House';
import './styles.scss';
import PropTypes from 'prop-types';

// == Composant
function ResultHouses(houses) {

// ResultHouses est le composant qui va recevoir les données triées des maisons puis les afficher.
// Chaque entrée du jeu de données passe dans un .map et devient un composant House 
// Il y a un affichage conditionnel afin de renvoyer un message personnalisé si il n'y a pas de résultat
// pour la recheche en cours de l'utilisateur.

  return (
    <div className='resulthouses-container'>
       {
          houses.houses.map((house) => (
            <House
              key={house.id}
              {...house}
            />
          ))
        }
        { !houses.houses || houses.houses.length === 0 &&
            <p className='resulthouses-container--message'> Malheureusement nous n'avons rien trouvé. </p>
        }
    </div>
  );
}

// Déclaration des PropTypes 
ResultHouses.propTypes = {
  houses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.shape({
      postal_code: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }).isRequired,
    bedrooms_count: PropTypes.number,
    rooms_count: PropTypes.number,
    living_area: PropTypes.number,
    is_furnished: PropTypes.bool,
    full_rent_price: PropTypes.number.isRequired,
    main_picture: PropTypes.string.isRequired,
  })).isRequired,
};


// == Export
export default ResultHouses;
