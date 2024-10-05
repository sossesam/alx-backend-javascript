export default class HolbertonCourse {
  constructor(name, length, students) {
    if (name.constructor !== String) {
      throw TypeError('Name must be a string');
    }

    if (length.constructor !== Number) {
      throw TypeError('Length must be a number');
    }

    if (students.constructor !== Array) {
      throw TypeError('Student must be an array');
    }

    this._name = name; // eslint-disable-line no-underscore-dangle
    this._lenght = length; // eslint-disable-line no-underscore-dangle
    this._students = students; // eslint-disable-line no-underscore-dangle
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  get length() {
    return this._lenght; // eslint-disable-line no-underscore-dangle
  }

  get students() {
    return this._students; // eslint-disable-line no-underscore-dangle
  }

  set name(name) {
    if (name.constructor !== String) {
      throw TypeError('Name must be a string');
    } else {
      this._name = name; // eslint-disable-line no-underscore-dangle
    }
  }

  set length(length) {
    if (length.constructor !== Number) {
      throw TypeError('Length must be a number');
    } else {
      this._lenght = length; // eslint-disable-line no-underscore-dangle
    }
  }

  set students(students) {
    if (students.constructor !== Array) {
      throw TypeError('Student must be an array');
    } else {
      this._students = students; // eslint-disable-line no-underscore-dangle
    }
  }
}
