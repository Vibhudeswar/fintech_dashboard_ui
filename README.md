# FinTrack Pro — Premium Finance Dashboard

A production-grade personal finance dashboard built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools — just open `index.html` in a browser and go.

---

## 📁 Project Structure

```
fintrack/
├── index.html   — HTML structure & layout
├── style.css    — All styles, themes, and responsive rules
├── script.js    — All JavaScript logic, data, and rendering
└── README.md    — This file
```

---

## 🚀 Getting Started

**Option 1 — Open directly:**
Double-click `index.html`. Everything works offline — no server needed.

**Option 2 — Local dev server (recommended):**
```bash
# Using Python
python -m http.server 3000

# Using Node.js (npx)
npx serve .

# Using VS Code
# Install "Live Server" extension → right-click index.html → Open with Live Server
```

Then visit `http://localhost:3000` in your browser.

---

## ✨ Features

### Dashboard
- Net balance, total income, total expenses, and savings rate — all with live MoM trend chips
- Monthly Overview bar chart (last 6 months) with gradient fills
- Category Spending donut chart with custom legend
- Recent 5 transactions with hover micro-interactions

### Transactions
- Full table with sortable columns (click any header)
- Debounced search (280ms) across description, category, and notes
- Filter by type (Income / Expense) and category
- Add, edit, and delete transactions via modal
- Footer shows filtered count + income/expense totals
- Export filtered data to CSV

### Insights
- **Highest Spending Category** — dynamically computed from data
- **Month-over-Month** — % change in income and expenses
- **Savings Goal Tracker** — progress bar against 20% savings target
- **Monthly Averages** — average income and expense across all months
- **Smart Alerts** — data-driven cards for savings warnings, spending spikes, category dominance, and income growth
- **Category Breakdown** — animated horizontal bar chart per category

### Role-Based UX
| Feature             | Admin | Viewer |
|---------------------|-------|--------|
| View all data       | ✅    | ✅     |
| Add transactions    | ✅    | ❌     |
| Edit transactions   | ✅    | ❌     |
| Delete transactions | ✅    | ❌     |
| Export CSV          | ✅    | ✅     |
| Viewer banner shown | ❌    | ✅     |

### Data Persistence
All three keys are saved to `localStorage` automatically:
- `ft_txs` — full transactions array (JSON)
- `ft_role` — `"admin"` or `"viewer"`
- `ft_theme` — `"light"` or `"dark"`

Data survives page refresh and browser restarts. To reset, open DevTools → Application → Local Storage → delete `ft_*` keys.

### Theming
Light and dark themes via CSS custom properties. Toggle in the sidebar or mobile topbar. Theme preference is persisted across sessions.

---

## 🗂️ Data Model

Each transaction is a plain JavaScript object:

```js
{
  id:          Number,   // unique auto-incremented integer
  date:        String,   // "YYYY-MM-DD"
  description: String,   // e.g. "Swiggy – Biryani"
  category:    String,   // see CATEGORIES below
  amount:      Number,   // positive number (INR)
  type:        String,   // "income" or "expense"
  notes:       String,   // optional free text
}
```

### Supported Categories
| Category         | Icon | Color   |
|------------------|------|---------|
| Food & Dining    | 🍔   | Amber   |
| Transport        | 🚗   | Blue    |
| Entertainment    | 🎬   | Violet  |
| Shopping         | 🛍️   | Pink    |
| Bills & Utilities| ⚡   | Slate   |
| Healthcare       | 🏥   | Green   |
| Education        | 🎓   | Cyan    |
| Personal Care    | 🪷   | Pink    |
| Salary           | 💼   | Green   |
| Freelance        | 💻   | Indigo  |
| Investment       | 📈   | Amber   |

---

## 🧱 Code Architecture (`script.js`)

```
INITIAL_TXS      — 38 realistic Indian sample transactions
CAT              — Category config map (icon, color, bg, txt)
S                — Global state object (txs, role, theme, sort, tab)

Helpers
  fmt()          — Format number as ₹ Indian locale string
  fmtD()         — Full date string "04 Apr 2026"
  fmtDSh()       — Short date "04 Apr"
  fmtM()         — Month label "Apr '26"
  clamp()        — Clamp number between min/max
  persist()      — Save S to localStorage
  toast()        — Show animated toast notification

Data
  computeStats()     — Aggregate income, expense, balance, savings rate
  buildMonthlyData() — Monthly breakdown array sorted chronologically
  buildCatData()     — Category expense totals sorted descending
  calcMoMChange()    — Month-over-month % change for last 2 months

Charts
  getThemeColors()   — Read CSS variables for theme-aware chart colors
  initCharts()       — Build/rebuild bar chart + donut chart

Render
  renderDashboard()  — Stat cards, recent list, charts
  renderTx()         — Filtered/sorted transactions table
  renderInsights()   — All insight cards and category breakdown
  renderInsightAlerts() — Smart data-driven alert cards

CRUD
  openModal(id)  — Open add (id=null) or edit (id=N) modal
  closeModal()   — Close modal
  setFType()     — Toggle Expense / Income type button styles
  saveTx()       — Validate + save new or edited transaction
  delTx(id)      — Delete transaction after confirmation
  exportCSV()    — Download filtered transactions as CSV

UI
  switchTab()    — Switch between dashboard / transactions / insights
  refresh()      — Re-render active tab
  syncRoleUI()   — Sync all role-dependent elements at once
  switchRole()   — Toggle Admin / Viewer
  toggleTheme()  — Toggle light / dark theme
  doSort()       — Toggle column sort with direction flip
```

---

## 🎨 CSS Architecture (`style.css`)

All design tokens are CSS custom properties on `:root`. Dark theme overrides are under `[data-theme="dark"]`.

Key sections:
- **Variables** — colors, shadows, radii, transitions
- **Sidebar** — fixed nav with animated gradient accent line
- **Stat Cards** — colored bottom-border accent per card type
- **Charts** — responsive canvas wrappers
- **Table** — sortable, hover-highlighted, with badge pills
- **Insights** — grid layout, progress bars, alert cards
- **Modal** — backdrop blur, spring entrance animation
- **Toast** — fixed bottom-right with bounce-in animation
- **Responsive** — breakpoints at 1100px, 900px, 768px, 480px

---

## 🔧 Customization

**Add a new category:**
1. Add it to the `CAT` object in `script.js`
2. Add an `<option>` to both `#tx-cat` and `#f-cat` in `index.html`

**Change the savings goal target:**
Search for `0.20` in `script.js` — it's the savings rate threshold used in both insights and alert cards.

**Swap currency:**
Replace `'₹'` in the `fmt()` helper and update `toLocaleString('en-IN')` to your locale.

**Change chart colors:**
Edit the gradient `addColorStop` values in `initCharts()` inside `script.js`.

---

## 📦 Dependencies

| Library    | Version | Source              |
|------------|---------|---------------------|
| Chart.js   | 4.4.1   | jsDelivr CDN        |
| DM Sans    | —       | Google Fonts        |
| DM Mono    | —       | Google Fonts        |

No npm, no bundler, no framework. Zero local dependencies.

---

## 🌐 Browser Support

Works in all modern browsers: Chrome, Firefox, Safari, Edge.
Requires ES2020+ (optional chaining `?.`, nullish coalescing `||`).

---

## 📄 License

MIT — free to use, modify, and distribute.
