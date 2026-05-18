export const vars = {
  ur: "#f59e0b",
  urL: "#fcd34d",
  urD: "#b45309",
  urBg: "#fffbeb",
  urT: "rgba(245, 158, 11, 0.09)",
  // Accents
  kaz: "#10b981",
  kazBg: "#ecfdf5",
  cam: "#3b82f6",
  camBg: "#eff6ff",
  lt: "#8b5cf6",
  ltBg: "#ede9fe",
  spt: "#ec4899",
  sptBg: "#fdf2f8",
  rxr: "#ef5350",
  rxrBg: "#fee2e2",
  isr: "#22c55e",
  isrBg: "#f0fdf4",
  geo: "#f97316",
  // Base
  ink: "#1a1a2e",
  ink2: "#2d2d44",
  ink3: "#4a4a6a",
  muted: "#777799",
  bdr: "rgba(26, 26, 46, 0.09)",
  page: "#fffbeb",
  white: "#ffffff",
  grn: "#15803d",
  grnBg: "#f0fdf4",
  red: "#c0392b",
  redBg: "#fdecea",
  max: "1120px",
  r: "10px",
  rl: "14px",
};

export const reset = {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
};

export const html = {
  scrollBehavior: "smooth",
};

export const body = {
  fontFamily: "'DM Sans', sans-serif",
  background: vars.page,
  color: vars.ink,
  lineHeight: 1.6,
  WebkitFontSmoothing: "antialiased",
};

export const a = {
  color: vars.urD,
  textDecoration: "none",
};

export const aHover = {
  textDecoration: "underline",
};

export const nav = {
  background: vars.ink,
  height: "54px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 24px",
  position: "sticky",
  top: 0,
  zIndex: 200,
  borderBottom: `2px solid ${vars.ur}`,
};

export const navLogo = {
  fontSize: "15px",
  fontWeight: 700,
  color: vars.ur,
  textDecoration: "none",
  letterSpacing: "0.02em",
};

export const navLinks = {
  display: "flex",
  gap: "2px",
  listStyle: "none",
};

export const navLinksA = {
  fontSize: "12px",
  color: "rgba(255,255,255,0.4)",
  padding: "5px 10px",
  borderRadius: "6px",
  textDecoration: "none",
};

export const navLinksAActiveHover = {
  color: vars.urL,
  background: "rgba(245,158,11,0.12)",
};

export const bread = {
  background: vars.white,
  borderBottom: "1px solid rgba(26,26,46,0.07)",
  padding: "7px 24px",
  fontSize: "11px",
  color: vars.muted,
};

export const hero = {
  background: "linear-gradient(135deg, #1a1205 0%, #211605 40%, #1a1a2e 100%)",
  padding: "44px 0 40px",
  position: "relative",
  overflow: "hidden",
};

export const heroInner = {
  maxWidth: vars.max,
  margin: "0 auto",
  padding: "0 24px",
  position: "relative",
};

export const heroEyebrow = {
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.28)",
  marginBottom: "10px",
};

export const h1 = {
  fontSize: "clamp(26px, 3.8vw, 40px)",
  fontWeight: 800,
  color: "#fff",
  lineHeight: 1.1,
  marginBottom: "8px",
  letterSpacing: "-0.01em",
};

export const h1Em = {
  fontStyle: "italic",
  color: vars.urL,
};

export const heroSub = {
  fontSize: "13px",
  color: "rgba(255,255,255,0.42)",
  maxWidth: "640px",
  lineHeight: 1.8,
  marginBottom: "24px",
};

export const heroMeta = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  marginBottom: "22px",
};

export const heroMetaSpan = {
  fontSize: "11px",
  color: "rgba(255,255,255,0.28)",
};

export const heroMetaStrong = {
  color: "rgba(255,255,255,0.55)",
};

export const hstrip = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "1px",
  background: "rgba(255,255,255,0.05)",
  borderRadius: "12px",
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.07)",
};

export const hs = {
  background: "rgba(255,255,255,0.03)",
  padding: "12px 16px",
  position: "relative",
};

export const hsL = {
  fontSize: "9px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "rgba(255,255,255,0.22)",
  marginBottom: "4px",
};

export const hsV = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "17px",
  color: "#fff",
  lineHeight: 1,
  marginBottom: "3px",
};

export const hsS = {
  fontSize: "10px",
  color: "rgba(255,255,255,0.2)",
};

export const urC = { color: vars.urL };
export const grnC = { color: "#4caf50" };
export const redC = { color: "#ef5350" };
export const purC = { color: "#c084fc" };
export const ambC = { color: "#fcd34d" };

export const snav = {
  background: "#fff",
  borderBottom: `2px solid ${vars.urT}`,
  position: "sticky",
  top: "70px",
  zIndex: 100,
  overflowX: "scroll",
  WebkitOverflowScrolling: "touch",
  scrollbarWidth: "none",
};

export const snavInner = {
  maxWidth: "1600px",
  margin: "0 auto",
  display: "flex",
  gap: "20px",
  padding: "0 16px",
};

export const snavBtn = {
  fontSize: "11px",
  fontWeight: 600,
  color: vars.muted,
  padding: "10px 14px",
  whiteSpace: "nowrap",
  cursor: "pointer",
  border: "none",
  background: "none",
  borderBottom: "2px solid transparent",
  marginBottom: "-2px",
  transition: "color 0.15s, border-color 0.15s",
};

export const snavBtnActive = {
  ...snavBtn,
  color: vars.urD,
  borderBottomColor: vars.ur,
};

export const main = {
  maxWidth: "vars.max",
  margin: "0 auto",
  padding: "28px 24px 64px",
};

// export const section = {
//   maxWidth: "1600px",
//   marginTop: "32px",
//   marginBottom: "56px",
//   margin: " 0 auto",
//   marginLeft: "24px",
//   marginRight: "24px",
// };

export const section = "max-w-[1600px] mt-8 mb-14 mx-6 2xl:mx-auto";

export const secLabel = {
  fontSize: "9px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  color: vars.urD,
  marginBottom: "5px",
};

export const h2 = {
  fontSize: "clamp(20px, 2.5vw, 26px)",
  fontWeight: 800,
  color: vars.ink,
  lineHeight: 1.18,
  marginBottom: "8px",
  letterSpacing: "-0.01em",
};

export const h3 = {
  fontSize: "16px",
  fontWeight: 700,
  color: vars.ink2,
  margin: "20px 0 6px",
};

export const lede = {
  fontSize: "14px",
  color: vars.ink3,
  lineHeight: 1.78,
  marginBottom: "14px",
};

// ─── Chart Block ──────────────────────────────────────────────────────────────
export const cb = {
  background: "#fff",
  border: `1px solid ${vars.bdr}`,
  borderRadius: vars.rl,
  overflow: "hidden",
  marginBottom: "16px",
};

export const cbHdr = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: "14px 18px 10px",
  borderBottom: "1px solid rgba(245,158,11,0.1)",
  gap: "12px",
};

export const cbLabels = { flex: 1 };

export const cl = {
  fontSize: "9px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: vars.urD,
  marginBottom: "3px",
};

export const ct = {
  fontSize: "15px",
  fontWeight: 700,
  color: vars.ink,
  marginBottom: "3px",
  lineHeight: 1.3,
};

export const cm = {
  fontSize: "12px",
  color: vars.muted,
};

export const cbTabs = {
  display: "flex",
  gap: "3px",
  flexShrink: 0,
};

export const tab = {
  fontSize: "10px",
  fontWeight: 600,
  padding: "3px 9px",
  borderRadius: "5px",
  background: vars.urT,
  color: vars.urD,
  cursor: "pointer",
  border: "none",
};

export const tabOn = {
  ...tab,
  background: vars.ur,
  color: "#fff",
};

export const chartSvgWrap = {
  padding: "16px 18px 14px",
  minHeight: "220px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const statBand = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1px",
  background: vars.bdr,
  borderRadius: vars.r,
  overflow: "hidden",
  margin: "14px 0",
};

export const stat = {
  background: "#fff",
  padding: "14px 16px",
};

export const statVal = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "22px",
  fontWeight: 600,
  color: vars.ink,
  lineHeight: 1,
  marginBottom: "3px",
};

export const statLbl = {
  fontSize: "9px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: vars.muted,
  marginBottom: "2px",
};

export const statSub = {
  fontSize: "11px",
  color: vars.ink3,
};

// ─── Layouts ──────────────────────────────────────────────────────────────────
export const twoCol = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
};

export const threeCol = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "14px",
};

// ─── Grades Panel ─────────────────────────────────────────────────────────────
export const gradesPanel = {
  background: "#fff",
  border: `1px solid ${vars.bdr}`,
  borderRadius: vars.rl,
  overflow: "hidden",
  marginBottom: "16px",
};

export const gpHdr = {
  background: vars.urT,
  padding: "10px 18px",
  borderBottom: "1px solid rgba(245,158,11,0.12)",
};

export const gpRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  padding: "9px 18px",
  borderBottom: "1px solid rgba(26,26,46,0.04)",
};

export const gpLabel = {
  fontSize: "13px",
  color: vars.ink3,
};

export const gpPrice = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "16px",
  fontWeight: 600,
  color: vars.ink,
};

export const gpChg = {
  fontSize: "11px",
  fontWeight: 600,
  padding: "2px 7px",
  borderRadius: "10px",
};

export const up = { background: vars.grnBg, color: vars.grn };
export const dn = { background: vars.redBg, color: vars.red };
export const nt = { background: vars.urT, color: vars.urD };

// ─── Key Facts ────────────────────────────────────────────────────────────────
export const keyFacts = {
  background: vars.urT,
  border: "1px solid rgba(245,158,11,0.2)",
  borderRadius: vars.rl,
  padding: "16px 20px",
  margin: "16px 0",
};

export const kfLabel = {
  fontSize: "9px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: vars.urD,
  marginBottom: "10px",
};

export const kfGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
};

export const kf = {
  padding: "10px 14px",
  background: "#fff",
  borderRadius: "8px",
  border: "1px solid rgba(245,158,11,0.15)",
};

export const kfV = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "18px",
  fontWeight: 600,
  color: vars.urD,
  marginBottom: "2px",
};

export const kfL = {
  fontSize: "11px",
  color: vars.muted,
};

// ─── Tables ───────────────────────────────────────────────────────────────────
export const ctbl = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "12px",
  margin: "12px 0",
};

export const ctblTh = {
  fontSize: "9px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  color: vars.muted,
  padding: "8px 12px",
  textAlign: "left",
  borderBottom: `2px solid ${vars.bdr}`,
};

export const ctblTd = {
  padding: "9px 12px",
  borderBottom: "1px solid rgba(26,26,46,0.05)",
  verticalAlign: "top",
  color: vars.ink3,
  lineHeight: 1.5,
};

export const tblWrap = {
  overflowX: "auto",
  margin: "12px 0",
};

// ─── Callouts ─────────────────────────────────────────────────────────────────
const calloutBase = {
  borderRadius: vars.r,
  padding: "14px 18px",
  margin: "14px 0",
  display: "flex",
  gap: "12px",
  alignItems: "flex-start",
};

export const callout = calloutBase;

export const calloutUr = {
  ...calloutBase,
  background: vars.urT,
  border: "1px solid rgba(245,158,11,0.2)",
};

export const calloutRed = {
  ...calloutBase,
  background: vars.redBg,
  border: "1px solid rgba(192,57,43,0.18)",
};

export const calloutGrn = {
  ...calloutBase,
  background: vars.grnBg,
  border: "1px solid rgba(21,128,61,0.18)",
};

export const calloutGeo = {
  ...calloutBase,
  background: "#fff7ed",
  border: "1px solid rgba(249,115,22,0.2)",
};

export const calloutIcon = {
  fontSize: "16px",
  flexShrink: 0,
  marginTop: "1px",
};

export const calloutTitle = {
  fontSize: "12px",
  fontWeight: 700,
  color: vars.ink,
  marginBottom: "3px",
};

export const calloutText = {
  fontSize: "12px",
  color: vars.ink3,
  lineHeight: 1.65,
  margin: 0,
};

// ─── Fuel Cycle / Supply Chain ────────────────────────────────────────────────
export const fuelCycle = {
  display: "flex",
  alignItems: "center",
  gap: 0,
  margin: "16px 0",
  overflowX: "auto",
  WebkitOverflowScrolling: "touch",
  scrollbarWidth: "none",
};

export const fcStep = {
  background: "#fff",
  border: `1px solid ${vars.bdr}`,
  borderRadius: "8px",
  padding: "12px 14px",
  textAlign: "center",
  flexShrink: 0,
  minWidth: "100px",
};

export const fcStepUr = {
  ...fcStep,
  background: vars.urT,
  borderColor: "rgba(245,158,11,0.25)",
};

export const fcNum = {
  fontSize: "9px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: vars.urD,
  marginBottom: "4px",
};

export const fcName = {
  fontSize: "12px",
  fontWeight: 700,
  color: vars.ink,
  marginBottom: "2px",
};

export const fcSub = {
  fontSize: "10px",
  color: vars.muted,
};

export const fcArr = {
  fontSize: "18px",
  color: vars.bdr,
  flexShrink: 0,
  padding: "0 6px",
  fontWeight: 300,
  marginTop: "8px",
};

// ─── Timeline ─────────────────────────────────────────────────────────────────
export const timeline = {
  position: "relative",
  paddingLeft: "28px",
  margin: "16px 0",
};

export const tlItem = {
  position: "relative",
  marginBottom: "18px",
};

export const tlDot = {
  position: "absolute",
  left: "-23px",
  width: "11px",
  height: "11px",
  borderRadius: "50%",
  border: `2px solid ${vars.urD}`,
  background: "#fff",
};

export const tlDotKey = { ...tlDot, background: vars.ur, borderColor: vars.ur };
export const tlDotBad = {
  ...tlDot,
  background: vars.red,
  borderColor: vars.red,
};
export const tlDotNow = {
  ...tlDot,
  background: vars.urD,
  borderColor: vars.urD,
};

export const tlDate = {
  fontSize: "10px",
  fontWeight: 700,
  color: vars.urD,
  marginBottom: "2px",
};

export const tlTitle = {
  fontSize: "13px",
  fontWeight: 700,
  color: vars.ink,
  marginBottom: "2px",
};

export const tlText = {
  fontSize: "12px",
  color: vars.ink3,
  lineHeight: 1.6,
};

// ─── Signal Table ─────────────────────────────────────────────────────────────
export const sigTbl = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "12px",
};

export const sigTblTh = {
  fontSize: "9px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  color: vars.muted,
  padding: "8px 12px",
  textAlign: "left",
  borderBottom: `2px solid ${vars.bdr}`,
};

export const sigTblTd = {
  padding: "10px 12px",
  borderBottom: "1px solid rgba(26,26,46,0.05)",
  verticalAlign: "top",
  color: vars.ink3,
};

export const sigDot = {
  display: "inline-block",
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  marginRight: "5px",
  verticalAlign: "middle",
};

export const dotG = { ...sigDot, background: "#4caf50" };
export const dotR = { ...sigDot, background: "#ef5350" };
export const dotA = { ...sigDot, background: "#f59e0b" };

// ─── Forecast Cards ───────────────────────────────────────────────────────────
export const fcast = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
  margin: "14px 0",
};

const fcCardBase = {
  borderRadius: vars.rl,
  padding: "16px",
  border: `1px solid ${vars.bdr}`,
  background: "#fff",
};

export const fcCard = fcCardBase;
export const fcBull = { ...fcCardBase, borderTop: `3px solid ${vars.grn}` };
export const fcBase = { ...fcCardBase, borderTop: `3px solid ${vars.ur}` };
export const fcBear = { ...fcCardBase, borderTop: `3px solid ${vars.red}` };

export const fcTag = {
  fontSize: "10px",
  fontWeight: 700,
  marginBottom: "6px",
};

export const fcPrice = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "20px",
  color: vars.ink,
  marginBottom: "6px",
};

export const fcText = {
  fontSize: "11px",
  color: vars.ink3,
  lineHeight: 1.6,
};

export const fcNote = {
  fontSize: "10px",
  color: vars.muted,
  marginTop: "6px",
};

// ─── Pipeline / Project Cards ─────────────────────────────────────────────────
export const projGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
  margin: "14px 0",
};

export const projCard = {
  background: "#fff",
  border: `1px solid ${vars.bdr}`,
  borderRadius: "10px",
  padding: "14px 16px",
  borderLeft: `3px solid ${vars.urD}`,
};

export const projCardDev = {
  ...projCard,
  borderLeftColor: vars.cam,
};

export const projTag = {
  fontSize: "9px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: vars.urD,
  marginBottom: "4px",
};

export const projTagDev = { ...projTag, color: vars.cam };

export const projName = {
  fontSize: "13px",
  fontWeight: 700,
  color: vars.ink,
  marginBottom: "2px",
};

export const projSub = {
  fontSize: "11px",
  color: vars.muted,
  marginBottom: "6px",
};

export const projDetail = {
  fontSize: "11px",
  color: vars.ink3,
  lineHeight: 1.55,
};

// ─── Live Embed ───────────────────────────────────────────────────────────────
export const liveEmbed = {
  background: "#fff",
  border: `1px solid ${vars.bdr}`,
  borderRadius: vars.rl,
  overflow: "hidden",
  margin: "14px 0",
};

export const leHeader = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "9px 16px",
  background: vars.urT,
  borderBottom: "1px solid rgba(245,158,11,0.15)",
};

export const leLabel = {
  fontSize: "10px",
  fontWeight: 700,
  color: vars.urD,
  display: "flex",
  alignItems: "center",
  gap: "5px",
};

export const leLink = {
  fontSize: "11px",
  fontWeight: 600,
  color: vars.urD,
};

export const leGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1px",
  background: vars.bdr,
};

export const leStat = {
  background: "#fff",
  padding: "12px 14px",
  textAlign: "center",
};

export const leVal = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "18px",
  fontWeight: 500,
  color: vars.ink,
  marginBottom: "2px",
};

export const leLbl = {
  fontSize: "9px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  color: vars.muted,
};

export const leSrc = {
  fontSize: "10px",
  color: vars.muted,
  padding: "6px 16px",
  borderTop: `1px solid ${vars.bdr}`,
};

// ─── Producer Cards ───────────────────────────────────────────────────────────
export const producerGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
  margin: "14px 0",
};

export const prodCard = {
  background: "#fff",
  border: `1px solid ${vars.bdr}`,
  borderRadius: "12px",
  padding: "16px 18px",
};

export const prodTicker = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "11px",
  fontWeight: 600,
  color: vars.urD,
  marginBottom: "4px",
};

export const prodName = {
  fontSize: "15px",
  fontWeight: 700,
  color: vars.ink,
  marginBottom: "2px",
};

export const prodSub = {
  fontSize: "11px",
  color: vars.muted,
  marginBottom: "8px",
};

export const prodStats = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "6px",
  marginBottom: "8px",
};

export const prodStat = {
  background: vars.urT,
  borderRadius: "6px",
  padding: "6px 8px",
  textAlign: "center",
};

export const prodStatV = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "14px",
  fontWeight: 600,
  color: vars.urD,
};

export const prodStatL = {
  fontSize: "9px",
  color: vars.muted,
};

export const prodText = {
  fontSize: "11px",
  color: vars.ink3,
  lineHeight: 1.6,
};

// ─── Instruments ──────────────────────────────────────────────────────────────
export const instGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "12px",
  margin: "14px 0",
};

export const instCard = {
  background: "#fff",
  border: `1px solid ${vars.bdr}`,
  borderRadius: "10px",
  padding: "14px 16px",
};

export const instTicker = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "13px",
  fontWeight: 700,
  color: vars.urD,
  marginBottom: "3px",
};

export const instName = {
  fontSize: "12px",
  fontWeight: 700,
  color: vars.ink,
  marginBottom: "3px",
};

export const instType = {
  fontSize: "9px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: vars.muted,
  marginBottom: "6px",
};

export const instDetail = {
  fontSize: "11px",
  color: vars.ink3,
  lineHeight: 1.55,
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const faqWrap = {
  border: `1px solid ${vars.bdr}`,
  borderRadius: "12px",
  overflow: "hidden",
  background: "#fff",
  margin: "14px 0",
};

export const faqItem = {
  borderBottom: "1px solid rgba(26,26,46,0.05)",
};

export const faqBtn = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "13px 18px",
  background: "#fff",
  border: "none",
  cursor: "pointer",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "13px",
  fontWeight: 600,
  color: vars.ink,
  textAlign: "left",
  gap: "14px",
};

export const faqBtnActive = {
  ...faqBtn,
  background: vars.urT,
};

export const faqArr = {
  fontSize: "9px",
  color: vars.muted,
  flexShrink: 0,
  transition: "transform 0.2s",
};

export const faqBody = {
  display: "none",
  padding: "4px 18px 14px",
  background: vars.urT,
  fontSize: "13px",
  color: vars.ink3,
  lineHeight: 1.75,
};

// ─── Editorial ────────────────────────────────────────────────────────────────
export const editorial = {
  background: vars.urT,
  border: "1px solid rgba(245,158,11,0.2)",
  borderRadius: "14px",
  padding: "18px 22px",
  display: "flex",
  gap: "16px",
  alignItems: "flex-start",
  margin: "16px 0",
};

export const editorialIcon = {
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  background: vars.ink,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  fontSize: "18px",
};

// ─── Badges ───────────────────────────────────────────────────────────────────
const badgeBase = {
  display: "inline-block",
  fontSize: "9px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.07em",
  padding: "2px 7px",
  borderRadius: "10px",
};

export const badge = badgeBase;
export const badgeGrn = {
  ...badgeBase,
  background: vars.grnBg,
  color: vars.grn,
};
export const badgeRed = {
  ...badgeBase,
  background: vars.redBg,
  color: vars.red,
};
export const badgeUr = { ...badgeBase, background: vars.urT, color: vars.urD };
export const badgeKaz = {
  ...badgeBase,
  background: vars.kazBg,
  color: "#065f46",
};

// ─── Footer ───────────────────────────────────────────────────────────────────
export const footer = {
  background: vars.ink,
  padding: "28px",
  textAlign: "center",
  borderTop: `2px solid ${vars.urT}`,
};

export const footerLogo = {
  fontSize: "15px",
  fontWeight: 700,
  color: vars.ur,
  display: "block",
  marginBottom: "6px",
  textDecoration: "none",
};

export const footerLinks = {
  display: "flex",
  gap: "14px",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: "8px",
};

// ─── Back to Top ──────────────────────────────────────────────────────────────
export const btt = {
  position: "fixed",
  bottom: "22px",
  right: "22px",
  width: "38px",
  height: "38px",
  borderRadius: "50%",
  background: vars.urD,
  color: "#fff",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s",
  zIndex: 300,
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
};

export const bttShow = { ...btt, opacity: 1 };
