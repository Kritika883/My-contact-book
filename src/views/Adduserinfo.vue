<script setup lang="ts">
import ContactForm from "@/components/ContactForm.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const addContact = (contact: any) => {
  const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  router.push("/");
};
</script>

<template>
  <div class="container">
    <div class="card">
      <h2>➕ Add a New Contact</h2>
      <p>Fill in the details below to add a new contact to your list.</p>
      <ContactForm @submit="addContact" />
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #4facfe, #00f2fe);
}


.card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 400px;
  max-width: 90%;
}


h2 {
  color: #333;
  margin-bottom: 10px;
}


p {
  font-size: 14px;
  color: gray;
  margin-bottom: 20px;
}


@media (max-width: 600px) {
  .container {
    padding: 20px;
  }

  .card {
    width: 100%;
  }
}
</style>
