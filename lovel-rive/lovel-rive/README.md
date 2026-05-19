# Lovel Extensions Rive — Sito demo

Sito demo per studio extension ciglia / laminazione / depilazione a Corso Lodi, Milano.

## Struttura

```
lovel-rive/
├── index.html              ← pagina principale
├── css/
│   ├── 00-base.css         ← reset, variabili, background
│   ├── 01-nav.css          ← navigation bar
│   ├── 02-hero.css         ← hero section + bottoni
│   ├── 03-sections.css     ← stili comuni a tutte le sezioni
│   ├── 04-servizi.css      ← sezione servizi & prezzi
│   ├── 05-lavori.css       ← portfolio con filtri
│   ├── 06-prenota.css      ← form prenotazione
│   ├── 07-regole.css       ← regole studio
│   └── 08-footer.css       ← footer
├── js/
│   └── main.js             ← filtri lavori + gestione form
├── assets/
│   ├── images/
│   │   ├── hero/           ← immagine background hero (opzionale)
│   │   ├── lavori/         ← foto portfolio (vedi sotto)
│   │   └── logo/           ← logo Lovel
│   └── fonts/              ← font locali (se non si usa Google Fonts)
└── README.md
```

## Avvio locale

Aprire `index.html` nel browser. Nessun build necessario.

Per uno sviluppo più pulito (con auto-reload):
```bash
npx serve .
```

## Personalizzazione

### Colori e font
Tutte le variabili in `css/00-base.css` sotto `:root`. Cambiando lì, cambia ovunque.

### Aggiungere foto vere ai lavori
1. Mettere i file in `assets/images/lavori/` (consigliato: ratio 3:4, almeno 600×800px)
2. In `index.html`, dentro ogni `.lavoro` sostituire:
   ```html
   <div class="lavoro-img-placeholder">L</div>
   ```
   con:
   ```html
   <img class="lavoro-img" src="assets/images/lavori/lavoro-01.jpg" alt="Extension volume pieno">
   ```

### Collegare il form a backend
In `js/main.js` c'è il TODO. Opzioni semplici senza backend:
- **Formspree** (formspree.io) → cambia il form action
- **EmailJS** → integrazione JS diretta
- **WhatsApp redirect** → genera link `https://wa.me/...` con i dati nel testo

### SEO
Aggiungere in `<head>` di `index.html`:
- Open Graph tags (immagine condivisione)
- `<link rel="canonical">`
- Schema.org JSON-LD per `BeautySalon` (importante per Google Maps)

## TODO prossimi step

- [ ] Sostituire placeholder con foto vere dei lavori
- [ ] Aggiungere logo Lovel in `assets/images/logo/`
- [ ] Collegare form a backend (Formspree / EmailJS / WhatsApp)
- [ ] Aggiungere favicon
- [ ] Aggiungere Open Graph tags
- [ ] Schema.org JSON-LD per local SEO
- [ ] Eventuale slider before/after
- [ ] Sezione recensioni clienti
