import { useState } from 'react';

//자식 컴포넌트
function Child({ TextChange }) {
  return (
    <div>
      <h1>자식</h1>
      <button onClick={() => TextChange('왈왈멍멍멍멍')}>
        텍스트 바꾸는 버튼
      </button>
    </div>
  );
}

//부모 컴포넌트
export default function Parent() {
  const [text, setText] = useState('너의 강아지를 보여줘');

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <div>
      <h1>부모</h1>
      <p>{text}</p>
      <Child TextChange={handleTextChange} />
    </div>
  );
}
  