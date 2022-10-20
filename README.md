# eRentronic

## 목차
1. [eRentronic이란](#erentronic이란)
2. [특징](#특징)
3. [폴더 구조 모듈 소개](#폴더-구조-모듈-소개)

## eRentronic이란

사용해 보고 싶은 전자 제품을 대여/구매할 수 있는 쇼핑몰입니다. 

### 팀원

- Dott -
    - 운동, 도트 그래픽, 패션을 좋아하는 주니어 프론트 개발자입니다😃
    - 최근엔 클린 코드, 효율성 등에 집중하고있어요📝
    
- JS -
    - 영화, 캠핑, 산책을 좋아하는 주니어 프론트 개발자입니다 ⛺

### stack 🔨

**Tech**

Typescript / React / styled-component / react-router-dom

**Environment**

 msw / webpack

**State management**

 Recoil / Tanstack / React-query 

**Collaboration tool**

zira / notion / github discussion

## 특징

- 클린코드 지향
    - 코드 컨벤션
    - 추상화 컨벤션

- 디자인 시스템
    - 디자인 통일
    - 중복되는 스타일 코드 사용 불필요
    - 효율성 향상

- 구체화된 협업 컨벤션
    - 협업 컨벤션 문서화
    - 주간 단위 미팅
    (ex. 팀 미팅, 주간 계획 보고 유지 보수의 날 ,,,)
    - 다양한 툴 사용( github discussion, zira, notion 등) 협업 링크
    
    ![지라 사용](https://user-images.githubusercontent.com/88314186/196895264-d3ee38ac-270a-4a07-acff-81cee225021a.JPG)

    


## 기능 🧑‍💻

- 데이터 정규화
    - 상위 컴포넌트에 대한 의존도 감소
    - 데이터 재사용

- 사용자 입력값 무결성 검사
    - 사용자 경험 : 입력에 대한 다양한 검증과 대응
    - 재사용성: UI 컴포넌트, 검증 로직 재사용

- 유저 편의성 패널
    - 다크모드, 화면 네비게이팅, 로그인 페이지 이동

- 자동 로그인
    - 토큰 저장

### 구현예정🔜

- 채팅
- 세부 주문 관리
- 검색

## 폴더 구조 모듈 소개

```tsx
├─.storybook
├─config
├─dist
├─public
└─src
    ├─apis
    ├─assets
    ├─components
    │  ├─client
    │  ├─common
    │  │  ├─Button
    │  │  ├─Icon
    │  │  ├─Input
    │  │  ├─Layout
    │  │  ├─Loading
		......
    │  └─server
    │      ├─Filter
    │      │  └─SideTab
    │      ├─Product
    │      │  ├─Card
    │      │  └─Label
    │      ├─ProductDetail
    │      │  └─OrderForm
    │      └─Search
		.......
    ├─hooks
    ├─mocks
    ├─Pages 
    ├─recoils
    ├─service
    ├─styles
    ├─test
    ├─types
    └─utils
```

대표 폴더 분류 컨벤션 예시

### ex). components → 클라이언트, 서버, 커먼으로 세분화 분류

- 분류의 기준 →  커먼: View, 디자인시스템 컴포넌트/ 클라이언트: 클라이언트 상태 노출 목적 View 컴포넌트/ 서버: 서버 상태 노출 목적 컴포넌트
- components 폴더의 컴포넌트는 주로 가공된 데이터 및 로직(이벤트 핸들러, 콜백함수,,,) 을 전달받기 때문에 VIew에 대한 순수한 관심사를 가질 수 있음
- 서버와 클라이언트는 데이터의 스키마 별로 폴더를 세부 분류함
ex) . 필터 데이터/ 제품 데이터/ 제품 상세 데이터/ …

폴더 구조 컨벤션 위키 링크

## 구동 방법

```json
npm start
```

1. 기본 구동
    - 웹팩 개발자 서버

```json
npm run build:dev
```

1. 개발자 모드 빌드
    - 개발자 모드 빌드 테스트용

```json
npm run build:prod
```

1. 배포 모드 빌드
    - 빌드 최적화

상세 구동 방법 및 내용 위키 링크

## 라이센스

```json
MIT License

Copyright (c) 2022 Dott, herrakam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
