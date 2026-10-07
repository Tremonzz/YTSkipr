import * as React from "react";
import { SponsorTime } from "../types";
import Utils from "../utils";

const utils = new Utils();

export interface MiniDashboardProps {
    totalMinutesSaved: number;
    totalSkips: number;
    segments: SponsorTime[];
}

function formatTotalTime(minutes: number): { value: string; unit: string } {
    if (!minutes || minutes <= 0) {
        return { value: "0", unit: "min" };
    }
    if (minutes < 60) {
        return { value: Math.round(minutes).toString(), unit: "min" };
    }
    const hours = Math.floor(minutes / 60);
    const remainingMins = Math.round(minutes % 60);
    if (remainingMins === 0) {
        return { value: `${hours}`, unit: "h" };
    }
    return { value: `${hours}h ${remainingMins}`, unit: "m" };
}

function formatVideoTime(seconds: number): string {
    if (!seconds || seconds <= 0) return "0s";
    if (seconds < 60) {
        return `${Math.round(seconds)}s`;
    }
    const mins = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    if (secs === 0) {
        return `${mins}m`;
    }
    return `${mins}m ${secs}s`;
}

export const MiniDashboardComponent: React.FC<MiniDashboardProps> = ({
    totalMinutesSaved,
    totalSkips,
    segments
}) => {
    const timeFormatted = formatTotalTime(totalMinutesSaved);

    // Calculate current video skipped duration
    const activeSegments = (segments || []).filter((s) => !s.hidden && s.segment);
    const ranges = activeSegments.map((s) => s.segment as [number, number]);
    const videoSecondsSaved = utils.getTimestampsDuration(ranges);
    const videoTimeFormatted = formatVideoTime(videoSecondsSaved);
    const segmentCount = activeSegments.length;

    return (
        <div className="sb-mini-dashboard-card" style={{
            width: "100%",
            boxSizing: "border-box",
            borderRadius: "12px",
            padding: "13px 15px",
            marginBottom: "16px",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
            fontFamily: '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            color: "#f1f1f1",
            userSelect: "none"
        }}>
            {/* Header: Title */}
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "8px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                marginBottom: "10px"
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <svg width="18" height="13" viewBox="0 0 120 84" fill="none" style={{ display: "block" }}>
                        <defs>
                            <linearGradient id="sbDashLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FF1A40" />
                                <stop offset="50%" stopColor="#E11D48" />
                                <stop offset="100%" stopColor="#9F1239" />
                            </linearGradient>
                        </defs>
                        <rect x="6" y="6" width="108" height="72" rx="24" fill="url(#sbDashLogoGrad)" />
                        <path d="M37 29 C35.5 28 33 29.2 33 31.2 L33 52.8 C33 54.8 35.5 56 37 55 L53 44.2 C54.5 43.2 54.5 40.8 53 39.8 Z" fill="#ffffff" />
                        <path d="M57 29 C55.5 28 53 29.2 53 31.2 L53 52.8 C53 54.8 55.5 56 57 55 L73 44.2 C74.5 43.2 74.5 40.8 73 39.8 Z" fill="#ffffff" />
                    </svg>
                    <span style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        color: "rgba(255, 255, 255, 0.9)"
                    }}>
                        Statistiche YTSkipr
                    </span>
                </div>
                <span style={{
                    fontSize: "10px",
                    fontWeight: 500,
                    color: "rgba(255, 255, 255, 0.4)"
                }}>
                    Sincronizzato
                </span>
            </div>

            {/* 2 KPI Metrics */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px"
            }}>
                {/* Tempo Risparmiato */}
                <div style={{
                    background: "rgba(0, 0, 0, 0.35)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "10px",
                    padding: "10px 8px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        fontSize: "21px",
                        fontWeight: 800,
                        color: "#ffffff",
                        lineHeight: "1.1",
                        letterSpacing: "-0.5px"
                    }}>
                        {timeFormatted.value}
                        <span style={{
                            fontSize: "12px",
                            fontWeight: 400,
                            color: "rgba(255, 255, 255, 0.5)",
                            marginLeft: "3px"
                        }}>
                            {timeFormatted.unit}
                        </span>
                    </div>
                    <div style={{
                        fontSize: "9px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        color: "rgba(255, 255, 255, 0.5)",
                        marginTop: "4px"
                    }}>
                        Tempo Risparmiato
                    </div>
                </div>

                {/* Sponsor Saltati */}
                <div style={{
                    background: "rgba(0, 0, 0, 0.35)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "10px",
                    padding: "10px 8px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        fontSize: "21px",
                        fontWeight: 800,
                        color: "#ffffff",
                        lineHeight: "1.1",
                        letterSpacing: "-0.5px"
                    }}>
                        {totalSkips || 0}
                    </div>
                    <div style={{
                        fontSize: "9px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        color: "rgba(255, 255, 255, 0.5)",
                        marginTop: "4px"
                    }}>
                        Sponsor Saltati
                    </div>
                </div>
            </div>

            {/* Current Video Info Summary */}
            <div style={{
                background: "rgba(0, 0, 0, 0.25)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "10px",
                padding: "8px 12px",
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "11px"
            }}>
                <span style={{ color: "rgba(255, 255, 255, 0.6)", fontWeight: 500 }}>
                    In questo video:
                </span>
                {segmentCount > 0 ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <span style={{ color: "#34d399", fontWeight: 600 }}>
                            {segmentCount} {segmentCount === 1 ? "segmento" : "segmenti"}
                        </span>
                        <span style={{
                            display: "inline-block",
                            width: "3px",
                            height: "3px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(255, 255, 255, 0.4)",
                            margin: "0 6px"
                        }} />
                        <span style={{ color: "rgba(255, 255, 255, 0.9)", fontWeight: 500 }}>
                            {videoTimeFormatted} risparmiati
                        </span>
                    </div>
                ) : (
                    <span style={{ color: "rgba(255, 255, 255, 0.45)" }}>
                        Nessun segmento rilevato
                    </span>
                )}
            </div>
        </div>
    );
};

export default MiniDashboardComponent;
