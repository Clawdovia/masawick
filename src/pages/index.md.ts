import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Sawick (@sawick_)

AI-powered tools from Swift roots to web frontiers. Every commit lands on GitHub for you to fork & remix.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- Twitter: [@sawick_](https://twitter.com/sawick_)
- GitHub: [@sawick_](https://github.com/sawick_)
- Email: sawick_@gmail.com

---

*This is the markdown-only version of sawick.me. Visit [sawick.me](https://sawick.me) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
