<script setup>
import BackButton from '@/components/BackButton.vue'
import { singleJobViewTexts, yearText } from '@/constants'
import router from '@/router'
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { useToast } from 'vue-toastification'
const route = useRoute()
const jobId = route.params.id
const state = reactive({
  job: {},
  loading: true,
})
const toast = useToast()
onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${jobId}`)
    state.job = response.data
    console.log(state.job)
  } catch (error) {
    console.error(error)
  } finally {
    state.loading = false
  }
})
const deleteJob = async () => {
  try {
    const confirm = window.confirm('Are you sure you want to delete this job?')
    if (!confirm) return
    await axios.delete(`/api/jobs/${jobId}`)
    router.push('/jobs')
    toast.success('Job deleted successfully')
  } catch (error) {
    console.error(error)
    toast.error('An error occurred while deleting the job')
  }
}
</script>
<template>
  <BackButton />
  <section v-if="!state.loading" class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <div class="text-gray-500 mb-4">{{ state.job.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ state.job.title }}</h1>
            <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <i class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ state.job.location }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">
              {{ singleJobViewTexts.jobDescription }}
            </h3>

            <p class="mb-4">
              {{ state.job.description }}
            </p>

            <h3 class="text-green-800 text-lg font-bold mb-2">{{ singleJobViewTexts.salary }}</h3>

            <p class="mb-4">{{ state.job.salary }} {{ yearText }}</p>
          </div>
        </main>

        <aside>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">{{ singleJobViewTexts.companyInfo }}</h3>

            <h2 class="text-2xl">{{ state.job.company.name }}</h2>

            <p class="my-2">
              {{ state.job.company.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">{{ singleJobViewTexts.contactEmail }}</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">{{ state.job.company.contactEmail }}</p>

            <h3 class="text-xl">{{ singleJobViewTexts.contactPhone }}</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">{{ state.job.company.contactPhone }}</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">{{ singleJobViewTexts.manageJob }}</h3>
            <RouterLink
              :to="`edit/${state.job.id}`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Edit Job
            </RouterLink>
            <button
              @click="deleteJob"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              {{ singleJobViewTexts.deleteJob }}
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
  <div v-else>
    <div class="text-center text-gray-500 py-6">
      <PulseLoader color="#38a169" size="10px" />
    </div>
  </div>
</template>
