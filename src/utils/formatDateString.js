export default function formatDateString(data) {
  let month = (parseInt(data.$M) + 1).toString();
  let day = data.$D.toString();
  const year = data.$y;

  if (month.length !== 2) {
    month = `0${month}`;
  }
  if (day.length !== 2) {
    day = `0${day}`;
  }

  return `${year}${month}${day}`;
}
