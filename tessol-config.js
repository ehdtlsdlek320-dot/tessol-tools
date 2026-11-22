/* (주)테솔 제품 구성 선택기 v0.2 시안 — 2026-11-22
   상세 본문 문단 [[TESSOL-TOOL:config]] 자리에 그립니다(슬러그로 코드표 선택). */
(function () {
  'use strict';
  if (window.__TESSOL_CFG) return; window.__TESSOL_CFG = 'v0.3';

  var IMG = (function () { var c = document.currentScript && document.currentScript.src; return window.__TESSOL_CFG_IMG || (c ? c.replace(/\/[^\/]*$/, '') + '/cfg' : 'cfg'); })();
  var UNITS = { bar: 1, mbar: 1000, psi: 14.5038, kPa: 100, MPa: 0.1 };

  /* ── 제품별 코드표 ───────────────────────────── */
  var CFG = {
    'additel-a20': {
      title: 'A20 주문 모델 구성',
      src: 'Additel A20 데이터시트 Rev 20260928',
      model: 'A20',
      figure: {"base": "__IMG__/a20/", "k": 0.62, "boxH": 960, "lbl": 8.2, "top": {"E1": {"f": "top_E1.webp", "w": 155, "h": 697, "body": 357}, "E2": {"f": "top_E2.webp", "w": 152, "h": 396, "body": 56}, "E3": {"f": "top_E3.webp", "w": 153, "h": 453, "body": 107}, "E4": {"f": "top_E4.webp", "w": 153, "h": 421, "body": 82}, "NC": {"f": "top_NC.webp", "w": 153, "h": 344, "body": 0}}, "bot": {"P1": {"f": "bot_P1.webp", "w": 152, "h": 203}, "P2": {"f": "bot_P2.webp", "w": 151, "h": 203}, "P3": {"f": "bot_P3.webp", "w": 151, "h": 203}, "P4": {"f": "bot_P4.webp", "w": 152, "h": 204}, "P5": {"f": "bot_P5.webp", "w": 151, "h": 203}, "P6": {"f": "bot_P6.webp", "w": 151, "h": 203}, "P7": {"f": "bot_P7.webp", "w": 152, "h": 203}, "P8": {"f": "bot_P8.webp", "w": 152, "h": 203}, "P9": {"f": "bot_P9.webp", "w": 191, "h": 205}}, "topMap": {"E1": "E1", "E5": "E1", "E2": "E2", "E3": "E3", "E4": "E4", "NC": "NC", "EX": "NC"}, "topDefault": "E3", "botMap": {"P1": "P1", "P2": "P2", "P3": "P3", "P4": "P4", "P5": "P5", "P6": "P6", "P7": "P7", "P8": "P8", "P9": "P9", "P10": "P1", "P11": "P9", "P14": "P4"}, "approx": {"E5": "폴리우레탄 케이블은 케이블 사양만 다르고 외형은 같은 계열로 표시합니다.", "P10": "1/4″-20 UNC 암나사는 같은 암나사 계열 형상으로 표시합니다.", "P11": "G1/2A 수나사는 같은 대구경 수나사 계열 형상으로 표시합니다.", "P14": "1/2 NPT 수나사는 같은 NPT 계열 형상으로 표시합니다.", "P12": "VCR 연결부는 공식 외형 이미지가 없어 몸체만 표시합니다.", "P13": "VCR 연결부는 공식 외형 이미지가 없어 몸체만 표시합니다.", "PX": "협의 사양은 몸체만 표시합니다.", "EX": "협의 사양은 몸체만 표시합니다."}},
      groups: [
        { k: 'type', n: '압력 종류·범위', range: { G: [-1, 70], SG: [-1, 700], A: [0, 700] },
          o: [['G', '게이지압', '−1 ~ 70 bar'], ['SG', '실드 게이지압', '−1 ~ 700 bar'], ['A', '절대압', '0 ~ 700 bar']] },
        { k: 'acc', n: '정확도', o: [['A04', '±0.04 %FS', '종합 정밀도 0.1 %FS'], ['A10', '±0.1 %FS', '종합 정밀도 0.2 %FS'], ['A20', '±0.2 %FS', '종합 정밀도 0.5 %FS'], ['AX', '그 밖의 정확도', '협의']] },
        { k: 'comp', n: '온도 보상', o: [['TA', '−10 ~ 50 °C'], ['TB', '−20 ~ 80 °C'], ['TC', '−40 ~ 80 °C'], ['TD', '−40 ~ 125 °C'], ['TX', '그 밖의 범위', '협의']] },
        { k: 'out', n: '출력', o: [['RS', 'RS485 Modbus-RTU', '4선 · 8 ~ 32 VDC'], ['A', '4 ~ 20 mA', '2선 · 12 ~ 32 VDC'], ['B', '0 ~ 5 V', '3선'], ['C', '0 ~ 10 V', '3선'], ['D', '0.5 ~ 4.5 V', '3선'], ['X', '그 밖의 출력', '협의']] },
        { k: 'ec', n: '전기 연결', o: [['NC', '없음', '', 'cap'], ['E1', 'Raychem 케이블', '−55 ~ 120 °C · IP65', 'cable'], ['E2', 'Micro-DIN', '짝 플러그 포함 · IP65', 'din'], ['E3', 'M12×1 4핀', '짝 플러그 포함 · IP67', 'm12'], ['E4', 'MIL-C-26482 6핀', '−55 ~ 125 °C · IP67', 'mil'], ['E5', '폴리우레탄 케이블', '−40 ~ 85 °C · IP68', 'pu'], ['EX', '그 밖의 연결', '협의', 'x']] },
        { k: 'pc', n: '압력 연결', o: [['NC', '없음', '', 'none'], ['P1', 'G1/4 암나사', '', 'f'], ['P2', 'G1/4A 수나사', '', 'g'], ['P3', '1/4 NPT 암나사', '', 'f'], ['P4', '1/4 NPT 수나사', '', 'npt'], ['P5', '1/8 NPT 수나사', '', 'npt-s'], ['P6', 'G1/8A 수나사', '', 'g-s'], ['P7', 'M14×1.5 수나사', '', 'g'], ['P8', 'M12×1 수나사', '', 'g-s'], ['P9', 'M20×1.5 수나사', '', 'g-l'], ['P10', '1/4″-20 UNC 암나사', '', 'f-s'], ['P11', 'G1/2A 수나사', '', 'g-l'], ['P12', '1/8 VCR 수나사', '', 'vcr-s'], ['P13', '1/4 VCR 수나사', '', 'vcr'], ['P14', '1/2 NPT 수나사', '', 'npt-l'], ['PX', '그 밖의 연결', '협의', 'x']] },
        { k: 'cert', n: '교정 성적서', o: [['C1', '5점 전 범위 압력 성적서'], ['C2', '5점 전 범위·전 온도 성적서'], ['C3', 'CNAS 성적서'], ['C4', 'EN 10204 성적서'], ['CX', '그 밖의 성적서', '협의']] }
      ],
      strip: [['model', '모델'], ['type', '압력 종류'], ['acc', '정확도'], ['comp', '온도 보상'], ['out', '출력'], ['ec', '전기 연결'], ['pc', '압력 연결'], ['cert', '성적서'], ['range', '범위'], ['unit', '단위']],
      notes: ['몸체 φ19 × 44 mm, 하우징·다이어프램·압력 연결부 AISI 316L은 모든 모델에 공통입니다.', '전압 출력은 공급 전압이 출력 전압보다 3 V 이상 높아야 합니다.', '폴리우레탄 케이블(E5)은 IP68 용도입니다. 사용 환경을 요청 사항에 적어 주십시오.']
    }
  };

  /* ── 스타일(사이트 상세 체계: 남색 #154670, 회색 선, 각진 모서리) ── */
  var CSS = [
    '.tq{--ink:#111;--sub:#5f6368;--mute:#9aa0a6;--line:#d9dce0;--soft:#f4f5f7;--navy:#154670;--navy-2:#e8eef4;color:var(--ink);font-size:15px;line-height:1.5;margin:28px 0 36px;border-top:2px solid var(--navy)}',
    '.tq *{box-sizing:border-box}.tq button{font:inherit;color:inherit;background:none;border:0;padding:0;cursor:pointer}',
    '.tq-top{display:flex;justify-content:space-between;align-items:flex-end;gap:12px;padding:16px 0 12px}.tq-top h3{margin:0;font-size:19px;font-weight:700;letter-spacing:-.01em}.tq-top p{margin:2px 0 0;font-size:12.5px;color:var(--sub)}',
    '.tq-reset{font-size:13px!important;color:var(--sub)!important;text-decoration:underline;text-underline-offset:3px;white-space:nowrap}',
    /* 모델명 띠 */
    '.tq-code{display:flex;align-items:stretch;border:1px solid var(--line);background:#fff;overflow-x:auto;scrollbar-width:thin}',
    '.tq-seg{flex:1 0 auto;min-width:58px;padding:9px 10px 8px;text-align:left;border-bottom:2px solid transparent!important;display:flex;flex-direction:column;gap:3px}',
    '.tq-seg+.tq-seg{border-left:1px solid var(--line)!important}',
    '.tq-seg b{font-family:"SFMono-Regular",Consolas,"Liberation Mono",Menlo,monospace;font-size:16px;font-weight:700;letter-spacing:.02em;color:var(--ink);white-space:nowrap}',
    '.tq-seg span{font-size:11.5px;color:var(--sub);white-space:nowrap}.tq-seg.is-empty b{color:#c4c7cc;font-weight:400}',
    '.tq-seg.is-on{border-bottom-color:var(--navy)!important;background:var(--navy-2)}.tq-seg[data-s=model]{cursor:default;background:var(--soft)}',
    '.tq-code-ft{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:8px 0 0;font-size:12.5px;color:var(--sub)}.tq-code-ft strong{color:var(--navy)}',
    /* 본문 */
    '.tq-bd{display:grid;grid-template-columns:minmax(0,290px) minmax(0,1fr);gap:0;margin-top:18px;border:1px solid var(--line)}',
    '.tq-fig{background:linear-gradient(180deg,#fbfbfc 0,#eef0f3 100%);border-right:1px solid var(--line);padding:18px 16px 16px}.tq-fig-in{position:sticky;top:120px}',
    '.tq-ph{display:flex;align-items:center;justify-content:center;min-height:300px}.tq-stk{position:relative;display:flex;flex-direction:column;align-items:center;animation:tqf .22s ease-out}@keyframes tqf{from{opacity:.35}to{opacity:1}}.tq-pc{position:relative;flex:none}.tq-pc img{display:block;width:100%;height:100%;max-width:none}.tq-lb{position:absolute;left:12%;right:10%;color:#2e3338;opacity:.78;mix-blend-mode:multiply;line-height:1.28;font-family:Arial,Helvetica,sans-serif;letter-spacing:-.01em;pointer-events:none}.tq-lb b{display:block;font-style:italic;font-size:1.25em;color:#1d4f91;margin-bottom:.25em}.tq-lb span{display:block;white-space:nowrap;overflow:hidden;text-overflow:clip}.tq-floor{position:absolute;left:50%;bottom:-10px;width:170%;height:16px;transform:translateX(-50%);background:radial-gradient(closest-side,rgba(40,48,58,.28),rgba(40,48,58,0));z-index:-1}',
    '.tq-cap{border-top:1px solid var(--line);margin-top:8px;padding-top:10px;font-size:12.5px;line-height:1.55}.tq-cap div{display:grid;grid-template-columns:62px 1fr;gap:6px}.tq-cap dt{color:var(--sub)}.tq-cap dd{margin:0}',
    '.tq-steps{min-width:0}',
    '.tq-g{border-bottom:1px solid var(--line)}.tq-g:last-child{border-bottom:0}',
    '.tq-gh{width:100%;display:grid!important;grid-template-columns:30px 1fr auto 14px;align-items:center;gap:10px;padding:14px 18px!important;text-align:left}',
    '.tq-gh i{font-style:normal;font-size:12px;color:var(--mute);font-variant-numeric:tabular-nums}.tq-gh strong{font-size:15px;font-weight:700}',
    '.tq-gh em{font-style:normal;font-size:13px;color:var(--sub);text-align:right;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:240px}.tq-g.is-done .tq-gh em{color:var(--ink)}',
    '.tq-g.is-done .tq-gh i{color:var(--navy)}.tq-gh svg{width:12px;height:12px;transition:transform .2s}.tq-g.is-open .tq-gh svg{transform:rotate(180deg)}',
    '.tq-gb{display:none;padding:0 18px 16px 58px}.tq-g.is-open .tq-gb{display:block}.tq-g.is-open{background:#fff}',
    '.tq-ops{border-top:1px solid var(--line)}.tq .tq-fn{margin:6px 0 0!important;font-size:11.5px!important;line-height:1.4!important;color:var(--mute)}@media(min-width:761px){.tq-ops.is-wide{display:grid;grid-template-columns:1fr 1fr;column-gap:16px}.tq-ops.is-wide .tq-op{grid-template-columns:18px 40px 1fr}.tq-ops.is-wide .tq-op .s{grid-column:3;text-align:left;margin-top:-8px}.tq-ops.is-wide .tq-op .s:empty{display:none}}',
    '.tq-op{display:grid;grid-template-columns:18px 52px 1fr auto;align-items:center;gap:10px;padding:10px 10px 10px 10px;border-bottom:1px solid var(--line);cursor:pointer;position:relative}',
    '.tq-op:hover{background:var(--soft)}.tq-op input{position:absolute;opacity:0;pointer-events:none}',
    '.tq-op .r{width:16px;height:16px;border:1.5px solid #b0b5bb;border-radius:50%;display:block}',
    '.tq-op code{background:none;padding:0;font-family:"SFMono-Regular",Consolas,"Liberation Mono",Menlo,monospace;font-size:13.5px;font-weight:700;color:var(--navy)}',
    '.tq-op .n{font-size:14.5px;line-height:1.35}.tq-op .s{font-size:12.5px;color:var(--sub);text-align:right}',
    '.tq-op.is-sel{background:var(--navy-2)}.tq-op.is-sel .r{border-color:var(--navy);box-shadow:inset 0 0 0 3.5px #fff;background:var(--navy)}',
    '.tq-op input:focus-visible+.r{outline:2px solid var(--navy);outline-offset:2px}',
    '.tq-rg{margin-top:14px}.tq-rg-l{font-size:13.5px;font-weight:700;margin:0 0 6px}.tq-rg-row{display:grid;grid-template-columns:1fr 14px 1fr;align-items:center;gap:6px}',
    '.tq-rg input{width:100%;height:42px;border:1px solid var(--line);border-radius:0;padding:0 10px;font:inherit;font-size:15px;font-variant-numeric:tabular-nums;background:#fff}.tq-rg input:focus{outline:2px solid var(--navy);outline-offset:-2px}',
    '.tq-rg-row span{text-align:center;color:var(--sub)}',
    '.tq-units{display:flex;margin-top:8px;border:1px solid var(--line)}.tq-units button{flex:1;height:36px;font-size:13.5px!important;color:var(--sub)!important}.tq-units button+button{border-left:1px solid var(--line)!important}',
    '.tq-units button[aria-pressed=true]{background:var(--navy)!important;color:#fff!important;font-weight:700}',
    '.tq-hint{font-size:12.5px;color:var(--sub);margin:8px 0 0}.tq-hint.bad{color:#b3261e}.tq-hint b{font-family:"SFMono-Regular",Consolas,Menlo,monospace;color:var(--navy)}',
    '.tq-next{margin-top:12px;font-size:13.5px!important;font-weight:700;color:var(--navy)!important}',
    /* 마무리 */
    '.tq-end{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:24px;margin-top:18px;align-items:end}',
    '.tq-end label{display:block;font-size:13.5px;font-weight:700;margin:0 0 6px}.tq-end label span{font-weight:400;color:var(--sub);font-size:12.5px;margin-left:6px}',
    '.tq-end textarea{width:100%;height:96px;border:1px solid var(--line);border-radius:0;padding:10px;font:inherit;font-size:14.5px;resize:vertical}.tq-end textarea:focus{outline:2px solid var(--navy);outline-offset:-2px}',
    '.tq-act{display:grid;gap:8px}.tq-act button,.tq-act a{height:48px;display:flex!important;align-items:center;justify-content:center;font-size:15px;font-weight:700;border:1px solid var(--navy)!important;text-decoration:none}',
    '.tq-b1{color:var(--navy)!important;background:#fff!important}.tq-b2{background:var(--navy)!important;color:#fff!important}.tq-b2[aria-disabled=true]{background:#9fb0c1!important;border-color:#9fb0c1!important;cursor:default}',
    '.tq .tq-msg{font-size:12.5px!important;color:var(--sub);min-height:0;margin:0!important;line-height:1.4!important}.tq .tq-msg:empty{display:none}',
    '.tq-notes{margin:18px 0 0;padding:12px 0 0;border-top:1px solid var(--line);list-style:none;font-size:12.5px;color:var(--sub)}.tq-notes li{padding-left:10px;position:relative}.tq-notes li:before{content:"";position:absolute;left:0;top:.72em;width:4px;height:1px;background:var(--mute)}',
    '@media(max-width:760px){.tq-bd{grid-template-columns:1fr}.tq-fig{border-right:0;border-bottom:1px solid var(--line);padding:10px 14px}.tq-fig-in{position:static;display:flex;gap:14px;align-items:center}.tq-svg{width:120px;flex:none;zoom:.62}.tq-cap{border-top:0;margin:0;padding:0;flex:1;min-width:0}.tq-cap div{grid-template-columns:1fr;gap:1px;margin-bottom:10px}',
    '.tq-gh{padding:13px 14px!important;grid-template-columns:24px 1fr auto 12px}.tq-gh em{max-width:120px}.tq-gb{padding:0 14px 14px}.tq-op{grid-template-columns:18px 44px 1fr;padding:10px 6px}.tq-op .s{grid-column:3;text-align:left;margin-top:-6px}',
    '.tq-end{grid-template-columns:1fr;gap:12px}.tq-top h3{font-size:17px}}'
  ].join('');

  /* ── 외형: 제조사 공식 렌더 조각(전기 연결부+몸체 / 압력 연결부)을 실제 비율로 쌓음 ── */
  function figure(F, v, label) {
    var t = F.top[F.topMap[v.ec] || F.topDefault], b = F.botMap[v.pc] ? F.bot[F.botMap[v.pc]] : null;
    var k = F.k, tw = t.w * k, th = t.h * k, bh = b ? b.h * k : 0;
    var h = '<div class="tq-ph" style="height:' + Math.round(F.boxH * k) + 'px"><div class="tq-stk" style="width:' + Math.round(Math.max(tw, b ? b.w * k : 0)) + 'px">'
      + '<div class="tq-pc" style="width:' + tw.toFixed(1) + 'px;height:' + th.toFixed(1) + 'px"><img src="' + F.base + t.f + '" alt="" width="' + t.w + '" height="' + t.h + '" decoding="async">'
      + '<div class="tq-lb" style="top:' + (t.body * k + (th - t.body * k) * 0.16).toFixed(1) + 'px;font-size:' + (F.lbl * k).toFixed(2) + 'px">' + label + '</div></div>'
      + (b ? '<div class="tq-pc" style="width:' + (b.w * k).toFixed(1) + 'px;height:' + bh.toFixed(1) + 'px;margin-top:-1px"><img src="' + F.base + b.f + '" alt="" width="' + b.w + '" height="' + b.h + '" decoding="async"></div>' : '')
      + '<span class="tq-floor"></span></div></div>';
    return h;
  }
  /* ── 범위 코드: ABC = AB×10^C, R = 소수점, N = 음수 ─── */
  function sig2(a) { return Math.abs(parseFloat(a.toPrecision(2)) - a) < 1e-9 * Math.max(1, a); }
  function rcode(v) {
    if (v === 0) return '0';
    var n = v < 0 ? 'N' : '', a = Math.abs(v);
    if (!sig2(a)) return null;
    if (a < 100) return n + String(+a.toPrecision(2)).replace('.', 'R');
    var c = Math.floor(Math.log10(a) + 1e-9) - 1; return n + Math.round(a / Math.pow(10, c)) + c;
  }
  function nf(x) { return (+x.toPrecision(3)).toLocaleString('ko-KR'); }
  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var CHEV = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.5 L6 8 L10 4.5" fill="none" stroke="#5f6368" stroke-width="1.4"/></svg>';

  function render(host, d) {
    if (!document.getElementById('tq-css')) { var st = document.createElement('style'); st.id = 'tq-css'; st.textContent = CSS + CSS2; document.head.appendChild(st); }
    var S = { unit: 'bar', lo: '', hi: '' }, open = d.groups[0].k, G = {};
    d.groups.forEach(function (g) { G[g.k] = g; S[g.k] = ''; });

    var h = '<section class="tq" aria-label="' + esc(d.title) + '"><div class="tq-top"><div><h3>' + esc(d.title) + '</h3><p>항목을 고르면 주문 모델명과 외형이 함께 바뀝니다. 기준: ' + esc(d.src) + '</p></div><button type="button" class="tq-reset">처음부터</button></div>'
      + '<div class="tq-code" role="group" aria-label="주문 모델명">' + d.strip.map(function (s) { return '<button type="button" class="tq-seg" data-s="' + s[0] + '"><b></b><span>' + esc(s[1]) + '</span></button>'; }).join('') + '</div>'
      + '<div class="tq-code-ft"><span class="tq-full" aria-live="polite"></span><span class="tq-left"></span></div>'
      + '<div class="tq-bd"><div class="tq-fig"><div class="tq-fig-in"><div class="tq-svg"></div><dl class="tq-cap"></dl></div></div><div class="tq-steps">';
    d.groups.forEach(function (g, i) {
      h += '<div class="tq-g" data-g="' + g.k + '"><button type="button" class="tq-gh" aria-expanded="false"><i>' + (i < 9 ? '0' : '') + (i + 1) + '</i><strong>' + esc(g.n) + '</strong><em></em>' + CHEV + '</button><div class="tq-gb"><div class="tq-ops' + (g.o.length > 8 ? ' is-wide' : '') + '" role="radiogroup" aria-label="' + esc(g.n) + '">'
        + g.o.map(function (o) { return '<label class="tq-op" data-v="' + o[0] + '"><input type="radio" name="tq-' + g.k + '" value="' + o[0] + '"><span class="r"></span><code>' + o[0] + '</code><span class="n">' + esc(o[1]) + '</span><span class="s">' + esc(o[2] || '') + '</span></label>'; }).join('') + '</div>';
      if (g.range) h += '<div class="tq-rg"><p class="tq-rg-l">측정 범위</p><div class="tq-rg-row"><input class="tq-lo" inputmode="decimal" placeholder="하한" aria-label="범위 하한"><span>~</span><input class="tq-hi" inputmode="decimal" placeholder="상한" aria-label="범위 상한"></div>'
        + '<div class="tq-units" role="group" aria-label="단위">' + Object.keys(UNITS).map(function (u) { return '<button type="button" data-u="' + u + '" aria-pressed="' + (u === 'bar') + '">' + u + '</button>'; }).join('') + '</div><p class="tq-hint"></p><button type="button" class="tq-next">다음 항목</button></div>';
      h += '</div></div>';
    });
    h += '</div></div><div class="tq-end"><div><label for="tq-memo-' + d.model + '">요청 사항<span>수량, 사용 매체, 케이블 길이처럼 모델명에 없는 내용</span></label><textarea id="tq-memo-' + d.model + '" class="tq-memo"></textarea></div>'
      + '<div class="tq-act"><p class="tq-msg" aria-live="polite"></p><button type="button" class="tq-b1">모델명 복사</button><a class="tq-b2" href="/support/quote" aria-disabled="true">이 구성으로 견적 요청</a></div></div>'
      + '<ul class="tq-notes">' + d.notes.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '<li>견적 요청을 받으면 (주)테솔 담당자가 조합된 모델명을 제조사 기준으로 다시 확인해 회신합니다.</li></ul></section>';

    var box = document.createElement('div'); box.innerHTML = h; var w = box.firstChild; host.parentNode.replaceChild(w, host);
    var $ = function (s) { return w.querySelector(s); }, $$ = function (s) { return Array.prototype.slice.call(w.querySelectorAll(s)); };
    var opt = function (k, v) { return (G[k].o.filter(function (o) { return o[0] === v; })[0]) || null; };

    function range() {
      var r = { code: '', msg: '', bad: false }, t = S.type;
      if (!t) { r.msg = '압력 종류를 먼저 고르십시오.'; return r; }
      var L = G.type.range[t], k = UNITS[S.unit];
      r.msg = opt('type', t)[1] + ' 범위는 ' + nf(L[0] * k) + ' ~ ' + nf(L[1] * k) + ' ' + S.unit + '입니다.';
      if (S.lo === '' || S.hi === '') return r;
      var a = parseFloat(S.lo.replace(',', '.')), b = parseFloat(S.hi.replace(',', '.'));
      if (!isFinite(a) || !isFinite(b)) { r.bad = true; r.msg = '숫자로 입력해 주십시오.'; }
      else if (a >= b) { r.bad = true; r.msg = '상한은 하한보다 커야 합니다.'; }
      else if (a < L[0] * k - 1e-9 || b > L[1] * k + 1e-9) { r.bad = true; r.msg = '선택한 압력 종류의 범위를 벗어났습니다. ' + r.msg; }
      else { var ca = rcode(a), cb = rcode(b); if (ca === null || cb === null) { r.bad = true; r.msg = '범위 값은 유효숫자 두 자리까지 모델명에 들어갑니다. 예: 2.5, 25, 250'; } else { r.code = ca + '-' + cb; r.msg = '범위 코드 <b>' + r.code + '</b> (' + esc(S.lo) + ' ~ ' + esc(S.hi) + ' ' + S.unit + ')'; } }
      return r;
    }
    function done(k, R) { return k === 'type' ? !!(S.type && R.code) : !!S[k]; }

    function paint() {
      var R = range(), segs = {}, left = 0;
      segs.model = d.model; segs.range = R.code; segs.unit = R.code ? S.unit : '';
      d.groups.forEach(function (g) { segs[g.k] = S[g.k]; });
      $$('.tq-seg').forEach(function (b) {
        var s = b.getAttribute('data-s'), v = segs[s];
        b.querySelector('b').textContent = v || '··'; b.classList.toggle('is-empty', !v); if (!v) left++;
        var grp = (s === 'range' || s === 'unit') ? 'type' : s; b.classList.toggle('is-on', grp === open && s !== 'model');
      });
      var full = d.strip.map(function (s) { return segs[s[0]]; });
      var ok = !left; w.__code = ok ? full.join('-') : '';
      $('.tq-full').innerHTML = ok ? '주문 모델명 <strong>' + esc(w.__code) + '</strong>' : '고르지 않은 칸은 ·· 로 표시됩니다.';
      $('.tq-left').textContent = ok ? '구성 완료' : '남은 항목 ' + left + '개';
      d.groups.forEach(function (g) {
        var el = $('[data-g="' + g.k + '"]'), o = opt(g.k, S[g.k]), dn = done(g.k, R);
        el.classList.toggle('is-done', dn); el.classList.toggle('is-open', open === g.k);
        el.querySelector('.tq-gh').setAttribute('aria-expanded', open === g.k);
        el.querySelector('.tq-gh em').textContent = g.k === 'type' ? (o ? o[0] + ' ' + o[1] + (R.code ? ' · ' + S.lo + ' ~ ' + S.hi + ' ' + S.unit : '') : '선택 전') : (o ? o[0] + '  ' + o[1] : '선택 전');
        $$('[data-g="' + g.k + '"] .tq-op').forEach(function (l) { var on = l.getAttribute('data-v') === S[g.k]; l.classList.toggle('is-sel', on); l.querySelector('input').checked = on; });
      });
      var hint = $('.tq-hint'); hint.innerHTML = R.msg; hint.classList.toggle('bad', R.bad);
      var ec = opt('ec', S.ec), pc = opt('pc', S.pc);
      var F = d.figure; F.base = F.base.replace('__IMG__', IMG); var out = opt('out', S.out), acc = opt('acc', S.acc);
      var lab = '<b>Additel</b><span>Model: ' + esc(ok ? w.__code : d.model + (S.type ? '-' + S.type : '') + '-…') + '</span>'
        + (R.code ? '<span>Range: (' + esc(S.lo) + '~' + esc(S.hi) + ') ' + S.unit + '</span>' : '')
        + (acc ? '<span>Accuracy: ' + esc(acc[1].replace(/\s/g, '')) + '</span>' : '')
        + (out ? '<span>Output: ' + esc(out[1]) + '</span>' : '');
      var key = (S.ec || '') + '|' + (S.pc || ''), box = $('.tq-svg');
      if (box.__key !== key) { box.__key = key; box.innerHTML = figure(F, S, lab); } else { var lb = box.querySelector('.tq-lb'); if (lb) lb.innerHTML = lab; }
      var ap = [F.approx[S.ec], F.approx[S.pc]].filter(Boolean);
      $('.tq-cap').innerHTML = '<div><dt>전기 연결</dt><dd>' + (ec ? esc(ec[0] + ' ' + ec[1]) : '선택 전') + '</dd></div><div><dt>압력 연결</dt><dd>' + (pc ? esc(pc[0] + ' ' + pc[1]) : '선택 전') + '</dd></div>'
        + '<p class="tq-fn">' + (ap.length ? esc(ap.join(' ')) + ' ' : '') + 'Additel 공식 렌더 이미지를 실제 비율로 조합했습니다.</p>';
      $('.tq-b2').setAttribute('aria-disabled', ok ? 'false' : 'true');
    }
    function next(k) { var i = d.groups.map(function (g) { return g.k; }).indexOf(k), R = range(); for (var j = 1; j <= d.groups.length; j++) { var g = d.groups[(i + j) % d.groups.length]; if (!done(g.k, R)) return g.k; } return ''; }

    w.addEventListener('change', function (e) {
      var t = e.target; if (t.type !== 'radio') return; var k = t.name.slice(3); S[k] = t.value;
      if (k !== 'type') { paint(); setTimeout(function () { open = next(k); paint(); }, 160); } else { paint(); var lo = $('.tq-lo'); if (!S.lo) lo.focus(); }
    });
    w.addEventListener('input', function (e) { if (e.target.classList.contains('tq-lo')) S.lo = e.target.value.trim(); else if (e.target.classList.contains('tq-hi')) S.hi = e.target.value.trim(); else return; paint(); });
    w.addEventListener('click', function (e) {
      var u = e.target.closest('[data-u]'); if (u) { S.unit = u.getAttribute('data-u'); $$('[data-u]').forEach(function (b) { b.setAttribute('aria-pressed', b === u); }); paint(); return; }
      var gh = e.target.closest('.tq-gh'); if (gh) { var k = gh.parentNode.getAttribute('data-g'); open = open === k ? '' : k; paint(); return; }
      var sg = e.target.closest('.tq-seg'); if (sg) { var s = sg.getAttribute('data-s'); if (s === 'model') return; open = (s === 'range' || s === 'unit') ? 'type' : s; paint(); var el = $('[data-g="' + open + '"]'); if (el && el.scrollIntoView) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); return; }
      if (e.target.closest('.tq-next')) { open = next('type') || ''; paint(); return; }
      if (e.target.closest('.tq-reset')) { d.groups.forEach(function (g) { S[g.k] = ''; }); S.lo = S.hi = ''; $('.tq-lo').value = $('.tq-hi').value = ''; open = d.groups[0].k; paint(); return; }
      if (e.target.closest('.tq-b1')) { if (!w.__code) { say('모든 항목을 고른 뒤 복사할 수 있습니다.'); return; } copy(w.__code, function () { say('모델명을 복사했습니다.'); }); return; }
      var q = e.target.closest('.tq-b2'); if (q) { e.preventDefault(); if (!w.__code) { say('남은 항목을 먼저 골라 주십시오.'); return; } var m = $('.tq-memo').value.trim(), txt = '[구성 선택] ' + w.__code + (m ? '\n요청 사항: ' + m : ''); copy(txt, function () { say('구성 내용을 복사했습니다. 견적 문의 창의 문의 내용 칸에 붙여 넣어 주세요.'); setTimeout(function () { location.href = q.href + '?cfg=' + encodeURIComponent((w.__code + (m ? ' | ' + m : '')).slice(0, 220)); }, 1400); }); }
    });
    function say(t) { $('.tq-msg').textContent = t; }
    function copy(t, cb) { try { navigator.clipboard.writeText(t).then(cb, cb); } catch (e) { cb(); } }
    paint();
    return w;
  }
  /* ── 범용 구성 선택기(데이터 파일 cfg/d/<키>.json) ─────────────
     g: 항목 [{k,t,y:'one'|'many'|'qty'|'dig',r,o:[[코드,이름,보조,사진]],mx,n,w:[k,[코드]],none}]
     p: 모델명 조립 ["글자" | {g,pre,sep,suf}]   v: 유효 조합 {k:[...], r:[[코드...,품번,사진]]}
     x: 함께 못 고르는 짝 [[[k,c],[k,c]]]   off: [{if:[k,[c]],g,c:[...]}]   lim: [{gs:[k],mx,if:[k,[c]],mx2,m}]
     im: {d,r:[[k,c,파일]]}  b: 사진 기준 주소  ch: 사진 띠로 보여 줄 항목  cap: 사진 설명
     cmp: 외부 센서를 고르면 공식 사진 오려낸 조각으로 합성 {k:수량 항목, cap, b:[[k,c,파일,w,h,폭비,출구x,y,방향x,y,실폭mm]], p:{코드:[파일,w,h,끝x,y,길이mm]}} */
  var CSS2 = [
    '.tq2 .tq-ph{min-height:0;height:auto;padding:6px 0}.tq-photo{display:block;width:100%;max-width:258px;height:auto;margin:0 auto;aspect-ratio:1/1;object-fit:contain;mix-blend-mode:multiply;animation:tqf .22s ease-out}',
    '.tq2 img,.tq img{opacity:1!important;visibility:visible!important}.tq-chips{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0 4px}.tq-chip{width:62px;text-align:center;font-size:11px;line-height:1.25;color:var(--sub)}.tq-chip img{display:block;width:62px;height:62px;object-fit:contain;background:#fff;border:1px solid var(--line);mix-blend-mode:normal;margin-bottom:3px}',
    '.tq-full{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px;padding:10px 12px;border:1px solid var(--line);border-top:0;background:#fff;font-size:12.5px;color:var(--sub)}.tq-full strong{font-family:"SFMono-Regular",Consolas,"Liberation Mono",Menlo,monospace;font-size:15px;color:var(--ink);letter-spacing:.01em;word-break:break-all}.tq-full strong.is-part{color:var(--mute);font-weight:400}',
    '.tq-op.is-off{opacity:.38;cursor:not-allowed}.tq-op.is-off:hover{background:none}.tq-op .r.sq{border-radius:2px}.tq-op.is-sel .r.sq{box-shadow:inset 0 0 0 3px #fff}',
    '.tq-op.has-im{grid-template-columns:18px 46px 52px 1fr auto}.tq-op .im{width:46px;height:46px;object-fit:contain;background:#fff;border:1px solid var(--line)}.tq-op .im.ph{background:var(--soft)}',
    '.tq-qty{display:inline-flex;align-items:center;border:1px solid var(--line);background:#fff}.tq-qty button{width:30px;height:30px;font-size:16px!important;color:var(--navy)!important}.tq-qty button[disabled]{color:#c4c7cc!important;cursor:not-allowed}.tq-qty output{min-width:26px;text-align:center;font-variant-numeric:tabular-nums;font-weight:700}',
    '.tq-dig{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:10px}.tq-dig label{font-size:12px;color:var(--sub)}.tq-dig select{width:100%;height:40px;border:1px solid var(--line);border-radius:0;background:#fff;font:inherit;font-size:14px;padding:0 6px;margin-top:3px}',
    '.tq2 .tq-cap div{grid-template-columns:1fr;gap:0;margin-bottom:7px}.tq2 .tq-cap dd{font-weight:500}.tq-none{color:var(--sub)}.tq-g.is-hide{display:none}',
    '@media(min-width:761px){.tq2 .tq-op{grid-template-columns:18px minmax(52px,auto) 1fr;row-gap:2px}.tq2 .tq-op.has-im{grid-template-columns:18px 46px minmax(52px,auto) 1fr}.tq2 .tq-op>*{grid-row:1/span 2}.tq2 .tq-op .n{grid-row:1;align-self:end}.tq2 .tq-op .s{grid-row:2;grid-column:-2;text-align:left;align-self:start}.tq2 .tq-op .s:empty{display:none}.tq2 .tq-op .s:empty~*,.tq2 .tq-op.no-s .n{grid-row:1/span 2;align-self:center}.tq2 .tq-ops.is-wide .tq-op .s{margin-top:0}}',
    '@media(max-width:760px){.tq2 .tq-fig-in{display:block}.tq-photo{max-width:180px}.tq-op.has-im{grid-template-columns:18px 40px 1fr}.tq-op.has-im code{grid-column:3}.tq-op.has-im .im{grid-row:1/span 2;grid-column:2;width:40px;height:40px}.tq-op.has-im .n,.tq-op.has-im .s{grid-column:3}.tq-dig{grid-template-columns:repeat(2,1fr)}}'
  ].join('');

  function render2(host, d) {
    var base = String(d.b || '').replace('__IMG__', IMG), G = {}, S = {}, open = '', vis = {};
    d.g.forEach(function (g) { G[g.k] = g; S[g.k] = g.y === 'many' ? [] : g.y === 'qty' ? {} : g.y === 'dig' ? [] : ''; g.fix = g.y === 'one' && g.r && g.o.length === 1; if (g.fix) S[g.k] = g.o[0][0]; });
    var ico = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.5 6 8.5 10 4.5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
    var src = function (f) { return f ? (/^(https?:)?\/\//.test(f) ? f : base + f) : ''; };
    var w = document.createElement('section'); w.className = 'tq tq2'; w.setAttribute('aria-label', d.t);
    var strip = (d.mp ? '<button type="button" class="tq-seg" data-s="model"><b>' + esc(d.mp) + '</b><span>모델</span></button>' : '')
      + d.g.map(function (g) { return '<button type="button" class="tq-seg" data-s="' + g.k + '"><b></b><span>' + esc(g.st || g.t) + '</span></button>'; }).join('');
    var h = '<div class="tq-top"><div><h3>' + esc(d.t) + '</h3><p>' + ((d.im && d.im.r && d.im.r.length) || d.g.some(function (g) { return g.o.some(function (o) { return o[3]; }); }) || (d.v && d.v.r.some(function (r) { return r[r.length - 1]; })) ? '항목을 고르면 주문 모델명과 사진이 함께 바뀝니다. ' : '항목을 고르면 주문 모델명이 완성됩니다. ') + '기준: ' + esc(d.src) + '</p></div><button type="button" class="tq-reset">처음부터</button></div>'
      + '<div class="tq-code" role="group" aria-label="고른 항목">' + strip + '</div>'
      + '<div class="tq-full" aria-live="polite"><span>주문 모델명</span><strong></strong></div>'
      + '<div class="tq-code-ft"><span class="tq-st"></span><span class="tq-left"></span></div>'
      + '<div class="tq-bd"><div class="tq-fig"><div class="tq-fig-in"><div class="tq-ph"></div><div class="tq-chips"></div><dl class="tq-cap"></dl><p class="tq-fn">' + esc(d.cap || '제조사 공식 제품 사진입니다.') + '</p></div></div><div class="tq-steps">';
    var num = 0;
    d.g.forEach(function (g) {
      var oi = g.o.filter(function (o) { return o[0] !== ''; }), hasIm = oi.length && oi.every(function (o) { return o[3]; }); if (!g.fix) num++;
      h += '<div class="tq-g" data-g="' + g.k + '"><button type="button" class="tq-gh" aria-expanded="false"><i>' + ('0' + num).slice(-2) + '</i><strong>' + esc(g.t) + (g.r ? '' : ' <span class="tq-none">(선택)</span>') + '</strong><em></em>' + ico + '</button><div class="tq-gb">';
      if (g.y === 'dig') {
        h += (g.hint ? '<p class="tq-hint">' + esc(g.hint) + '</p>' : '') + '<div class="tq-dig">';
        for (var j = 0; j < (g.n || 4); j++) h += '<label>' + (g.lab ? esc(g.lab[j]) : (j + 1) + '번째') + '<select data-d="' + j + '"><option value="">선택</option>' + g.o.map(function (o) { return '<option value="' + esc(o[0]) + '">' + esc(o[0] + ' · ' + o[1]) + '</option>'; }).join('') + '</select></label>';
        h += '</div>';
      } else {
        h += '<div class="tq-ops' + (g.o.length > 8 && !hasIm ? ' is-wide' : '') + '">';
        if (g.y === 'one' && !g.r) h += '<label class="tq-op' + (hasIm ? ' has-im' : '') + '" data-v=""><input type="radio" name="tq2-' + g.k + '" value=""><span class="r"></span>' + (hasIm ? '<span class="im ph"></span>' : '') + '<code>—</code><span class="n">' + esc(g.none || '고르지 않음') + '</span><span class="s"></span></label>';
        g.o.forEach(function (o) {
          var tp = g.y === 'one' ? 'radio' : 'checkbox';
          h += '<label class="tq-op' + (hasIm ? ' has-im' : '') + '" data-v="' + esc(o[0]) + '">' + (g.y === 'qty' ? '' : '<input type="' + tp + '" name="tq2-' + g.k + '" value="' + esc(o[0]) + '">') + '<span class="r' + (tp === 'checkbox' || g.y === 'qty' ? ' sq' : '') + '"></span>'
            + (hasIm ? (o[3] ? '<img class="im" src="' + src(o[3]) + '" alt="" decoding="async">' : '<span class="im ph"></span>') : '')
            + '<code>' + (g.lc ? '' : esc(o[0])) + '</code><span class="n">' + esc(o[1]) + '</span>'
            + (g.y === 'qty' ? '<span class="s"><span class="tq-qty"><button type="button" data-q="-1" aria-label="빼기">−</button><output>0</output><button type="button" data-q="1" aria-label="더하기">+</button></span></span>' : '<span class="s">' + esc(o[2] || '') + '</span>') + '</label>';
        });
        h += '</div>';
      }
      h += (g.fn ? '<p class="tq-fn">' + esc(g.fn) + '</p>' : '') + '<button type="button" class="tq-next">다음 항목</button></div></div>';
    });
    h += '</div></div><div class="tq-end"><div><label for="tq-memo-' + d.k + '">요청 사항<span>수량, 사용 환경처럼 모델명에 없는 내용</span></label><textarea id="tq-memo-' + d.k + '" class="tq-memo"></textarea></div>'
      + '<div class="tq-act"><button type="button" class="tq-b1">모델명 복사</button><a class="tq-b2" href="/support/quote" aria-disabled="true">이 구성으로 견적 요청</a><p class="tq-msg" role="status"></p></div></div>'
      + '<ul class="tq-notes">' + (d.notes || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '<li>견적 요청을 받으면 (주)테솔 담당자가 조합된 모델명을 제조사 기준으로 다시 확인해 회신합니다.</li></ul>';
    w.innerHTML = h; host.parentNode.replaceChild(w, host);
    var $ = function (s) { return w.querySelector(s); }, $$ = function (s) { return Array.prototype.slice.call(w.querySelectorAll(s)); };
    var O = function (k, c) { return G[k].o.filter(function (o) { return o[0] === c; })[0]; };
    function has(k, cs) { var v = S[k]; if (G[k].y === 'qty') return cs.some(function (c) { return v[c] > 0; }); if (Array.isArray(v)) return cs.some(function (c) { return v.indexOf(c) > -1; }); return cs.indexOf(v) > -1; }
    function shown(g) { return !g.w || has(g.w[0], g.w[1]); }
    function count(k) { var v = S[k]; if (G[k].y === 'qty') return Object.keys(v).reduce(function (a, c) { return a + v[c]; }, 0); if (G[k].y === 'many') return v.length; return v ? 1 : 0; }
    function rows(skip) { if (!d.v) return null; return d.v.r.filter(function (r) { return d.v.k.every(function (k, i) { return k === skip || !(S[k] || vis[k]) || r[i] === S[k]; }); }); }
    function off(k, c) {
      if (d.v && d.v.k.indexOf(k) > -1) { var i = d.v.k.indexOf(k); if (!rows(k).some(function (r) { return r[i] === c; })) return '이 조합은 제조사 모델 목록에 없습니다'; }
      var why = '';
      (d.off || []).forEach(function (q) { if (!why && q.g === k && q.c.indexOf(c) > -1 && has(q.if[0], q.if[1])) why = q.m || '앞에서 고른 항목과 함께 쓸 수 없습니다'; });
      (d.x || []).forEach(function (pr) { for (var a = 0; a < 2; a++) { var me = pr[a], ot = pr[1 - a]; if (!why && me[0] === k && me[1] === c && !(ot[0] === k && ot[1] === c) && has(ot[0], [ot[1]])) why = '함께 고를 수 없는 항목이 이미 선택되어 있습니다'; } });
      return why;
    }
    function full(k) { // 개수 한도에 걸려 더 담을 수 없는지
      var g = G[k]; if (g.mx && count(k) >= g.mx) return true;
      return (d.lim || []).some(function (L) { if (L.gs.indexOf(k) < 0) return false; var mx = L.if && has(L.if[0], L.if[1]) ? L.mx2 : L.mx; return L.gs.reduce(function (a, j) { return a + (shown(G[j]) ? count(j) : 0); }, 0) >= mx; });
    }
    function done(g) { if (!shown(g)) return true; if (g.y === 'dig') return S[g.k].filter(Boolean).length === (g.n || 4); if (g.y === 'one') return !!S[g.k] || (!g.r && ((S[g.k] === '' && vis[g.k]) || !(d.v && d.v.k.indexOf(g.k) > -1))); return !g.r || count(g.k) > 0; }
    function val(k) { var g = G[k], v = S[k]; if (!shown(g)) return ''; if (g.y === 'one') return v; if (g.y === 'dig') return (g.srt ? v.slice().sort() : v).join(''); if (g.y === 'many') return g.o.filter(function (o) { return v.indexOf(o[0]) > -1; }).map(function (o) { return o[0]; }); var out = []; g.o.forEach(function (o) { for (var n = 0; n < (v[o[0]] || 0); n++) out.push(o[0]); }); return out; }
    function sub(t) { return String(t || '').replace(/\{(\w+)\}/g, function (m, k) { var x = G[k] ? val(k) : ''; return Array.isArray(x) ? x.join('') : (x || '‥'); }); }
    function build() {
      if (d.v) { var R = rows(); if (R.length === 1 && d.g.every(done)) return R[0][d.v.k.length] || ''; return ''; }
      return (d.p || []).map(function (q) {
        if (typeof q === 'string') return q;
        var x = val(q.g), g = G[q.g]; if (!shown(g)) return '';
        if (Array.isArray(x)) { if (!x.length) return g.r ? sub(q.pre) + '‥' : ''; return sub(q.pre) + x.join(sub(q.sep || '')) + sub(q.suf); }
        if (!x) return g.r || (g.y === 'dig') ? sub(q.pre) + '‥' + sub(q.suf) : ''; return sub(q.pre) + x + sub(q.suf);
      }).join('');
    }
    function photo() {
      var f = '';
      if (d.v) { var R = rows(); var i = d.v.k.length + 1; if (R.length && R.every(function (r) { return r[i] === R[0][i]; })) f = R[0][i] || ''; }
      if (!f && d.im) { (d.im.r || []).some(function (r) { if (has(r[0], [r[1]])) { f = r[2]; return true; } return false; }); f = f || d.im.d; }
      return f;
    }
    function label(k) { var g = G[k], x = val(k); if (!shown(g)) return ''; if (g.y === 'one') { var o = x && O(k, x); return o ? o[1] : (x === '' && vis[k] && !g.r ? (g.none || '고르지 않음') : ''); } if (g.y === 'dig') return x; if (g.y === 'qty') return g.o.filter(function (o) { return S[k][o[0]]; }).map(function (o) { return o[0] + (S[k][o[0]] > 1 ? ' ×' + S[k][o[0]] : ''); }).join(', '); return x.join(', '); }
    var lastPh = null, seen = {}, IC = {};
    function cmpSel() { // 합성할 하우징·센서 목록(없으면 null)
      var C = d.cmp; if (!C || !shown(G[C.k])) return null;
      var L = [].concat(val(C.k) || []).filter(function (c) { return C.p[c]; }).slice(0, 5); if (!L.length) return null;
      return { b: C.b.filter(function (r) { return has(r[0], [r[1]]); })[0] || C.b[0], L: L };
    }
    function cmpDraw(cv, q) {
      var fs = [q.b[2]].concat(q.L.map(function (c) { return d.cmp.p[c][0]; })).filter(function (f, i, a) { return a.indexOf(f) === i; }), left = fs.length, gone = 0;
      fs.forEach(function (f) { var im = IC[f]; if (!im) { im = IC[f] = new Image(); im.src = src(f); } if (im.complete) { left--; if (!im.naturalWidth) gone = 1; } else { im.addEventListener('load', tick); im.addEventListener('error', function () { gone = 1; tick(); }); } });
      function tick() { if (--left > 0 || cv.__q !== q) return; if (!gone) return go(); var f0 = photo(); cv.outerHTML = f0 ? '<img class="tq-photo" src="' + src(f0) + '" alt="' + esc(cv.getAttribute('aria-label')) + '">' : ''; }
      if (left <= 0) { left = 1; tick(); }
      function go() {
        if (cv.__q !== q) return;
        var x = cv.getContext('2d'), W = cv.width, H = cv.height, B = q.b, n = q.L.length, R = B[8] >= 0, hw = B[5] * W, hh = hw * B[4] / B[3], hx = R ? W * 0.05 : W * 0.95 - hw, hy = H * 0.05, k = hw / B[10];
        var A = [hx + B[6] * hw, hy + B[7] * hh], dir = [B[8], B[9]], pp = [-dir[1], dir[0]], cw = Math.max(W * 0.004, k * 1.75);
        var P = q.L.map(function (c) { var p = d.cmp.p[c]; return { p: p, im: IC[p[0]], h: p[5] * k, w: p[5] * k * p[1] / p[2] }; });
        var mx = Math.max.apply(null, P.map(function (s) { return s.h; })), f = Math.min(1, H * 0.4 / mx), x0 = R ? W * 0.3 : W * 0.06, x1 = R ? W * 0.94 : W * 0.7;
        if (n === 1) { x0 = R ? W * 0.5 : W * 0.26; x1 = x0 + W * 0.24; }
        P.forEach(function (s, i) {
          s.h *= f; s.w *= f; s.a = ((i - (n - 1) / 2) * (n > 3 ? 5 : 7) + (i % 2 ? 2 : -2) + (R ? -3 : 3)) * Math.PI / 180;
          var cx = x0 + (i + 0.5) * (x1 - x0) / n, by = H * (0.96 - (n > 2 && i % 2 ? 0.03 : 0));
          s.t = [cx + Math.sin(s.a) * s.h * 0.5, by - Math.cos(s.a) * s.h * (1 - s.p[4])];
        });
        x.clearRect(0, 0, W, H); x.lineCap = 'round'; x.lineJoin = 'round';
        var g = x.createRadialGradient(0, 0, 0, 0, 0, 1); g.addColorStop(0, 'rgba(30,34,40,.26)'); g.addColorStop(1, 'rgba(30,34,40,0)');
        x.save(); x.translate(hx + hw / 2, hy + hh * 0.97); x.scale(hw * 0.56, hh * 0.1); x.fillStyle = g; x.beginPath(); x.arc(0, 0, 1, 0, 7); x.fill(); x.restore();
        P.forEach(function (s, i) { // 케이블: 출구 → 하우징 모서리 바깥 경유점 → 센서, 그림자 → 본선 → 윤기
          var r = R ? i : n - 1 - i, o = ((n - 1) / 2 - i) * (R ? 1 : -1) * cw * 1.3, S = [A[0] + pp[0] * o, A[1] + pp[1] * o], T = s.t, up = [Math.sin(s.a), -Math.cos(s.a)];
          var M = [(R ? hx + hw + W * (0.03 + 0.028 * r) : hx - W * (0.03 + 0.028 * r)), hy + hh + H * (0.05 + 0.012 * r)], v = [(T[0] - M[0]) * 0.6, T[1] - M[1] + H * 0.2], vl = Math.sqrt(v[0] * v[0] + v[1] * v[1]); v = [v[0] / vl, v[1] / vl];
          var l1 = Math.abs(M[0] - S[0]) * 0.6 + W * 0.04, l2 = Math.max(M[1] - S[1], H * 0.12) * 0.55, l3 = (T[1] - M[1]) * 0.35, L2 = (T[1] - M[1]) * 0.45;
          var c = [S[0] - dir[0] * W * 0.03, S[1] - dir[1] * W * 0.03, S[0] + dir[0] * l1, S[1] + dir[1] * l1, M[0] - v[0] * l2, M[1] - v[1] * l2, M[0], M[1], M[0] + v[0] * l3, M[1] + v[1] * l3, T[0] + up[0] * L2, T[1] + up[1] * L2, T[0] - up[0] * s.h * 0.04, T[1] - up[1] * s.h * 0.04];
          function path(dx, dy) { x.beginPath(); x.moveTo(c[0] + dx, c[1] + dy); for (var j = 2; j < 14; j += 6) x.bezierCurveTo(c[j] + dx, c[j + 1] + dy, c[j + 2] + dx, c[j + 3] + dy, c[j + 4] + dx, c[j + 5] + dy); x.stroke(); }
          x.save(); x.strokeStyle = 'rgba(25,28,33,.16)'; x.lineWidth = cw * 1.5; x.shadowColor = 'rgba(25,28,33,.35)'; x.shadowBlur = W * 0.012; x.shadowOffsetY = W * 0.004; path(W * 0.004, H * 0.012); x.restore();
          x.strokeStyle = '#18191b'; x.lineWidth = cw; path(0, 0);
          x.strokeStyle = 'rgba(255,255,255,.2)'; x.lineWidth = cw * 0.28; path(-cw * 0.14, -cw * 0.2);
        });
        x.save(); x.shadowColor = 'rgba(30,34,40,.22)'; x.shadowBlur = W * 0.025; x.shadowOffsetY = W * 0.012; x.drawImage(IC[B[2]], hx, hy, hw, hh); x.restore();
        P.forEach(function (s) { x.save(); x.translate(s.t[0], s.t[1]); x.rotate(s.a); x.shadowColor = 'rgba(30,34,40,.3)'; x.shadowBlur = W * 0.012; x.shadowOffsetX = W * 0.003; x.shadowOffsetY = W * 0.008; x.drawImage(s.im, -s.p[3] * s.w, -s.p[4] * s.h, s.w, s.h); x.restore(); });
        cv.style.visibility = '';
      }
    }
    function paint() {
      if (open) seen[open] = 1;
      // 쓸 수 없게 된 선택 지우기
      d.g.forEach(function (g) { if (g.y === 'one' && S[g.k] && off(g.k, S[g.k])) S[g.k] = ''; });
      var code = build(), need = !d.need || d.need.some(function (k) { return shown(G[k]) && count(k) > 0 && !(G[k].y === 'qty' && Object.keys(S[k]).every(function (c) { return (d.nx || []).indexOf(c) > -1; })); }), ok = !!code && need && d.g.every(done) && code.indexOf('‥') < 0;
      w.__code = ok ? code : '';
      var fs = $('.tq-full strong'); fs.textContent = code || '‥'; fs.classList.toggle('is-part', !ok);
      var left = d.g.filter(function (g) { return shown(g) && !done(g) && (g.r || g.y === 'dig'); }).length;
      $('.tq-left').textContent = left ? '남은 항목 ' + left + '개' : '';
      $('.tq-st').innerHTML = ok ? '<strong>구성이 완성되었습니다.</strong>' : !need && d.g.every(done) ? esc(d.needm || '측정 센서를 한 개 이상 고르십시오.') : '고르지 않은 칸은 ‥ 로 표시됩니다.';
      $$('.tq-seg[data-s]').forEach(function (b) { var k = b.getAttribute('data-s'); if (k === 'model') return; var g = G[k], x = val(k), t = g.lc ? label(k) : Array.isArray(x) ? (g.y === 'qty' ? label(k).replace(/, /g, ' ') : x.join(' ')) : x; b.style.display = shown(g) ? '' : 'none'; b.querySelector('b').textContent = t || (done(g) && !g.r ? '—' : '‥'); b.classList.toggle('is-empty', !t); b.classList.toggle('is-on', open === k); });
      var nn = 0;
      d.g.forEach(function (g) {
        var el = $('[data-g="' + g.k + '"]'); if (shown(g) && !g.fix) el.querySelector('.tq-gh i').textContent = ('0' + (++nn)).slice(-2); el.classList.toggle('is-hide', !shown(g) || !!g.fix); el.classList.toggle('is-open', open === g.k); el.classList.toggle('is-done', done(g) && (count(g.k) > 0 || g.y === 'dig'));
        el.querySelector('.tq-gh').setAttribute('aria-expanded', open === g.k); el.querySelector('.tq-gh em').textContent = label(g.k) || '선택 전';
        if (g.y === 'dig') return;
        var isFull = full(g.k);
        $$('[data-g="' + g.k + '"] .tq-op').forEach(function (l) {
          var c = l.getAttribute('data-v'), sel = g.y === 'one' ? S[g.k] === c && (c !== '' || vis[g.k]) : g.y === 'many' ? S[g.k].indexOf(c) > -1 : (S[g.k][c] || 0) > 0;
          var why = c ? off(g.k, c) : ''; if (!why && !sel && g.y !== 'one' && isFull) why = '더 고를 수 있는 개수를 넘었습니다';
          l.classList.toggle('is-sel', sel); l.classList.toggle('is-off', !!why); l.title = why;
          var inp = l.querySelector('input'); if (inp) { inp.checked = sel; inp.disabled = !!why && !sel; }
          if (g.y === 'qty') { var n = S[g.k][c] || 0; l.querySelector('output').textContent = n; l.querySelector('[data-q="1"]').disabled = !!why || (g.q1 && g.q1.indexOf(c) > -1 && n >= 1); l.querySelector('[data-q="-1"]').disabled = !n; }
        });
      });
      var cq = cmpSel(), f = cq ? 'cmp:' + cq.b[2] + ':' + cq.L.join() : photo(), alt = esc((d.alt || d.t) + (code ? ' ' + code : ''));
      if (f !== lastPh) {
        lastPh = f; $('.tq-ph').innerHTML = cq ? '<canvas class="tq-photo" width="900" height="900" role="img" aria-label="' + alt + '" style="visibility:hidden"></canvas>' : f ? '<img class="tq-photo" src="' + src(f) + '" alt="' + alt + '" decoding="async">' : '';
        if (cq) { var cv = $('.tq-ph canvas'); cv.__q = cq; cmpDraw(cv, cq); }
        $('.tq-fig .tq-fn').textContent = cq && d.cmp.cap || d.cap || '제조사 공식 제품 사진입니다.';
      }
      var chips = []; (d.ch || []).forEach(function (k) { if (!shown(G[k])) return; [].concat(val(k) || []).filter(function (c, i, a) { return c && a.indexOf(c) === i; }).forEach(function (c) { var o = O(k, c); if (o && o[3]) chips.push('<span class="tq-chip"><img src="' + src(o[3]) + '" alt="' + esc(o[1]) + '">' + esc(o[0]) + '</span>'); }); });
      $('.tq-chips').innerHTML = chips.join(''); $('.tq-chips').style.display = chips.length ? '' : 'none';
      $('.tq-cap').innerHTML = (d.cp || d.g.slice(0, 3).map(function (g) { return g.k; })).filter(function (k) { return shown(G[k]); }).map(function (k) { return '<div><dt>' + esc(G[k].st || G[k].t) + '</dt><dd>' + esc(label(k) || '선택 전') + '</dd></div>'; }).join('');
      $('.tq-b2').setAttribute('aria-disabled', ok ? 'false' : 'true');
    }
    function next(k) { var ks = d.g.filter(function (g) { return shown(g) && !g.fix; }).map(function (g) { return g.k; }), i = ks.indexOf(k); for (var j = 1; j <= ks.length; j++) { var g = G[ks[(i + j) % ks.length]]; if (!done(g) || !seen[g.k]) return g.k; } return ''; }
    w.addEventListener('change', function (e) {
      var t = e.target, gEl = t.closest('[data-g]'); if (!gEl) return; var k = gEl.getAttribute('data-g'), g = G[k];
      if (t.tagName === 'SELECT') { S[k][+t.getAttribute('data-d')] = t.value; paint(); if (done(g)) setTimeout(function () { open = next(k); paint(); }, 160); return; }
      if (g.y === 'one') { S[k] = t.value; vis[k] = 1; paint(); setTimeout(function () { open = next(k); paint(); }, 160); return; }
      if (g.y === 'many') { var a = S[k], i = a.indexOf(t.value); if (t.checked && i < 0) a.push(t.value); if (!t.checked && i > -1) a.splice(i, 1); paint(); }
    });
    w.addEventListener('click', function (e) {
      var q = e.target.closest('[data-q]'); if (q) { e.preventDefault(); var l = q.closest('.tq-op'), k = l.closest('[data-g]').getAttribute('data-g'), c = l.getAttribute('data-v'); S[k][c] = Math.max(0, (S[k][c] || 0) + (+q.getAttribute('data-q'))); if (!S[k][c]) delete S[k][c]; paint(); return; }
      if (e.target.closest('.tq-op') && e.target.closest('[data-g]') && G[e.target.closest('[data-g]').getAttribute('data-g')].y === 'qty') { e.preventDefault(); return; }
      var s = e.target.closest('.tq-seg'); if (s && s.getAttribute('data-s') !== 'model') { open = s.getAttribute('data-s'); paint(); $('[data-g="' + open + '"]').scrollIntoView({ block: 'nearest', behavior: 'smooth' }); return; }
      var gh = e.target.closest('.tq-gh'); if (gh) { var k2 = gh.parentNode.getAttribute('data-g'); open = open === k2 ? '' : k2; paint(); return; }
      var nx = e.target.closest('.tq-next'); if (nx) { var k3 = nx.closest('[data-g]').getAttribute('data-g'); if (G[k3].y === 'one' && !G[k3].r) vis[k3] = 1; open = next(k3); paint(); return; }
      if (e.target.closest('.tq-reset')) { d.g.forEach(function (g) { S[g.k] = g.y === 'many' || g.y === 'dig' ? [] : g.y === 'qty' ? {} : g.fix ? g.o[0][0] : ''; }); vis = {}; $$('.tq-dig select').forEach(function (x) { x.value = ''; }); open = (d.g.filter(function (g) { return !g.fix; })[0] || d.g[0]).k; paint(); return; }
      if (e.target.closest('.tq-b1')) { if (!w.__code) { say('모든 항목을 고른 뒤 복사할 수 있습니다.'); return; } copy(w.__code, function () { say('모델명을 복사했습니다.'); }); return; }
      var b2 = e.target.closest('.tq-b2'); if (b2) { e.preventDefault(); if (!w.__code) { say('남은 항목을 먼저 골라 주십시오.'); return; } var m = $('.tq-memo').value.trim(), txt = '[구성 선택] ' + (d.alt || d.t) + '\n모델명: ' + w.__code + (m ? '\n요청 사항: ' + m : ''); copy(txt, function () { say('구성 내용을 복사했습니다. 견적 문의 창의 문의 내용 칸에 붙여 넣어 주세요.'); setTimeout(function () { location.href = b2.href + '?cfg=' + encodeURIComponent(((d.alt || d.t) + ' | ' + w.__code + (m ? ' | ' + m : '')).slice(0, 220)); }, 1400); }); }
    });
    function say(t) { $('.tq-msg').textContent = t; }
    function copy(t, cb) { try { navigator.clipboard.writeText(t).then(cb, cb); } catch (e) { cb(); } }
    open = (d.g.filter(function (g) { return !g.fix; })[0] || d.g[0]).k; paint();
    return w;
  }

  window.__TESSOL_CFG_RENDER = render; window.__TESSOL_CFG_RENDER2 = render2; window.__TESSOL_CFG_DATA = CFG;

  function boot() {
    var key = location.pathname.split('/').filter(Boolean).pop() || '';
    Array.prototype.forEach.call(document.querySelectorAll('p, div.ce-paragraph'), function (p) {
      var m = (p.textContent || '').trim().match(/^\[\[TESSOL-TOOL:config(?::([a-z0-9-]+))?\]\]$/i);
      if (!m || p.getAttribute('data-tq')) return; p.setAttribute('data-tq', '1'); var k = (m[1] || key).toLowerCase(), d = CFG[k];
      if (d) { render(p, d); return; }
      p.style.display = 'none';
      fetch(IMG + '/d/' + k + '.json').then(function (r) { if (!r.ok) throw 0; return r.json(); }).then(function (j) {
        if (!document.getElementById('tq-css')) { var st = document.createElement('style'); st.id = 'tq-css'; st.textContent = CSS + CSS2; document.head.appendChild(st); }
        j.k = k; p.style.display = ''; render2(p, j);
      }).catch(function () { p.removeAttribute('data-tq'); });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  window.addEventListener('load', boot); window.addEventListener('pageshow', boot); var bn = 0; (function rb() { boot(); if (++bn < 16) setTimeout(rb, 750); })();
})();
