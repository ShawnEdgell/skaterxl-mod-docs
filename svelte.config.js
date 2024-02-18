import adapter from '@sveltejs/adapter-node';

const config = {
  kit: {
    adapter: adapter(),
    // Specify the output directory
    // This can be done in your adapter configuration
  },
};

export default config;
