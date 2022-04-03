

<template>
  <Layout>
    <template #page-bottom>
      <p class="copyright">
        <a class="copyright-text" href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2021164439号</a>
      </p>
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;
</script>

<style>
.copyright {
  text-align: center;
  line-height: 1;
  margin: 0;
}

.copyright-text{
  font-family: var(--font-family-base);
  font-size: var(--code-font-size);
  color: var(--c-text-light-1);
}
</style>
