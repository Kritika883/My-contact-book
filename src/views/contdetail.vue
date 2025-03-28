<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneno: string;
  address: string;
}

const route = useRoute();
const router = useRouter();
const contact = ref<Contact | null>(null);

onMounted(() => {
  const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
  contact.value = contacts.find((c: Contact) => c.id === Number(route.params.id));
});

const deleteContact = () => {
  const contacts = JSON.parse(localStorage.getItem("contacts") || "[]").filter(
    (c: Contact) => c.id !== Number(route.params.id)
  );
  localStorage.setItem("contacts", JSON.stringify(contacts));
  router.push("/");
};
</script>

<template>
  <div v-if="contact" class="profile-container">
    <div class="profile-card">
      <div class="profile-header">
        <img src="https://via.placeholder.com/120" alt="Profile Picture" class="profile-img" />
        <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
        <p class="contact-title">📞 {{ contact.phoneno }}</p>
      </div>

      <div class="profile-info">
        <p><strong>Email:</strong> {{ contact.email }}</p>
        <p><strong>Address:</strong> {{ contact.address }}</p>
      </div>

      <div class="profile-actions">
        <button class="edit-btn" @click="$router.push(`/edit/${contact.id}`)">✏️ Edit</button>
        <button class="delete-btn" @click="deleteContact">🗑️ Delete</button>
      </div>
    </div>
  </div>
</template>

<style>

.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #4facfe, #00f2fe);
}


.profile-card {
  width: 400px;
  background: white;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 25px;
}


.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #007bff;
  margin-bottom: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}


.contact-title {
  color: gray;
  font-size: 16px;
}


.profile-info {
  margin-top: 20px;
  text-align: left;
  padding: 0 20px;
}

.profile-info p {
  font-size: 16px;
  margin: 10px 0;
}


.profile-actions {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

button {
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  transition: 0.3s ease;
}


.edit-btn {
  background: #007bff;
  color: white;
}

.edit-btn:hover {
  background: #0056b3;
}


.delete-btn {
  background: #dc3545;
  color: white;
}

.delete-btn:hover {
  background: #a71d2a;
}


@media (max-width: 600px) {
  .profile-card {
    width: 90%;
  }
}
</style>
