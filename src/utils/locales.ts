export const formatNumber = new Intl.NumberFormat().format;

export const getCurrentTimeByTimezone = (offset: number) => {
  const currentTime = new Date();
  const offsetString = `${offset >= 0 ? '+' : '-'}${Math.abs(offset)}`;
  const adjustedTime = new Date(
    currentTime.getTime() + offset * 60 * 60 * 1000
  );

  const timeFormat = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const formattedTime = timeFormat.format(adjustedTime);

  return `${formattedTime} (GMT${offsetString})`;
};
