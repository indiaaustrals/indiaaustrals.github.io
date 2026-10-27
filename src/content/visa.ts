/**
 * The visa page reads everything country-specific from here.
 *
 * Every passport country needs a visa for India unless it is listed in
 * `noVisaNeeded`. To change an answer, add or remove the country there.
 *
 * Who can get an e-Visa or a visa on arrival comes from the Government of
 * India's visa portal. Refresh it with `python3 scripts/scrape-visa.py`.
 */

import portal from "./visa-portal.json";

/** The date the portal lists were last copied, plus the lists themselves. */
export const portalChecked: string = portal.checked;
export const eVisa: string[] = portal.evisa;
export const visaOnArrival: string[] = portal.visaOnArrival;

/** The "at a glance" tiles, e.g. { h: "e-Visa", p: "Most of Asia Pacific applies online ..." }. */
export const atAGlance: { h: string; p: string }[] = [];

/** Passport countries that do NOT need a visa for India. Spell them as in `countries` below. */
export const noVisaNeeded: string[] = ["Bhutan", "Nepal"];

/** The three buttons under every answer. */
export const visaLinks = [
  { label: "Indian visa portal", href: "https://indianvisaonline.gov.in/" },
  { label: "Countries that can get an e-Visa", href: "https://indianvisaonline.gov.in/evisa/tvoa.html" },
  { label: "Countries that can get a visa on arrival", href: "https://indianvisaonline.gov.in/visa/visa-on-arrival.html" },
];

/** Every passport country or territory in the drop-down (India left out). */
export const countries: string[] = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba",
  "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
  "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad",
  "Chile", "China", "Colombia", "Comoros", "Congo (Republic)", "Congo (Democratic Republic)", "Cook Islands", "Costa Rica",
  "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
  "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
  "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Grenada",
  "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland",
  "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya",
  "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
  "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
  "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
  "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
  "Nicaragua", "Niger", "Nigeria", "Niue", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
  "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
  "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
  "Samoa", "San Marino", "São Tomé and Príncipe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
  "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
  "Zimbabwe",
];
