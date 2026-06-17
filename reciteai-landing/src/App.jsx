import React from 'react';
import BackgroundParticles from './components/BackgroundParticles';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BackgroundParticles />
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Simple Navbar */}
        <nav style={{ 
          position: 'fixed', 
          top: 0, left: 0, right: 0, 
          padding: '1.5rem 0', 
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          zIndex: 100 
        }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img src="/logo.png" alt="ReciteAI Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
              <span style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>ReciteAI</span>
            </div>
            <div>
              <a 
                href="https://drive.google.com/uc?export=download&id=1y4AtVWwxHbklMh2Nz1uEQ224SlySX0La" 
                download="ReciteAI.apk"
                style={{
                  padding: '0.5rem 1.25rem',
                  background: 'rgba(0, 245, 160, 0.1)',
                  color: 'var(--accent-mint)',
                  border: '1px solid rgba(0, 245, 160, 0.2)',
                  borderRadius: '12px',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-mint)';
                  e.currentTarget.style.color = 'var(--bg-dark)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 245, 160, 0.1)';
                  e.currentTarget.style.color = 'var(--accent-mint)';
                }}
              >
                Get APK
              </a>
            </div>
          </div>
        </nav>

        <main style={{ paddingTop: '60px' }}>
          <Hero />
          <Features />
          <HowItWorks />
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default App;
