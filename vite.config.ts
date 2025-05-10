import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // Listen on all IPv6 & IPv4 interfaces
    port: 8080,
    strictPort: true, // Ensure the port is strictly used
    allowedHosts: ["react-project-pc8u.onrender.com"], // ✅ Add your Render host here
    hmr: {
      clientPort: 443, // Required for Render's HTTPS proxy
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
