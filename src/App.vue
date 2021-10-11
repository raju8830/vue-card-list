<template>
  <div id="app">
  <!--NavBar Section -->
  <navbar></navbar>
    <!--Card Content Section -->
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <inventory @newItemAdded="addCartItem" :items="item"></inventory>
        </div>
        <!-- Card List Part-->
        <div class="col-md-3 mt-4">
          <card :items="card"></card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Inventory from "./components/Inventory";

import data from "./data";

export default {
  components:{
    Navbar,
    Card,
    Inventory
  },
  data (){
    return{
      item: [],
      card:[{
        Id: 1,
        title: "Test",
        price: 10.14,
        photo: "https://ritecaremedicalofficepc.com/wp-content/uploads/2019/09/img_avatar.png"
      }]
    }
  },
  mounted() {
    this.item = data
  },
  methods:{
    addCartItem(item){
      this.card.push(item)
    }
  }
}
</script>

<style lang="scss">


</style>
