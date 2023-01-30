import './styles.scss';
import PropTypes from 'prop-types'

function House(house){

// House reçois un jeu de données qui correspond à une maison
// Ce composant gère ensuite l'affichage des informations
// Il y a un affichage conditionnel pour savoir si le bien est meublé
// Si oui => affichage et icone // Si non => on passe a la suite

  return(
    <div className='house-container'>
      <div className='house-container--left' style={{ backgroundImage: `url(${house.main_picture})` }}>
      </div>
      <div className='house-container--right'>
        <h2>{house.title}</h2>
        <p className='house-container--right--address'> <i className="fa-solid fa-location-crosshairs"></i> {house.address.postal_code} {house.address.city}</p>
        <div className='house-container--right--details'>
          <p> <i className="fa-solid fa-bed"> </i> {house.bedrooms_count}</p>
          <p> <i className="fa-solid fa-door-closed"></i> {house.rooms_count}</p>
          <p> <i className="fa-solid fa-ruler-combined"></i> {house.living_area}m²</p>
          { house.is_furnished &&
            <p><i className="fa-solid fa-couch"></i> Meublé</p>
          }
        </div>
        <p className='house-container--right--price'>{house.full_rent_price} € </p>
      </div>
    </div>
  )
}

// Définition des Proptypes
House.propTypes = {
  house: PropTypes.shape({
    title: PropTypes.string.isRequired,
    main_picture: PropTypes.string.isRequired,
    address: PropTypes.shape({
      postal_code: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }).isRequired,
    bedrooms_count: PropTypes.number.isRequired,
    rooms_count: PropTypes.number.isRequired,
    living_area: PropTypes.number.isRequired,
    is_furnished: PropTypes.bool,
    full_rent_price: PropTypes.number.isRequired,
  })
};

export default House;
