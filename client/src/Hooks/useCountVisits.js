import {useState, useEffect} from 'react'

const { get, set} = require('../utils/localStorage');

export default function useCountVisits(initVal) {

  let [visits, setVisits] = useState( () => {
    return get('visits', initVal)    
  })

  visits+=1
  useEffect(() => {
    set('visits', JSON.stringify(visits))
  })

  return [visits, setVisits]
}