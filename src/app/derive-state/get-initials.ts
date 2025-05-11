export function getInitials(firstName: string, lastName: string): string {
  return (firstName[0] || "") + (lastName[0] || "");
}
