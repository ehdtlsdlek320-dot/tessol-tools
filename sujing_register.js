// sujing_register.js — Sujing 누락 제품 신규 등록(상품 생성 + 상세 본문 + 대표·갤러리 사진) · (주)테솔 CMS
// 사용: CMS 로그인한 크롬 탭(…/cms/web/products/shopitem) → F12 → Console에 붙여넣기.
//  기본은 dry(읽기만). 저장: window.__SJ_MODE='live' 입력 후 다시 붙여넣기.
//  일부만: window.__SJ_ONLY=['sujing-y09-350', …]  또는 window.__SJ_LIMIT=3
//  데이터(본문·사진)는 GitHub tessol-tools 저장소 sujing-assets-1125 가지에서 읽습니다.
//  이미 만든 상품은 다시 만들지 않고 본문·사진만 다시 저장합니다(여러 번 실행해도 안전). 삭제는 하지 않습니다.
//  다른 본문 저장 스크립트와 동시에 돌리지 마세요.
(async () => {
  const MODE = window.__SJ_MODE === 'live' ? 'live' : 'dry';
  const ONLY = Array.isArray(window.__SJ_ONLY) ? window.__SJ_ONLY : null;
  const LIMIT = Number(window.__SJ_LIMIT || 0);
  const RAW = 'https://raw.githubusercontent.com/ehdtlsdlek320-dot/tessol-tools/sujing-assets-1125/';
  const O = location.origin, root = O + '/cms/web/products/shopitem/', upUrl = O + '/cms/web/board/editorimage/upload';
  const BRAND_ID = '34';                       // SUJING
  const CATPATH = { '72': ['1', '4', '72'], '78': ['1', '4', '78'], '81': ['1', '4', '81'] };
  const LEAF = { '72': 'indoor-air-quality-meter', '78': 'thickness-hardness-airflow-meter', '81': 'misc-meter' };
  const EXIST = {   // 기존 Sujing 상품 공개 주소(관련 제품 링크용)
    'sujing-y09-5100x-pro': '/products/measurement/environment/sujing-y09-5100x-pro',
    'sujing-y09-3016hw': '/products/measurement/indoor-air-quality-meter/1795481292',
    'sujing-y09-310x': '/products/measurement/indoor-air-quality-meter/1795488593',
    'sujing-y09-310xpro': '/products/measurement/indoor-air-quality-meter/1795569499',
    'sujing-zrqf-f30j': '/products/measurement/indoor-air-quality-meter/sujing-zrqf-f30j'
  };
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const LS = (k, d) => { try { return JSON.parse(localStorage.getItem(k) || d); } catch (e) { return JSON.parse(d); } };
  const reg = LS('sj_reg_v1', '{}'), up = LS('sj_up_v1', '{}');
  const save = () => { localStorage.setItem('sj_reg_v1', JSON.stringify(reg)); localStorage.setItem('sj_up_v1', JSON.stringify(up)); };
  const getDoc = async u => { for (let i = 0; i < 3; i++) { try { const r = await fetch(u, { credentials: 'same-origin', cache: 'no-store' }); if (r.ok) return new DOMParser().parseFromString(await r.text(), 'text/html'); } catch (e) { } await sleep(800); } throw new Error('불러오기 실패 ' + u); };
  const formOf = (d, n) => { const e = d.querySelector('[name="' + n + '"]'); return e && e.closest('form'); };
  const post = async (f, fd, fallback, urlenc) => {
    const act = new URL(f.getAttribute('action') || fallback, root).href;
    let body = fd, headers = {};
    if (urlenc) { body = new URLSearchParams(); for (const [k, v] of fd.entries()) if (typeof v === 'string') body.append(k, v); headers = { 'content-type': 'application/x-www-form-urlencoded' }; }
    const r = await fetch(act, { method: 'POST', body, credentials: 'same-origin', headers });
    if (!r.ok) throw new Error('저장 실패 ' + r.status + ' ' + act); return r;
  };
  const fileOf = async (path, name) => { const r = await fetch(RAW + path); if (!r.ok) throw new Error('사진 못 읽음 ' + path); const b = await r.blob(); return new File([b], name, { type: 'image/jpeg' }); };
  const dl = (n, o) => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(o, null, 1)], { type: 'application/json' })); a.download = n; document.body.appendChild(a); a.click(); a.remove(); };

  // 본문 사진 업로드: 한 장씩 올리고 응답에 새로 생긴 /uploads/editor 주소를 고릅니다.
  const seen = new Set(); let seenReady = false, csrf = '';
  const stamp = u => { const m = u.match(/\/(\d{9,11})_[^\/]*$/); return m ? +m[1] : 0; };
  async function upload(id) {
    if (up[id]) return up[id];
    const file = await fileOf('sujing/' + id + '.jpg', 'sujing-' + id + '.jpg');
    const t0 = Math.floor(Date.now() / 1000);
    let r, tx;
    for (let a = 0; a < 2; a++) {
      if (!csrf || a) csrf = (await getDoc(root + 'write')).querySelector('[name="csrf_test_name"]').value;
      const fd = new FormData(); fd.append('csrf_test_name', csrf); fd.append('images[]', file, file.name);
      r = await fetch(upUrl, { method: 'POST', body: fd, credentials: 'same-origin' }); tx = await r.text();
      if (r.status !== 403) break;
    }
    if (!r.ok) throw new Error('업로드 ' + r.status);
    const used = new Set(Object.values(up));
    const all = [...new Set(tx.replace(/\\\//g, '/').match(/\/uploads\/editor\/[^"'\s<>\\]+\.(?:jpe?g|png|webp)/gi) || [])];
    let c = all.filter(u => !used.has(u)); const fresh = c.filter(u => !seen.has(u)); all.forEach(u => seen.add(u));
    if (seenReady && fresh.length) c = fresh; seenReady = true;
    c = c.map(u => ({ u, ts: stamp(u) })).sort((x, y) => y.ts - x.ts);
    if (!c.length || c[0].ts < t0 - 120) throw new Error('업로드 주소 확인 실패 ' + id);
    up[id] = c[0].u; save(); return c[0].u;
  }

  // 기존 SUJING 상품 찾기(주소 키 → 상품번호). 목록 전체를 한 번 훑습니다(읽기 전용).
  async function scanExisting() {
    const out = {};
    for (let p = 1; p <= 80; p++) {
      const d = await getDoc(root + '?page=' + p); const rows = [...d.querySelectorAll('tbody tr')]; let any = false;
      for (const tr of rows) { const a = tr.querySelector('a[href*="/write/"]'); if (!a) continue; any = true; if (/SUJING/i.test(tr.textContent)) out[a.getAttribute('href').match(/write\/(\d+)/)[1]] = 1; }
      if (!any) break;
    }
    const map = {};
    for (const no of Object.keys(out)) { const f = formOf(await getDoc(root + 'write/' + no), 'it_basic'); const fd = new FormData(f); map[String(fd.get('it_key'))] = { no, name: String(fd.get('it_name')), model: String(fd.get('it_model')) }; }
    return map;
  }

  async function create(it) {
    const d = await getDoc(root + 'write'); const f = formOf(d, 'it_name'); if (!f) throw new Error('등록 폼 없음(로그인 확인)');
    const fd = new FormData(f);
    fd.set('it_name', it.it_name); fd.set('it_key', it.key); fd.set('it_basic', it.it_basic); fd.set('it_seo_title', it.it_seo_title);
    fd.set('it_model', it.model); fd.set('it_brand_id', BRAND_ID);
    fd.delete('ca_id[]'); CATPATH[it.cat].forEach(x => fd.append('ca_id[]', x));
    fd.delete('it_store_use'); fd.set('it_products_use', '1'); fd.set('it_use', '1'); fd.set('it_tel_inq', '1'); fd.set('it_type2', '1');
    fd.set('it_info_gubun', 'etc'); fd.delete('ii_article[]'); fd.delete('ii_value[]');
    ['product_name', 'model_name', 'certified_by_law', 'origin', 'maker', 'as'].forEach(a => { fd.append('ii_article[]', a); fd.append('ii_value[]', '상품페이지 참고'); });
    const r = await post(f, fd, 'write');
    let no = (r.url.match(/write(?:_explan|_image)?\/(\d+)/) || [])[1];
    if (!no) { const d1 = await getDoc(root + '?page=1'); for (const tr of d1.querySelectorAll('tbody tr')) { const a = tr.querySelector('a[href*="/write/"]'); if (!a) continue; const n = a.getAttribute('href').match(/write\/(\d+)/)[1]; const ff = new FormData(formOf(await getDoc(root + 'write/' + n), 'it_basic')); if (String(ff.get('it_key')) === it.key) { no = n; break; } } }
    if (!no) throw new Error('새 상품 번호를 못 찾음 ' + it.key);
    const chk = new FormData(formOf(await getDoc(root + 'write/' + no), 'it_basic'));
    if (String(chk.get('it_key')) !== it.key || String(chk.get('it_brand_id')) !== BRAND_ID) throw new Error('생성 확인 실패 ' + it.key + ' (주소 키 ' + chk.get('it_key') + ', 브랜드 ' + chk.get('it_brand_id') + ')');
    return no;
  }

  async function writeBasic(no, it) {   // 기존(이번 스크립트가 만든) 상품: 이름·요약·메타·모델만 다시 맞춤
    const f = formOf(await getDoc(root + 'write/' + no), 'it_basic'); const fd = new FormData(f);
    if (String(fd.get('it_no')) !== String(no)) throw new Error('상품번호 불일치');
    fd.set('it_name', it.it_name); fd.set('it_basic', it.it_basic); fd.set('it_seo_title', it.it_seo_title); fd.set('it_model', it.model);
    await post(f, fd, 'write/' + no);
  }

  function fill(v, urls, links) {
    if (typeof v === 'string') return v.replace(/photo:(\d+)/g, (m, id) => urls[id] || m).replace(/href=\\?"@([a-z0-9-]+)\\?"/g, (m, k) => links[k] ? 'href="' + links[k] + '"' : m);
    if (Array.isArray(v)) return v.map(x => fill(x, urls, links));
    if (v && typeof v === 'object') { const o = {}; for (const k of Object.keys(v)) o[k] = fill(v[k], urls, links); return o; }
    return v;
  }
  const unlink = s => typeof s === 'string' ? s.replace(/<a href="@[^"]*">([\s\S]*?)<\/a>/g, '$1') : s;

  async function writeExplan(no, it, urls, links) {
    const d = await getDoc(root + 'write_explan/' + no); const f = formOf(d, 'it_explan'); if (!f) throw new Error('본문 폼 없음');
    const fd = new FormData(f); if (String(fd.get('it_no')) !== String(no)) throw new Error('본문 상품번호 불일치');
    const ed = fill(JSON.parse(JSON.stringify(it.explan)), urls, links); ed.time = Date.now();
    ed.blocks.forEach(b => { if (b.type === 'list') b.data.items.forEach(x => { x.content = unlink(x.content); }); if (b.type === 'paragraph') b.data.text = unlink(b.data.text); });
    const js = JSON.stringify(ed); if (/photo:\d+|href="@/.test(js)) throw new Error('채우지 못한 사진/링크가 남음');
    fd.set('it_explan', js); await post(f, fd, 'write_explan/' + no, true);
    const back = ((await getDoc(root + 'write_explan/' + no)).querySelector('[name="it_explan"]') || {}).value || '';
    return back.length > 0 && JSON.parse(back).blocks.length === ed.blocks.length;
  }

  async function writeImages(no, it) {   // 대표 사진(정사각) + 갤러리(본문 사진 최대 5장). 대표 사진이 이미 있으면 건너뜀.
    const d = await getDoc(root + 'write_image/' + no); const f = formOf(d, 'it_thumb'); if (!f) throw new Error('이미지 폼 없음');
    const has = [...d.querySelectorAll('img')].some(i => /\/uploads\/shop\//.test(i.getAttribute('src') || ''));
    if (has) return 'skip(이미 있음)';
    const fd = new FormData(f);
    fd.set('it_thumb', await fileOf('sujing_sq/' + it.hero_photo + '.jpg', it.key + '.jpg'));
    const gal = [it.hero_photo, ...it.photos.filter(p => p !== it.hero_photo)].slice(0, 6);
    for (let i = 0; i < gal.length; i++) fd.set('gallery_file[' + i + ']', await fileOf('sujing_sq/' + gal[i] + '.jpg', it.key + '-' + (i + 1) + '.jpg'));
    await post(f, fd, 'write_image/' + no);
    const d2 = await getDoc(root + 'write_image/' + no);
    return [...d2.querySelectorAll('img')].filter(i => /\/uploads\/shop\//.test(i.getAttribute('src') || '')).length;
  }

  try {
    const P = await (await fetch(RAW + 'sujing_payload.json?t=' + Date.now(), { cache: 'no-store' })).json();
    let items = P.items; if (ONLY) items = items.filter(x => ONLY.includes(x.key)); if (LIMIT) items = items.slice(0, LIMIT);
    console.log('[SJ ' + MODE + '] 데이터 ' + P.items.length + '개, 이번 ' + items.length + '개. 기존 Sujing 상품 확인 중…');
    const ex = await scanExisting();
    console.log('[SJ] 기존 SUJING 상품:', Object.entries(ex).map(([k, v]) => v.no + ' ' + k + ' ' + v.model).join(' | '));
    const links = Object.assign({}, EXIST); for (const it of P.items) links[it.key] = '/products/measurement/' + LEAF[it.cat] + '/' + it.key;
    const log = [];
    for (const it of items) {
      const rec = { key: it.key, name: it.it_name };
      const known = reg[it.key] || (ex[it.key] && ex[it.key].no);
      const dupModel = !known && Object.values(ex).find(v => v.model.replace(/\s/g, '').toLowerCase() === it.model.replace(/\s/g, '').toLowerCase());
      rec.action = known ? '본문·사진 다시 저장(' + known + ')' : dupModel ? '건너뜀: 같은 모델 상품 있음 ' + dupModel.no : '새로 만들기';
      if (MODE !== 'live' || dupModel) { rec.status = MODE === 'live' ? 'SKIP' : 'dry-ok'; rec.photos = it.photos.length; log.push(rec); console.log(rec.status, it.key, rec.action, '사진 ' + it.photos.length); continue; }
      try {
        const urls = {}; for (const id of it.photos) { urls[id] = await upload(id); await sleep(200); }
        let no = known; if (!no) { no = await create(it); reg[it.key] = no; save(); } else await writeBasic(no, it);
        rec.it_no = no;
        rec.body = await writeExplan(no, it, urls, links) ? 'saved' : 'CHECK';
        rec.images = await writeImages(no, it);
        rec.url = links[it.key]; rec.status = rec.body === 'saved' ? 'saved' : 'CHECK';
      } catch (e) { rec.status = 'ERROR'; rec.error = String(e.message || e); }
      log.push(rec); console.log(rec.status, it.key, rec.it_no || '', rec.error || '', rec.url || ''); await sleep(300);
    }
    const ok = log.filter(x => /saved|dry-ok/.test(x.status)).length;
    console.log('[SJ ' + MODE + '] 끝: 정상 ' + ok + ' / ' + log.length);
    window.__SJ_LOG = log;
    if (MODE === 'live') dl('sujing_register_result_' + Date.now() + '.json', log);
  } catch (e) { console.log('[SJ] ❌ 오류:', String(e.message || e)); }
})();
