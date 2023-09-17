import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Configuración de esbuild para JSX y React
  esbuild: {
    jsxFactory: '__jsx',
    jsxFragment: '__jsxFragment',
    jsxInject: `import { createElement as __jsx, Fragment as __jsxFragment } from 'react';`,
  },

  // Plugins de Vite
  plugins: [react()],
});
