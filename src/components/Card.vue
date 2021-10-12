<template>
  <!-- Card Section -->
  <ul class="list-group" id="position">
    <li class="list-group-item">
      <span class="item-name">Name</span>
      <span class="item-price float-end">Price</span>
    </li>

    <hr>

    <li v-for="(item, index) in items" :key="index" class="list-group-item">
      <span class="item-name">{{ item.title }}</span>
      <button class="btn btn-sm btn-danger custom_btn" @click="removeItem">-</button>
      <span class="item-price float-end">${{ item.price }}</span>
    </li>

    <hr>

    <li class="list-group-item">
      <span class="item-name">Total Price</span>
      <span class="item-price float-end">${{ totalPrice }}</span>
    </li>


  </ul>
</template>

<script>
export default {
  props: ['items'],
  computed: {
    totalPrice() {
      let total = 0
      this.items.forEach(item => {
        total += parseFloat(item.price)
      })
      return parseFloat(total).toFixed(2)
    }
  },
  methods:{
    removeItem(index){
      this.$emit('itemRemove', index)
    }
  },
  name: "Card"
}
</script>

<style scoped>
html{
  scroll-behavior: smooth;
}
.custom_btn{
  margin: 0 10px;
  padding: 0 10px;
}
.custom_btn:focus{
  box-shadow: none;
  border: none;
  outline: none;
  box-sizing: border-box;
}

</style>