<script setup lang="ts">
import { PieChart } from './components/PieChart';
</script>

<template>
  <pie-chart
      :width="500"
      :height="500"
      :pie-value="0.5"
      :doughnut-value="0.1"
      doughnut-wide
      show-doughnut
  />
</template>

<style>

</style>
