'use strict';
function motiveQuotePresentation(quote,language,bank){const fallback={...quote,language:'en',translated:false},record=bank?.[quote.id];if(typeof quote.id!=='string'||quote.id.startsWith('personal-')||!['es','fr'].includes(language)||!record||record.sourceText!==quote.text||record.sourceCategory!==quote.category||record.sourceAuthor!==quote.author||typeof record[language]!=='string'||!record[language].trim())return fallback;return {...quote,text:record[language],language,translated:true};}
function motiveQuoteLocaleCoverage(quotes,language,bank){return {translated:quotes.filter(q=>motiveQuotePresentation(q,language,bank).translated).length,total:quotes.length};}
function motiveQuoteFormatted(presentation){return '“'+presentation.text+'” — '+presentation.author;}
// This hook is available before app startup; it reads only the already loaded language preference.
function presentMotiveQuote(quote){return motiveQuotePresentation(quote,typeof state==='undefined'?'en':state.studio?.language,typeof motiveQuoteLocales==='undefined'?{}:motiveQuoteLocales);}
function formattedMotiveQuote(quote){return motiveQuoteFormatted(presentMotiveQuote(quote));}
if(typeof module!=='undefined')module.exports={motiveQuotePresentation,motiveQuoteLocaleCoverage,motiveQuoteFormatted};
