import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {pkgsPath} from '@chat/node';
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@/':`${pkgsPath}`
    }
  },
  plugins: [vue()],
})
