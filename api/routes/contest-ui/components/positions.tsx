/** @jsxImportSource frog/jsx */

import type {
  Contest,
  ContestChoiceOption,
  ContestPosition,
} from "@prisma/client/index.js";

type ContestWithOptions = Contest & {
  choiceOptions: (ContestChoiceOption & { positions: ContestPosition[] })[];
};

export const Positions = ({ contest }: { contest: ContestWithOptions }) => {
  return (
    <div
      style={{
        alignItems: "center",
        background: "linear-gradient(to right, #432889, #17101F)",
        backgroundSize: "100% 100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        height: "100%",
        justifyContent: "center",
        textAlign: "center",
        width: "100%",
        gap: 48,
        color: "white",
      }}
    >
      <div
        style={{
          fontSize: 48,
          fontStyle: "light",
          letterSpacing: "-0.025em",
          lineHeight: 1.4,
          marginTop: 30,
          padding: "0 120px",
          whiteSpace: "pre-wrap",
          display: "flex",
        }}
      >
        {contest.title}
      </div>
      <div style={{ fontSize: 48 }}>Positions:</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          fontSize: 36,
        }}
      >
        {contest.choiceOptions.map((option) => (
          <div style={{ display: "flex", gap: 64 }}>
            <div style={{ display: "flex" }}>{option.name}: </div>
            <div style={{ display: "flex" }}>
              {option.positions.length >= 1
                ? option.positions.length + " people"
                : "No one"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
