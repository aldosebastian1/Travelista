import Script from "next/script";

// Komponen Google Analytics 4
// Ganti GA_MEASUREMENT_ID dengan ID GA4 Anda (format: G-XXXXXXXXXX)
// Buat properti di: https://analytics.google.com/

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
      </Script>
    </>
  );
}
