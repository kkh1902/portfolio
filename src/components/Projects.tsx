'use client';

import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web', 'App', 'AI'];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "React와 Spring Boot를 활용한 풀스택 이커머스 플랫폼. 결제 시스템, 재고 관리, 사용자 관리 기능을 포함합니다.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web",
      technologies: ["React", "Spring Boot", "MySQL", "Docker"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://your-ecommerce-demo.com"
    },
    {
      id: 2,
      title: "AI 챗봇 서비스",
      description: "OpenAI API를 활용한 스마트 고객 서비스 챗봇. 자연어 처리와 컨텍스트 이해가 가능한 AI 어시스턴트입니다.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "AI",
      technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/ai-chatbot",
      liveUrl: "https://your-chatbot-demo.com"
    },
    {
      id: 3,
      title: "모바일 투두 앱",
      description: "React Native로 개발한 크로스 플랫폼 투두 앱. 오프라인 동기화와 푸시 알림 기능을 제공합니다.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "App",
      technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
      githubUrl: "https://github.com/yourusername/mobile-todo",
      liveUrl: null
    },
    {
      id: 4,
      title: "데이터 시각화 대시보드",
      description: "D3.js와 Chart.js를 활용한 인터랙티브 데이터 시각화 대시보드. 실시간 데이터 분석과 리포팅을 지원합니다.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web",
      technologies: ["Vue.js", "D3.js", "Python", "Flask"],
      githubUrl: "https://github.com/yourusername/data-dashboard",
      liveUrl: "https://your-dashboard-demo.com"
    },
    {
      id: 5,
      title: "AI 이미지 생성기",
      description: "Stable Diffusion API를 활용한 AI 이미지 생성 웹 애플리케이션. 프롬프트 기반으로 고품질 이미지를 생성합니다.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "AI",
      technologies: ["React", "FastAPI", "Stable Diffusion", "AWS"],
      githubUrl: "https://github.com/yourusername/ai-image-generator",
      liveUrl: "https://your-ai-generator-demo.com"
    },
    {
      id: 6,
      title: "블록체인 DApp",
      description: "Ethereum 기반의 탈중앙화 애플리케이션. 스마트 컨트랙트와 Web3 기술을 활용한 NFT 마켓플레이스입니다.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Web",
      technologies: ["React", "Solidity", "Web3.js", "IPFS"],
      githubUrl: "https://github.com/yourusername/blockchain-dapp",
      liveUrl: "https://your-dapp-demo.com"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            다양한 기술 스택으로 구현한 프로젝트들을 소개합니다
          </p>
        </div>

        {/* 필터 버튼 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                {filter}
              </div>
            </button>
          ))}
        </div>

        {/* 프로젝트 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* 프로젝트 이미지 */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                
                {/* 카테고리 뱃지 */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* 프로젝트 정보 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* 기술 스택 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 액션 버튼 */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 더 많은 프로젝트 버튼 */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/kkh1902"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 font-medium"
          >
            <Github className="w-4 h-4" />
            GitHub에서 더 많은 프로젝트 보기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
