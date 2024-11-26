export default function orderByProps(obj, borderOfProperties) {
  const sortedListOfProperties = [];

  for (const key of borderOfProperties) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      sortedListOfProperties.push({key: key, value: obj[key]});
    }
  }

  const sortedObj = Object.fromEntries(Object
    .entries(obj)
    .filter(([key]) => !borderOfProperties.includes(key))
    .sort());

  for (const key in sortedObj) {
    sortedListOfProperties.push({key: key, value: obj[key]});
  }

  return sortedListOfProperties;
}