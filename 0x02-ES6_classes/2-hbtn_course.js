export default class HolbertonCourse {
  /* no-underscore-dangle */
  constructor(name, length, student) {
    if (name.constructor === String) {
      this._name = name;
    } else {
      throw TypeError('name must be a string');
    }

    if (length.constructor === Number) {
      this._lenght = length;
    } else {
      throw TypeError('length must be a Number');
    }

    if (student.constructor === Array) {
      this._student = student;
    } else {
      throw TypeError('student must be an Array');
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._lenght;
  }

  get student() {
    return this._student;
  }

  set name(name) {
    if (name.constructor === String) {
      this._name = name;
    } else {
      throw TypeError('name must be a string');
    }

    this._name = name;
  }

  set length(length) {
    if (length.constructor === Number) {
      this._lenght = length;
    } else {
      throw TypeError('length must be a Number');
    }
    this._lenght = length;
  }

  set student(student) {
    if (student.constructor === Array) {
      this._student = student;
    } else {
      throw TypeError('student must be an Array');
    }

    this._student = student;
  }
}
