'use strict';
const motiveEncryptableMedia=['voice','narration','vision'];
function motiveProtectedMedia(config){return [...new Set(Array.isArray(config?.protectedKinds)?config.protectedKinds.filter(k=>motiveEncryptableMedia.includes(k)):[])];}
function motiveMediaEnvelope(row,payload){return {format:'motive-private-media-v1',id:row.id,kind:row.kind,content:payload};}
function motiveMediaContent(row,envelope){if(envelope?.format!=='motive-private-media-v1'||envelope.id!==row.id||envelope.kind!==row.kind||!envelope.content||typeof envelope.content!=='object')throw Error('Private media does not match its stored record.');return envelope.content;}
function motiveMediaMigration(rows,kinds){const selected=[...new Set(kinds.filter(k=>motiveEncryptableMedia.includes(k)))];if(!selected.length)throw Error('Choose a media collection.');return rows.filter(r=>selected.includes(r.kind)&&r.payload&&!r.encrypted);}
function checkMotiveMediaSnapshot(snapshot,current){const map=new Map(current.map(r=>[r.id,r]));if(snapshot.some(row=>JSON.stringify(map.get(row.id))!==JSON.stringify(row)))throw Error('Stored records changed during preparation. Review again before protecting them.');}
if(typeof module!=='undefined')module.exports={motiveEncryptableMedia,motiveProtectedMedia,motiveMediaEnvelope,motiveMediaContent,motiveMediaMigration,checkMotiveMediaSnapshot};
