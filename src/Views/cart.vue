<template>
  <div class="cart">
    <h2 class="cart-title">Basket</h2>
    <ul class="cart-items">
      <li v-for="product in cartProducts" :key="product.id" class="cart-item">
        <div class="item-info">
          <img :src="product.image" alt="Product Image" class="item-image" />
          <div class="item-details">
            <h3 class="item-name">{{ product.name }}</h3>
            <p class="item-price">{{ formatPrice(product.price) }}</p>
            <div class="item-quantity">
              <button @click="decrementQuantity(product)">-</button>
              <span>{{ product.quantity }}</span>
              <button @click="incrementQuantity(product)">+</button>
            </div>
          </div>
        </div>
        <button @click="removeFromCart(product)" class="remove-button">Видалити</button>
      </li>
    </ul>
    <div class="cart-summary">
      <p class="total-items">Total goods: {{ totalItems }}</p>
      <p class="total-price">The total cost: {{ formatPrice(totalPrice) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cartProducts: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    totalItems() {
      return this.cartProducts.reduce((total, product) => total + product.quantity, 0);
    },
    totalPrice() {
      return this.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
    },
  },
  methods: {
    formatPrice(price) {
      // Додатковий код для форматування ціни за необхідними правилами
      return price.toFixed(2); // Приклад форматування до двох знаків після коми
    },
    incrementQuantity(product) {
      // Додатковий код для збільшення кількості товару у корзині
      product.quantity++;
    },
    decrementQuantity(product) {
      // Додатковий код для зменшення кількості товару у корзині
      if (product.quantity > 1) {
        product.quantity--;
      }
    },
    removeFromCart(product) {
      // Додатковий код для видалення товару з корзини
      const index = this.cartProducts.indexOf(product);
      if (index !== -1) {
        this.cartProducts.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
.cart {
  border: 1px solid #ccc;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 50px;
}

.cart-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.cart-items {
  list-style: none;
  padding: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.item-info {
  display: flex;
  align-items: center;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
}

.item-details {
  flex: 1;
}

.item-name {
  font-size: 18px;
  margin-bottom: 5px;
}

.item-price {
  font-size: 16px;
  margin-bottom: 5px;
}

.item-quantity {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.item-quantity button {
  width: 30px;
  height: 30px;
  font-size: 16px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
}

.remove-button {
  border: none;
  background-color: #f0f0f0;
  color: #ff0000;
  font-size: 14px;
  cursor: pointer;
}

.cart-summary {
  margin-top: 20px;
  text-align: right;
}

.total-items {
  font-size: 16px;
  margin-bottom: 5px;
}

.total-price {
  font-size: 18px;
  font-weight: bold;
}
</style>
