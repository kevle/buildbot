import {resolve} from "path";
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

const outDir = 'dist';

export default defineConfig({
  plugins: [
    react({
      babel: {
        parserOpts: {
          plugins: ['decorators-legacy', 'classProperties']
        }
      }
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: "buildbot-ui",
      fileName: "buildbot-ui",
    },
    rollupOptions: {
      external: ['axios', 'mobx', 'react', 'moment'],
      output: {
        globals: {
          axios: "axios",
          mobx: "mobx",
          react: "React",
          moment: "moment",
        },
      },
    },
    target: ['es2015'],
    outDir: outDir,
    emptyOutDir: true,
  },
});
