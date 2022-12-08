import { useEffect, useState } from "react"

export default function CssInWeb({ children, url }) {
  const [cssText, setCssText] = useState();
  useEffect(() => {
    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((result) => setCssText(result));
    }
  }, []);
  return (
    <>
      <style>{cssText}</style>
      {children}
    </>
  )
}