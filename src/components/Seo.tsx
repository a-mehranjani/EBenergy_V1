import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SeoProps = { title: string; description?: string; path?: string };

const SITE_URL = "https://ebenergy.com";

export function useSeo({ title, description, path }: SeoProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = title.includes("EBenergy") ? title : `${title} — EBenergy`;

    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
    }

    const ogTitle = title.includes("EBenergy") ? title : `${title} — EBenergy`;
    setMeta("property", "og:title", ogTitle);
    setMeta("name", "twitter:title", ogTitle);

    const url = `${SITE_URL}${path ?? location.pathname}`;
    setMeta("property", "og:url", url);
  }, [title, description, path, location.pathname]);
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
