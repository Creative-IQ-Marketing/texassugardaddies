export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

export const trackPageView = (path) => {
  if (window.gtag) {
    window.gtag('config', 'G-HQWELS4TBJ', {
      page_path: path,
    });
  }
};
