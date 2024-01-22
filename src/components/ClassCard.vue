<template>
  <Card :pt="style_option">
    <template #header>
        <img :src="imageUrl" />
    </template>
    <template #title>Clase {{ number }}</template>
    <template #subtitle>{{ title }}</template>
    <template #footer>
      <RouterLink :to="classUrl">
        <Button
          type="button"
          label="Ver clase"
          icon="pi pi-book"
          outlined
        />
      </RouterLink>
    </template>
  </Card>
</template>

<script>
export default {
  name: 'RoleCard',
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  data(props) {
    const imageUrl = new URL(`../../public/classes/${props.info.link}/banner.jpg`, import.meta.url).href;
    const classUrl = `/class/${props.info.link}`;
    return {
      ...props.info,
      imageUrl,
      classUrl,
      style_option: {
        root: { class: 'flex flex-grow-1' },
        body: { class: 'flex flex-column', style: 'width: 100%' },
        content: { class: 'flex-grow-1' },
        footer: { class: 'inline-flex justify-content-center' },
      },
    };
  },
};
</script>
