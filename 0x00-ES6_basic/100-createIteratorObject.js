export default function createIteratorObject(report) {
  const newValue = [];
  for (const values of Object.values(report)) {
    for (const item of Object.values(values)) {
      for (const emp of item) {
        newValue.push(emp);
      }
    }
  }
  return newValue;
}
