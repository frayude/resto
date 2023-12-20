import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.LIST);
    const jsonparse = await response.json();
    return jsonparse.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const jsonparse = await response.json();
    return jsonparse.restaurant;
  }
}

export default RestaurantDbSource;
