import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Mic, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', zIndex: 10 }}>
      <div className="container w-full">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'rgba(0, 245, 160, 0.1)',
                border: '1px solid rgba(0, 245, 160, 0.2)',
                borderRadius: '50px',
                marginBottom: '1.5rem'
              }}>
                <span style={{ display: 'block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-mint)', boxShadow: '0 0 10px var(--accent-mint)' }} />
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--accent-mint)' }}>Edge AI Real-Time Recognition</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                <span style={{ color: 'var(--text-primary)' }}>Perfect Your </span>
                <br />
                <span className="text-gradient-mint">Recitation with AI</span>
              </h1>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '500px' }}>
                The world's first fully on-device Quranic speech recognition platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1eYQbsSLhvY3g8Lt98PlX5VtSi_1T1UST"
                download="RecitAI.apk"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 2rem',
                  background: 'var(--accent-mint)',
                  color: 'var(--bg-dark)',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  borderRadius: '16px',
                  boxShadow: '0 0 20px rgba(0, 245, 160, 0.4)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 245, 160, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 245, 160, 0.4)';
                }}
              >
                <Download size={24} />
                Download Android APK
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              perspective: '1000px',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            {/* Ambient background glow behind mockup */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '80%',
              background: 'radial-gradient(circle, rgba(0,245,160,0.2) 0%, transparent 70%)',
              filter: 'blur(50px)',
              zIndex: 0
            }} />

            <motion.div
              className="glass-card glow-mint"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
              style={{
                width: '100%',
                maxWidth: '340px',
                aspectRatio: '9/19',
                padding: '1.5rem',
                borderRadius: '40px',
                position: 'relative',
                zIndex: 1,
                border: '8px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,245,160,0.1)'
              }}
            >
              {/* Fake Mobile Status Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', opacity: 0.7 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>9:41</span>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <div style={{ width: '16px', height: '10px', background: 'var(--text-primary)', borderRadius: '2px' }} />
                  <div style={{ width: '10px', height: '10px', background: 'var(--text-primary)', borderRadius: '50%' }} />
                </div>
              </div>

              {/* Mockup Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-arabic)', marginBottom: '0.25rem' }}>السَّلَامُ عَلَيْكُمْ</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Good Evening!</p>
                  </div>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0, 245, 160, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BookOpen size={20} color="var(--accent-mint)" />
                  </div>
                </div>

                {/* Main Action Area */}
                <div style={{
                  flex: 1,
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  marginTop: '1rem'
                }}>

                  <motion.div
                    animate={{
                      boxShadow: ['0 0 0 0 rgba(0, 245, 160, 0.4)', '0 0 0 20px rgba(0, 245, 160, 0)'],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'var(--accent-mint)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <Mic size={32} color="var(--bg-dark)" />
                  </motion.div>
                  <p style={{ fontWeight: 500 }}>Tap to Recite</p>

                </div>

                {/* Progress / Stat Card */}
                <div style={{
                  padding: '1rem',
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.02) 100%)',
                  borderRadius: '20px',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>Daily Goal</p>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '70%' }}
                        transition={{ delay: 1, duration: 1 }}
                        style={{ height: '100%', background: 'var(--accent-gold)' }}
                      />
                    </div>
                  </div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-gold)' }}>70%</span>
                </div>
              </div>

              {/* Home Indicator */}
              <div style={{ width: '40%', height: '5px', background: 'var(--text-primary)', borderRadius: '3px', margin: '1rem auto 0', opacity: 0.5 }} />

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
