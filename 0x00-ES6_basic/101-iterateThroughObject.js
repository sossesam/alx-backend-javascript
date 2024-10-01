export default function iterateThroughObject(reportWithIterator) {
  const newstring = [];
  for (const empName of reportWithIterator) {
    newstring.push(empName);
  }
  return (newstring.toString().replaceAll(',', '|'));
}
