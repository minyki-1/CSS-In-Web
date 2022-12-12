const insertStyle = (css) => {
  const style = document.createElement("style");
  style.textContent = css;
  style.id = "@CssInWeb";
  document.body.prepend(style);
}

export function connectCIW({ url }) {
  if (typeof window !== 'object') return;
  const cssStorage = sessionStorage.getItem("@CssInWeb");
  try {
    if (cssStorage && !document.getElementById("@CssInWeb")) insertStyle(cssStorage);
  } catch (err) { console.error(err); }
  try {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        const styleElem = document.getElementById("@CssInWeb");
        if (!styleElem) insertStyle(result);
        else if (result !== cssStorage) styleElem.textContent = result;
        sessionStorage.setItem("@CssInWeb", result);
      });
  } catch (err) { console.error(err); }
}

export async function serverCIW({ url }) {
  try {
    return await fetch(url).then(res => res.json());
  } catch (err) { console.error(err); }
}