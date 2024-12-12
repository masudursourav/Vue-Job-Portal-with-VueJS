<script setup>
import HeroTab from '@/components/HeroTab.vue'
import HomeCards from '@/components/HomeCards.vue'
import JobListing from '@/components/JobListing.vue'
</script>
<template>
  <HeroTab />
  <HomeCards />
  <JobListing limit="3" showBtn="true" />
</template>
