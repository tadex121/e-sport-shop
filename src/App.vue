<template>
  <TheHeader />

  <div class="row">
    <EveryItem
      v-for="item in forSale"
      :key="item.openId"
      :openId="item.openId"
      :name="item.name"
      :image="item.image"
      :price="item.price"
      :text="item.text"
    />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import EveryItem from "./components/EveryItem";
export default {
  components: { TheHeader, EveryItem },
  computed: {
    forSale() {
      return this.$store.getters.forSale;
    },
    inCart() {
      return this.$store.getters.inCart;
    },
  },
};
</script>

<style></style>
