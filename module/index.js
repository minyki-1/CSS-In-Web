const ciwInfo = { id: null };

const makeRandomId = () => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
  let id = '';
  for (let i = 0; i < 8; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    id += chars.substring(randomNum, randomNum + 1);
  }
  ciwInfo.id = id;
  return id;
}

export default function cssInWeb({ url }) {
  if (!url) {
    console.error("URL argument is undefined.");
    return;
  }
  if (ciwInfo.id) return;
  if (typeof window !== 'object') return;
  const cssStorage = JSON.parse(sessionStorage.getItem("@CssInWeb"));
  if (cssStorage && !document.getElementById(cssStorage.id)) {
    const { id, css } = cssStorage;
    try {
      const style = `<style id="@CssInWeb_${id}">${css}</style>`;
      document.body.children[0]
        .insertAdjacentHTML("beforebegin", style);
    } catch (err) {
      console.error(err);
    }
  }
  try {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        const id = "@CssInWeb_" + makeRandomId();
        const style = `<style id="${id}">${result}</style>`;
        if (!cssStorage) {
          document.body.children[0]
            .insertAdjacentHTML("beforebegin", style);
        }
        sessionStorage.setItem("@CssInWeb", JSON.stringify({ css: result, id }));
      });
  } catch (err) {
    console.error(err);
  }
}