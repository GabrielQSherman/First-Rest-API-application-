import {useState, useEffect} from 'react'

const { get, set} = require('../utils/localStorage');

export default function useName(initVal) {

  const [name, setName] = useState( () => {
    return get('name', initVal)    
  })

  useEffect(() => {
    console.log('logging in as', name);
    set('name', JSON.stringify(name))
  }, [name])


  return [name, setName]
}