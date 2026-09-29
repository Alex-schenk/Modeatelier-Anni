const btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
if(btn){btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o);btn.textContent=o?'Schließen':'Menü';});}
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');btn?.setAttribute('aria-expanded','false');if(btn)btn.textContent='Menü';}));
const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
const links=[...(nav?.querySelectorAll('a')||[])];
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));}}),{rootMargin:'-42% 0px -50% 0px'});links.forEach(l=>{const t=document.querySelector(l.getAttribute('href'));if(t)io.observe(t);});}

document.querySelectorAll('.filter-btn').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;document.querySelectorAll('.gallery-item').forEach(item=>item.classList.toggle('is-hidden',filter!=='all'&&item.dataset.cat!==filter));}));

document.getElementById('wa-form')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);const t=`Hallo Anita, hier ist ${f.get('name')||'...'} .\nIch interessiere mich für: ${f.get('thema')}.\n${f.get('msg')||''}`;window.open('https://wa.me/4917673243945?text='+encodeURIComponent(t),'_blank','noopener');});
