import { computed, Ref } from 'vue';
import { getCirclePerimeter, getCircleRadiusWidthStroke } from "./helpers";
import { FULL_CIRCLE_RADIUS, DOUGHNUT_STROKE_WIDTH, DOUGHNUT_STROKE_WIDTH_WIDE } from './constants';

export const useDoughnut = (value: Ref<number>, wide: Ref<boolean>) => {
    const strokeWidth = computed(() => wide.value ? DOUGHNUT_STROKE_WIDTH_WIDE : DOUGHNUT_STROKE_WIDTH);
    const radius = computed(() => getCircleRadiusWidthStroke(FULL_CIRCLE_RADIUS, strokeWidth.value));
    const perimeter = computed(() => getCirclePerimeter(radius.value));
    const offset = computed(() => (1 - value.value) * perimeter.value);

    return {
        strokeWidth,
        radius,
        perimeter,
        offset,
    }
}