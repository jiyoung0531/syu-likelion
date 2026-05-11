import { useState, useEffect } from 'react';
import './Home.css';

//자식 컴포넌트
function People({ TextChange }) {
  return (
    <div>
      <button onClick={() => TextChange('저요저요저요저요저요')}>
        저요!
      </button>
    </div>
  );
}

//부모 컴포넌트
export default function Home({ handleTextChange }) {
const [text, setText] = useState('집이 너무 좋아요');
    
const [list, setList] = useState([]); 

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setList(data);
        }
      })
  }, []);
    
const onHandleChange = (newText) => {
    setText(newText);
    handleTextChange(newText);
  };    

  return (
    <div>
      <p style={{
        color: text === "집이 너무 좋아요" ? 'black' : 'red',
        fontWeight: 'bold'
      }}
      >{text}</p>
        <People TextChange={onHandleChange} />
          <h2>귀가명단</h2>
            <ul className="peo">
                {list.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
            </ul>          
    </div>
  );
}
  