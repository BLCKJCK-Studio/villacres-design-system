// Libro de Dirección Visual · versión web. Sin dependencias.
// Hace tres cosas: la tira del arco marca el plano en pantalla, el visor muestra las referencias a pantalla completa
// y los pares se pueden superponer con un corte que se arrastra. Sin este archivo el libro se lee igual.
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const calma = matchMedia('(prefers-reduced-motion: reduce)');
  // En la versión publicada con clave las imágenes van cifradas y esta función las entrega ya descifradas.
  const recurso = window.libroRecurso || ((ruta) => Promise.resolve(ruta));

  // ---------- 1. Tira del arco: sube la miniatura de lo que está en pantalla ----------
  const arco = $('.arco');
  const enlaces = $$('a', arco);
  const paradas = $$('.parada');
  let actual = 0;

  const marca = (cods) => {
    let primero = null;
    enlaces.forEach((a) => {
      const on = cods.includes(a.dataset.c);
      a.classList.toggle('on', on);
      if (on) { a.setAttribute('aria-current', 'true'); primero = primero || a; } else a.removeAttribute('aria-current');
    });
    // en celular la tira se desplaza sola para dejar el plano actual al centro
    if (primero && arco.scrollWidth > arco.clientWidth) {
      arco.scrollTo({ left: primero.offsetLeft - (arco.clientWidth - primero.offsetWidth) / 2, behavior: calma.matches ? 'auto' : 'smooth' });
    }
  };

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        actual = paradas.indexOf(e.target);
        marca((e.target.dataset.c || '').split(' ').filter(Boolean));
      });
    }, { rootMargin: '-45% 0px -45% 0px' }); // cuenta la sección que cruza el centro de la pantalla
    paradas.forEach((p) => io.observe(p));
  }

  // ---------- 2. Visor: cualquier referencia a pantalla completa, con anterior y siguiente ----------
  const visor = $('#visor');
  const vImg = document.createElement('img'); // la imagen se crea aquí: sin JS no hay visor y el enlace abre el archivo
  const vCod = $('.pie b', visor), vTit = $('.pie span', visor);
  visor.prepend(vImg);
  const refs = enlaces.map((a) => ({ c: a.dataset.c, t: a.dataset.t, img: a.dataset.img }));
  let vi = 0, origen = null, turno = 0;

  const pon = (ruta, alt) => {
    const mio = ++turno; // si se pasa rápido de una a otra, solo se pinta la última pedida
    vImg.removeAttribute('src');
    vImg.alt = alt;
    recurso(ruta).then((u) => { if (mio === turno) vImg.src = u; });
  };
  const muestra = (i) => {
    vi = (i + refs.length) % refs.length;
    const r = refs[vi];
    pon(r.img, `Referencia ${r.c}: ${r.t}`);
    vCod.textContent = r.c;
    vTit.textContent = r.t;
  };

  if (visor && typeof visor.showModal === 'function') {
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a.ref');
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey || a.closest('.duo.sup')) return;
      e.preventDefault();
      origen = a;
      const i = refs.findIndex((r) => r.c === a.dataset.c);
      visor.classList.toggle('una', i < 0);
      if (i < 0) { pon(a.dataset.rec || a.getAttribute('href'), a.dataset.t || ''); vCod.textContent = ''; vTit.textContent = a.dataset.t || ''; } else muestra(i);
      visor.showModal();
    });
    $('.cerrar', visor).addEventListener('click', () => visor.close());
    $('.ant', visor).addEventListener('click', () => muestra(vi - 1));
    $('.sig', visor).addEventListener('click', () => muestra(vi + 1));
    // en celular: deslizar a los lados pasa de referencia
    let x0 = null, y0 = 0, deslizo = 0;
    visor.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    visor.addEventListener('touchend', (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
      x0 = null;
      if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy) || visor.classList.contains('una')) return;
      deslizo = Date.now();
      muestra(vi + (dx < 0 ? 1 : -1));
    });
    visor.addEventListener('click', (e) => { if ((e.target === visor || e.target === vImg) && Date.now() - deslizo > 400) visor.close(); });
    visor.addEventListener('close', () => { turno++; vImg.removeAttribute('src'); if (origen) origen.focus({ preventScroll: true }); });
  }

  // ---------- 3. Teclado: flechas para pasar de plano en plano (o de referencia, dentro del visor) ----------
  addEventListener('keydown', (e) => {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    if (visor && visor.open) { if (!visor.classList.contains('una')) muestra(vi + d); return; }
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return; // el corte de un par usa las flechas
    const destino = paradas[Math.max(0, Math.min(paradas.length - 1, actual + d))];
    e.preventDefault();
    destino.scrollIntoView({ block: 'start' }); // sin animación: es una acción de teclado y se repite mucho al presentar
  });

  // ---------- 4. Rodaje: marcar planos como rodados, filtrar el índice y copiar o enviar una ficha ----------
  const CLAVE = 'libro-rodados:' + location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '');
  const leer = () => { try { return new Set(JSON.parse(localStorage.getItem(CLAVE) || '[]')); } catch { return new Set(); } };
  const rodados = leer();
  const guardar = () => { try { localStorage.setItem(CLAVE, JSON.stringify([...rodados])); } catch { /* sin almacenamiento: el avance dura mientras la pestaña esté abierta */ } };
  const codigos = enlaces.map((a) => a.dataset.c);
  const TICK = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; };

  const filtro = { modo: 'todos' };
  let contador = null, nota = null;
  const refresca = () => {
    $$('[data-c]').forEach((n) => { if (n.matches('.arco a, .grupo .fila a')) n.classList.toggle('hecho', rodados.has(n.dataset.c)); });
    $$('.rodado').forEach((b) => {
      const on = rodados.has(b.dataset.c);
      b.setAttribute('aria-pressed', String(on));
      b.querySelector('.txt').textContent = on ? 'Rodado' : 'Marcar como rodado';
    });
    $$('.plano').forEach((p) => p.classList.toggle('es-hecho', rodados.has(p.dataset.c)));
    if (contador) {
      contador.querySelector('b').textContent = rodados.size;
      contador.querySelector('i').style.width = (rodados.size / codigos.length * 100) + '%';
      contador.classList.toggle('vacio', rodados.size === 0);
    }
    let visibles = 0;
    $$('.grupo .fila a').forEach((a) => {
      const c = a.dataset.c, h = rodados.has(c), g = a.dataset.gente === 'si';
      const m = { todos: true, insertos: !g, gente: g, pendientes: !h, rodados: h }[filtro.modo];
      a.classList.toggle('apagado', !m);
      if (m) visibles++;
    });
    if (nota) nota.textContent = filtro.modo === 'todos' ? '' : `${visibles} ${visibles === 1 ? 'plano' : 'planos'}`;
  };

  // botones en cada plano
  $$('.plano').forEach((p) => {
    const info = $('.info', p);
    if (!info) return;
    const c = p.dataset.c;
    const fila = el('div', 'acciones');
    const rod = el('button', 'rodado', TICK + '<span class="txt">Marcar como rodado</span>');
    rod.type = 'button'; rod.dataset.c = c;
    rod.addEventListener('click', () => { rodados.has(c) ? rodados.delete(c) : rodados.add(c); guardar(); refresca(); });
    const cop = el('button', 'copiar', '<span class="txt"></span>');
    cop.type = 'button';
    const enviar = typeof navigator.share === 'function' && matchMedia('(pointer: coarse)').matches;
    const base = enviar ? 'Enviar ficha' : 'Copiar ficha';
    cop.querySelector('.txt').textContent = base;
    cop.addEventListener('click', async () => {
      const t = [`${c} · ${$('.t', p) ? $('.t', p).textContent.trim() : $('h3', p).textContent.trim()}`, $('.info > .caja', p)?.textContent.trim(), '', $('.escena', p)?.textContent.trim(), '']
        .concat($$('.campo', p).map((d) => `${$('dt', d).textContent.trim()}: ${$('dd', d).textContent.replace(/\s+/g, ' ').trim()}`)).join('\n');
      let msg = 'Copiada';
      try {
        if (enviar) { await navigator.share({ title: `Plano ${c}`, text: t }); msg = base; }
        else await navigator.clipboard.writeText(t);
      } catch { msg = enviar ? base : 'No se pudo copiar'; }
      cop.querySelector('.txt').textContent = msg;
      setTimeout(() => { cop.querySelector('.txt').textContent = base; }, 1800);
    });
    fila.append(rod, cop);
    info.append(fila);
  });

  // avance y filtros en el índice
  const cab = $('#indice header');
  if (cab) {
    contador = el('p', 'avance', '<span><b>0</b> de ' + codigos.length + ' planos rodados</span><span class="barra-av" aria-hidden="true"><i></i></span>');
    const chips = el('div', 'filtros');
    chips.setAttribute('role', 'group');
    chips.setAttribute('aria-label', 'Filtrar los planos');
    [['todos', 'Todos'], ['insertos', 'Insertos'], ['gente', 'Con personas'], ['pendientes', 'Pendientes'], ['rodados', 'Rodados']].forEach(([m, t]) => {
      const b = el('button', '', t); b.type = 'button'; b.dataset.modo = m; b.setAttribute('aria-pressed', String(m === 'todos'));
      if (m === 'insertos') b.title = 'Planos sin personas en cuadro: se pueden usar tal cual como insertos';
      b.addEventListener('click', () => { filtro.modo = m; $$('button', chips).forEach((x) => x.setAttribute('aria-pressed', String(x === b))); refresca(); });
      chips.append(b);
    });
    nota = el('p', 'cuenta'); nota.setAttribute('role', 'status');
    const reinicio = el('button', 'reinicio', 'Borrar avance'); reinicio.type = 'button';
    reinicio.addEventListener('click', () => { if (rodados.size && confirm('¿Borrar el avance de rodaje de este dispositivo?')) { rodados.clear(); guardar(); refresca(); } });
    const caja = el('div', 'panel'); caja.append(contador, chips, nota, reinicio);
    cab.append(caja);
  }
  refresca();

  // ---------- 5. Pares: lado a lado o superpuestos ----------
  $$('.duo').forEach((duo) => {
    const vistas = $('.vistas', duo);
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'modo';
    boton.textContent = 'Superponer';
    boton.setAttribute('aria-pressed', 'false');

    const corte = document.createElement('input');
    corte.type = 'range';
    corte.className = 'corte';
    corte.min = 0; corte.max = 100; corte.value = 50;
    corte.setAttribute('aria-label', 'Corte entre las dos referencias');
    corte.hidden = true;
    corte.addEventListener('input', () => vistas.style.setProperty('--corte', corte.value + '%'));

    boton.addEventListener('click', () => {
      const on = duo.classList.toggle('sup');
      boton.setAttribute('aria-pressed', String(on));
      corte.hidden = !on;
    });
    duo.prepend(boton);
    vistas.append(corte);
  });
})();
