// computed once per build. `phase` (0-1) is resolved against real elapsed
// time by a small runtime script, instead of baking in a random delay, so
// the twinkle looks continuous across page loads instead of restarting.
export const stars = Array.from({ length: 45 }, () => ({
  x: (Math.random() * 100).toFixed(1),
  y: (Math.random() * 100).toFixed(1),
  size: (Math.random() * 1.5 + 1).toFixed(1),
  duration: (Math.random() * 4 + 2).toFixed(1),
  phase: Math.random().toFixed(3),
  min: (Math.random() * 0.2 + 0.1).toFixed(2),
  max: (Math.random() * 0.4 + 0.6).toFixed(2),
}))
