<template>
  <div class="footer">
    <Divider />
    <div class="flex flex-wrap gap-3 justify-content-end">
      <div class="col-12 sm:col-3 lg:col-2 p-3">
        <p>Preingeniería UC</p>
        <p><a href="https://www.ing.uc.cl/vinculacion-con-el-medio/preingenieria/">Noticias</a></p>
        <p><a href="https://www.instagram.com/preingenieria_uc">Instagram</a></p>
      </div>

      <Divider layout="vertical" v-if="windowWidth >= 576" />

      <div class="col-12 sm:col-3 lg:col-2 p-3">
        <p>General</p>
        <p><a href="https://academiastem.github.io/previous_versions">Versiones anteriores</a></p>
      </div>

      <Divider layout="vertical" v-if="windowWidth >= 576" />

      <div class="col-12 sm:col-3 lg:col-2 p-3">
        <p>Contacto</p>
        <p><a href="mailto:daconcha@uc.cl">
          <span><i class="pi pi-envelope" /></span> daconcha@uc.cl
        </a></p>
        <p><a href="https://github.com/lily416/">
          <span><i class="pi pi-github" /></span> lily416
        </a></p>
      </div>
    </div>
  </div>
</template>

<script>
import { useWindowSize } from '@vueuse/core';

export default {
  name: 'FooterInfo',
  data() {
    const { width } = useWindowSize();
    return {
      windowWidth: width,
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 5rem;
  padding-bottom: 1rem;
}
.footer_text + .footer_text {
  border-left: 3px solid rgb(0, 146, 247);
}
</style>
