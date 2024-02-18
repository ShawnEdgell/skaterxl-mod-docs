// src/routes/api/upload.js
import { put } from '@vercel/blob';

export async function post(request) {
  const form = new FormData();
  form.append('file', request.body.file);

  try {
    const response = await put(request.body.file.name, request.body.file, { access: 'public' });
    const url = response.url;
    return {
      status: 200,
      body: { uploaded: url }
    };
  } catch (error) {
    return {
      status: 500,
      body: { message: 'Error uploading file' }
    };
  }
}
