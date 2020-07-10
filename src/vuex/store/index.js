import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

import getters from '../getters'
import mutations from '../mutations'
import actions from '../actions'


// have vuex involved
Vue.use(Vuex)

const state = {
  checkouts: [],
  equity: 0,
  avatar: {
    accessoriesType: 'Round',
    clotheType: 'GraphicShirt',
    clotheColor: 'Black',
    eyebrowType: 'DefaultNatural',
    eyeType: 'WinkWacky',
    facialHairColor: 'Black',
    facialHairType: 'BeardLight',
    graphicType: 'Bat',
    hairColor: 'Brown',
    mouthType: 'Smile',
    skinColor: 'DarkBrown',
    topType: 'WinterHat3',
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: process.env.NODE_ENV !== 'production',
  plugins: [
    createPersistedState({
      key: 'iezvihopntawgkz4rhrxu',
      paths: ['avatar'],
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
    })
  ]
})
