(() => {
  const measurementId = new URL(document.currentScript.src).searchParams.get("id");

  if (!measurementId) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // Route-aware page_view events are sent by AnalyticsPageView so a Next.js
  // navigation produces one event rather than relying on browser history heuristics.
  window.gtag("config", measurementId, { send_page_view: false });
})();
