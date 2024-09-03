<script setup>
import Hero from '@/components/Hero.vue';
import MainCards from '@/components/MainCards.vue';
import JobsListings from '@/components/JobsListings.vue';
</script>
<template>
  <Hero />
  <MainCards />
  <JobsListings :limit="3" :is-visible="true" />
</template>
