import { useEffect, useState } from 'react';
import './Notes.css'


export default function Notes() {
  const [text, setText] = useState(() => {
    return localStorage.getItem("notes") || "";
  });

  useEffect(()=>{
    localStorage.setItem("notes", text);
  }, [text]);

  return (
    <div className="notes">
      <label htmlFor='notes-textarea'>Note</label>
      <textarea value={text} onChange={(e) => setText(e.target.value)} id='notes-textarea' />
    </div>
  );
}
