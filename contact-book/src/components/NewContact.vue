<!-- NewContact.vue -->

<template>
    <div class="new-contact bg-gray-100 py-8">
      <div class="container mx-auto">
        <h1 class="text-2xl font-bold mb-4">New Contact</h1>
        <div class="bg-white rounded-md shadow-md p-4">
          <form @submit.prevent="saveContact" class="space-y-4">
            <div>
              <label for="firstName" class="block font-bold mb-2">First Name:</label>
              <input type="text" id="firstName" v-model="newContact.firstName" required class="border rounded-md px-4 py-2 w-full" />
            </div>
            <div>
              <label for="lastName" class="block font-bold mb-2">Last Name:</label>
              <input type="text" id="lastName" v-model="newContact.lastName" required class="border rounded-md px-4 py-2 w-full" />
            </div>
            <div>
              <label for="email" class="block font-bold mb-2">Email:</label>
              <input type="email" id="email" v-model="newContact.email" required class="border rounded-md px-4 py-2 w-full" />
            </div>
            <button type="submit" class="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">Save Contact</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'NewContact',
    setup() {
      const router = useRouter();
      const newContact = reactive({
        firstName: '',
        lastName: '',
        email: '',
        id: Date.now().toString(),
      });
  
      const saveContact = () => {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push(newContact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        router.push(`/contact/${newContact.id}`);
      };
  
      return { newContact, saveContact };
    },
  };
  </script>