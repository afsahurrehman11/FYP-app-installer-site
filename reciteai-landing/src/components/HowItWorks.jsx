import React from 'react';
import { motion } from 'framer-motion';
import { Download, ShieldCheck, Mic2, Sparkles, Info } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Download APK",
      description: "Get the ReciteAI application directly to your Android device.",
      icon: <Download size={24} />,
      color: "var(--accent-mint)"
    },
    {
      id: 2,
      title: "Grant Permissions",
      description: "Allow microphone access for the offline VAD engine to work.",
      icon: <ShieldCheck size={24} />,
      color: "var(--accent-gold)"
    },
    {
      id: 3,
      title: "Start Reciting",
      description: "Use Auto mode for continuous recitation or Manual chunking mode.",
      icon: <Mic2 size={24} />,
      color: "var(--accent-mint)"
    },
    {
      id: 4,
      title: "Get Corrections",
      description: "Receive instant visual feedback on mistakes and skipped words.",
      icon: <Sparkles size={24} />,
      color: "var(--accent-gold)"
    }
  ];

  return (
    <section className="relative w-full" style={{ padding: '100px 0', zIndex: 10 }}>
      <div className="container w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Your Journey to <span className="text-gradient-mint">Perfection</span>
          </h2>
        </motion.div>

        {/* Timeline Track */}
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
          {/* Vertical Line */}
          <div style={{ 
            position: 'absolute', 
            left: '50%', 
            top: 0, 
            bottom: 0, 
            width: '2px', 
            background: 'rgba(255,255,255,0.1)',
            transform: 'translateX(-50%)',
            zIndex: 0
          }} />

          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: '4rem',
                position: 'relative',
                zIndex: 1
              }}
            >
              {/* Content Card */}
              <div style={{ 
                width: 'calc(50% - 3rem)', 
                textAlign: index % 2 === 0 ? 'right' : 'left' 
              }}>
                <div style={{
                  background: 'var(--glass-bg)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  padding: '1.5rem',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  display: 'inline-block'
                }}>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: step.color }}>{step.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{step.description}</p>
                </div>
              </div>

              {/* Node */}
              <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--bg-dark)',
                border: `2px solid ${step.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: step.color,
                boxShadow: `0 0 20px ${step.color.replace(')', ', 0.3)').replace('var', '').replace('rgba', '')}`, // simple fallback glow
              }}>
                {step.icon}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tip Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ 
            maxWidth: '600px', 
            margin: '4rem auto 0', 
            background: 'rgba(212, 175, 55, 0.05)', 
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '24px',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ color: 'var(--accent-gold)', marginTop: '4px' }}>
              <Info size={28} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Installation Guide for Android</h4>
              <ol style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', lineHeight: 1.5 }}>
                <li><strong>Download the APK</strong> using the button in the hero section.</li>
                <li>Go to your phone's <strong>Settings &gt; Security</strong> (or Apps) and enable <strong>"Allow from Unknown Sources"</strong> to install the downloaded file.</li>
              </ol>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
