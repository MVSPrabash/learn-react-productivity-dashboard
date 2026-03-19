import { useEffect, useState } from 'react';
import './Clock.css'

export default function Clock() {
  const [now, setNow] = useState(new Date());

  const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  /* Solved the Stale Bug */
  const ffDate = now.getDate() + ' ' + monthName[now.getMonth()] + ' ' + now.getFullYear();

  return (
    <div className='clock'>
      <h1 className='time'>{pad(now.getHours())}:{pad(now.getMinutes())}:{pad(now.getSeconds())}</h1>
      <h5 className='date'>{ffDate}</h5>
    </div>
  );
}

/** pad(): Padding for time.
 *  @param Time String
 * */
const pad = n => String(n).padStart(2, '0');
