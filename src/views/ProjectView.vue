<template>
  <div class="layout-main-container">
    <div class="layout-main">
      <header>
        <h4>Feria de conocimientos</h4>
        <h1>Proyectos finales</h1>
      </header>

      <Divider />
      <div class='project'>
        <p>
          Acá encontrarán los proyectos realizados por los
          estudiantes del año 2026.
        </p>
        <p>
          Para ejecutarlos, deberán copiar el código y
          ejecutarlo en alguna de las alternativas de Python online.
        </p>

        <Divider />
        <CodeComponent
            v-for="i in info"
            :info="i"
            :key="i.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';
import highlight from '../utils/highlight';
import info from '../storage/project_info';
import CodeComponent from '../components/CodeComponent.vue';

export default {
  name: 'ProjectView',
  components: {
    CodeComponent,
  },
  setup() {
    const markdown = new MarkdownIt({ highlight });
    return { markdown };
  },
  data() {
    return {
      info,
    };
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
