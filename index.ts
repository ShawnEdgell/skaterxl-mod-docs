// index.ts
const newDomain = "https://www.skatebit.app";

console.log(`Bun redirector server starting...`);
console.log(`All requests will be redirected to ${newDomain}`);

Bun.serve({
  port: process.env.PORT || 3000, // Vercel sets the PORT environment variable
  fetch(request) {
    const url = new URL(request.url);
    const newUrl = new URL(url.pathname + url.search, newDomain); // Preserve path and query params

    console.log(`Redirecting ${request.url} to ${newUrl.href}`);

    return new Response(null, {
      status: 308, // Permanent Redirect, preserves request method
      headers: {
        Location: newUrl.href,
      },
    });
  },
});

console.log(`Listening on http://localhost:${process.env.PORT || 3000}`);
