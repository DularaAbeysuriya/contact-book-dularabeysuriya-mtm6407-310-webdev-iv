// router.js
import { createRouter, createWebHistory } from 'vue-router';
import ContactBook from './components/ContactBook.vue';
import ContactDetails from './components/ContactDetails.vue';
import NewContact from './components/NewContact.vue';
import EditContact from './components/EditContact.vue';

const routes = [
  { path: '/', component: ContactBook },
  { path: '/contact/:id', component: ContactDetails },
  { path: '/new', component: NewContact },
  { path: '/edit/:id', component: EditContact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;