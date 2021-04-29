require('dotenv').config()

import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { minifyHtml, injectHtml } from 'vite-plugin-html';

if (!process.env.BAIDU_MAP_KEY) {
  throw new Error("BAIDU_MAP_KEY is not set!");
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(),
  injectHtml({
    injectData: {
      BAIDU_MAP_SCRIPT: `<script type="text/javascript" src="https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=${process.env.BAIDU_MAP_KEY}"></script>`
    },
  }),
  minifyHtml(),]
})
