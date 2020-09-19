import {useState, useEffect} from 'react'

const { get, set} = require('../utils/localStorage');

export default function useTheme(initVal) {
  const [dm, setTheme] = useState( () => {
    return get('theme', initVal)    
  })

  useEffect(() => {

    set('theme', JSON.stringify(dm))
    document.getElementById('root').style.backgroundColor = dm ? '#333': 'white';

  }, [dm])


  return [dm, setTheme]
}