# PRD — The Sky Dental Wellness Centre (Landing Page)

## Original Problem Statement
Build a premium "3D" landing page for a dental clinic — The Sky Dental Wellness Centre (Hyderabad). Feature 4 doctors (with provided photos + bios), a services section, and two clinic units with phone/call buttons. Logo: multi-coloured teeth ring on black.

## User Choices
- 3D experience: Subtle 3D depth + parallax + scroll animations (no heavy 3D model)
- No booking form — phone numbers + "Call" buttons only
- Dark premium theme with multi-colour logo accents
- A dedicated services section (basic services listed, client will edit later)
- No email integration

## Architecture
- Frontend-only marketing site. React 19 + CRA (craco), Tailwind, framer-motion (scroll reveals, kinetic hero, parallax), lenis (smooth momentum scroll), react-fast-marquee (editorial ribbon). No backend/DB changes.
- Fonts: Cormorant Garamond (serif headings) + Manrope (sans body).
- Real team photos in `/app/frontend/public/assets/` (dr-srikar, dr-shreya, dr-bharghav, dr-divya, logo).

## Sections Implemented (2026-06)
- Navbar: glass on scroll, mobile menu, logo, "Call the clinic" CTA
- Hero: masked line-by-line reveal, parallax rainbow aura orbs, dual CTAs (Book/tel + Explore)
- Ribbon: slow serif-italic marquee of treatments
- Ethos: numbered manifesto chapters (01 Precision / 02 Comfort / 03 Wellness)
- Services: bento of 4 specialties (hover colour glow) + numbered general services list (12 items)
- Team: 4 doctor cards (grayscale→colour on hover), click opens full-bio modal
- Locations: two units with address, tel Call button, Google Maps directions
- Footer: dual call CTAs, logo, tooth-colour dots

## Photo → Doctor Mapping (verified)
- Dr. Srikar Yallapragada → dr-srikar.jpeg (navy suit, red bg)
- Dr. Sai Shreya Yallapragada → dr-shreya.jpeg (black blazer)
- Dr. Bharghav Rayala → dr-bharghav.jpeg (white coat, arms crossed)
- Dr. Divya Sree Kommineni → dr-divya.png (white coat)

## Notes
- Bios for Srikar & Shreya are SAMPLE placeholders (marked in-app); Bharghav & Divya use client-provided copy.
- Content lives in `/app/frontend/src/data.js` for easy client edits.

## Backlog / Next
- P1: Replace sample bios (Srikar, Shreya) with final copy
- P2: Embedded Google Maps, patient testimonials, gallery, WhatsApp click-to-chat
- P2: Opening hours, appointment form (if later desired)
