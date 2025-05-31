import { Plugin } from 'vite';

export function criticalCssPlugin(): Plugin {
  return {
    name: 'critical-css',
    transformIndexHtml: {
      enforce: 'post',
      transform(html: string) {
        // Define critical CSS for above-the-fold content
        const criticalCss = `
          <style>
            /* Critical CSS for initial render */
            body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
            .font-inter { font-family: 'Inter', sans-serif; }
            .font-montserrat { font-family: 'Montserrat', sans-serif; }
            
            /* Header styles */
            header { position: sticky; top: 0; z-index: 50; width: 100%; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .container { margin: 0 auto; padding: 0 1rem; }
            
            /* Hero section critical styles */
            .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
            .from-design1-light { --tw-gradient-from: #FFF0F7; }
            .via-white { --tw-gradient-to: rgb(255 255 255 / 0); --tw-gradient-stops: var(--tw-gradient-from), #fff, var(--tw-gradient-to); }
            .to-design1-light { --tw-gradient-to: #FFF0F7; }
            
            /* Button styles */
            .btn-primary-1 { 
              background-color: #E6007E; 
              color: white; 
              padding: 0.75rem 1.5rem; 
              border-radius: 0.375rem; 
              font-weight: 500; 
              display: inline-block;
              text-decoration: none;
            }
            
            /* Text styles */
            .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
            .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
            .text-5xl { font-size: 3rem; line-height: 1; }
            .font-bold { font-weight: 700; }
            .text-center { text-align: center; }
            
            /* Spacing */
            .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
            .px-4 { padding-left: 1rem; padding-right: 1rem; }
            .mb-4 { margin-bottom: 1rem; }
            .mb-8 { margin-bottom: 2rem; }
            
            /* Responsive */
            @media (min-width: 768px) {
              .md\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
              .md\\:text-5xl { font-size: 3rem; line-height: 1; }
              .md\\:py-24 { padding-top: 6rem; padding-bottom: 6rem; }
            }
            
            @media (min-width: 1024px) {
              .lg\\:text-5xl { font-size: 3rem; line-height: 1; }
            }
          </style>
        `;
        
        // Insert critical CSS in the head
        return html.replace('</head>', `${criticalCss}</head>`);
      }
    }
  };
}
