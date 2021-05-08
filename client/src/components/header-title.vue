<template>
  <h2 style="display: none">Henllo MEVN</h2>
</template>

<script>
export default {
  props: {
    title: String,
  },
  watch: {
    title: {
      immediate: true,
      handler(title) {
        document.title = title;
      },
    },
  },
};
</script>
