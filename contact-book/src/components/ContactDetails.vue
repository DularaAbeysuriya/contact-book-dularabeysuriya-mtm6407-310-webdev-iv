<!-- ContactDetails.vue -->
<template>
    <div class="contact-details bg-gray-100 py-8">
      <div class="container mx-auto">
        <h1 class="text-2xl font-bold mb-4">Contact Details</h1>
        <div class="bg-white rounded-md shadow-md p-4">
          <h3 class="text-lg font-bold">{{ contact.firstName }} {{ contact.lastName }}</h3>
          <p class="text-gray-600 mb-4">Email: {{ contact.email }}</p>
          <div class="flex justify-end">
            <button class="bg-blue-500 text-white rounded-md px-4 py-2 mr-2 hover:bg-blue-600" @click="editContact">Edit</button>
            <button class="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600" @click="deleteContact">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    name: 'ContactDetails',
    setup() {
      const route = useRoute();
      const router = useRouter();
      const contact = reactive({});
  
      onMounted(() => {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const selectedContact = contacts.find((c) => c.id === route.params.id);
        Object.assign(contact, selectedContact);
      });
  
      const editContact = () => {
        router.push(`/edit/${contact.id}`);
      };
  
      const deleteContact = () => {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const updatedContacts = contacts.filter((c) => c.id !== contact.id);
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        router.push('/');
      };
  
      return { contact, editContact, deleteContact };
    },
  };
  </script>