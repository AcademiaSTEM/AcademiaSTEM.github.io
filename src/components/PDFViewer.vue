<template>
  <vue-pdf-app v-if="pdfPath" style="height: 500px;" :pdf="pdfPath" />
</template>

<script>
function allowBrowserShortcuts(event) {
  if (event.ctrlKey) {
    event.stopImmediatePropagation();
  }
}

export default {
  name: 'MainView',
  props: {
    pdfPath: {
      type: String,
      default: '',
    },
  },
  mounted() {
    window.addEventListener('keydown', allowBrowserShortcuts, true);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', allowBrowserShortcuts, true);
  },
};
</script>

<style>
</style>
