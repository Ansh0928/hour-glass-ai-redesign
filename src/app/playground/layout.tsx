export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        :root { --color-foreground: #0a0a0a; }
        .bg-foreground\\/5  { background-color: rgba(10,10,10,0.05) !important; }
        .bg-foreground\\/10 { background-color: rgba(10,10,10,0.10) !important; }
        .bg-foreground\\/15 { background-color: rgba(10,10,10,0.15) !important; }
        .bg-foreground\\/20 { background-color: rgba(10,10,10,0.20) !important; }
        .text-foreground\\/30 { color: rgba(10,10,10,0.30) !important; }
        .text-foreground\\/40 { color: rgba(10,10,10,0.40) !important; }
        .ring-border { --tw-ring-color: rgba(10,10,10,0.12) !important; }
      `}</style>
      {children}
    </>
  );
}
