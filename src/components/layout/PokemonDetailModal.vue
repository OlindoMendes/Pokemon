<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div
            class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-800"
          >
            <a href="#">
              <img
                class="rounded-t-lg"
                v-bind:src="store.pokemonDetails.image"
                alt=""
              />
            </a>
            <div class="p-5">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                NAME: {{ store.pokemonDetails.name.toUpperCase() }}
              </h5>

              <h1 class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                ABILITY: {{ store.pokemonDetails.ability.toUpperCase() }}
              </h1>
              <p class="mt-1 text-sm text-gray-500">
                TYPE: {{ store.pokemonDetails.type.toUpperCase() }}
              </p>
            </div>
          </div>

          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              v-on:click="closeModal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useStore from '../../store'

const store = useStore()
const close = ref('')
const closeModal = () => {
  close.value = false
  store.hideModal(close.value)
}
</script>

<style scoped>
.center-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.center-image img {
  max-width: 100%;
  max-height: 100%;
}
</style>
