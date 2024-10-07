function mapid(obj) {
  return obj.id;
}

export default function getListStudentIds(getListStudents) {
  if (getListStudents.constructor !== Array) {
    return [];
  }

  return getListStudents.map(mapid);
}
