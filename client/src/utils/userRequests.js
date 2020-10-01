const {default: validate} = require('validator')
const baseURL = 'http://localhost:4000';
const isEmpty = require('./isEmpty');

module.exports = {
  login: {
    endpoint: baseURL+'/login',
    method: 'PUT',
    validation: (data) => {
          const failedValues = [];
          for (const key in data) {
          const val = data[key].trim();
          if (!isEmpty(val)) {
            switch (key) {
              case 'credential':
                  if ( !validate.isEmail(val) ) {
                    const username = val;
                    if ( !validate.isAscii(username) ) failedValues.push({ key: 'credential', error: 'Username Using Invalid Characters'})
                    if ( username.length < 3 ) failedValues.push({ key: 'credential', error: 'Username Needs To Be At Least 3 Characters'})
                    if ( !username.length > 21 ) failedValues.push({ key: 'credential', error: 'Username Needs To Be Shorter Than 21 Characters'})
                  } else {
                    const email = val;
                    if ( !validate.isEmail(email)) failedValues.push({key: 'credential', error: 'Email Invalid'})
                    if ( email.length < 7 ) failedValues.push({key: 'credential', error: 'Email Needs To Be At Least 7 Characters'})
                    if ( email.length > 255 ) failedValues.push({key: 'credential', error: 'Email Needs To Be Shorter Than 256 Characters'})
                    if ( !validate.isAscii(email)) failedValues.push({key: 'credential', error: 'Email Is Using Invalid Characters'})      
                  }
                break;
              case 'password':
                const password = val;
                    if ( password.length < 7 ) failedValues.push({key: 'password', error: 'Password Needs To Be At Least 7 Characters'})
                    if ( password.length > 1000 ) failedValues.push({key: 'password', error: 'Password Needs To Be Shorter Than 1000 Characters'})
                break;  
              default:       
            }
          } else {
            failedValues.push({key: key, error: `${key} Is Required`})
          }
        }
        if (failedValues.length !== 0) {
          const errorsObj = {};
          //itterate through errors to produce error strings
          failedValues.forEach( err => {
            if (errorsObj.hasOwnProperty(err.key)) {
              errorsObj[err.key] = `${errorsObj[err.key]} : ${err.error}` 
            } else {
              errorsObj[err.key] = err.error
            }
          });
          return errorsObj
        } else {
          return false
        }
    }
  },
  register: {
    endpoint: baseURL+'/register',
    method: 'POST ',
    validation: (data) => {
          const failedValues = [];
          for (const key in data) {
          const val = data[key].trim();
          if (!isEmpty(val)) {
            switch (key) {
              case 'email':
                const email = val;
                  if ( !validate.isEmail(email)) failedValues.push({key: 'email', error: 'Email Invalid'})
                  if ( email.length < 7 ) failedValues.push({key: 'email', error: 'Email Needs To Be At Least 7 Characters'})
                  if ( email.length > 255 ) failedValues.push({key: 'email', error: 'Email Needs To Be Shorter Than 256 Characters'})
                  if ( !validate.isAscii(email)) failedValues.push({key: 'email', error: 'Email Is Using Invalid Characters'})        
                break;
              case 'username':
                  const username = val;
                  if ( !validate.isAscii(username) ) failedValues.push({ key: 'username', error: 'Username Using Invalid Characters'})
                  if ( username.length < 3 ) failedValues.push({ key: 'username', error: 'Username Needs To Be At Least 3 Characters'})
                  if ( !username.length > 21 ) failedValues.push({ key: 'username', error: 'Username Needs To Be Shorter Than 21 Characters'})                
                break;
              case 'password':
                const password = val;
                  if ( password.length < 7 ) failedValues.push({key: 'password', error: 'Password Needs To Be At Least 7 Characters'})
                  if ( password.length > 1000 ) failedValues.push({key: 'password', error: 'Password Needs To Be Shorter Than 1000 Characters'})
                break;  
              default:       
            }
          } else {
            failedValues.push({key: key, error: `${key} Is Required`})
          }
        }
        if (failedValues.length !== 0) {
          const errorsObj = {};
          //itterate through errors to produce error strings
          failedValues.forEach( err => {
            if (errorsObj.hasOwnProperty(err.key)) {
              errorsObj[err.key] = `${errorsObj[err.key]} : ${err.error}` 
            } else {
              errorsObj[err.key] = err.error
            }
          });
          return errorsObj
        } else {
          return false
        }
    }
  }
}