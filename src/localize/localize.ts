import * as en from "./languages/en.json";
import * as it from "./languages/it.json";
import * as fr from "./languages/fr.json";
import * as es from "./languages/es.json";
import * as de from "./languages/de.json";
import * as pt_BR from "./languages/pt-br.json"; // Brazilian portuguese
import * as zh_CN from "./languages/zh-cn.json"; // Chinese
import * as sv from "./languages/sv.json"; // Swedish

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const languages: any = {
  en: en,
  it: it,
  fr: fr,
  es: es,
  de: de,
  pt_BR: pt_BR,
  zh_CN: zh_CN,
  sv: sv,
};

export function localize(string: string, search = "", replace = ""): string {
  const lang = (localStorage.getItem("selectedLanguage") || "en")
    .replace(/['"]+/g, "")
    .replace("-", "_");

  let translated: string;

  try {
    translated = string.split(".").reduce((o, i) => o[i], languages[lang]);
  } catch (e) {
    translated = string.split(".").reduce((o, i) => o[i], languages["en"]);
  }

  if (translated === undefined)
    translated = string.split(".").reduce((o, i) => o[i], languages["en"]);

  if (search !== "" && replace !== "") {
    translated = translated.replace(search, replace);
  }
  return translated;
}
