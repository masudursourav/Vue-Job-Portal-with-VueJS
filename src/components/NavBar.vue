<script setup>
import logo from '@/assets/img/logo.png'
import { navLinks, navTitle } from '@/constants'
import { RouterLink, useRoute } from 'vue-router'
const activeRoute = (routePath) => {
  const route = useRoute()
  return route.path === routePath
}
</script>
<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">{{ navTitle }}</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[
                  'text-white',
                  'hover:bg-green-900',
                  'hover:text-white',
                  'rounded-md',
                  'px-3',
                  'py-2',
                  activeRoute('/') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white',
                ]"
                >{{ navLinks.home.name }}
              </RouterLink>
              <RouterLink
                to="/jobs"
                :class="[
                  'text-white',
                  'hover:bg-green-900',
                  'hover:text-white',
                  'rounded-md',
                  'px-3',
                  'py-2',
                  activeRoute('/jobs') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white',
                ]"
                >{{ navLinks.jobs.name }}
              </RouterLink>
              <RouterLink
                to="/add-job"
                :class="[
                  'text-white',
                  'hover:bg-green-900',
                  'hover:text-white',
                  'rounded-md',
                  'px-3',
                  'py-2',
                  activeRoute('/add-job') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white',
                ]"
                >{{ navLinks.addJobs.name }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
