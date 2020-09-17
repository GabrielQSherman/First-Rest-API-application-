const {default: axios} = require('axios');
const {default: val} = require('validator')
const baseURL = 'http://localhost:4000';
const isEmpty = require('./isEmpty');

module.exports = {
  loginReq: (form) => {
    const 
      reqBody = {},
      failedValues = [];
    for (const input of form) {
      const val = input.value.trim();
      if (!isEmpty(val)) {
        reqBody[input.name] = val
      } else {
        failedValues.push({key: input.name, error: `${input.name} Is Required`})
      }
    }

    // [] lengths of inputs (match schema)
    if (!isEmpty(reqBody.email) && !val.isEmail(reqBody.email)) failedValues.push({key: 'email', error: 'Email Invalid'})


    const loginURL = `${baseURL}/user/login`; 

    fetch(loginURL, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    })
    .then(rs => { 
      console.log(rs);
      return rs.json()
    })
    .then(res => {
      console.log(res)
    })

    // axios.put(loginURL, reqBody)
    // .then( res => {
    //   console.log(res);
    // })
    // .catch( err => {
    //   if (err) {
    //     console.log(err);
    //   }
    // })

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
    if (Object.keys(reqBody).length !== 4) {
      return alert('You forgot to fill something out')
    } 
    // [] lengths of inputs (match schema)
    //all validation from before, 
    // [*] plus make sure both password inputs match
    if (reqBody.password !== reqBody.password2) {
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