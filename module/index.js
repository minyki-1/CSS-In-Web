export default function cssInWeb({ url }) {
  if (!url) {
    console.error("URL argument is undefined.");
    return;
  }
  if (typeof window !== 'object') return;
  const cssStorage = JSON.parse(sessionStorage.getItem("@CssInWeb"));
  try {
    if (cssStorage && !document.getElementById("@CssInWeb")) {
      const style = `<style id="@CssInWeb">${cssStorage}</style>`;
      document.body.children[0]
        .insertAdjacentHTML("beforebegin", style);
    }
  } catch (err) { console.error(err); }
  try {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        let isChange = false;
        if (!document.getElementById("@CssInWeb")) {
          isChange = true;
        } else if (result !== cssStorage) {
          document.getElementById("@CssInWeb").remove();
          isChange = true;
        }
        if (isChange) document.body.children[0].insertAdjacentHTML("beforebegin", `<style id="@CssInWeb">${result}</style>`);
        sessionStorage.setItem("@CssInWeb", JSON.stringify(result));
      });
  } catch (err) { console.error(err); }
}