export const HOURGLASS_STATS = [
  { value: "34,127+", label: "Hours saved for clients" },
  { value: "$2.1M+", label: "Client revenue generated" },
  { value: "78,346+", label: "Workflows automated" },
  { value: "30 days", label: "From kickoff to first automation live" },
] as const;

export const TEAM_STATS = [
  { value: "5+ hrs/week", label: "saved per person, guaranteed" },
  { value: "30 days", label: "from kickoff to first automation" },
  {
    value: HOURGLASS_STATS[0].value,
    label: HOURGLASS_STATS[0].label.toLowerCase(),
  },
  {
    value: HOURGLASS_STATS[1].value,
    label: HOURGLASS_STATS[1].label.toLowerCase(),
  },
] as const;
