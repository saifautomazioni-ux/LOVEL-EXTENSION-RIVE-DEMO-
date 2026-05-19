/* ============================================
   main.js
   Logica della pagina: filtri portfolio, form
   ============================================ */

(function () {
  'use strict';

  /* ---------- Filtro lavori per categoria ---------- */
  const filterBtns = document.querySelectorAll('.lavori-filter button');
  const lavori = document.querySelectorAll('.lavoro');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      lavori.forEach(l => {
        l.style.display = (filter === 'all' || l.dataset.cat === filter) ? 'block' : 'none';
      });
    });
  });

  /* ---------- Gestione form prenotazione ---------- */
  const form = document.getElementById('form-prenota');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const dati = {
        nome: form.nome.value,
        tel: form.tel.value,
        servizio: form.servizio.value,
        data: form.data.value,
        orario: form.orario.value,
        note: form.note.value
      };

      // TODO: collegare a backend / Formspree / EmailJS / WhatsApp redirect
      console.log('Prenotazione ricevuta:', dati);
      alert('Richiesta inviata! Ti contatteremo a breve per confermare.');
      form.reset();
    });
  }

})();
