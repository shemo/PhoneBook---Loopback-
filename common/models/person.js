'use strict';

module.exports = function(Person) {
  Person.validatesPresenceOf('name', 'phone');
  Person.validatesLengthOf('phone', {
    min: 11,
    max: 11,
    message: {min: 'Please Enter A Valid Phone Number'},
  });
  Person.validatesLengthOf('name', {
    min: 3,
    message: {min: 'phone is too short'},
  });
  Person.validatesUniquenessOf('phone', {message: 'Phone Number is unique'});

  // Person.isValid(function (valid) {
  //   if (!valid) {
  //     Person.errors // hash of errors {attr: [errmessage, errmessage, ...], attr: ...}
  //   }
};
