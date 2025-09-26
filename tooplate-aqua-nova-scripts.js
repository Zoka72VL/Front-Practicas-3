
// Underwater Background Animation
        const underwaterBg = document.getElementById('underwater-bg');
        
        // Simple bubble creation - Reduced number
        function createBubbles() {
            for (let i = 0; i < 6; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'bubble';
                bubble.style.width = Math.random() * 10 + 5 + 'px';
                bubble.style.height = bubble.style.width;
                bubble.style.left = Math.random() * 100 + '%';
                bubble.style.animationDelay = Math.random() * 10 + 's';
                bubble.style.animationDuration = Math.random() * 2 + 6 + 's';
                underwaterBg.appendChild(bubble);
            }
        }

        // Simple ocean particles
        function createOceanParticles() {
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'ocean-particle';
                particle.style.width = Math.random() * 4 + 2 + 'px';
                particle.style.height = particle.style.width;
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = Math.random() * 5 + 12 + 's';
                underwaterBg.appendChild(particle);
            }}
        

        // Research Tabs Functionality - Fixed
        const researchTabs = document.querySelectorAll('.research-tab');
        const researchContents = document.querySelectorAll('.research-content');

        if (researchTabs.length > 0 && researchContents.length > 0) {
            researchTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs and contents
                    researchTabs.forEach(t => t.classList.remove('active'));
                    researchContents.forEach(c => c.classList.remove('active'));

                    // Add active class to clicked tab
                    tab.classList.add('active');

                    // Show corresponding content
                    const tabId = tab.getAttribute('data-tab');
                    const targetContent = document.getElementById(tabId);
                    if (targetContent) {
                        targetContent.classList.add('active');
                    }
                });
            });
        }

        // Simple initialization
        createBubbles();
        createOceanParticles();

        // Simple regeneration
        setInterval(createBubbles, 20000); // Every 20 seconds
        setInterval(createOceanParticles, 30000); // Every 30 seconds

        // Mobile menu toggle - Fixed
        const mobileToggle = document.getElementById('mobile-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (mobileToggle && navMenu) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close mobile menu when clicking on links
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }

        // Smooth scroll - Fixed
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Navbar scroll effect - Fixed
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }

            // Fade in sections
            const sections = document.querySelectorAll('.fade-in');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.8) {
                    section.classList.add('visible');
                }
            });
        });

        // Form submissions - Fixed with error handling
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Message sent successfully! 🌊 (This is a demo)');
            });
        }

        // Newsletter form submission - Fixed with error handling
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = document.querySelector('.newsletter-input');
                if (emailInput && emailInput.value) {
                    alert(`Thank you for subscribing! 🐠 We will keep you updated on our ocean discoveries. (This is a demo)`);
                    emailInput.value = '';
                }
            });
        }


        //Validacion de formulario

        document.getElementById('buscarClienteSelect').addEventListener('change', function() {
    const input = document.getElementById('buscarClienteInput');
    const btn = document.getElementById('buscarClienteBtn');
    if (this.value) {
        let placeholder = '';
        let type = 'text';
        switch (this.value) {
            case 'dni':
                placeholder = 'Ingrese DNI';
                type = 'number';
                break;
            case 'nombre':
                placeholder = 'Ingrese Nombre';
                break;
            case 'email':
                placeholder = 'Ingrese Email';
                type = 'email';
                break;
            case 'telefono':
                placeholder = 'Ingrese Teléfono';
                type = 'tel';
                break;
        }
        input.style.display = 'block';
        btn.style.display = 'inline-block';
        input.placeholder = placeholder;
        input.type = type;
        input.value = '';
    } else {
        input.style.display = 'none';
        btn.style.display = 'none';
        input.value = '';
    }
    });
    document.getElementById('direccionEntrega').addEventListener('change', function() {
    const direccion = this.value;
    const mapa = document.getElementById('mapaEntrega');
    if (direccion.trim() !== '') {
        const ciudad = 'La Plata, Buenos Aires, Argentina'; // Cambia por tu ciudad si es necesario
        const query = encodeURIComponent(direccion + ', ' + ciudad);
        mapa.innerHTML = `<iframe
            width="100%"
            height="100%"
            style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=${query}&output=embed">
        </iframe>`;
        mapa.style.display = 'block';
    } else {
        mapa.innerHTML = '';
        mapa.style.display = 'none';
    }
    });
    // Mostrar campo de fecha al hacer clic en el botón
    document.getElementById('fechaEntrega').style.display = 'block';
    document.getElementById('fechaEntrega').focus();

    // Gestión de Pedidos de Cerveza con LocalStorage
(function(){
  const $id = id => document.getElementById(id);
  const formatDate = d => new Date(d).toLocaleString();

  const buscarSelect = $id('buscarClienteSelect');
  const buscarInput = $id('buscarClienteInput');
  const buscarBtn = $id('buscarClienteBtn');

  const nombre = $id('clienteNombre');
  const email = $id('clienteEmail');
  const direccion = $id('clienteDireccion');
  const telefono = $id('clienteTelefono');

  const cervezaColor = $id('cervezaColor');
  const cervezaTipo = $id('cervezaTipo');
  const cantidadBarriles = $id('cantidadBarriles');
  const accesoriosContainer = $id('accesoriosContainer');
  const accesoriosCheckboxes = () => document.querySelectorAll('#accesoriosContainer .accesorio');

  const estado = $id('estadoPedido');
  const mostrarFechaBtn = $id('mostrarFechaBtn');
  const fechaEntrega = $id('fechaEntrega');
  const direccionEntrega = $id('direccionEntrega');

  const totalMonto = $id('totalMonto');
  const confirmarBtn = $id('confirmarPedido');
  const listado = $id('listadoPedidos');

  const modalVer = $id('modalVer');
  const detalleContenido = $id('detalleContenido');
  const cerrarModal = $id('cerrarModal');

  const STORAGE_KEY = 'pedidos_cervezas_v1';

  function loadPedidos(){ try { return JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]'); } catch(e){ return []; } }
  function savePedidos(a){ localStorage.setItem(STORAGE_KEY, JSON.stringify(a)); }

  function getTipoPrice(tipo){
    const opt = Array.from(cervezaTipo.options).find(o=>o.value===tipo);
    return opt ? Number(opt.dataset.price||0) : 0;
  }
  function calcularTotal(){
    const tipo = cervezaTipo.value;
    const cantidad = Number(cantidadBarriles.value) || 0;
    const precioCerveza = getTipoPrice(tipo) * cantidad;
    let accesoriosTotal = 0;
    accesoriosCheckboxes().forEach(cb => { if(cb.checked) accesoriosTotal += Number(cb.dataset.price||0); });
    const total = precioCerveza + accesoriosTotal;
    totalMonto.textContent = total;
    return total;
  }

  function renderListado(){
    const pedidos = loadPedidos();
    pedidos.sort((a,b)=> new Date(b.fechaEntrega||b.createdAt) - new Date(a.fechaEntrega||a.createdAt));
    listado.innerHTML = '';
    if(!pedidos.length){ listado.innerHTML = '<div style="opacity:0.7;">No hay pedidos.</div>'; return; }
    pedidos.forEach(p=>{
      const item = document.createElement('div');
      item.style.display='flex'; item.style.justifyContent='space-between'; item.style.alignItems='center';
      item.style.borderBottom='1px dashed #eee'; item.style.padding='0.6rem 0';
      const left = document.createElement('div');
      left.innerHTML = '<div><strong>'+p.clienteNombre+'</strong> <small style="margin-left:6px;">'+p.estado+'</small></div>' +
                       '<div style="font-size:0.9rem; color:#333;">'+p.cervezaColor+' / '+p.cervezaTipo+' x '+p.cantidadBarriles+' — Entrega: '+(p.fechaEntrega?formatDate(p.fechaEntrega):'—')+'</div>';
      const right = document.createElement('div');
      const btnVer = document.createElement('button'); btnVer.className='dive-btn'; btnVer.textContent='Ver';
      const btnMod = document.createElement('button'); btnMod.className='dive-btn'; btnMod.style.marginLeft='6px'; btnMod.textContent='Modificar';
      const btnCan = document.createElement('button'); btnCan.className='dive-btn'; btnCan.style.marginLeft='6px'; btnCan.textContent='Cancelar';
      btnVer.onclick = ()=> verPedido(p.id);
      btnMod.onclick = ()=> editarPedido(p.id);
      btnCan.onclick = ()=> cancelarPedido(p.id);
      right.appendChild(btnVer); right.appendChild(btnMod); right.appendChild(btnCan);
      item.appendChild(left); item.appendChild(right);
      listado.appendChild(item);
    });
  }

  function uid(){ return 'p_'+Date.now()+'_'+Math.random().toString(36).slice(2,8); }

  function validarForm(){
    let ok = true;
    [cervezaTipo,cantidadBarriles,estado,direccionEntrega].forEach(el=>{
      el.style.borderColor = '';
      if(!el.value){ el.style.borderColor = '#e74c3c'; ok = false; }
    });
    if(!fechaEntrega.value){ fechaEntrega.style.borderColor = '#e74c3c'; ok = false; } else fechaEntrega.style.borderColor = '';
    return ok;
  }

  // Manejo crear/guardar: uso confirmarBtn visible solo si hay cambios; para integración simple, añadí listener al botón confirmarPedido del DOM original si quieres usarlo.
  confirmarBtn.style.display = 'inline-block';
  confirmarBtn.addEventListener('click', function(){
    // validación y guardado
    if(!validarForm()) return alert('Completa los campos obligatorios.');
    const pedidos = loadPedidos();
    const data = {
      id: uid(),
      createdAt: new Date().toISOString(),
      clienteNombre: nombre.value.trim(),
      clienteEmail: email.value.trim(),
      clienteDireccion: direccion.value.trim(),
      clienteTelefono: telefono.value.trim(),
      cervezaColor: cervezaColor.value,
      cervezaTipo: cervezaTipo.value,
      cantidadBarriles: Number(cantidadBarriles.value),
      accesorios: Array.from(accesoriosCheckboxes()).filter(c=>c.checked).map(c=>({key:c.value, price:Number(c.dataset.price)})),
      estado: estado.value,
      fechaEntrega: fechaEntrega.value,
      direccionEntrega: direccionEntrega.value,
      total: calcularTotal()
    };
    pedidos.push(data);
    savePedidos(pedidos);
    renderListado();
    // opcional: limpiar formulario
    document.querySelector('#armarPedido form').reset();
    calcularTotal();
  });

  function verPedido(id){
    const pedidos = loadPedidos();
    const p = pedidos.find(x=>x.id===id);
    if(!p) return alert('Pedido no encontrado');
    detalleContenido.innerHTML = '<div><strong>Cliente:</strong> '+p.clienteNombre+' — '+p.clienteTelefono+' — '+p.clienteEmail+'</div>' +
      '<div><strong>Dirección de Entrega:</strong> '+p.direccionEntrega+'</div>' +
      '<div><strong>Fecha Entrega:</strong> '+(p.fechaEntrega?formatDate(p.fechaEntrega):'—')+'</div>' +
      '<div><strong>Cerveza:</strong> '+p.cervezaColor+' / '+p.cervezaTipo+' x '+p.cantidadBarriles+'</div>' +
      '<div><strong>Accesorios:</strong> '+(p.accesorios.length? p.accesorios.map(a=>a.key).join(', '):'Ninguno')+'</div>' +
      '<div><strong>Total:</strong> $'+p.total+'</div>' +
      '<div><strong>Estado:</strong> '+p.estado+'</div>';
    modalVer.style.display = 'flex';
  }
  cerrarModal && cerrarModal.addEventListener('click', ()=> modalVer.style.display='none');
  modalVer && modalVer.addEventListener('click', (e)=> { if(e.target === modalVer) modalVer.style.display='none'; });

  function editarPedido(id){
    const pedidos = loadPedidos();
    const p = pedidos.find(x=>x.id===id);
    if(!p) return alert('Pedido no encontrado');
    nombre.value = p.clienteNombre;
    email.value = p.clienteEmail;
    direccion.value = p.clienteDireccion;
    telefono.value = p.clienteTelefono;
    cervezaColor.value = p.cervezaColor;
    cervezaTipo.value = p.cervezaTipo;
    cantidadBarriles.value = p.cantidadBarriles;
    Array.from(accesoriosCheckboxes()).forEach(cb=> cb.checked = !!p.accesorios.find(a=>a.key===cb.value));
    estado.value = p.estado;
    fechaEntrega.value = p.fechaEntrega || '';
    direccionEntrega.value = p.direccionEntrega || '';
    // borra el anterior y deja listo para re-guardar (simplificación)
    const remaining = loadPedidos().filter(x=>x.id!==id);
    savePedidos(remaining);
    renderListado();
    window.scrollTo({top:0, behavior:'smooth'});
  }

  function cancelarPedido(id){
    if(!confirm('¿Cancelar este pedido?')) return;
    const pedidos = loadPedidos().filter(p=>p.id!==id);
    savePedidos(pedidos);
    renderListado();
  }

  mostrarFechaBtn.addEventListener('click', ()=> {
    if(fechaEntrega.style.display === 'none' || fechaEntrega.style.display === '') fechaEntrega.style.display = 'inline-block';
    else fechaEntrega.style.display = 'none';
  });

  cervezaTipo.addEventListener('change', calcularTotal);
  cantidadBarriles.addEventListener('input', calcularTotal);
  accesoriosContainer.addEventListener('change', calcularTotal);

  // buscar cliente básico
  buscarSelect.addEventListener('change', ()=>{
    buscarInput.style.display = buscarSelect.value ? 'inline-block' : 'none';
    buscarBtn.style.display = buscarSelect.value ? 'inline-block' : 'none';
  });
  buscarBtn && buscarBtn.addEventListener('click', ()=>{
    const tipo = buscarSelect.value;
    const val = buscarInput.value.trim().toLowerCase();
    if(!tipo || !val) return alert('Selecciona criterio y escribe valor.');
    const pedidos = loadPedidos();
    const found = pedidos.find(p => (tipo==='nombre' && p.clienteNombre.toLowerCase().includes(val)) ||
                                  (tipo==='email' && p.clienteEmail.toLowerCase().includes(val)) ||
                                  (tipo==='telefono' && p.clienteTelefono.toLowerCase().includes(val)) ||
                                  (tipo==='dni' && (p.clienteDni || '').toLowerCase().includes(val)) );
    if(found){
      nombre.value = found.clienteNombre;
      email.value = found.clienteEmail;
      direccion.value = found.clienteDireccion;
      telefono.value = found.clienteTelefono;
      alert('Cliente cargado desde historial de pedidos.');
    } else alert('Cliente no encontrado en historial.');
  });

  renderListado();
  calcularTotal();
})();

