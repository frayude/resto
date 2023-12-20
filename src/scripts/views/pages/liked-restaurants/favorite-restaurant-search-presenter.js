/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable class-methods-use-this */
class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteRestaurants }) {
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById("query");
    this._queryElement.addEventListener("change", (event) => {
      this._searchRestaurants(event.target.value);
    });
  }

  async _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery.trim();

    const foundRestaurants = await this._favoriteRestaurants.searchRestaurants(
      this.latestQuery
    );

    this._showFoundRestaurants(foundRestaurants);
  }

  _showFoundRestaurants(restaurants) {
    const html = restaurants.reduce(
      (carry, restaurant) =>
        carry.concat(`
        <li class="movie">
          <span class="movie__title">${restaurant.title || "-"}</span>
        </li>
      `),
      ""
    );

    document.querySelector(".movies").innerHTML = html;

    document
      .getElementById("movie-search-container")
      .dispatchEvent(new Event("movies:searched:updated"));
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestaurantSearchPresenter;
