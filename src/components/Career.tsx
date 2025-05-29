'use client';

import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Career = () => {
  const timeline = [
    {
      year: "2024",
      title: "개인 프로젝트 5개 완성",
      company: "Personal Projects",
      location: "Remote",
      type: "achievement",
      description: "AI 챗봇, 이커머스 플랫폼, 데이터 시각화 대시보드 등 다양한 분야의 풀스택 프로젝트를 완성했습니다.",
      icon: <Award className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2023",
      title: "프로그래머스 데브코스 수료",
      company: "Programmers",
      location: "Seoul, Korea",
      type: "education",
      description: "풀스택 웹 개발 과정을 수료하며 React, Spring Boot, 클라우드 기술 등을 학습했습니다.",
      icon: <BookOpen className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2023",
      title: "AI 도구 활용 역량 강화",
      company: "Self-Development",
      location: "Remote",
      type: "skill",
      description: "ChatGPT, Claude, Cursor AI 등 최신 AI 도구들을 활용한 개발 생산성 향상에 집중했습니다.",
      icon: <Award className="w-5 h-5" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      year: "2022",
      title: "웹 개발 학습 시작",
      company: "Self-Study",
      location: "Remote",
      type: "education",
      description: "HTML, CSS, JavaScript부터 시작하여 React, Node.js까지 웹 개발의 기초를 다졌습니다.",
      icon: <BookOpen className="w-5 h-5" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'achievement':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'education':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'skill':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'achievement':
        return '성과';
      case 'education':
        return '교육';
      case 'skill':
        return '스킬';
      default:
        return '기타';
    }
  };

  return (
    <section id="career" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Career Timeline
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            개발자로서의 성장 과정과 주요 이정표들을 소개합니다
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* 타임라인 */}
          <div className="relative">
            {/* 중앙 라인 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-blue-600 rounded-full"></div>

            {timeline.map((item, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* 타임라인 도트 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                    {item.icon}
                  </div>
                </div>

                {/* 콘텐츠 카드 */}
                <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {/* 년도 */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl font-bold gradient-text">
                          {item.year}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeStyle(item.type)}`}>
                          {getTypeLabel(item.type)}
                        </span>
                      </div>

                      {/* 제목 */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>

                      {/* 회사/기관 정보 */}
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* 설명 */}
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 추가 정보 섹션 */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl card-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              지속적 학습
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              최신 기술 트렌드를 따라가며 끊임없이 학습하고 있습니다.
            </p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl card-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              실무 경험
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              다양한 프로젝트를 통해 실무 역량을 쌓아가고 있습니다.
            </p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl card-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <Calendar className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              미래 계획
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              더 큰 임팩트를 만드는 개발자로 성장하고자 합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
