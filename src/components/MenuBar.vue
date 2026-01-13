<template>
  <Menubar :model="items" />
</template>

<script>

export default {
  name: 'MenuBar',
  data() {
    return {
      items: [
        {
          icon: 'pi pi-home',
          label: 'Inicio',
          url: '/',
        },
      ],
    };
  },
};
</script>

<style scoped>
.p-menubar {
  background-color: var(--surface-card);
  z-index: 99999;
}
</style>
