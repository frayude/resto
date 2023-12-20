/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable indent */
import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) => `
  
  <h2 class="movie__title">${restaurant.name}</h2>

  <div class=restaurant-image">
  <img class="lazyload" data-src="${
    CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId
  }" alt="${restaurant.name}" />
  </div>
  

  <div class="restaurant__info">
    <h3>Information</h3>

    <h4>Address</h4>
    <p>${restaurant.address} 

    <h4>City</h4>
    <p>${restaurant.city}  
    </div>

    <div class="movie__overview">
      <h3> Description</h3>
      <p>${restaurant.description}</p>
    </div>

    <h4>Foods Menus</h4>
    <ul>
      ${restaurant.menus.foods
        .map((foods) => `<li>${foods.name}</li>`)
        .join("")}
    </ul>
    
    <h4>Drinks Menus</h4>
    <ul>
      ${restaurant.menus.drinks
        .map((drinks) => `<li>${drinks.name}</li>`)
        .join("")}
    </ul>
    
    <h4>Customer Reviews</h4>
    ${restaurant.customerReviews
      .map(
        (review) => `
      <div>
        <p>${review.name}</p>
        <p>${review.date}</p>
        <p>${review.review}</p>
      </div>
    `
      )
      .join("")}
 
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="movie-item">
    <div class="movie-item__header">
      
    <img class="lazyload" alt="${restaurant.name}"
           data-src="${
             restaurant.pictureId
               ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId
               : "https://picsum.photos/id/666/800/450?grayscale"
           }">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${
          restaurant.rating
        }</span></p>
      </div>
    </div>
    
    <div class="movie-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
