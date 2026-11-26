# DhwaniStage — Community Event Sound, Speaker & DJ Equipment Rental System

> **ध्वनि स्टेज** • Indian Maximalist Frontend Web Application for Community Mandalis, Festivals, Weddings, and Cultural Rigs.  
> **Course / Assessment:** First Semester Web Development (CA1 Project & Viva Voce)  
> **Technology Stack:** Pure HTML5, CSS3, and Vanilla JavaScript (Zero External Frameworks or Libraries)

---

## 1. Problem Statement

Community festivals (*Ganesh Utsav, Navratri Garba, Bhajan Sandhyas, Durga Puja*), college cultural fests, and local weddings require heavy audio equipment (high-wattage PA speakers, cordless microphones, multi-channel mixers, stage lights, and balanced XLR snake cables). 

However, community organizers and sound vendors regularly face:
1. **Unclear daily rental rates and complex multi-day discounting rules**.
2. **Disputes over refundable security deposits** caused by lack of pre-event and post-event equipment condition inspections.
3. **Inventory confusion and lost cables or microphone adapters**.

**DhwaniStage** solves this by providing a unified, client-side web application that lets organizers assemble equipment rigs, receive transparent live quotes with automated deposit tracking, reserve gear with Indian phone and venue validation, and execute a dispute-free handover return checklist with automatic deposit refund/deduction settlements.

---

## 2. Key Features & Functional Modules

### 📢 Module 1: Sound Equipment Rental Catalog
- Handpicked catalog across **5 Essential Categories**:
  - **🔊 PA Speaker Sets** (e.g., Ahuja 1200W Dual Tops, JBL EON 1500W Sub/Satellite, Studiomaster Stage Monitors)
  - **🎙️ Wireless Cordless Mics** (e.g., Shure Dual UHF Cordless, Sennheiser Lapel/Collar, Ahuja Podium Gooseneck)
  - **🎚️ DJ Audio Mixers** (e.g., Yamaha 12-Channel SPX Effects, Pioneer DJ 2-Channel Serato, Stranger 8-Channel Bhajan Echo)
  - **💡 Stage Spotlights** (e.g., 54-LED RGBW DMX Par Cans, 200W Warm COB Face Lights, Moving Head Laser Beams)
  - **🔌 Cables & Snakes** (e.g., 20m XLR Balanced 8-Channel Snake, Gold-Plated XLR Bundles, Speakon 15m + 16A Power Kit)
- **Live Search**: Instant keyword filtering by gear name, wattage (e.g., "1200W"), or specs.
- **Category Filter Tabs**: Fast categorization with dynamic badge counts.
- **Stock Badges**: Real-time inventory status (`In Stock`, `Low Stock`, `Out of Stock`).
- **Interactive Rig Builder**: Quantity stepper (`+` / `-`) bounded by available inventory, and "Add to Rig" action.

### 🎛️ Module 2: Daily Rental Rate Calculator & Deposit Tracker
- **Itemized Rig Table**: Accessible HTML5 table displaying selected items, daily rates, quantities, and per-item deposits.
- **Event Duration Selector**:
  - `1-Day Event`: Standard (1× base rate).
  - `3-Day Weekend Festival`: Automatic **15% discount** on base equipment rental.
  - `Custom Days (1 to 14 days)`: Automatic **10% discount** for bookings of 3 or more days.
- **Sound Technician Toggle**: Option to add a sound engineer and live console mixer at ₹1,500/day.
- **Live Financial Quote Card**:
  - Total Rig Items (units)
  - Base Daily Total (₹)
  - Gross Multi-Day Rental (₹)
  - Multi-Day Discount (₹)
  - Sound Technician Fee (₹)
  - Net Equipment Rental (₹)
  - **100% Refundable Security Deposit** (₹)
  - **Grand Total Payable at Pickup** (₹)

### 📝 Module 3: Equipment Booking Form & Gate-Pass Form
- **Semantic & Accessible Form Elements**: Built using `<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>`, `<select>`, and `<textarea>`.
- **Native HTML5 Validation**:
  - Organizer Name (required, minlength 3)
  - 10-Digit Indian Mobile Number (`pattern="[6-9][0-9]{9}"`, `title`)
  - Event Date (validated via JavaScript `min` attribute to prevent past dates)
  - Venue Type dropdown (Temple Pandal, Society Clubhouse, Open Lawn, Rooftop, Auditorium, Studio)
  - Event Purpose & Venue Address with electrical/generator power notes
  - Mandatory Equipment Return Terms checkbox
- **Order Confirmation**:
  - Generates unique Booking ID (`DHW-2026-XXXX`).
  - Automatically deducts inventory from warehouse stock.
  - Persists data to `localStorage`.

### 📊 Module 4: Active Bookings Dashboard
- **Operational KPI Stat Cards**:
  - Total Reservations
  - Active Dispatched Rigs (Out on Gig)
  - Total Security Deposits Held in Escrow (₹)
  - Returned & Settled Bookings
- **Status Filter & Live Search**: Filter by status (*Active*, *Pending Inspection*, *Settled & Refund Cleared*, *Deduction Applied*, *Cancelled*) or search by booking ID and organizer name.
- **Cancel & Restock**: Safely cancels bookings and replenishes warehouse equipment stock.

### 🔍 Module 5: Dispute-Free Return Checklist & Deposit Settlement
- **Itemized Pre-Event & Post-Event Checklist**:
  - Verifies pickup handover and post-event return for every rented item.
  - Condition Selector per item:
    - *Intact - No Damage*: **0% deduction**
    - *Minor Wear / Scratches*: **20% deduction** of item deposit
    - *Damaged or Missing*: **100% deduction** of item deposit
- **Sound Technician Sign-off**: Inspector name and notes for cable tally and speaker testing.
- **Automated Settlement Calculations**:
  - Original Security Deposit Held
  - Total Damage / Loss Deductions
  - Net Refund Amount Cleared
  - Status progression: *Held on Booking* &rarr; *Pending Gear Inspection* &rarr; *Full Refund Cleared / Deduction Applied*.
- **Print / Export Voucher**: Native `window.print()` trigger with dedicated `@media print` clean invoice stylesheet.

---

## 3. Strict Syllabus & Viva Voce Guide (For First-Semester Examination)

This project strictly adheres to the first-semester web programming syllabus and contains **zero frameworks, zero classes, zero async/await, and zero complex method chains** (`.map()`, `.filter()`, `.reduce()`). Every feature is built using easy-to-trace fundamental concepts:

### A. HTML5 Concepts Used & Viva Questions
1. **Semantic Elements**:
   - `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<time>`, `<address>`, `<details>`, `<summary>`.
   - *Viva Explanation:* Semantic tags clearly describe their meaning to both the browser and developer, improving SEO, maintainability, and screen reader accessibility compared to generic `<div>` tags.
2. **Accessible Forms & Native Validation**:
   - `<form novalidate>`, `<fieldset>`, `<legend>`, `<label for="...">`.
   - Native attributes: `required`, `pattern="[6-9][0-9]{9}"`, `minlength="3"`, `min`, `max`.
   - *Viva Explanation:* The `for` attribute on `<label>` links with the `id` of `<input>`, enabling users with motor impairments to click the label to focus the input field.
3. **Accessible Tables**:
   - `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<th scope="col">`.
   - *Viva Explanation:* `<caption` summarizes the table's purpose, and `scope="col"` helps screen readers announce header names when navigating cells.
4. **ARIA Basics**:
   - `aria-label`, `aria-live="polite"`, `aria-current="page"`, `aria-selected="true"`.
   - *Viva Explanation:* `aria-live="polite"` announces dynamic toast notifications to screen readers without interrupting what the user is currently listening to.

### B. CSS3 Concepts Used & Viva Questions
1. **CSS Variables (`:root`)**:
   - Defines central colors (`--color-marigold: #f59e0b`, `--color-vermilion: #b91c1c`, `--color-peacock-teal: #0f766e`).
   - *Viva Explanation:* Simplifies theme updates across the entire site by modifying a single variable definition in `:root`.
2. **Box Model Reset**:
   - `box-sizing: border-box;` on `*, *::before, *::after`.
   - *Viva Explanation:* Ensures padding and borders are included within the element's specified width and height, preventing unexpected horizontal overflows.
3. **Positioning**:
   - `position: sticky;` on `.main-nav` so navigation stays pinned as users scroll down long catalog lists.
   - `position: fixed;` on `.toast-container` to anchor notifications to the bottom-right corner.
   - `position: relative;` and `absolute;` on cards and search icons.
4. **Layout: Flexbox & CSS Grid**:
   - `display: flex;` for responsive toolbars, headers, and navigation buttons.
   - `display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));` for responsive equipment grids that wrap naturally without media query bloat.
5. **Pseudo-Classes & Pseudo-Elements**:
   - `:hover`, `:focus-visible`, `:user-invalid`, `:nth-child(even)`, `::before`, `::after`.
   - *Viva Explanation:* `:user-invalid` only flags an invalid field after the user has interacted with it, avoiding aggressive error highlighting on page load.
6. **Keyframes & Media Queries**:
   - `@keyframes equalizerBounce`: Animates the 5 equalizer soundwave bars in the header.
   - `@media (min-width: 768px)`: Mobile-first responsive enhancements.
   - `@media (prefers-reduced-motion: reduce)`: Accessibility rule disabling animations for users with vestibular sensitivities.
   - `@media print`: Hides buttons, toasts, and navigation to print a clean Gate-Pass and Return Settlement Voucher.

### C. JavaScript (Vanilla ES6) Concepts Used & Viva Questions
1. **Variable Declarations**:
   - `const` for unchanging references (DOM elements, static arrays, keys) and `let` for reassignable counters and loop iterators. (No `var`).
2. **Operators & Expressions**:
   - Strict equality (`===`), logical AND (`&&`), logical OR (`||`), ternary operator (`? :`).
3. **String Methods**:
   - `trim()` removes leading/trailing whitespace.
   - `toLowerCase()` normalizes search terms for case-insensitive matching.
   - `includes()` verifies whether a search keyword exists in item names or specs.
   - `padStart(2, "0")` formats single-digit dates (e.g., `5` &rarr; `"05"`).
4. **Basic `for` Loops (No `.map()` / `.filter()` / `.reduce()`)**:
   - Explicit `for (let i = 0; i < array.length; i++)` loops allow clear trace table tracking during viva code inspection.
5. **Data Persistence via `localStorage`**:
   - `localStorage.setItem(key, JSON.stringify(data))` serializes objects into strings for local browser storage.
   - `JSON.parse(localStorage.getItem(key))` deserializes strings back into active JavaScript objects.
6. **Browser Print API**:
   - `window.print()` triggers the native browser print preview dialog.

---

## 4. File Structure (Strict 4 Files in Root)

```text
dhwanistage/
├── index.html       # Single semantic HTML5 markup file (links styles.css & app.js)
├── styles.css       # Single external CSS3 stylesheet (Indian Maximalism theme)
├── app.js           # Single Vanilla JavaScript file (all logic, calculations & localStorage)
└── README.md        # Documentation, viva guide, and deployment instructions
```

---

## 5. How to Run Locally

Because DhwaniStage is built with standard web technologies and requires no bundlers or compilers:

### Option 1: Direct Browser Launch (Simplest)
1. Double-click `index.html` to open it directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

### Option 2: VS Code Live Server Extension
1. Open the folder in **Visual Studio Code**.
2. Right-click on `index.html`.
3. Select **"Open with Live Server"**.
4. The site will launch at `http://127.0.0.1:5500/index.html`.

### Option 3: Python Built-in HTTP Server
Open your terminal or command prompt in the project root directory and run:
```bash
# Python 3
python -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

---

## 6. Deployment Guide

### A. Deploy to GitHub Pages
1. Initialize git and commit the 4 files:
   ```bash
   git init
   git add index.html styles.css app.js README.md
   git commit -m "Initial release of DhwaniStage sound rental system"
   ```
2. Create a new public repository on GitHub (e.g., `dhwanistage`).
3. Push to GitHub:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/dhwanistage.git
   git push -u origin main
   ```
4. On GitHub, navigate to **Settings** &rarr; **Pages**.
5. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
6. Your live site will be ready at `https://YOUR_USERNAME.github.io/dhwanistage/`.

### B. Deploy to Netlify
1. Go to [Netlify.com](https://www.netlify.com/) and log in.
2. Drag and drop the project folder directly into the Netlify Drop area.
3. Your web app is deployed instantly with a live `.netlify.app` URL.

### C. Deploy to Vercel
1. Install Vercel CLI: `npm install -g vercel` (or link your GitHub repository in the Vercel dashboard).
2. Run `vercel` in the folder and accept the default settings (Framework Preset: *Other*).

---

## 7. First-Semester CA1 Submission Checklist

- [x] **File Structure**: Exactly 4 files (`index.html`, `styles.css`, `app.js`, `README.md`) in root folder.
- [x] **Zero External Libraries**: Pure HTML5, CSS3, and Vanilla JavaScript. No Bootstrap, no Tailwind, no jQuery, no React.
- [x] **Syllabus Compliance**: No ES6 classes, no `async`/`await`, no `fetch`, no `.map()`/`.filter()`/`.reduce()` chains. All code uses transparent `for` loops.
- [x] **HTML5 Semantics**: Includes `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<time>`, `<address>`, `<details>`, and `<summary>`.
- [x] **Native Form Validation**: Required fields, Indian phone regex pattern, date range checks, accessible `<fieldset>` and `<legend>`.
- [x] **Indian Maximalist Aesthetics**: Marigold gold, vermilion crimson, peacock teal, and warm parchment surfaces inspired by *Daachis* and *Hallucia*, paired with Google Fonts `Yatra One` & `Poppins`.
- [x] **Animated CSS Soundwave**: Five bouncing equalizer bars created using CSS `@keyframes`.
- [x] **Data Persistence**: Gear inventory, rig items, duration choices, and confirmed bookings stored persistently in `localStorage`.
- [x] **Dispute-Free Return Checklist**: Complete handover audit and deposit deduction settlement with condition checks (0%, 20%, 100%).
- [x] **Clean Print Export**: `window.print()` with `@media print` formatting for physical vouchers.

---

**Developed with ❤️ for Indian Community Event Organizers & Sound Engineers.**
