import { differenceInDays, parseISO } from "date-fns";

export function dateISOtoDDMMYYYY(iso) {
  const date = new Date(iso.slice(0, -1));
  return `${addZeroEsquerda(date.getDate())}/${addZeroEsquerda(
    date.getMonth() + 1
  )}/${date.getFullYear()}`;
}
