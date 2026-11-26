/* ==========================================================================
   DhwaniStage — Community Event Sound, Speaker & DJ Equipment Rental System
   Pure Vanilla JavaScript (ES6 Beginner Friendly — No Frameworks, No Classes)
   Strictly aligned with First-Semester Syllabus:
   - Uses: const, let, template literals, basic for loops, objects, arrays,
           standard DOM methods, localStorage, JSON.parse / JSON.stringify
   - Avoids: class syntax, async/await, fetch, .map() / .filter() / .reduce()
   ========================================================================== */

// ==========================================================================
// 1. DEFAULT SOUND EQUIPMENT CATALOG (Seeded into localStorage)
// ==========================================================================
const DEFAULT_EQUIPMENT_DATA = [
  // Category: PA Speaker Sets
  {
    id: "gear-spk-1",
    name: "Ahuja 1200W Dual Top Pandal Sound Rig",
    category: "speakers",
    wattageSpec: "1200W RMS • 130dB Peak • 2x15-inch Woofers + High-Frequency Horns + Heavy Iron Stands",
    dailyRate: 2200,
    securityDeposit: 4000,
    stock: 5,
    description: "Ideal for open pandals, bhajans, and marriage processions. Clear vocal throw up to 300 feet."
  },
  {
    id: "gear-spk-2",
    name: "JBL EON 1500W Active Powered Subwoofer & Tops",
    category: "speakers",
    wattageSpec: "1500W Active • 18-inch Thumping Subwoofer + 2x Two-Way Satellite Mid-Tops",
    dailyRate: 3500,
    securityDeposit: 6000,
    stock: 3,
    description: "Deep bass response tailored for DJ nights, Dandiya beats, and college cultural festivals."
  },
  {
    id: "gear-spk-3",
    name: "Studiomaster 800W Acoustic Stage Monitor Pair",
    category: "speakers",
    wattageSpec: "800W Bi-Amp • Angled Wedge Floor Monitors • Low-Noise Crossover",
    dailyRate: 1600,
    securityDeposit: 3000,
    stock: 4,
    description: "Enables live vocalists, tabla players, and harmonium artists to hear themselves cleanly on stage."
  },

  // Category: Wireless Cordless Mics
  {
    id: "gear-mic-1",
    name: "Shure Dual Wireless Cordless Mic Set",
    category: "mics",
    wattageSpec: "UHF Dual-Band 600-698MHz • 80m Clean Line-of-Sight • Feedback Cancellation",
    dailyRate: 850,
    securityDeposit: 1500,
    stock: 8,
    description: "Includes dual-antenna receiver, 2 heavy metal handheld microphones, and AA rechargeable batteries."
  },
  {
    id: "gear-mic-2",
    name: "Sennheiser Collar / Lapel Wireless Clip Mic",
    category: "mics",
    wattageSpec: "Miniature Cardioid Capsule • Bodypack Transmitter • 10-Hour Battery Life",
    dailyRate: 950,
    securityDeposit: 2000,
    stock: 6,
    description: "Hands-free speech audio for event anchors, wedding emcees, priests, and stage theatrical drama."
  },
  {
    id: "gear-mic-3",
    name: "Ahuja Heavy-Duty Podium Gooseneck Mic",
    category: "mics",
    wattageSpec: "50cm Flexible Slim Gooseneck • Chime Base with LED Indicator Ring",
    dailyRate: 450,
    securityDeposit: 800,
    stock: 5,
    description: "Professional announcement mic for chief guest speeches, prize distributions, and inauguration rostrums."
  },

  // Category: DJ Audio Mixers
  {
    id: "gear-mix-1",
    name: "Yamaha 12-Channel Live Mixer with SPX Effects",
    category: "mixers",
    wattageSpec: "12 Channels (6 XLR Mic Ins) • 24 Digital Echo/Reverb SPX Presets • 3-Band EQ",
    dailyRate: 1400,
    securityDeposit: 3000,
    stock: 4,
    description: "Top choice for live bands, bhajan mandalis, and orchestras. Pristine mic preamps with phantom power."
  },
  {
    id: "gear-mix-2",
    name: "Pioneer DJ 2-Channel Professional Serato Controller",
    category: "mixers",
    wattageSpec: "Dual Capacitive Jog Wheels • 8 Multi-Color Performance Pads • Balanced XLR & RCA Outs",
    dailyRate: 2200,
    securityDeposit: 5000,
    stock: 3,
    description: "High-energy DJ performance console with tactile pitch sliders, filter knobs, and crossfader."
  },
  {
    id: "gear-mix-3",
    name: "Stranger 8-Channel Compact Bhajan & Folk Echo Mixer",
    category: "mixers",
    wattageSpec: "8 Input Channels • Analog Tape-Delay Echo Chamber • Rugged Metal Enclosure",
    dailyRate: 700,
    securityDeposit: 1200,
    stock: 6,
    description: "A beloved Indian folk audio classic. Delivers deep, resonant echo for dholak, harmonium, and chorus."
  },

  // Category: Stage Spotlights
  {
    id: "gear-lgt-1",
    name: "54-LED RGBW DMX Stage Par Can Wash Lights (Pack of 4)",
    category: "lights",
    wattageSpec: "54x 3W LEDs (162W Total) • Vibrant 16M Colors • Sound-Active & DMX Auto Modes",
    dailyRate: 1200,
    securityDeposit: 2000,
    stock: 6,
    description: "Bright color wash lights for stage backdrops, pandal ceilings, and dynamic stage floor lighting."
  },
  {
    id: "gear-lgt-2",
    name: "200W Warm White COB Focus Face Light with Stand",
    category: "lights",
    wattageSpec: "200W COB Chip • Warm White 3200K • 95+ CRI • Telescopic 9-Foot Light Stand",
    dailyRate: 900,
    securityDeposit: 1500,
    stock: 5,
    description: "Essential for camera recording, ensuring the bride, groom, or chief guest's face is naturally illuminated."
  },
  {
    id: "gear-lgt-3",
    name: "High-Intensity Moving Head Laser & Beam Light",
    category: "lights",
    wattageSpec: "150W Discharge Prism Beam • 14 Gobo Patterns • 540-degree Rapid Pan / Tilt",
    dailyRate: 1800,
    securityDeposit: 3500,
    stock: 3,
    description: "Concert-grade sharp light beams cutting through haze for DJ dance parties and sangeet night entries."
  },

  // Category: Cables & Snakes
  {
    id: "gear-cbl-1",
    name: "Heavy-Duty 20-Meter XLR Balanced Snake Cable (8 Channels)",
    category: "cables",
    wattageSpec: "20m Shielded Multi-Core • 8 XLR Sends on Stage Stagebox • Low Noise OFC Copper",
    dailyRate: 500,
    securityDeposit: 1000,
    stock: 6,
    description: "Connects stage microphones to the main sound console across the hall cleanly with zero clutter."
  },
  {
    id: "gear-cbl-2",
    name: "Gold-Plated 10m Microphone Cables Bundle (Pack of 4)",
    category: "cables",
    wattageSpec: "4x 10-Meter XLR Male to XLR Female • Braided Noise Shielding • Gold Connectors",
    dailyRate: 350,
    securityDeposit: 600,
    stock: 10,
    description: "Heavy-duty mic cables resistant to foot-stepping and stage tangling during hectic events."
  },
  {
    id: "gear-cbl-3",
    name: "Speakon 15m Speaker Line + 16A Power Extension Kit",
    category: "cables",
    wattageSpec: "2x 15m Speakon 2.5sq mm + 3x 16A Industrial Sockets with Surge Protection",
    dailyRate: 400,
    securityDeposit: 700,
    stock: 8,
    description: "High-current cables ensuring heavy speaker amplifiers receive clean power without overheating."
  }
];

// ==========================================================================
// 2. LOCALSTORAGE INITIALIZATION & PERSISTENCE HELPERS
// ==========================================================================
const STORAGE_KEY_EQUIPMENT = "dhwani_equipment_v1";
const STORAGE_KEY_RIG = "dhwani_rig_v1";
const STORAGE_KEY_BOOKINGS = "dhwani_bookings_v1";
const STORAGE_KEY_CALC_SETTINGS = "dhwani_calc_settings_v1";

// Load equipment inventory from localStorage, or seed default data
function getEquipmentInventory() {
  const savedData = localStorage.getItem(STORAGE_KEY_EQUIPMENT);
  if (savedData) {
    return JSON.parse(savedData);
  } else {
    // Seed default equipment list
    localStorage.setItem(STORAGE_KEY_EQUIPMENT, JSON.stringify(DEFAULT_EQUIPMENT_DATA));
    return DEFAULT_EQUIPMENT_DATA;
  }
}

// Save equipment inventory
function saveEquipmentInventory(inventoryArray) {
  localStorage.setItem(STORAGE_KEY_EQUIPMENT, JSON.stringify(inventoryArray));
}

// Load current selected rig items
function getRigItems() {
  const savedRig = localStorage.getItem(STORAGE_KEY_RIG);
  if (savedRig) {
    return JSON.parse(savedRig);
  }
  return [];
}

// Save current rig items
function saveRigItems(rigArray) {
  localStorage.setItem(STORAGE_KEY_RIG, JSON.stringify(rigArray));
}

// Load confirmed bookings array
function getBookings() {
  const savedBookings = localStorage.getItem(STORAGE_KEY_BOOKINGS);
  if (savedBookings) {
    return JSON.parse(savedBookings);
  }
  return [];
}

// Save bookings array
function saveBookings(bookingsArray) {
  localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(bookingsArray));
}

// Load calculator settings (duration plan, custom days, technician toggle)
function getCalculatorSettings() {
  const savedSettings = localStorage.getItem(STORAGE_KEY_CALC_SETTINGS);
  if (savedSettings) {
    return JSON.parse(savedSettings);
  }
  return {
    plan: "1",
    customDays: 4,
    hasTechnician: false
  };
}

// Save calculator settings
function saveCalculatorSettings(settingsObj) {
  localStorage.setItem(STORAGE_KEY_CALC_SETTINGS, JSON.stringify(settingsObj));
}

// ==========================================================================
// 3. TOAST NOTIFICATION UTILITY (Accessible with aria-live)
// ==========================================================================
function showToast(message, type) {
  const toastContainer = document.getElementById("toast-container");
  if (!toastContainer) return;

  const toastElement = document.createElement("div");
  // Set appropriate class based on type ('success', 'error', 'info')
  const toastTypeClass = (type === "success" || type === "error" || type === "info") 
    ? "toast-" + type 
    : "toast-info";

  toastElement.className = "toast " + toastTypeClass;
  
  // Icon based on type
  let iconText = "ℹ️";
  if (type === "success") iconText = "✅";
  if (type === "error") iconText = "⚠️";

  toastElement.innerHTML = `
    <span>${iconText} ${message}</span>
    <button type="button" class="btn-clear-search" style="color:#ffffff; font-size:0.9rem;" title="Close">&times;</button>
  `;

  // Close on button click
  const closeBtn = toastElement.querySelector("button");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      toastElement.remove();
    });
  }

  toastContainer.appendChild(toastElement);

  // Auto remove after 3.5 seconds
  setTimeout(function () {
    if (toastElement.parentNode) {
      toastElement.remove();
    }
  }, 3500);
}

// ==========================================================================
// 4. VIEW SWITCHING & NAVIGATION
// ==========================================================================
function switchView(targetViewId) {
  // All view sections
  const viewSections = document.querySelectorAll(".app-view");
  for (let i = 0; i < viewSections.length; i++) {
    viewSections[i].classList.remove("active-view");
  }

  // Activate target section
  const targetSection = document.getElementById(targetViewId);
  if (targetSection) {
    targetSection.classList.add("active-view");
  }

  // Update navigation buttons
  const navButtons = document.querySelectorAll(".nav-btn");
  for (let j = 0; j < navButtons.length; j++) {
    const btn = navButtons[j];
    const viewAttr = btn.getAttribute("data-view");
    if (viewAttr === targetViewId) {
      btn.classList.add("active");
      btn.setAttribute("aria-current", "page");
    } else {
      btn.classList.remove("active");
      btn.removeAttribute("aria-current");
    }
  }

  // Scroll to top of main area smoothly
  window.scrollTo({ top: 0, behavior: "smooth" });

  // If entering calculator or booking view, refresh calculations
  if (targetViewId === "calculator-view" || targetViewId === "booking-view") {
    renderRigTable();
    updateCalculationsAndQuote();
  }

  // If entering dashboard view, refresh dashboard
  if (targetViewId === "dashboard-view") {
    renderDashboard();
  }

  // If entering return view, refresh dropdown
  if (targetViewId === "return-view") {
    populateReturnBookingDropdown();
  }
}

// ==========================================================================
// 5. EQUIPMENT CATALOG: FILTERING, SEARCHING & RENDERING
// ==========================================================================
let currentCategoryFilter = "all";
let currentSearchTerm = "";

function renderCatalog() {
  const inventory = getEquipmentInventory();
  const gridContainer = document.getElementById("equipment-grid");
  const emptyState = document.getElementById("catalog-empty-state");

  if (!gridContainer) return;

  // Clear existing cards
  gridContainer.innerHTML = "";

  // Calculate category counts using basic for loop
  let countAll = inventory.length;
  let countSpeakers = 0;
  let countMics = 0;
  let countMixers = 0;
  let countLights = 0;
  let countCables = 0;

  for (let i = 0; i < inventory.length; i++) {
    const item = inventory[i];
    if (item.category === "speakers") countSpeakers++;
    else if (item.category === "mics") countMics++;
    else if (item.category === "mixers") countMixers++;
    else if (item.category === "lights") countLights++;
    else if (item.category === "cables") countCables++;
  }

  // Update category badge counters in the UI
  const elCountAll = document.getElementById("cat-count-all");
  const elCountSpk = document.getElementById("cat-count-speakers");
  const elCountMic = document.getElementById("cat-count-mics");
  const elCountMix = document.getElementById("cat-count-mixers");
  const elCountLgt = document.getElementById("cat-count-lights");
  const elCountCbl = document.getElementById("cat-count-cables");

  if (elCountAll) elCountAll.textContent = countAll;
  if (elCountSpk) elCountSpk.textContent = countSpeakers;
  if (elCountMic) elCountMic.textContent = countMics;
  if (elCountMix) elCountMix.textContent = countMixers;
  if (elCountLgt) elCountLgt.textContent = countLights;
  if (elCountCbl) elCountCbl.textContent = countCables;

  // Filter items using simple for loop
  const filteredItems = [];
  const query = currentSearchTerm.trim().toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    const item = inventory[i];
    
    // Category check
    let categoryMatches = false;
    if (currentCategoryFilter === "all" || item.category === currentCategoryFilter) {
      categoryMatches = true;
    }

    // Search query check (name, wattage, specs, description)
    let searchMatches = false;
    if (query === "") {
      searchMatches = true;
    } else {
      const nameText = item.name.toLowerCase();
      const specText = item.wattageSpec.toLowerCase();
      const descText = item.description.toLowerCase();
      if (nameText.includes(query) || specText.includes(query) || descText.includes(query)) {
        searchMatches = true;
      }
    }

    if (categoryMatches && searchMatches) {
      filteredItems.push(item);
    }
  }

  // Handle empty state
  if (filteredItems.length === 0) {
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  } else {
    if (emptyState) emptyState.classList.add("hidden");
  }

  // Render cards for each filtered item
  for (let i = 0; i < filteredItems.length; i++) {
    const gear = filteredItems[i];

    // Determine stock status pill
    let stockClass = "stock-in";
    let stockText = "In Stock: " + gear.stock + " Units";
    if (gear.stock === 0) {
      stockClass = "stock-out";
      stockText = "Out of Stock";
    } else if (gear.stock <= 2) {
      stockClass = "stock-low";
      stockText = "Only " + gear.stock + " Left!";
    }

    // Category display label
    let categoryLabel = gear.category.toUpperCase();
    if (gear.category === "speakers") categoryLabel = "🔊 PA Speakers";
    if (gear.category === "mics") categoryLabel = "🎙️ Wireless Mic";
    if (gear.category === "mixers") categoryLabel = "🎚️ DJ / Mixer";
    if (gear.category === "lights") categoryLabel = "💡 Stage Light";
    if (gear.category === "cables") categoryLabel = "🔌 Cable & Snake";

    // Card element
    const card = document.createElement("article");
    card.className = "gear-card";
    card.setAttribute("data-gear-id", gear.id);

    card.innerHTML = `
      <div>
        <div class="gear-card-header">
          <span class="gear-category-badge">${categoryLabel}</span>
          <span class="stock-badge ${stockClass}">${stockText}</span>
        </div>
        <h3 class="gear-title">${gear.name}</h3>
        <p class="gear-specs"><strong>Specs:</strong> ${gear.wattageSpec}</p>
        <p class="gear-specs" style="font-size:0.82rem; margin-top:-0.5rem; color:#78716c;">${gear.description}</p>
      </div>

      <div>
        <div class="gear-pricing-box">
          <div>
            <span class="gear-rate-label">Daily Rental Rate:</span>
            <span class="gear-rate">₹${gear.dailyRate.toLocaleString("en-IN")}</span>
            <small style="color:#78716c;">/ day</small>
          </div>
          <div class="gear-deposit">
            <span>Refundable Deposit</span>
            ₹${gear.securityDeposit.toLocaleString("en-IN")}
          </div>
        </div>

        <div class="gear-card-actions">
          <div class="gear-qty-wrapper">
            <button type="button" class="gear-qty-btn btn-qty-minus" aria-label="Decrease quantity" ${gear.stock === 0 ? "disabled" : ""}>-</button>
            <input 
              type="number" 
              class="gear-qty-input" 
              value="${gear.stock > 0 ? "1" : "0"}" 
              min="1" 
              max="${gear.stock}" 
              aria-label="Quantity for ${gear.name}"
              ${gear.stock === 0 ? "disabled" : ""}
            >
            <button type="button" class="gear-qty-btn btn-qty-plus" aria-label="Increase quantity" ${gear.stock === 0 ? "disabled" : ""}>+</button>
          </div>

          <button 
            type="button" 
            class="btn btn-primary btn-add-rig" 
            ${gear.stock === 0 ? "disabled style='opacity:0.5; cursor:not-allowed;'" : ""}
          >
            ${gear.stock === 0 ? "Out of Stock" : "➕ Add to Rig"}
          </button>
        </div>
      </div>
    `;

    // Quantity Plus/Minus Event Listeners
    const qtyInput = card.querySelector(".gear-qty-input");
    const btnMinus = card.querySelector(".btn-qty-minus");
    const btnPlus = card.querySelector(".btn-qty-plus");
    const btnAdd = card.querySelector(".btn-add-rig");

    if (btnMinus && qtyInput) {
      btnMinus.addEventListener("click", function () {
        let val = parseInt(qtyInput.value, 10) || 1;
        if (val > 1) {
          qtyInput.value = val - 1;
        }
      });
    }

    if (btnPlus && qtyInput) {
      btnPlus.addEventListener("click", function () {
        let val = parseInt(qtyInput.value, 10) || 1;
        if (val < gear.stock) {
          qtyInput.value = val + 1;
        }
      });
    }

    if (btnAdd && qtyInput) {
      btnAdd.addEventListener("click", function () {
        const qtyToAdd = parseInt(qtyInput.value, 10) || 1;
        addItemToRig(gear.id, qtyToAdd);
      });
    }

    gridContainer.appendChild(card);
  }
}

// ==========================================================================
// 6. RENTAL RIG MANAGEMENT (Add, Remove, Update & Header Badge Sync)
// ==========================================================================

// Add equipment item into rig
function addItemToRig(gearId, quantity) {
  const inventory = getEquipmentInventory();
  let targetGear = null;

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === gearId) {
      targetGear = inventory[i];
      break;
    }
  }

  if (!targetGear) {
    showToast("Gear not found in catalog.", "error");
    return;
  }

  if (targetGear.stock < quantity) {
    showToast("Sorry, only " + targetGear.stock + " units available in inventory.", "error");
    return;
  }

  const rig = getRigItems();
  let existingRigIndex = -1;

  for (let i = 0; i < rig.length; i++) {
    if (rig[i].equipmentId === gearId) {
      existingRigIndex = i;
      break;
    }
  }

  if (existingRigIndex !== -1) {
    // Check if adding more exceeds stock
    const newQty = rig[existingRigIndex].quantity + quantity;
    if (newQty > targetGear.stock) {
      showToast("Cannot add more than the total stock of " + targetGear.stock + " units.", "error");
      return;
    }
    rig[existingRigIndex].quantity = newQty;
  } else {
    // Add new item into rig array
    rig.push({
      equipmentId: targetGear.id,
      name: targetGear.name,
      category: targetGear.category,
      dailyRate: targetGear.dailyRate,
      securityDeposit: targetGear.securityDeposit,
      quantity: quantity
    });
  }

  saveRigItems(rig);
  updateHeaderRigBadge();
  renderRigTable();
  updateCalculationsAndQuote();

  showToast(`Added ${quantity}x "${targetGear.name}" to your Rig!`, "success");
}

// Remove item from rig
function removeItemFromRig(gearId) {
  const rig = getRigItems();
  const updatedRig = [];

  for (let i = 0; i < rig.length; i++) {
    if (rig[i].equipmentId !== gearId) {
      updatedRig.push(rig[i]);
    }
  }

  saveRigItems(updatedRig);
  updateHeaderRigBadge();
  renderRigTable();
  updateCalculationsAndQuote();

  showToast("Item removed from your rental rig.", "info");
}

// Clear all items in rig
function clearRig() {
  const rig = getRigItems();
  if (rig.length === 0) return;

  if (confirm("Are you sure you want to clear all equipment from your rental rig?")) {
    saveRigItems([]);
    updateHeaderRigBadge();
    renderRigTable();
    updateCalculationsAndQuote();
    showToast("Rental rig cleared.", "info");
  }
}

// Update header counter and deposit pill
function updateHeaderRigBadge() {
  const rig = getRigItems();
  let totalUnits = 0;
  let totalDeposit = 0;

  for (let i = 0; i < rig.length; i++) {
    totalUnits += rig[i].quantity;
    totalDeposit += (rig[i].securityDeposit * rig[i].quantity);
  }

  const elRigCount = document.getElementById("header-rig-count");
  const elDepositTotal = document.getElementById("header-deposit-total");
  const elBannerBadges = document.querySelectorAll(".rig-total-items-badge");

  if (elRigCount) {
    elRigCount.textContent = totalUnits === 1 ? "1 Item" : totalUnits + " Items";
  }
  if (elDepositTotal) {
    elDepositTotal.textContent = totalDeposit.toLocaleString("en-IN");
  }
  for (let j = 0; j < elBannerBadges.length; j++) {
    elBannerBadges[j].textContent = totalUnits;
  }
}

// Render Itemized Rig Table in Module 2
function renderRigTable() {
  const rig = getRigItems();
  const tbody = document.getElementById("rig-table-body");
  const emptyAlert = document.getElementById("rig-empty-alert");
  const tableElement = document.getElementById("rig-table");

  if (!tbody) return;
  tbody.innerHTML = "";

  if (rig.length === 0) {
    if (emptyAlert) emptyAlert.classList.remove("hidden");
    if (tableElement) tableElement.classList.add("hidden");
    return;
  } else {
    if (emptyAlert) emptyAlert.classList.add("hidden");
    if (tableElement) tableElement.classList.remove("hidden");
  }

  for (let i = 0; i < rig.length; i++) {
    const item = rig[i];
    const rowDailyTotal = item.dailyRate * item.quantity;
    const rowDepositTotal = item.securityDeposit * item.quantity;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <strong>${item.name}</strong><br>
        <small style="color:#78716c;">₹${item.dailyRate.toLocaleString("en-IN")} / day</small>
      </td>
      <td>₹${item.dailyRate.toLocaleString("en-IN")}</td>
      <td>
        <strong>${item.quantity}</strong>
      </td>
      <td><strong>₹${rowDailyTotal.toLocaleString("en-IN")}</strong></td>
      <td style="color:#0f766e; font-weight:600;">₹${rowDepositTotal.toLocaleString("en-IN")}</td>
      <td>
        <button type="button" class="btn btn-outline btn-sm text-danger btn-remove-row" data-id="${item.equipmentId}" title="Remove item">
          ✕ Remove
        </button>
      </td>
    `;

    const removeBtn = tr.querySelector(".btn-remove-row");
    if (removeBtn) {
      removeBtn.addEventListener("click", function () {
        removeItemFromRig(item.equipmentId);
      });
    }

    tbody.appendChild(tr);
  }
}

// ==========================================================================
// 7. DAILY RENTAL RATE CALCULATOR & DEPOSIT FINANCIAL BREAKDOWN
// ==========================================================================
function updateCalculationsAndQuote() {
  const rig = getRigItems();
  const calcSettings = getCalculatorSettings();

  // 1. Calculate base daily equipment rate & base refundable deposit
  let totalUnits = 0;
  let baseDailyTotal = 0;
  let totalSecurityDeposit = 0;

  for (let i = 0; i < rig.length; i++) {
    totalUnits += rig[i].quantity;
    baseDailyTotal += (rig[i].dailyRate * rig[i].quantity);
    totalSecurityDeposit += (rig[i].securityDeposit * rig[i].quantity);
  }

  // 2. Determine rental days and multi-day discount rate
  let rentalDays = 1;
  let discountPercentage = 0;
  let durationLabel = "1-Day Event";

  if (calcSettings.plan === "1") {
    rentalDays = 1;
    discountPercentage = 0;
    durationLabel = "1-Day Event";
  } else if (calcSettings.plan === "3") {
    rentalDays = 3;
    discountPercentage = 15; // 15% off for 3-Day Weekend Festival
    durationLabel = "3-Day Weekend Festival (15% Off)";
  } else if (calcSettings.plan === "custom") {
    rentalDays = parseInt(calcSettings.customDays, 10) || 1;
    if (rentalDays < 1) rentalDays = 1;
    if (rentalDays > 14) rentalDays = 14;
    // 10% discount for custom bookings of 3 or more days
    if (rentalDays >= 3) {
      discountPercentage = 10;
      durationLabel = `${rentalDays} Days Custom (10% Off)`;
    } else {
      discountPercentage = 0;
      durationLabel = `${rentalDays} Day Custom`;
    }
  }

  // 3. Compute Gross Equipment Rental
  const grossRental = baseDailyTotal * rentalDays;

  // 4. Compute Discount Amount
  const discountAmount = Math.round((grossRental * discountPercentage) / 100);

  // 5. Sound Technician Fee (₹1,500 per day if toggled)
  let technicianFee = 0;
  if (calcSettings.hasTechnician) {
    technicianFee = 1500 * rentalDays;
  }

  // 6. Net Rental (Equipment minus discount plus technician fee)
  const netRental = (grossRental - discountAmount) + technicianFee;

  // 7. Grand Total Payable at Pickup (Net Rental + Refundable Security Deposit)
  const grandTotal = netRental + totalSecurityDeposit;

  // 8. Update Calculator Quote Card DOM Elements
  const elQty = document.getElementById("quote-total-qty");
  const elDuration = document.getElementById("quote-duration-display");
  const elDailyBase = document.getElementById("quote-daily-base");
  const elGross = document.getElementById("quote-gross-rental");
  const elDiscount = document.getElementById("quote-discount");
  const elTechFee = document.getElementById("quote-technician-fee");
  const elNet = document.getElementById("quote-net-rental");
  const elDeposit = document.getElementById("quote-security-deposit");
  const elGrand = document.getElementById("quote-grand-total");

  if (elQty) elQty.textContent = totalUnits;
  if (elDuration) elDuration.textContent = durationLabel;
  if (elDailyBase) elDailyBase.textContent = baseDailyTotal.toLocaleString("en-IN");
  if (elGross) elGross.textContent = grossRental.toLocaleString("en-IN");
  if (elDiscount) elDiscount.textContent = discountAmount.toLocaleString("en-IN");
  if (elTechFee) elTechFee.textContent = technicianFee.toLocaleString("en-IN");
  if (elNet) elNet.textContent = netRental.toLocaleString("en-IN");
  if (elDeposit) elDeposit.textContent = totalSecurityDeposit.toLocaleString("en-IN");
  if (elGrand) elGrand.textContent = grandTotal.toLocaleString("en-IN");

  // 9. Update Reservation Preview Sidebar in Module 3 (Booking View)
  renderBookingPreview(rig, durationLabel, calcSettings.hasTechnician, netRental, totalSecurityDeposit, grandTotal);

  // Return calculation result object for booking creation
  return {
    totalUnits: totalUnits,
    rentalDays: rentalDays,
    durationLabel: durationLabel,
    baseDailyTotal: baseDailyTotal,
    grossRental: grossRental,
    discountAmount: discountAmount,
    technicianFee: technicianFee,
    netRental: netRental,
    securityDeposit: totalSecurityDeposit,
    grandTotal: grandTotal
  };
}

// Render the right-side summary card in Booking Form View
function renderBookingPreview(rig, durationLabel, hasTech, netRental, deposit, grandTotal) {
  const previewList = document.getElementById("preview-items-list");
  const previewDuration = document.getElementById("preview-duration");
  const previewTech = document.getElementById("preview-tech");
  const previewNet = document.getElementById("preview-net");
  const previewDeposit = document.getElementById("preview-deposit");
  const previewGrand = document.getElementById("preview-grand");

  if (previewDuration) previewDuration.textContent = durationLabel;
  if (previewTech) previewTech.textContent = hasTech ? "Yes (₹1,500/day)" : "No";
  if (previewNet) previewNet.textContent = netRental.toLocaleString("en-IN");
  if (previewDeposit) previewDeposit.textContent = deposit.toLocaleString("en-IN");
  if (previewGrand) previewGrand.textContent = grandTotal.toLocaleString("en-IN");

  if (!previewList) return;
  previewList.innerHTML = "";

  if (rig.length === 0) {
    const li = document.createElement("li");
    li.innerHTML = `<em>No gear selected. Please add equipment from the catalog.</em>`;
    previewList.appendChild(li);
    return;
  }

  for (let i = 0; i < rig.length; i++) {
    const item = rig[i];
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.quantity}× ${item.name}</span>
      <strong>₹${(item.dailyRate * item.quantity).toLocaleString("en-IN")}</strong>
    `;
    previewList.appendChild(li);
  }
}

// ==========================================================================
// 8. EQUIPMENT BOOKING FORM: VALIDATION & ORDER CONFIRMATION
// ==========================================================================
function handleBookingSubmit(event) {
  event.preventDefault();

  const rig = getRigItems();
  if (rig.length === 0) {
    showToast("Cannot book an empty rig! Please add gear from the catalog first.", "error");
    switchView("catalog-view");
    return;
  }

  // Get Form Fields
  const form = document.getElementById("booking-form");
  const inputOrganizer = document.getElementById("organizer-name");
  const inputPhone = document.getElementById("contact-phone");
  const inputDate = document.getElementById("event-date");
  const selectVenue = document.getElementById("venue-type");
  const inputPurpose = document.getElementById("event-purpose");
  const textareaAddress = document.getElementById("venue-address");
  const checkTerms = document.getElementById("agree-terms");

  // Reset visual error states
  const errorElements = document.querySelectorAll(".field-error");
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].classList.remove("show");
  }

  let isValid = true;

  // Validate Organizer Name (min 3 chars)
  if (!inputOrganizer.value || inputOrganizer.value.trim().length < 3) {
    document.getElementById("error-organizer-name").classList.add("show");
    isValid = false;
  }

  // Validate Indian Phone Number (10 digits starting with 6-9)
  const phoneVal = inputPhone.value.trim();
  const phonePattern = /^[6-9][0-9]{9}$/;
  if (!phonePattern.test(phoneVal)) {
    document.getElementById("error-contact-phone").classList.add("show");
    isValid = false;
  }

  // Validate Event Date (not empty and not in the past)
  if (!inputDate.value) {
    document.getElementById("error-event-date").classList.add("show");
    isValid = false;
  } else {
    const selectedDate = new Date(inputDate.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      document.getElementById("error-event-date").classList.add("show");
      isValid = false;
    }
  }

  // Validate Venue Type
  if (!selectVenue.value) {
    document.getElementById("error-venue-type").classList.add("show");
    isValid = false;
  }

  // Validate Purpose
  if (!inputPurpose.value || inputPurpose.value.trim().length < 3) {
    document.getElementById("error-event-purpose").classList.add("show");
    isValid = false;
  }

  // Validate Address Notes
  if (!textareaAddress.value || textareaAddress.value.trim().length < 10) {
    document.getElementById("error-venue-address").classList.add("show");
    isValid = false;
  }

  // Validate Terms Agreement
  if (!checkTerms.checked) {
    document.getElementById("error-agree-terms").classList.add("show");
    isValid = false;
  }

  if (!isValid) {
    showToast("Please correct the highlighted form errors before confirming.", "error");
    return;
  }

  // Generate Unique Booking ID: DHW-2026-XXXX
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const bookingId = "DHW-2026-" + randomSuffix;

  // Get current quote calculations
  const quote = updateCalculationsAndQuote();

  // Deduct Inventory Stock in localStorage Catalog
  const inventory = getEquipmentInventory();
  for (let i = 0; i < rig.length; i++) {
    const rigItem = rig[i];
    for (let j = 0; j < inventory.length; j++) {
      if (inventory[j].id === rigItem.equipmentId) {
        inventory[j].stock = Math.max(0, inventory[j].stock - rigItem.quantity);
        break;
      }
    }
  }
  saveEquipmentInventory(inventory);

  // Initialize Default Checklist Audit for Module 5
  const checklistAudit = [];
  for (let i = 0; i < rig.length; i++) {
    const rigItem = rig[i];
    // Create an individual checklist entry for each rented unit
    for (let u = 1; u <= rigItem.quantity; u++) {
      checklistAudit.push({
        gearId: rigItem.equipmentId,
        gearName: rigItem.name + ` (Unit ${u} of ${rigItem.quantity})`,
        pickupVerified: true,
        returnVerified: false,
        condition: "Intact",
        itemDeposit: rigItem.securityDeposit,
        deduction: 0
      });
    }
  }

  // Create Booking Object
  const newBooking = {
    id: bookingId,
    organizerName: inputOrganizer.value.trim(),
    contactPhone: phoneVal,
    eventDate: inputDate.value,
    venueType: selectVenue.value,
    eventPurpose: inputPurpose.value.trim(),
    venueAddress: textareaAddress.value.trim(),
    durationDays: quote.rentalDays,
    durationLabel: quote.durationLabel,
    hasTechnician: getCalculatorSettings().hasTechnician,
    items: rig,
    baseDailyTotal: quote.baseDailyTotal,
    grossRental: quote.grossRental,
    discountAmount: quote.discountAmount,
    technicianFee: quote.technicianFee,
    netRental: quote.netRental,
    securityDeposit: quote.securityDeposit,
    grandTotal: quote.grandTotal,
    status: "Active / Out on Gig",
    checklistAudit: checklistAudit,
    inspectorName: "Rajesh Sharma (Chief Sound Engineer)",
    inspectorRemarks: "All cables tested at pre-event dispatch. 15A socket recommended on-site.",
    netRefund: quote.securityDeposit,
    totalDeductions: 0,
    createdAt: new Date().toISOString()
  };

  // Save Booking to Bookings List in localStorage
  const bookings = getBookings();
  bookings.push(newBooking);
  saveBookings(bookings);

  // Reset Rig (it has now been checked out)
  saveRigItems([]);
  updateHeaderRigBadge();
  renderRigTable();
  updateCalculationsAndQuote();

  // Reset Form
  form.reset();

  // Re-render Catalog to show updated stock
  renderCatalog();

  // Show Success Toast
  showToast(`Booking ${bookingId} confirmed successfully! Rig dispatched.`, "success");

  // Switch to Dashboard View to view active booking
  switchView("dashboard-view");
}

// ==========================================================================
// 9. ACTIVE BOOKINGS DASHBOARD: STATS, FILTERING & RESTOCK CANCELLATION
// ==========================================================================
let dashboardFilterStatus = "all";
let dashboardSearchTerm = "";

function renderDashboard() {
  const bookings = getBookings();
  const cardsContainer = document.getElementById("bookings-cards-container");
  const emptyState = document.getElementById("bookings-empty-state");

  // Update Nav Counter
  const navBookingsCount = document.getElementById("nav-bookings-count");
  if (navBookingsCount) {
    navBookingsCount.textContent = bookings.length;
  }

  // Compute Dashboard Operational KPI Stat Cards
  let totalBookings = bookings.length;
  let activeGigs = 0;
  let depositsHeld = 0;
  let settledBookings = 0;

  for (let i = 0; i < bookings.length; i++) {
    const b = bookings[i];
    if (b.status === "Active / Out on Gig") {
      activeGigs++;
      depositsHeld += b.securityDeposit;
    } else if (b.status === "Pending Gear Inspection") {
      depositsHeld += b.securityDeposit;
    } else if (b.status === "Settled & Refund Cleared" || b.status === "Deduction Applied") {
      settledBookings++;
    }
  }

  // Update Stat Card DOM Elements
  const elStatTotal = document.getElementById("stat-total-bookings");
  const elStatActive = document.getElementById("stat-active-gigs");
  const elStatDeposits = document.getElementById("stat-deposits-held");
  const elStatSettled = document.getElementById("stat-settled-bookings");

  if (elStatTotal) elStatTotal.textContent = totalBookings;
  if (elStatActive) elStatActive.textContent = activeGigs;
  if (elStatDeposits) elStatDeposits.textContent = depositsHeld.toLocaleString("en-IN");
  if (elStatSettled) elStatSettled.textContent = settledBookings;

  if (!cardsContainer) return;
  cardsContainer.innerHTML = "";

  // If no bookings exist at all
  if (bookings.length === 0) {
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  } else {
    if (emptyState) emptyState.classList.add("hidden");
  }

  // Filter Bookings using standard for loop
  const filteredBookings = [];
  const searchQuery = dashboardSearchTerm.trim().toLowerCase();

  for (let i = 0; i < bookings.length; i++) {
    const b = bookings[i];

    // Status filter match
    let statusMatches = false;
    if (dashboardFilterStatus === "all" || b.status === dashboardFilterStatus) {
      statusMatches = true;
    }

    // Search text match (ID, organizer, phone)
    let searchMatches = false;
    if (searchQuery === "") {
      searchMatches = true;
    } else {
      const idMatch = b.id.toLowerCase().includes(searchQuery);
      const nameMatch = b.organizerName.toLowerCase().includes(searchQuery);
      const phoneMatch = b.contactPhone.toLowerCase().includes(searchQuery);
      if (idMatch || nameMatch || phoneMatch) {
        searchMatches = true;
      }
    }

    if (statusMatches && searchMatches) {
      filteredBookings.push(b);
    }
  }

  // Render cards for each booking
  for (let i = 0; i < filteredBookings.length; i++) {
    const b = filteredBookings[i];

    // Status pill style class
    let pillClass = "status-active";
    if (b.status === "Pending Gear Inspection") pillClass = "status-inspection";
    if (b.status === "Settled & Refund Cleared") pillClass = "status-settled";
    if (b.status === "Deduction Applied") pillClass = "status-deducted";
    if (b.status === "Cancelled & Restocked") pillClass = "status-cancelled";

    // Item summary text
    const itemNames = [];
    for (let k = 0; k < b.items.length; k++) {
      itemNames.push(`${b.items[k].quantity}× ${b.items[k].name}`);
    }
    const gearListText = itemNames.join(", ");

    const card = document.createElement("article");
    card.className = "booking-card";
    card.innerHTML = `
      <div>
        <div class="booking-card-top">
          <span class="booking-id-stamp">${b.id}</span>
          <span class="status-pill ${pillClass}">${b.status}</span>
        </div>

        <h3 class="booking-organizer">${b.organizerName}</h3>
        <p class="booking-meta-text">
          📅 <strong>${b.eventDate}</strong> (${b.durationLabel})<br>
          🏛️ ${b.venueType} &bull; 📱 ${b.contactPhone}<br>
          🎉 <em>Purpose:</em> ${b.eventPurpose}
        </p>

        <div class="booking-gear-summary">
          <strong>Rented Gear (${b.items.length} types):</strong><br>
          <span>${gearListText}</span>
        </div>

        <div class="booking-card-financials">
          <div>
            <span style="color:#78716c; font-size:0.8rem; display:block;">Net Rental:</span>
            <strong>₹${b.netRental.toLocaleString("en-IN")}</strong>
          </div>
          <div>
            <span style="color:#0f766e; font-size:0.8rem; display:block;">Deposit Held:</span>
            <strong style="color:#0f766e;">₹${b.securityDeposit.toLocaleString("en-IN")}</strong>
          </div>
          <div style="text-align:right;">
            <span style="color:#78716c; font-size:0.8rem; display:block;">Total Paid:</span>
            <strong style="color:#b91c1c;">₹${b.grandTotal.toLocaleString("en-IN")}</strong>
          </div>
        </div>
      </div>

      <div class="booking-card-actions">
        <button type="button" class="btn btn-secondary btn-sm btn-inspect-booking" data-id="${b.id}">
          🔍 Inspect &amp; Settle Return
        </button>

        ${b.status === "Active / Out on Gig" ? `
          <button type="button" class="btn btn-outline btn-sm text-danger btn-cancel-booking" data-id="${b.id}">
            Cancel &amp; Restock
          </button>
        ` : ""}
      </div>
    `;

    // Action button listeners
    const btnInspect = card.querySelector(".btn-inspect-booking");
    if (btnInspect) {
      btnInspect.addEventListener("click", function () {
        switchView("return-view");
        loadBookingIntoReturnModule(b.id);
      });
    }

    const btnCancel = card.querySelector(".btn-cancel-booking");
    if (btnCancel) {
      btnCancel.addEventListener("click", function () {
        handleCancelAndRestock(b.id);
      });
    }

    cardsContainer.appendChild(card);
  }
}

// Cancel Booking and Restock Equipment into Catalog
function handleCancelAndRestock(bookingId) {
  if (!confirm(`Are you sure you want to cancel booking ${bookingId} and restock its gear back to the warehouse?`)) {
    return;
  }

  const bookings = getBookings();
  let targetBooking = null;

  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].id === bookingId) {
      targetBooking = bookings[i];
      break;
    }
  }

  if (!targetBooking) return;

  // Restock inventory in catalog
  const inventory = getEquipmentInventory();
  for (let i = 0; i < targetBooking.items.length; i++) {
    const item = targetBooking.items[i];
    for (let j = 0; j < inventory.length; j++) {
      if (inventory[j].id === item.equipmentId) {
        inventory[j].stock += item.quantity;
        break;
      }
    }
  }
  saveEquipmentInventory(inventory);

  // Update booking status
  targetBooking.status = "Cancelled & Restocked";
  saveBookings(bookings);

  // Refresh views
  renderCatalog();
  renderDashboard();
  showToast(`Booking ${bookingId} cancelled and all items restocked to catalog inventory.`, "info");
}

// ==========================================================================
// 10. DISPUTE-FREE RETURN CHECKLIST & SECURITY DEPOSIT SETTLEMENT
// ==========================================================================
let currentActiveInspectionBookingId = null;

// Populate dropdown in Return module
function populateReturnBookingDropdown() {
  const select = document.getElementById("return-booking-select");
  if (!select) return;

  const bookings = getBookings();
  select.innerHTML = `<option value="">-- Choose a Booking from Dashboard --</option>`;

  for (let i = 0; i < bookings.length; i++) {
    const b = bookings[i];
    const opt = document.createElement("option");
    opt.value = b.id;
    opt.textContent = `${b.id} — ${b.organizerName} (${b.status})`;
    select.appendChild(opt);
  }

  if (currentActiveInspectionBookingId) {
    select.value = currentActiveInspectionBookingId;
  }
}

// Load a specific booking into Return Module
function loadBookingIntoReturnModule(bookingId) {
  currentActiveInspectionBookingId = bookingId;
  populateReturnBookingDropdown();

  const detailsContainer = document.getElementById("return-details-container");
  const noSelectionContainer = document.getElementById("return-no-selection");

  if (!bookingId) {
    if (detailsContainer) detailsContainer.classList.add("hidden");
    if (noSelectionContainer) noSelectionContainer.classList.remove("hidden");
    return;
  }

  const bookings = getBookings();
  let booking = null;

  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].id === bookingId) {
      booking = bookings[i];
      break;
    }
  }

  if (!booking) return;

  if (detailsContainer) detailsContainer.classList.remove("hidden");
  if (noSelectionContainer) noSelectionContainer.classList.add("hidden");

  // Populate Meta Info Card
  document.getElementById("return-voucher-id").textContent = booking.id;
  document.getElementById("return-organizer-display").textContent = booking.organizerName;
  document.getElementById("return-phone-display").textContent = "📱 " + booking.contactPhone;
  document.getElementById("return-venue-display").textContent = "🏛️ " + booking.venueType;
  document.getElementById("return-date-display").textContent = "📅 Event Date: " + booking.eventDate;
  document.getElementById("return-address-display").textContent = booking.venueAddress;
  document.getElementById("return-current-status-badge").textContent = booking.status;

  // Populate Inspector input and notes
  const techInput = document.getElementById("inspector-technician-name");
  const remarksTextarea = document.getElementById("inspector-remarks");
  if (techInput) techInput.value = booking.inspectorName || "Rajesh Sharma (Chief Sound Engineer)";
  if (remarksTextarea) remarksTextarea.value = booking.inspectorRemarks || "";

  // Render Checklist Table
  renderChecklistRows(booking);
  recomputeSettlement(booking);
}

// Render Itemized Checklist Rows
function renderChecklistRows(booking) {
  const tbody = document.getElementById("checklist-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  const checklist = booking.checklistAudit || [];

  for (let i = 0; i < checklist.length; i++) {
    const item = checklist[i];
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>
        <strong>${item.gearName}</strong>
      </td>
      <td class="text-center">
        <input 
          type="checkbox" 
          class="checklist-checkbox chk-pickup" 
          data-index="${i}" 
          ${item.pickupVerified ? "checked" : ""}
          aria-label="Pickup handover verified for ${item.gearName}"
        >
      </td>
      <td class="text-center">
        <input 
          type="checkbox" 
          class="checklist-checkbox chk-return" 
          data-index="${i}" 
          ${item.returnVerified ? "checked" : ""}
          aria-label="Post-event return verified for ${item.gearName}"
        >
      </td>
      <td>
        <select class="condition-select form-control select-compact sel-condition" data-index="${i}">
          <option value="Intact" ${item.condition === "Intact" ? "selected" : ""}>Intact - No Damage (0% deduction)</option>
          <option value="Minor Wear" ${item.condition === "Minor Wear" ? "selected" : ""}>Minor Wear / Scratches (20% deduction)</option>
          <option value="Damaged or Missing" ${item.condition === "Damaged or Missing" ? "selected" : ""}>Damaged or Missing (100% deduction)</option>
        </select>
      </td>
      <td style="color:#0f766e; font-weight:600;">
        ₹${item.itemDeposit.toLocaleString("en-IN")}
      </td>
      <td class="text-danger" style="font-weight:700;">
        ₹<span class="row-deduction-val">${item.deduction.toLocaleString("en-IN")}</span>
      </td>
    `;

    // Event listeners on checklist row inputs
    const chkPickup = tr.querySelector(".chk-pickup");
    const chkReturn = tr.querySelector(".chk-return");
    const selCondition = tr.querySelector(".sel-condition");

    if (chkPickup) {
      chkPickup.addEventListener("change", function () {
        item.pickupVerified = chkPickup.checked;
        recomputeSettlement(booking);
      });
    }

    if (chkReturn) {
      chkReturn.addEventListener("change", function () {
        item.returnVerified = chkReturn.checked;
        recomputeSettlement(booking);
      });
    }

    if (selCondition) {
      selCondition.addEventListener("change", function () {
        item.condition = selCondition.value;
        
        // Calculate deduction based on condition
        if (item.condition === "Intact") {
          item.deduction = 0;
        } else if (item.condition === "Minor Wear") {
          item.deduction = Math.round(item.itemDeposit * 0.20);
        } else if (item.condition === "Damaged or Missing") {
          item.deduction = item.itemDeposit;
        }

        const dedSpan = tr.querySelector(".row-deduction-val");
        if (dedSpan) dedSpan.textContent = item.deduction.toLocaleString("en-IN");

        recomputeSettlement(booking);
      });
    }

    tbody.appendChild(tr);
  }
}

// Recompute settlement totals and refund
function recomputeSettlement(booking) {
  const checklist = booking.checklistAudit || [];
  let totalDeductions = 0;
  let allReturned = true;

  for (let i = 0; i < checklist.length; i++) {
    totalDeductions += checklist[i].deduction;
    if (!checklist[i].returnVerified) {
      allReturned = false;
    }
  }

  const originalDeposit = booking.securityDeposit;
  const netRefund = Math.max(0, originalDeposit - totalDeductions);

  // Update Settlement Card DOM
  document.getElementById("settle-original-deposit").textContent = originalDeposit.toLocaleString("en-IN");
  document.getElementById("settle-total-deduction").textContent = totalDeductions.toLocaleString("en-IN");
  document.getElementById("settle-net-refund").textContent = netRefund.toLocaleString("en-IN");

  // Determine updated status string
  let statusText = "Held on Booking";
  if (!allReturned) {
    statusText = "Pending Gear Inspection";
  } else if (totalDeductions === 0) {
    statusText = "Settled & Refund Cleared";
  } else {
    statusText = "Deduction Applied";
  }

  const statusTextElem = document.getElementById("settlement-status-text");
  if (statusTextElem) {
    statusTextElem.textContent = statusText;
  }

  // Update in booking reference
  booking.totalDeductions = totalDeductions;
  booking.netRefund = netRefund;
  booking.status = statusText;
}

// Save Settlement & Finalize
function saveSettlementAudit() {
  if (!currentActiveInspectionBookingId) {
    showToast("No booking currently selected for settlement.", "error");
    return;
  }

  const bookings = getBookings();
  let bookingIndex = -1;

  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].id === currentActiveInspectionBookingId) {
      bookingIndex = i;
      break;
    }
  }

  if (bookingIndex === -1) return;

  const booking = bookings[bookingIndex];
  const techName = document.getElementById("inspector-technician-name").value.trim();
  const remarks = document.getElementById("inspector-remarks").value.trim();

  booking.inspectorName = techName || "Rajesh Sharma (Chief Sound Engineer)";
  booking.inspectorRemarks = remarks || "Checklist verified without dispute.";

  recomputeSettlement(booking);

  // Save back to localStorage
  saveBookings(bookings);

  // Update DOM badges
  document.getElementById("return-current-status-badge").textContent = booking.status;
  showToast(`Settlement for ${booking.id} saved successfully! Status: ${booking.status}`, "success");

  // Refresh dashboard and dropdown
  renderDashboard();
  populateReturnBookingDropdown();
}

// ==========================================================================
// 11. EVENT LISTENERS INITIALIZATION (DOM CONTENT LOADED)
// ==========================================================================
document.addEventListener("DOMContentLoaded", function () {
  
  // Set minimum event date on date picker to today
  const inputEventDate = document.getElementById("event-date");
  if (inputEventDate) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const todayString = `${year}-${month}-${day}`;
    inputEventDate.setAttribute("min", todayString);
    inputEventDate.value = todayString;
  }

  // 1. Navigation Button View Switching
  const navButtons = document.querySelectorAll(".nav-btn");
  for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("click", function () {
      const targetView = this.getAttribute("data-view");
      switchView(targetView);
    });
  }

  // Jump to calculator buttons in catalog banner
  const btnJumpCalc = document.getElementById("btn-jump-calc");
  if (btnJumpCalc) {
    btnJumpCalc.addEventListener("click", function () {
      switchView("calculator-view");
    });
  }

  const btnBackToCatalog = document.getElementById("btn-back-to-catalog");
  if (btnBackToCatalog) {
    btnBackToCatalog.addEventListener("click", function () {
      switchView("catalog-view");
    });
  }

  const linkGoCatalog = document.getElementById("link-go-catalog");
  if (linkGoCatalog) {
    linkGoCatalog.addEventListener("click", function () {
      switchView("catalog-view");
    });
  }

  const btnProceedToBook = document.getElementById("btn-proceed-to-book");
  if (btnProceedToBook) {
    btnProceedToBook.addEventListener("click", function () {
      const rig = getRigItems();
      if (rig.length === 0) {
        showToast("Please add at least one equipment item to your rig before reserving.", "error");
        switchView("catalog-view");
      } else {
        switchView("booking-view");
      }
    });
  }

  const btnBackToCalc = document.getElementById("btn-back-to-calc");
  if (btnBackToCalc) {
    btnBackToCalc.addEventListener("click", function () {
      switchView("calculator-view");
    });
  }

  const btnDashboardNewBooking = document.getElementById("btn-dashboard-new-booking");
  if (btnDashboardNewBooking) {
    btnDashboardNewBooking.addEventListener("click", function () {
      switchView("catalog-view");
    });
  }

  const btnCreateFirstBooking = document.getElementById("btn-create-first-booking");
  if (btnCreateFirstBooking) {
    btnCreateFirstBooking.addEventListener("click", function () {
      switchView("catalog-view");
    });
  }

  // 2. Catalog Search & Filter Tabs
  const searchInput = document.getElementById("gear-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      currentSearchTerm = this.value;
      renderCatalog();
    });
  }

  const btnClearSearch = document.getElementById("btn-clear-search");
  if (btnClearSearch && searchInput) {
    btnClearSearch.addEventListener("click", function () {
      searchInput.value = "";
      currentSearchTerm = "";
      renderCatalog();
    });
  }

  const btnResetFilters = document.getElementById("btn-reset-filters");
  if (btnResetFilters && searchInput) {
    btnResetFilters.addEventListener("click", function () {
      searchInput.value = "";
      currentSearchTerm = "";
      currentCategoryFilter = "all";

      const catTabs = document.querySelectorAll(".category-tab");
      for (let i = 0; i < catTabs.length; i++) {
        if (catTabs[i].getAttribute("data-category") === "all") {
          catTabs[i].classList.add("active");
          catTabs[i].setAttribute("aria-selected", "true");
        } else {
          catTabs[i].classList.remove("active");
          catTabs[i].setAttribute("aria-selected", "false");
        }
      }
      renderCatalog();
    });
  }

  // Category filter tabs
  const categoryTabs = document.querySelectorAll(".category-tab");
  for (let i = 0; i < categoryTabs.length; i++) {
    categoryTabs[i].addEventListener("click", function () {
      for (let j = 0; j < categoryTabs.length; j++) {
        categoryTabs[j].classList.remove("active");
        categoryTabs[j].setAttribute("aria-selected", "false");
      }
      this.classList.add("active");
      this.setAttribute("aria-selected", "true");

      currentCategoryFilter = this.getAttribute("data-category");
      renderCatalog();
    });
  }

  // 3. Calculator Duration Radios, Custom Days & Technician Checkbox
  const durationRadios = document.querySelectorAll("input[name='duration-plan']");
  const customDaysContainer = document.getElementById("custom-days-container");
  const customDaysInput = document.getElementById("custom-days-input");
  const technicianCheckbox = document.getElementById("technician-checkbox");

  // Load saved settings
  const initialSettings = getCalculatorSettings();
  if (technicianCheckbox) technicianCheckbox.checked = initialSettings.hasTechnician;
  if (customDaysInput) customDaysInput.value = initialSettings.customDays;

  for (let i = 0; i < durationRadios.length; i++) {
    if (durationRadios[i].value === initialSettings.plan) {
      durationRadios[i].checked = true;
      if (durationRadios[i].value === "custom" && customDaysContainer) {
        customDaysContainer.classList.remove("hidden");
      }
    }

    durationRadios[i].addEventListener("change", function () {
      const planVal = this.value;
      if (planVal === "custom" && customDaysContainer) {
        customDaysContainer.classList.remove("hidden");
      } else if (customDaysContainer) {
        customDaysContainer.classList.add("hidden");
      }

      const settings = getCalculatorSettings();
      settings.plan = planVal;
      saveCalculatorSettings(settings);
      updateCalculationsAndQuote();
    });
  }

  if (customDaysInput) {
    customDaysInput.addEventListener("input", function () {
      let days = parseInt(this.value, 10) || 1;
      if (days < 1) days = 1;
      if (days > 14) days = 14;

      const settings = getCalculatorSettings();
      settings.customDays = days;
      saveCalculatorSettings(settings);
      updateCalculationsAndQuote();
    });
  }

  if (technicianCheckbox) {
    technicianCheckbox.addEventListener("change", function () {
      const settings = getCalculatorSettings();
      settings.hasTechnician = this.checked;
      saveCalculatorSettings(settings);
      updateCalculationsAndQuote();
    });
  }

  // Clear Rig Button
  const btnClearRig = document.getElementById("btn-clear-rig");
  if (btnClearRig) {
    btnClearRig.addEventListener("click", clearRig);
  }

  // 4. Booking Form Submission
  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", handleBookingSubmit);
  }

  // 5. Dashboard Filters
  const filterBookingStatus = document.getElementById("filter-booking-status");
  if (filterBookingStatus) {
    filterBookingStatus.addEventListener("change", function () {
      dashboardFilterStatus = this.value;
      renderDashboard();
    });
  }

  const searchBookingInput = document.getElementById("search-booking-input");
  if (searchBookingInput) {
    searchBookingInput.addEventListener("input", function () {
      dashboardSearchTerm = this.value;
      renderDashboard();
    });
  }

  // 6. Return Module Dropdown Selection
  const returnSelect = document.getElementById("return-booking-select");
  if (returnSelect) {
    returnSelect.addEventListener("change", function () {
      loadBookingIntoReturnModule(this.value);
    });
  }

  // Save Settlement Audit Button
  const btnSaveSettlement = document.getElementById("btn-save-settlement");
  if (btnSaveSettlement) {
    btnSaveSettlement.addEventListener("click", saveSettlementAudit);
  }

  // Print Buttons (window.print())
  const btnPrintChecklist = document.getElementById("btn-print-checklist");
  if (btnPrintChecklist) {
    btnPrintChecklist.addEventListener("click", function () {
      window.print();
    });
  }

  const btnPrintVoucher = document.getElementById("btn-print-voucher");
  if (btnPrintVoucher) {
    btnPrintVoucher.addEventListener("click", function () {
      window.print();
    });
  }

  // Scroll to Top Button in Footer
  const btnScrollTop = document.getElementById("btn-scroll-top");
  if (btnScrollTop) {
    btnScrollTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Initial UI Render
  renderCatalog();
  updateHeaderRigBadge();
  renderRigTable();
  updateCalculationsAndQuote();
  renderDashboard();
  populateReturnBookingDropdown();

  // Welcome Toast
  showToast("Welcome to DhwaniStage Sound Rental System! Browse catalog to build your rig.", "info");
});
