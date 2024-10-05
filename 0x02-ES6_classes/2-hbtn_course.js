export default class HolbertonCourse {
  constructor(name, length, student) {
    if (name.constructor !== String) {
     console.error(TypeError('Name must be a string'));
    }

    if (length.constructor !== Number) {
       console.error(TypeError('Length must be a number'));
    }

    if (student.constructor !== Array) {
        console.error(TypeError('Student must be an array'));
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
        console.error(TypeError('Name must be a string'));
    }
    this._name = name; // eslint-disable-line no-underscore-dangle
  }

  set length(length) {
    if (length.constructor !== Number) {
        console.error(TypeError('Length must be a number'));
    }  
    this._lenght = length; // eslint-disable-line no-underscore-dangle
  }

  set student(student) {
    if (student.constructor !== Array) {
      throw TypeError('Student must be an array');
    }
    this._student = student; // eslint-disable-line no-underscore-dangle
  }
}
