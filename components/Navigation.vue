<script setup>
const links = [
  { name: 'STORY', to: '#story-section' },
  { name: 'WORKS', to: '#works-section' },
  { name: 'EXPERIENCE', to: '#experience-section' },
  { name: 'CONTACTS', to: '#contacts-section' },
]
</script>

<style>
</style>

<template>
  <nav class="nav">
    <div class="nav-logo">
      <h1 class="nav-logo-title">
        <NuxtLink class="nav-logo-title-link" to="/">
          KOOP PASCALE
        </NuxtLink>
      </h1>
    </div>
    <div class="nav-links">
      <ul class="nav-link-list">
        <li v-for="link in links" :key="link.name" class="nav-list-item">
          <NuxtLink :to="link.to" class="nav-link">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>