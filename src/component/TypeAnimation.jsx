import { TypeAnimation as OriginalTypeAnimation } from "react-type-animation";

export function TypeAnimation({ sequence, speed, wrapper, repeat }) {
  return (
    <OriginalTypeAnimation
      sequence={sequence}
      speed={speed || 50}
      wrapper={wrapper || "span"}
      repeat={repeat ?? Infinity}
    />
  );
}
