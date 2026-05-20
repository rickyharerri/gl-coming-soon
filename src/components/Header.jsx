import React from 'react';

export default function Header() {
  return (
    <header style={{
      width: '100%',
      padding: '1.5rem 0',
      background: '#222',
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      letterSpacing: '2px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      <span style={{color: '#00b894'}}>GetLogix</span> Development
    </header>
  );
}
