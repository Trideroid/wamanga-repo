export default {
  id: "ru.wamanga",
  name: "Wamanga",
  version: "1.0.0",

  baseUrl: "https://wamanga.ru",

  async search(query) {
    const res = await fetch(`${this.baseUrl}/api/search/${query}`);
    return res.json();
  },

  async getManga(url) {
    const res = await fetch(`${this.baseUrl}${url}`);
    return res.text();
  }
};
