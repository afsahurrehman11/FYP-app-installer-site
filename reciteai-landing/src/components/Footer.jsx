import React from 'react';
import { Globe, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid rgba(255,255,255,0.05)', 
      background: 'rgba(0,0,0,0.2)',
      padding: '3rem 0',
      marginTop: '4rem',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        
        {/* Brand / Logo Area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/logo.png" alt="ReciteAI Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>ReciteAI</span>
        </div>

        {/* Links / Socials */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-mint)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
            <Globe size={20} />
          </a>
          <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-mint)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
            <MessageCircle size={20} />
          </a>
          <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-mint)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
            <Mail size={20} />
          </a>
        </div>

        {/* Credits */}
        <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', lineHeight: 1.6 }}>
          <p>Developed as a Final Year Project by Information Technology University (ITU), Lahore.</p>
          <p style={{ marginTop: '0.5rem' }}>&copy; 2026 ReciteAI Team. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
