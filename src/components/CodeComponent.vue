<template>
  <div class="project-div">
    <h4>{{ title }}</h4>
    <p>{{ autor }}</p>
    <div v-if="codeMd" v-html="markdown.render(codeMd)" />
    <p v-if="url">
      <a :href="url">{{ url }}</a>
    </p>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';
import highlight from '../utils/highlight';

export default {
  name: 'CodeComponent',
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const markdown = new MarkdownIt({ highlight });
    return { markdown };
  },
  data(props) {
    return {
      ...props.info,
      codeMd: '',
    };
  },
  async created() {
    if (this.code) {
      const codeFile = new URL(`../../public/code/${this.code}`, import.meta.url).href;
      const condeContent = await fetch(codeFile).then((r) => r.text());
      this.codeMd = condeContent;
    }
  },
};
</script>

<style scoped>
.project-div {
  margin-bottom: 3rem;
}
</style>
