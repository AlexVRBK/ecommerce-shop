<template>
  <div>
    <h1>Plant</h1>
    <div class="products">
      <div class="product-card" v-for="(product, index) in products" :key="index">
        <img class="product-image" :src="product.img" :alt="product.title" />
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-price">{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: "1",
          title: "Kyrre",
          img: "https://www.ikea.com/us/en/images/products/kyrre-stool-black__0803294_pe768839_s5.jpg?f=xl",
          price: 24.99
        },
        {
          id: "2",
          title: "Kleppstad",
          img: "https://www.ikea.com/us/en/images/products/kleppstad-wardrobe-with-sliding-doors-white__0998395_pe823023_s5.jpg?f=xl",
          price: 49.99
        },
        {
          id: "3",
          title: "Hemnes",
          img: "https://www.ikea.com/us/en/images/products/hemnes-3-drawer-chest-white-stain__0858195_pe556047_s5.jpg?f=xl",
          price: 299.00
        },
        {
          id: "4",
          title: "Brimnes",
          img: "https://www.ikea.com/us/en/images/products/brimnes-bed-frame-with-storage-white-luroey__1101953_pe866879_s5.jpg?f=xl",
          price: 249.00
        },
        // Додайте інші об'єкти товарів за потреби
      ]
    };
  }
};
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.product-card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.product-title {
  margin-top: 10px;
  font-size: 18px;
}

.product-price {
  margin-top: 5px;
  font-weight: bold;
}
</style>
