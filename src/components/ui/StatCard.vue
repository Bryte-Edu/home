<template>
  <div class="feature-card text-center group hover:scale-105 transition-all duration-300 cursor-pointer">
    <div class="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
      <slot name="value">0</slot>
    </div>
    <div class="text-sm font-medium text-foreground mb-2">
      <slot name="label">Label</slot>
    </div>
    <div v-if="$slots.extra" class="text-xs text-muted-foreground">
      <slot name="extra" />
    </div>
  </div>
</template>

<script setup lang="ts">
// Professional stat card for analytics dashboard
</script>
