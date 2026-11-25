/* (주)테솔 실무 계산 도구 v1.3 — 2026-11-22
   페이지 본문의 문단 [[TESSOL-TOOL:이름]] 자리에 계산기를 그립니다.
   이름: dewpoint, mapping, mkt, tur, mapcheck, regcheck */
(function () {
  'use strict';
  if (window.__TESSOL_TOOLS) return; window.__TESSOL_TOOLS = 'v1.4';

  var P = function (u) { return u; };
  var REC = {
    dewpoint: [
      ['JRI Nano SPY TH High Accuracy 고정밀 온습도 로거', '/products/logger/wireless-data-logger/jri-nano-spy-th-high-precision', '창고·클린룸 상시 감시'],
      ['JRI Precision TH 온습도 트랜스미터', '/products/logger/sensor-probe/jri-precision-th-transmitter', '설비 연동(아날로그 출력)'],
      ['Baluntech BL783 노점계', '/products/calibration/standard-dew-point-meter/baluntech-bl783', '현장 노점 직접 측정'],
      ['Dickson 스마트-센서™(온/습도)', '/products/logger/sensor-probe/dickson-cobalt-x-universal-humidity-co2-sensors-2', 'Cobalt X 무선 감시'],
      ['GEO Calibration 1850-2 정밀 노점계', '/products/calibration/humidity-generator/geo-chilled-mirror-1850-2', '교정실 기준기']
    ],
    mapping: [
      ['JRI Mapping Kit 15점 Nova SPY Digital', '/products/logger/temperature-profiling-system/jri-mapping-kit-nova-spy', '챔버·냉장고 15점 매핑'],
      ['JRI Nova SPY Digital 무선 로거', '/products/logger/wireless-data-logger/jri-nova-spy-digital', '창고 격자 배치'],
      ['JRI Nova SPY T Ambient 주변 온도 로거', '/products/logger/wireless-data-logger/jri-nova-spy-t-ambient', '상온 창고'],
      ['Dickson Cobalt X™ 모니터링 데이터로거', '/products/logger/temperature-logger/dickson-cobalt-x', '매핑 후 상시 감시'],
      ['MadgeTech ULT90 초저온 냉동고 밸리데이션 시스템', '/products/logger/temperature-logger/madgetech-ult90', '-80 °C 냉동고']
    ],
    mkt: [
      ['JRI Nova SPY Digital 무선 로거', '/products/logger/wireless-data-logger/jri-nova-spy-digital', '보관 구역 연속 기록'],
      ['JRI Nano SPY TH 소형 무선 온습도 로거', '/products/logger/wireless-data-logger/jri-nano-spy-th', '약국·보관실'],
      ['Dickson Cobalt X™ 모니터링 데이터로거', '/products/logger/temperature-logger/dickson-cobalt-x', '클라우드 기록·경보']
    ],
    tur: [
      ['Fluke Calibration 1523/1524 온도미터', '/products/calibration/portable-temperature-calibrator/fluke-1524', '온도 기준기'],
      ['Fluke Calibration 9142/9143/9144 현장용 드라이웰', '/products/calibration/dry-block/fluke-9142-9143-9144-2', '현장 온도 교정'],
      ['Fluke Calibration 1586A Super-DAQ', '/products/logger/data-acquisition/fluke-calibration-1586a', '다채널 온도 교정'],
      ['Fluke Calibration 5128A 습도 발생기', '/products/calibration/humidity-calibrator-field/fluke-5128a', '습도 교정']
    ],
    regcheck: [
      ['JRI Nova SPY Digital 무선 로거', '/products/logger/wireless-data-logger/jri-nova-spy-digital', '자동 온도 기록·경보'],
      ['JRI Nova SPY T Ambient 주변 온도 로거', '/products/logger/wireless-data-logger/jri-nova-spy-t-ambient', '보관실·창고'],
      ['Dickson Cobalt X™ 모니터링 데이터로거', '/products/logger/temperature-logger/dickson-cobalt-x', '냉장·냉동 설비 감시'],
      ['Fluke Calibration 1523/1524 온도미터', '/products/calibration/portable-temperature-calibrator/fluke-1524', '온도계 자체 교정']
    ],
    mapcheck: [
      ['JRI Mapping Kit 15점 Nova SPY Digital', '/products/logger/temperature-profiling-system/jri-mapping-kit-nova-spy', '매핑 키트'],
      ['JRI Nova SPY Digital 무선 로거', '/products/logger/wireless-data-logger/jri-nova-spy-digital', '창고 격자 배치'],
      ['Dickson Cobalt X™ 모니터링 데이터로거', '/products/logger/temperature-logger/dickson-cobalt-x', '매핑 후 상시 감시']
    ]
  };

  var CSS = '.tt{--tt-ink:#0a0a0a;--tt-sub:#5b5b5f;--tt-line:#d1d1d1;--tt-soft:#f5f5f5;--tt-acc:#154670;--tt-dark:#154670;font-family:inherit;color:var(--tt-ink);border:1px solid var(--tt-line);background:#fff;margin:24px 0 !important;max-width:100%;font-size:15px;line-height:1.5}'
    + '.tt *{box-sizing:border-box}.tt .tt-hd{background:var(--tt-dark);color:#fff;padding:13px 20px;font-size:16px;font-weight:700;display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 12px}.tt .tt-hd small{font-weight:400;color:#c8d3de;font-size:12.5px}'
    + '.tt .tt-bd{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr)}.tt .tt-in{padding:20px}.tt .tt-out{padding:20px 22px;background:var(--tt-soft);border-left:1px solid var(--tt-line)}'
    + '@media(max-width:760px){.tt .tt-bd{grid-template-columns:1fr}.tt .tt-out{border-left:0;border-top:1px solid var(--tt-line)}.tt .tt-in,.tt .tt-out{padding:16px}.tt .tt-hd{padding:12px 16px}}'
    + '.tt label{display:block;font-size:13.5px;font-weight:700;margin:0 0 6px}.tt .tt-f{margin-bottom:14px}.tt .tt-f:last-child{margin-bottom:0}.tt .tt-row{display:flex;gap:8px;align-items:center}'
    + '.tt input[type=number],.tt select,.tt textarea{width:100%;font:inherit;font-size:16px;height:42px;padding:0 10px;border:1px solid var(--tt-line);background:#fff;color:var(--tt-ink);border-radius:0;font-variant-numeric:tabular-nums}.tt textarea{height:auto;min-height:150px;padding:8px 10px;font-family:Consolas,monospace;font-size:13px}'
    + '.tt input:focus,.tt select:focus,.tt textarea:focus{outline:2px solid var(--tt-dark);outline-offset:-2px}.tt .tt-u{font-size:13.5px;color:var(--tt-sub);white-space:nowrap;min-width:36px}'
    + '.tt .tt-seg{display:flex;border:1px solid var(--tt-line)}.tt .tt-seg button{flex:1;font:inherit;font-size:14px;padding:9px 8px;border:0;border-radius:0;background:#fff;cursor:pointer;color:var(--tt-sub)}.tt .tt-seg button+button{border-left:1px solid var(--tt-line)}.tt .tt-seg button[aria-pressed=true]{background:var(--tt-dark);color:#fff;font-weight:700}'
    + '.tt .tt-big{font-size:40px;font-weight:700;line-height:1.15;letter-spacing:-.02em;font-variant-numeric:tabular-nums}.tt .tt-big small{font-size:17px;font-weight:400;margin-left:6px;color:var(--tt-sub)}.tt .tt-lab{font-size:13px;color:var(--tt-sub);margin-bottom:4px}'
    + '.tt .tt-kv{display:grid;grid-template-columns:1fr auto;font-size:14px;margin-top:14px;border-top:1px solid var(--tt-line)}.tt .tt-kv>*{padding:7px 0;border-bottom:1px solid #e4e4e4}.tt .tt-kv span{color:var(--tt-sub)}.tt .tt-kv b{font-variant-numeric:tabular-nums;text-align:right;padding-left:12px}'
    + '.tt p.tt-note,.tt .tt-note{font-size:13px !important;color:var(--tt-sub) !important;line-height:1.65 !important;margin:12px 0 0 !important;font-weight:400 !important;letter-spacing:0 !important}'
    + '.tt .tt-flag{display:inline-block;font-size:13px;font-weight:700;padding:3px 8px;margin-top:10px;border:1px solid currentColor}.tt .tt-ok{color:#1d7a46 !important}.tt .tt-warn{color:#9a5b00 !important}.tt .tt-bad{color:#b3261e !important}'
    + '.tt .tt-rec{border-top:1px solid var(--tt-line);padding:14px 20px 16px}.tt .tt-rec h4{font-size:13.5px !important;margin:0 0 8px !important;font-weight:700}.tt .tt-rec ul{list-style:none !important;margin:0 !important;padding:0 !important;display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:8px 20px}'
    + '.tt .tt-rec li{list-style:none !important;margin:0 !important;padding:0 !important;font-size:14px !important;line-height:1.45 !important}.tt .tt-rec li::before,.tt .tt-rec li::marker{content:none !important;display:none !important}'
    + '.tt .tt-rec a{color:var(--tt-ink) !important;text-decoration:underline !important;text-underline-offset:3px;padding:0 !important;margin:0 !important}.tt .tt-rec a:hover{color:var(--tt-dark) !important}.tt .tt-rec span{color:var(--tt-sub);font-size:12.5px;display:block}@media(max-width:760px){.tt .tt-rec{padding:14px 16px}}'
    + '.tt table{width:100%;border-collapse:collapse;font-size:13px;margin-top:12px}.tt th,.tt td{border-bottom:1px solid var(--tt-line);padding:6px 4px;text-align:left}.tt td.n{text-align:right;font-variant-numeric:tabular-nums}'
    + '.tt .tt-ck li{list-style:none !important;margin:0 0 8px !important;padding:0 !important;font-size:14px !important;line-height:1.5 !important}.tt .tt-ck li::before,.tt .tt-ck li::marker{content:none !important;display:none !important}.tt .tt-ck ul{padding:0 !important;margin:0 0 14px !important}.tt .tt-ck h5{font-size:13.5px;margin:14px 0 8px;font-weight:700}'
    + '.tt .tt-ck label{font-weight:400;display:flex;gap:8px;margin:0;cursor:pointer}.tt .tt-ck input{margin-top:4px;flex:none}.tt input[type=checkbox]{accent-color:var(--tt-dark)}'
    + '.tt .tt-bar{height:6px;background:#e3e3e3;margin-top:10px}.tt .tt-bar i{display:block;height:100%;background:var(--tt-dark)}.tt .tt-btn{font:inherit;font-size:13.5px;padding:8px 14px;border:1px solid var(--tt-ink);border-radius:0;color:var(--tt-ink);background:#fff;cursor:pointer;margin:10px 8px 0 0}.tt .tt-btn:hover{background:var(--tt-ink);color:#fff}';

  /* /tools/ 페이지 배치: 배너 히어로 대신 사이트 기본 하위 페이지 머리(경로 + 제목), 도구 이동 메뉴, 모음 페이지 목록 */
  var LAY = ''
    + 'html.tt-page .page-builder-view{padding-top:0 !important}.tt-head{padding-top:140px}.tt-bc{display:flex;flex-wrap:wrap;align-items:center;gap:4px;list-style:none;margin:0;padding:14px 0}.tt-bc li{display:flex;align-items:center;margin:0;padding:0;font-size:16px;line-height:24px;color:#394147}.tt-bc li::before{content:none}'
    + '.tt-bc a,.tt-bc span{color:#394147;text-decoration:none;padding:6px 0}.tt-bc a:hover{text-decoration:underline}.tt-bc__home{display:flex;align-items:center;gap:2px}.tt-bc__home img,.tt-bc__sep img{display:block;width:12px;height:12px}.tt-bc__home span{padding:0}.tt-bc__sep{width:16px;justify-content:center}'
    + '.tt-title{margin:0 0 14px;padding:0;font-size:43px;font-weight:700;line-height:1.3;color:#131313}.tt-sub{margin:0;font-size:17px;line-height:1.7;color:#394147}'
    + '@media(max-width:1024px){.tt-head{padding-top:16px}.tt-title{font-size:28px;margin-bottom:10px}.tt-sub{font-size:15px}.tt-bc li{font-size:14px}}'
    + 'html.tt-page .tt-nohero>.tessol-section:first-child{margin-top:0 !important}'
    + 'html.tt-page .tt-nohero>.tessol-section:first-child>.container>p:first-of-type{font-size:17px !important;line-height:1.75 !important;font-weight:400 !important;margin:0 !important}'
    + 'html.tt-page .editorjs-content .ej-heading--e2{margin-top:88px !important}html.tt-page .editorjs-content .tt+.ej-heading--e2{margin-top:72px !important}'
    + '.tt-nav{display:flex;gap:0 28px;margin:36px 0 0 !important;padding:0;border-bottom:1px solid #d1d1d1;overflow-x:auto;scrollbar-width:none}.tt-nav::-webkit-scrollbar{display:none}'
    + '.tt-nav a{display:block;padding:12px 0 11px;font-size:15px;color:#5b5b5f !important;text-decoration:none !important;white-space:nowrap;border-bottom:2px solid transparent;margin-bottom:-1px}.tt-nav a:hover{color:#0a0a0a !important}.tt-nav a[aria-current=page]{color:#154670 !important;font-weight:700;border-bottom-color:#154670}'
    + '.tt-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 40px;margin:28px 0 0 !important;border-top:1px solid #0a0a0a}'
    + '.tt-item{padding:22px 0 24px;border-bottom:1px solid #d1d1d1}'
    + 'html.tt-page .editorjs-content .tt-item h2.ej-heading{font-size:20px !important;line-height:1.4 !important;margin:0 0 6px !important;padding:0 !important;font-weight:700 !important}'
    + 'html.tt-page .editorjs-content .tt-item p{font-size:15px !important;line-height:1.7 !important;color:#5b5b5f !important;margin:0 !important}'
    + 'html.tt-page .editorjs-content .tt-item p a{display:inline-block;margin-top:8px;font-size:14.5px;color:#154670 !important;text-decoration:underline !important;text-underline-offset:3px}'
    + '@media(max-width:760px){html.tt-page .tt-nohero>.tessol-section:first-child>.container>p:first-of-type{font-size:15.5px !important;line-height:1.7 !important}'
    + '.tt-nav{gap:0 20px;margin:24px 0 0 !important}.tt-nav a{font-size:14px;padding:11px 0 10px}.tt-list{grid-template-columns:1fr;margin-top:18px !important}.tt-item{padding:16px 0 18px}'
    + 'html.tt-page .editorjs-content .tt-item h2.ej-heading{font-size:17px !important}html.tt-page .editorjs-content .tt-item p{font-size:14px !important}html.tt-page .editorjs-content .ej-heading--e2{margin-top:56px !important}}';
  var LIST = [['calculators', '전체'], ['dew-point-calculator', '노점·상대습도'], ['temperature-mapping-sensor-calculator', '매핑 센서 개수'], ['mkt-calculator', 'MKT'], ['tur-calculator', 'TUR'], ['temperature-mapping-checklist', '매핑 준비 점검표'], ['temperature-regulation-checklist', '규정별 점검표']];
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function layout() {
    if (!/^\/tools\//.test(location.pathname) || document.documentElement.classList.contains('tt-page')) return;
    var hub = /\/tools\/calculators\/?$/.test(location.pathname), here = location.pathname.replace(/\/$/, '').split('/').pop();
    var hero = document.querySelector('.editorjs-content--sections > .tessol-section:first-child .tessol-hero');
    if (!hero) return;
    document.documentElement.classList.add('tt-page');
    if (!document.getElementById('tt-lay')) { var s = document.createElement('style'); s.id = 'tt-lay'; s.textContent = LAY; document.head.appendChild(s); }
    var ht = hero.querySelector('.tessol-hero__title'), hs = hero.querySelector('.tessol-hero__sub');
    var title = (ht ? ht.textContent : document.title).replace(/[⁠⁣]/g, '').trim(), sub = hs ? hs.textContent.replace(/[⁠⁣]/g, '').trim() : '';
    var sep = '<li class="tt-bc__sep" aria-hidden="true"><img src="/assets/images/icons/breadcrumb-chevron.svg" alt="" width="12" height="12"></li>';
    var head = el('<div class="tt-head"><div class="container"><nav aria-label="현재 위치"><ol class="tt-bc">'
      + '<li><a class="tt-bc__home" href="/"><img src="/assets/images/icons/breadcrumb-home.svg" alt="" width="12" height="12" aria-hidden="true"><span>홈</span></a></li>' + sep
      + (hub ? '<li><span aria-current="page">실무 계산 도구</span></li>'
        : '<li><a href="/tools/calculators">실무 계산 도구</a></li>' + sep + '<li><span aria-current="page">' + esc(title) + '</span></li>')
      + '</ol></nav><h1 class="tt-title">' + esc(title) + '</h1>' + (sub ? '<p class="tt-sub">' + esc(sub) + '</p>' : '')
      + '<nav class="tt-nav" aria-label="실무 계산 도구">' + LIST.map(function (x) { return '<a href="/tools/' + x[0] + '"' + (x[0] === here ? ' aria-current="page"' : '') + '>' + x[1] + '</a>'; }).join('') + '</nav></div></div>');
    var heroSec = hero.closest('.tessol-section'), root = heroSec.parentNode;
    var pb = root.closest('.page-builder-view') || root.parentNode; pb.insertBefore(head, pb.firstChild);
    root.removeChild(heroSec); root.classList.add('tt-nohero');
    if (hub) {
      var hs2 = Array.prototype.filter.call(document.querySelectorAll('.editorjs-content h2.ej-heading'), function (h) {
        var p = h.nextElementSibling; return p && p.tagName === 'P' && p.querySelector('a[href^="/tools/"]');
      });
      if (!hs2.length) return;
      var grid = el('<div class="tt-list"></div>'); hs2[0].parentNode.insertBefore(grid, hs2[0]);
      hs2.forEach(function (h) { var p = h.nextElementSibling, c = el('<div class="tt-item"></div>'); c.appendChild(h); c.appendChild(p); grid.appendChild(c); });
    }
  }
  function el(h) { var d = document.createElement('div'); d.innerHTML = h.trim(); return d.firstChild; }
  function f(x, d) { return isFinite(x) ? x.toLocaleString('ko-KR', { minimumFractionDigits: d, maximumFractionDigits: d }) : '–'; }
  function num(v) { var x = parseFloat(String(v).replace(',', '.')); return isFinite(x) ? x : NaN; }
  function q(root, s) { return root.querySelector(s); }
  function recHtml(name) {
    var r = REC[name] || []; if (!r.length) return '';
    return '<div class="tt-rec"><h4>이 계산과 함께 쓰는 장비</h4><ul>' + r.map(function (x) {
      return '<li><a href="' + P(x[1]) + '">' + x[0] + '</a><span>' + x[2] + '</span></li>';
    }).join('') + '</ul></div>';
  }
  function shell(title, sub, inHtml, name) {
    return el('<section class="tt" data-tool="' + name + '"><div class="tt-hd">' + title + '<small>' + sub + '</small></div>'
      + '<div class="tt-bd"><div class="tt-in">' + inHtml + '</div><div class="tt-out" aria-live="polite"></div></div>' + recHtml(name) + '</section>');
  }
  function seg(root, sel, cb) {
    var bs = root.querySelectorAll(sel + ' button');
    Array.prototype.forEach.call(bs, function (b) {
      b.addEventListener('click', function () {
        Array.prototype.forEach.call(bs, function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        cb(b.getAttribute('data-v'));
      });
    });
  }

  /* ---------- 1. 노점 ---------- */
  // Magnus 식, Alduchov & Eskridge(1996) 계수. 물: a=17.625, b=243.04 °C / 얼음: a=22.587, b=273.86 °C
  var AW = 17.625, BW = 243.04, AI = 22.587, BI = 273.86;
  function es(t) { return 6.1094 * Math.exp(AW * t / (BW + t)); } // 상대습도는 물 기준(WMO 관례)
  function dewFrom(t, rh) { var g = Math.log(rh / 100) + AW * t / (BW + t); return BW * g / (AW - g); }
  function frostFrom(t, rh) { var e = rh / 100 * 6.1094 * Math.exp(AW * t / (BW + t)); var g = Math.log(e / 6.1121); return BI * g / (AI - g); }
  function rhFrom(t, td) { return 100 * Math.exp(AW * td / (BW + td) - AW * t / (BW + t)); }
  function dewpoint(host) {
    var w = shell('노점·상대습도 계산기', 'Magnus 식 · Alduchov & Eskridge(1996) 계수', ''
      + '<div class="tt-f"><div class="tt-seg" role="group" aria-label="계산 방향"><button type="button" data-v="dp" aria-pressed="true">온도·습도 → 노점</button><button type="button" data-v="rh">온도·노점 → 습도</button></div></div>'
      + '<div class="tt-f"><label for="tt-dt">공기 온도</label><div class="tt-row"><input id="tt-dt" type="number" step="0.1" value="25"><span class="tt-u">°C</span></div></div>'
      + '<div class="tt-f" data-m="dp"><label for="tt-drh">상대습도</label><div class="tt-row"><input id="tt-drh" type="number" step="0.1" min="0.1" max="100" value="60"><span class="tt-u">%RH</span></div></div>'
      + '<div class="tt-f" data-m="rh" hidden><label for="tt-dtd">노점 온도</label><div class="tt-row"><input id="tt-dtd" type="number" step="0.1" value="16.7"><span class="tt-u">°C</span></div></div>'
      + '<div class="tt-f"><label for="tt-dsf">표면 온도 (선택, 결로 확인용)</label><div class="tt-row"><input id="tt-dsf" type="number" step="0.1" placeholder="예: 냉장 배관 8"><span class="tt-u">°C</span></div></div>', 'dewpoint');
    host.replaceWith(w);
    var mode = 'dp', out = q(w, '.tt-out');
    function run() {
      var t = num(q(w, '#tt-dt').value), rh, td, sf = num(q(w, '#tt-dsf').value), h = '';
      if (mode === 'dp') { rh = num(q(w, '#tt-drh').value); td = dewFrom(t, rh); }
      else { td = num(q(w, '#tt-dtd').value); rh = rhFrom(t, td); }
      if (!isFinite(t) || !isFinite(rh) || !isFinite(td) || rh <= 0) { out.innerHTML = '<p class="tt-note">값을 입력하십시오.</p>'; return; }
      if (mode === 'rh' && td > t) { out.innerHTML = '<p class="tt-note tt-bad">노점은 공기 온도보다 높을 수 없습니다.</p>'; return; }
      var ah = 216.7 * (rh / 100 * es(t)) / (273.15 + t);
      var e = rh / 100 * es(t), mr = 621.97 * e / (1013.25 - e);
      if (mode === 'dp') h += '<div class="tt-lab">노점 온도</div><div class="tt-big">' + f(td, 1) + '<small>°C</small></div>';
      else h += '<div class="tt-lab">상대습도</div><div class="tt-big">' + f(rh, 1) + '<small>%RH</small></div>';
      h += '<div class="tt-kv">';
      if (mode === 'rh') h += '<span>노점 온도</span><b>' + f(td, 1) + ' °C</b>';
      if (td < 0) h += '<span>서리점(얼음 기준)</span><b>' + f(frostFrom(t, rh), 1) + ' °C</b>';
      h += '<span>절대습도</span><b>' + f(ah, 2) + ' g/m³</b><span>혼합비(1 atm)</span><b>' + f(mr, 2) + ' g/kg</b><span>공기 온도 − 노점</span><b>' + f(t - td, 1) + ' °C</b></div>';
      if (isFinite(sf)) {
        var m = sf - td;
        h += m <= 0 ? '<span class="tt-flag tt-bad">결로 발생 조건 (표면이 노점보다 ' + f(-m, 1) + ' °C 낮음)</span>'
          : m < 3 ? '<span class="tt-flag tt-warn">결로 주의 (여유 ' + f(m, 1) + ' °C)</span>'
          : '<span class="tt-flag tt-ok">결로 여유 ' + f(m, 1) + ' °C</span>';
      }
      if (t < -40 || t > 50) h += '<p class="tt-note tt-warn">이 계수는 −40 ~ 50 °C에서 검증된 값입니다. 범위 밖은 참고값으로만 쓰십시오.</p>';
      h += '<p class="tt-note">해수면 기압 기준 계산값입니다. 압축공기처럼 압력이 다른 곳의 노점(가압 노점)은 노점계로 직접 측정하십시오.</p>';
      out.innerHTML = h;
    }
    seg(w, '.tt-seg', function (v) { mode = v; Array.prototype.forEach.call(w.querySelectorAll('[data-m]'), function (x) { x.hidden = x.getAttribute('data-m') !== v; }); run(); });
    w.addEventListener('input', run); run();
  }

  /* ---------- 2. 매핑 센서 개수 ---------- */
  function heightsFor(H) {
    if (H <= 3.6) return [0.3, Math.min(1.2, H / 2), Math.min(3.0, Math.max(H - 0.3, 1.5))];
    var a = [0.3]; for (var k = 1; 1.8 * k <= H - 0.5; k++) a.push(+(1.8 * k).toFixed(1)); return a;
  }
  function mapping(host) {
    var w = shell('온도 매핑 센서 개수 계산기', 'WHO TRS 961 Annex 9 Supplement 8 · FD X15-140 배치 방식', ''
      + '<div class="tt-f"><div class="tt-seg" role="group" aria-label="대상"><button type="button" data-v="room" aria-pressed="true">창고·보관실</button><button type="button" data-v="box">챔버·냉장고·냉동고</button></div></div>'
      + '<div class="tt-f"><label>크기 (가로 × 세로 × 높이)</label><div class="tt-row"><input id="tt-ml" type="number" step="0.1" min="0.1" value="30" aria-label="가로"><span class="tt-u">×</span><input id="tt-mw" type="number" step="0.1" min="0.1" value="20" aria-label="세로"><span class="tt-u">×</span><input id="tt-mh" type="number" step="0.1" min="0.1" value="6" aria-label="높이"><span class="tt-u">m</span></div></div>'
      + '<div class="tt-f" data-m="room"><label for="tt-ms">격자 간격</label><select id="tt-ms"><option value="5">5 m (온도 차가 큰 곳, 냉장·냉동 창고)</option><option value="7.5">7.5 m</option><option value="10" selected>10 m (공조가 고른 상온 창고)</option><option value="20">20 m (아주 큰 시설)</option></select></div>'
      + '<div class="tt-f" data-m="room"><label><input id="tt-mc" type="checkbox" style="width:auto;margin-right:6px">가운데 바닥에도 팔레트를 쌓습니다</label></div>'
      + '<div class="tt-f"><label><input id="tt-mx" type="checkbox" checked style="width:auto;margin-right:6px">제어 센서 옆·문 앞·공조 토출구에 1개씩 추가</label></div>', 'mapping');
    host.replaceWith(w);
    var mode = 'room', out = q(w, '.tt-out');
    function run() {
      var L = num(q(w, '#tt-ml').value), W = num(q(w, '#tt-mw').value), H = num(q(w, '#tt-mh').value), extra = q(w, '#tt-mx').checked, h = '';
      if (!(L > 0 && W > 0 && H > 0)) { out.innerHTML = '<p class="tt-note">크기를 입력하십시오.</p>'; return; }
      var V = L * W * H;
      if (mode === 'box') {
        var n = V <= 2 ? 9 : 15, ex = extra ? 1 : 0;
        h += '<div class="tt-lab">권장 센서 수</div><div class="tt-big">' + (n + ex) + '<small>개</small></div><div class="tt-kv"><span>내부 부피</span><b>' + f(V, 2) + ' m³</b>'
          + '<span>기본 배치</span><b>' + (n === 9 ? '모서리 8 + 중앙 1' : '모서리 8 + 면 중앙 6 + 중앙 1') + '</b>' + (ex ? '<span>제어 센서 옆</span><b>1</b>' : '') + '</div>';
        if (V > 20) h += '<p class="tt-note tt-warn">20 m³를 넘으면 워크인 냉장실처럼 격자로 배치하십시오. 위쪽 "창고·보관실"로 바꿔 계산하면 됩니다.</p>';
        h += '<p class="tt-note">2 m³ 이하는 9점, 2 ~ 20 m³는 15점이 프랑스 FD X15-140 방식이며, ISPE 지침은 제어 센서 옆에도 한 점을 두도록 권합니다. 매핑은 문 열림·제상 주기가 들어가도록 최소 24시간 이상, 기록 간격은 1 ~ 5분이 일반적입니다.</p>';
      } else {
        var s = num(q(w, '#tt-ms').value), nx = Math.max(2, Math.ceil(L / s) + 1), ny = Math.max(2, Math.ceil(W / s) + 1), hs = heightsFor(H);
        var base = nx * ny * hs.length, c = q(w, '#tt-mc').checked ? hs.length : 0, ex2 = extra ? 3 : 0, tot = base + c + ex2;
        h += '<div class="tt-lab">권장 센서 수</div><div class="tt-big">' + tot + '<small>개</small></div><div class="tt-kv">'
          + '<span>평면 격자</span><b>' + nx + ' × ' + ny + ' = ' + nx * ny + '곳</b><span>높이 단</span><b>' + hs.length + '단 (' + hs.map(function (x) { return f(x, 1); }).join(' · ') + ' m)</b>'
          + '<span>격자 센서</span><b>' + base + '</b>' + (c ? '<span>가운데 팔레트</span><b>' + c + '</b>' : '') + (ex2 ? '<span>제어 센서·문·토출구</span><b>' + ex2 + '</b>' : '') + '</div>';
        h += '<p class="tt-note">WHO Supplement 8은 5 ~ 10 m마다 격자로 두고, 천장 3.6 m 이하는 바닥·1.2 m·3.0 m 세 단, 6 m 높이는 0.3·1.8·3.6·5.4 m 네 단을 예로 듭니다. 더 높은 곳은 같은 1.8 m 간격으로 늘린 값입니다. 상온 창고는 평일 5일과 주말 2일을 포함해 최소 7일 연속 측정하고, 기록 간격은 1 ~ 15분으로 모두 같게 맞춥니다. 계절 차가 큰 곳은 여름과 겨울에 각각 매핑합니다.</p>';
      }
      h += '<p class="tt-note">이 값은 출발점입니다. 선반 구조, 공기 흐름, 과거 일탈 위치에 따라 늘리거나 줄이고, 그 근거를 매핑 계획서에 적으십시오.</p>';
      out.innerHTML = h;
    }
    seg(w, '.tt-seg', function (v) {
      mode = v; Array.prototype.forEach.call(w.querySelectorAll('[data-m]'), function (x) { x.hidden = x.getAttribute('data-m') !== v; });
      if (v === 'box') { q(w, '#tt-ml').value = 0.7; q(w, '#tt-mw').value = 0.7; q(w, '#tt-mh').value = 1.8; } else { q(w, '#tt-ml').value = 30; q(w, '#tt-mw').value = 20; q(w, '#tt-mh').value = 6; }
      run();
    });
    w.addEventListener('input', run); w.addEventListener('change', run); run();
  }

  /* ---------- 3. MKT ---------- */
  function mkt(host) {
    var w = shell('평균 동적 온도(MKT) 계산기', 'USP <1079.2> · ICH Q1A(R2) 정의, ΔH 기본값 83.144 kJ/mol', ''
      + '<div class="tt-f"><label for="tt-kd">온도 기록 붙여넣기</label><textarea id="tt-kd" spellcheck="false" placeholder="로거에서 내보낸 값을 붙여 넣으십시오. 한 줄에 하나, 또는 날짜·시간이 섞인 줄도 됩니다.">23.1\n24.5\n26.8\n25.2\n22.9\n24.0\n27.5\n25.6</textarea></div>'
      + '<div class="tt-f"><label for="tt-kc">여러 숫자가 있는 줄에서 쓸 값</label><select id="tt-kc"><option value="last" selected>줄의 마지막 숫자</option><option value="first">줄의 첫 숫자</option></select></div>'
      + '<div class="tt-f"><label for="tt-ke">활성화 에너지 ΔH</label><div class="tt-row"><input id="tt-ke" type="number" step="0.001" value="83.144"><span class="tt-u">kJ/mol</span></div></div>'
      + '<div class="tt-f"><label for="tt-kl">허용 상한 (선택)</label><div class="tt-row"><input id="tt-kl" type="number" step="0.1" value="25"><span class="tt-u">°C</span></div></div>', 'mkt');
    host.replaceWith(w);
    var out = q(w, '.tt-out');
    function run() {
      var pick = q(w, '#tt-kc').value, vals = [];
      q(w, '#tt-kd').value.split(/\r?\n/).forEach(function (ln) {
        var m = ln.replace(/(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/g, ' ').replace(/\d{1,2}:\d{2}(:\d{2})?/g, ' ').match(/-?\d+(?:[.,]\d+)?/g);
        if (m && m.length) { var v = num(pick === 'first' ? m[0] : m[m.length - 1]); if (isFinite(v) && v > -100 && v < 200) vals.push(v); }
      });
      var dH = num(q(w, '#tt-ke').value) * 1000, R = 8.3144598, lim = num(q(w, '#tt-kl').value);
      if (vals.length < 2 || !(dH > 0)) { out.innerHTML = '<p class="tt-note">온도 값을 두 개 이상 넣으십시오.</p>'; return; }
      var s = 0, mn = Infinity, mx = -Infinity, sum = 0, over = 0;
      vals.forEach(function (t) { var T = t + 273.15; s += Math.exp(-dH / (R * T)); sum += t; if (t < mn) mn = t; if (t > mx) mx = t; if (isFinite(lim) && t > lim) over++; });
      var M = (dH / R) / (-Math.log(s / vals.length)) - 273.15, avg = sum / vals.length;
      var h = '<div class="tt-lab">평균 동적 온도 (MKT)</div><div class="tt-big">' + f(M, 2) + '<small>°C</small></div><div class="tt-kv">'
        + '<span>측정값 수</span><b>' + vals.length.toLocaleString('ko-KR') + '</b><span>산술 평균</span><b>' + f(avg, 2) + ' °C</b><span>최저 / 최고</span><b>' + f(mn, 1) + ' / ' + f(mx, 1) + ' °C</b>'
        + (isFinite(lim) ? '<span>상한 초과 값</span><b>' + over + '개</b>' : '') + '</div>';
      if (isFinite(lim)) h += M <= lim ? '<span class="tt-flag tt-ok">MKT가 상한 ' + f(lim, 1) + ' °C 이하</span>' : '<span class="tt-flag tt-bad">MKT가 상한 ' + f(lim, 1) + ' °C 초과</span>';
      h += '<p class="tt-note">MKT는 온도가 오르내린 기간 전체가 제품에 준 열 부담을 하나의 온도로 바꾼 값입니다. 측정 간격이 일정한 기록에 쓰십시오. 냉장(2 ~ 8 °C) 제품의 일탈을 MKT 하나로 정당화하지 말고, 제조사 안정성 자료와 함께 판단하십시오.</p>';
      out.innerHTML = h;
    }
    w.addEventListener('input', run); w.addEventListener('change', run); run();
  }

  /* ---------- 4. TUR ---------- */
  function tur(host) {
    var w = shell('교정 정확도 비율(TUR) 계산기', 'ANSI/NCSL Z540.3 정의 · 권장 4 : 1 이상', ''
      + '<div class="tt-f"><label for="tt-tt">피교정 장비 허용오차 (±)</label><div class="tt-row"><input id="tt-tt" type="number" step="any" min="0" value="0.5"><select id="tt-tu" style="width:110px"><option>°C</option><option>%RH</option><option>kPa</option><option>bar</option><option>V</option><option>mA</option><option>Ω</option><option>기타</option></select></div></div>'
      + '<div class="tt-f"><label for="tt-tk">교정 과정의 확장불확도 U (k = 2, ±)</label><div class="tt-row"><input id="tt-tk" type="number" step="any" min="0" value="0.1"><span class="tt-u" id="tt-tu2">°C</span></div></div>'
      + '<div class="tt-f"><label for="tt-ta">기준기 정확도 (±, 선택: TAR 비교용)</label><div class="tt-row"><input id="tt-ta" type="number" step="any" min="0" placeholder="예: 0.05"><span class="tt-u" id="tt-tu3">°C</span></div></div>', 'tur');
    host.replaceWith(w);
    var out = q(w, '.tt-out');
    function run() {
      var u = q(w, '#tt-tu').value; q(w, '#tt-tu2').textContent = u; q(w, '#tt-tu3').textContent = u;
      var T = num(q(w, '#tt-tt').value), U = num(q(w, '#tt-tk').value), A = num(q(w, '#tt-ta').value), h = '';
      if (!(T > 0 && U > 0)) { out.innerHTML = '<p class="tt-note">허용오차와 불확도를 입력하십시오.</p>'; return; }
      var r = (2 * T) / (2 * U);
      h += '<div class="tt-lab">TUR</div><div class="tt-big">' + f(r, 2) + '<small>: 1</small></div>';
      h += r >= 4 ? '<span class="tt-flag tt-ok">4 : 1 이상: 단순 합부 판정 가능</span>' : r >= 2 ? '<span class="tt-flag tt-warn">4 : 1 미만: 보호대역(가드밴드) 적용 검토</span>' : '<span class="tt-flag tt-bad">2 : 1 미만: 기준기·방법 재검토 권장</span>';
      h += '<div class="tt-bar" aria-hidden="true"><i style="width:' + Math.min(100, r / 6 * 100) + '%"></i></div><div class="tt-kv"><span>허용 범위 폭</span><b>' + f(2 * T, 4).replace(/0+$/, '').replace(/[.]$/, '') + ' ' + u + '</b><span>불확도 폭 (2U)</span><b>' + f(2 * U, 4).replace(/0+$/, '').replace(/[.]$/, '') + ' ' + u + '</b>';
      if (A > 0) h += '<span>TAR (허용오차 ÷ 기준기 정확도)</span><b>' + f(T / A, 2) + ' : 1</b>';
      h += '<span>4 : 1에 필요한 U</span><b>≤ ' + (T / 4).toPrecision(3) + ' ' + u + '</b></div>';
      if (r < 4) h += '<p class="tt-note">단순 보호대역 예시: 합격 한계를 허용오차 ± ' + T + ' 에서 ± ' + (T - U).toPrecision(3) + ' ' + u + '(허용오차 − U)로 좁히면 잘못 합격시킬 위험이 줄어듭니다. 적용 방식은 교정 기관과 고객이 미리 합의하십시오.</p>';
      h += '<p class="tt-note">TUR은 기준기 사양만 보는 TAR과 달리, 기준기·환경·반복성을 모두 합친 교정 과정의 불확도로 계산합니다. KOLAS 교정성적서의 확장불확도 값을 그대로 넣으면 됩니다.</p>';
      out.innerHTML = h;
    }
    w.addEventListener('input', run); w.addEventListener('change', run); run();
  }

  /* ---------- 5. 매핑 준비 점검표 ---------- */
  var CK = [
    ['계획', ['매핑 목적·범위·합격 기준(온도 범위)을 계획서에 적었다', '구역 도면에 선반·팔레트·문·공조기·제어 센서 위치를 표시했다', '계절 차가 큰 곳은 여름·겨울 매핑을 따로 계획했다', '빈 상태와 적재 상태 중 어느 조건으로 할지 정했다']],
    ['장비', ['로거마다 유효한 교정성적서(측정 범위 포함)가 있다', '모든 로거의 기록 간격을 같게 맞췄다(1 ~ 15분)', '로거 시계를 한 기준 시간에 맞췄다', '배터리·메모리가 측정 기간 전체를 버틴다']],
    ['배치', ['격자 간격과 높이 단을 정하고 위치 번호를 붙였다', '문 앞·공조 토출구·제어 센서 옆에 로거를 더 두었다', '벽·천장·조명에 직접 닿지 않게 고정했다', '배치 사진을 위치 번호와 함께 남겼다']],
    ['측정', ['상온 창고는 평일 5일·주말 2일을 포함해 7일 이상 측정한다', '문 열림·제상·정전 복귀 시험을 따로 기록한다', '측정 중 출입·하역·설비 점검 내용을 일지에 적는다']],
    ['보고', ['위치별 최고·최저·평균과 핫스팟·콜드스팟을 표로 정리했다', '일탈 위치와 원인, 조치(보관 금지 구역 지정 등)를 적었다', '상시 감시 센서 위치를 매핑 결과로 정했다', '재매핑 조건(설비 변경, 배치 변경, 주기)을 정했다']]
  ];
  function mapcheck(host) {
    var html = '<div class="tt-ck">' + CK.map(function (g, gi) {
      return '<h5>' + (gi + 1) + '. ' + g[0] + '</h5><ul>' + g[1].map(function (t, i) { return '<li><label><input type="checkbox" data-k="' + gi + '-' + i + '">' + t + '</label></li>'; }).join('') + '</ul>';
    }).join('') + '</div>';
    var w = shell('온도 매핑 준비 점검표', 'WHO TRS 961 Annex 9 Supplement 8 기준으로 정리', html, 'mapcheck');
    host.replaceWith(w);
    var out = q(w, '.tt-out'), boxes = w.querySelectorAll('.tt-ck input'), KEY = 'tessol_mapcheck_v1';
    try { var saved = JSON.parse(localStorage.getItem(KEY) || '{}'); Array.prototype.forEach.call(boxes, function (b) { b.checked = !!saved[b.getAttribute('data-k')]; }); } catch (e) {}
    function run() {
      var n = 0, st = {}; Array.prototype.forEach.call(boxes, function (b) { if (b.checked) { n++; st[b.getAttribute('data-k')] = 1; } });
      try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {}
      var miss = []; CK.forEach(function (g, gi) { g[1].forEach(function (t, i) { if (!st[gi + '-' + i]) miss.push(g[0] + ': ' + t); }); });
      out.innerHTML = '<div class="tt-lab">준비 상태</div><div class="tt-big">' + n + '<small>/ ' + boxes.length + '</small></div><div class="tt-bar"><i style="width:' + (n / boxes.length * 100) + '%"></i></div>'
        + (miss.length ? '<p class="tt-note"><b>남은 항목</b><br>' + miss.slice(0, 8).join('<br>') + (miss.length > 8 ? '<br>외 ' + (miss.length - 8) + '개' : '') + '</p>' : '<span class="tt-flag tt-ok">모든 항목을 확인했습니다</span>')
        + '<button type="button" class="tt-btn">인쇄하기</button><p class="tt-note">체크 상태는 이 브라우저에만 저장됩니다.</p>';
      q(out, '.tt-btn').onclick = function () { window.print(); };
    }
    w.addEventListener('change', run); run();
  }


  /* ---------- 6. 규정별 온도 관리 점검표 ---------- */
  var RG = {
    kgsp: ['의약품 유통(KGSP)', '「의약품 등의 안전에 관한 규칙」 별표 6 의약품 유통품질 관리기준', [
      ['적정 온도·습도를 유지할 시설과, 필요하면 공기조절설비를 갖추었다', '별표 6 Ⅰ.3.가.6)'],
      ['일정 온도 유지 의약품은 자동온도기록장치가 달린 냉장·냉동설비에 따로 보관한다', '별표 6 Ⅰ.3.가.6)'],
      ['용기·포장에 적힌 저장온도가 항상 유지되고, 냉장·냉동 의약품은 구분 보관한다', '별표 6 Ⅰ.7.다.4)'],
      ['저온·항온 보존 자동장치를 계획에 따라 정기적으로 교정·성능점검하고 기록한다', '별표 6 Ⅰ.3.라'],
      ['보관상태를 정기적으로 확인·점검하고 결과를 기록한다', '별표 6 Ⅰ.7.다.7)'],
      ['냉장·냉동 의약품 운송 용기·차량에 자동온도기록장치 등 저장온도 입증 장치를 갖춘다', '별표 6 Ⅰ.7.마.2)'],
      ['운송 기록에 자동온도기록장치의 저장온도 기록을 포함해 보관한다', '별표 6 Ⅰ.7.마.7)'],
      ['온도 기록 등 문서를 2년간 보존하고, 전자문서는 권한자만 변경하며 백업한다', '별표 6 Ⅰ.6.나'],
      ['기록 수정 시 수정 전 내용이 보이게 하고 사유·날짜·서명을 남긴다', '별표 6 Ⅰ.6.가.4)'],
      ['해마다 자율점검을 하고 개선 요구사항은 기한을 정해 개선한다', '별표 6 Ⅰ.10'],
      ['생물학적제제등은 보관시설 온도를 매일 2회 이상 확인한다', '생물학적 제제 등의 제조ㆍ판매관리 규칙 제5조'],
      ['생물학적제제등 수송설비는 계절·거리·시간을 고려해 검증하고 문서화한다', '같은 규칙 제6조, 보관 및 수송에 관한 규정 제4조']
    ]],
    kgmp: ['의약품 제조(KGMP)', '「의약품 등의 안전에 관한 규칙」 별표 1 의약품 제조 및 품질관리기준', [
      ['제조·보관 조건의 온도·습도 유지 여부를 정기적으로 점검하고 기록한다', '별표 1 2.3'],
      ['공기조화장치 성능을 정기적으로 점검하고 작업실 차압을 유지한다', '별표 1 2.3 나목'],
      ['원자재·반제품·완제품을 품질에 영향이 없는 조건에서 보관한다', '별표 1 10.2 바목'],
      ['중요 기계·설비를 교정하고 적격성 평가를 하며 작동 절차를 문서화한다', '별표 1 2.1 아목'],
      ['시험기기·계측기·기록계를 계획서에 따라 정기적으로 교정하고 기록한다', '별표 1 7.1 아목'],
      ['제조관리기준서에 계측기 교정방법과 설비 적격성 평가 방법을 넣었다', '별표 1 4.3 나목'],
      ['자동화장치를 정기 교정·성능점검하고, 기록 변경은 권한자만 하며 따로 보관한다', '별표 1 2.2'],
      ['설비 설치·환경 변경 시 밸리데이션계획서에 따라 밸리데이션하고 보고서를 둔다', '별표 1 6.1'],
      ['공기조화장치 등 제조지원설비 밸리데이션과 컴퓨터시스템 밸리데이션을 한다', '별표 1 6.5, 6.6'],
      ['일탈·기준일탈이 생기면 원인을 조사해 처리하고 기록한다', '별표 1 7.1 나목'],
      ['설비 변경 시 품질 영향을 검토해 문서화한다(변경관리)', '별표 1 12 가목'],
      ['기록문서를 제품 유효기한 또는 사용기한 경과 후 1년간 보존한다', '별표 1 5.2 가목']
    ]],
    haccp: ['식품 HACCP·냉장냉동', '「식품 및 축산물 안전관리인증기준」·「식품의 기준 및 규격」', [
      ['보관 온도를 식품공전 기준(냉장 0 ~ 10 °C, 냉동 −18 °C 이하, 품목별 별도 기준)에 맞췄다', '식품의 기준 및 규격 제2. 4.'],
      ['냉장·냉동 온도는 내부온도 측정값 중 가장 높은 값으로 판단한다', '식품의 기준 및 규격 제1. 3. 36)'],
      ['냉장·냉동시설 온도를 밖에서 볼 수 있고, 센서를 가장 높게 측정되는 곳에 달았다', 'HACCP 고시 별표 1 Ⅰ.33'],
      ['공정별 온도 관리계획을 세우고 온도계를 설치했다', 'HACCP 고시 별표 1 Ⅰ.16'],
      ['가열·냉각 시설에 온도 측정·기록 장치를 두거나 주기를 정해 측정·기록한다', 'HACCP 고시 별표 1 Ⅰ.31'],
      ['냉장·냉동·가열 시설의 온도측정 장치를 연 1회 이상 교정한다', 'HACCP 고시 별표 1 Ⅰ.49'],
      ['운송차량은 냉장 10 °C 이하, 냉동 −18 °C 이하를 유지하고 온도 기록 장치를 단다', 'HACCP 고시 별표 1 Ⅰ.42'],
      ['CCP마다 한계기준, 모니터링, 개선조치, 검증 절차를 정해 운영한다', 'HACCP 고시 제6조'],
      ['HACCP 기록을 2년간 보관하고 작성자가 일시·이름을 적고 서명한다', 'HACCP 고시 제8조']
    ]]
  };
  function regcheck(host) {
    var w = shell('규정별 온도 관리 점검표', 'KGSP · KGMP · 식품 HACCP, 조항 근거 표기 (2026년 11월 확인)', '<div class="tt-f"><div class="tt-seg" role="group" aria-label="규정"><button type="button" data-v="kgsp" aria-pressed="true">의약품 유통</button><button type="button" data-v="kgmp">의약품 제조</button><button type="button" data-v="haccp">식품 HACCP</button></div></div><div class="tt-ck"></div>', 'regcheck');
    host.replaceWith(w);
    var cur = 'kgsp', out = q(w, '.tt-out'), ck = q(w, '.tt-ck'), KEY = 'tessol_regcheck_v1', st = {};
    try { st = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) {}
    function draw() {
      var g = RG[cur];
      ck.innerHTML = '<p class="tt-note" style="margin-top:0">' + g[1] + '</p><ul>' + g[2].map(function (x, i) { var k = cur + '-' + i;
        return '<li><label><input type="checkbox" data-k="' + k + '"' + (st[k] ? ' checked' : '') + '><span>' + x[0] + '<br><small style="color:#5b5b5f">근거: ' + x[1] + '</small></span></label></li>'; }).join('') + '</ul>';
      run();
    }
    function run() {
      var g = RG[cur], n = 0, miss = [];
      g[2].forEach(function (x, i) { if (st[cur + '-' + i]) n++; else miss.push(x[0]); });
      out.innerHTML = '<div class="tt-lab">' + g[0] + ' 확인 상태</div><div class="tt-big">' + n + '<small>/ ' + g[2].length + '</small></div><div class="tt-bar"><i style="width:' + (n / g[2].length * 100) + '%"></i></div>'
        + (miss.length ? '<p class="tt-note"><b>남은 항목</b><br>' + miss.slice(0, 6).join('<br>') + (miss.length > 6 ? '<br>외 ' + (miss.length - 6) + '개' : '') + '</p>' : '<span class="tt-flag tt-ok">모든 항목을 확인했습니다</span>')
        + '<button type="button" class="tt-btn">인쇄하기</button><p class="tt-note">요약 점검표입니다. 판단은 법령 원문과 품목 허가사항을 기준으로 하십시오. 체크 상태는 이 브라우저에만 저장됩니다.</p>';
      q(out, '.tt-btn').onclick = function () { window.print(); };
    }
    ck.addEventListener('change', function (e) { var k = e.target.getAttribute('data-k'); if (!k) return; if (e.target.checked) st[k] = 1; else delete st[k]; try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (er) {} run(); });
    seg(w, '.tt-seg', function (v) { cur = v; draw(); });
    draw();
  }


  var PPL = {
    seol: { '@type': 'Person', name: '설대환', jobTitle: '교정사업부 교정1팀 팀장', url: 'https://www.tessol.com/about/experts#seol', worksFor: { '@id': 'https://www.tessol.com/#organization' } },
    yang: { '@type': 'Person', name: '양도현', jobTitle: '밸리데이션사업부 총괄', url: 'https://www.tessol.com/about/experts#yang', worksFor: { '@id': 'https://www.tessol.com/#organization' } },
    kim: { '@type': 'Person', name: '김동신', jobTitle: '영업본부 계측기사업부', url: 'https://www.tessol.com/about/experts#kim', worksFor: { '@id': 'https://www.tessol.com/#organization' } }
  };
  var REVBY = { 'dew-point-calculator': 'seol', 'tur-calculator': 'seol', 'temperature-mapping-sensor-calculator': 'yang', 'temperature-mapping-checklist': 'yang', 'temperature-regulation-checklist': 'yang', 'mkt-calculator': 'kim' };
  function faqLd() {
    var qs = document.querySelectorAll('.tessol-faq .faq-item');
    if (!qs.length) return null;
    return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: Array.prototype.map.call(qs, function (li) {
      var qn = li.querySelector('.faq-item__subject'), an = li.querySelector('.faq-item__answer');
      return { '@type': 'Question', name: qn ? qn.textContent.replace(/\u2060/g, '').trim() : '', acceptedAnswer: { '@type': 'Answer', text: an ? an.textContent.replace(/\u2060/g, '').replace(/^\s*A\.\s*/, '').trim() : '' } };
    }) };
  }
  function addLd(ld) { ld.forEach(function (o) { if (!o) return; var sc = document.createElement('script'); sc.type = 'application/ld+json'; sc.textContent = JSON.stringify(o); document.head.appendChild(sc); }); }
  function seoReport() {
    if (!/^\/report\//.test(location.pathname) || document.getElementById('tt-report-ld')) return;
    var t = document.querySelector('.editorjs-content h1, .editorjs-content h2');
    if (t && !document.querySelector('h1')) { var h1 = document.createElement('h1'); h1.className = t.className; h1.innerHTML = t.innerHTML; t.parentNode.replaceChild(h1, t); t = h1; }
    var name = (t ? t.textContent : document.title).replace(/\u2060/g, '').trim(), url = location.origin + location.pathname;
    var m = name.match(/(20\d\d)/), yr = m ? m[1] : '';
    var art = { '@context': 'https://schema.org', '@type': 'Article', headline: name, url: url, mainEntityOfPage: url, inLanguage: 'ko-KR',
      description: (document.querySelector('meta[name=description]') || {}).content || '',
      datePublished: '2026-11-22', dateModified: '2026-11-22',
      author: { '@id': 'https://www.tessol.com/#organization' }, publisher: { '@id': 'https://www.tessol.com/#organization' },
      reviewedBy: [PPL.seol, PPL.yang, PPL.kim], about: ['KOLAS 공인교정', '온도 매핑', '밸리데이션', '산업용 IoT'] };
    if (yr) art.temporalCoverage = '2025-01-01/2026-10-31';
    var bc = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: '홈', item: location.origin + '/' }, { '@type': 'ListItem', position: 2, name: name, item: url }] };
    addLd([faqLd(), art, bc]);
    var mk = document.createElement('meta'); mk.id = 'tt-report-ld'; document.head.appendChild(mk);
  }

  function seoTools() {
    try { seoReport(); } catch (e) {}
    if (!/^\/tools\//.test(location.pathname)) return;
    var t = document.querySelector('.tt-head h1') || document.querySelector('.tessol-hero__title');
    if (t && !document.querySelector('h1')) { var h1 = document.createElement('h1'); h1.className = t.className; h1.innerHTML = t.innerHTML; t.parentNode.replaceChild(h1, t); }
    var name = (t ? t.textContent : document.title).replace(/⁠/g, '').trim(), url = location.origin + location.pathname, ld = [];
    var qs = document.querySelectorAll('.tessol-faq .faq-item');
    if (qs.length) ld.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: Array.prototype.map.call(qs, function (li) {
      var qn = li.querySelector('.faq-item__subject'), an = li.querySelector('.faq-item__answer');
      return { '@type': 'Question', name: qn ? qn.textContent.trim() : '', acceptedAnswer: { '@type': 'Answer', text: an ? an.textContent.replace(/^\s*A\.\s*/, '').trim() : '' } };
    }) });
    if (document.querySelector('.tt')) ld.push({ '@context': 'https://schema.org', '@type': 'WebApplication', name: name, url: url, applicationCategory: 'BusinessApplication', operatingSystem: 'Web', inLanguage: 'ko-KR', isAccessibleForFree: true,
      description: (document.querySelector('meta[name=description]') || {}).content || '', offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' }, provider: { '@id': 'https://www.tessol.com/#organization' } });
    var rv = REVBY[location.pathname.replace(/\/$/, '').split('/').pop()];
    if (rv && ld.length) { var wa = ld[ld.length - 1]; if (wa['@type'] === 'WebApplication') wa.reviewedBy = PPL[rv]; }
    var bc = [{ '@type': 'ListItem', position: 1, name: '홈', item: location.origin + '/' }, { '@type': 'ListItem', position: 2, name: '실무 계산 도구', item: location.origin + '/tools/calculators' }];
    if (!/\/tools\/calculators\/?$/.test(location.pathname)) bc.push({ '@type': 'ListItem', position: 3, name: name, item: url });
    ld.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: bc });
    ld.forEach(function (o) { var sc = document.createElement('script'); sc.type = 'application/ld+json'; sc.textContent = JSON.stringify(o); document.head.appendChild(sc); });
  }

  var TOOLS = { dewpoint: dewpoint, mapping: mapping, mkt: mkt, tur: tur, mapcheck: mapcheck, regcheck: regcheck };
  function boot() {
    try { layout(); } catch (e) {}
    var marks = [];
    Array.prototype.forEach.call(document.querySelectorAll('p, div.ce-paragraph'), function (p) {
      var m = (p.textContent || '').trim().match(/^\[\[TESSOL-TOOL:([a-z]+)\]\]$/i);
      if (m && TOOLS[m[1].toLowerCase()]) marks.push([p, m[1].toLowerCase()]);
    });
    Array.prototype.forEach.call(document.querySelectorAll('[data-tessol-tool]'), function (d) { if (TOOLS[d.getAttribute('data-tessol-tool')]) marks.push([d, d.getAttribute('data-tessol-tool')]); });
    if (!marks.length) { try { seoTools(); } catch (e) {} return; }
    if (!document.getElementById('tt-css')) { var s = document.createElement('style'); s.id = 'tt-css'; s.textContent = CSS; document.head.appendChild(s); }
    marks.forEach(function (x) { try { TOOLS[x[1]](x[0]); } catch (e) { if (window.console) console.warn('tessol-tools', x[1], e); } });
    try { seoTools(); } catch (e) {}
  }
  window.TessolTools = { boot: boot, calc: { dewFrom: dewFrom, rhFrom: rhFrom, frostFrom: frostFrom, heightsFor: heightsFor } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
/* 제품 구성 선택기: 본문에 [[TESSOL-TOOL:config]]가 있으면 tessol-config.min.js를 같은 경로에서 불러옵니다(2026-11-22). */
(function () { var c = document.currentScript, src = c && c.src, n = 0, done = false; if (!src) return; function go() { if (done) return; if (document.body && document.body.textContent.indexOf('[[TESSOL-TOOL:config') >= 0) { done = true; var u = src.replace(/tessol-tools(\.min)?\.js/, 'tessol-config.min.js'), H = ['', 'fastly.', 'gcore.'], t = 0; (function ld() { var s = document.createElement('script'); s.src = t ? u.replace('//cdn.jsdelivr.net/', '//' + H[t] + 'jsdelivr.net/') : u; s.onerror = function () { if (++t < H.length) setTimeout(ld, 400); }; document.body.appendChild(s); })(); } else if (++n < 20) setTimeout(go, 500); } go(); document.addEventListener('DOMContentLoaded', go); window.addEventListener('load', go); window.addEventListener('pageshow', go); document.addEventListener('hah:content-swapped', function () { if (!done) { n = 0; go(); } }); })();

/* (주)테솔 교정신청서 다운로드(/cal/request/forms) — 버튼에 서식 파일 연결 v2 (2026-11-23)
   클릭 즉시 파일 주소로 이동해 내려받음(비동기 내려받기는 크롬이 자동 다운로드로 막을 수 있음) */
(function () {
  'use strict';
  if (window.__TESSOL_CALFORMS || !/^\/cal\/request\/forms\/?$/.test(location.pathname)) return;
  window.__TESSOL_CALFORMS = 2;
  var B = 'https://raw.githubusercontent.com/ehdtlsdlek320-dot/tessol-tools/8382097094624a2f5d022878aa75dd57446007dc/forms/';
  var F = {
    kolas: {
      DOCX: '(주)테솔_교정신청서_TS-CQP-09_서식01_Rev.03.docx',
      PDF: '(주)테솔_교정신청서_TS-CQP-09_서식01_Rev.03.pdf'
    },
    other: {
      DOCX: '(주)테솔_오염제거_자가선언서_TS-CQP-09_서식02_Rev.00.docx'
    }
  };
  function bind() {
    [].forEach.call(document.querySelectorAll('.cal-forms__card'), function (card) {
      var t = card.querySelector('.cal-forms__card-title');
      var set = F[t && t.id === 'cal-forms-kolas' ? 'kolas' : 'other'];
      [].forEach.call(card.querySelectorAll('.cal-forms__btn'), function (btn) {
        var k = (btn.textContent.match(/HWP|DOCX|PDF/) || [])[0], name = k && set[k];
        if (!name || btn.__tf) return;
        btn.__tf = 1;
        btn.setAttribute('data-file', name);
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          var a = document.createElement('a');
          a.href = B + encodeURIComponent(name); a.rel = 'noopener';
          document.body.appendChild(a); a.click(); a.remove();
        });
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind); else bind();
})();

/* 견적 문의 자동 기입(2026-11-23): 제품 상세의 견적·문의 링크에 ?p=제품명 | 모델 | 주소 를 붙입니다. Move 문의 양식이 이 값(과 구성 선택기의 ?cfg=)을 읽어 제목·문의 내용을 채웁니다. */
(function () {
  function fix() {
    if (!/^\/products\/[^\/]+\/[^\/]+\/[^\/]+/.test(location.pathname)) return;
    var t = document.querySelector('.pview-summary__title'), name = t ? t.textContent.replace(/\s+/g, ' ').trim() : '';
    if (!name) return;
    var model = '';
    Array.prototype.forEach.call(document.querySelectorAll('.pview-meta__row'), function (r) { var dt = r.querySelector('dt'), dd = r.querySelector('dd'); if (dt && dd && /^MODEL$/i.test(dt.textContent.trim())) model = dd.textContent.replace(/\s+/g, ' ').trim(); });
    var v = (name + ' | ' + model + ' | ' + location.pathname).slice(0, 300), q = '?p=' + encodeURIComponent(v);
    try { var g = document.querySelector('a.pview-btn[href*="/support/quote/"]'), m = g && g.getAttribute('href').match(/\/support\/quote\/(\d+)/); if (m) sessionStorage.setItem('tessol_qp', JSON.stringify({ id: m[1], v: v })); } catch (e) {}
    Array.prototype.forEach.call(document.querySelectorAll('a[href*="/support/quote"]'), function (a) {
      if (a.closest('header, footer, nav, .tq')) return;
      var h = a.getAttribute('href') || ''; if (h.indexOf('?') > -1 && h.indexOf('?p=') < 0) return;
      a.setAttribute('href', h.split('?')[0] + q);
    });
  }
  function go() { var n = 0; (function r() { fix(); if (++n < 8) setTimeout(r, 600); })(); }
  if (!window.__TESSOL_QP) { window.__TESSOL_QP = 1; var pre = function (e) { var a = e.target && e.target.closest && e.target.closest('a[href*="/support/quote"]'); if (a) fix(); }; ['pointerdown', 'touchstart', 'mousedown', 'focusin', 'click'].forEach(function (ev) { window.addEventListener(ev, pre, true); }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
  document.addEventListener('hah:content-swapped', go);
})();
/* FAQ 구조화 데이터: 화면의 FAQ(.faq-item)를 읽어 FAQPage JSON-LD를 넣습니다. 서버가 이미 FAQPage를 출력한 페이지(제품 상세)와 /tools/·/report/(위 seoTools)는 건너뜁니다(2026-11-25). */
(function () {
  if (window.__TESSOL_FAQLD) return; window.__TESSOL_FAQLD = 1;
  var ID = 'tt-faq-ld';
  function clean(s) { return (s || '').replace(/[⁠​]/g, '').replace(/[ \t]+/g, ' ').replace(/\s*\n\s*/g, '\n').trim(); }
  function run() {
    if (/^\/(tools|report)\//.test(location.pathname)) return;
    var old = document.getElementById(ID); if (old) old.parentNode.removeChild(old);
    var lds = document.querySelectorAll('script[type="application/ld+json"]');
    for (var i = 0; i < lds.length; i++) if (/"FAQPage"/.test(lds[i].textContent)) return;
    var seen = {}, items = [];
    Array.prototype.forEach.call(document.querySelectorAll('.faq-item'), function (li) {
      if (li.closest('header, footer, nav')) return;
      var q = li.querySelector('.faq-item__subject'), a = li.querySelector('.faq-item__answer-body') || li.querySelector('.faq-item__answer');
      var qt = clean(q && q.textContent), at = clean(a && a.textContent).replace(/^A\.\s*/, '');
      if (!qt || !at || seen[qt]) return; seen[qt] = 1;
      items.push({ '@type': 'Question', name: qt, acceptedAnswer: { '@type': 'Answer', text: at } });
    });
    if (!items.length) return;
    var sc = document.createElement('script'); sc.type = 'application/ld+json'; sc.id = ID;
    sc.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', '@id': location.origin + location.pathname + '#faq', url: location.origin + location.pathname, inLanguage: 'ko-KR', mainEntity: items });
    document.head.appendChild(sc);
  }
  function go() { try { run(); } catch (e) {} }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
  window.addEventListener('load', go);
  document.addEventListener('hah:content-swapped', function () { setTimeout(go, 50); });
})();
/* 작성·감수자 표기(E-E-A-T): 인사이트·뉴스 글 하단 작성·편집·감수 줄, 제품 상세 기술 감수 줄, FAQ·도구 감수 줄 + 구조화 데이터(Article author/editor, WebPage reviewedBy, Person). 배정 기준은 CMS 작성자(post_nickname) 입력과 같습니다(2026-11-25). */
(function () {
  if (window.__TESSOL_BYLINE) return; window.__TESSOL_BYLINE = 1;
  var O = 'https://www.tessol.com', PG = '/about/experts';
  var P = {
    jang: ['장지훈', '대표이사'], han: ['한승우', '영업본부 총괄이사'],
    kimI: ['김동신', '영업본부 계측기사업부', 'kim'], kimM: ['김동신', '마케팅팀 팀장', 'kim'],
    jung: ['정광호', '영업본부 계측기사업부 총괄'], lee: ['이종승', '영업본부 바이오메디컬사업부 총괄'],
    yang: ['양도현', '밸리데이션사업부 총괄'], seol: ['설대환', '교정사업부 교정1팀 팀장'], park: ['박소현', '마케팅팀 에디터']
  };
  var CAT = {
    cases: { '제약·바이오': 'yang', '병원·의료': 'lee', '연구소·대학': 'kimI', '식품·농업': 'kimI', '물류·콜드체인': 'yang', '제조·전자·반도체': 'jung', '에너지·시설·건설': 'jung', '품질·교정': 'seol' },
    guide: { '온도·습도': 'kimI', '밸리데이션·데이터 무결성': 'yang', '교정·불확도': 'seol', '전기·전력': 'jung', '유량·압력·진동': 'jung', '무선·IoT·시간 동기': 'kimI' },
    regulation: { '의약품 GMP·GDP': 'yang', '백신·의료·연구기관': 'lee', '식품 위생·콜드체인': 'kimI', '표준·인증·안전 기준': 'seol' },
    'product-guide': { '데이터로거·환경 모니터링': 'kimI', '충격·운송 모니터링': 'kimI', '전기·전력 계측': 'jung', '교정기·표준기': 'seol', '유량계·리크 테스터': 'jung', '시간·주파수': 'jung', 'IoT·무선 통신': 'kimI', '수중·로보틱스': 'jung' }
  };
  var KW = [
    ['yang', /JRI|TMI|Nova ?SPY|노바스파이|MySirius|마이시리우스|Green Digital|VACQ|INON|HiTemp|(?<!네트워크 )매핑|밸리데이션|밸리데이터|적격성|(^|[^A-Za-z])[IOP]Q([^A-Za-z]|$)|멸균|데이터 무결성|Part 11|Annex 11|KGSP|열 ?침투|열분포/i],
    ['seol', /KOLAS|교정|불확도|TUR|소급성|표준기|17025/],
    ['lee', /Haier|하이얼|혈액|바이오메디컬|액체질소|LN2|바이오뱅크/i]
  ];
  function insight(b, c, t) { for (var i = 0; i < KW.length; i++) if (KW[i][1].test(t || '')) return KW[i][0]; return (CAT[b] || {})[c] || 'kimI'; }
  function newsRev(t) {
    t = t || '';
    if (/KOLAS|인정|창간|협력|협약|MOU|파트너십|×|창립|ISO/.test(t)) return 'jang';
    if (/Haier|하이얼|바이오메디컬/i.test(t)) return 'lee';
    if (/JRI|TMI|INON|HiTemp|밸리데이터|밸리데이션|매핑/i.test(t)) return 'yang';
    if (/교정|표준기|Cypress/i.test(t)) return 'seol';
    if (/프로모션|사은품|전시|박람회|세미나|이벤트|영업/.test(t)) return 'han';
    return 'jung';
  }
  var TOOL = { 'dew-point-calculator': 'seol', 'tur-calculator': 'seol', 'temperature-mapping-sensor-calculator': 'yang', 'temperature-mapping-checklist': 'yang', 'temperature-regulation-checklist': 'yang', 'mkt-calculator': 'kimI' };
  function aid(k) { return P[k][2] || k; }
  function person(k) { var id = O + PG + '#' + aid(k); return { '@type': 'Person', '@id': id, name: P[k][0], jobTitle: P[k][1], url: id, worksFor: { '@id': O + '/#organization' } }; }
  function txt(e) { return e ? e.textContent.replace(/[⁠​]/g, '').replace(/\s+/g, ' ').trim() : ''; }
  function css() {
    if (document.getElementById('tt-by-css')) return;
    var s = document.createElement('style'); s.id = 'tt-by-css';
    s.textContent = '.tt-by{margin:56px 0 0;padding:16px 0 0;border-top:1px solid #dcdcdc;font-size:14px;line-height:1.8;color:#555}.tt-by p{margin:0}.tt-by b{display:inline-block;min-width:44px;font-weight:600;color:#222}.tt-by a{color:inherit;text-decoration:underline;text-underline-offset:3px}.tt-by-meta{font-size:inherit;color:inherit}';
    document.head.appendChild(s);
  }
  function line(role, k) { return '<p><b>' + role + '</b><a href="' + PG + '#' + aid(k) + '">' + P[k][0] + '</a> ' + P[k][1] + '</p>'; }
  function put(after, rows, inside) {
    var old = document.querySelectorAll('.tt-by'); for (var i = 0; i < old.length; i++) old[i].parentNode.removeChild(old[i]);
    if (!after) return; css();
    var d = document.createElement('div'); d.className = 'tt-by'; d.innerHTML = rows.map(function (r) { return line(r[0], r[1]); }).join('');
    if (inside) after.appendChild(d); else after.parentNode.insertBefore(d, after.nextSibling);
  }
  function ldPatch(fn) {
    var lds = document.querySelectorAll('script[type="application/ld+json"]');
    for (var i = 0; i < lds.length; i++) {
      try { var j = JSON.parse(lds[i].textContent), g = j['@graph'] || [j], hit = 0;
        g.forEach(function (o) { if (fn(o)) hit = 1; });
        if (hit) lds[i].textContent = JSON.stringify(j); } catch (e) {}
    }
  }
  function addLd(id, o) { var x = document.getElementById(id); if (x) x.parentNode.removeChild(x); var s = document.createElement('script'); s.type = 'application/ld+json'; s.id = id; s.textContent = JSON.stringify(o); document.head.appendChild(s); }
  function page(rev) {
    var u = O + location.pathname;
    addLd('tt-by-ld', { '@context': 'https://schema.org', '@type': 'WebPage', '@id': u + '#webpage', url: u, inLanguage: 'ko-KR', reviewedBy: rev.map(person), publisher: { '@id': O + '/#organization' } });
  }
  function run() {
    var path = location.pathname.replace(/\/+$/, ''), m;
    var body = document.querySelector('.news-post__body');
    if (body && (m = path.match(/^\/insight\/([^\/]+)\/view\/\d+/))) {
      var k = insight(m[1], txt(document.querySelector('.news-post__cat')), txt(document.querySelector('.news-post__title')));
      put(body.querySelector('.editorjs-content') || body, [['작성', k], ['편집', 'park']], true); meta(k);
      ldPatch(function (o) { if (!/Article/.test(o['@type'])) return 0; o.author = person(k); o.editor = person('park'); return 1; });
      return;
    }
    if (body && /^\/about\/news\/view\/\d+/.test(path)) {
      var r = newsRev(txt(document.querySelector('.news-post__title')));
      put(body.querySelector('.editorjs-content') || body, [['작성', 'kimM'], ['감수', r]], true); meta('kimM');
      ldPatch(function (o) { if (!/Article/.test(o['@type'])) return 0; o.author = person('kimM'); return 1; });
      page([r]); return;
    }
    var pv = document.querySelector('.page-product-view .pview-info__body');
    if (pv && /^\/products\//.test(path)) {
      var br = '', cats = path.split('/');
      ldPatch(function (o) { if (o['@type'] === 'Product' && o.brand) br = o.brand.name || ''; return 0; });
      var who = /haier/i.test(br) || cats[2] === 'biomedical' ? 'lee' : /JRI|TMI/i.test(br) || /validator/.test(path) ? 'yang' : cats[2] === 'calibration' ? 'seol' : 'jung';
      put(pv.querySelector('.editorjs-content') || pv, [['기술 감수', who]], true); page([who]); return;
    }
    var tk = /^\/tools\//.test(path) && TOOL[path.split('/').pop()];
    if (tk) { put(document.querySelector('.editorjs-content'), [['감수', tk]], true); return; }
    var fq = document.querySelector('.faq-item');
    var fk = /^\/cal\//.test(path) ? 'seol' : /^\/val\//.test(path) ? 'yang' : /^\/support\/faq/.test(path) ? 'han' : '';
    if (fq && fk) { var all = document.querySelectorAll('.faq-item'), last = all[all.length - 1].parentNode; put(last, [['감수', fk]], false); page([fk]); return; }
    put(null);
  }
  function meta(k) {
    var mm = document.querySelector('.news-post__meta'); if (!mm || mm.querySelector('.tt-by-meta')) return;
    var s = document.createElement('p'); s.className = 'news-post__date tt-by-meta'; s.textContent = P[k][0] + ' ' + P[k][1]; mm.appendChild(s);
  }
  function go() { try { run(); } catch (e) {} }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
  document.addEventListener('hah:content-swapped', function () { setTimeout(go, 60); });
})();
