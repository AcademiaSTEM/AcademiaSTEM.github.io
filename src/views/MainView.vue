<template>
  <div class="layout-main-container">
    <div class="layout-main">
      <header>
        <h4>STEM UC: Academia para escolares</h4>
        <h1>Primeros pasos en programación</h1>
        <p>2026</p>
      </header>

      <Divider />
      <h2>Donde programar</h2>
      <p>
        Como curso, queremos que puedas programar desde cualquier lugar,
        por lo que te invitamos a utilizar cualquiera de
        las alternativas de <span class="font-bold">"Python Online"</span>
        que se encuentran disponibles en la red.
      </p>
      <div class="inline-flex justify-content-center full-width px-0 sm:px-5 md:px-8">
        <a href="https://www.google.cl" class="p-button google">
          <img :src="googleIcon" />
          Python Online
        </a>
      </div>
      <p>
        <b>Ojo:</b> Dado que muchas de estas páginas presentan publicidad,
        recomendamos instalar una extensión que bloque publicad
        (p.ej. AdBlock, uBlock) o utilizar alguna de las siguientes páginas:
      </p>
      <ul>
        <li><a href="https://codehs.com/sandbox/id/python-3-aiHGLS">CodeHS</a></li>
        <li><a href="https://www.w3schools.com/python/trypython.asp?filename=demo_compiler">W3Schools</a></li>
      </ul>

      <Divider />
      <h2>Clases</h2>
      <div class="grid align-items-stretch gap-3 px-0 sm:px-5 md:px-8">
        <ClassCard
        v-for="info in classes"
        :info="info"
        :key="info.id"
        class="flex col-12 md:col-5" />
        <!-- <ProjectCard class="flex col-12 md:col-5" /> -->
        <div
         v-if="((classes.length + 2) % 2) && (windowWidth >= 576)"
         class="flex col-0 md:col-5 flex-grow-1"
        />
      </div>

      <Divider />
      <h2>Resumen</h2>
      <PDFViewer :pdf-path="pdfPath" />
    </div>
  </div>
</template>

<script>
import { useWindowSize } from '@vueuse/core';
import ClassCard from '../components/ClassCard.vue';
import ProjectCard from '../components/ProjectCard.vue';
import PDFViewer from '../components/PDFViewer.vue';
import info from '../storage/info';

export default {
  name: 'MainView',
  components: {
    ClassCard,
    ProjectCard,
    PDFViewer,
  },
  data() {
    const { width } = useWindowSize();
    const googleIcon = new URL('../../public/googleIcon.png', import.meta.url).href;
    const pdfPath = new URL('../../public/Resumen y ejemplos.pdf', import.meta.url).href;
    return {
      pdfPath,
      classes: info,
      googleIcon,
      windowWidth: width,
    };
  },
};
</script>

<style scoped lang="scss">
header {
  text-align: center;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  h1 {
    margin-bottom: 0;
    margin-top: 0;
  }
  h4 {
    margin-bottom: 0;
  }
}
.google {
  background: white;
  border-color: #FFFFFF00;
  border-radius: 50vh;
  color: black;
  display: flex;
  margin-bottom: 1em;
  width: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  img {
    padding-right: 1rem;
  }
}
.full-width {
  width: 100%;
}
</style>
