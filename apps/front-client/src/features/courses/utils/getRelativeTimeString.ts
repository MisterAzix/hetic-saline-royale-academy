const CUTOFFS = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity];

const UNITS: Intl.RelativeTimeFormatUnit[] = [
  'second',
  'minute',
  'hour',
  'day',
  'week',
  'month',
  'year',
];

const LANGUAGE = 'fr';

export function getRelativeTimeString(date: Date): string {
  const deltaSeconds = Math.round(
    (new Date(date).getTime() - Date.now()) / 1000
  );

  const unitIndex = CUTOFFS.findIndex(
    (cutoff) => cutoff > Math.abs(deltaSeconds)
  );

  const divisor = unitIndex ? CUTOFFS[unitIndex - 1] : 1;

  const formatter = new Intl.RelativeTimeFormat(LANGUAGE, { numeric: 'auto' });
  return formatter.format(Math.floor(deltaSeconds / divisor), UNITS[unitIndex]);
}
