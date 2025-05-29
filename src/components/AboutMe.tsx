'use client';

import { useState, useEffect } from 'react';
import { Github, ArrowRight, Code, Coffee, Zap } from 'lucide-react';

const AboutMe = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    'AI/백엔드 기반 풀스택 개발자',
    'AI 통합 전문가',
    '백엔드 시스템 설계자',
    '혁신적인 문제 해결사'
  ];
  
  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, phrases]);
  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 relative overflow-hidden">
      {/* 배경 애니메이션 요소들 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl text-blue-200/20 dark:text-blue-800/20 animate-pulse">{`{`}</div>
        <div className="absolute top-40 right-20 text-4xl text-purple-200/20 dark:text-purple-800/20 animate-bounce delay-1000">=&gt;</div>
        <div className="absolute bottom-32 left-20 text-5xl text-indigo-200/20 dark:text-indigo-800/20 animate-pulse delay-500">&lt;/&gt;</div>
        <div className="absolute bottom-20 right-10 text-3xl text-blue-200/20 dark:text-blue-800/20 animate-bounce delay-700">( )</div>
      </div>
      
      <div className="container-width section-padding w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 콘텐츠 */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-8">
              {/* 인사말과 상태 */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-green-200 dark:border-green-800 shadow-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">개발 가능한 상태</span>
                  <Coffee className="w-4 h-4 text-amber-600" />
                </div>
                
                <div className="space-y-2">
                  <h1 className="text-2xl font-medium text-gray-600 dark:text-gray-400">
                    안녕하세요! 👋
                  </h1>
                  <div className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    저는{' '}
                    <span className="text-blue-600 dark:text-blue-400 relative">
                      {displayText}
                      <span className="animate-pulse">|</span>
                    </span>
                    <br />
                    입니다
                  </div>
                </div>
              </div>

              {/* 소개 문구 */}
              <div className="max-w-2xl">
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  최신 AI 기술과 견고한 백엔드 시스템을 결합하여 
                  <span className="font-semibold text-blue-600 dark:text-blue-400"> 혁신적이고 확장 가능한 </span>
                  웹 서비스를 구축합니다. 사용자 경험을 최우선으로 하는 개발자입니다.
                </p>
              </div>

              {/* 핵심 역량 */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-xl border border-blue-200 dark:border-blue-800">
                  <Code className="w-4 h-4" />
                  <span className="font-medium">Full Stack Development</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-xl border border-purple-200 dark:border-purple-800">
                  <Zap className="w-4 h-4" />
                  <span className="font-medium">AI Integration</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 text-emerald-700 dark:text-emerald-300 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <span className="text-sm">⚡</span>
                  <span className="font-medium">Backend Systems</span>
                </div>
              </div>

              {/* 액션 버튼들 */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://github.com/kkh1902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                >
                  <Github className="w-5 h-5" />
                  GitHub 코드 보기
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href="https://kkh1902.tistory.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 font-medium shadow-sm hover:shadow-lg"
                >
                  <div className="w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded text-xs font-bold flex items-center justify-center">
                    T
                  </div>
                  기술 블로그 읽기
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>

          {/* 우측 정보 카드 */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* 배경 데코레이션 */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-br from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
              
              {/* 메인 카드 */}
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/50">
                <div className="space-y-6">
                  {/* 프로필 헤더 */}
                  <div className="text-center">
                    <div className="relative mx-auto mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                        <span className="text-white text-2xl font-bold transform -rotate-3">DEV</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      풀스택 개발자
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">AI & Backend Specialist</p>
                  </div>

                  {/* 통계 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800/50">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                      <div className="text-xs text-blue-600/80 dark:text-blue-400/80 font-medium">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/50">
                      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">20+</div>
                      <div className="text-xs text-emerald-600/80 dark:text-emerald-400/80 font-medium">Projects Done</div>
                    </div>
                  </div>

                  {/* 현재 상태 */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                      <span className="text-sm text-gray-600 dark:text-gray-400">🎯 현재 집중</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">AI 통합 개발</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                      <span className="text-sm text-gray-600 dark:text-gray-400">☕ 선호 도구</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">IntelliJ, Claude</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                      <span className="text-sm text-gray-600 dark:text-gray-400">🌱 학습 중</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Next.js 15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
