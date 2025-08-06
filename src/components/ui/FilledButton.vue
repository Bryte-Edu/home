<template>
  <a
    :target="props.target"
    :href="props.href"
    class="btn-premium btn-primary focus-premium group interactive-premium"
    style="pointer-events: auto; position: relative; z-index: 20; cursor: pointer;"
  >
    <span class="relative z-10">{{ props.title }}</span>
  </a>
</template>

<script lang="ts" setup>
interface Props {
  href: string;
  title: string;
  target?: string;
}

const props = defineProps<Props>();
</script>
