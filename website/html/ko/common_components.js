/* Korean language components for common.js */
(function () {
  window.BOOK_COMPONENTS = {
    // Navigation links
    nav: {
      aiTools: "AI 도구",
      aiHelpers: "AI 도우미",
      community: "강좌, 강연 및 커뮤니티 기여",
      contributors: "기여자",
      howToContribute: "기여 방법",
    },

    // Table of Contents
    toc: {
      preface: "서문",
      chapter: "제",
      appendix: "부록",
      chapters: {
        1: { title: "제1장", subtitle: "비공식적 소개" },
        2: { title: "제2장", subtitle: "선형 및 독립 구조 학습" },
        3: { title: "제3장", subtitle: "손실 압축을 통한 저차원 분포 추구" },
        4: { title: "제4장", subtitle: "전개 최적화로부터의 심층 표현" },
        5: { title: "제5장", subtitle: "일관성 및 자기일관성 표현" },
        6: { title: "제6장", subtitle: "저차원 분포를 이용한 추론" },
        7: { title: "제7장", subtitle: "실세계 데이터의 표현 학습" },
        8: { title: "제8장", subtitle: "지능 연구의 미래" },
      },
      appendices: {
        A: { title: "부록A", subtitle: "최적화 방법" },
        B: { title: "부록B", subtitle: "엔트로피, 확산, 잡음제거 및 손실 코딩" },
      },
    },

    // UI Labels
    ui: {
      bookTitle: "데이터 분포의 심층 표현 학습",
      langLabel: "KO",
      brandHref: "index.html",
      searchPlaceholder: "페이지 검색…",
      menu: "메뉴",
      github: "GitHub",
      dateLocale: "ko-KR",
      lastUpdatedTemplate: "최종 업데이트: {date}",
      footer:
        "© {year} Sam Buchanan, Druv Pai, Peng Wang, and Yi Ma. All rights reserved.",
    },

    // Language options
    languages: {
      en: "English",
      zh: "中文",
      ko: "한국어",
    },

    // AI Chat interface
    chat: {
      title: "AI에게 질문하기",
      clear: "지우기",
      close: "닫기",
      send: "전송",
      feedback: "피드백",
      save: "저장",
      chatWithAI: "AI와 채팅",
      includeSelection: "현재 텍스트 선택 포함",
      selectionEmpty: "페이지에서 텍스트를 선택하여 컨텍스트로 포함하세요.",
      placeholder:
        '이 페이지에 대해 질문하기…\n\n다음을 추가하여 특정 내용에 대해 질문할 수도 있습니다:\n@chapter (예: "@3"), @chapter.section (예: "@3.1"), @chapter.section.subsection (예: "@3.1.2")\n@appendix (예: "@A"), @appendix.section (예: "@A.1"), @appendix.section.subsection (예: "@A.1.2")',
      systemPrompt:
        "당신은 《데이터 분포의 심층 표현 학습》 책 독자를 돕는 AI 도우미입니다. 명확하고 간결하게 답변하세요. 관련이 있다면 현재 페이지의 섹션이나 제목을 지적하세요.",
      askAITitle: "이 페이지에 대해 AI에게 질문하기",
      modelPicker: {
        title: "AI 모델 선택",
        options: [
          {
            id: "original",
            text: "🤖 BookQA-7B",
            description: "원본 모델",
            backgroundColor: "#2196F3",
            color: "white"
          },
          {
            id: "rag",
            text: "🧠 BookQA-7B+RAG",
            description: "RAG 강화 모델",
            backgroundColor: "#4CAF50",
            color: "white"
          }
        ]
      },
      tooltips: {
        feedback: "피드백 제공",
        clear: "대화 지우기",
        save: "채팅 기록 저장",
        close: "닫기",
      },
      alerts: {
        noChatHistory: "저장할 채팅 기록이 없습니다.",
        saveFailed: "채팅 기록 저장 실패. 다시 시도하세요.",
      },
      feedbackNotice: {
        title: "피드백 가이드",
        bodyMd: `
BookQA AI 도우미에 대한 피드백을 소중히 여기며 사용 경험을 듣고 싶습니다!

### 면책 조항
귀하의 쿼리는 문제 해결을 위해 로컬 서버에 익명으로 기록됩니다. 개인정보를 보호하기 위해 민감한 정보를 보내지 마세요.

### 🐛 버그 보고
AI 도우미 사용 중 문제가 발생하면 GitHub 저장소에 보고하세요:

- [버그 보고](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/issues)
- 질문과 AI 응답 포함
- 예상 동작과 실제 동작의 차이 설명

### 💡 기능 요청
AI 도우미 개선에 대한 아이디어가 있으신가요? 듣고 싶습니다:

- [새 이슈를 제기하여 토론](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/issues)
- 새로운 기능 또는 기능 제안
- 잘 지원되지 않는 사용 사례 공유

### 📚 일반 피드백
책이나 웹사이트에 대한 더 광범위한 피드백:

- [기여 가이드](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book#making-a-contribution)
- 저자에게 이메일 (연락처 정보는 책 참조)

**BookQA AI 도우미 개선을 도와주셔서 감사합니다!**
        `,
      },
    },

    // Sidebar sections
    sidebar: {
      search: "검색",
      navigation: "탐색",
      tableOfContents: "목차",
    },

    // Landing page content
    landing: {
      hero: {
        title: "데이터 분포의 심층 표현 학습",
        authors: "Sam Buchanan · Druv Pai · Peng Wang · Yi Ma",
        subtitle:
          "고차원 실세계 데이터로부터 심층 신경망이 왜 그리고 어떻게 간결하고 정보가 풍부한 표현을 학습하는지 탐구하는 완전 오픈소스 현대 교과서.",
        buttons: {
          readHtml: "책 읽기 (HTML)",
          readPdf: "책 읽기 (PDF)",
          readPdfZh: "책 읽기 (PDF-KO)",
          github: "GitHub 저장소",
        },
        cover: {
          alt: "책 표지: 데이터 분포의 심층 표현 학습",
          title: "책 읽기",
          version: "버전 1.0\n2025년 8월 18일 출시",
        },
      },
      sections: {
        about: {
          title: "책 소개",
          content: `
현재의 딥러닝 시대, 특히 "생성형 AI" 시대에서 초대형 생성 모델 훈련에 막대한 자원이 투입되고 있습니다. 지금까지 이러한 모델들은 내부 메커니즘이 불투명하여 해석 가능성, 신뢰성, 제어 가능성에서 어려움을 겪는 이해하기 어려운 "블랙박스"였습니다. 당연히 이러한 이해 부족은 과대광고와 두려움을 동시에 불러일으켰습니다.

본서는 표현 학습의 관점에서 대형 심층망의 메커니즘을 이해함으로써 "블랙박스를 여는" 것을 시도하며, 표현 학습은 심층 학습 모델의 경험적 능력의 주요 요인—아마도 가장 중요한 요인—입니다. 본서의 간략한 개요는 다음과 같습니다. 제1장은 책 전체를 관통하는 주요 주제를 요약합니다. 제2, 3, 4, 5장은 최적화와 정보 이론을 통해 현대 신경망 아키텍처의 설계 원리를 설명하며, 오랫동안 일종의 "연금술"로 묘사되어온 아키텍처 개발 과정을 기본 원리 도입 후 학부 수준의 선형대수 및 미적분 연습으로 단순화합니다. 제6장과 제7장은 이러한 원리의 응용을 논의하여 보다 패러다임적인 방식으로 문제를 해결하고, 설계상 효율적이고 해석 가능하며 제어 가능하면서도 기능면에서 유사한 블랙박스 모델에 뒤지지 않으며—때로는 능가하는—새로운 방법과 모델을 얻습니다. 제8장은 딥러닝의 잠재적 미래 방향, 표현 학습의 역할 및 일부 미해결 문제를 논의합니다.

본서는 선형대수, 확률론, 기계학습 배경을 가진 고학년 학부생 또는 대학원 1년차 학생을 대상으로 합니다. 수학적 사고가 강한 학생에게는 딥러닝의 첫 번째 과정으로 적합하지만, 딥러닝에 대한 초보적인 표면 지식이 있으면 책에서 논의된 관점과 기술을 더 잘 이해하는 데 도움이 될 수 있습니다.

본서의 시의성과 향후 몇 년간 딥러닝이 가질 수 있는 보편성을 고려하여, 본서를 완전히 오픈소스로 만들고 분야 전문가의 기여를 환영하기로 결정했습니다. 소스 코드는 [GitHub](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book)에서 확인할 수 있습니다. 심층 표현 학습에는 본서에서 다루지 않은 주제가 많이 있습니다. 전문가이시고 누락된 내용이 있다고 생각되면 [알려주시거나](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book?tab=readme-ov-file#raising-an-issue) [직접 기여](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book#making-a-contribution)해 주세요. 새로운 기여에 대해 유사한 품질 기준을 유지하도록 노력하며, [기여자 페이지](contributors.html)에서 기여를 인정할 것입니다.`,
        },
        acknowledgements: {
          title: '감사의 글',
          paragraphs: [
            '본서는 주로 지난 8년간 개발된 연구 성과를 기반으로 합니다. UC 버클리(2018)와 홍콩대학교(2023)의 너그러운 지원 덕분에 마이(Yi Ma) 교수는 지난 8년간 이 흥미진진한 새로운 연구 방향을 시작하고 집중할 수 있었습니다. 이 기간 동안 이 연구 방향과 관련하여 마이 교수와 그의 버클리 연구팀은 다음 연구 보조금의 지원을 받았습니다:',
            '이러한 연구 프로젝트의 재정 지원 없이는 본서가 완성될 수 없었을 것입니다. 저자들은 이 프로젝트에 참여한 동료와 학생들의 연구 성과로부터 큰 영감을 받았습니다.'
          ],
          grants: [
            '다대학 *THEORINET* 딥러닝 기초 프로젝트, Simons Foundation과 NSF 공동 지원 (DMS 보조금 #2031899)',
            '율 축소 최소화를 통한 *폐루프 데이터 전사* 프로젝트, ONR 지원 (보조금 번호 N00014-22-1-2102);',
            '저차원 구조를 위한 *딥러닝 원리적 접근* 프로젝트, NSF 지원 (CISE 보조금 #2402951).'
          ]
        }
      },
      footer: '© {year} Sam Buchanan, Druv Pai, Peng Wang, and Yi Ma. All rights reserved.'
    },

    // Contributors page content
    contributors: {
      title: "기여자",
      intro: "본서의 핵심 저자와 기여자.",
      sections: {
        authors: "저자",
        editors: "편집자",
        contentContributors: "콘텐츠 기여자",
        infraContributors: "웹사이트 / 인프라 기여자",
      },

      people: {
        "sam-buchanan": { desc: "주 저자." },
        "druv-pai": { desc: "주 저자." },
        "peng-wang": { desc: "저자, 중국어 번역." },
        "yi-ma": { desc: "수석 저자." },
        "stephen-butterfill": {
          desc: "PRs: [#14](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/14)",
        },
        "kerui-min": { desc: "중국어 번역." },
        "jan-cavel": {
          desc: "루마니아어 번역. PRs: [#16](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/16)",
        },
        "kevin-murphy": {
          desc: "광범위한 피드백. Issues: [#3](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/3), [#4](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/4), [#5](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/5), [#8](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/8), [#10](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/10), [#11](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/11), [#12](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/12), [#13](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/13)",
        },
        "yaodong-yu": { desc: "제4장 초기 텍스트 제공." },
        "tianzhe-chu": { desc: "AI 도구." },
        "ziyang-wu": { desc: "웹사이트 개발." },
        "jeroen-van-goey": { desc: "PRs: [#29](https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book/pull/29)"},
      },
    },

    // Community page content
    community: {
      title: "강좌, 강연 및 커뮤니티 기여",
      intro: "본서와 관련된 강좌, 강연, 튜토리얼 및 기타 커뮤니티 기여.",
      pending: "곧 공개 예정.",
      sections: {
        tutorials: "튜토리얼",
        translations: "커뮤니티 번역",
        courses: "강좌",
      },
      content: {
        courses: `
다음은 본서와 관련되거나 본서 자료를 사용한 대학 강좌입니다:

 - 홍콩대학교, DATA8014, 2025년 가을
 - 마카오대학교, CISC7402, 2025년 가을

강좌를 여기에 등재하고 싶으시면 GitHub에 이슈를 제출하고 강좌명, 학교, 학기, 링크 및 간단한 설명을 포함해 주세요.
        `,
        tutorials: `
아래는 본서 내용과 관련성이 높은 튜토리얼 또는 긴 강연입니다:
- [ICCV 2025 튜토리얼: 고차원 데이터로부터 저차원 모델 학습](https://low-dim-models-tutorials.github.io/iccv2025-tutorial/)
- [IAISS 2025 튜토리얼: 고차원 데이터로부터 저차원 모델 학습](https://2025.iaiss.cc/)
- [CVPR 2024 튜토리얼: 고차원 데이터로부터 저차원 모델 학습](https://low-dim-models-tutorials.github.io/cvpr2024-tutorial/)
        `,
        translations: `
다음은 (비공식) 커뮤니티 번역본입니다:
- [루마니아어 번역](../assets/book-main_ro.pdf), [Piatra Institute](https://piatra.institute/)의 Jan Cavel 기여.
        `,
      },
    },

    // AI Helpers page content
    aiHelpers: {
      title: "AI 도우미",
      intro:
        "이 페이지는 본서를 위한 간결한 AI 도우미를 제공합니다. 아래 BookQA를 사용해 보세요. 더 많은 것이 곧 공개될 예정입니다.",
      techDetails:
        "BookQA 시리즈는 독자가 책의 내용을 이해하도록 돕기 위해 설계되었습니다. 자료와 관련된 질문에 답하고 핵심 개념과 이론을 명확하게 설명할 수 있습니다.",
      lightRAGDetails:
        "LightRAG는 강좌 자료를 세밀하게 처리하는 포괄적인 파싱 파이프라인을 사용하며, 강의 슬라이드와 보충 문서에서 정확한 텍스트 조각을 추출합니다.",
      sections: {
        aiAssistants: "AI 도우미",
        aiTools: "AI 도구",
        customizedChatbots: "BookQA 시리즈",
        lightRAG: "LightRAG",
      },
      assistants: [
        {
          name: "BookQA-7B-Instruct",
          affil: "",
          link: "https://huggingface.co/tianzhechu/BookQA-7B-Instruct",
        },
        {
          name: "BookQA-32B-Instruct",
          affil: "",
          link: "https://huggingface.co/tianzhechu/BookQA-32B-Instruct",
        },
      ],
    },
  };

  // Helper functions to build navigation and TOC arrays
  window.BOOK_COMPONENTS.buildNavLinks = function () {
    return [
      { label: this.nav.contributors, href: "contributors.html" },
      { label: this.nav.aiHelpers, href: "ai_helpers.html" },
      {
        label: this.nav.howToContribute,
        href: "https://github.com/Ma-Lab-Berkeley/deep-representation-learning-book#making-a-contribution",
        external: true,
      },
      { label: this.nav.community, href: "community.html" },
    ];
  };

  window.BOOK_COMPONENTS.buildTOC = function () {
    return [
      { label: this.toc.preface, href: "Chx1.html" },
      {
        label: this.toc.chapters[1].title,
        subtitle: this.toc.chapters[1].subtitle,
        href: "Ch1.html",
      },
      {
        label: this.toc.chapters[2].title,
        subtitle: this.toc.chapters[2].subtitle,
        href: "Ch2.html",
      },
      {
        label: this.toc.chapters[3].title,
        subtitle: this.toc.chapters[3].subtitle,
        href: "Ch3.html",
      },
      {
        label: this.toc.chapters[4].title,
        subtitle: this.toc.chapters[4].subtitle,
        href: "Ch4.html",
      },
      {
        label: this.toc.chapters[5].title,
        subtitle: this.toc.chapters[5].subtitle,
        href: "Ch5.html",
      },
      {
        label: this.toc.chapters[6].title,
        subtitle: this.toc.chapters[6].subtitle,
        href: "Ch6.html",
      },
      {
        label: this.toc.chapters[7].title,
        subtitle: this.toc.chapters[7].subtitle,
        href: "Ch7.html",
      },
      {
        label: this.toc.chapters[8].title,
        subtitle: this.toc.chapters[8].subtitle,
        href: "Ch8.html",
      },
      {
        label: this.toc.appendices.A.title,
        subtitle: this.toc.appendices.A.subtitle,
        href: "A1.html",
      },
      {
        label: this.toc.appendices.B.title,
        subtitle: this.toc.appendices.B.subtitle,
        href: "A2.html",
      },
    ];
  };

  window.BOOK_COMPONENTS.coverImagePath = "../assets/book-cover.png";
  window.BOOK_COMPONENTS.bookPdfPath = "../assets/book-main_ko.pdf";
})();
