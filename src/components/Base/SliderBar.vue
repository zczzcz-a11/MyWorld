<script setup lang="ts">
import { useElementHover } from '@vueuse/core';
import { useThemeVars } from 'naive-ui';
import { onMounted, onUnmounted, ref } from 'vue';
const props = withDefaults(defineProps<{
  modelValue:number;  
  loadValue?:number;
  width?:number;
  height?:number;
}>(), { width: 500, height: 4, loadValue: 0 });
let isTargetClick = ref(false);
let startWidth = props.width * (props.modelValue / 100);
const mousePosition = { y: 0, x: 0 };// 鼠标坐标 
const moveDiff = { x: 0, y: 0 };// 移动距离
const themeVars = useThemeVars();
const target = ref();
const isHover = useElementHover(target);
const emit = defineEmits(['update:modelValue', 'change', 'onDone']);

const calcPercentage = (value:number) => {
  return Math.round((value / props.width) * 100);
};
const handleSliderMouseDown = (e:MouseEvent) => {
  let target = e.target as HTMLElement;
  if (target.classList.contains('dot') && isTargetClick) return;
  if (isTargetClick.value) return;
  let { offsetX } = e;
  let percentage = calcPercentage(offsetX);
  emit('update:modelValue', percentage);
  startWidth = getProgressWidth(percentage);
  emit('change');
  emit('onDone');
};
// 在小圆点下按下鼠标
const handleDotMouseDown = (e:MouseEvent) => {
  isTargetClick.value = true;
  mousePosition.x = e.clientX;
  moveDiff.x = 0;
};
  // 移动鼠标
const handleMouseMove = (e:MouseEvent) => {
  if (!isTargetClick.value) return;
  moveDiff.x += e.clientX - mousePosition.x;
  if (moveDiff.x > 0) {
    moveDiff.x = Math.min(props.width, moveDiff.x);
  } else {
    moveDiff.x = Math.max(-props.width, moveDiff.x);
  }
  let value;
  if (e.clientX > mousePosition.x) {
    value = calcPercentage(startWidth + moveDiff.x);
  } else {
    value = calcPercentage(startWidth + moveDiff.x);
  }
  if (value >= 0 && value <= 100 && value !== props.modelValue) {
    emit('update:modelValue', value);
    emit('change', value);
  }
  mousePosition.x = e.clientX;
};
 
// 鼠标抬起
const handleMouseUp = (e:MouseEvent) => {
  if (!isTargetClick.value) return;
  isTargetClick.value = false;
  startWidth = getProgressWidth(props.modelValue);
  emit('change');
  emit('onDone');
};
const getProgressWidth = (percentage:number) => props.width * (percentage / 100);
onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
});
onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseup', handleMouseUp);
});

</script>

<template>
  <div
    ref="target" class="no-select group py-1" @mousedown="handleSliderMouseDown"
  >
    <div
      :style="{width:width+'px',height:height+'px',transform:`scaleY(${isTargetClick || isHover ? '1.5' : '1'})`}"
      class="relative rounded-md bg-gray-200 transition-transform dark:bg-gray-200/50"
    >
      <!-- 加载进度条 -->
      <div class="absolute top-0 h-full rounded-md bg-gray-300 transition-all dark:bg-gray-300/50" :style="{width:loadValue+'%'}" />
      <!-- 播放进度条 -->
      <div class="absolute top-0 h-full rounded-md transition-transform" :style="{background:themeVars.primaryColor, width:modelValue+'%'}" />
      <!-- 小圆点 -->
      <div
        v-show="isHover || isTargetClick" class="dot" :style="{'background-color': themeVars.primaryColor,left:modelValue+'%'}"
        @mousedown="handleDotMouseDown"
      />
      <div />
    </div>
  </div>
</template>

<style scoped>
.dot{
  position:absolute;
  width:8px;
  height:8px;
  border-radius: 50%;
  top:-2px;
  transform: scaleX(1.5);
  cursor: pointer;
}
</style>
