'use client';

import { Github, Linkedin, MessageSquare, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com'
    },
    {
      name: 'Notion',
      icon: <MessageSquare className="w-5 h-5" />,
      url: 'https://notion.so'
    }
  ];

  const quickLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Career', href: '#career' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleQuickLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-width section-padding">
        {/* 메인 푸터 콘텐츠 */}
        <div className="grid md:grid-cols-3 gap-8 py-12">
          {/* 브랜드 섹션 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              Portfolio
            </h3>
            <p className="text-gray-300 leading-relaxed">
              AI/백엔드 기반 풀스택 개발자로서 혁신적인 웹 서비스를 개발하고 있습니다.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 퀵 링크 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickLinkClick(link.href)}
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* 연락처 정보 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Get in Touch
            </h4>
            <div className="space-y-2 text-gray-300">
              <p>
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:your.email@example.com"
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  your.email@example.com
                </a>
              </p>
              <p>
                <strong>Response Time:</strong> 24시간 이내
              </p>
              <p>
                <strong>Location:</strong> Seoul, Korea
              </p>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* 하단 푸터 */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="flex items-center gap-2 text-gray-300 mb-4 md:mb-0">
            <span>© 2024 Portfolio. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by AI/백엔드 기반 풀스택 개발자</span>
          </div>

          {/* 맨 위로 버튼 */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-primary-600 rounded-lg text-gray-300 hover:text-white transition-all duration-200"
          >
            <ArrowUp className="w-4 h-4" />
            맨 위로
          </button>
        </div>

        {/* 기술 스택 정보 */}
        <div className="border-t border-gray-800 pt-6">
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">
              이 포트폴리오는 다음 기술로 제작되었습니다:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Next.js', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
