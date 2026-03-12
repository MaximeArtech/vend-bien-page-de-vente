import fs from "fs";
import path from "path";

export default function Home() {
  const htmlPath = path.join(process.cwd(), "src/content/page-body.html");
  const html = fs.readFileSync(htmlPath, "utf-8");

  return (
    <main id="content" className="site-main post-1313 page type-page status-publish hentry">
      <div className="page-content">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  );
}
