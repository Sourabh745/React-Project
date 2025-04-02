import { useEffect, useState } from 'react';

const useToggle = (initialValue = false) => {

  const [daylight, setDaylight] = useState(initialValue);
  const toggle = () => setDaylight((prev) => !prev)

  useEffect(() => {
    {
      if(daylight)
        document.body.style.backgroundColor = 'black',
        document.body.style.color = 'white'
      else
      document.body.style.backgroundColor = 'white', 
      document.body.style.color = 'black'
    };
  }, [daylight]);

  return [daylight, toggle]
}

export default useToggle;
