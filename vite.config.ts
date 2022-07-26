import { defineConfig } from 'vite'
import FullReload from 'vite-plugin-full-reload';
import StimulusHMR from 'vite-plugin-stimulus-hmr';
import WindiCSS from 'vite-plugin-windicss';
import RubyPlugin from 'vite-plugin-ruby'

export default defineConfig({
<<<<<<< HEAD
  server: {
    open: "http://localhost:3000"
  },
=======
>>>>>>> 58e2959 (Initial commit)
  plugins: [
    FullReload(['config/routes.rb', 'app/views/**/*']),
    StimulusHMR(),
    WindiCSS({
        root: __dirname,
        scan: {
          fileExtensions: ['erb', 'haml', 'html', 'vue', 'js', 'ts', 'jsx', 'tsx'],
          dirs: ['app/views', 'app/frontend'], // or app/javascript, or app/packs
        },
      }),
    RubyPlugin(),
  ],
})
