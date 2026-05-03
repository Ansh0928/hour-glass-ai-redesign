import { Instrument_Serif, DM_Mono } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${instrumentSerif.variable} ${dmMono.variable}`}>
      <style>{`
        /* Dark card bodies */
        [aria-hidden="true"] > div:last-child {
          background: rgba(255,255,255,0.06) !important;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.07) !important;
        }
        /* White placeholder art on dark cards */
        .bg-foreground\\/5  { background-color: rgba(255,255,255,0.05) !important; }
        .bg-foreground\\/10 { background-color: rgba(255,255,255,0.10) !important; }
        .bg-foreground\\/15 { background-color: rgba(255,255,255,0.15) !important; }
        .bg-foreground\\/20 { background-color: rgba(255,255,255,0.20) !important; }
        .text-foreground\\/30 { color: rgba(255,255,255,0.30) !important; }
        .text-foreground\\/40 { color: rgba(255,255,255,0.40) !important; }
        .ring-border { --tw-ring-color: transparent !important; }
      `}</style>
      {children}
    </div>
  );
}
