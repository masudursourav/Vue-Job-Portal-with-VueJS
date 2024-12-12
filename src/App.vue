<script setup>
import HeroTab from './components/HeroTab.vue'
import HomeCards from './components/HomeCards.vue'
import JobListing from './components/JobListing.vue'
import NavBar from './components/NavBar.vue'
</script>
<template>
  <NavBar />
  <HeroTab />
  <HomeCards />
  <JobListing limit="3" showBtn="true" />
</template>
