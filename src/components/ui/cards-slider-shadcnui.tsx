"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { animate, motion, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

interface IndustryCard {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  owner: {
    name: string;
    avatar: string;
    business: string;
  };
  result: string;
}

const cards: IndustryCard[] = [
  {
    id: 1,
    title: "12 hours back every week",
    description:
      "Mitchell Plumbing runs Rex for invoicing and Chase for follow-ups. Every job invoiced within minutes. Every overdue chased automatically.",
    category: "Trades",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    owner: {
      name: "Tom Mitchell",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      business: "Mitchell Plumbing · Melbourne",
    },
    result: "12 hrs/wk saved",
  },
  {
    id: 2,
    title: "Every deadline. Every client.",
    description:
      "Tran & Co runs Aria on the inbox and Doc on every incoming contract. Nothing falls through the cracks. Nothing gets missed.",
    category: "Accounting",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    owner: {
      name: "James Tran",
      avatar: "https://randomuser.me/api/portraits/men/51.jpg",
      business: "Tran & Co · Sydney",
    },
    result: "8 days to ROI",
  },
  {
    id: 3,
    title: "Bookings run themselves",
    description:
      "Cal handles every appointment request, sends confirmations, and reschedules no-shows. Chen Physio books 40% more appointments with the same staff.",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    owner: {
      name: "Amy Chen",
      avatar: "https://randomuser.me/api/portraits/women/53.jpg",
      business: "Chen Physio · Melbourne",
    },
    result: "40% more bookings",
  },
  {
    id: 4,
    title: "Every enquiry answered in 2 hours",
    description:
      "Aria replies to every legal enquiry within two hours. Sharma Legal signs 30% more new clients without a single extra staff member.",
    category: "Legal",
    image:
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&q=80",
    owner: {
      name: "Priya Sharma",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      business: "Sharma Legal · Brisbane",
    },
    result: "+30% new clients",
  },
  {
    id: 5,
    title: "Proposals out before competitors quote",
    description:
      "Quinn turns scope requests into professional proposals in under 10 minutes. Bell Landscaping wins more jobs simply by being first.",
    category: "Landscaping",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    owner: {
      name: "Marcus Bell",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      business: "Bell Landscaping · Adelaide",
    },
    result: "10 min proposals",
  },
];

export function CardsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      widthRef.current =
        containerRef.current.scrollWidth - containerRef.current.offsetWidth;
    }
  }, []);

  const scrollTo = (direction: "left" | "right") => {
    const currentX = x.get();
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const scrollAmount = containerWidth * 0.8;
    let newX =
      direction === "left" ? currentX + scrollAmount : currentX - scrollAmount;
    newX = Math.max(Math.min(newX, 0), -widthRef.current);
    animate(x, newX, { type: "spring", stiffness: 300, damping: 30, mass: 1 });
  };

  return (
    <div className="w-full relative group/slider">
      {/* Left arrow */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => scrollTo("left")}
          style={{
            height: 44,
            width: 44,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s, transform 0.15s",
            color: "#fff",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.14)";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.transform = "scale(1)";
          }}
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} />
        </button>
      </div>

      {/* Right arrow */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => scrollTo("right")}
          style={{
            height: 44,
            width: 44,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s, transform 0.15s",
            color: "#fff",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.14)";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            e.currentTarget.style.transform = "scale(1)";
          }}
          aria-label="Scroll right"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <motion.div
        ref={containerRef}
        className="cursor-grab active:cursor-grabbing overflow-hidden px-6 py-6 -mx-6 -my-6"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -widthRef.current }}
          dragElastic={0.1}
          style={{ x }}
          className="flex gap-5"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              style={{ minWidth: 300, maxWidth: 300, height: 400 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <Card
                style={{
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  backdropFilter: "blur(12px)",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                  cursor: "default",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="group hover:border-white/20 hover:shadow-2xl"
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    height: 160,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)",
                    }}
                  />
                  <div style={{ position: "absolute", top: 14, left: 14 }}>
                    <Badge variant="secondary">{card.category}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "20px 20px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#fff",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.3,
                        marginBottom: 8,
                      }}
                      className="transition-colors group-hover:text-green-400"
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 12,
                        color: "rgba(255,255,255,0.45)",
                        lineHeight: 1.65,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div
                    style={{
                      paddingTop: 16,
                      marginTop: 12,
                      borderTop: "1px solid rgba(255,255,255,0.07)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <Avatar
                        style={{
                          width: 28,
                          height: 28,
                          border: "1px solid rgba(255,255,255,0.12)",
                        }}
                      >
                        <AvatarImage
                          src={card.owner.avatar}
                          alt={card.owner.name}
                        />
                        <AvatarFallback
                          style={{
                            fontSize: 10,
                            background: "rgba(255,255,255,0.08)",
                            color: "#fff",
                          }}
                        >
                          {card.owner.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            color: "#fff",
                          }}
                        >
                          {card.owner.name}
                        </div>
                        <div
                          style={{
                            fontSize: 10,
                            color: "rgba(255,255,255,0.3)",
                          }}
                        >
                          {card.owner.business}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 11,
                        fontWeight: 600,
                        color: "var(--green-bright)",
                        background: "rgba(34,197,94,0.1)",
                        border: "1px solid rgba(34,197,94,0.18)",
                        borderRadius: 20,
                        padding: "3px 8px",
                      }}
                    >
                      <TrendingUp size={10} />
                      {card.result}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
