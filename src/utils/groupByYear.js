export default function groupByYear(data) {
  const result = {};
  data?.forEach((item) => {
    const year = parseInt(item.dt.slice(0, 4));
    result[year] = (result[year] || 0) + item.value;
  });
  return result;
}
