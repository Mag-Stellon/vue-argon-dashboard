
import Axios from 'axios';

export default {
  fetchEquity(context, { success }) {
    Axios.get(`http://localhost:3000/api/credit/equity`,  { baseURL: 'http://localhost:8080/' })
      .then(function (response) {
        context.commit('equity', {
          equity: response.data.equity
        });
        success && success();
      })
  },
  fetchGames(context, { category, success }) {
    Axios.get(`http://localhost:3000/api/games/${category}`,  { baseURL: 'http://localhost:8080/' })
      .then(function (response) {
        context.commit('games', {
          category,
          games: response.data
        });
        success && success();
      })
  },
  fetchCheckouts(context, { success }) {
    Axios.get(`http://localhost:3000/api/checkout/games/`,  { baseURL: 'http://localhost:8080/' })
      .then(function (response) {
        context.commit('checkouts', {
          checkouts: response.data
        });
        success && success();
      })
  }
}
