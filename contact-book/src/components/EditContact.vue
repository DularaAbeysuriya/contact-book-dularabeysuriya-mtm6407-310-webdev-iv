<!-- EditContact.vue -->
<!-- EditContact.vue -->
<template>
    <div class="edit-contact bg-gray-100 py-8">
      <div class="container mx-auto">
        <h1 class="text-2xl font-bold mb-4">Edit Contact</h1>
        <div class="bg-white rounded-md shadow-md p-4">
          <form @submit.prevent="updateContact" class="space-y-4">
            <div>
              <label for="firstName" class="block font-bold mb-2">First Name:</label>
              <input type="text" id="firstName" v-model="contact.firstName" required class="border rounded-md px-4 py-2 w-full" />
            </div>
            <div>
              <label for="lastName" class="block font-bold mb-2">Last Name:</label>
              <input type="text" id="lastName" v-model="contact.lastName" required class="border rounded-md px-4 py-2 w-full" />
            </div>
            <div>
              <label for="email" class="block font-bold mb-2">Email:</label>
              <input type="email" id="email" v-model="contact.email" required class="border rounded-md px-4 py-2 w-full" />
            </div>
            <button type="submit" class="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">Update Contact</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    name: 'EditContact',
    setup() {
      const route = useRoute();
      const router = useRouter();
      const contact = reactive({});
  
      onMounted(() => {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const selectedContact = contacts.find((c) => c.id === route.params.id);
        Object.assign(contact, selectedContact);
      });
  
      const updateContact = () => {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const updatedContacts = contacts.map((c) => (c.id === contact.id ? contact : c));
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        router.push(`/contact/${contact.id}`);
      };
  
      return { contact, updateContact };
    },
  };
  </script>