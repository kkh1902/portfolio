'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 실제 구현에서는 이메일 전송 로직을 추가
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // 폼 초기화
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // 성공 메시지 3초 후 숨기기
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/kkh1902',
      color: 'hover:bg-gray-900 hover:text-white'
    },
    {
      name: 'Tistory Blog',
      icon: <MessageSquare className="w-6 h-6" />,
      url: 'https://kkh1902.tistory.com/',
      color: 'hover:bg-orange-500 hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://linkedin.com',
      color: 'hover:bg-blue-600 hover:text-white'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            새로운 프로젝트나 협업 기회에 대해 이야기하고 싶다면 언제든 연락주세요
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* 연락처 정보 */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                연락처 정보
              </h3>
              
              {/* 이메일 */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl mb-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">이메일</h4>
                  <a 
                    href="mailto:kkh1902@naver.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    kkh1902@naver.com
                  </a>
                </div>
              </div>

              {/* 응답 시간 안내 */}
              <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-200 dark:border-primary-800">
                <p className="text-primary-700 dark:text-primary-300 text-sm">
                  <strong>응답 시간:</strong> 보통 24시간 이내에 답변드립니다.
                </p>
              </div>
            </div>

            {/* 소셜 링크 */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                소셜 미디어
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-200 ${link.color}`}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* 추가 정보 */}
            <div className="p-6 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                협업하고 싶은 프로젝트
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• 웹/모바일 애플리케이션 개발</li>
                <li>• AI 기술을 활용한 서비스</li>
                <li>• 스타트업 MVP 개발</li>
                <li>• 기술 컨설팅 및 멘토링</li>
              </ul>
            </div>
          </div>

          {/* 연락 폼 */}
          <div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                메시지 보내기
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    메시지가 전송되었습니다!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    빠른 시일 내에 답변드리겠습니다.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 이름 */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="홍길동"
                    />
                  </div>

                  {/* 이메일 */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="example@email.com"
                    />
                  </div>

                  {/* 제목 */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      제목 *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="프로젝트 협업 문의"
                    />
                  </div>

                  {/* 메시지 */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      메시지 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                      placeholder="프로젝트에 대한 상세한 내용을 알려주세요..."
                    />
                  </div>

                  {/* 전송 버튼 */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white rounded-lg font-medium transition-all duration-200 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        전송 중...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        메시지 전송
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
