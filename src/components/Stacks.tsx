'use client';

import { Code, Server, Settings, Wrench, Bot } from 'lucide-react';

const Stacks = () => {
  const stackCategories = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 }
      ]
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Spring Boot", level: 85 },
        { name: "Flask", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      category: "DevOps",
      icon: <Settings className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "GitHub Actions", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Nginx", level: 75 },
        { name: "AWS", level: 70 }
      ]
    },
    {
      category: "Tools",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Postman", level: 90 },
        { name: "Notion", level: 95 },
        { name: "Git", level: 90 }
      ]
    },
    {
      category: "AI",
      icon: <Bot className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Claude", level: 95 },
        { name: "ChatGPT", level: 90 },
        { name: "Cursor AI", level: 85 },
        { name: "MidJourney", level: 80 }
      ]
    }
  ];

  const techBadgesByCategory = {
    "Frontend": [
      { name: "React", icon: "⚛️", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-700" },
      { name: "Next.js", icon: "▲", color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600" },
      { name: "TypeScript", icon: "🔷", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-700" },
      { name: "Tailwind CSS", icon: "🎨", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700" },
      { name: "JavaScript", icon: "📜", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700" },
      { name: "HTML5", icon: "🌐", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 border-orange-200 dark:border-orange-700" },
      { name: "CSS3", icon: "🎭", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-700" }
    ],
    "Backend": [
      { name: "Spring Boot", icon: "🍃", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-700" },
      { name: "Flask", icon: "🐍", color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600" },
      { name: "Node.js", icon: "💚", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-700" },
      { name: "MySQL", icon: "🗄️", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 border-orange-200 dark:border-orange-700" },
      { name: "PostgreSQL", icon: "🐘", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-700" },
      { name: "Redis", icon: "🔴", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 border-red-200 dark:border-red-700" }
    ],
    "DevOps & Cloud": [
      { name: "Docker", icon: "🐳", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-700" },
      { name: "GitHub Actions", icon: "⚡", color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600" },
      { name: "Nginx", icon: "🌐", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-700" },
      { name: "AWS", icon: "☁️", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 border-orange-200 dark:border-orange-700" },
      { name: "Linux", icon: "🐧", color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700" }
    ],
    "Development Tools": [
      { name: "Git", icon: "🌿", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 border-orange-200 dark:border-orange-700" },
      { name: "VS Code", icon: "💻", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-700" },
      { name: "Postman", icon: "📮", color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 border-orange-200 dark:border-orange-700" },
      { name: "Figma", icon: "🎨", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 border-purple-200 dark:border-purple-700" },
      { name: "Notion", icon: "📝", color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600" }
    ],
    "AI & ML": [
      { name: "Claude", icon: "🧠", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-700" },
      { name: "ChatGPT", icon: "🤖", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-700" },
      { name: "Cursor AI", icon: "🔮", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 border-purple-200 dark:border-purple-700" },
      { name: "MidJourney", icon: "🎭", color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300 border-pink-200 dark:border-pink-700" },
      { name: "Python", icon: "🐍", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-700" }
    ]
  };

  return (
    <section id="stacks" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stacks
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            다양한 기술 스택을 활용하여 최적의 솔루션을 제공합니다
          </p>
        </div>

        {/* 기술 스택 카테고리별 상세 */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {stackCategories.map((stack, index) => (
            <div 
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* 카테고리 헤더 */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${stack.color} text-white`}>
                  {stack.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {stack.category}
                </h3>
              </div>

              {/* 스킬 리스트 */}
              <div className="space-y-4">
                {stack.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${stack.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 기술 뱃지 카테고리별 정리 */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            🏆 기술 스택 뱃지
          </h3>
          
          {Object.entries(techBadgesByCategory).map(([category, badges], categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  category === 'Frontend' ? 'bg-blue-500' :
                  category === 'Backend' ? 'bg-green-500' :
                  category === 'DevOps & Cloud' ? 'bg-purple-500' :
                  category === 'Development Tools' ? 'bg-orange-500' :
                  'bg-pink-500'
                }`}></div>
                {category}
                <span className="text-sm text-gray-500 dark:text-gray-400">({badges.length})</span>
              </h4>
              
              <div className="flex flex-wrap gap-3">
                {badges.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-base font-medium border ${tech.color} hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default group`}
                  >
                    <span className="group-hover:animate-bounce text-lg">{tech.icon}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          {/* 전체 기술 수 요약 */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 text-center">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              📊 Total Tech Stack
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {Object.entries(techBadgesByCategory).map(([category, badges], index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {badges.length}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {category.split(' ')[0]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stacks;
