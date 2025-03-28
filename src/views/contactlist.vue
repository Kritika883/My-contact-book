<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import ContactList from "@/components/ContactList.vue";

const router = useRouter();
const searchQuery = ref("");

const goToAdd = () => {
  router.push("/add");
};
</script>

<template>
  <div class="container">
    <!-- Header -->
    <header>
      <h1>📖 Contact Book</h1>
    </header>

    <!-- Search Box -->
    <div class="searchbox">
      <input v-model="searchQuery" placeholder="🔍 Search contacts..." />
    </div>

    <!-- Contact List -->
    <ContactList :search-query="searchQuery" />
  </div>
</template>

<style scoped>
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Page Container */
.container {
  background: linear-gradient(to right, #6a11cb, #2575fc);
  min-height: 100vh;
  padding: 20px;
  text-align: center;
}

/* Header */
header {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
  margin: 20px auto;
}

header h1 {
  font-size: 30px;
  color: white;
  font-weight: bold;
}

/* Search Box */
.searchbox {
  width: 400px;
  background: white;
  text-align: center;
  padding: 10px;
  border-radius: 25px;
  margin: 20px auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.searchbox input {
  font-size: 18px;
  height: 35px;
  width: 100%;
  border: none;
  padding: 5px 10px;
  outline: none;
  border-radius: 25px;
  text-align: center;
}

/* Responsive Design */
@media (max-width: 600px) {
  .searchbox {
    width: 90%;
  }
}
</style>
