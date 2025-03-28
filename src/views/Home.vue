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
    <!-- Navbar -->
    <nav>
      <h1>📇 Contact Book</h1>
      <button @click="goToAdd">➕ Add Contact</button>
    </nav>

    <!-- Search Box -->
    <div class="search-container">
      <input v-model="searchQuery" placeholder="🔍 Search contacts..." />
    </div>

    <!-- Contact List -->
    <ContactList :search-query="searchQuery" />
  </div>
</template>

<style >

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.container {
  max-width: 100%;
  padding: 20px;
  background: linear-gradient(to right, #2193b0, #6dd5ed);
  min-height: 100vh;
}


nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 15px 20px;
  border-radius: 10px;
}

nav h1 {
  font-size: 26px;
  color: white;
}

nav button {
  background: #ff9800;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;
}

nav button:hover {
  background: #e68900;
}


.search-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.search-container input {
  width: 350px;
  padding: 12px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  outline: none;
}


@media (max-width: 600px) {
  nav {
    flex-direction: column;
    text-align: center;
  }
  
  .search-container input {
    width: 90%;
  }
}
</style>
