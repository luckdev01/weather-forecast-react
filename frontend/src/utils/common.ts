export const formatDateTime = (date?: string) =>
  (date ? new Date(date) : new Date()).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

export const getWeekday = (date: string) =>
  new Date(date).toLocaleString('en-US', {
    day: '2-digit',
    weekday: 'short',
  });

export const getYesterday = () => {
  let d = new Date();
  d.setDate(d.getDate() - 1);

  return new Date(d).toISOString().split('T')[0];
};

export const getToday = () => {
  return new Date().toISOString().split('T')[0];
};
