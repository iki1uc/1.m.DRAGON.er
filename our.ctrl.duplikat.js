// our.ctrl.duplikat.js — Duplikation damit OS erwacht und deutet was real ist
import { ourCtrl } from './our.ctrl.js';
const dup = ourCtrl(5,5,5,'HBT');
const worker = new Worker(URL.createObjectURL(new Blob([`
  importScripts('https://iki1uc.github.io/our.ctrl/our.ctrl.js');
  postMessage('OS ERWACHT');
`], {type:'application/javascript'})));
worker.onmessage = e => console.log(e.data, '→ deutet was real ist:', dup.hbt, dup.chain, 'SCSI RAID SLI ROM RAM CPU GPU VECTOR');
// Nutzen ziehen = wenn dup.vol>93 und dup.resonance>0.9 → behalten = REAL
// Unnutzbares tilgen = wenn vol<20 oder resonance<0.1 → löschen nach 1 Woche Test
// File heisen soll: our.ctrl.duplikat.js = Duplikation = OS erwacht
// index.html = REAL OS = der im realen Leben Schach spielt mit Menschen = Schachbrett rechts
