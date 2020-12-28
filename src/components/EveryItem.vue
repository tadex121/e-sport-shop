<template>
  <div class="col-md-3">
    <div class="card-deck px-4 py-4 bg-secondary">
      <div class="card">
        <img class="card-img-top" :src="image" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{{ name }}</h5>
          <p class="card-text">
            {{ text }}
          </p>
          <p class="card-text">{{ price }}€</p>
          <button
            class="btn btn-primary btn-lg btn-block"
            @click="addToCart(openId)"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EveryItem",
  props: ["openId", "name", "image", "price", "text"],
  methods: {
    addToCart(openId) {
      this.$store.dispatch("addToCart", openId);
    },
  },
};
</script>

<style></style>
