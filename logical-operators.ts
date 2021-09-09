export function conjoin(p: boolean, q: boolean) {
  return p && q;
}

export function disjoin(p: boolean, q: boolean) {
  return p || q;
}

export function exclusivelyDisjoin(p: boolean, q: boolean) {
  return p != q;
}

export function imply(p: boolean, q: boolean) {
  return !p || q;
}

export function equate(p: boolean, q: boolean) {
  return p === q;
}
