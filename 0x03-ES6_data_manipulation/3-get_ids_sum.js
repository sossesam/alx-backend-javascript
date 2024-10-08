export default function getStudentIdsSum(getListStudents) {
  const studentId = getListStudents.map((student) => student.id);

  return studentId.reduce((total, num) => total + num, 0);
}
