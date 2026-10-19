/* @ds-bundle: {"format":4,"namespace":"Villacres","components":[{"name":"Logo"},{"name":"Badge621"},{"name":"SomosProgreso"},{"name":"CtaVoto"},{"name":"CheckVoto"},{"name":"Zocalo"},{"name":"Avatar"},{"name":"TarjetaPropuesta"},{"name":"TarjetaConcejal"},{"name":"Icono"},{"name":"Rio"},{"name":"Greca"}]} */
(function(){
var R=window.React,h=R.createElement;
var LOGOS={"apilado/full": "/_blob/15555f845559d620d688a2d5441845f5", "apilado/negativo": "/_blob/80773703b3825940725f57206470df4c", "apilado/mono-selva": "/_blob/f1a15cba7c1b4927c715a1a8dd7bab29", "apilado/mono-blanco": "/_blob/ca07fbb7b7e7e8a21732a9921f8d3fed", "apilado/mono-negro": "/_blob/f94acd4fdd4fb72b97faab036af368fe", "compacto/full": "/_blob/9f9069b3ec80d689b5d3d79885523ec2", "compacto/negativo": "/_blob/3bf5e79836d8855ce3d6069083a18493", "compacto/mono-selva": "/_blob/eb18af1ef589b946a1d0d4cb29009d6a", "compacto/mono-blanco": "/_blob/8f8ac3b3f90be7177951b807ed720c37", "compacto/mono-negro": "/_blob/348a6b6b83a0ad983d308ef301b91dea", "horizontal/full": "/_blob/25af9ebf6d36b06b1f02d4036d1a8235", "horizontal/negativo": "/_blob/22143afebd1945868ab1b789fd6c43ea", "horizontal/mono-selva": "/_blob/001070ec77251fa48f16a7e8c5f8eff1", "horizontal/mono-blanco": "/_blob/9ecb95ba338f7f8424a6cbf8e29b9a78", "horizontal/mono-negro": "/_blob/07a3c730d15a30ec2f8a39efa210b5bd", "isotipo/full": "/_blob/f451b803d2b60df28d8c1e7aceb79e71", "isotipo/negativo": "/_blob/2bb61cbc5a70b4bd9cb083350ec0fdac", "isotipo/mono-selva": "/_blob/6598856c1c1375757912d53d3e9fc461", "isotipo/mono-blanco": "/_blob/e75839461a826e30ff7ee1925be027b6", "isotipo/mono-negro": "/_blob/96391d03036efb2f7004097cd7b34a31"};
var ICONS={"agua": ["M12 3s-6.5 7.6-6.5 12a6.5 6.5 0 0 0 13 0C18.5 10.6 12 3 12 3z", "M9 15.5a3 3 0 0 0 3 3"], "vias": ["M8 21 10.6 3", "M16 21 13.4 3", "M12 18.5v-2", "M12 12.5v-2", "M12 6.5v-1"], "agricultura": ["M12 21V11", "M12 15c0-3.9-2.7-6.5-7-6.5 0 3.9 2.7 6.5 7 6.5z", "M12 11.5c0-3.9 2.7-6.5 7-6.5 0 3.9-2.7 6.5-7 6.5z", "M5 21h14"], "salud": ["M9.2 3.5h5.6v5.7h5.7v5.6h-5.7v5.7H9.2v-5.7H3.5V9.2h5.7z"], "educacion": ["M3 5.5c3-1 6-.7 9 1 3-1.7 6-2 9-1v13c-3-1-6-.7-9 1-3-1.7-6-2-9-1z", "M12 6.5v13"], "turismo": ["M2.5 20.5 9.5 8.5l4 6.5 2.5-3.5 5.5 9z", "M17 2.8v1.4", "M20.4 4.6l-1 1", "M13.6 4.6l1 1"], "seguridad": ["M12 3l7.5 3v5.2c0 4.8-3.2 8.3-7.5 9.8-4.3-1.5-7.5-5-7.5-9.8V6z", "M8.8 12.2l2.2 2.2 4.2-4.4"], "deporte": ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z", "M12 8l3.6 2.6-1.4 4.2H9.8l-1.4-4.2z", "M12 8V3.5", "M15.6 10.6l4.6-1.3", "M14.2 14.8l2.8 4", "M9.8 14.8 7 18.8", "M8.4 10.6 3.8 9.3"], "mujer": ["M12 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z", "M12 12.5v8.5", "M8.8 17.8h6.4"], "juventud": ["M12 2.8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z", "M5.5 7.5l6.5 3.5 6.5-3.5", "M12 11v4.5", "M12 15.5l-3.5 5.5", "M12 15.5l3.5 5.5"], "motos": ["M5.5 13a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z", "M18.5 13a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z", "M5.5 16.5 9 10.5h5.5l4 6", "M14.5 10.5 13 7h3", "M9 10.5l3.2 6h2.3"], "comunidad": ["M12 3.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z", "M6.2 6.8a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6z", "M17.8 6.8a2.3 2.3 0 1 0 0 4.6 2.3 2.3 0 0 0 0-4.6z", "M7 20.5c0-3.8 2.2-6.5 5-6.5s5 2.7 5 6.5", "M2.5 18.5c0-2.7 1.5-4.6 3.7-4.6", "M21.5 18.5c0-2.7-1.5-4.6-3.7-4.6"], "ambiente": ["M12 21v-6.5", "M12 3a6 6 0 0 1 6 6c0 3.3-2.7 5.8-6 5.8S6 12.3 6 9a6 6 0 0 1 6-6z", "M12 12.3 9.3 9.6", "M12 10.6l2.4-2.4"], "vivienda": ["M3.5 11 12 3.8l8.5 7.2", "M6 9v11.5h12V9", "M10 20.5v-5.2h4v5.2"], "produccion": ["M3.5 10h17l-2.2 10.5H5.7z", "M8 10l3-6", "M16 10l-3-6", "M9 13.8v3.4", "M12 13.8v3.4", "M15 13.8v3.4"], "transparencia": ["M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z", "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"], "adulto-mayor": ["M10 2.8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z", "M10 8.5l-1 5.5 2.2 7", "M9 14l-3 7", "M9.6 10.2l4.6 2.2", "M16.5 12v9", "M14.5 12h2"], "cultura": ["M12 12h2.4V9.2H9.6v5.6h7.2V6.4H6.8v11.2h12.4", "M3.5 20.5h17"]};
var LABELS={"agua": "Agua potable", "vias": "Vías", "agricultura": "Agricultura", "salud": "Salud", "educacion": "Educación", "turismo": "Turismo", "seguridad": "Seguridad", "deporte": "Deporte", "mujer": "Mujer", "juventud": "Juventud", "motos": "Motos y transporte", "comunidad": "Comunidad", "ambiente": "Ambiente", "vivienda": "Vivienda", "produccion": "Producción y acopio", "transparencia": "Transparencia", "adulto-mayor": "Adulto mayor", "cultura": "Cultura ancestral"};
function cx(){return Array.prototype.filter.call(arguments,Boolean).join(' ')}
function Logo(p){var v=p.version||'apilado',c=p.color||'full';var src=LOGOS[v+'/'+c]||LOGOS['apilado/full'];
  return h('img',{src:src,alt:p.alt||'Mesías Villacrés 2026',className:cx('vc-logo',p.className),style:Object.assign({width:p.width||320},p.style)})}
function Box(p){return h('span',{className:cx('vc-box',p.className),style:p.style},h('span',{className:'vc-unskew'},p.children))}
function Badge621(p){var v=p.variant||'horizontal',on=p.on||'light',s=p.size||96;
  var one=h('span',{className:'vc-one'},'1');
  if(v==='mini')return h(Box,{className:cx('vc-badge','vc-badge-mini','vc-on-'+on),style:{fontSize:s}},h('span',{className:'vc-num'},'62-',one));
  return h(Box,{className:cx('vc-badge','vc-badge-'+v,'vc-on-'+on),style:{fontSize:s}},
    h('span',{className:'vc-alianza'},'ALIANZA'),h('span',{className:'vc-num'},'62-',one),v==='vertical'?h('span',{className:'vc-votaasi'},'VOTA ASÍ'):null)}
function SomosProgreso(p){var on=p.on||'light',s=p.size||64;
  return h('span',{className:cx('vc-slogan',p.stacked&&'vc-slogan-stack','vc-on-'+on),style:{fontSize:s}},
    h('span',{className:'vc-somos'},'SOMOS'),h(Box,{className:'vc-progreso'},p.word||'PROGRESO'))}
function CheckVoto(p){var s=p.size||64,on=p.on||'light';
  return h('svg',{className:'vc-check',width:s,height:s*1.12,viewBox:'0 -14 100 114',role:'img','aria-label':'Voto marcado'},
    on==='light'?h('rect',{x:0,y:0,width:100,height:100,rx:8,fill:'var(--selva-700)'}):h('rect',{x:6,y:6,width:88,height:88,rx:6,fill:'none',stroke:'#fff',strokeWidth:12}),
    h('path',{d:'M20 52 L43 76 L112 -12',fill:'none',stroke:'var(--voto-400)',strokeWidth:17,strokeLinecap:'round',strokeLinejoin:'round'}))}
function CtaVoto(p){var on=p.on||'light',s=p.size||48;
  return h(Box,{className:cx('vc-cta','vc-on-'+on),style:{fontSize:s}},
    h('span',{className:'vc-cta-mark','aria-hidden':'true'},h('svg',{viewBox:'0 -14 100 114'},
      h('rect',{x:0,y:0,width:100,height:100,rx:8,fill:on==='light'?'none':'var(--selva-700)',stroke:on==='light'?'#fff':'none',strokeWidth:12}),
      h('path',{d:'M20 52 L43 76 L'+(on==='light'?'112 -12':'92 12'),fill:'none',stroke:'var(--voto-400)',strokeWidth:17,strokeLinecap:'round',strokeLinejoin:'round'}))),
    (p.label||'VOTA')+' 62-1')}
function Zocalo(p){var s=p.size||40;
  return h('div',{className:'vc-zocalo',style:{fontSize:s}},
    h(Box,{className:'vc-zoc-name'},p.nombre||'MESÍAS VILLACRÉS'),
    h(Box,{className:'vc-zoc-role'},p.cargo||'CANDIDATO A LA ALCALDÍA · SANTA CLARA'),
    h('span',{className:'vc-zoc-badge'},h(Badge621,{variant:'mini',size:s*0.9})))}
function Avatar(p){var s=p.size||160;
  return h('span',{className:'vc-avatar',style:{width:s,height:s}},
    h('span',{className:'vc-avatar-ring'},p.src?h('img',{src:p.src,alt:p.alt||''}):null),
    p.badge===false?null:h('span',{className:'vc-avatar-badge'},h(Badge621,{variant:'mini',size:s*0.2})))}
function Icono(p){var s=p.size||32,d=ICONS[p.name]||ICONS.agua;
  return h('svg',{className:cx('vc-icon',p.className),width:s,height:s,viewBox:'0 0 24 24',fill:'none',stroke:p.color||'currentColor',strokeWidth:2.25,strokeLinecap:'round',strokeLinejoin:'round',role:'img','aria-label':LABELS[p.name]||p.name},
    d.map(function(x,i){return h('path',{key:i,d:x})}))}
function TarjetaPropuesta(p){
  return h('article',{className:'vc-card vc-prop'},
    h('span',{className:'vc-prop-ico'},h(Icono,{name:p.icon||'agua',size:28,color:'#fff'})),
    h('span',{className:'vc-eyebrow'},p.eyebrow||'SOMOS AGUA'),
    h('h3',{className:'vc-prop-title'},p.titulo||'Agua potable para cada barrio'),
    h(Rio,{width:160,height:22}),
    h('p',{className:'vc-prop-text'},p.texto||'Qué, dónde y cuándo. Máximo dos líneas.'),
    h('footer',{className:'vc-prop-foot'},h(Badge621,{variant:'mini',size:26}),h('b',null,'MESÍAS VILLACRÉS')))}
function TarjetaConcejal(p){
  return h('article',{className:'vc-card vc-conc'},
    h('div',{className:'vc-conc-photo'},p.src?h('img',{src:p.src,alt:(p.nombre||'')+' '+(p.apellido||'')}):null),
    h('div',{className:'vc-conc-info'},
      h('div',{className:'vc-conc-row'},h('div',null,h('b',{className:'vc-conc-n'},p.nombre||'NOMBRE'),h('b',{className:'vc-conc-a'},p.apellido||'APELLIDO')),h(Badge621,{variant:'mini',on:'dark',size:28})),
      h('span',{className:'vc-conc-cargo'},p.cargo||'CANDIDATO A CONCEJAL · URBANO'),
      h('span',{className:'vc-conc-cas'},'CASILLERO N.º '+(p.casillero||'1'))))}
function Rio(p){var w=p.width||600,hh=p.height||120,cs=['var(--selva-700)','var(--hoja-500)','var(--oro-600)'];
  return h('svg',{className:'vc-rio',width:w,height:hh,viewBox:'0 0 1200 300',preserveAspectRatio:'none','aria-hidden':'true'},
    cs.map(function(c,i){var o=i*41.6;return h('path',{key:i,d:'M0 '+(215+o)+' C336 '+(215+o)+' 360 '+(59+o)+' 660 '+(98+o)+' S960 '+(163+o)+' 1200 '+(72+o),fill:'none',stroke:c,strokeWidth:26,strokeLinecap:'round'})}))}
function Greca(p){var d=p.density||'sutil',on=p.on||'light';
  return h('div',{className:cx('vc-greca','vc-greca-'+d,'vc-on-'+on,p.className),style:p.style},p.children)}
window.Villacres=Object.assign(window.Villacres||{},{Logo:Logo,Badge621:Badge621,SomosProgreso:SomosProgreso,CtaVoto:CtaVoto,CheckVoto:CheckVoto,Zocalo:Zocalo,Avatar:Avatar,TarjetaPropuesta:TarjetaPropuesta,TarjetaConcejal:TarjetaConcejal,Icono:Icono,Rio:Rio,Greca:Greca,LOGOS:LOGOS,ICONOS:Object.keys(ICONS)});
})();
