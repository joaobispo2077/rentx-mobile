export function formatDate(date: string | number | Date): string {
  const newDate = new Date(date).toISOString().replace('T', '-');

  const [year, month, day] = newDate.split('-');
  return `${day}/${month}/${year}`;
}
