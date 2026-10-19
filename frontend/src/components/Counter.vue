<script setup>
import { useCounterStore } from '../stores/counter'

const store = useCounterStore()
</script>

<template>
  <section class="counter">
    <h1>Counter</h1>
    <div class="value">{{ store.count }}</div>
    <div class="buttons">
      <button @click="store.increment()" aria-label="Povećaj">+</button>
      <button @click="store.decrement()" aria-label="Smanji">−</button>
    </div>
  </section>
</template>
