
import React, { useEffect, useState } from 'react';

import Countdown from './components/Countdown';

function getBusinessConfig(config, hostname, previewKey) {
  if (previewKey && config[previewKey]) return config[previewKey];
  if (config[hostname]) return config[hostname];
  // Try stripping www.
  if (hostname.startsWith('www.') && config[hostname.slice(4)]) return config[hostname.slice(4)];
  return config['default'] || Object.values(config)[0];
}

function App() {
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    fetch('/config/business.json')
      .then((res) => res.json())
      .then((config) => {
        // Check for /preview/$CLIENT in the pathname
        const match = window.location.pathname.match(/^\/preview\/([^/]+)/);
        const previewKey = match ? match[1] : null;
        const hostname = window.location.hostname;
        setBusiness(getBusinessConfig(config, hostname, previewKey));
      });
  }, []);

  if (!business) return <div>Loading...</div>;

  return (
    <div style={{
      fontFamily: 'Inter, Arial, sans-serif',
      minHeight: '100vh',
      minWidth: 0,
      width: '100vw',
      background: `linear-gradient(rgba(181, 159, 147, 0.28), rgba(237, 105, 34, 0.28)), url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glassmorphism Card */}
      <main style={{
        maxWidth: 480,
        width: '100%',
        margin: '5.5rem auto 2rem auto',
        background: 'rgba(255,255,255,0.13)',
        borderRadius: 28,
        boxShadow: '0 8px 40px 0 rgba(0,0,0,0.25)',
        padding: '3rem 2.5rem 2.5rem 2.5rem',
        textAlign: 'center',
        position: 'relative',
        backdropFilter: 'blur(16px)',
        border: '1.5px solid rgba(255,255,255,0.22)',
      }}>
        <img src={business.logo} alt={business.businessName + ' logo'} style={{maxWidth: 140, maxHeight: 140, marginBottom: 24, borderRadius: 18, backgroundColor: '#fff'}} />
        <h1 style={{
          fontWeight: 800,
          fontSize: '2.5rem',
          margin: '0 0 1.2rem 0',
          color: '#fff',
          letterSpacing: '-1px',
          textShadow: '0 4px 24px #0008',
        }}>
          Coming Soon
        </h1>
        <h2 style={{margin: 0, fontWeight: 600, fontSize: '1.45rem', color: '#fff', opacity: 0.92, textShadow: '0 2px 8px #0006'}}>{business.businessName}</h2>
        {business.countdown?.enabled && business.countdown?.targetDate && (
          <div style={{margin: '2.2rem 0 1.2rem 0'}}>
            <Countdown targetDate={business.countdown.targetDate} />
          </div>
        )}
        <div style={{marginTop: 32, fontSize: '1.18rem', color: '#fff', opacity: 0.93, textShadow: '0 2px 8px #0004'}}>
          <div style={{fontWeight: 500, marginBottom: 6}}>Contact us</div>
          <div style={{marginTop: 2, marginBottom: 2}}>
            <a href={`mailto:${business.contact.email}`} style={{color: '#ffd600', textDecoration: 'none', fontWeight: 600}}>{business.contact.email}</a>
          </div>
          <div style={{fontWeight: 400}}>{business.contact.phone}</div>
        </div>
      </main>
      {/* GetLogix Footer */}
      <footer style={{margin: '2rem 0 0 0', color: '#fff', fontSize: 15, fontWeight: 400, letterSpacing: 0.5, opacity: 0.7, textShadow: '0 2px 8px #0004'}}>
        <span style={{fontWeight: 100, fontSize: 15}}>A Project by</span><br />
        <a href="https://www.getlogix.com" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', marginTop: 8}}>
          <img src="https://www.getlogix.com/img/fullLogo.svg" alt="GetLogix" style={{height: 32, filter: 'drop-shadow(0 2px 8px #0004)'}} />
        </a>
        <div style={{marginTop: 8}}>&copy; {new Date().getFullYear()} <a href="https://www.getlogix.com" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', color: '#ed691c', marginTop: 8}}>GetLogix Inc.</a> All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
