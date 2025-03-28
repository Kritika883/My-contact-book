<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">🏠 Home</router-link>
      </li>
      <li>
        <router-link to="/add">➕ Add Contact</router-link>
      </li>
      <li>
        <router-link to="/contacts">📜 Contact List</router-link>
      </li>
    </ul>
  </nav>

  <router-view />
</template>

<style scoped>

nav {
  background: #333;
  padding: 12px;
  display: flex;
  justify-content: center;
}


ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

li {
  display: inline;
}


a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 5px;
  transition: 0.3s ease;
}


a:hover {
  background: #007bff;
}


.router-link-active {
  background: #ff5722;
}
</style>
