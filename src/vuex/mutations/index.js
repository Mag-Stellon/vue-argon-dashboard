export default {
  games (state, { category, games }) {
    state[category] = games;
  },
  checkouts(state, { checkouts }) {
    state.checkouts = checkouts
  },
  equity(state, { equity }) {
    state.equity = equity
  },
  avatar (state, payload) {
    state.avatar[payload.key] = payload.value;
  }
}
