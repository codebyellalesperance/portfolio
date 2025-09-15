(function(){
  const openers = document.querySelectorAll('[data-modal-target]');
  const closers  = () => document.querySelectorAll('[data-modal-close]');
  openers.forEach(btn=>{
    const sel = btn.getAttribute('data-modal-target');
    const modal = document.querySelector(sel);
    btn.addEventListener('click', ()=> {
      modal.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
      modal.addEventListener('click', (e)=>{
        if(e.target === modal) { close(modal); }
      }, { once:false });
    });
  });
  function close(modal){
    modal.setAttribute('hidden','');
    document.body.style.overflow = '';
  }
  document.addEventListener('click',(e)=>{
    if(e.target.matches('[data-modal-close]')) close(e.target.closest('.modal'));
  });

  // Modal styles
  const css = `
  .modal{position:fixed;inset:0;background:rgba(0,0,0,.45);display:grid;place-items:center;z-index:60}
  .modal__panel{width:min(1100px,92vw);height:min(80vh,900px);background:#fff;border-radius:16px;box-shadow:0 24px 80px rgba(0,0,0,.3);position:relative;padding:12px}
  .modal__panel iframe{width:100%;height:100%;border:0;border-radius:12px}
  .modal__close{position:absolute;top:10px;right:12px;border:0;background:transparent;font-size:28px;cursor:pointer;color:var(--navy);z-index:10}
  .modal__close:hover{color:var(--red)}
  `;
  const style=document.createElement('style'); style.innerHTML=css; document.head.appendChild(style);
})();
