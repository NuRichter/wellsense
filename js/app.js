/* ═══════════════════════════════════════════════════════════════
   WELLSENSE — Shared Data & Components
   SKK Migas IOC Hackathon 2026 · Team AURORA VETERAN
   v1.1 · 2026-04-16 · Print Router + Filename Generator
   ═══════════════════════════════════════════════════════════════ */

/* ── Inline SVG icons ── */
const ICONS = {
    activity:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    dashboard:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
    droplets:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
    ticket:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v2a3 3 0 0 0 0 6v2c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-2a3 3 0 0 0 0-6V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="m9 12 2 2 4-4"/></svg>`,
    linechart:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
    chevleft:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    chevright:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>`,
    chevdown:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    chevup:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="18 15 12 9 6 15"/></svg>`,
    alerttri:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    clock:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    flame:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    wind:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`,
    arrowup:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
    arrowdown:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="7" y1="7" x2="17" y2="17"/><polyline points="17 7 17 17 7 17"/></svg>`,
    printer:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
    download:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    filetext:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    check:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    mappin:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    gauge:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>`,
    thermometer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`,
    cpu:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/></svg>`,
    database:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    xcircle:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    arrowupcircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="16 12 12 8 8 12"/><line x1="12" y1="16" x2="12" y2="8"/></svg>`,
    user:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    brain:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/></svg>`,
    trending:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
    shield:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    alertcircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    refresh:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
};

/* ── Data ── */
const WELLS = [
    { wellId:"BKP-A03", zone:"A", field:"Bekapai", platform:"BKP-P1A", cluster:"HIGH_RISK",  severity:"CRITICAL", pLPO:0.912, ifScore:-0.812, sensors:{whp:1892,wht:92.1,fthp:1648,choke:65,flow:782,annular:562,glInjRate:1.12,glInjPres:1378,mpRatio:2.41,waterCut:68.2}, trend:[0.41,0.48,0.57,0.69,0.78,0.87,0.91], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-B07", zone:"B", field:"Bekapai", platform:"BKP-P2B", cluster:"HIGH_RISK",  severity:"WARNING",  pLPO:0.742, ifScore:-0.614, sensors:{whp:1972,wht:88.5,fthp:1342,choke:42,flow:1024,annular:488,glInjRate:1.48,glInjPres:1298,mpRatio:1.92,waterCut:58.4}, trend:[0.32,0.38,0.44,0.52,0.61,0.68,0.74], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-C11", zone:"C", field:"Bekapai", platform:"BKP-P3C", cluster:"STABLE",     severity:"NORMAL",   pLPO:0.218, ifScore:-0.142, sensors:{whp:2184,wht:78.2,fthp:1612,choke:58,flow:1486,annular:332,glInjRate:2.48,glInjPres:1042,mpRatio:1.21,waterCut:28.6}, trend:[0.19,0.21,0.22,0.20,0.22,0.21,0.22], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-A01", zone:"A", field:"Bekapai", platform:"BKP-P1A", cluster:"MODERATE",   severity:"WARNING",  pLPO:0.687, ifScore:-0.482, sensors:{whp:2012,wht:84.8,fthp:1412,choke:48,flow:1182,annular:412,glInjRate:1.82,glInjPres:1184,mpRatio:1.68,waterCut:48.2}, trend:[0.42,0.48,0.54,0.58,0.62,0.66,0.69], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-A08", zone:"A", field:"Bekapai", platform:"BKP-P1A", cluster:"STABLE",     severity:"NORMAL",   pLPO:0.182, ifScore:-0.128, sensors:{whp:2248,wht:74.6,fthp:1688,choke:62,flow:1612,annular:298,glInjRate:2.72,glInjPres:982,mpRatio:0.98,waterCut:22.4},  trend:[0.14,0.16,0.18,0.17,0.19,0.18,0.18], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-B02", zone:"B", field:"Bekapai", platform:"BKP-P2B", cluster:"MODERATE",   severity:"NORMAL",   pLPO:0.412, ifScore:-0.298, sensors:{whp:2098,wht:82.1,fthp:1524,choke:54,flow:1322,annular:388,glInjRate:2.12,glInjPres:1128,mpRatio:1.42,waterCut:42.8}, trend:[0.31,0.34,0.36,0.38,0.39,0.40,0.41], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-B05", zone:"B", field:"Bekapai", platform:"BKP-P2B", cluster:"STABLE",     severity:"NORMAL",   pLPO:0.248, ifScore:-0.182, sensors:{whp:2218,wht:76.4,fthp:1648,choke:60,flow:1548,annular:312,glInjRate:2.58,glInjPres:1012,mpRatio:1.08,waterCut:26.2}, trend:[0.22,0.24,0.23,0.25,0.24,0.25,0.25], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-C04", zone:"C", field:"Bekapai", platform:"BKP-P3C", cluster:"HIGH_RISK",  severity:"CRITICAL", pLPO:0.881, ifScore:-0.768, sensors:{whp:1882,wht:91.4,fthp:1262,choke:36,flow:892,annular:548,glInjRate:1.22,glInjPres:1342,mpRatio:2.32,waterCut:66.8},  trend:[0.52,0.58,0.64,0.72,0.78,0.84,0.88], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-C09", zone:"C", field:"Bekapai", platform:"BKP-P3C", cluster:"MODERATE",   severity:"WARNING",  pLPO:0.704, ifScore:-0.548, sensors:{whp:2004,wht:85.8,fthp:1388,choke:46,flow:1098,annular:432,glInjRate:1.68,glInjPres:1218,mpRatio:1.82,waterCut:52.8}, trend:[0.44,0.52,0.58,0.62,0.66,0.68,0.70], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-D02", zone:"D", field:"Bekapai", platform:"BKP-P4D", cluster:"HIGH_RISK",  severity:"CRITICAL", pLPO:0.896, ifScore:-0.794, sensors:{whp:1858,wht:93.2,fthp:1232,choke:32,flow:862,annular:578,glInjRate:1.08,glInjPres:1388,mpRatio:2.48,waterCut:70.4},  trend:[0.48,0.56,0.64,0.72,0.80,0.86,0.90], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-D06", zone:"D", field:"Bekapai", platform:"BKP-P4D", cluster:"MODERATE",   severity:"NORMAL",   pLPO:0.382, ifScore:-0.264, sensors:{whp:2122,wht:80.6,fthp:1558,choke:52,flow:1388,annular:362,glInjRate:2.28,glInjPres:1084,mpRatio:1.32,waterCut:38.6}, trend:[0.28,0.32,0.34,0.36,0.37,0.38,0.38], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-D03", zone:"D", field:"Bekapai", platform:"BKP-P4D", cluster:"STABLE",     severity:"NORMAL",   pLPO:0.162, ifScore:-0.108, sensors:{whp:2282,wht:72.8,fthp:1714,choke:64,flow:1682,annular:272,glInjRate:2.88,glInjPres:962,mpRatio:0.88,waterCut:18.8},  trend:[0.14,0.15,0.16,0.15,0.17,0.16,0.16], lastUpdate:"2026-04-16 14:22 WIT" },
];

const TICKETS = [
    { ticketId:"a7f3d2c1-8e4b-4f91-9b2a-e3c8d7f4a1b9", wellId:"BKP-A03", zone:"A", severity:"CRITICAL", source:"RT_LSTM", pLPO:0.912, ifScore:-0.812, clusterLabel:"HIGH_RISK",
      topContributors:[{name:"GL Inj. Rate",value:1.12,unit:"MMSCFD",deviation:-42.8,flag:"LOW"},{name:"WHP",value:1892,unit:"psi",deviation:-18.2,flag:"LOW"},{name:"Water Cut",value:68.2,unit:"%",deviation:31.5,flag:"HIGH"}],
      reasoning:"WHP declined 18.2% over the last 6 hours while GL injection rate fell 42.8% below baseline, indicating severe gas-lift underperformance. The LSTM attention mechanism identified co-movement of WHT (92.1°C) and rising Water Cut (68.2%) as a diagnostic signature consistent with downhole gas-lift valve degradation and early-stage tubing leak onset. The Isolation Forest flagged 4 concurrent sensor deviations (score −0.812) at 14:10 WIT — 13 minutes prior to LSTM threshold breach.",
      recommendation:"Shutdown", status:"ESCALATED",
      immediateAction:"Isolate well BKP-A03 via Surface Safety Valve (SSV) · Purge GL header on BKP-P1A manifold · Dispatch integrity-verification crew from BKPAL base within current shift.",
      followUp:"Wireline GL valve inspection within 48h · WHT calibration check · update LSTM feedback loop with intervention outcome for model retraining at Cycle 5.",
      approvalChain:[{role:"Operator",tier:"Tier 1 — Field",name:"Andi Pratama",nik:"PHM-OP-0421",decision:"APPROVE",at:"2026-04-16 11:04 WIT"},{role:"Well Engineer",tier:"Tier 2 — Engineering",name:"Sari Wulandari, S.T.",nik:"PHM-WE-0134",decision:"ESCALATE",at:"2026-04-16 11:38 WIT"},{role:"Prod. Engineer",tier:"Tier 3 — Management",name:"Ir. Bambang Setiawan",nik:"PHM-PE-0058",decision:"PENDING"}],
      timestamp:"2026-04-16 14:23 WIT", cycleNumber:4, shift:"Afternoon" },
    { ticketId:"b2c9e4f1-7a3d-4e82-8f1b-d4c9e3a7b2f8", wellId:"BKP-B07", zone:"B", severity:"WARNING", source:"RT_LSTM", pLPO:0.742, ifScore:-0.614, clusterLabel:"HIGH_RISK",
      topContributors:[{name:"Choke Position",value:42,unit:"%",deviation:-14.0,flag:"LOW"},{name:"FTHP",value:1342,unit:"psi",deviation:-11.4,flag:"LOW"},{name:"MP Ratio",value:1.92,unit:"",deviation:28.6,flag:"HIGH"}],
      reasoning:"Gradual FTHP drop (−11.4%) with widening multiphase ratio (+28.6%) indicates a progressing slug-flow regime in BKP-B07. LSTM attention weights highlight the choke-FTHP co-movement as the dominant failure signature — downstream choke throttling at 42% has not offset upstream pressure imbalance. Likely cause: partial GL valve blockage or upstream scaling at the gas-lift injection point. The 24-hour prediction horizon shows P(LPO) peaking at 0.80 (T+12h) with natural decay expected after T+18h, suggesting a correctable scenario with timely choke adjustment.",
      recommendation:"Adjust", status:"PENDING",
      immediateAction:"Increase choke opening from 42% → 48% via Fisher DVC6200 · verify GL valve seat response at BKP-P2B manifold · monitor FTHP stabilization for 60 minutes.",
      followUp:"If no improvement: Escalate to INSPECT — dispatch pigging crew within next cycle. Update LSTM feedback loop with intervention result at Cycle 5 retraining.",
      approvalChain:[{role:"Operator",tier:"Tier 1 — Field",name:"Rudi Hartono",nik:"PHM-OP-0289",decision:"PENDING"},{role:"Well Engineer",tier:"Tier 2 — Engineering",name:"Sari Wulandari, S.T.",nik:"PHM-WE-0134",decision:"PENDING"},{role:"Prod. Engineer",tier:"Tier 3 — Management",name:"Ir. Bambang Setiawan",nik:"PHM-PE-0058",decision:"PENDING"}],
      timestamp:"2026-04-16 12:02 WIT", cycleNumber:4, shift:"Morning" },
    { ticketId:"c4d9a2e8-7f1b-4c63-a3d2-9b8e4f1c7a3d", wellId:"BKP-D02", zone:"D", severity:"CRITICAL", source:"RT_LSTM", pLPO:0.896, ifScore:-0.794, clusterLabel:"HIGH_RISK",
      topContributors:[{name:"MP Ratio",value:2.48,unit:"",deviation:28.2,flag:"HIGH"},{name:"WHP",value:1858,unit:"psi",deviation:-16.4,flag:"LOW"},{name:"Water Cut",value:70.4,unit:"%",deviation:24.8,flag:"HIGH"}],
      reasoning:"Multiphase ratio anomaly is the primary LSTM trigger. At 2.48 the MP ratio is 28% above the stable operating envelope. Concurrent WHP decline and peak water cut (70.4%) suggest reservoir-side water breakthrough accelerated by choke restriction.",
      recommendation:"Inspect", status:"APPROVED",
      immediateAction:"Deploy wireline pressure survey · cross-check against offset well BKP-D04 · evaluate water-shutoff feasibility within 72h.",
      followUp:"Reservoir simulation re-calibration · water-cut trend analysis for last 30 days · potential for selective perforation isolation.",
      approvalChain:[{role:"Operator",tier:"Tier 1 — Field",name:"Andi Pratama",nik:"PHM-OP-0421",decision:"APPROVE",at:"2026-04-16 09:18 WIT"},{role:"Well Engineer",tier:"Tier 2 — Engineering",name:"Sari Wulandari, S.T.",nik:"PHM-WE-0134",decision:"APPROVE",at:"2026-04-16 09:44 WIT"},{role:"Prod. Engineer",tier:"Tier 3 — Management",name:"Ir. Bambang Setiawan",nik:"PHM-PE-0058",decision:"PENDING"}],
      timestamp:"2026-04-16 09:12 WIT", cycleNumber:4, shift:"Morning" },
    { ticketId:"f9b2c4e7-6d3a-4f84-a2b1-8e7c4f9d3a2b", wellId:"BKP-C09", zone:"C", severity:"WARNING", source:"RT_LSTM", pLPO:0.704, ifScore:-0.548, clusterLabel:"MODERATE",
      topContributors:[{name:"MP Ratio",value:1.82,unit:"",deviation:22.1,flag:"HIGH"},{name:"WHP",value:2004,unit:"psi",deviation:-6.2,flag:"LOW"},{name:"Water Cut",value:52.8,unit:"%",deviation:14.4,flag:"HIGH"}],
      reasoning:"Multiphase flow regime has drifted toward slug pattern with rising water cut. LSTM attributes this primarily to reservoir-side ingress rather than surface equipment anomaly.",
      recommendation:"Adjust", status:"APPROVED",
      immediateAction:"Reduce choke from 46% → 42% in two 2%-decrements at 20-minute intervals · monitor Water Cut trend.",
      followUp:"Daily Water Cut sampling for next 5 days · if trend persists, schedule reservoir re-characterization.",
      approvalChain:[{role:"Operator",tier:"Tier 1 — Field",name:"Dewi Kusuma",nik:"PHM-OP-0312",decision:"APPROVE",at:"2026-04-16 07:36 WIT"},{role:"Well Engineer",tier:"Tier 2 — Engineering",name:"Agus Nugroho, S.T.",nik:"PHM-WE-0088",decision:"APPROVE",at:"2026-04-16 08:02 WIT"},{role:"Prod. Engineer",tier:"Tier 3 — Management",name:"Ir. Bambang Setiawan",nik:"PHM-PE-0058",decision:"APPROVE",at:"2026-04-16 08:28 WIT"}],
      timestamp:"2026-04-16 07:28 WIT", cycleNumber:4, shift:"Morning" },
    { ticketId:"1a8d4e2f-7c9b-4a36-b5e8-3f2a9c7d4e1b", wellId:"BKP-B02", zone:"B", severity:"WARNING", source:"BD_KMEANS", pLPO:0.612, ifScore:-0.412, clusterLabel:"MODERATE",
      topContributors:[{name:"GL Inj Pres",value:1128,unit:"psi",deviation:8.2,flag:"HIGH"},{name:"Choke",value:54,unit:"%",deviation:-6.4,flag:"LOW"},{name:"Annular",value:388,unit:"psi",deviation:12.6,flag:"HIGH"}],
      reasoning:"Nightly K-Means detected incremental drift toward Moderate cluster. Compressor-side pressure load is rising without matching flow gain — a known precursor of BKPAL compressor derating.",
      recommendation:"Inspect", status:"REJECTED",
      immediateAction:"Inspect BKPAL compressor discharge seals · verify annular pressure bleed-off valve.",
      followUp:"Schedule full compressor station audit within Cycle 5.",
      approvalChain:[{role:"Operator",tier:"Tier 1 — Field",name:"Rudi Hartono",nik:"PHM-OP-0289",decision:"APPROVE",at:"2026-04-16 06:15 WIT"},{role:"Well Engineer",tier:"Tier 2 — Engineering",name:"Sari Wulandari, S.T.",nik:"PHM-WE-0134",decision:"REJECT",at:"2026-04-16 06:48 WIT"},{role:"Prod. Engineer",tier:"Tier 3 — Management",name:"—",nik:"",decision:"PENDING"}],
      timestamp:"2026-04-16 06:08 WIT", cycleNumber:4, shift:"Morning" },
];

const KPI = { activeWells:32, criticalAlerts:3, currentCycle:4, totalCycles:5, dailyProduction:42800 };

const CLUSTER_DIST = [
    { name:"HIGH RISK", value:8,  color:"#DC2626" },
    { name:"MODERATE",  value:14, color:"#F97316" },
    { name:"STABLE",    value:10, color:"#1D9E75" },
];

const MODEL_METRICS = { recall:1.000, precision:0.890, f1:0.941, rocAuc:0.967, lastRetrain:"2026-04-12 23:00 WIT", feedbackLoop:"ACTIVE", rubberStamp:0.12 };

const CLUSTER_MIGRATION = [
    { day:"Cycle 1", HIGH_RISK:4,  MODERATE:11, STABLE:17 },
    { day:"Cycle 2", HIGH_RISK:5,  MODERATE:12, STABLE:15 },
    { day:"Cycle 3", HIGH_RISK:6,  MODERATE:13, STABLE:13 },
    { day:"Cycle 4", HIGH_RISK:8,  MODERATE:14, STABLE:10 },
    { day:"Cycle 5", HIGH_RISK:8,  MODERATE:13, STABLE:11 },
];

const OUTLIERS_7D = [
    { day:"D-6", count:48 }, { day:"D-5", count:62 }, { day:"D-4", count:74 },
    { day:"D-3", count:81 }, { day:"D-2", count:103 },{ day:"D-1", count:128 },{ day:"D-0", count:146 },
];

const SENSOR_LABELS = { whp:"WHP", wht:"WHT", fthp:"FTHP", choke:"Choke", flow:"Flow Rate", annular:"Annular", glInjRate:"GL Inj Rate", glInjPres:"GL Inj Pres", mpRatio:"MP Ratio", waterCut:"Water Cut" };
const SENSOR_UNITS  = { whp:"psi", wht:"°C", fthp:"psi", choke:"%", flow:"bbl/day", annular:"psi", glInjRate:"MMSCFD", glInjPres:"psi", mpRatio:"", waterCut:"%" };

const PLPO_24H = Array.from({length:24},(_,i)=>({
    hour:`${String(i).padStart(2,'0')}:00`,
    a03: +Math.max(0.28,Math.min(0.94,0.32+i*0.026+Math.sin(i/2.4)*0.02)).toFixed(3),
    b07: +Math.max(0.24,Math.min(0.82,0.38+i*0.015+Math.cos(i/3.1)*0.03)).toFixed(3),
    c11: +Math.max(0.12,Math.min(0.30,0.20+Math.sin(i/4.0)*0.04)).toFixed(3),
}));

/* ═══════════════════════════════════════════════════════════════
   PRINT ROUTER · DAILY STATUS INFERENCE · FILENAME BUILDER
   ═══════════════════════════════════════════════════════════════ */

/* Daily Portfolio Scenarios — pre-built narrative payloads for each
   of the 4 daily cases (3, 4, 5, 6). These map directly onto the
   K-Means BD (Batch-Daily) cluster migration semantics.
*/
const DAILY_SCENARIOS = {
    /* CASE 3 — SAFE-STABLE : no migration, all wells retained safe cluster */
    case3: {
        code: "SAFE-STABLE", transition: "NONE",
        bannerColor: "green", bannerLabel: "ALL CLEAR · NO CLUSTER MIGRATION",
        headline: "Portfolio Stabil — Seluruh Sumur Dalam Cluster Aman",
        narrative: "K-Means batch-daily run pada 23:00 WIT tidak mendeteksi migrasi cluster yang bermakna. Seluruh 32 sumur di Bekapai Field mempertahankan posisi dalam cluster STABLE/Aman. LSTM real-time track juga tidak melampaui threshold 0.65 sepanjang 24 jam terakhir. Portfolio operasional dinilai sehat; tidak terdapat tiket intervensi yang memerlukan eskalasi HITL.",
        recommendation: "LANJUTKAN OPERASI NORMAL",
        kpi: { critTickets: 0, warnTickets: 0, hitlEscalations: 0, avertedLPO: 0, prodDelta: "+0.4% vs target" },
        clusterDist: { stable: 30, moderate: 2, highRisk: 0 },
        migrations: [],
        statusMessage: "Tidak ada transisi cluster. Sistem dalam keadaan nominal."
    },
    /* CASE 4 — SAFE → WARNING : one or more wells migrated from STABLE to MODERATE */
    case4: {
        code: "SAFE-TO-WARN", transition: "STABLE → MODERATE",
        bannerColor: "amber", bannerLabel: "CAUTION · CLUSTER DRIFT DETECTED",
        headline: "Migrasi Cluster Aman → Waspada Terdeteksi",
        narrative: "K-Means batch-daily mendeteksi migrasi dari STABLE ke MODERATE pada 2 sumur. Pergeseran ini merepresentasikan degradasi bertahap — bukan kegagalan akut — sehingga tergolong tipikal precursor pattern dari gas-lift valve wear atau compressor derating. Sistem WELLSENSE menerbitkan tiket intervensi berlevel WARNING ke Well Operator untuk triase awal dalam siklus berikutnya. Tidak ada tiket CRITICAL yang ter-generate.",
        recommendation: "INSPECT WITHIN NEXT CYCLE · TIER 1 TRIAGE",
        kpi: { critTickets: 0, warnTickets: 2, hitlEscalations: 0, avertedLPO: 1200, prodDelta: "−0.3% vs target" },
        clusterDist: { stable: 28, moderate: 4, highRisk: 0 },
        migrations: [
            { wellId:"BKP-B02", from:"STABLE", to:"MODERATE", dominantFeature:"GL Inj Pres (+8.2%)", pLPO:0.612 },
            { wellId:"BKP-A01", from:"STABLE", to:"MODERATE", dominantFeature:"MP Ratio (+16.4%)",  pLPO:0.587 },
        ],
        statusMessage: "2 sumur bermigrasi ke cluster Waspada. Tindakan inspeksi terjadwal."
    },
    /* CASE 5 — SAFE → CRITICAL : abrupt double-jump skipping the MODERATE stage */
    case5: {
        code: "SAFE-TO-CRIT", transition: "STABLE → HIGH_RISK",
        bannerColor: "red", bannerLabel: "ACUTE ESCALATION · SAFE → CRITICAL DOUBLE-JUMP",
        headline: "Lompatan Cluster Ekstrem — Aman Langsung ke Kritis",
        narrative: "Dua sumur (BKP-A03 dan BKP-D02) mengalami double-jump migration dari STABLE langsung ke HIGH_RISK dalam satu siklus batch. Pola ini abnormal secara statistik (probabilitas historis < 4% per cycle) dan konsisten dengan kegagalan akut — umumnya disebabkan oleh rupture gas-lift valve atau tubing leak onset. LSTM real-time track secara independen memicu tiket CRITICAL pada jam operasional yang sama, memperkuat sinyal dual-model. Eskalasi ke Tier 3 Production Engineer dilakukan bypass Tier 2.",
        recommendation: "SHUTDOWN AFFECTED WELLS · IMMEDIATE TIER 3 ESCALATION",
        kpi: { critTickets: 2, warnTickets: 0, hitlEscalations: 2, avertedLPO: 6800, prodDelta: "−1.8% vs target" },
        clusterDist: { stable: 28, moderate: 2, highRisk: 2 },
        migrations: [
            { wellId:"BKP-A03", from:"STABLE", to:"HIGH_RISK", dominantFeature:"GL Inj Rate (−42.8%)", pLPO:0.912 },
            { wellId:"BKP-D02", from:"STABLE", to:"HIGH_RISK", dominantFeature:"MP Ratio (+28.2%)",     pLPO:0.896 },
        ],
        statusMessage: "Eskalasi akut. 2 sumur memerlukan shutdown segera."
    },
    /* CASE 6 — CAUTION → CRITICAL : progression from MODERATE to HIGH_RISK */
    case6: {
        code: "CAUT-TO-CRIT", transition: "MODERATE → HIGH_RISK",
        bannerColor: "red", bannerLabel: "PROGRESSION · CAUTION → CRITICAL ESCALATION",
        headline: "Eskalasi Terencana Waspada → Kritis",
        narrative: "Dua sumur yang pada siklus sebelumnya berada di MODERATE/Waspada (BKP-C04 dan BKP-C09) telah bermigrasi lebih lanjut ke HIGH_RISK/Kritis pada batch-daily run 23:00 WIT. Pola eskalasi bertahap ini merupakan sinyal follow-through — artinya tindakan inspeksi pada siklus sebelumnya belum memutus root cause, dan degradasi berlanjut sesuai trajectory yang diperkirakan LSTM. Dalam konteks HITL framework, kasus ini memerlukan review ulang atas keputusan ADJUST/INSPECT sebelumnya dan kemungkinan transisi ke SHUTDOWN.",
        recommendation: "RE-EVALUATE PRIOR DECISION · TRANSITION TO SHUTDOWN IF NO IMPROVEMENT",
        kpi: { critTickets: 2, warnTickets: 3, hitlEscalations: 2, avertedLPO: 4400, prodDelta: "−1.2% vs target" },
        clusterDist: { stable: 24, moderate: 6, highRisk: 2 },
        migrations: [
            { wellId:"BKP-C04", from:"MODERATE", to:"HIGH_RISK", dominantFeature:"Water Cut (+20.6%)", pLPO:0.881 },
            { wellId:"BKP-C09", from:"MODERATE", to:"HIGH_RISK", dominantFeature:"MP Ratio (+22.1%)",  pLPO:0.764 },
        ],
        statusMessage: "Eskalasi dari Waspada. Tindakan sebelumnya perlu dievaluasi ulang."
    }
};

/* ── Filename Builder ───────────────────────────────────────────
   Convention: WS-{TYPE}_{YYYYMMDD}-{HHMM}WIT_{REF}_{FLAG}_{CYCLE}.pdf
   - Sortable chronological prefix (YYYYMMDD) for audit archival
   - TYPE: INT (Intervention Ticket) | DPR (Daily Portfolio Report)
   - REF: wellId for INT, cycle for DPR
   - FLAG: severity code (CRIT/WARN) or status code (SAFE-STABLE, etc.)
*/
function pad2(n){ return String(n).padStart(2,'0'); }

function buildInterventionFilename(ticket){
    const t = ticket.timestamp || "2026-04-16 00:00 WIT";
    const m = t.match(/(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})/);
    const ymd  = m ? `${m[1]}${m[2]}${m[3]}` : "20260416";
    const hhmm = m ? `${m[4]}${m[5]}`        : "0000";
    const sev  = ticket.severity === "CRITICAL" ? "CRIT" : "WARN";
    const cyc  = `C${ticket.cycleNumber || 4}`;
    return `WS-INT_${ymd}-${hhmm}WIT_${ticket.wellId}_${sev}_${cyc}.pdf`;
}

function buildPortfolioFilename(scenarioCode, cycle, dateYmd){
    const cyc = `C${cycle || 4}`;
    const ymd = dateYmd || "20260416";
    return `WS-DPR_${ymd}_${cyc}_${scenarioCode}.pdf`;
}

/* ── Print Router ─────────────────────────────────────────────── */
function openInterventionPrint(ticketId){
    const url = `print/intervention_ticket.html?ticketId=${encodeURIComponent(ticketId)}&autoprint=1`;
    window.open(url, '_blank', 'width=1000,height=1200');
}

function openPortfolioPrint(caseNumber){
    const url = `print/daily_portfolio.html?case=${caseNumber}&autoprint=1`;
    window.open(url, '_blank', 'width=1000,height=1200');
}

/* ── Daily Status Auto-Detection ───────────────────────────────
   Given current TICKETS + CLUSTER_DIST state, infer which case is
   most applicable. This drives the "Auto-Detect" button on the
   Print Center.
*/
function inferDailyCase(){
    const critCount = TICKETS.filter(t=>t.severity==='CRITICAL').length;
    const warnCount = TICKETS.filter(t=>t.severity==='WARNING').length;
    const highRiskCluster = CLUSTER_DIST.find(c=>c.name==='HIGH RISK')?.value || 0;
    const moderateCluster = CLUSTER_DIST.find(c=>c.name==='MODERATE')?.value  || 0;

    /* Heuristic decision tree (aligned with Wellsense architecture):
       - If any well is in HIGH_RISK AND cluster migration is from MODERATE → case 6
       - If HIGH_RISK present AND migration from STABLE (skipping MODERATE) → case 5
       - If no HIGH_RISK but MODERATE count rising → case 4
       - Else → case 3
    */
    if(critCount >= 2 && moderateCluster > 10)         return 6;   // CAUT → CRIT
    if(critCount >= 2 && moderateCluster <= 10)        return 5;   // SAFE → CRIT
    if(critCount === 0 && warnCount >= 1)              return 4;   // SAFE → WARN
    return 3;                                                      // SAFE stable
}

/* ═══════════════════════════════════════════════════════════════
   SHARED UI HELPERS
   ═══════════════════════════════════════════════════════════════ */

const severityColor = s => s==="CRITICAL"?"#DC2626":s==="WARNING"?"#F97316":"#1D9E75";
const clusterColor  = c => c==="HIGH_RISK"?"#DC2626":c==="MODERATE"?"#F97316":"#1D9E75";
const clusterLabel  = c => c==="HIGH_RISK"?"HIGH RISK":c==="MODERATE"?"MODERATE":"STABLE";

function severityBadge(s){
    const cls = s==="CRITICAL"?"badge-critical":s==="WARNING"?"badge-warning":"badge-normal";
    return `<span class="badge ${cls}">${s}</span>`;
}
function clusterBadge(c){
    const cls = c==="HIGH_RISK"?"badge-high-risk":c==="MODERATE"?"badge-moderate":"badge-stable";
    return `<span class="badge ${cls}">${clusterLabel(c)}</span>`;
}
function recPill(r){
    const cls = r==="Inspect"?"pill-inspect":r==="Adjust"?"pill-adjust":"pill-shutdown";
    return `<span class="pill ${cls}">${r}</span>`;
}
function statusBadge(s){
    const map={
        PENDING:  {cls:"status-pending",  dot:"#FBBF24"},
        APPROVED: {cls:"status-approved", dot:"#1D9E75"},
        REJECTED: {cls:"status-rejected", dot:"#DC2626"},
        ESCALATED:{cls:"status-escalated",dot:"#7B72E8"},
    };
    const m=map[s]||map.PENDING;
    const pulse = s==="PENDING"?" pulse-dot":"";
    return `<span class="status-badge ${m.cls}"><span class="status-dot${pulse}" style="background:${m.dot}"></span>${s}</span>`;
}

function arcGaugeSVG(value, size=96){
    const r=(size-14)/2, cx=size/2, cy=size/2;
    const toRad=deg=>(deg-90)*(Math.PI/180);
    const pt=deg=>({x:cx+r*Math.cos(toRad(deg)),y:cy+r*Math.sin(toRad(deg))});
    const arc=(s,e)=>{
        const sp=pt(s),ep=pt(e);
        const sw=((e-s)+360)%360;
        return `M${sp.x.toFixed(2)} ${sp.y.toFixed(2)} A${r} ${r} 0 ${sw>180?1:0} 1 ${ep.x.toFixed(2)} ${ep.y.toFixed(2)}`;
    };
    const START=-135, TOTAL=270;
    const fillEnd=START+value*TOTAL;
    const color=value>=0.85?"#DC2626":value>=0.65?"#F97316":"#1D9E75";
    const pct=Math.round(value*100);
    const tip=pt(fillEnd);
    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <path d="${arc(START,START+TOTAL)}" fill="none" stroke="#1F2A44" stroke-width="7" stroke-linecap="round"/>
        ${value>0.005?`<path d="${arc(START,fillEnd)}" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round"/>`:''}
        ${value>0.005?`<circle cx="${tip.x.toFixed(2)}" cy="${tip.y.toFixed(2)}" r="4" fill="${color}" style="filter:drop-shadow(0 0 4px ${color})"/>`:''}
        <text x="${cx}" y="${cy+2}" text-anchor="middle" font-size="18" font-weight="700" fill="white" font-family="monospace">${pct}</text>
        <text x="${cx}" y="${cy+14}" text-anchor="middle" font-size="8" fill="#64748B" font-family="monospace" letter-spacing="1">P(LPO)%</text>
    </svg>`;
}

function sparklineSVG(data, color, W=80, H=24){
    const mn=Math.min(...data), mx=Math.max(...data), rng=mx-mn||0.01;
    const pts=data.map((v,i)=>`${((i/(data.length-1))*W).toFixed(1)},${(H-((v-mn)/rng)*H).toFixed(1)}`).join(" ");
    return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
}

/* ── Sidebar ── */
function initSidebar(activePage){
    const collapsed = localStorage.getItem('ws-sidebar-collapsed')==='true';
    const sidebar = document.getElementById('sidebar');
    if(!sidebar) return;
    if(collapsed) sidebar.classList.add('collapsed');

    const pages=[
        {href:'index.html',  icon:'dashboard',  label:'Dashboard', desc:'Command Center'},
        {href:'wells.html',  icon:'droplets',   label:'Wells',     desc:'Fleet View'},
        {href:'tickets.html',icon:'ticket',     label:'Tickets',   desc:'HITL Queue'},
        {href:'analytics.html',icon:'linechart',label:'Analytics', desc:'Model Insights'},
    ];
    const navHTML = pages.map(p=>{
        const isActive = p.href===activePage||p.href===activePage+'.html';
        return `<a href="${p.href}" class="nav-link${isActive?' active':''}">
            ${ICONS[p.icon]}
            <div class="nav-link-text">
                <div class="label">${p.label}</div>
                <div class="desc">${p.desc}</div>
            </div>
            ${isActive?'<div class="nav-active-bar"></div>':''}
        </a>`;
    }).join('');

    sidebar.innerHTML = `
        <div class="sidebar-logo">
            <div class="logo-icon">${ICONS.activity}<span class="logo-dot pulse-dot"></span></div>
            <div class="logo-text">
                <div class="name">WELL<span>SENSE</span></div>
                <div class="sub">EADP · v1.1</div>
            </div>
        </div>
        <nav class="sidebar-nav">${navHTML}</nav>
        <div class="sidebar-footer">
            <div class="team-card">
                <div class="label">Team</div>
                <div class="name">AURORA VETERAN</div>
                <div class="university">UPN "Veteran" Jawa Timur</div>
                <div class="meta">
                    <span>Mahakam Block · PHM</span>
                    <span class="live">● LIVE</span>
                </div>
            </div>
        </div>
        <button class="sidebar-toggle" id="sidebarToggle" aria-label="Toggle sidebar">
            <span class="icon-chev-left">${ICONS.chevleft}</span>
            <span class="icon-chev-right" style="display:none">${ICONS.chevright}</span>
        </button>
    `;

    function updateToggleIcons(){
        const cl = sidebar.classList.contains('collapsed');
        sidebar.querySelector('.icon-chev-left').style.display  = cl?'none':'';
        sidebar.querySelector('.icon-chev-right').style.display = cl?'':'none';
    }
    updateToggleIcons();

    document.getElementById('sidebarToggle').addEventListener('click',()=>{
        sidebar.classList.toggle('collapsed');
        const isNowCollapsed = sidebar.classList.contains('collapsed');
        localStorage.setItem('ws-sidebar-collapsed', isNowCollapsed);
        updateToggleIcons();
    });
}

/* ── Live clock WIT (UTC+9) ── */
function initClock(elId){
    const el=document.getElementById(elId);
    if(!el) return;
    const tick=()=>{
        const d=new Date();
        el.textContent=d.toLocaleString('en-GB',{timeZone:'Asia/Jayapura',hour12:false,year:'numeric',month:'short',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'})+' WIT';
    };
    tick(); setInterval(tick,1000);
}

/* ── Chart.js defaults ── */
function wsChartDefaults(){
    if(typeof Chart === 'undefined') return;
    Chart.defaults.color='#64748B';
    Chart.defaults.borderColor='#1F2A44';
    Chart.defaults.font.family='ui-sans-serif,system-ui,sans-serif';
}

const CHART_TOOLTIP = {
    backgroundColor:'#0A0F1E',
    borderColor:'#1F2A44',
    borderWidth:1,
    titleColor:'#94A3B8',
    bodyColor:'#E2E8F0',
    padding:10,
    cornerRadius:8,
};
const CHART_GRID = { color:'#1F2A44', drawBorder:false };
