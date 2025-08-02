import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

const DeveloperSkills = () => {
  const [skills] = useState<Skill[]>([
    { name: 'React', level: 95, icon: '⚛️', color: 'from-blue-400 to-blue-600' },
    { name: 'TypeScript', level: 90, icon: '📘', color: 'from-blue-500 to-blue-700' },
    { name: 'Node.js', level: 88, icon: '🟢', color: 'from-green-400 to-green-600' },
    { name: 'Python', level: 85, icon: '🐍', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Sports Apps', level: 92, icon: '⚽', color: 'from-purple-400 to-purple-600' },
    { name: 'UI/UX', level: 87, icon: '🎨', color: 'from-pink-400 to-pink-600' }
  ]);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-gradient mb-2">Technical Skills</h3>
        <p className="text-muted-foreground">Expertise in modern web technologies</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-6 border border-primary/20 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{skill.icon}</span>
                <div>
                  <h4 className="font-semibold text-foreground">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {skill.level}% proficiency
                  </p>
                </div>
              </div>
              <motion.div
                className="text-2xl font-bold text-gradient"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                {skill.level}%
              </motion.div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-3 bg-background/50 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </div>

            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass rounded-2xl p-6 border border-primary/20"
      >
        <h4 className="text-xl font-bold text-gradient mb-4">Development Philosophy</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Clean Code', desc: 'Writing maintainable and scalable code', icon: '🧹' },
            { title: 'User First', desc: 'Focusing on exceptional user experience', icon: '👥' },
            { title: 'Innovation', desc: 'Always exploring new technologies', icon: '🚀' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-lg font-semibold text-foreground mb-1">{item.title}</div>
              <div className="text-sm text-muted-foreground">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DeveloperSkills; 