const {default: axios} = require('axios');
const baseURL = 'http://localhost:4000';

module.exports = {
  loginReq: (form) => {

    const reqBody = {};

    for (const input of form) {
      
      const val = input.value;

      if (val !== '') {
        reqBody[input.name] = val
      }
    
    }

    //frontend validation needed:
    // [] make sure all feilds are present,
    if (Object.keys(reqBody).length != 2) {
      return alert('You forgot to fill something out')
    } 
    // [] lengths of inputs (match schema)

    const loginURL = `${baseURL}/user/login`; 

    axios.put(loginURL, reqBody)
    .then( res => {
      console.log(res);
    })
    .catch( err => {
      if (err) {
        console.log(err);
      }
    })

  },

  regReq: (form) => {

    const reqBody = {};

    for (const input of form) {
      
      const val = input.value.trim();

      if (val !== '') {
        reqBody[input.name] = val
      }
    
    }

    //frontend validation needed:
    // [*] make sure all feilds are present,
    if (Object.keys(reqBody).length != 4) {
      return alert('You forgot to fill something out')
    } 
    // [] lengths of inputs (match schema)
    //all validation from before, 
    // [*] plus make sure both password inputs match
    if (reqBody.password != reqBody.password2) {
      return alert('Passwords do not match')
    }

    const regURL = `${baseURL}/user/register`; 

    axios.post(regURL, reqBody)
    .then( res => {
      console.log(res);
    })
    .catch( err => {
      if (err) {
        console.log(err); 
      }
    })
  }
}