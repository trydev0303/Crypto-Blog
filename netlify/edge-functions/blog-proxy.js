// netlify/edge-functions/blog-proxy.js
export default async (request, context) => {
  const url = new URL(request.url);
  console.log(`Received request for: ${url.pathname}`);
  
  // Only handle /blog requests
  if (url.pathname.startsWith('/blogs')) {
    // Rewrite request to your Astro blog's Netlify URL
    const astroBlogUrl = new URL(
      url.pathname.replace(/^\/blogs/, '') || '/',  // Remove /blog prefix
      'https://euphonious-torrone-5238d5.netlify.app'       // Your Astro blog URL
    );
    console.log(`Proxying request to: ${astroBlogUrl}`);

    // Fetch the page from your Astro blog
    const response = await fetch(astroBlogUrl, {
      headers: request.headers,
      method: request.method,
    });

    // Fix asset paths (CSS/JS/Images) in the response
    let html = await response.text();
    html = html
      .replace(
        /(href|src)="\/(?!\/)/g, 
        '$1="/blogs/'  // Rewrite root paths to /blog/
      )
      .replace(
        /https:\/\/euphonious-torrone-5238d5\.netlify\.app\//g, 
        '/blogs/'      // Replace full Astro blog URLs
      );

    // Return the modified response
    return new Response(html, {
      status: response.status,
      headers: {
        "Content-Type": "text/html",
        ...response.headers,
      },
    });
  }

  // Pass through non-/blog requests
  return context.next();
};