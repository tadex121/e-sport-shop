import { createStore } from "vuex";


export default createStore({
  modules: {
   
  },
  state() {
    return {
    
      forSale: [
        {
          openId: 1,
          name: "Protein Pancake Mix",
          image: require("../assets/proteini1.jpg"),
          text:
            "Delicious, easy-to-make pancake mix with fast- and slow-digesting protein.",
          price: 4.49,
        },
        {
          openId: 2,
          name: "All-Natural Peanut Butter",
          image: require("../assets/proteini2.jpg"),
          text:
            "Created with a blend of roasted brown peanuts, with a little extra crunch.",
          price: 9.99,
        },
        {
          openId: 3,
          name: "Protein Pancake Mix",
          image: require("../assets/proteini3.jpg"),
          text:
            "Our Layered Protein Bar is our most indulgent protein bar yet. You must try it!",
          price: 26.09,
        },
        {
          openId: 4,
          name: "Carb Crusher",
          image: require("../assets/proteini4.jpg"),
          text:
            "Packed with protein alongside 20 essential vitamins and minerals, these bars will help you.",
          price: 21.24,
        },
        {
          openId: 5,
          name: "Sugar-Free Syrup",
          image: require("../assets/proteini5.jpg"),
          text:
            "Sugar-free, fat-free syrups – perfect for topping food without extra calories.",
          price: 5.11,
        },
        {
          openId: 6,
          name: "Oat Bakes",
          image: require("../assets/proteini6.jpg"),
          text:
            "The soft and chewy protein treat, our Oatbakes are perfect for satisfying sweet-tooth cravings.",
          price: 21.14,
        },
        {
          openId: 7,
          name: "100% Instant Oats",
          image: require("../assets/proteini7.jpg"),
          text:
            "Breakfast time sorted with super-simple, nutritious oat powder.",
          price: 3.52,
        },
        {
          openId: 8,
          name: "Filled Protein Cookie",
          image: require("../assets/proteini8.jpg"),
          text:
            " Delicious, easy-to-make pancake mix with fast- and slow-digesting protein.",
          price: 4.49,
        },
        {
          openId: 9,
          name: "Organic Chia Super Seeds",
          image: require("../assets/proteini9.jpg"),
          text:
            "100% organic chia seeds, for a natural source of protein and fibre.",
          price: 27.89,
        },
        {
          openId: 10,
          name: "Protein Granola",
          image: require("../assets/proteini10.jpg"),
          text:
            "Great for breakfast or as a post-workout snack, Protein Granola is full to the brim.",
          price: 15.74,
        },
        {
          openId: 11,
          name: "Double Walled Bottle",
          image: require("../assets/proteini11.jpg"),
          text:
            "Our Double Walled Bottle will keep it at the temperature you need.",
          price: 12.99,
        },
        {
          openId: 12,
          name: "MP Technical Backpack - Black",
          image: require("../assets/proteini12.jpg"),
          text:
            "Our Technical Backpack offers additional compartments for the ultimate storage solution.",
          price: 28.99,
        },
      ],
      inCart: [],
    }
  },
  getters: {
   
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, openId) { state.inCart.push(openId); },
    REMOVE_FROM_CART(state, index) {
      state.inCart.splice(index, 1);
    },
    },
  actions: {
      addToCart(context, openId) {
        context.commit('ADD_TO_CART', openId);
      },
      removeFromCart(context, index) {
      context.commit('REMOVE_FROM_CART', index); 
        },
    },
  });
