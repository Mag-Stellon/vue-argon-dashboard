import categories from '@/data/category.json'

export default {
  category: (state) => (category) => {
    return state[category];
  },
  categories() {
    return categories.sort((a, b) => a.name.localeCompare(b.name));
  },
  game: (state) => (category, id) => {
    return state[category].find(game => game.id == id);
  },
  checkouts (state) {
    return state.checkouts;
  },
  equity (state) {
    return state.equity;
  },
  avatar(state) {
    return state.avatar;
  }
}
