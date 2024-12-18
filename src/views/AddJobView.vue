<script setup>
import { addJobViewTexts, jobTypes, salaryRanges } from '@/constants'
import router from '@/router'
import axios from 'axios'
import { reactive } from 'vue'
import { useToast } from 'vue-toastification'
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
const toast = useToast()
const handleSubmit = async () => {
  try {
    const response = await axios.post('/api/jobs', form)
    router.push(`/jobs/${response.data.id}`)
    toast.success(addJobViewTexts.addedSuccess)
  } catch (error) {
    console.error(error)
    toast.error(addJobViewTexts.addingError)
  }
}
</script>
<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">{{ addJobViewTexts.addJob }}</h2>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2">{{
              addJobViewTexts.jobType
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
            <label class="block text-gray-700 font-bold mb-2">{{ addJobViewTexts.jobName }}</label>
            <input
              v-model="form.title"
              type="text"
              id="name"
              name="name"
              class="border rounded w-full py-2 px-3 mb-2"
              :placeholder="addJobViewTexts.jobNamePlaceholder"
              required
            />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2">{{
              addJobViewTexts.jobDescription
            }}</label>
            <textarea
              v-model="form.description"
              id="description"
              name="description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              :placeholder="addJobViewTexts.jobDescriptionPlaceholder"
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="type" class="block text-gray-700 font-bold mb-2">{{
              addJobViewTexts.salary
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
              {{ addJobViewTexts.location }}</label
            >
            <input
              v-model="form.location"
              type="text"
              id="location"
              name="location"
              class="border rounded w-full py-2 px-3 mb-2"
              :placeholder="addJobViewTexts.locationPlaceholder"
              required
            />
          </div>

          <h3 class="text-2xl mb-5">{{ addJobViewTexts.companyInfo }}</h3>

          <div class="mb-4">
            <label for="company" class="block text-gray-700 font-bold mb-2">{{
              addJobViewTexts.companyName
            }}</label>
            <input
              v-model="form.company.name"
              type="text"
              id="company"
              name="company"
              class="border rounded w-full py-2 px-3"
              :placeholder="addJobViewTexts.companyName"
            />
          </div>

          <div class="mb-4">
            <label for="company_description" class="block text-gray-700 font-bold mb-2">{{
              addJobViewTexts.companyDescription
            }}</label>
            <textarea
              v-model="form.company.description"
              id="company_description"
              name="company_description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              :placeholder="addJobViewTexts.companyDescriptionPlaceholder"
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="contact_email" class="block text-gray-700 font-bold mb-2">{{
              addJobViewTexts.contactEmail
            }}</label>
            <input
              v-model="form.company.contactEmail"
              type="email"
              id="contact_email"
              name="contact_email"
              class="border rounded w-full py-2 px-3"
              :placeholder="addJobViewTexts.contactEmailPlaceholder"
              required
            />
          </div>
          <div class="mb-4">
            <label for="contact_phone" class="block text-gray-700 font-bold mb-2">{{
              addJobViewTexts.contactPhone
            }}</label>
            <input
              v-model="form.company.contactPhone"
              type="tel"
              id="contact_phone"
              name="contact_phone"
              class="border rounded w-full py-2 px-3"
              :placeholder="addJobViewTexts.contactPhonePlaceholder"
            />
          </div>

          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {{ addJobViewTexts.addJob }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
