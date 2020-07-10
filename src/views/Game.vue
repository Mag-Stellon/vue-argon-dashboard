<template>
  <div>
    <!-- Header -->
    <base-header class="base-header pb-6 pb-8 pt-8">
      <!-- Description -->
      <div class="row">
        <div class="col-lg-4 col-sm-12 mb-5 text-center">
          <b-img-lazy thumbnail fluid :src="game.thumb" :alt="game.title"></b-img-lazy>
        </div>

        <div class="col-lg-6 offset-lg-1 col-sm-12 text-center">
          <h1 class="text-white">{{game.title}}</h1>
          <p class="text-white mt-5 mb-5">{{game.description}}</p>
          <em class="text-white mt-0 mb-5">{{game.tags}}</em>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-6 offset-lg-5 text-center">
          <button v-if="unlock && !isStart" @click="start" type="button" class="btn btn-success">
            <i class="fa fa-play mr-2" aria-hidden="true"></i> Play this game
          </button>
          <button
            v-if="!unlock && !isStart"
            @click="modal=true"
            type="button"
            class="btn btn-warning"
          >
            <i class="fa fa-lock mr-2" aria-hidden="true"></i> Unlock this game
          </button>
        </div>
      </div>
    </base-header>

    <!-- Content -->
    <div v-if="isStart" class="container-fluid mt--7 content">
      <div class="row">
        <!-- Card stats -->
        <div v-if="game.instructions" class="col-xl-4 col-lg-6 col-md-12 mb-5">
          <stats-card
            title="Instructions"
            type="gradient-red"
            :sub-title="game.instructions"
            icon="fa fa-info"
            class="mb-4 mb-xl-0"
          ></stats-card>
        </div>
        <div class="col-lg-12 mb-5">
          <div class="card shadow">
            <div class="card-body">
              <div class="row">
                <!-- Add 50px because of unity footer is not taking care by height of the game -->
                <iframe :height="parseInt(game.height) + 50" width="100%" :src="game.url"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <modal :show.sync="modal" modal-classes="modal modal-dialog-centered">
      <h3 slot="header" class="modal-title" id="modal-title-notification">Discover more games !</h3>
      <div class="table-responsive">
        <table class="table align-items-center">
          <tbody class="list">
            <tr v-if="equity > 0">
              <th scope="row" class="first">
                <div class="media align-items-center">
                  <span href="#" class="avatar rounded-circle mr-4 buy-icon">
                    <i class="fa fa-box ni-1-5x"></i>
                  </span>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">Use 1 Game Pack</span>
                  </div>
                </div>
              </th>
              <td class="text-center first">
                <button
                  type="button"
                  class="btn btn-default"
                  @click="checkout()"
                ><i class="fa fa-lock-open mr-2" aria-hidden="true"></i> Unlock</button>
              </td>
            </tr>
            <tr>
              <th scope="row" class="first">
                <div class="media align-items-center">
                  <span href="#" class="avatar rounded-circle mr-4 buy-icon">
                    <i class="fa fa-gamepad ni-1-5x"></i>
                  </span>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">Unlock this game</span>
                  </div>
                </div>
              </th>
              <td class="text-center first">
                <button type="button" class="btn btn-default" @click="payCheckout(unlockGamePrice, `${api}/api/checkout/confirm/${category}/${game.id}/{CHECKOUT_SESSION_ID}`)"><i class="fa fa-shopping-cart mr-2" aria-hidden="true"></i> Buy for €10</button>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div class="media align-items-center">
                  <span href="#" class="avatar rounded-circle mr-4 buy-icon">
                    x10
                  </span>
                  <div class="media-body">
                    <span class="name mb-0 text-sm">Get 10 Games Pack</span>
                  </div>
                </div>
              </th>
              <td class="text-center">
                <button type="button" class="btn btn-default" @click="payCheckout(tenPackGamePrice, `${api}/api/checkout/confirm/10/{CHECKOUT_SESSION_ID}`)"><i class="fa fa-shopping-cart mr-2" aria-hidden="true"></i> Buy for €90</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </modal>
  </div>
</template>

<script>
import Vue from "vue";
import VueClipboard from "vue-clipboard2";
import BTooltipDirective from "bootstrap-vue/es/directives/tooltip";
import store from "@/vuex/store";
import axios from "axios";

Vue.use(VueClipboard);

export default {
  directives: {
    "b-tooltip": BTooltipDirective
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch("fetchGames", {
      api: process.env.VUE_APP_API,
      category: to.params.category,
      success: () => {
        store.dispatch("fetchEquity", {
          api: process.env.VUE_APP_API,
          success: next
        });
      }
    });
  },
  beforeRouteUpdate(to, from, next) {
    store.dispatch("fetchGames", {
      api: process.env.VUE_APP_API,
      category: to.params.category,
      success: () => {
        store.dispatch("fetchEquity", {
          api: process.env.VUE_APP_API,
          success: next
        });
      }
    });
  },
  data() {
    return {
      force: false,
      modal: false,
      isStart: false,
      api: process.env.VUE_APP_API,
      stripePublicKey: process.env.VUE_APP_STRIPE_PUBLIC_KEY,
      unlockGamePrice: process.env.VUE_APP_UNLOCK_GAME_PRICE,
      tenPackGamePrice: process.env.VUE_APP_TEN_PACK_GAME_PRICE
    };
  },
  methods: {
    start() {
      this.isStart = true;
    },
    payCheckout(price, successUrl) {
      this.stripe.redirectToCheckout({
        mode: "payment",
        lineItems: [
          {
            price,
            quantity: 1
          }
        ],
        successUrl,
        cancelUrl: window.location.href
      });
    },
    checkout() {
      axios
        .post(
          `${process.env.VUE_APP_API}/api/checkout/${this.category}/${this.game.id}`
        )
        .then(() => {
          store.dispatch("fetchGames", {
            api: process.env.VUE_APP_API,
            category: this.category,
            success: () => {
              this.modal = false;
              this.force = !this.force;
            }
          });
        });
    }
  },
  computed: {
    identifier() {
      return parseInt(this.$route.params.id);
    },
    category() {
      return this.$route.params.category;
    },
    game() {
      return this.$store.getters.game(this.category, this.identifier, this.force);
    },
    unlock() {
      return !this.game.lock;
    },
    equity() {
      return this.$store.getters.equity;
    },
    stripe() {
      return Stripe(this.stripePublicKey);
    }
  }
};
</script>

<style lang="scss">
.content .card-body {
  margin: 0 auto;
  width: 100%;
}

.content .card-body .row {
  margin: 0;
  width: 100%;
}

.progress-wrapper {
  margin: 0 auto;
}

.progress-wrapper .progress-bar {
  background-color: #6f6366 !important;
}

.progress-label span {
  color: #544c53;
  background-color: #f5f5f8;
}

.modal-content .first {
  border-top: none;
}

.modal-header {
  padding-bottom: 0;
}

.table {
  margin-bottom: 0;
}

.ni-1-5x {
  font-size: 1.5em;
}

$grid-breakpoints-md: 768px;

@media only screen and (max-width: $grid-breakpoints-md) {
  .buy-icon {
    display: none;
  }
}
</style>
