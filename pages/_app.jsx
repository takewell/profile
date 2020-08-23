import Head from "next/head";
import { SITE } from "data/site";
import { PrismBaseline } from "@zeit-ui/react-prism";
import { ZeitProvider, CssBaseline } from "@zeit-ui/react";
import React, { useCallback, useState, useEffect, useMemo } from "react";
import { useDomClean } from "lib/useDomClean";
import { getDNSPrefetchValue } from "lib/data-transform";
import { ThemeConfigProvider } from "lib/components/theme-config-provider";
import "public/style/style.css";

const Application = ({ Component, pageProps }) => {
  const [themeType, setThemeType] = useState("dark");
  const domain = useMemo(() => getDNSPrefetchValue(SITE.domain), []);
  const changeHandle = useCallback((isDark) => {
    const next = isDark ? "light" : "dark";
    setThemeType(next);
  }, []);

  useEffect(() => {
    if (typeof localStorage !== "object") return null;
    const themeType = localStorage.getItem("theme");
    console.log("theme", themeType);
    setThemeType(themeType === "dark" ? "dark" : "light");
  }, []);
  useEffect(() => localStorage.setItem("theme", themeType), [themeType]);
  useDomClean();
  return (
    <>
      <Head>
        <title>{SITE.title}</title>
        {domain && <link rel="dns-prefetch" href={domain} />}
        <meta name="google" value="notranslate" />
        <meta name="referrer" content="strict-origin" />
        <meta name="description" content={SITE.description} />
        <meta property="og:site_name" content={SITE.title} />
        <meta property="og:description" content={SITE.description} />
        <meta property="og:type" content="website" />
        <meta name="generator" content="takewell.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content={SITE.author} />
        <meta name="twitter:creator" content={`@${SITE.twitter}`} />
        <meta property="og:title" content={SITE.title} />
        <meta property="og:url" content={SITE.domain} />
        <meta
          property="og:image"
          content={`https:${domain}/assets/og-main.png`}
        />
        <meta
          property="twitter:image"
          content={`https:${domain}/assets/og-main.png`}
        />
        <meta
          itemProp="image"
          property="og:image"
          content={`https:${domain}/assets/og-main.png`}
        />
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
      </Head>
      <ZeitProvider theme={{ type: themeType }}>
        <CssBaseline />
        <PrismBaseline />
        <ThemeConfigProvider onChange={changeHandle}>
          <Component {...pageProps} />
        </ThemeConfigProvider>
        <style global jsx>{`
          @media only screen and (max-width: 767px) {
            html {
              font-size: 15px;
            }
          }
        `}</style>
      </ZeitProvider>
    </>
  );
};

export default Application;
