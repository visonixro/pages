import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/pages/', // Asegúrate de que coincida con el nombre de tu repositorio
  plugins: [react()],
});
