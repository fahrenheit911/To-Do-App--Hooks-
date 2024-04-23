import React from 'react';
import './index.css';

export const InputTask = () => {
  return (
    <div className="input-task">
      <label className="input-task-label">
        <input type="checkbox" className="input-task-checkbox" />
        <h3 className="input-task-title">1</h3>
      </label>
      <button onClick={() => {}} aria-label="Edit" className="input-task-title-edit" />
      <button
        onClick={() => {
          // if (confirm("Are you sure?")) {}
        }}
        aria-label="Remove"
        className="input-task-remove"
      />
    </div>
  );
};
