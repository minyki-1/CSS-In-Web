const ciwInfo = { id: null };

const makeRandomId = () => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
  let id = '';
  for (let i = 0; i < 8; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    id += chars.substring(randomNum, randomNum + 1);
  }
  ciwInfo.id = id;
}

export default function CssInWeb({ url }) {
  if (!url) {
    console.error("Url Argument is undefined.");
    return;
  }
  if (ciwInfo.id) return;
  try {
    makeRandomId();
    fetch(url)
      .then(res => res.json())
      .then(result => {
        document.body.children[0]
          .insertAdjacentHTML("beforebegin", `<style id="css-in-web_${ciwInfo.id}">${result}</style>`);
      });
  } catch (err) {
    console.error(err);
  }
}