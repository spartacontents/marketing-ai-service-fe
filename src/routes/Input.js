import { useState } from 'react';

function Input({ onSend }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', margin: '30px 0' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="답변을 입력하시오"
        style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button
        type="submit"
        style={{
          padding: '10px',
          borderRadius: '4px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          width: '100px',  // 버튼 너비를 고정
        }}
      >
        보내기
      </button>
    </form>
  );
}

export default Input;
