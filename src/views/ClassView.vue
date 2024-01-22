<template>
  <div class="layout-main-container">
    <div class="layout-main">
      <header>
        <h4>Clase {{ number }}</h4>
        <h1>{{ title }}</h1>
      </header>

      <div v-if="pdf">
        <Divider />
        <h2>Presentación</h2>
        <vue-pdf-app v-if="pdfFile" style="height: 500px;" :pdf="pdfFile" />
      </div>

      <Divider />
      <h2>Código</h2>
      <div v-if="mardkownContent" v-html="markdown.render(mardkownContent)" />

      <Class2ExtraInformation v-if="link === 2" />
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';
import info from '../storage/info';
import highlight from '../utils/highlight';
import Class2ExtraInformation from '../components/extras/2/Component.vue';

export default {
  name: 'ClassView',
  components: {
    Class2ExtraInformation,
  },
  setup() {
    const markdown = new MarkdownIt({ highlight });
    return { markdown };
  },
  data() {
    const classInfo = info[this.$route.params.id];
    return {
      ...classInfo,
      pdfFile: undefined,
      mardkownContent: undefined,
    };
  },
  async created() {
    if (this.pdf) {
      const pdfFile = new URL(`../../public/classes/${this.$route.params.id}/${this.pdf}`, import.meta.url).href;
      this.pdfFile = pdfFile;
    }
    const mardkownFile = new URL(`../../public/classes/${this.$route.params.id}/code.md`, import.meta.url).href;
    const mardkownContent = await fetch(mardkownFile).then((r) => r.text());
    this.mardkownContent = mardkownContent;
  },
};
</script>

<style scoped lang="scss">
header {
  text-align: center;
  margin-bottom: 2.5rem;
  h1 {
    margin-bottom: 0;
    margin-top: 0;
  }
  h4 {
    margin-bottom: 0;
  }
}
</style>
