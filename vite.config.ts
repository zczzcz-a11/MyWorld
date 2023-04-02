import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({ resolvers: [NaiveUiResolver()] }),
    viteCompression(),
    visualizer({ open: true })
  ],
  css: { postcss: { plugins: [require('postcss-preset-env')({ stage: 0, features: { 'nesting-rules': true } })] } },
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  server: {
    port: 8081,
    open: 'http://localhost:8081'
  }
});