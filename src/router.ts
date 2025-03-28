import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue"; 
import ContactListView from "@/views/contactlist.vue"; 
import AddContact from "@/views/adduserinfo.vue";
import ContactDetails from "@/views/contdetail.vue";
import EditContact from "@/views/editcontactinfo.vue";

const routes = [
  { path: "/", component: HomeView },  
  { path: "/contacts", component: ContactListView },  
  { path: "/add", component: AddContact },
  { path: "/details/:id", component: ContactDetails },
  { path: "/edit/:id", component: EditContact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
