<template>
<!-- Inventory Card Section -->
  <div class="row">
    <div class="col-md-3 mt-4" v-for="(item, index) in items" :key="index">
      <div class="card">
        <img class="card-img-top" :src="item.photo" alt="">
        <div class="card-body">
          <h2 class="card-title">
            {{ item.title }}
          </h2>
          <p class="card-text">
            {{ item.price }}
          </p>
          <a @click="addToCard(item)" class="btn btn-primary">Add +</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['items'],
  methods:{
    addToCard(item){
      this.$emit("newItemAdded", item)
    }
  },
  name: "Inventory"
}
</script>

<style scoped>

</style>