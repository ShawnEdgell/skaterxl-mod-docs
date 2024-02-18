import adapter from '@sveltejs/adapter-node';
import dotenv from 'dotenv';
dotenv.config();

const config = {
  kit: {
    adapter: adapter({
      // Specify the output directory here
      out: 'build', // Adjust the directory name as needed
    }),
  },
};

export default config;
