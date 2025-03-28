<script setup lang="ts">
import ContactForm from "@/components/ContactForm.vue";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const contact = ref<any>(null);

onMounted(() => {
  const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
  contact.value = contacts.find((c: any) => c.id === Number(route.params.id));
});

const updateContact = (updatedContact: any) => {
  let contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
  contacts = contacts.map((c: any) =>
    c.id === updatedContact.id ? updatedContact : c
  );
  localStorage.setItem("contacts", JSON.stringify(contacts));
  router.push("/");
};
</script>

<template>
  <div class="container">
    <div class="card" v-if="contact">
      <h2>✏️ Edit Contact</h2>
      <p>Modify the details below and save the changes.</p>
      <ContactForm :contact="contact" @submit="updateContact" />
    </div>
  </div>
</template>

<style scoped>
/* Page Container */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #00c6ff, #0072ff);
}

/* Card */
.card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 400px;
  max-width: 90%;
  animation: fadeIn 0.5s ease-in-out;
}

/* Heading */
h2 {
  color: #333;
  margin-bottom: 10px;
}

/* Description */
p {
  font-size: 14px;
  color: gray;
  margin-bottom: 20px;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 600px) {
  .container {
    padding: 20px;
  }

  .card {
    width: 100%;
  }
}
</style>
