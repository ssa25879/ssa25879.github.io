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
    },
    {
        id: 'block-dodge',
        category: '[Game / Unity]',
        subtitle: 'Dodge 게임',
        title: 'Block Dodge',
        description: '날아오는 탄환을 피해 생존하는 게임입니다.',
        tags: ['Unity', 'C#', 'Game'],
    },
    {
        id: 'vr-rhythm-game',
        category: '[Game / Unity / VR]',
        subtitle: 'VR 리듬게임',
        title: 'VR BeatSaber',
        description:
            'Beat Saber에서 영감을 받아 제작한 VR 리듬게임입니다.',
        tags: ['Unity', 'VR', 'C#'],
    },
    {
        id: 'ar-boardgame-guide',
        category: '[AR / Virnect Make]',
        title: '보드게임 AR 가이드 앱',
        description:
            'Virnect사와의 일경험 프로젝트를 통해 제작한 보드게임 규칙 안내용 AR 가이드 앱입니다. 노코딩 제작 프로그램인 Virnect Make를 활용해 개발했습니다.',
        tags: ['AR', 'Virnect Make', 'No-code'],
    },
]

export default projects