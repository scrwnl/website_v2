import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import metas from "lume/plugins/metas.ts";
import nav from "lume/plugins/nav.ts";
import pagefind from "lume/plugins/pagefind.ts";
import redirects from "lume/plugins/redirects.ts";
import icons from "lume/plugins/icons.ts";
import katex from "lume/plugins/katex.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import check_urls from "lume/plugins/check_urls.ts";
import og_images from "lume/plugins/og_images.ts";
import feed from "lume/plugins/feed.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
    src: "./src"
});

// Plugins
site.use(code_highlight());
site.use(metas());
site.use(nav());
site.use(pagefind());
site.use(redirects());
site.use(icons());
site.use(katex());
//site.use(tailwindcss());
site.use(check_urls());
site.use(og_images());
site.use(feed());
site.use(sitemap());

// Copy files
site.copy(".well-known")
site.copy("files")

export default site;
