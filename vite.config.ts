import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Las capturas de los ejercicios están en ./img en la raíz del repo; servirlas
// como dir público mantiene esa estructura intacta (llegan como /ej_01.png).
export default defineConfig({
  plugins: [react()],
  publicDir: 'img',
});
