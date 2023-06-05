<template>
  <span
    :class="[
      { 'bg-blue-100 text-blue-800 border-blue-400': textColor == 'blue' },
      { 'bg-gray-100 text-gray-800 border-gray-500': textColor == 'gray' },
      { 'bg-red-100 text-red-800 border-red-400': textColor == 'red' },
      { 'bg-green-100 text-green-800 border-green-400': textColor == 'green' },
      {
        'bg-yellow-100 text-yellow-800 border-yellow-300':
          textColor == 'yellow',
      },
      {
        'bg-indigo-100 text-indigo-800 border-indigo-400':
          textColor == 'indigo',
      },
      {
        'bg-purple-100 text-purple-800 border-purple-400':
          textColor == 'purple',
      },
      { 'bg-pink-100 text-pink-800 border-pink-400': textColor == 'pink' },
    ]"
    class="text-xs font-medium mr-2 px-2.5 py-0.5 rounded border"
    ><slot></slot
  ></span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

enum ValidColors {
  Blue = "blue",
  Gray = "gray",
  Red = "red",
  Green = "green",
  Yellow = "yellow",
  Indigo = "indigo",
  Purple = "purple",
  Pink = "pink",
}

export default defineComponent({
  props: {
    color: {
      type: String,
      validator: (value: string) =>
        Object.values(ValidColors).includes(value as ValidColors),
      default: ValidColors.Red,
    },
  },
  computed: {
    textColor(): string {
      return this.color as ValidColors;
    },
  },
});
</script>
