<template>
    <div class="favorites-dropdown" v-if="showFavorites">
      <div class="favorites-header">
        <h3>Your Favorites</h3>
        <button @click="closeFavorites" class="close-btn">×</button>
      </div>
      <div v-if="favorites.length === 0" class="empty-favorites">
        No favorites yet!
      </div>
      <div v-else class="favorites-list">
        <div v-for="item in favorites" :key="item.food_id" class="favorite-item">
          <img :src="require(`@/assets/images/${item.food_src}`)" 
               :alt="item.food_name" 
               class="favorite-image" />
          <div class="favorite-info">
            <h4>{{ item.food_name }}</h4>
            <p>${{ (item.food_price - item.food_discount).toFixed(2) }}</p>
          </div>
          <button @click="removeFavorite(item.food_id)" class="remove-btn">
            ×
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['showFavorites'],
    computed: {
      favorites() {
        return this.$store.state.favorites;
      }
    },
    methods: {
      removeFavorite(id) {
        this.$store.commit('REMOVE_FROM_FAVORITES', id);
      },
      closeFavorites() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style scoped>
  .favorites-dropdown {
    position: absolute;
    right: 20px;
    top: 60px;
    background: white;
    width: 300px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 1000;
    max-height: 400px;
    overflow-y: auto;
  }
  
  .favorite-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  
  .favorite-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 15px;
  }
  
  .favorite-info {
    flex-grow: 1;
  }
  
  .favorite-info h4 {
    margin: 0;
    font-size: 1rem;
  }
  
  .favorite-info p {
    margin: 5px 0 0;
    color: #27ae60;
    font-weight: bold;
  }
  
  .remove-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #e74c3c;
    cursor: pointer;
    padding: 0 10px;
  }
  
  .favorites-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #f8f9fa;
    border-bottom: 2px solid #27ae60;
  }
  
  .empty-favorites {
    padding: 20px;
    text-align: center;
    color: #666;
  }
  
  .close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  </style>