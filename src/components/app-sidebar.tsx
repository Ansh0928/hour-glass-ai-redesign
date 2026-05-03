"use client";

import { createContext, useContext, useState } from "react";
import Link from "next/link";
import { ExternalLink, X } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import {
  InfoCard,
  InfoCardContent,
  InfoCardTitle,
  InfoCardDescription,
  InfoCardMedia,
  InfoCardFooter,
  InfoCardDismiss,
  InfoCardAction,
} from "@/components/ui/info-card";

/* ─── Context so any client component can open the sidebar ─── */
const SidebarCtx = createContext<{ open: () => void }>({ open: () => {} });
export const useSidebarOpen = () => useContext(SidebarCtx);

function AIPodCard() {
  return (
    <InfoCard storageKey="ai-pod-promo" dismissType="forever">
      <InfoCardContent>
        <InfoCardTitle>AI Pod</InfoCardTitle>
        <InfoCardDescription>
          Go from &ldquo;I should learn AI&rdquo; to shipping with Claude in 4
          weeks.
        </InfoCardDescription>
        <InfoCardMedia
          media={[
            {
              type: "image",
              src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
              alt: "AI Pod cohort",
            },
          ]}
          shrinkHeight={80}
          expandHeight={140}
        />
        <div className="mt-2 flex flex-col gap-1">
          {[
            "Matched pods of 4–5 builders",
            "Community learning via Slack",
            "Live Friday calls every week",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-1.5">
              <span className="text-primary font-bold">✓</span>
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
        <InfoCardFooter>
          <InfoCardDismiss className="flex items-center gap-1 hover:text-foreground transition-colors">
            <X size={10} />
            Dismiss
          </InfoCardDismiss>
          <InfoCardAction>
            <Link
              href="#"
              className="flex items-center gap-1 underline text-primary font-medium hover:text-primary/80"
            >
              Enrol — $1,499 AUD <ExternalLink size={10} />
            </Link>
          </InfoCardAction>
        </InfoCardFooter>
      </InfoCardContent>
    </InfoCard>
  );
}

export function AppSidebar({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarCtx.Provider value={{ open: () => setIsOpen(true) }}>
      {/* Sheet — pure overlay, zero impact on page layout */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="left"
          className="w-72 p-0 flex flex-col bg-sidebar border-sidebar-border"
        >
          <div className="p-5 border-b border-sidebar-border">
            <Logo color="#2b390a" size={20} />
          </div>
          <div className="p-3">
            <AIPodCard />
          </div>
        </SheetContent>
      </Sheet>

      {/* Children — completely untouched */}
      {children}
    </SidebarCtx.Provider>
  );
}
