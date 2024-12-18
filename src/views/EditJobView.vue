<script setup>
import { editJobViewTexts, jobTypes, salaryRanges } from '@/constants'
import router from '@/router'
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'
const route = useRoute()
const jobId = route.params.id
const form = reactive({
  type: jobTypes[0].value,
  title: '',
  description: '',
  salary: salaryRanges[0].value,
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  },
})

onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${jobId}`)
    form.type = response.data.type
    form.title = response.data.title
    form.description = response.data.description
    form.salary = response.data.salary
    form.location = response.data.location
    form.company.name = response.data.company.name
    form.company.description = response.data.company.description
    form.company.contactEmail = response.data.company.contactEmail
    form.company.contactPhone = response.data.company.contactPhone
  } catch (error) {
    console.error(error)
  }
})
const toast = useToast()
const handleSubmit = async () => {
  try {
    const response = await axios.put(`/api/jobs/${jobId}`, form)
    router.push(`/jobs/${response.data.id}`)
    toast.success('Job Updated successfully')
  } catch (error) {
    console.error(error)
    toast.error('An error occurred while Updating the job')
  }
}
</script>
<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">{{ editJobViewTexts.editJob }}</h2>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2">{{
              editJobViewTexts.jobType
            }}</label>
            <select
              v-model="form.type"
              id="type"
              name="type"
              class="border rounded w-full py-2 px-3"
              required
            >
              <option v-for="type in jobTypes" :key="type.value" :value="type.value">
                {{ type.label }}
              </option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">{{ editJobViewTexts.jobName }}</label>
            <input
              v-model="form.title"
              type="text"
              id="name"
              name="name"
              class="border rounded w-full py-2 px-3 mb-2"
              :placeholder="editJobViewTexts.jobNamePlaceholder"
              required
            />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2">{{
              editJobViewTexts.jobDescription
            }}</label>
            <textarea
              v-model="form.description"
              id="description"
              name="description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              :placeholder="editJobViewTexts.jobDescriptionPlaceholder"
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2">{{
              editJobViewTexts.salary
            }}</label>
            <select
              v-model="form.salary"
              id="salary"
              name="salary"
              class="border rounded w-full py-2 px-3"
              required
            >
              <option v-for="salary in salaryRanges" :key="salary.value" :value="salary.value">
                {{ salary.label }}
              </option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">
              {{ editJobViewTexts.location }}</label
            >
            <input
              v-model="form.location"
              type="text"
              id="location"
              name="location"
              class="border rounded w-full py-2 px-3 mb-2"
              :placeholder="editJobViewTexts.locationPlaceholder"
              required
            />
          </div>

          <h3 class="text-2xl mb-5">{{ editJobViewTexts.companyInfo }}</h3>

          <div class="mb-4">
            <label for="company" class="block text-gray-700 font-bold mb-2">{{
              editJobViewTexts.companyName
            }}</label>
            <input
              v-model="form.company.name"
              type="text"
              id="company"
              name="company"
              class="border rounded w-full py-2 px-3"
              :placeholder="editJobViewTexts.companyName"
            />
          </div>

          <div class="mb-4">
            <label for="company_description" class="block text-gray-700 font-bold mb-2">{{
              editJobViewTexts.companyDescription
            }}</label>
            <textarea
              v-model="form.company.description"
              id="company_description"
              name="company_description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              :placeholder="editJobViewTexts.companyDescriptionPlaceholder"
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="contact_email" class="block text-gray-700 font-bold mb-2">{{
              editJobViewTexts.contactEmail
            }}</label>
            <input
              v-model="form.company.contactEmail"
              type="email"
              id="contact_email"
              name="contact_email"
              class="border rounded w-full py-2 px-3"
              :placeholder="editJobViewTexts.contactEmailPlaceholder"
              required
            />
          </div>
          <div class="mb-4">
            <label for="contact_phone" class="block text-gray-700 font-bold mb-2">{{
              editJobViewTexts.contactPhone
            }}</label>
            <input
              v-model="form.company.contactPhone"
              type="tel"
              id="contact_phone"
              name="contact_phone"
              class="border rounded w-full py-2 px-3"
              :placeholder="editJobViewTexts.contactPhonePlaceholder"
            />
          </div>

          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {{ editJobViewTexts.editJob }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
