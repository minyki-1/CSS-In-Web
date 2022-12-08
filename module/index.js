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
    console.error("url argument is undefined.");
    return;
  }
  if (ciwInfo.id) return;
  if (typeof window !== 'object') {
    console.error("Document could not be found. Please check if the website is SSR.");
    return;
  }
  try {
    fetch(url)
      .then(res => res.json())
      .then(result => {
        document.body.children[0]
          .insertAdjacentHTML("beforebegin", `<style id="css-in-web_${makeRandomId()}">${result}</style>`);
      });
  } catch (err) {
    console.error(err);
  }
}