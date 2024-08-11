<!-- App.vue -->
<template>
  <div class="bg-gray-100 min-h-screen">
    <header class="bg-blue-500 text-white py-4">
      <nav class="container mx-auto flex justify-between items-center">
        <ul class="flex space-x-4">
          <li><router-link to="/" class="hover:text-gray-300">Contact Book</router-link></li>
          <li><router-link to="/new" class="hover:text-gray-300">New Contact</router-link></li>
        </ul>
      </nav>
    </header>
    <main class="container mx-auto py-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>