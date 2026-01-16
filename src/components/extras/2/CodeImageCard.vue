<template>
  <h4><code>{{ title }}</code></h4>
  <Card>
    <template #content>
      <div class="container">
        <div class="flex-none md:flex md:gap-3">
          <div v-html="markdown.render(code)" class="code" />
          <img :src="imageUrl" class="" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
import MarkdownIt from 'markdown-it';
import highlight from '../../../utils/highlight';

export default {
  name: 'CodeImageCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    code: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  setup() {
    const markdown = new MarkdownIt({ highlight });
    return { markdown };
  },
  data(props) {
    const imageUrl = new URL(`${props.image}`, import.meta.url).href;
    return {
      imageUrl
    }
  }
}
</script>

<style lang="scss" scoped>
.code {
  width: min-content;
}
.container {
  display: block;
}
:deep(pre){
  margin: 0;
}
:deep(.p-card-content) {
  padding: 0;
}
img {
  width: min(100%, 100vw);
}
@media (max-width: 768px) {
  img {
    margin-top: 1em;
  }
}
</style>
