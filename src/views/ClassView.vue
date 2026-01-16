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
        <PDFViewer :pdf-path="pdfPath" />
      </div>

      <Divider />
      <h2>Código</h2>
      <div v-if="mardkownContent" v-html="markdown.render(mardkownContent)" />

      <IfElseInformation v-if="link === 2" />
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';
import info from '../storage/info';
import highlight from '../utils/highlight';
import IfElseInformation from '../components/extras/2/IfElseInformarion.vue';
import PDFViewer from '../components/PDFViewer.vue';

export default {
  name: 'ClassView',
  components: {
    IfElseInformation,
    PDFViewer,
  },
  setup() {
    const markdown = new MarkdownIt({ highlight });
    return { markdown };
  },
  data() {
    const classInfo = info[this.$route.params.id];
    return {
      ...classInfo,
      pdfPath: undefined,
      mardkownContent: undefined,
    };
  },
  async created() {
    if (this.pdf) {
      const pdfPath = new URL(`../../public/classes/${this.$route.params.id}/${this.pdf}`, import.meta.url).href;
      this.pdfPath = pdfPath;
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
