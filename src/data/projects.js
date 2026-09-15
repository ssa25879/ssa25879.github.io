const projects = [
    {
        id: 'food-info-app',
        category: '[APP / API]',
        title: '식품 정보 앱',
        description: '공공 OpenAPI를 활용해 식품의 영양 성분과 첨가물 정보를 조회할 수 있는 앱을 개발했습니다.',
        tags: ['Android', 'Java', 'OpenAPI'],
        detail: {
            period: '2022.03 - 2022.10',
            tags: ['Android', 'Java', 'OpenAPI', '팀 프로젝트', '팀장'],
            intention: [
                '다이어트를 할 때 음식 이름만으로 간단하게 칼로리 섭취량을 계산하고 조절할 수 있는 앱이 있으면 좋겠다는 생각에서 기획했습니다.',
            ],
            contributions: [
                {
                    title: '1. 팀장으로서의 역할 및 기여',
                    items: [
                        '팀원별 담당 파트를 분배하고, API 연동(Put/Get 등) 작업을 관리했습니다.',
                        '팀원들이 완료한 작업을 취합해 하나의 앱으로 통합했습니다.',
                    ],
                },
                {
                    title: '2. 공공데이터 OpenAPI 연동',
                    items: [
                        '공공데이터포털의 OpenAPI를 활용해 식품의 이름·종류에 따른 칼로리 등의 영양 정보를 조회하고 화면에 제공하는 기능을 구현했습니다.',
                    ],
                },
            ],
            retrospective:
                'OpenAPI에서 제공받는 JSON 데이터 중 기본적인 Put/Get 방식 외에 다른 방식으로 데이터를 받아와야 하는 경우가 있어, 이를 해결하는 과정에서 어려움을 겪었습니다. 이 과정을 통해 다양한 API 응답 구조를 다루는 방법을 익힐 수 있었습니다.',
        },
    },
    {
        id: 'sns-project',
        category: '[Web / SNS]',
        title: '마크다운 SNS 사이트',
        description:
            'ToastUI Editor를 기반으로 마크다운 문법을 이용해 글을 작성하고 공유할 수 있는 SNS 사이트를 제작했습니다.',
        tags: ['JavaScript', 'React', 'ToastUI'],
        detail: {
            period: '2023.04 - 2023.09',
            tags: ['ToastUI', 'JavaScript', 'React', '팀 프로젝트', '팀원'],
            intention: [
                '당시 마크다운을 지원하는 SNS가 없거나 적었고, 실제 SNS 이용 시 이미지를 올리면 게시글 하단부에만 이미지가 노출되는 점을 개선하고자 기획했습니다.',
            ],
            contributions: [
                {
                    title: '1. 마크다운 에디터 도입 (Toast UI Editor)',
                    items: [
                        '마크다운이 적용되는 에디터가 필요해, NHN에서 MIT 라이선스로 공개한 Toast UI Editor를 찾아 적용했습니다.',
                    ],
                },
                {
                    title: '2. DB 설계 및 전환',
                    items: [
                        '팀원이 구성한 DB를 MySQL로 변환해 적용했으나, 이후 서버 관리의 용이성을 높이기 위해 MS-SQL로 다시 수정해 적용했습니다.',
                    ],
                },
                {
                    title: '3. UI 구성 및 제작',
                    items: [
                        '다른 SNS 서비스의 UI를 참고하여 화면을 구성하고 제작했습니다.',
                    ],
                },
            ],
            retrospective:
                '최초 기획했던 MySQL 기반 DB 구성을 비용 등의 문제로 MS-SQL로 전환하는 과정에서, 기존과 다른 문법과 의미 차이로 인해 수정하는 데 어려움을 느꼈습니다.',
        },
    },
    {
        id: 'block-dodge',
        category: '[Game / Unity]',
        subtitle: 'Dodge 게임',
        title: 'Block Dodge',
        description: '날아오는 탄환을 피해 생존하는 게임입니다.',
        tags: ['Unity', 'C#', 'Game'],
        detail: {
            title: 'Dodge 게임 [Block Dodge]',
            period: '2026.04 - 2026.06',
            tags: ['Unity', 'C#', '3D', '개인 프로젝트'],
            intention: [
                '날아오는 탄환을 피하며 생존하는 게임으로, 기초적인 프로젝트에서 회피 효과를 구현하고 싶었고, 구현에 성공했습니다.',
            ],
            contributions: [
                {
                    title: '1. 탄환 회피 시스템',
                    items: [
                        '시간이 지날수록 빨라지는 탄환을 피하는 시스템을 구현했습니다. 기본적으로 모바일 조이스틱을 통해 캐릭터를 이동시켜 회피합니다.',
                    ],
                },
                {
                    title: '2. 회피(구르기) 기능',
                    items: [
                        '별도의 회피 버튼을 누르면 잠깐의 무적 판정과 함께, 이동 중이던 방향(입력이 없다면 정면)으로 회피 기동을 수행합니다.',
                    ],
                },
                {
                    title: '3. 패배 및 최고 점수 시스템',
                    items: [
                        '공격에 3회 피격되면 게임이 종료되며, 최고 점수를 저장해 다시 플레이하고 싶은 의욕을 부여합니다.',
                    ],
                },
            ],
            screenshots: [
                {
                    src: 'https://github.com/ssa25879/BlockDodge/blob/main/Dodge/Intro.jpg?raw=true',
                    alt: 'Block Dodge 스크린샷 1',
                },
                {
                    src: 'https://github.com/ssa25879/BlockDodge/blob/main/Dodge/Dodge_01.png?raw=true',
                    alt: 'Block Dodge 스크린샷 2',
                },
                {
                    src: 'https://github.com/ssa25879/BlockDodge/blob/main/Dodge/Dodge_InGame.jpg?raw=true',
                    alt: 'Block Dodge 스크린샷 3',
                },
                {
                    src: 'https://github.com/ssa25879/BlockDodge/blob/main/Dodge/Dodge_GameOver.jpg?raw=true',
                    alt: 'Block Dodge 스크린샷 4',
                },
            ],
            retrospective:
                '해당 방식의 플레이, 특히 회피 기능을 구현할 때 쿨타임과 버튼 UI를 연동하는 과정에서 어려움을 느껴 구현에 어려움을 겪었습니다.',
        },
    },
    {
        id: 'vr-rhythm-game',
        category: '[Game / Unity / VR]',
        subtitle: 'VR 리듬게임',
        title: 'VR BeatSaber',
        description:
            'Beat Saber에서 영감을 받아 제작한 VR 리듬게임입니다.',
        tags: ['Unity', 'VR', 'C#'],
        detail: {
            title: 'VR 리듬게임',
            period: '2026.05 - 2026.07',
            tags: ['Unity', 'VR', 'C#', '개인 프로젝트'],
            intention: [
                '현재 VR 게임 중 가장 유명하고 완성도 높은 게임인 비트세이버(Beat Saber)를 직접 제작해보고 싶다는 의도로 제작했습니다.',
            ],
            contributions: [
                {
                    title: '1. Saber 판정 시스템',
                    items: [
                        'VR 컨트롤러에 판정을 위한 Saber 오브젝트를 배치하고, 휘둘러지는 방향과 각도를 인식해 Hit / Good / Miss 판정을 부여했습니다.',
                        '만점 100,000점을 목표로 노트를 처리하는 구조로 설계했습니다.',
                    ],
                },
                {
                    title: '2. Combo / HP 상호작용',
                    items: [
                        '판정 성공·실패 여부에 따라 Combo 처리와 HP 처리 등의 상호작용을 구성했습니다.',
                    ],
                },
            ],
            screenshots: [
                {
                    src: 'https://github.com/ssa25879/VRRhythmGame/blob/main/VR/01_song_selection_retrowave_orange.png?raw=true',
                    alt: 'VR 리듬게임 스크린샷 1',
                },
                {
                    src: 'https://github.com/ssa25879/VRRhythmGame/blob/main/VR/02_gameplay_hit_effect.png?raw=true',
                    alt: 'VR 리듬게임 스크린샷 2',
                },
            ],
            videoUrl: 'https://youtu.be/1m5YNTJQpFM',
            retrospective:
                '기존에 VR 게임을 접해본 경험이 적어, VR 게임을 구성할 때 필수적으로 적용해야 하는 요소들을 알게 되는 계기가 되었습니다. 또한 Meta Quest 3S 기종을 기반으로 제작하며 해당 기기의 다양한 사용법을 익힐 수 있었습니다.',
        },
    },
    {
        id: 'ar-boardgame-guide',
        category: '[AR / Virnect Make]',
        title: '보드게임 AR 가이드 앱',
        description:
            'Virnect사와의 일경험 프로젝트를 통해 제작한 보드게임 규칙 안내용 AR 가이드 앱입니다. 노코딩 제작 프로그램인 Virnect Make를 활용해 개발했습니다.',
        tags: ['AR', 'Virnect Make', 'No-code'],
        detail: {
            period: '2026.05.18. - 2026.07.12. (8주)',
            tags: [
                'AR',
                'Virnect Make',
                'No-code',
                '일경험 프로젝트',
                '팀 프로젝트',
                '팀장',
            ],
            intention: [
                '기존 보드게임 설명서는 텍스트 중심으로 구성되어 있어 초보자가 보드게임을 이해하는 데 시간이 오래 걸립니다. AR 기술을 활용해 복잡한 규칙과 구성품 정보를 시청각적으로 제공함으로써 사용자의 학습 부담을 줄이고자 기획했습니다.',
            ],
            contributions: [
                {
                    title: '1. 팀장으로서의 역할 및 기여',
                    items: [
                        '전체 일정 관리, 프로젝트 방향 설정, 지원금 사용 관리, 기능 구현을 총괄했습니다.',
                    ],
                },
                {
                    title: '2. 콘텐츠 구조 설계',
                    items: [
                        '메인 화면과 선택 화면을 거쳐 사용자가 원하는 안내 콘텐츠를 확인할 수 있도록 구성했습니다.',
                        '선택지를 제공해 초보자가 규칙과 진행 흐름을 쉽게 이해할 수 있도록 지원했습니다.',
                    ],
                },
                {
                    title: '3. TTS 음성 안내',
                    items: [
                        'TTS 음성 안내를 통해 사용자가 설명을 귀로 듣고 이해할 수 있도록 구성했습니다.',
                    ],
                },
            ],
            previews: [
                {
                    src: 'https://drive.google.com/file/d/1l4KjZcEBIbafFBl0NhQgNqeVZxSqO049/preview',
                    title: '보드게임 AR 가이드 앱 미리보기 1',
                },
                {
                    src: 'https://drive.google.com/file/d/1vA0nqPWnWJTOhXXrWJW6W5yUDqahJizU/preview',
                    title: '보드게임 AR 가이드 앱 미리보기 2',
                },
                {
                    src: 'https://drive.google.com/file/d/1XG4FZa2xajKL8ShihYshEQnJySz0nWie/preview',
                    title: '보드게임 AR 가이드 앱 미리보기 3',
                },
            ],
            videoUrl: 'https://youtu.be/OPElYhlrmv8',
            retrospective:
                '팀원 전원이 처음 사용해보는 툴로 협업을 총괄하다 보니 기능 구현 부분을 분배하는 데 어려움을 느꼈습니다. 문제를 한 사람이 해결하기보다 팀원들과 함께 테스트하고 의견을 나누며 해결하는 협업 방식의 중요성을 배웠습니다.',
        },
    },
]

export default projects