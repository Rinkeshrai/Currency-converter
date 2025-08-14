document.addEventListener("DOMContentLoaded", () => {
  const API_BASE =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

  // Grab elements by ID to avoid nulls
  const fromCurr = document.getElementById("currency");
  const toCurr = document.getElementById("toCurrency");
  const dropdowns = [fromCurr, toCurr];
  const btn = document.querySelector("#currencyForm button[type='submit']");
  const amountInput = document.getElementById("amount");

  // Populate dropdowns with countryList keys (uppercase for flags)
  dropdowns.forEach((select) => {
    select.innerHTML = "";
    for (const code in countryList) {
      const opt = document.createElement("option");
      opt.value = code;         // keep UPPERCASE for countryList mapping
      opt.textContent = code;

      // Defaults: USD (from), INR (to)
      if (select === fromCurr && code === "USD") opt.selected = true;
      if (select === toCurr && code === "INR") opt.selected = true;

      select.appendChild(opt);
    }

    // Update flag when changed & on load
    select.addEventListener("change", () => updateFlag(select));
    updateFlag(select);
  });

  // Update the correct flag image for the given select
  function updateFlag(selectEl) {
    const currencyCode = selectEl.value; // e.g., "USD"
    const countryCode = countryList[currencyCode]; // e.g., "US"
    const imgId = selectEl === fromCurr ? "selectCurrencyImage" : "toCurrencyImage";
    const img = document.getElementById(imgId);

    if (countryCode && img) {
      img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
    }
  }

  // Convert on button click
  btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const amt = parseFloat(amountInput.value);
    if (!amt || amt <= 0) {
      alert("Please enter a valid amount!");
      return;
    }

    const from = fromCurr.value.toLowerCase(); // lowercase for API
    const to = toCurr.value.toLowerCase();

    try {
      const res = await fetch(`${API_BASE}/${from}.json`);
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();

      const rate = data[from]?.[to];
      if (!rate) throw new Error("Rate not found");

      const converted = amt * rate;

      // Show result (add <p id="result"></p> in HTML to display on page)
      const resultEl = document.getElementById("result");
      const out = `${amt} ${fromCurr.value} = ${converted.toFixed(4)} ${toCurr.value}`;
      if (resultEl) {
        resultEl.textContent = out;
      } else {
        console.log(out);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to fetch rate. Please try again.");
    }
  });
});
