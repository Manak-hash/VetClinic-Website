# Clinique Vétérinaire Maârif — site vitrine

Demo site built for the 26/08 18h on-site pitch. Not deployed anywhere yet.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (tokens in `src/index.css` `@theme`)
- framer-motion (hero parallax only)
- Fonts self-hosted in `public/fonts/` (Bricolage Grotesque + Instrument Sans, latin) — works fully offline

## Run

```bash
npm install
npm run dev   # http://localhost:3090 (host on LAN: http://<lan-ip>:3090)
```

## Content source

All copy comes from the clinic's own Google Site text (provided by the client):
about, surgery protocol (4 steps), interventions list, aftercare, hours, address,
phones, email. No invented facts. Ramadan hours shown in Horaires card.

## Assets

`public/` — photos pulled from the client's site.google.com, renamed + recompressed
(JPEG q82). `dr-bassir.jpg` (portrait), `clinic-hero.jpg` (3:2), `clinic-interior.jpg`
(pano), `surgery-1..3.jpg`, `xray-leg.jpg`, `xray-unidentified.jpg`.

## CTA layout (deliberate)

- Mobile: header = call button (clinic line) · fixed bottom bar = Urgence + WhatsApp · hero = WhatsApp + Urgence
  (hero scrolls away; fixed chrome carries one WhatsApp entry only)
- Desktop: header WhatsApp pill + floating urgence pill bottom-right, no fixed bar

## Google Maps

Embed uses the place CID (`6748401890204772645`, from the client's Maps URL) —
`https://maps.google.com/maps?cid=…&z=16&hl=fr&output=embed`. Verified reachable 25/08.
CSS tints the map toward the palette (grayscale + sepia + hue-rotate).

## Known TODOs if the client signs

- Real Instagram/Facebook handles (links omitted on purpose)
- Real photos replacements if client provides better quality
- Domain: cliniquevetomaarif.ma / vetmaarif.ma both available as of 25/08 (whois)
- Booking: currently WhatsApp + tel CTAs
