export default function groupByCategory(data) {
  const result = {};
  data?.forEach((item) => {
    const category = item.txt;
    result[category] = (result[category] || 0) + item.value;
  });

  return result;
}
