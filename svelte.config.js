import adapter from '@sveltejs/adapter-node';
import dotenv from 'dotenv';
dotenv.config();

// Revised SvelteKit config
const config = {
  kit: {
    adapter: adapter(),
    // Removed unused 'files' configuration
    // The 'target' option is removed as it's deprecated
  },
};

export default config;
