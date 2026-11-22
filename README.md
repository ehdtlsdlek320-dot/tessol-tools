# tessol-tools

(주)테솔 홈페이지(www.tessol.com) 실무 계산 도구 스크립트입니다.

- 노점·상대습도 계산기 (`dewpoint`)
- 온도 매핑 센서 개수 계산기 (`mapping`)
- 평균 동적 온도(MKT) 계산기 (`mkt`)
- 교정 정확도 비율(TUR) 계산기 (`tur`)
- 온도 매핑 준비 점검표 (`mapcheck`)

페이지 본문 문단에 `[[TESSOL-TOOL:이름]]`을 넣으면 그 자리에 도구가 그려집니다.
입력값은 브라우저 안에서만 계산하며 서버로 보내지 않습니다.

## 제품 구성 선택기 (`tessol-config.js`)

상품 상세 본문 문단에 `[[TESSOL-TOOL:config]]`(또는 `[[TESSOL-TOOL:config:슬러그]]`)를 넣으면 주문 모델명 조합기와 실사 외형 조합 이미지가 그려집니다.
제품별 주문 코드표는 `tessol-config.js`의 `CFG`에, 외형 이미지 조각은 `cfg/<제품>/`에 있습니다.
