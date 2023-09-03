import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://dab62015d43de8a354467133a370456a@o4505780610334720.ingest.sentry.io/4505781848637440",
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],

  tracesSampleRate: 1.0,

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);