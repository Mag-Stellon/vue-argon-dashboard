
import Axios from 'axios';

export default {
  fetchEquity(context, { api, success }) {
    Axios.get(`${api}/api/credit/equity`)
      .then(function (response) {
        context.commit('equity', {
          equity: response.data.equity
        });
        success && success();
      })
  },
  fetchGames(context, { api, category, success }) {
    Axios.get(`${api}/api/games/${category}`)
      .then(function (response) {
        context.commit('games', {
          category,
          games: response.data
        });
        success && success();
      })
  },
  fetchCheckouts(context, { api, success }) {
    Axios.get(`${api}/api/checkout/games/`)
      .then(function (response) {
        context.commit('checkouts', {
          checkouts: response.data
        });
        success && success();
      })
  }
}
