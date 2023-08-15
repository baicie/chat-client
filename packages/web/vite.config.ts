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
  server:{
    proxy:{
      '/api':{
        target:'http://81.70.58.141:13000/',
        changeOrigin:true,
        rewrite: path => path.replace('/api', ''),
      }
    }
  }
})
