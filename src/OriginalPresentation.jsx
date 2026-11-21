import { useEffect, useState } from "react";
import policyHtml from "./data/originalPolicy.html?raw";
import "./OriginalPresentation.css";

const sections = [
  "About this Policy", "Your personal data rights and controls", "Personal data we collect about you",
  "Our purpose for using your personal data", "Disclosing your personal data", "Data retention",
  "Transfer to other countries", "Keeping your personal data safe", "Children", "Third-Party Links",
  "Privacy Request Metrics", "Changes to this Policy", "How to contact us"
];

// This is a locally rendered copy of the supplied policy text, not an embedded PDF.
const bodyHtml = policyHtml
  .replace(/^<h2>Spotify Privacy Policy<\/h2>\s*<p>Effective as of July 1, 2026<\/p>/, "")
  .replace(/<h2>(\d+)\. ([^<]+)<\/h2>/g, (_, number, title) => `<h2 id="section-${number}">${number}. ${title}</h2>`);

export default function OriginalPresentation() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { document.title = "Privacy Policy - Spotify"; }, []);
  return (
    <main className="spotify-legal-page">
      <header className="spotify-legal-topbar">
        <div className="spotify-legal-topinner">
          <a className="spotify-wordmark" href="#top" aria-label="Spotify Privacy Policy"><span className="spotify-mark" aria-hidden="true">≋</span><span>Spotify</span></a>
          <button type="button" className="spotify-mobile-menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
          <nav className={menuOpen ? "spotify-nav open" : "spotify-nav"} aria-label="Spotify navigation">
            <span>Premium</span><span>Support</span><span>Download</span><span className="spotify-nav-divider"/><span>Sign up</span><span>Log in</span>
          </nav>
        </div>
      </header>
      <div className="spotify-legal-shell" id="top">
        <aside className="spotify-legal-sidebar" aria-label="Policy contents">
          <div className="spotify-side-title">Legal</div>
          <div className="spotify-side-current">Privacy Policy</div>
          <div className="spotify-side-caption">Contents</div>
          {sections.map((section, index) => <a key={section} href={`#section-${index + 1}`}>{index + 1}. {section}</a>)}
        </aside>
        <article className="spotify-legal-article">
          <div className="spotify-legal-eyebrow">Spotify Legal</div>
          <h1>Spotify Privacy Policy</h1>
          <p className="spotify-effective">Effective as of July 1, 2026</p>
          <div className="spotify-legal-mobile-toc"><strong>Contents</strong>{sections.map((section, index) => <a key={section} href={`#section-${index + 1}`}>{index + 1}. {section}</a>)}</div>
          <div className="spotify-policy-body" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
        </article>
      </div>
      <footer className="spotify-legal-footer"><span className="spotify-wordmark"><span className="spotify-mark">≋</span> Spotify</span><span>© Spotify AB</span></footer>
    </main>
  );
}
