// Paste this whole script into Scriptable. Name it Motive.
const site = "https://joewalker989.github.io/motive/";
const files = FileManager.local();
const cache = files.joinPath(files.documentsDirectory(), "motive-quotes-v1.json");
const widget = new ListWidget();
widget.backgroundColor = new Color("E5EACB");
widget.setPadding(16, 18, 16, 18);
widget.url = site;

const title = widget.addText("✳  MOTIVE");
title.font = Font.boldSystemFont(12);
title.textColor = new Color("526441");
widget.addSpacer();

try {
  let quotes;
  try {
    quotes = JSON.parse(files.readString(cache));
    if (!Array.isArray(quotes) || quotes.length < 400 ||
        quotes.some(q => typeof q.text !== "string" || !q.text.trim()) ||
        new Set(quotes.map(q => q.text)).size !== quotes.length) throw Error("Invalid cache");
  } catch {
    const request = new Request(site + "quotes.json");
    request.timeoutInterval = 10;
    quotes = await request.loadJSON();
    if (!Array.isArray(quotes) || quotes.length < 400 ||
        quotes.some(q => typeof q.text !== "string" || !q.text.trim()) ||
        new Set(quotes.map(q => q.text)).size !== quotes.length) throw Error("Invalid library");
    try { files.writeString(cache, JSON.stringify(quotes)); } catch {}
  }
  const now = new Date();
  const day = Math.floor(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000);
  const quote = quotes[((day % quotes.length) + quotes.length) % quotes.length];
  const text = widget.addText("“" + quote.text + "”");
  text.font = Font.semiboldSystemFont(config.widgetFamily === "small" ? 14 : 17);
  text.textColor = new Color("25382D");
  text.minimumScaleFactor = 0.65;
  text.lineLimit = config.widgetFamily === "small" ? 6 : 5;
  widget.addSpacer();
  const footer = widget.addText("A LITTLE FORWARD, EVERY DAY.");
  footer.font = Font.mediumSystemFont(8);
  footer.textColor = new Color("657153");
  widget.refreshAfterDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 5);
} catch {
  const help = widget.addText("Connect to the internet, then run Motive in Scriptable once to load your quotes.");
  help.font = Font.systemFont(14);
  help.textColor = new Color("25382D");
  widget.refreshAfterDate = new Date(Date.now() + 15 * 60000);
}

Script.setWidget(widget);
if (config.runsInApp) await widget.presentMedium();
Script.complete();
