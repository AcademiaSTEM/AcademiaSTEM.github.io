<template>
  <a :href="url" target="_blank" rel="noopener">
    <Button outlined>
      <div class="flex">
        <!-- Emoji -->
        <div class="emoji">{{emoji}}</div>
        <!-- Texto -->
        <div class="text flex flex-column justify-content-center align-items-baseline ">
          <p class="name">{{name}}</p>
          <p v-if="description" class="description">{{description}}</p>
        </div>
      </div>
    </Button>
  </a>
</template>

<script>
export default {
  name: 'FancyButton',
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  data(props) {
    return {
      ...props.info,
    };
  },
};
</script>

<style scoped lang="scss">
button {
  width: 250px !important;
}
.text {
  .name {
    font-size: medium;
    margin-bottom: 0;
    line-height: 1.1;
  }
  .description {
    font-size: small;
    line-height: 1.1;
  }
  text-align: left;
  line-height: 1.1;
}
.emoji {
  font-size: xx-large;
  margin-right: 14px;
}
</style>
