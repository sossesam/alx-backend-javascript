export default class HolbertonCourse {
  /* eslint-disable-line no-underscore-dangle */
  constructor(name, length, student) {
    if (name.constructor === String) {
      this._name = name; // eslint-disable-line no-underscore-dangle
    } else {
      throw TypeError('name must be a string');
    }

    if (length.constructor === Number) {
      this._lenght = length; // eslint-disable-line no-underscore-dangle
    } else {
      throw TypeError('length must be a Number');
    }

    if (student.constructor === Array) {
      this._student = student; // eslint-disable-line no-underscore-dangle
    } else {
      throw TypeError('student must be an Array');
    }
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
    if (name.constructor === String) {
      this._name = name; // eslint-disable-line no-underscore-dangle
    } else {
      throw TypeError('name must be a string');
    }
  }

  set length(length) {
    if (length.constructor === Number) {
      this._lenght = length; // eslint-disable-line no-underscore-dangle
    } else {
      throw TypeError('length must be a Number');
    }
  }

  set student(student) {
    if (student.constructor === Array) {
      this._student = student; // eslint-disable-line no-underscore-dangle
    } else {
      throw TypeError('student must be an Array');
    }
  }
}
