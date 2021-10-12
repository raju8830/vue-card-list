<template>
  <div id="app">
  <!--NavBar Section -->
  <navbar @search="search"></navbar>
    <!--Card Content Section -->
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-9">
          <router-link to="/About">Click The Page</router-link>
          <inventory @newItemAdded="addCartItem" :items="item"></inventory>
        </div>
        <!-- Card List Part-->
        <div class="col-md-3 mt-4">
          <card @itemRemove="itemRemoves" :items="card"></card>
        </div>
      </div>
    </div>
    <!--- Footer Section Part -->
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Inventory from "./components/Inventory";
import Footer from "./components/Footer";

import data from "./data";

export default {
  components:{
    Navbar,
    Card,
    Inventory,
    Footer
  },
  data (){
    return{
      item: [],
      card:[]
    }
  },
  mounted() {
    this.item = data
  },
  methods:{
    search(keyword){
      this.item = data.filter(item =>{
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
    },
    addCartItem(item){
      this.card.push(item)
    },
    itemRemoves(index){
      this.card.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
.footer-bg{
  color: #fff;
}
.footer-bg ul li a{
  color: #ffffff ;
}

</style>
