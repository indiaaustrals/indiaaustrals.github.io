"""Re-scrape the Indian visa portal's country lists into src/content/visa-portal.json.

Run:  python3 scripts/scrape-visa.py
Fails loudly if the portal's page layout changes, instead of writing a short list.
"""
import html, json, re, subprocess, sys
from datetime import date
from pathlib import Path

EVISA = "https://indianvisaonline.gov.in/evisa/tvoa.html"
VOA = "https://indianvisaonline.gov.in/visa/visa-on-arrival.html"

# Portal spelling -> the spelling in the site's drop-down.
ALIAS = {
    "Antigua & Barbuda": "Antigua and Barbuda", "Bosnia & Herzegovina": "Bosnia and Herzegovina",
    "Cameroon Union Republic": "Cameroon", "Cote d'lvoire": "Côte d'Ivoire", "Macedonia": "North Macedonia",
    "Niger Republic": "Niger", "Republic of Korea": "South Korea", "South Korea": "South Korea",
    "Saint Christopher and Nevis": "Saint Kitts and Nevis",
    "Saint Vincent & the Grenadines": "Saint Vincent and the Grenadines", "Trinidad & Tobago": "Trinidad and Tobago",
    "UAE": "United Arab Emirates", "USA": "United States", "Vatican City-Holy See": "Vatican City",
    "Cayman Island": "Cayman Islands", "Turks & Caicos Island": "Turks and Caicos Islands", "Niue Island": "Niue",
}


def get(url):
    # curl, not urllib: the portal's TLS setup refuses Python's default handshake.
    return subprocess.run(["curl", "-sfL", "--max-time", "30", "-A", "Mozilla/5.0 (Macintosh)", url],
                          capture_output=True, check=True).stdout.decode("utf-8", "ignore")


def evisa():
    page = get(EVISA)
    modal = page[page.find('id="exampleModal-2"'):]
    modal = modal[: modal.find('id="exampleModal-3"')]
    text = html.unescape(re.sub(r"<[^>]+>", "|", modal))
    names = [c.strip() for _, c in re.findall(r"\|\s*(\d+)\.\s*\|\s*([^|]+?)\s*\|", text)]
    return sorted({ALIAS.get(n, n) for n in names})


def voa():
    text = html.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", get(VOA))))
    m = re.search(r"Nationals of (.+?) \(only for such UAE", text)
    if not m:
        sys.exit("Visa-on-arrival sentence not found — the portal page changed.")
    return sorted(ALIAS.get(n.strip(), n.strip()) for n in re.split(r",|&", m.group(1)))


ev, va = evisa(), voa()
if len(ev) < 150:
    sys.exit(f"Only {len(ev)} e-Visa countries found — the portal page changed. Nothing written.")
out = Path(__file__).resolve().parent.parent / "src/content/visa-portal.json"
out.write_text(json.dumps({"checked": date.today().isoformat(), "evisa": ev, "visaOnArrival": va}, ensure_ascii=False, indent=1) + "\n")
print(f"{len(ev)} e-Visa, {len(va)} visa-on-arrival -> {out}")
