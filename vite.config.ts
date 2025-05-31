import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Custom plugin to inline critical CSS
const inlineCriticalCSS = () => {
  return {
    name: 'inline-critical-css',
    transformIndexHtml(html) {
      // Add critical CSS inline
      const criticalCSS = `
        /* Critical CSS - Above the fold styles */
        *, ::before, ::after { box-sizing: border-box; }
        body { margin: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 1rem; }
        .sticky { position: sticky; }
        .top-0 { top: 0; }
        .z-50 { z-index: 50; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .bg-white { background-color: #ffffff; }
        .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
        .text-design1-primary { color: #E6007E; }
        .text-design2-primary { color: #F56522; }
        .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
        .md\\:py-24 { padding-top: 6rem; padding-bottom: 6rem; }
        .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .font-bold { font-weight: 700; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
        @media (min-width: 768px) {
          .md\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
          .md\\:py-24 { padding-top: 6rem; padding-bottom: 6rem; }
        }
      `;
      
      // Inject critical CSS
      html = html.replace(
        '</head>',
        `<style>${criticalCSS}</style></head>`
      );
      
      // Make main CSS non-blocking
      html = html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/index-[^"]+\.css)">/,
        '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="$1"></noscript>'
      );
      
      return html;
    }
  };
};

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    inlineCriticalCSS(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));