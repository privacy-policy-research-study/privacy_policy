import { useState } from "react";
import ChatPresentation from "./ChatPresentation";
import VerifyPresentation from "./VerifyPresentation";
import OriginalPresentation from "./OriginalPresentation";
import AudioPresentation from "./AudioPresentation";
import TextPresentation from "./TextPresentation";
import VisualPresentation from "./VisualPresentation";
import "./App.css";

// Every participant has a private entry point to only their assigned format.
const pages = {
  audio: AudioPresentation,
  visual: VisualPresentation,
  original: OriginalPresentation,
  text: TextPresentation,
  chat: ChatPresentation,
  verify: VerifyPresentation,
};

export default function App() {
  const mode = new URLSearchParams(window.location.search).get("mode");
  const Page = Object.prototype.hasOwnProperty.call(pages, mode) ? pages[mode] : null;
  const [started, setStarted] = useState(false);

  if (!Page) return <main className="container" style={{ padding: "80px 24px", textAlign: "center" }}><h1>Privacy Policy Study</h1><p>Please use the study link provided in your survey or invitation.</p></main>;

  if (!started) return (
    <main className="study-intro-page">
      <section className="study-intro-card" aria-labelledby="study-title">
        <div className="study-intro-kicker">PRIVACY POLICY RESEARCH STUDY</div>
        <h1 id="study-title">Welcome to the Privacy Policy Study</h1>
        <p>Thank you for taking part in this research study. You will explore information about the Spotify Privacy Policy and then complete the questions provided by the research team.</p>
        <p>Please review the privacy policy information carefully and proceed at your own pace.</p>
        <button type="button" className="study-start-button" onClick={() => { setStarted(true); window.scrollTo(0, 0); }}>Begin Study <span aria-hidden="true">→</span></button>
      </section>
    </main>
  );

  return <div className="website"><a className="skip-link" href="#main">Skip to main content</a><div id="main"><Page /></div></div>;
}
