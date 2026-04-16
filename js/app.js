/* ═══════════════════════════════════════════
   WELLSENSE — Shared Data & Components
   SKK Migas IOC Hackathon 2026 · Team AURORA VETERAN
   ═══════════════════════════════════════════ */

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
    mappin:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    gauge:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>`,
    thermometer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`,
    cpu:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
    database:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    check:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    xcircle:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    arrowupcircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="16 12 12 8 8 12"/><line x1="12" y1="16" x2="12" y2="8"/></svg>`,
    user:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    brain:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>`,
    trending:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
    shield:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    alertcircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    refresh:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
};

/* ── Data ── */
const WELLS = [
    { wellId:"BKP-A03", zone:"A", field:"Bekapai", cluster:"HIGH_RISK",  severity:"CRITICAL", pLPO:0.912, sensors:{whp:1842,wht:92.1,fthp:1218,choke:34,flow:842,annular:562,glInjRate:1.12,glInjPres:1378,mpRatio:2.41,waterCut:68.2}, trend:[0.41,0.48,0.57,0.69,0.78,0.87,0.91], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-B07", zone:"B", field:"Bekapai", cluster:"HIGH_RISK",  severity:"WARNING",  pLPO:0.742, sensors:{whp:1972,wht:88.5,fthp:1342,choke:42,flow:1024,annular:488,glInjRate:1.48,glInjPres:1298,mpRatio:1.92,waterCut:58.4}, trend:[0.32,0.38,0.44,0.52,0.61,0.68,0.74], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-C11", zone:"C", field:"Bekapai", cluster:"STABLE",     severity:"NORMAL",   pLPO:0.218, sensors:{whp:2184,wht:78.2,fthp:1612,choke:58,flow:1486,annular:332,glInjRate:2.48,glInjPres:1042,mpRatio:1.21,waterCut:28.6}, trend:[0.19,0.21,0.22,0.20,0.22,0.21,0.22], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-A01", zone:"A", field:"Bekapai", cluster:"MODERATE",   severity:"WARNING",  pLPO:0.687, sensors:{whp:2012,wht:84.8,fthp:1412,choke:48,flow:1182,annular:412,glInjRate:1.82,glInjPres:1184,mpRatio:1.68,waterCut:48.2}, trend:[0.42,0.48,0.54,0.58,0.62,0.66,0.69], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-A08", zone:"A", field:"Bekapai", cluster:"STABLE",     severity:"NORMAL",   pLPO:0.182, sensors:{whp:2248,wht:74.6,fthp:1688,choke:62,flow:1612,annular:298,glInjRate:2.72,glInjPres:982,mpRatio:0.98,waterCut:22.4},  trend:[0.14,0.16,0.18,0.17,0.19,0.18,0.18], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-B02", zone:"B", field:"Bekapai", cluster:"MODERATE",   severity:"NORMAL",   pLPO:0.412, sensors:{whp:2098,wht:82.1,fthp:1524,choke:54,flow:1322,annular:388,glInjRate:2.12,glInjPres:1128,mpRatio:1.42,waterCut:42.8}, trend:[0.31,0.34,0.36,0.38,0.39,0.40,0.41], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-B05", zone:"B", field:"Bekapai", cluster:"STABLE",     severity:"NORMAL",   pLPO:0.248, sensors:{whp:2218,wht:76.4,fthp:1648,choke:60,flow:1548,annular:312,glInjRate:2.58,glInjPres:1012,mpRatio:1.08,waterCut:26.2}, trend:[0.22,0.24,0.23,0.25,0.24,0.25,0.25], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-C04", zone:"C", field:"Bekapai", cluster:"HIGH_RISK",  severity:"CRITICAL", pLPO:0.881, sensors:{whp:1882,wht:91.4,fthp:1262,choke:36,flow:892,annular:548,glInjRate:1.22,glInjPres:1342,mpRatio:2.32,waterCut:66.8},  trend:[0.52,0.58,0.64,0.72,0.78,0.84,0.88], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-C09", zone:"C", field:"Bekapai", cluster:"MODERATE",   severity:"WARNING",  pLPO:0.704, sensors:{whp:2004,wht:85.8,fthp:1388,choke:46,flow:1098,annular:432,glInjRate:1.68,glInjPres:1218,mpRatio:1.82,waterCut:52.8}, trend:[0.44,0.52,0.58,0.62,0.66,0.68,0.70], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-D02", zone:"D", field:"Bekapai", cluster:"HIGH_RISK",  severity:"CRITICAL", pLPO:0.896, sensors:{whp:1858,wht:93.2,fthp:1232,choke:32,flow:862,annular:578,glInjRate:1.08,glInjPres:1388,mpRatio:2.48,waterCut:70.4},  trend:[0.48,0.56,0.64,0.72,0.80,0.86,0.90], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-D06", zone:"D", field:"Bekapai", cluster:"MODERATE",   severity:"NORMAL",   pLPO:0.382, sensors:{whp:2122,wht:80.6,fthp:1558,choke:52,flow:1388,annular:362,glInjRate:2.28,glInjPres:1084,mpRatio:1.32,waterCut:38.6}, trend:[0.28,0.32,0.34,0.36,0.37,0.38,0.38], lastUpdate:"2026-04-16 14:22 WIT" },
    { wellId:"BKP-D03", zone:"D", field:"Bekapai", cluster:"STABLE",     severity:"NORMAL",   pLPO:0.162, sensors:{whp:2282,wht:72.8,fthp:1714,choke:64,flow:1682,annular:272,glInjRate:2.88,glInjPres:962,mpRatio:0.88,waterCut:18.8},  trend:[0.14,0.15,0.16,0.15,0.17,0.16,0.16], lastUpdate:"2026-04-16 14:22 WIT" },
];

const TICKETS = [
    { ticketId:"a7f3d2c1-8e4b-4f91-9b2a-e3c8d7f4a1b9", wellId:"BKP-A03", zone:"A", severity:"CRITICAL", source:"RT_LSTM", pLPO:0.912, clusterLabel:"HIGH_RISK",
      topContributors:[{name:"WHP",value:1842,unit:"psi",deviation:-18.2,flag:"LOW"},{name:"GL Inj Rate",value:1.12,unit:"MMSCFD",deviation:-42.8,flag:"LOW"},{name:"Water Cut",value:68.2,unit:"%",deviation:22.4,flag:"HIGH"}],
      reasoning:"WHP declined 18.2% over the last 6 hours while GL injection rate fell 42.8% below baseline. Rising water cut (68.2%) combined with elevated WHT (92.1°C) is consistent with gas-lift inefficiency and potential tubing leak onset.",
      recommendation:"Shutdown", status:"ESCALATED",
      approvalChain:[{role:"Operator",name:"Budi Santoso",decision:"APPROVE",at:"2026-04-16 11:04 WIT"},{role:"Well Engineer",name:"Sari Wulandari",decision:"ESCALATE",at:"2026-04-16 11:38 WIT"},{role:"Production Engineer",name:"Ir. Bambang S.",decision:"PENDING"}],
      timestamp:"2026-04-16 10:58 WIT", cycleNumber:4 },
    { ticketId:"b3e8f1a4-2c7d-4e82-8f1b-d4c9e3a7b2f8", wellId:"BKP-C04", zone:"C", severity:"CRITICAL", source:"RT_LSTM", pLPO:0.881, clusterLabel:"HIGH_RISK",
      topContributors:[{name:"Water Cut",value:66.8,unit:"%",deviation:20.6,flag:"HIGH"},{name:"GL Inj Rate",value:1.22,unit:"MMSCFD",deviation:-38.4,flag:"LOW"},{name:"WHT",value:91.4,unit:"°C",deviation:14.8,flag:"HIGH"}],
      reasoning:"BKP-C04 exhibits a near-identical failure signature to BKP-A03: GL injection rate depressed while water cut and wellhead temperature rise in tandem. LSTM confidence interval is tight (±0.022), indicating a deterministic rather than stochastic anomaly.",
      recommendation:"Shutdown", status:"PENDING",
      approvalChain:[{role:"Operator",name:"Andi Pratama",decision:"PENDING"},{role:"Well Engineer",name:"Sari Wulandari",decision:"PENDING"},{role:"Production Engineer",name:"Ir. Bambang S.",decision:"PENDING"}],
      timestamp:"2026-04-16 11:22 WIT", cycleNumber:4 },
    { ticketId:"c4d9a2e8-7f1b-4c63-a3d2-9b8e4f1c7a3d", wellId:"BKP-D02", zone:"D", severity:"CRITICAL", source:"RT_LSTM", pLPO:0.896, clusterLabel:"HIGH_RISK",
      topContributors:[{name:"MP Ratio",value:2.48,unit:"",deviation:28.2,flag:"HIGH"},{name:"WHP",value:1858,unit:"psi",deviation:-16.4,flag:"LOW"},{name:"Water Cut",value:70.4,unit:"%",deviation:24.8,flag:"HIGH"}],
      reasoning:"Multiphase ratio anomaly is the primary LSTM trigger. At 2.48 the MP ratio is 28% above the stable operating envelope. Concurrent WHP decline and peak water cut (70.4%) suggest reservoir-side water breakthrough accelerated by choke restriction.",
      recommendation:"Inspect", status:"APPROVED",
      approvalChain:[{role:"Operator",name:"Andi Pratama",decision:"APPROVE",at:"2026-04-16 09:18 WIT"},{role:"Well Engineer",name:"Sari Wulandari",decision:"APPROVE",at:"2026-04-16 09:44 WIT"},{role:"Production Engineer",name:"Ir. Bambang S.",decision:"PENDING"}],
      timestamp:"2026-04-16 09:12 WIT", cycleNumber:4 },
    { ticketId:"f9b2c4e7-6d3a-4f84-a2b1-8e7c4f9d3a2b", wellId:"BKP-C09", zone:"C", severity:"WARNING",  source:"RT_LSTM", pLPO:0.704, clusterLabel:"MODERATE",
      topContributors:[{name:"MP Ratio",value:1.82,unit:"",deviation:22.1,flag:"HIGH"},{name:"WHP",value:2004,unit:"psi",deviation:-6.2,flag:"LOW"},{name:"Water Cut",value:52.8,unit:"%",deviation:14.4,flag:"HIGH"}],
      reasoning:"Multiphase flow regime has drifted toward slug pattern with rising water cut. LSTM attributes this primarily to reservoir-side ingress rather than surface equipment anomaly.",
      recommendation:"Adjust", status:"APPROVED",
      approvalChain:[{role:"Operator",name:"Dewi Kusuma",decision:"APPROVE",at:"2026-04-16 07:36 WIT"},{role:"Well Engineer",name:"Agus Nugroho",decision:"APPROVE",at:"2026-04-16 08:02 WIT"},{role:"Production Engineer",name:"Ir. Bambang S.",decision:"APPROVE",at:"2026-04-16 08:28 WIT"}],
      timestamp:"2026-04-16 07:28 WIT", cycleNumber:4 },
    { ticketId:"1a8d4e2f-7c9b-4a36-b5e8-3f2a9c7d4e1b", wellId:"BKP-B02", zone:"B", severity:"WARNING",  source:"BD_KMEANS", pLPO:0.612, clusterLabel:"MODERATE",
      topContributors:[{name:"GL Inj Pres",value:1128,unit:"psi",deviation:8.2,flag:"HIGH"},{name:"Choke",value:54,unit:"%",deviation:-6.4,flag:"LOW"},{name:"Annular",value:388,unit:"psi",deviation:12.6,flag:"HIGH"}],
      reasoning:"Nightly K-Means detected incremental drift toward Moderate cluster. Compressor-side pressure load is rising without matching flow gain — a known precursor of BKPAL compressor derating.",
      recommendation:"Inspect", status:"REJECTED",
      approvalChain:[{role:"Operator",name:"Rudi Hartono",decision:"APPROVE",at:"2026-04-16 06:15 WIT"},{role:"Well Engineer",name:"Sari Wulandari",decision:"REJECT",at:"2026-04-16 06:48 WIT"},{role:"Production Engineer",name:"—",decision:"PENDING"}],
      timestamp:"2026-04-16 06:08 WIT", cycleNumber:4 },
    { ticketId:"2c6b9f4a-8e1d-4b57-9c2f-6a8d4e2b1f9c", wellId:"BKP-D06", zone:"D", severity:"WARNING",  source:"RT_LSTM", pLPO:0.652, clusterLabel:"MODERATE",
      topContributors:[{name:"WHT",value:80.6,unit:"°C",deviation:6.8,flag:"HIGH"},{name:"Flow Rate",value:1388,unit:"bbl/day",deviation:-8.4,flag:"LOW"},{name:"Water Cut",value:38.6,unit:"%",deviation:10.2,flag:"HIGH"}],
      reasoning:"Thermal profile is elevating faster than the cycle average. Water cut creeping past the 38% threshold warrants a routine choke-rebalance within this cycle.",
      recommendation:"Adjust", status:"PENDING",
      approvalChain:[{role:"Operator",name:"Tomi Saputra",decision:"PENDING"},{role:"Well Engineer",name:"Agus Nugroho",decision:"PENDING"},{role:"Production Engineer",name:"—",decision:"PENDING"}],
      timestamp:"2026-04-16 05:42 WIT", cycleNumber:4 },
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

/* ── PLPO 24h data ── */
const PLPO_24H = Array.from({length:24},(_,i)=>({
    hour:`${String(i).padStart(2,'0')}:00`,
    a03: +Math.max(0.28,Math.min(0.94,0.32+i*0.026+Math.sin(i/2.4)*0.02)).toFixed(3),
    b07: +Math.max(0.24,Math.min(0.82,0.38+i*0.015+Math.cos(i/3.1)*0.03)).toFixed(3),
    c11: +Math.max(0.12,Math.min(0.30,0.20+Math.sin(i/4.0)*0.04)).toFixed(3),
}));

/* ── Heatmap data ── */
const HEATMAP_SENSORS = ["WHP","WHT","FTHP","Choke","Flow","Annular","GL Rate","GL Pres","MP Ratio","Water Cut"];
const HEATMAP_A03 = (() => {
    const rows = {};
    HEATMAP_SENSORS.forEach((s,si)=>{
        rows[s]=[];
        for(let h=0;h<24;h++){
            const base = Math.abs(Math.sin((si+h)/3.2))*0.4;
            const anomaly = h>14?(h-14)*0.06*(si%3===0?1.2:0.6):0;
            rows[s].push(+Math.min(1,base+anomaly).toFixed(3));
        }
    });
    return rows;
})();

/* ── Helper fns ── */
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

/* ── Arc gauge ── */
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

/* ── Sparkline SVG ── */
function sparklineSVG(data, color, W=80, H=24){
    const mn=Math.min(...data), mx=Math.max(...data), rng=mx-mn||0.01;
    const pts=data.map((v,i)=>`${((i/(data.length-1))*W).toFixed(1)},${(H-((v-mn)/rng)*H).toFixed(1)}`).join(" ");
    return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
}

/* ── Sidebar ── */
function initSidebar(activePage){
    const collapsed = localStorage.getItem('ws-sidebar-collapsed')==='true';
    const sidebar = document.getElementById('sidebar');
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
                <div class="sub">EADP · v1.0</div>
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
