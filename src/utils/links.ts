// Normalize a user-typed URL into an href safe to use in <a>.
// Accepts both bare values ("linkedin.com/in/foo") and full URLs.
export function urlHref(value: string): string {
  const trimmed = value.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export function mailHref(email: string): string {
  return `mailto:${email.trim()}`;
}
