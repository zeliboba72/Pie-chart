import { computed, Ref } from 'vue';
import { FULL_CIRCLE_RADIUS, INSIDE_CIRCLE_RADIUS } from "./constants";
import { getCirclePerimeter } from "./helpers";

export const usePie = (value: Ref<number>, full: Ref<boolean>) => {
    const radiusBlank = computed(() => full.value ? FULL_CIRCLE_RADIUS : INSIDE_CIRCLE_RADIUS);
    const radius = computed(() => radiusBlank.value / 2);
    const perimeter = computed(() => getCirclePerimeter(radius.value));
    const offset = computed(() => (1 - value.value) * perimeter.value);

    return {
        radiusBlank,
        radius,
        perimeter,
        offset,
    }
}