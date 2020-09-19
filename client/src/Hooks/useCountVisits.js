import {useState, useEffect} from 'react'

const { get, set} = require('../utils/localStorage');

export default function useCountVisits(initVal) {
  const [visits, setVisits] = useState( () => {
    return get('visits', initVal)    
  })

  useEffect(() => {

    set('visits', JSON.stringify(visits))
    console.log(`You visited ${visits} pages`);

  }, [visits])


  return [visits, setVisits]
}