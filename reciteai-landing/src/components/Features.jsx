import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Search, Zap, Users, Brain, Target, Activity } from 'lucide-react';

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const features = [
    {
      id: 1,
      title: "Real-Time Speech Recognition",
      description: "Powered by fine-tuned edge AI using Whisper & GGML Q8_0, achieving offline recognition with under 2.4s latency.",
      icon: <Cpu size={32} />,
      glowColor: "rgba(0, 245, 160, 0.5)",
      borderColor: "rgba(0, 245, 160, 0.2)"
    },
    {
      id: 2,
      title: "Tajweed Explorer",
      description: "Click and select specific words inside verses to instantly see a comprehensive breakdown of the Tajweed rules applicable to that section.",
      icon: <Search size={32} />,
      glowColor: "rgba(212, 175, 55, 0.5)",
      borderColor: "rgba(212, 175, 55, 0.2)"
    },
    {
      id: 3,
      title: "Instant Feedback Loop",
      description: "Highlighting mistakes in real-time with sequential word-level matching. Green for correct, red for skipped or missed.",
      icon: <Zap size={32} />,
      glowColor: "rgba(0, 245, 160, 0.5)",
      borderColor: "rgba(0, 245, 160, 0.2)"
    },
    {
      id: 4,
      title: "LMS Community Feature",
      description: "Allows teachers to register, build active communities, assign authentic recitation tasks, grade submissions, and reward certificates with no fake submissions.",
      icon: <Users size={32} />,
      glowColor: "rgba(212, 175, 55, 0.5)",
      borderColor: "rgba(212, 175, 55, 0.2)"
    },
    {
      id: 5,
      title: "Memorization Mode",
      description: "Interactive Hifz assistance by dynamically hiding subsequent verses, enabling self-paced memorization and recitation practices.",
      icon: <Brain size={32} />,
      glowColor: "rgba(0, 245, 160, 0.5)",
      borderColor: "rgba(0, 245, 160, 0.2)"
    },
    {
      id: 6,
      title: "Goal Maker",
      description: "Create personalized daily/weekly recitation goals, set page milestones, and build a consistent relationship with the Holy Quran.",
      icon: <Target size={32} />,
      glowColor: "rgba(212, 175, 55, 0.5)",
      borderColor: "rgba(212, 175, 55, 0.2)"
    },
    {
      id: 7,
      title: "Activity Tracker",
      description: "Track your recitation streaks, log daily active minutes, and visualize detailed analytics of your progress over time.",
      icon: <Activity size={32} />,
      glowColor: "rgba(0, 245, 160, 0.5)",
      borderColor: "rgba(0, 245, 160, 0.2)"
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
            Powered by <span className="text-gradient-gold">Next-Gen AI</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            ReciteAI transforms your Android device into a personal recitation tutor. No cloud, no latency, complete privacy.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: `0 20px 40px ${feature.glowColor.replace('0.5', '0.15')}`
              }}
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '24px',
                padding: '2.5rem 2rem',
                border: `1px solid ${feature.borderColor}`,
                position: 'relative',
                overflow: 'hidden',
                transition: 'border 0.3s ease'
              }}
            >
              {/* Top ambient glow */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '150px',
                height: '150px',
                background: `radial-gradient(circle, ${feature.glowColor} 0%, transparent 70%)`,
                filter: 'blur(30px)',
                opacity: 0.4,
                zIndex: 0
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '16px', 
                  background: 'rgba(255,255,255,0.05)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  color: index % 2 === 0 ? 'var(--accent-mint)' : 'var(--accent-gold)',
                  border: `1px solid ${feature.borderColor}`
                }}>
                  {feature.icon}
                </div>
                
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
