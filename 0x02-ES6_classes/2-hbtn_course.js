export default class HolbertonCourse {
  constructor(name, length, student) {
    if (name.constructor !== String) {
      throw TypeError('name must be a string');
    }

    if (length.constructor !== Number) {
      throw TypeError('length must be a Number');
    }

    if (student.constructor !== Array) {
      throw TypeError('student must be an Array');
    }

    this._name = name; // eslint-disable-line no-underscore-dangle
    this._lenght = length; // eslint-disable-line no-underscore-dangle
    this._student = student; // eslint-disable-line no-underscore-dangle
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  get length() {
    return this._lenght; // eslint-disable-line no-underscore-dangle
  }

  get student() {
    return this._student; // eslint-disable-line no-underscore-dangle
  }

  set name(name) {
    if (name.constructor !== String) {
      throw TypeError('name must be a string');
    }
    this._name = name; // eslint-disable-line no-underscore-dangle
  }

  set length(length) {
    if (length.constructor !== Number) {
      this._lenght = length; // eslint-disable-line no-underscore-dangle
    } else {
      throw TypeError('length must be a Number');
    }
  }

  set student(student) {
    if (student.constructor !== Array) {
      throw TypeError('student must be an Array');
    }
    this._student = student; // eslint-disable-line no-underscore-dangle
  }
}
