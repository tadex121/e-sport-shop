<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
    <router-link class="navbar-brand" to="/">
      <img src="../assets/running.png" width="30" heigh="30" alt="" />
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse justify-content-end"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <button
            type="button"
            class="button1 btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Cart {{ numInCart }}
          </button>
        </li>
      </ul>
    </div>
  </nav>

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Shopping cart
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <table class="table">
            <tbody>
              <tr v-for="(item, index) in cart" :key="item">
                <td class="py-5 px-4">{{ item.name }}</td>
                <td><img :src="item.image" style="width:100px;" /></td>
                <td class="py-5 px-4">{{ item.price }}€</td>
                <td>
                  <button
                    class="button2 btn btn-sm btn-danger"
                    @click="removeFromCart(index)"
                  >
                    &times;
                  </button>
                </td>
              </tr>
              <tr>
                <th v-if="total <= 0">Nothing is in cart!</th>
                <th v-else>{{ total.toFixed(2) }}€</th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Keep shopping
          </button>
          <button type="button" class="btn btn-primary">
            Check out
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="d-block w-100"
          src="../assets/sport1.jpg"
          alt="First slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="../assets/sport2.jpg"
          alt="Second slide"
        />
      </div>
      <div class="carousel-item">
        <img
          class="d-block w-100"
          src="../assets/sport3.jpg"
          alt="Third slide"
        />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    removeFromCart(index) {
      this.$store.dispatch("removeFromCart", index);
    },
  },
  computed: {
    inCart() {
      return this.$store.getters.inCart;
    },
    numInCart() {
      return this.inCart.length;
    },
    cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.forSale.find((forSaleItem) => {
          return cartItem === forSaleItem.openId;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
  },
};
</script>

<style scoped>
.button1 {
  position: relative;
  bottom: -1px;
  right: 14px;
}

.button2 {
  position: relative;
  top: 32px;
}

#carouselExampleIndicators {
  position: relative;
  height: 100vh;
}
</style>
