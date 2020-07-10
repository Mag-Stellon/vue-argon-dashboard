<template>
<div>
  <base-header class="header pb-8 pt-8 d-flex align-items-center">
  </base-header>

  <div class="container-fluid mt--7">
    <div class="row">
      <div class="col-xl-4 order-xl-2 mb-5">

        <div class="card card-profile shadow">
          <div class="row justify-content-center">
            <div class="col-lg-3 order-lg-2">
              <div class="card-profile-image mb-8">
                <avataaars :isCircle='false' :accessoriesType="accessoriesType" :clotheType="clotheType" :clotheColor="clotheColor" :eyebrowType="eyebrowType" :eyeType="eyeType" :facialHairColor="facialHairColor" :facialHairType="facialHairType" :graphicType="graphicType" :hairColor="hairColor" :mouthType="mouthType" :skinColor="skinColor" :topType="topType" class="rounded-circle"></avataaars>
              </div>
            </div>
          </div>
          <div class="card-body pt-0 pt-md-4">
            <div class="row">
              <div class="col-lg-12 text-center mb-4">
                <b-button v-b-toggle.collapse class="btn btn-default m-1"><i class="fa fa-cog mr-2" aria-hidden="true"></i> Change your avatar</b-button>
              </div>

              <b-collapse id="collapse" class="col-lg-12">
                <div class="row mt-4">
                  <div class="col-lg-6 pl-4">
                    <div class="form-group">
                      <label>Skin color</label>
                      <b-form-select v-model="skinColor" :options="skinColorOptions"></b-form-select>
                    </div>
                    <div class="form-group">
                      <label>Hair color</label>
                      <b-form-select v-model="hairColor" :options="hairColorOptions"></b-form-select>
                    </div>
                    <div class="form-group">
                      <label>Mouth</label>
                      <b-form-select v-model="mouthType" :options="mouthTypeOptions"></b-form-select>
                    </div>
                    <div class="form-group">
                      <label>Facial Hair color</label>
                      <b-form-select v-model="facialHairColor" :options="facialHairColorOptions"></b-form-select>
                    </div>
                    <div class="form-group">
                      <label>Clothes</label>
                      <b-form-select v-model="clotheType" :options="clotheTypeOptions"></b-form-select>
                    </div>
                    <div class="form-group">
                      <label>Graphic</label>
                      <b-form-select v-model="graphicType" :options="graphicTypeOptions"></b-form-select>
                    </div>
                  </div>

                  <div class="col-lg-6 pr-4">
                    <div class="form-group">
                      <label>Eye</label>
                      <b-form-select v-model="eyeType" :options="eyeTypeOptions"></b-form-select>
                    </div>
                    <div class="form-group">
                      <label>Hair and Top</label>
                      <b-form-select v-model="topType" :options="topTypeOptions"></b-form-select>
                    </div>
                    <div class="form-group">
                      <label>Eyebrow</label>
                      <b-form-select v-model="eyebrowType" :options="eyebrowTypeOptions"></b-form-select>
                    </div>
                    <div class="form-group">
                      <label>Facial hair</label>
                      <b-form-select v-model="facialHairType" :options="facialHairTypeOptions"></b-form-select>
                    </div>
                    <div class="form-group">
                      <label>Clothes color</label>
                      <b-form-select v-model="clotheColor" :options="clotheColorOptions"></b-form-select>
                    </div>
                    <div class="form-group">
                      <label>Accessories</label>
                      <b-form-select v-model="accessoriesType" :options="accessoriesTypeOptions"></b-form-select>
                    </div>
                  </div>
                </div>
              </b-collapse>

            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-8 order-xl-1 mb-5 history">
        <card shadow type="secondary">
          <div slot="header" class="bg-white border-0">
            <div class="row align-items-center">
              <div class="col-8">
                <h3 class="mb-0">Your Games</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <router-link :to="`/game/${game.category}/${game.id}`" class="col-lg-6 col-md-6 col-sm-12 mt-4" v-for="(game, index) in checkouts" :key="index">
              <div class="card">
                <img class="card-img-top" :src="game.thumb" :alt="game.title">
                <div class="card-body">
                  <h5 class="card-title">{{game.title}}</h5>
                  <!--<p class="card-text">{{truncate(game.description)}}</p>-->
                </div>
              </div>
            </router-link>
          </div>
        </card>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Avataaars from 'vuejs-avataaars'
import store from '@/vuex/store'


export default {
  beforeRouteEnter (to, from, next) {
    store.dispatch("fetchCheckouts", {
      api: process.env.VUE_APP_API,
      success: next
    });
  },
  beforeRouteUpdate (to, from, next) {
    store.dispatch("fetchCheckouts", {
      api: process.env.VUE_APP_API,
      success: next
    });
  }, 
  components: {
    Avataaars
  },
  name: 'user-profile',
  data() {
    return {
      skinColorOptions: [{
          value: 'Tanned',
          text: 'Tanned'
        },
        {
          value: 'Yellow',
          text: 'Yellow'
        },
        {
          value: 'Pale',
          text: 'Pale'
        },
        {
          value: 'Light',
          text: 'Light'
        },
        {
          value: 'Brown',
          text: 'Brown'
        },
        {
          value: 'DarkBrown',
          text: 'Dark Brown'
        },
        {
          value: 'Black',
          text: 'Black'
        }
      ],
      hairColorOptions: [{
          value: 'Auburn',
          text: 'Auburn'
        },
        {
          value: 'Black',
          text: 'Black'
        },
        {
          value: 'Blonde',
          text: 'Blonde'
        },
        {
          value: 'BlondeGolden',
          text: 'BlondeGolden'
        },
        {
          value: 'Brown',
          text: 'Brown'
        },
        {
          value: 'BrownDark',
          text: 'BrownDark'
        },
        {
          value: 'PastelPink',
          text: 'PastelPink'
        },
        {
          value: 'Platinum',
          text: 'Platinum'
        },
        {
          value: 'Red',
          text: 'Red'
        },
        {
          value: 'SilverGray',
          text: 'SilverGray'
        },
      ],
      mouthTypeOptions: [{
          value: 'Concerned',
          text: 'Concerned'
        },
        {
          value: 'Default',
          text: 'Default'
        },
        {
          value: 'Disbelief',
          text: 'Disbelief'
        },
        {
          value: 'Eating',
          text: 'Eating'
        },
        {
          value: 'Grimace',
          text: 'Grimace'
        },
        {
          value: 'Sad',
          text: 'Sad'
        },
        {
          value: 'ScreamOpen',
          text: 'ScreamOpen'
        },
        {
          value: 'Serious',
          text: 'Serious'
        },
        {
          value: 'Smile',
          text: 'Smile'
        },
        {
          value: 'Tongue',
          text: 'Tongue'
        },
        {
          value: 'Twinkle',
          text: 'Twinkle'
        },
        {
          value: 'Vomit',
          text: 'Vomit'
        },
      ],
      facialHairColorOptions: [{
          value: 'Auburn',
          text: 'Auburn'
        },
        {
          value: 'Black',
          text: 'Black'
        },
        {
          value: 'Blonde',
          text: 'Blonde'
        },
        {
          value: 'BlondeGolden',
          text: 'BlondeGolden'
        },
        {
          value: 'Brown',
          text: 'Brown'
        },
        {
          value: 'BrownDark',
          text: 'BrownDark'
        },
        {
          value: 'PastelPink',
          text: 'PastelPink'
        },
        {
          value: 'Platinum',
          text: 'Platinum'
        },
        {
          value: 'Red',
          text: 'Red'
        },
        {
          value: 'SilverGray',
          text: 'SilverGray'
        },
      ],
      clotheTypeOptions: [{
          value: 'BlazerShirt',
          text: 'BlazerShirt'
        },
        {
          value: 'BlazerSweater',
          text: 'BlazerSweater'
        },
        {
          value: 'CollarSweater',
          text: 'CollarSweater'
        },
        {
          value: 'GraphicShirt',
          text: 'GraphicShirt'
        },
        {
          value: 'Hoodie',
          text: 'Hoodie'
        },
        {
          value: 'Overall',
          text: 'Overall'
        },
        {
          value: 'ShirtCrewNeck',
          text: 'ShirtCrewNeck'
        },
        {
          value: 'ShirtScoopNeck',
          text: 'ShirtScoopNeck'
        },
        {
          value: 'ShirtVNeck',
          text: 'ShirtVNeck'
        },
      ],
      graphicTypeOptions: [{
          value: 'Bat',
          text: 'Bat'
        },
        {
          value: 'Cumbia',
          text: 'Cumbia'
        },
        {
          value: 'Deer',
          text: 'Deer'
        },
        {
          value: 'Diamond',
          text: 'Diamond'
        },
        {
          value: 'Hola',
          text: 'Hola'
        },
        {
          value: 'Pizza',
          text: 'Pizza'
        },
        {
          value: 'Resist',
          text: 'Resist'
        },
        {
          value: 'Selena',
          text: 'Selena'
        },
        {
          value: 'Bear',
          text: 'Bear'
        },
        {
          value: 'SkullOutline',
          text: 'SkullOutline'
        },
        {
          value: 'Skull',
          text: 'Skull'
        },
      ],
      eyeTypeOptions: [{
          value: 'Close',
          text: 'Close'
        },
        {
          value: 'Cry',
          text: 'Cry'
        },
        {
          value: 'Default',
          text: 'Default'
        },
        {
          value: 'Dizzy',
          text: 'Dizzy'
        },
        {
          value: 'EyeRoll',
          text: 'EyeRoll'
        },
        {
          value: 'Happy',
          text: 'Happy'
        },
        {
          value: 'Hearts',
          text: 'Hearts'
        },
        {
          value: 'Side',
          text: 'Side'
        },
        {
          value: 'Squint',
          text: 'Squint'
        },
        {
          value: 'Surprised',
          text: 'Surprised'
        },
        {
          value: 'Wink',
          text: 'Wink'
        },
        {
          value: 'WinkWacky',
          text: 'WinkWacky'
        },
      ],
      topTypeOptions: [{
          value: 'NoHair',
          text: 'NoHair'
        },
        {
          value: 'Eyepatch',
          text: 'Eyepatch'
        },
        {
          value: 'Hat',
          text: 'Hat'
        },
        {
          value: 'Hijab',
          text: 'Hijab'
        },
        {
          value: 'Turban',
          text: 'Turban'
        },
        {
          value: 'WinterHat1',
          text: 'WinterHat1'
        },
        {
          value: 'WinterHat2',
          text: 'WinterHat2'
        },
        {
          value: 'WinterHat3',
          text: 'WinterHat3'
        },
        {
          value: 'WinterHat4',
          text: 'WinterHat4'
        },
        {
          value: 'LongHairBigHair',
          text: 'LongHairBigHair'
        },
        {
          value: 'LongHairBob',
          text: 'LongHairBob'
        },
        {
          value: 'LongHairBun',
          text: 'LongHairBun'
        },
        {
          value: 'LongHairCurly',
          text: 'LongHairCurly'
        },
        {
          value: 'LongHairCurvy',
          text: 'LongHairCurvy'
        },
        {
          value: 'LongHairDreads',
          text: 'LongHairDreads'
        },
        {
          value: 'LongHairFrida',
          text: 'LongHairFrida'
        },
        {
          value: 'LongHairFro',
          text: 'LongHairFro'
        },
        {
          value: 'LongHairFroBand',
          text: 'LongHairFroBand'
        },
        {
          value: 'LongHairNotTooLong',
          text: 'LongHairNotTooLong'
        },
        {
          value: 'LongHairShavedSides',
          text: 'LongHairShavedSides'
        },
        {
          value: 'LongHairMiaWallace',
          text: 'LongHairMiaWallace'
        },
        {
          value: 'LongHairStraight',
          text: 'LongHairStraight'
        },
        {
          value: 'LongHairStraight2',
          text: 'LongHairStraight2'
        },
        {
          value: 'LongHairStraightStrand',
          text: 'LongHairStraightStrand'
        },
        {
          value: 'ShortHairDreads01',
          text: 'ShortHairDreads01'
        },
        {
          value: 'ShortHairDreads02',
          text: 'ShortHairDreads02'
        },
        {
          value: 'ShortHairFrizzle',
          text: 'ShortHairFrizzle'
        },
        {
          value: 'ShortHairShaggyMullet',
          text: 'ShortHairShaggyMullet'
        },
        {
          value: 'ShortHairShortCurly',
          text: 'ShortHairShortCurly'
        },
        {
          value: 'ShortHairShortFlat',
          text: 'ShortHairShortFlat'
        },
        {
          value: 'ShortHairShortRound',
          text: 'ShortHairShortRound'
        },
        {
          value: 'ShortHairShortWaved',
          text: 'ShortHairShortWaved'
        },
        {
          value: 'ShortHairSides',
          text: 'ShortHairSides'
        },
        {
          value: 'ShortHairTheCaesar',
          text: 'ShortHairTheCaesar'
        },
        {
          value: 'ShortHairTheCaesarSidePart',
          text: 'ShortHairTheCaesarSidePart'
        },
      ],
      eyebrowTypeOptions: [{
          value: 'Angry',
          text: 'Angry'
        },
        {
          value: 'AngryNatural',
          text: 'AngryNatural'
        },
        {
          value: 'Default',
          text: 'Default'
        },
        {
          value: 'DefaultNatural',
          text: 'DefaultNatural'
        },
        {
          value: 'FlatNatural',
          text: 'FlatNatural'
        },
        {
          value: 'RaisedExcited',
          text: 'RaisedExcited'
        },
        {
          value: 'RaisedExcitedNatural',
          text: 'RaisedExcitedNatural'
        },
        {
          value: 'SadConcerned',
          text: 'SadConcerned'
        },
        {
          value: 'SadConcernedNatural',
          text: 'SadConcernedNatural'
        },
        {
          value: 'UnibrowNatural',
          text: 'UnibrowNatural'
        },
        {
          value: 'UpDown',
          text: 'UpDown'
        },
        {
          value: 'UpDownNatural',
          text: 'UpDownNatural'
        },
      ],
      facialHairTypeOptions: [{
          value: 'Blank',
          text: 'Blank'
        },
        {
          value: 'BeardMedium',
          text: 'BeardMedium'
        },
        {
          value: 'BeardLight',
          text: 'BeardLight'
        },
        {
          value: 'BeardMagestic',
          text: 'BeardMagestic'
        },
        {
          value: 'MoustacheFancy',
          text: 'MoustacheFancy'
        },
        {
          value: 'MoustacheMagnum',
          text: 'MoustacheMagnum'
        },
      ],

      clotheColorOptions: [{
          value: 'Black',
          text: 'Black'
        },
        {
          value: 'Blue01',
          text: 'Blue01'
        },
        {
          value: 'Blue02',
          text: 'Blue02'
        },
        {
          value: 'Blue03',
          text: 'Blue03'
        },
        {
          value: 'Gray01',
          text: 'Gray01'
        },
        {
          value: 'Gray02',
          text: 'Gray02'
        },
        {
          value: 'Heather',
          text: 'Heather'
        },
        {
          value: 'PastelBlue',
          text: 'PastelBlue'
        },
        {
          value: 'PastelGreen',
          text: 'PastelGreen'
        },
        {
          value: 'PastelOrange',
          text: 'PastelOrange'
        },
        {
          value: 'PastelRed',
          text: 'PastelRed'
        },
        {
          value: 'PastelYellow',
          text: 'PastelYellow'
        },
        {
          value: 'Pink',
          text: 'Pink'
        },
        {
          value: 'Red',
          text: 'Red'
        },
        {
          value: 'White',
          text: 'White'
        },
      ],
      accessoriesTypeOptions: [{
          value: 'Blank',
          text: 'Blank'
        },
        {
          value: 'Kurt',
          text: 'Kurt'
        },
        {
          value: 'Prescription01',
          text: 'Prescription01'
        },
        {
          value: 'Prescription02',
          text: 'Prescription02'
        },
        {
          value: 'Round',
          text: 'Round'
        },
        {
          value: 'Sunglasses',
          text: 'Sunglasses'
        },
        {
          value: 'Wayfarers',
          text: 'Wayfarers'
        },
      ]

    };
  },
  computed: {
    checkouts() {
      return this.$store.getters.checkouts;
    },
    skinColor: {
      get() {
        return this.$store.getters.avatar.skinColor;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'skinColor',
          value,
        })
      }
    },
    accessoriesType: {
      get() {
        return this.$store.getters.avatar.accessoriesType;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'accessoriesType',
          value,
        })
      }
    },
    clotheType: {
      get() {
        return this.$store.getters.avatar.clotheType;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'clotheType',
          value,
        })
      }
    },
    clotheColor: {
      get() {
        return this.$store.getters.avatar.clotheColor;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'clotheColor',
          value,
        })
      }
    },
    eyebrowType: {
      get() {
        return this.$store.getters.avatar.eyebrowType;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'eyebrowType',
          value,
        })
      }
    },
    eyeType: {
      get() {
        return this.$store.getters.avatar.eyeType;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'eyeType',
          value,
        })
      }
    },
    facialHairColor: {
      get() {
        return this.$store.getters.avatar.facialHairColor;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'facialHairColor',
          value,
        })
      }
    },
    facialHairType: {
      get() {
        return this.$store.getters.avatar.facialHairType;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'facialHairType',
          value,
        })
      }
    },
    graphicType: {
      get() {
        return this.$store.getters.avatar.graphicType;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'graphicType',
          value,
        })
      }
    },
    hairColor: {
      get() {
        return this.$store.getters.avatar.hairColor;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'hairColor',
          value,
        })
      }
    },
    mouthType: {
      get() {
        return this.$store.getters.avatar.mouthType;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'mouthType',
          value,
        })
      }
    },
    topType: {
      get() {
        return this.$store.getters.avatar.topType;
      },
      set(value) {
        this.$store.commit({
          type: 'avatar',
          key: 'topType',
          value,
        })
      }
    }
  },
  methods: {
    truncate(str) {
      const n = 100;
      return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
    }
  }
};
</script>

<style>
.history a {
  color: #32325d;
}

.history > .card > .card-body {
  padding-top: 0;
}
</style>
