<script setup>
import navbar from './components/navbar.vue'
//import Coursespage from './components/views/CoursesPage.vue'
//import NewCourse from './components/views/NewCourse.vue'
</script>

<template>
   <navbar />
   <RouterView />
   </template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
