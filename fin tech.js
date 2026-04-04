/* ═══════════════════════════════════════════════════════════
   FinTrack Pro — script.js
   Premium Finance Dashboard — All JavaScript Logic
   ═══════════════════════════════════════════════════════════ */

// ════════════════════════════════════════════════════════════
//  TRANSACTION DATA — Realistic Indian fintech sample data
// ════════════════════════════════════════════════════════════
const INITIAL_TXS = [
  { id:1,  date:"2026-01-01", description:"Salary – January",            category:"Salary",            amount:92000, type:"income",  notes:"Monthly CTC credit" },
  { id:2,  date:"2026-01-04", description:"Swiggy – Biryani",            category:"Food & Dining",     amount:420,   type:"expense", notes:"Instamart order" },
  { id:3,  date:"2026-01-07", description:"Netflix Subscription",         category:"Entertainment",     amount:649,   type:"expense", notes:"Premium 4K plan" },
  { id:4,  date:"2026-01-09", description:"Big Basket Groceries",         category:"Food & Dining",     amount:2780,  type:"expense", notes:"Monthly grocery run" },
  { id:5,  date:"2026-01-11", description:"Uber Pool – Office commute",   category:"Transport",         amount:180,   type:"expense", notes:"" },
  { id:6,  date:"2026-01-14", description:"BSES Electricity Bill",        category:"Bills & Utilities", amount:1680,  type:"expense", notes:"January bill" },
  { id:7,  date:"2026-01-17", description:"Freelance Project – Alpha",    category:"Freelance",         amount:28000, type:"income",  notes:"UI design for Razorpay" },
  { id:8,  date:"2026-01-19", description:"Zomato – Date Night",          category:"Food & Dining",     amount:1340,  type:"expense", notes:"Anniversary dinner" },
  { id:9,  date:"2026-01-21", description:"Amazon – Kindle Paperwhite",   category:"Shopping",          amount:9999,  type:"expense", notes:"11th Gen Kindle" },
  { id:10, date:"2026-01-24", description:"Spotify Premium",              category:"Entertainment",     amount:119,   type:"expense", notes:"" },
  { id:11, date:"2026-01-27", description:"IndiGo – BLR to GOA",          category:"Transport",         amount:5800,  type:"expense", notes:"Round trip tickets" },
  { id:12, date:"2026-01-29", description:"Apollo Pharmacy",              category:"Healthcare",        amount:640,   type:"expense", notes:"Vitamins & supplements" },
  { id:13, date:"2026-02-01", description:"Salary – February",            category:"Salary",            amount:92000, type:"income",  notes:"" },
  { id:14, date:"2026-02-03", description:"Nykaa – Skincare",             category:"Personal Care",     amount:1890,  type:"expense", notes:"Minimalist products" },
  { id:15, date:"2026-02-06", description:"Petrol – Full Tank",           category:"Transport",         amount:3200,  type:"expense", notes:"Toyota Innova" },
  { id:16, date:"2026-02-09", description:"Doctor Consultation – Apollo", category:"Healthcare",        amount:900,   type:"expense", notes:"Annual checkup" },
  { id:17, date:"2026-02-12", description:"Myntra – Summer Haul",         category:"Shopping",          amount:4600,  type:"expense", notes:"Sale pickup" },
  { id:18, date:"2026-02-14", description:"Restaurant – Fatty Bao",       category:"Food & Dining",     amount:2200,  type:"expense", notes:"Valentine's dinner" },
  { id:19, date:"2026-02-17", description:"Airtel Broadband",             category:"Bills & Utilities", amount:1499,  type:"expense", notes:"300 Mbps unlimited" },
  { id:20, date:"2026-02-20", description:"Freelance UI Work",            category:"Freelance",         amount:22000, type:"income",  notes:"Dashboard component library" },
  { id:21, date:"2026-02-23", description:"SIP Returns – HDFC Flexi",    category:"Investment",        amount:5600,  type:"income",  notes:"Monthly SIP credit" },
  { id:22, date:"2026-02-25", description:"PVR – 3 Tickets",              category:"Entertainment",     amount:840,   type:"expense", notes:"Pushpa 2 opening weekend" },
  { id:23, date:"2026-02-28", description:"Jio Recharge",                 category:"Bills & Utilities", amount:299,   type:"expense", notes:"3 month plan" },
  { id:24, date:"2026-03-01", description:"Salary – March",               category:"Salary",            amount:92000, type:"income",  notes:"" },
  { id:25, date:"2026-03-03", description:"Zepto – Grocery Run",          category:"Food & Dining",     amount:870,   type:"expense", notes:"Quick delivery" },
  { id:26, date:"2026-03-05", description:"Cult.fit Annual Membership",   category:"Healthcare",        amount:14999, type:"expense", notes:"Annual gym subscription" },
  { id:27, date:"2026-03-08", description:"Coursera – ML Specialization", category:"Education",         amount:3000,  type:"expense", notes:"Google ML course" },
  { id:28, date:"2026-03-11", description:"Flipkart – Smart TV",          category:"Shopping",          amount:32000, type:"expense", notes:"Sony 55 inch 4K" },
  { id:29, date:"2026-03-14", description:"Birthday Dinner – Smoke House",category:"Food & Dining",     amount:3800,  type:"expense", notes:"Family celebration" },
  { id:30, date:"2026-03-17", description:"Freelance Content – TechBlog", category:"Freelance",         amount:15000, type:"income",  notes:"3-article series" },
  { id:31, date:"2026-03-20", description:"Ola – Airport Drop",           category:"Transport",         amount:850,   type:"expense", notes:"Terminal 2" },
  { id:32, date:"2026-03-22", description:"D-Mart – Bulk Buy",            category:"Food & Dining",     amount:4200,  type:"expense", notes:"Monthly stock-up" },
  { id:33, date:"2026-03-26", description:"Mobile Recharge – VI",         category:"Bills & Utilities", amount:359,   type:"expense", notes:"Prepaid validity" },
  { id:34, date:"2026-03-28", description:"Amazon Prime Renewal",         category:"Entertainment",     amount:1499,  type:"expense", notes:"Annual plan" },
  { id:35, date:"2026-04-01", description:"Salary – April",               category:"Salary",            amount:92000, type:"income",  notes:"" },
  { id:36, date:"2026-04-02", description:"Swiggy Instamart – Snacks",    category:"Food & Dining",     amount:560,   type:"expense", notes:"Late night order" },
  { id:37, date:"2026-04-03", description:"Amazon – Desk Accessories",    category:"Shopping",          amount:2400,  type:"expense", notes:"WFH setup upgrade" },
  { id:38, date:"2026-04-04", description:"Uber – Weekly commute",        category:"Transport",         amount:720,   type:"expense", notes:"Mon-Fri commute" },
];

// ════════════════════════════════════════════════════════════
//  CATEGORY CONFIG — icon, brand color, bg tint, text color
// ════════════════════════════════════════════════════════════
const CAT = {
  'Entertainment':     { icon:'🎬', color:'#8B5CF6', bg:'#EDE9FE', txt:'#5B21B6' },
  'Food & Dining':     { icon:'🍔', color:'#F59E0B', bg:'#FFFBEB', txt:'#92400E' },
  'Transport':         { icon:'🚗', color:'#3B82F6', bg:'#EFF6FF', txt:'#1D4ED8' },
  'Shopping':          { icon:'🛍️', color:'#EC4899', bg:'#FDF2F8', txt:'#9D174D' },
  'Bills & Utilities': { icon:'⚡', color:'#64748B', bg:'#F1F5F9', txt:'#334155' },
  'Healthcare':        { icon:'🏥', color:'#10B981', bg:'#ECFDF5', txt:'#065F46' },
  'Salary':            { icon:'💼', color:'#10B981', bg:'#ECFDF5', txt:'#065F46' },
  'Freelance':         { icon:'💻', color:'#6366F1', bg:'#EEF2FF', txt:'#3730A3' },
  'Investment':        { icon:'📈', color:'#F59E0B', bg:'#FFFBEB', txt:'#92400E' },
  'Education':         { icon:'🎓', color:'#06B6D4', bg:'#ECFEFF', txt:'#0E7490' },
  'Personal Care':     { icon:'🪷', color:'#EC4899', bg:'#FDF2F8', txt:'#9D174D' },
};

// ════════════════════════════════════════════════════════════
//  STATE — persisted to localStorage on every change
// ════════════════════════════════════════════════════════════
const S = {
  txs:   JSON.parse(localStorage.getItem('ft_txs'))  || INITIAL_TXS,
  role:  localStorage.getItem('ft_role')             || 'admin',
  theme: localStorage.getItem('ft_theme')            || 'light',
  tab:   'dashboard',
  sort:  { field: 'date', dir: 'desc' },
  nextId: 300,
  _searchTimer: null, // debounce handle for search input
};

// ════════════════════════════════════════════════════════════
//  HELPERS
// ════════════════════════════════════════════════════════════

/** Format number as Indian Rupee string, e.g. ₹1,23,456 */
const fmt    = n => '₹' + Math.abs(Math.round(n)).toLocaleString('en-IN');

/** Full date: "04 Apr 2026" */
const fmtD   = d => new Date(d + 'T00:00:00').toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });

/** Short date: "04 Apr" */
const fmtDSh = d => new Date(d + 'T00:00:00').toLocaleDateString('en-IN', { day:'2-digit', month:'short' });

/** Month label from "YYYY-MM": "Apr '26" */
const fmtM   = d => new Date(d + '-01T00:00:00').toLocaleDateString('en-IN', { month:'short', year:'2-digit' });

/** Clamp a number between min and max */
const clamp  = (v, min, max) => Math.min(max, Math.max(min, v));

/** Save current state to localStorage */
function persist() {
  localStorage.setItem('ft_txs',   JSON.stringify(S.txs));
  localStorage.setItem('ft_role',  S.role);
  localStorage.setItem('ft_theme', S.theme);
}

/** Display a toast notification for a given duration */
function toast(msg, duration = 2800) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('show'), duration);
}

/** Compute income, expense, balance, and savings rate across all transactions */
function computeStats() {
  const inc  = S.txs.filter(t => t.type === 'income').reduce((s, t)  => s + t.amount, 0);
  const exp  = S.txs.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const bal  = inc - exp;
  const rate = inc > 0 ? Math.round(bal / inc * 100) : 0;
  return { inc, exp, bal, rate };
}

/** Build monthly breakdown sorted chronologically */
function buildMonthlyData() {
  const m = {};
  S.txs.forEach(t => {
    const k = t.date.slice(0, 7); // "YYYY-MM"
    if (!m[k]) m[k] = { income: 0, expense: 0 };
    m[k][t.type] += t.amount;
  });
  return Object.entries(m)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => ({
      key:     k,
      label:   fmtM(k),
      income:  v.income,
      expense: v.expense,
      net:     v.income - v.expense,
    }));
}

/** Build expense totals per category, sorted descending by value */
function buildCatData() {
  const c = {};
  S.txs.filter(t => t.type === 'expense').forEach(t => {
    c[t.category] = (c[t.category] || 0) + t.amount;
  });
  return Object.entries(c)
    .sort(([, a], [, b]) => b - a)
    .map(([name, value]) => ({ name, value }));
}

/** Calculate month-over-month change between the two most recent months */
function calcMoMChange() {
  const monthly = buildMonthlyData();
  if (monthly.length < 2) return null;
  const prev = monthly[monthly.length - 2];
  const curr = monthly[monthly.length - 1];
  const expChange = prev.expense > 0 ? ((curr.expense - prev.expense) / prev.expense * 100) : null;
  const incChange = prev.income  > 0 ? ((curr.income  - prev.income)  / prev.income  * 100) : null;
  return { prev, curr, expChange, incChange };
}

// ════════════════════════════════════════════════════════════
//  CHARTS
// ════════════════════════════════════════════════════════════
let tChart = null; // Bar / trend chart instance
let dChart = null; // Donut / category chart instance

/** Read current CSS variable values for theme-aware chart colors */
function getThemeColors() {
  const s = getComputedStyle(document.documentElement);
  return {
    text3:   s.getPropertyValue('--text-3').trim()  || '#94A3B8',
    border:  s.getPropertyValue('--border').trim()  || '#E1E7F0',
    surface: s.getPropertyValue('--surface').trim() || '#FFFFFF',
  };
}

/** Build / rebuild both charts with current data and theme */
function initCharts() {
  const monthly = buildMonthlyData().slice(-6); // show last 6 months
  const cats    = buildCatData().slice(0, 7);
  const { text3, border, surface } = getThemeColors();
  const isDark  = S.theme === 'dark';

  // ── Bar Chart (Income vs Expenses) ──────────────────────
  const tCtx = document.getElementById('chart-trend');
  if (tCtx) {
    if (tChart) tChart.destroy();

    const ctx2d = tCtx.getContext('2d');

    // Gradient fill for income bars
    const gInc = ctx2d.createLinearGradient(0, 0, 0, 230);
    gInc.addColorStop(0, 'rgba(91,95,232,.85)');
    gInc.addColorStop(1, 'rgba(129,140,248,.5)');

    // Gradient fill for expense bars
    const gExp = ctx2d.createLinearGradient(0, 0, 0, 230);
    gExp.addColorStop(0, 'rgba(239,68,68,.8)');
    gExp.addColorStop(1, 'rgba(248,113,113,.4)');

    tChart = new Chart(tCtx, {
      type: 'bar',
      data: {
        labels: monthly.map(m => m.label),
        datasets: [
          { label: 'Income',  data: monthly.map(m => m.income),  backgroundColor: gInc, borderRadius: 7, borderSkipped: false, borderWidth: 0 },
          { label: 'Expense', data: monthly.map(m => m.expense), backgroundColor: gExp, borderRadius: 7, borderSkipped: false, borderWidth: 0 },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 900, easing: 'easeOutCubic' },
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: isDark ? '#0E1829' : '#0C1527',
            padding: 12, cornerRadius: 10,
            titleFont: { family: 'DM Sans', size: 12, weight: '600' },
            bodyFont:  { family: 'DM Mono', size: 12 },
            borderColor: border, borderWidth: 1,
            callbacks: { label: c => `  ${c.dataset.label}: ${fmt(c.raw)}` },
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { font: { size: 11, family: 'DM Sans' }, color: text3 },
            border: { display: false },
          },
          y: {
            grid: { color: isDark ? 'rgba(255,255,255,.04)' : 'rgba(0,0,0,.05)' },
            border: { display: false },
            ticks: {
              font: { size: 11, family: 'DM Mono' }, color: text3,
              callback: v => v >= 1000 ? '₹' + Math.round(v / 1000) + 'k' : '₹' + v,
            },
          },
        },
      },
    });
  }

  // ── Donut Chart (Category Breakdown) ────────────────────
  const dCtx = document.getElementById('chart-donut');
  if (dCtx && cats.length) {
    if (dChart) dChart.destroy();

    dChart = new Chart(dCtx, {
      type: 'doughnut',
      data: {
        labels: cats.map(c => c.name),
        datasets: [{
          data: cats.map(c => c.value),
          backgroundColor: cats.map(c => CAT[c.name]?.color || '#94A3B8'),
          borderColor: surface,
          borderWidth: 3,
          hoverBorderColor: surface,
          hoverOffset: 6,
        }],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        cutout: '70%',
        animation: { duration: 800, easing: 'easeOutCubic' },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: isDark ? '#0E1829' : '#0C1527',
            padding: 11, cornerRadius: 10,
            titleFont: { family: 'DM Sans', size: 12 },
            bodyFont:  { family: 'DM Mono', size: 12 },
            borderColor: border, borderWidth: 1,
            callbacks: { label: c => ` ${c.label}: ${fmt(c.raw)}` },
          },
        },
      },
    });

    // Custom donut legend
    const total    = cats.reduce((s, c) => s + c.value, 0);
    const legendEl = document.getElementById('donut-legend');
    if (legendEl) {
      legendEl.innerHTML = cats.map(c => `
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:7px;">
          <div style="width:9px;height:9px;border-radius:3px;background:${CAT[c.name]?.color || '#94A3B8'};flex-shrink:0;"></div>
          <span style="font-size:11.5px;color:var(--text-2);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${c.name}</span>
          <span style="font-size:11px;color:var(--text-3);font-family:'DM Mono',monospace;font-weight:500;">${total > 0 ? Math.round(c.value / total * 100) : 0}%</span>
        </div>`).join('');
    }
  }
}

// ════════════════════════════════════════════════════════════
//  DASHBOARD
// ════════════════════════════════════════════════════════════
function renderDashboard() {
  const { inc, exp, bal, rate } = computeStats();
  const mom = calcMoMChange();

  // Subtitle: current month/year
  const now = new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
  document.getElementById('dashboard-subtitle').textContent = `Updated · ${now}`;

  // ── Net Balance ──────────────────────────────────────────
  const bEl = document.getElementById('sv-balance');
  bEl.textContent = fmt(bal);
  bEl.style.color = bal >= 0 ? 'var(--green)' : 'var(--red)';
  document.getElementById('sm-balance').innerHTML = bal >= 0
    ? `<span class="trend-chip trend-up">↑ Positive cashflow</span>`
    : `<span class="trend-chip trend-down">↓ Negative cashflow</span>`;

  // ── Total Income ─────────────────────────────────────────
  document.getElementById('sv-income').textContent = fmt(inc);
  const incCount = S.txs.filter(t => t.type === 'income').length;
  document.getElementById('sm-income').innerHTML = mom?.incChange != null
    ? `<span class="trend-chip ${mom.incChange >= 0 ? 'trend-up' : 'trend-down'}">${mom.incChange >= 0 ? '↑' : '↓'} ${Math.abs(Math.round(mom.incChange))}% vs last month</span>`
    : `${incCount} income entries`;

  // ── Total Expenses ───────────────────────────────────────
  document.getElementById('sv-expense').textContent = fmt(exp);
  const expCount = S.txs.filter(t => t.type === 'expense').length;
  document.getElementById('sm-expense').innerHTML = mom?.expChange != null
    ? `<span class="trend-chip ${mom.expChange > 0 ? 'trend-down' : 'trend-up'}">${mom.expChange > 0 ? '↑' : '↓'} ${Math.abs(Math.round(mom.expChange))}% vs last month</span>`
    : `${expCount} expense entries`;

  // ── Savings Rate ─────────────────────────────────────────
  const sEl = document.getElementById('sv-savings');
  sEl.textContent = rate + '%';
  sEl.style.color = rate >= 20 ? 'var(--green)' : rate >= 10 ? 'var(--amber)' : 'var(--red)';
  document.getElementById('sm-savings').innerHTML = rate >= 20
    ? `<span class="trend-chip trend-up">🎯 Above 20% target</span>`
    : rate >= 10
    ? `<span class="trend-chip trend-neu">${20 - rate}% below 20% target</span>`
    : `<span class="trend-chip trend-down">Low savings — review expenses</span>`;

  // ── Recent 5 Transactions ────────────────────────────────
  const recent = [...S.txs].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);
  const listEl = document.getElementById('recent-list');
  if (listEl) {
    if (!recent.length) {
      listEl.innerHTML = `
        <div class="empty-state">
          <div class="empty-ico-wrap">📭</div>
          <div class="empty-title">No transactions yet</div>
          <div class="empty-desc">Add your first transaction to see it here</div>
        </div>`;
    } else {
      listEl.innerHTML = recent.map(t => {
        const cfg = CAT[t.category] || { icon:'💰', color:'#94A3B8', bg:'#F1F5F9' };
        return `
          <div class="recent-row">
            <div class="tx-ico" style="background:${cfg.bg};">${cfg.icon}</div>
            <div class="tx-info">
              <div class="tx-name">${t.description}</div>
              <div class="tx-cat-sm">${t.category} · ${fmtDSh(t.date)}</div>
            </div>
            <div class="tx-right">
              <div class="tx-amt ${t.type === 'income' ? 'amt-income' : 'amt-expense'}">
                ${t.type === 'income' ? '+' : '-'}${fmt(t.amount)}
              </div>
            </div>
          </div>`;
      }).join('');
    }
  }

  syncRoleUI();
  setTimeout(initCharts, 60);
}

// ════════════════════════════════════════════════════════════
//  TRANSACTIONS
// ════════════════════════════════════════════════════════════

/** Apply search, type filter, category filter, and sort */
function filteredTxs() {
  const q    = (document.getElementById('tx-search')?.value || '').trim().toLowerCase();
  const type = document.getElementById('tx-type')?.value  || 'all';
  const cat  = document.getElementById('tx-cat')?.value   || 'all';

  return [...S.txs]
    .filter(t => {
      if (type !== 'all' && t.type !== type) return false;
      if (cat  !== 'all' && t.category !== cat) return false;
      if (q && !t.description.toLowerCase().includes(q)
            && !t.category.toLowerCase().includes(q)
            && !(t.notes || '').toLowerCase().includes(q)) return false;
      return true;
    })
    .sort((a, b) => {
      const d = S.sort.dir === 'asc' ? 1 : -1;
      if (S.sort.field === 'date')   return d * a.date.localeCompare(b.date);
      if (S.sort.field === 'amount') return d * (a.amount - b.amount);
      return d * (a[S.sort.field] || '').localeCompare(b[S.sort.field] || '');
    });
}

/** Render the transactions table with filtered/sorted data */
function renderTx() {
  const list   = filteredTxs();
  const tbody  = document.getElementById('tx-tbody');
  const footer = document.getElementById('tx-footer-count');
  const total  = document.getElementById('tx-footer-total');
  const thAct  = document.getElementById('th-actions');
  const admAct = document.getElementById('admin-actions');

  // Role-based UI visibility
  if (thAct)  thAct.textContent    = S.role === 'admin' ? 'Actions' : '';
  if (admAct) admAct.style.display = S.role === 'admin' ? 'flex'    : 'none';

  const vbTx = document.getElementById('viewer-banner-tx');
  if (vbTx) vbTx.style.display = S.role === 'viewer' ? 'flex' : 'none';

  // Update sort arrow indicators
  ['date', 'description', 'category', 'amount'].forEach(f => {
    const el = document.getElementById('sa-' + f);
    if (!el) return;
    const active = S.sort.field === f;
    el.textContent = active ? (S.sort.dir === 'asc' ? '↑' : '↓') : '↕';
    el.className   = 'sort-arrow' + (active ? ' ' + S.sort.dir : '');
  });

  if (!tbody) return;

  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="6">
      <div class="empty-state">
        <div class="empty-ico-wrap">🔍</div>
        <div class="empty-title">No transactions found</div>
        <div class="empty-desc">Try adjusting your search or filter settings</div>
      </div>
    </td></tr>`;
    if (footer) footer.textContent = '0 transactions';
    if (total)  total.textContent  = '';
    return;
  }

  tbody.innerHTML = list.map(t => {
    const cfg  = CAT[t.category] || { icon:'💰', bg:'#F1F5F9', txt:'#334155', color:'#94A3B8' };
    const acts = S.role === 'admin' ? `
      <div class="tx-act-wrap">
        <button class="btn btn-ghost btn-xs" onclick="openModal(${t.id})">Edit</button>
        <button class="btn btn-danger-soft btn-xs" onclick="delTx(${t.id})">Delete</button>
      </div>` : '';

    return `<tr>
      <td style="color:var(--text-3);white-space:nowrap;font-size:12px;font-family:'DM Mono',monospace;">${fmtD(t.date)}</td>
      <td>
        <div class="td-desc-wrap">
          <div class="td-ico" style="background:${cfg.bg};">${cfg.icon}</div>
          <div>
            <div class="td-desc-main">${t.description}</div>
            ${t.notes ? `<div class="td-desc-note">${t.notes}</div>` : ''}
          </div>
        </div>
      </td>
      <td><span class="cat-badge" style="background:${cfg.bg};color:${cfg.txt};">${t.category}</span></td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-weight:600;letter-spacing:-.3px;">
        <span style="color:${t.type === 'income' ? 'var(--green)' : 'var(--red)'};">
          ${t.type === 'income' ? '+' : '-'}${fmt(t.amount)}
        </span>
      </td>
      <td><span class="type-pill type-${t.type}">${t.type === 'income' ? '↑ Income' : '↓ Expense'}</span></td>
      <td>${acts}</td>
    </tr>`;
  }).join('');

  // Footer summary
  const expSum = list.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const incSum = list.filter(t => t.type === 'income').reduce((s, t)  => s + t.amount, 0);
  if (footer) footer.textContent = `${list.length} transaction${list.length !== 1 ? 's' : ''}`;
  if (total) {
    total.textContent = expSum > 0 && incSum > 0
      ? `In: ${fmt(incSum)}  ·  Out: ${fmt(expSum)}`
      : expSum > 0 ? `Total: -${fmt(expSum)}` : incSum > 0 ? `Total: +${fmt(incSum)}` : '';
  }
}

/** Toggle sort column; flip direction if same column clicked again */
function doSort(field) {
  if (S.sort.field === field) {
    S.sort.dir = S.sort.dir === 'asc' ? 'desc' : 'asc';
  } else {
    S.sort.field = field;
    S.sort.dir   = field === 'date' || field === 'amount' ? 'desc' : 'asc';
  }
  renderTx();
}

// Debounced search — re-renders table 280ms after typing stops
document.getElementById('tx-search').addEventListener('input', () => {
  clearTimeout(S._searchTimer);
  S._searchTimer = setTimeout(renderTx, 280);
});

// ════════════════════════════════════════════════════════════
//  INSIGHTS
// ════════════════════════════════════════════════════════════
function renderInsights() {
  const { inc, exp, bal, rate } = computeStats();
  const cats    = buildCatData();
  const monthly = buildMonthlyData();
  const mom     = calcMoMChange();
  const grid    = document.getElementById('ins-grid');

  const avgExp = monthly.length > 0 ? monthly.reduce((s, m) => s + m.expense, 0) / monthly.length : 0;
  const avgInc = monthly.length > 0 ? monthly.reduce((s, m) => s + m.income,  0) / monthly.length : 0;

  // Savings goal: 20% of total income
  const savingsGoal = inc * 0.20;
  const savedAmt    = Math.max(0, bal);
  const savingsPct  = savingsGoal > 0 ? clamp(Math.round(savedAmt / savingsGoal * 100), 0, 100) : 0;

  // MoM narrative string
  let momLabel = 'No monthly comparison available yet.';
  if (mom) {
    const dir = mom.expChange > 0 ? 'more' : 'less';
    const pct = Math.abs(Math.round(mom.expChange));
    momLabel  = `You spent <strong>${pct}% ${dir}</strong> in <strong>${mom.curr.label}</strong> than <strong>${mom.prev.label}</strong> (${fmt(mom.curr.expense)} vs ${fmt(mom.prev.expense)}).`;
  }

  if (grid) grid.innerHTML = `
    <!-- Top Spending Category -->
    <div class="ins-card">
      <div class="ins-lbl">🏆 Highest Spending Category</div>
      ${cats[0]
        ? `<div class="ins-val" style="color:${CAT[cats[0].name]?.color || 'var(--text-1)'};">
             ${CAT[cats[0].name]?.icon || '💰'} ${cats[0].name}
           </div>
           <div class="ins-desc">
             You've spent <strong>${fmt(cats[0].value)}</strong> here —
             <strong>${exp > 0 ? Math.round(cats[0].value / exp * 100) : 0}%</strong> of total expenses.
           </div>`
        : `<div class="ins-desc">Add some expense transactions to see your top category.</div>`}
    </div>

    <!-- Month-over-Month -->
    <div class="ins-card">
      <div class="ins-lbl">📅 Month-over-Month</div>
      ${mom
        ? `<div class="ins-val" style="color:${mom.expChange > 0 ? 'var(--red)' : 'var(--green)'};">
             ${mom.expChange > 0 ? '↑' : '↓'} ${Math.abs(Math.round(mom.expChange))}%
           </div>
           <div class="ins-desc">${momLabel}</div>`
        : `<div class="ins-desc">Not enough monthly data yet.</div>`}
    </div>

    <!-- Savings Goal Progress -->
    <div class="ins-card">
      <div class="ins-lbl">🎯 Savings Goal (20% of income)</div>
      <div class="ins-val" style="color:${savingsPct >= 100 ? 'var(--green)' : 'var(--amber)'};">
        ${savingsPct}%
      </div>
      <div class="ins-desc">
        ${savedAmt > 0
          ? `Saved <strong>${fmt(savedAmt)}</strong> of goal ${fmt(savingsGoal)}.`
          : 'Start saving to track progress here.'}
      </div>
      <div class="progress-wrap">
        <div class="progress-lbl"><span>₹0</span><span>${fmt(savingsGoal)}</span></div>
        <div class="progress-bg">
          <div class="progress-fill" style="width:${savingsPct}%;background:${savingsPct >= 100 ? 'var(--green)' : 'var(--accent)'};"></div>
        </div>
      </div>
    </div>

    <!-- Monthly Averages -->
    <div class="ins-card">
      <div class="ins-lbl">📊 Monthly Averages</div>
      <div style="display:flex;gap:16px;margin-top:4px;">
        <div>
          <div style="font-size:12px;color:var(--text-3);margin-bottom:2px;">Avg Income</div>
          <div style="font-size:18px;font-weight:700;color:var(--green);letter-spacing:-.5px;font-family:'DM Mono',monospace;">${fmt(avgInc)}</div>
        </div>
        <div>
          <div style="font-size:12px;color:var(--text-3);margin-bottom:2px;">Avg Expense</div>
          <div style="font-size:18px;font-weight:700;color:var(--red);letter-spacing:-.5px;font-family:'DM Mono',monospace;">${fmt(avgExp)}</div>
        </div>
      </div>
      <div class="ins-desc" style="margin-top:10px;">
        Based on <strong>${monthly.length}</strong> month${monthly.length !== 1 ? 's' : ''} of tracked data.
      </div>
    </div>

    <!-- Smart Tip (full width) -->
    <div class="tip-card ins-full">
      <div class="tip-lbl">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a7 7 0 015.292 11.586A5 5 0 0115 17H9a5 5 0 01-2.292-3.414A7 7 0 0112 2zm0 15h4v2h-4v-2zm0 3h4v1a2 2 0 01-2 2h0a2 2 0 01-2-2v-1z"/>
        </svg>
        Smart Observation
      </div>
      <div class="tip-text">
        ${cats.slice(0, 3).length > 0
          ? `Your top 3 categories — <strong>${cats.slice(0,3).map(c => (CAT[c.name]?.icon || '') + ' ' + c.name).join(', ')}</strong> — account for
             <strong>${exp > 0 ? Math.round(cats.slice(0,3).reduce((s,c) => s+c.value, 0) / exp * 100) : 0}%</strong> of all expenses
             (${fmt(cats.slice(0,3).reduce((s,c) => s + c.value, 0))}).
             A <strong>10% cut</strong> here alone could save
             <strong>${fmt(cats.slice(0,3).reduce((s,c) => s + c.value, 0) * 0.10)}</strong> per period.`
          : 'Add more transactions to unlock personalised spending insights.'}
      </div>
    </div>
  `;

  // Category breakdown card
  const catCard = document.getElementById('ins-cat-card');
  if (catCard) {
    catCard.innerHTML = `
      <div class="card-hdr">
        <div>
          <div class="card-title">Category Breakdown</div>
          <div class="card-subtitle">Detailed expense distribution across all categories</div>
        </div>
      </div>
      <div class="cat-list">
        ${cats.length
          ? cats.map(c => {
              const pct = exp > 0 ? c.value / exp * 100 : 0;
              const cfg = CAT[c.name] || { color:'#94A3B8', icon:'💰' };
              return `
                <div class="cat-row">
                  <div class="cat-ico-sm">${cfg.icon}</div>
                  <div class="cat-name">${c.name}</div>
                  <div class="cat-bar-wrap">
                    <div class="cat-bar-bg">
                      <div class="cat-bar-fill" style="width:${pct}%;background:${cfg.color};"></div>
                    </div>
                  </div>
                  <div class="cat-amt">${fmt(c.value)}</div>
                  <div class="cat-pct">${Math.round(pct)}%</div>
                </div>`;
            }).join('')
          : `<div class="empty-state">
               <div class="empty-ico-wrap">📊</div>
               <div class="empty-title">No expense data yet</div>
               <div class="empty-desc">Add expense transactions to see your category breakdown</div>
             </div>`}
      </div>`;
  }

  renderInsightAlerts(cats, mom, rate, exp);
}

/** Generate data-driven smart alert cards based on current transaction data */
function renderInsightAlerts(cats, mom, rate, exp) {
  const alertsEl = document.getElementById('ins-alerts');
  if (!alertsEl) return;

  const alerts = [];

  // Low savings alert
  if (rate < 10) {
    alerts.push({ type:'danger', icon:'🚨', title:'Low Savings Rate',
      body:`Your savings rate is <strong>${rate}%</strong>, well below the recommended 20%. Consider reducing discretionary spending or setting up an auto-transfer.` });
  } else if (rate >= 30) {
    alerts.push({ type:'positive', icon:'🏅', title:'Excellent Savings Rate!',
      body:`You're saving <strong>${rate}%</strong> of your income — outstanding! You're on track to build significant wealth over time.` });
  }

  // Top category dominance warning
  if (cats.length > 0 && exp > 0) {
    const topPct = Math.round(cats[0].value / exp * 100);
    if (topPct > 35) {
      alerts.push({ type:'warning', icon:'⚠️', title:`High Spending: ${cats[0].name}`,
        body:`<strong>${cats[0].name}</strong> makes up <strong>${topPct}%</strong> of total expenses (${fmt(cats[0].value)}). Consider setting a monthly budget limit.` });
    }
  }

  // Month-over-month expense spike
  if (mom && mom.expChange > 20) {
    alerts.push({ type:'warning', icon:'📈', title:'Spending Spike Detected',
      body:`Expenses jumped by <strong>${Math.round(mom.expChange)}%</strong> this month (${fmt(mom.curr.expense)} vs ${fmt(mom.prev.expense)}). Review recent transactions to identify the cause.` });
  }

  // Month-over-month expense improvement
  if (mom && mom.expChange < -15) {
    alerts.push({ type:'positive', icon:'✅', title:'Great Expense Reduction!',
      body:`You reduced spending by <strong>${Math.abs(Math.round(mom.expChange))}%</strong> this month, saving an extra <strong>${fmt(mom.prev.expense - mom.curr.expense)}</strong> compared to last month.` });
  }

  // Income growth
  if (mom && mom.incChange > 10) {
    alerts.push({ type:'positive', icon:'💸', title:'Income is Growing',
      body:`Income increased by <strong>${Math.round(mom.incChange)}%</strong> this month (${fmt(mom.curr.income)} vs ${fmt(mom.prev.income)}). Consider investing the surplus.` });
  }

  if (alerts.length === 0) { alertsEl.innerHTML = ''; return; }

  alertsEl.innerHTML = `
    <div class="card-title" style="margin-bottom:14px;font-size:15px;font-weight:600;letter-spacing:-.2px;">💡 Smart Alerts</div>
    ${alerts.map(a => `
      <div class="insight-alert type-${a.type}">
        <div class="insight-icon">${a.icon}</div>
        <div>
          <div class="insight-title">${a.title}</div>
          <div class="insight-body">${a.body}</div>
        </div>
      </div>`).join('')}
  `;
}

// ════════════════════════════════════════════════════════════
//  MODAL / CRUD
// ════════════════════════════════════════════════════════════

function openModal(id) {
  if (S.role !== 'admin') {
    toast('👁️ Viewer mode — switch to Admin to edit transactions');
    return;
  }

  document.getElementById('modal-title').textContent = id ? 'Edit Transaction' : 'New Transaction';

  if (id) {
    const t = S.txs.find(x => x.id === id);
    if (!t) return;
    document.getElementById('f-id').value    = id;
    document.getElementById('f-desc').value  = t.description;
    document.getElementById('f-amt').value   = t.amount;
    document.getElementById('f-cat').value   = t.category;
    document.getElementById('f-date').value  = t.date;
    document.getElementById('f-notes').value = t.notes || '';
    setFType(t.type);
  } else {
    document.getElementById('f-id').value    = '';
    document.getElementById('f-desc').value  = '';
    document.getElementById('f-amt').value   = '';
    document.getElementById('f-cat').value   = 'Food & Dining';
    document.getElementById('f-date').value  = new Date().toISOString().slice(0, 10);
    document.getElementById('f-notes').value = '';
    setFType('expense');
  }

  document.getElementById('modal-bd').classList.add('open');
  setTimeout(() => document.getElementById('f-desc').focus(), 100);
}

function closeModal() {
  document.getElementById('modal-bd').classList.remove('open');
}

/** Toggle Expense / Income type button styles */
function setFType(type) {
  document.getElementById('f-type').value = type;
  document.getElementById('tbtn-expense').className = 'type-btn' + (type === 'expense' ? ' active-expense' : '');
  document.getElementById('tbtn-income').className  = 'type-btn' + (type === 'income'  ? ' active-income'  : '');
}

/** Validate and save a new or edited transaction */
function saveTx() {
  const eid   = document.getElementById('f-id').value;
  const desc  = document.getElementById('f-desc').value.trim();
  const amt   = parseFloat(document.getElementById('f-amt').value);
  const cat   = document.getElementById('f-cat').value;
  const date  = document.getElementById('f-date').value;
  const type  = document.getElementById('f-type').value;
  const notes = document.getElementById('f-notes').value.trim();

  if (!desc || !amt || isNaN(amt) || amt <= 0 || !date) {
    toast('❌ Please fill in all required fields');
    return;
  }

  if (eid) {
    const idx = S.txs.findIndex(t => t.id === parseInt(eid));
    if (idx >= 0) S.txs[idx] = { ...S.txs[idx], description: desc, amount: amt, category: cat, date, type, notes };
    toast('✏️ Transaction updated');
  } else {
    S.txs.push({ id: S.nextId++, description: desc, amount: amt, category: cat, date, type, notes });
    toast('✅ Transaction added');
  }

  persist();
  closeModal();
  refresh();
}

/** Delete a transaction after confirmation */
function delTx(id) {
  if (!confirm('Delete this transaction? This cannot be undone.')) return;
  S.txs = S.txs.filter(t => t.id !== id);
  persist();
  toast('🗑️ Transaction deleted');
  refresh();
}

// ════════════════════════════════════════════════════════════
//  EXPORT TO CSV
// ════════════════════════════════════════════════════════════
function exportCSV() {
  const list = filteredTxs().length > 0 ? filteredTxs() : S.txs;
  const hdr  = ['Date', 'Description', 'Category', 'Amount', 'Type', 'Notes'];
  const rows = list.map(t => [
    t.date,
    `"${t.description.replace(/"/g, '""')}"`,
    t.category,
    t.amount,
    t.type,
    `"${(t.notes || '').replace(/"/g, '""')}"`,
  ]);
  const csv = [hdr, ...rows].map(r => r.join(',')).join('\n');
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  const a   = Object.assign(document.createElement('a'), {
    href: url,
    download: `fintrack_export_${new Date().toISOString().slice(0, 10)}.csv`,
  });
  a.click();
  URL.revokeObjectURL(url);
  toast('📥 CSV exported successfully');
}

// ════════════════════════════════════════════════════════════
//  TAB / ROLE / THEME
// ════════════════════════════════════════════════════════════

/** Switch between dashboard, transactions, and insights tabs */
function switchTab(tab) {
  S.tab = tab;
  ['dashboard', 'transactions', 'insights'].forEach(t => {
    document.getElementById('tab-' + t).classList.toggle('active', t === tab);
    document.getElementById('nav-' + t).classList.toggle('active', t === tab);
  });
  closeSidebar();
  refresh();
}

/** Re-render whichever tab is currently active */
function refresh() {
  if (S.tab === 'dashboard')    renderDashboard();
  if (S.tab === 'transactions') renderTx();
  if (S.tab === 'insights')     renderInsights();
}

/** Sync all role-dependent UI elements (banners, buttons, labels) */
function syncRoleUI() {
  const isAdmin = S.role === 'admin';

  const vb     = document.getElementById('viewer-banner');
  const addBtn = document.getElementById('dash-add-btn');
  const vbTx   = document.getElementById('viewer-banner-tx');

  if (vb)     vb.style.display     = isAdmin ? 'none' : 'flex';
  if (addBtn) addBtn.style.display = isAdmin ? 'inline-flex' : 'none';
  if (vbTx)   vbTx.style.display   = isAdmin ? 'none' : 'flex';

  document.getElementById('role-title').textContent = isAdmin ? 'Admin'       : 'Viewer';
  document.getElementById('role-sub').textContent   = isAdmin ? 'Full access' : 'Read only';

  const avatar = document.getElementById('role-avatar');
  avatar.className   = 'role-avatar ' + S.role;
  avatar.textContent = isAdmin ? '👤' : '👁️';

  document.getElementById('rbtn-admin').className  = 'role-btn' + (isAdmin  ? ' active-admin'  : '');
  document.getElementById('rbtn-viewer').className = 'role-btn' + (!isAdmin ? ' active-viewer' : '');
}

/** Switch between Admin and Viewer role */
function switchRole(role) {
  S.role = role;
  persist();
  syncRoleUI();
  toast(role === 'admin' ? '🔓 Admin mode — full editing enabled' : '👁️ Viewer mode — read-only access');
  refresh();
}

/** Toggle between light and dark theme */
function toggleTheme() {
  S.theme = S.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', S.theme);
  document.getElementById('theme-lbl').textContent = S.theme === 'light' ? 'Light Mode' : 'Dark Mode';
  persist();
  setTimeout(() => { if (S.tab === 'dashboard') initCharts(); }, 100);
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebar-overlay').classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
}

// Close modal when clicking the backdrop
document.getElementById('modal-bd').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-bd')) closeModal();
});

// Close modal on Escape key
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ════════════════════════════════════════════════════════════
//  INIT — runs once on page load
// ════════════════════════════════════════════════════════════
(function init() {
  // Apply persisted theme before rendering anything
  document.documentElement.setAttribute('data-theme', S.theme);
  document.getElementById('theme-lbl').textContent = S.theme === 'light' ? 'Light Mode' : 'Dark Mode';

  // Calculate the next safe unique ID
  S.nextId = S.txs.length > 0 ? Math.max(...S.txs.map(t => t.id)) + 1 : 100;

  // Sync UI to persisted role
  syncRoleUI();

  // Render the default tab
  renderDashboard();
})();