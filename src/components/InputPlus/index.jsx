import React, {useState} from 'react';
import './index.css';

export const InputPlus = () => {
  const [firstName, setFirstName] = useState('');

  return (
    <div className="input-plus">
      <input
        type="text"
        className="input-plus-value"
        placeholder="Type here..."
        onChange={e => setFirstName(e.target.value)}
      />
      <button onClick={() => console.log(111)} aria-label="Add" className="input-plus-button" />
    </div>
  );
};
