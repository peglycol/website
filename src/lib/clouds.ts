// computed once per build. `phase` (0-1) is resolved against real elapsed
// time by a small runtime script, same reasoning as stars.ts.
export const clouds = Array.from({ length: 8 }, () => ({
  y: (Math.random() * 100).toFixed(1),
  width: (Math.random() * 10 + 8).toFixed(1),
  height: (Math.random() * 3 + 2).toFixed(1),
  opacity: (Math.random() * 0.3 + 0.4).toFixed(2),
  duration: (Math.random() * 60 + 60).toFixed(0),
  phase: Math.random().toFixed(3),
}))
