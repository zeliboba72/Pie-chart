<script setup lang="ts">
import { PieChart } from './components/PieChart';
</script>

<template>
  <pie-chart
      :width="500"
      :height="500"
      :doughnut-value="0.6"
      doughnut-wide
      show-doughnut
  />
</template>

<style>

</style>
