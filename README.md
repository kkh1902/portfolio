# 🚀 개발자 포트폴리오

https://portfolio-seven-beta-46.vercel.app/

> AI/백엔드 기반 풀스택 개발자의 포트폴리오 웹사이트

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ 주요 특징

- **🎬 동적 타이핑 애니메이션**: 4가지 역할이 순환하며 타이핑되는 Hero 섹션
- **🌙 다크모드 지원**: 완벽한 라이트/다크 테마 전환
- **📱 반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **🎨 인터랙티브 UI**: 부드러운 애니메이션과 호버 효과
- **⚡ 최적화된 성능**: Next.js 15와 TypeScript 기반

## 🛠️ 기술 스택

### Frontend
- **Next.js 15** - React 프레임워크
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 유틸리티 기반 스타일링
- **Lucide React** - 아이콘 라이브러리

### Development Tools
- **IntelliJ IDEA** - 주 개발 환경
- **Claude AI** - AI 보조 개발
- **Git** - 버전 관리

## 📁 프로젝트 구조

```
portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React 컴포넌트
│   │   ├── AboutMe.tsx     # Hero 섹션 (타이핑 애니메이션)
│   │   ├── Navigation.tsx  # 네비게이션 바
│   │   ├── Stacks.tsx      # 기술 스택 섹션
│   │   ├── Projects.tsx    # 프로젝트 갤러리
│   │   ├── Contact.tsx     # 연락처 폼
│   │   └── ...
│   └── hooks/              # 커스텀 훅
│       └── useDarkMode.ts  # 다크모드 관리
├── public/                 # 정적 파일
└── ...
```

## 🎯 주요 섹션

### 1. About Me (Hero)
- 동적 타이핑 애니메이션으로 4가지 역할 표현
- 개발 가능 상태 표시
- GitHub, 기술 블로그 링크
- 현재 집중 분야 및 학습 상태

### 2. Tech Stacks
- 5개 카테고리별 기술 분류
- 프로그레스 바로 숙련도 시각화
- 인터랙티브 기술 뱃지
- Frontend, Backend, DevOps, Tools, AI & ML

### 3. Projects
- 카테고리별 프로젝트 필터링 (Web, Server, App, AI)
- 실제 GitHub 링크 연결
- 기술 스택과 라이브 데모 링크

### 4. Contact
- 실시간 연락 폼
- 소셜 미디어 링크
- 이메일 직접 연결

## 🚀 실행 방법

### 필수 조건
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/kkh1902/portfolio.git

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 🎨 디자인 특징

- **글라스모피즘**: 반투명 블러 효과
- **그라데이션**: 부드러운 색상 전환
- **마이크로 인터랙션**: 세밀한 호버 효과
- **타이포그래피**: 계층적이고 읽기 쉬운 텍스트

## 🌟 주요 기능

### 타이핑 애니메이션
```typescript
const phrases = [
  'AI/백엔드 기반 풀스택 개발자',
  'AI 통합 전문가',
  '백엔드 시스템 설계자',
  '혁신적인 문제 해결사'
];
```

### 다크모드 구현
- 시스템 테마 자동 감지
- 토글 버튼으로 수동 전환
- localStorage 상태 저장

### 반응형 네비게이션
- 데스크톱: 가로 메뉴
- 모바일: 햄버거 메뉴
- 부드러운 스크롤 이동

## 📞 연락처

- **이메일**: [kkh1902@naver.com](mailto:kkh1902@naver.com)
- **GitHub**: [github.com/kkh1902](https://github.com/kkh1902)
- **기술 블로그**: [kkh1902.tistory.com](https://kkh1902.tistory.com/)

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

## 🙏 감사인사

- **Claude AI** - 개발 과정에서의 AI 어시스턴트
- **Vercel** - 호스팅 플랫폼
- **Unsplash** - 프로젝트 이미지 제공

---

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!

![Profile Views](https://komarev.com/ghpvc/?username=kkh1902&color=blue&style=flat-square)
