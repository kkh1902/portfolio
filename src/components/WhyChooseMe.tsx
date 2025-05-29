'use client';

import { Zap, Brain, Target } from 'lucide-react';

const WhyChooseMe = () => {
  const advantages = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "빠른 MVP 제작",
      description: "아이디어부터 프로토타입까지 빠른 시간 내에 구현하여 시장 검증을 가능하게 합니다. 효율적인 개발 프로세스로 비용과 시간을 절약합니다.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "시스템적인 사고",
      description: "단순한 기능 구현을 넘어 전체 시스템의 확장성과 유지보수성을 고려한 아키텍처를 설계합니다. 장기적인 관점에서 프로젝트를 계획합니다.",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "꾸준함",
      description: "지속적인 학습과 개선을 통해 최신 기술 트렌드를 따라가며, 프로젝트의 시작부터 완성까지 책임감 있게 관리합니다.",
      color: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-white dark:bg-gray-800">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Me?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            저와 함께 작업해야 하는 이유를 소개합니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 card-shadow hover:shadow-xl hover:-translate-y-2"
            >
              {/* 아이콘 */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${advantage.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {advantage.icon}
              </div>

              {/* 제목 */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {advantage.title}
              </h3>

              {/* 설명 */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {advantage.description}
              </p>

              {/* 하단 장식 */}
              <div className={`mt-6 h-1 w-12 bg-gradient-to-r ${advantage.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* 추가 통계 */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">완성된 프로젝트</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-400">프로젝트 완료율</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">학습 및 개발</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">∞</div>
            <div className="text-gray-600 dark:text-gray-400">개선 의지</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
