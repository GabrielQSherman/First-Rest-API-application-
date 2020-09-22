const {default: axios} = require('axios');
const {default: validate} = require('validator')
const baseURL = 'http://localhost:4000';
const isEmpty = require('./isEmpty');

module.exports = {
  loginReq: async (form) => {
    const 
      reqBody = {},
      failedValues = [];
    for (const input of form) {
      const val = input.value.trim();
      if (!isEmpty(val)) {
        reqBody[input.name] = val
        switch (input.name) {
          case 'credential':
              if ( !validate.isEmail(val) ) {
                const username = reqBody.credential;
                if ( !validate.isAscii(username) ) failedValues.push({ key: 'username', error: 'Username Using Invalid Characters'})
                if ( username.length < 3 ) failedValues.push({ key: 'username', error: 'Username Needs To Be At Least 3 Characters'})
                if ( !username.length > 21 ) failedValues.push({ key: 'username', error: 'Username Needs To Be Shorter Than 21 Characters'})
              } else {
                const email = reqBody.email;
                if ( !validate.isEmail(email)) failedValues.push({key: 'email', error: 'Email Invalid'})
                if ( email.length < 7 ) failedValues.push({key: 'email', error: 'Email Needs To Be At Least 7 Characters'})
                if ( email.length > 255 ) failedValues.push({key: 'email', error: 'Email Needs To Be Shorter Than 256 Characters'})
                if ( !validate.isAscii(email)) failedValues.push({key: 'email', error: 'Email Is Using Invalid Characters'})      
              }
            break;
          case 'password':
            const password = reqBody.password;
                if ( password.length < 7 ) failedValues.push({key: 'password', error: 'Password Needs To Be At Least 7 Characters'})
                if ( password.length > 1000 ) failedValues.push({key: 'password', error: 'Password Needs To Be Shorter Than 1000 Characters'})
            break;  
          default:       
        }
      } else {

        failedValues.push({key: input.name, error: `${input.name} Is Required`})

      }
    }
    
    if (failedValues.length !== 0) {
      return alert(failedValues.map(err=>{return `Error with ${err.key}:\n${err.error}\n`}).join('\n'))
    }

    const loginURL = `${baseURL}/user/login`; 

    // return fetch(loginURL, {
    //     method: "PUT",
    //     mode: "cors",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(reqBody)
    // })
    // .then(rs => { 
    //   console.log(rs);
      
    //   if (rs.status === 200) {
    //     alert("You've successully logged in")
    //   }

    //   return rs.json()
    // })
    // .then(res => {
    //   console.log(res)
      
    // })
    // .finally( (res) => {
    //   return res.username
    // })

    const user = await axios.put(loginURL, reqBody).then(response => response.data)
    
    return user
  },

  regReq: async (form) => {

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

    const user = await axios.post(regURL, reqBody)
    .then( res => {
      console.log(res);
    })
    .catch( err => {
      if (err) {
        console.log(err); 
      }
    })
    return user
  }
}