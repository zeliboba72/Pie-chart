<script lang="ts" setup>
import { reactive, toRefs } from "vue";
import { useDoughnut } from "./doughnut";
import { VIEW_BOX_VALUE, VIEW_BOX_CENTER } from "./constants";

type Props = {
  width: number,
  height: number,
  showDoughnut?: boolean,
  doughnutValue?: number,
  doughnutWide?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  showDoughnut: false,
  doughnutValue: 0,
  doughnutWide: false,
});

const { doughnutWide, doughnutValue } = toRefs(props);
const doughnut = reactive(useDoughnut(doughnutValue, doughnutWide));

</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="props.width" :height="props.height" :viewBox="VIEW_BOX_VALUE">
    <template v-if="props.showDoughnut">
      <circle
          class="doughnut empty"
          :cx="VIEW_BOX_CENTER"
          :cy="VIEW_BOX_CENTER"
          :r="doughnut.radius"
          :stroke-width="doughnut.strokeWidth"
      />
      <circle
          class="doughnut progress"
          transform="rotate(-90 50 50)"
          :cx="VIEW_BOX_CENTER"
          :cy="VIEW_BOX_CENTER"
          :r="doughnut.radius"
          :stroke-width="doughnut.strokeWidth"
          :stroke-dashoffset="doughnut.offset"
          :stroke-dasharray="doughnut.perimeter"
      />
    </template>

    <circle
        cx="137"
        cy="137"
        r="92"
        fill="#27AE60"
        fill-opacity="0.5"
    />
    <circle
        cx="137"
        cy="137"
        r="46"
        fill="none"
        transform="rotate(-90 137 137)"
        stroke="#27AE60"
        stroke-width="92"
        stroke-dashoffset="29"
        stroke-dasharray="289"
    />
    <line x1="137" y1="160" x2="137" y2="200" stroke-width="1" stroke="#333333" />
    <text class="text" x="37%" y="195" text-anchor="middle" fill="#333333">план</text>
    <text class="text" x="63%" y="195" text-anchor="middle" fill="#ffffff">факт</text>
    <foreignObject x="70" y="137" width="150" height="200">
    </foreignObject>
    <text class="percent" x="50%" y="50%" text-anchor="middle" dy="10">90%</text>
    />
  </svg>
</template>

<style scoped>
.doughnut {
  fill: none;
  stroke: #00AAE2;
}
.doughnut.empty {
  stroke-opacity: 0.5;
}
.doughnut.progress {
  stroke-linecap: round;
  transition: stroke-dashoffset 1s ease-out;
}
.percent {
  font-size: 36px;
  font-weight: 600;
  fill: #ffffff;
}
.text {
  font-size: 14px;
}
</style>