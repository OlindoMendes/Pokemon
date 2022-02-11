<template>
  <div class="justify-center max-w-md mt-10">
    <h1 class="font-extrabold tracking-tigh text-3xl leading-10">
      Ready for the challenge?
    </h1>
    <div class="mt-8">
      <section>
        <h2 class="font-bold text-2xl leading-6">Exercise 1</h2>
        <div class="mt-5">
          <p>
            In the first exercise the goal would be to extend the current app
            with some additional output. For this you should integrate an public
            available Rest-API or GraphQL-API (see below for examples).
          </p>
          <p>
            It's your own decision what kind of output you use and in which way
            it will be disaplyed. For example you can add a list output of some
            items.
          </p>
          <br />
          <p>Here are some examples for a public available API:</p>
          <ul>
            <li>
              <a
                class="text-blue-600 hover:text-blue-800 cursor-pointer"
                href="https://github.com/APIs-guru/graphql-apis"
                target="_blank"
                >Public GraphQL-API Collection</a
              >
              (e.g.
              <a
                class="text-blue-600 hover:text-blue-800 cursor-pointer"
                href="https://api.spacex.land/graphql/"
                target="_blank"
                >SpaceX-API</a
              >)
            </li>
            <li>
              <a
                class="text-blue-600 hover:text-blue-800 cursor-pointer"
                href="https://github.com/public-apis/public-apis"
                target="_blank"
                >Public REST-API Collection</a
              >
              (e.g.
              <a
                class="text-blue-600 hover:text-blue-800 cursor-pointer"
                href="https://pokeapi.co/docs/v2"
                target="_blank"
                >Pokemon-API</a
              >)
            </li>
          </ul>
          -
        </div>
        <div class="mt-5">
          <a
            class="text-blue-600 hover:text-blue-800 cursor-pointer"
            v-on:click="showNextExercise"
            >{{
              showSecondExercise
                ? 'Hide the next exercise'
                : 'Show the next exercise'
            }}</a
          >
        </div>
      </section>
      <section v-if="showSecondExercise" class="mt-10">
        <h2 class="font-bold text-2xl leading-6">Exercise 2</h2>
        <div class="mt-5">
          <p>
            As a second exercise you should add an global tost/notify handling
            in the already extended app.
          </p>
          <p>
            For example you can show a toast after something was fetched from
            the public API (which you implemented before).
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showSecondExercise = ref(false)

const showNextExercise = () => {
  showSecondExercise.value = !showSecondExercise.value
}
</script>
