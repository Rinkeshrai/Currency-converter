// let pa=document.querySelectorAll("p");
// console.log(pa[0].setAttribute("class","newclass"));
// let pal=document.querySelectorAll("p");
// console.dir(pal);


// let div = document.querySelectorAll("div");
// div.forEach(element => {
//     element.style.backgroundColor = "red";
// });

// let para = document.getElementById("para");
// para.remove();

// let parass = document.querySelector("p");
// let classAttribute = parass.getAttribute("class");
// console.log(classAttribute);


/*let id=divs[0].getAttribute("id");
console.log(id);
let name1=divs[1].getAttribute("name");
console.log(name1);*/

// let button = document.createElement("button");
// button.innerText = "Click Me";
// button.id = "dynamicButton";
// document.body.appendChild(button);

// let clickMeButton = document.getElementById("dynamicButton");
// clickMeButton.addEventListener("click", () => {
//     console.log("Click Me button was clicked!");
// });

// let toggleButton = document.getElementById("toggleButton");
// let isDark = false;

// toggleButton.addEventListener("click", () => {
//     document.body.style.backgroundColor = isDark ? "white" : "black";
//    // document.body.style.color = isDark ? "black" : "white";
//     isDark = !isDark;
// });
// let promise=new Promise((resolve , reject)=>{
//     console.log("Promise is created");
//     reject("Promise is resolved");
// })
// async function hello(){
// console.log("Hello, World!");
// }


// const URL="https://api.thecatapi.com/v1/images/search?limit=10";
// let promise=fetch(URL);
// console.log(promise);


const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

let currencySelect = document.getElementById("currency");
let toCurrencySelect = document.getElementById("toCurrency");
let selectCurrencyImage = document.getElementById("selectCurrencyImage");
let toCurrencyImage = document.getElementById("toCurrencyImage");

currencySelect.addEventListener("change", () => {
    let selectedCurrency = currencySelect.value;
    switch (selectedCurrency) {
        case "usd":
            selectCurrencyImage.src = "https://flagsapi.com/US/flat/64.png";
            break;
        case "inr":
            selectCurrencyImage.src = "https://flagsapi.com/IN/flat/64.png";
            break;
        case "eur":
            selectCurrencyImage.src = "https://flagsapi.com/EU/flat/64.png";
            break;
        case "aud":
            selectCurrencyImage.src = "https://flagsapi.com/AU/flat/64.png";
            break;
        default:
            selectCurrencyImage.src = "https://via.placeholder.com/64";
    }
});

toCurrencySelect.addEventListener("change", () => {
    let selectedCurrency = toCurrencySelect.value;
    switch (selectedCurrency) {
        case "usd":
            toCurrencyImage.src = "https://flagsapi.com/US/flat/64.png";
            break;
        case "inr":
            toCurrencyImage.src = "https://flagsapi.com/IN/flat/64.png";
            break;
        case "eur":
            toCurrencyImage.src = "https://flagsapi.com/EU/flat/64.png";
            break;
        case "aud":
            toCurrencyImage.src = "https://flagsapi.com/AU/flat/64.png";
            break;
        default:
            toCurrencyImage.src = "https://via.placeholder.com/64";
    }
});
