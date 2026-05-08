import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "KAFRA SIGNAL | Profitable Discipline Starts Here";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "radial-gradient(circle at 20% 0%, #1e3a8a 0%, #0b1225 44%, #020617 100%)",
          color: "#e2e8f0",
          fontFamily: "JetBrains Mono, ui-monospace, Menlo, Monaco, Consolas, monospace",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 66, fontWeight: 800, letterSpacing: -2, color: "#3b82f6" }}>
              KAFRA <span style={{ color: "#f8fafc" }}>SIGNAL</span>
            </div>
            <div style={{ fontSize: 28, opacity: 0.86 }}>Profitable Discipline Starts Here</div>
          </div>
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: 24,
              border: "1px solid rgba(59,130,246,0.5)",
              background: "rgba(30,58,138,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "24px solid transparent",
                borderRight: "24px solid transparent",
                borderBottom: "38px solid #f8fafc",
                transform: "translateY(-4px)",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            alignItems: "center",
            fontSize: 24,
            color: "#93c5fd",
          }}
        >
          <div style={{ padding: "10px 16px", borderRadius: 999, border: "1px solid rgba(59,130,246,0.5)" }}>
            XAUUSD
          </div>
          <div style={{ padding: "10px 16px", borderRadius: 999, border: "1px solid rgba(16,185,129,0.55)", color: "#34d399" }}>
            Realtime Signals
          </div>
          <div style={{ padding: "10px 16px", borderRadius: 999, border: "1px solid rgba(148,163,184,0.45)", color: "#cbd5e1" }}>
            Tactical Risk Planner
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}


