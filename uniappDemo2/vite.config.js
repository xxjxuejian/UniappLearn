import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni';
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
		uni(),
		// 安装插件unplugin-auto-import，可以自动导入
    AutoImport({
       imports: ["vue", "uni-app"],
    }),
  ],
})