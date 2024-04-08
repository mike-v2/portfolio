export function lerp(start: number, end: number, t: number) {
  return start * (1 - t) + end * t;
}

export function inverseLerp(start: number, end: number, value: number) {
  return (value - start) / (end - start);
}

export function inverseLerpClamped(start: number, end: number, value: number) {
  const invLerp = (value - start) / (end - start);
  return Math.max(Math.min(invLerp, 1), 0);
}
