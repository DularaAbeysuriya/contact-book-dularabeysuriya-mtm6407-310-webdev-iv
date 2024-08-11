<!-- ContactBook.vue -->

<template>
    <div class="contact-book">
      <h1 class="text-2xl font-bold mb-4">Contact Book</h1>
      <div class="mb-4">
        <input type="text" v-model="searchText" placeholder="Search by name" class="border rounded-md px-4 py-2 w-full" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div class="bg-white rounded-md shadow-md p-4 cursor-pointer hover:bg-gray-100" v-for="contact in filteredContacts" :key="contact.id" @click="showContactDetails(contact)">
          <h3 class="text-lg font-bold">{{ contact.firstName }} {{ contact.lastName }}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive, computed } from 'vue';
  
  export default {
    name: 'ContactBook',
    setup() {
      const contacts = reactive(JSON.parse(localStorage.getItem('contacts')) || []);
      const searchText = reactive('');
  
      const filteredContacts = computed(() => {
        return contacts.filter(
          (contact) =>
            contact.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(searchText.toLowerCase())
        ).sort((a, b) => a.lastName.localeCompare(b.lastName));
      });
  
      const showContactDetails = (contact) => {
        this.$router.push(`/contact/${contact.id}`);
      };
  
      return { contacts, searchText, filteredContacts, showContactDetails };
    },
  };
  </script>