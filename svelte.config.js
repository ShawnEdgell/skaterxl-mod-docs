import adapter from '@sveltejs/adapter-node';
import dotenv from 'dotenv';
dotenv.config();

const config = {
  kit: {
    adapter: adapter(),
    // Specify the output directory
    target: '#app',
    // Optionally, you can specify other kit options here
  },
};

export default config;
