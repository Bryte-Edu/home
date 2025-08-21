<template>
  <a
    v-if="props.href"
    :href="props.href"
    class="btn-premium btn-secondary focus-premium group interactive-premium"
    style="pointer-events: auto; position: relative; z-index: 20; cursor: pointer;"
  >
    <span class="relative z-10">{{ props.title }}</span>
  </a>
  <button
    v-else
    @click="props.onClick"
    class="btn-premium btn-secondary focus-premium group interactive-premium"
    style="pointer-events: auto; position: relative; z-index: 20; cursor: pointer;"
  >
    <span class="relative z-10">{{ props.title }}</span>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  href?: string;
  title: string;
  onClick?: () => void;
}

const props = defineProps<Props>();
</script>
