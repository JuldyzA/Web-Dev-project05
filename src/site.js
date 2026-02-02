document.addEventListener("DOMContentLoaded", () => {

// Year
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// Header Search
const form = document.getElementById("header-search-form");
const input = document.getElementById("header-search");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearHighlights();

    const query = input.value.trim();
    if (!query) {
        return;
    }

    const queryLower = query.toLowerCase();
    const match = findTextNodeWithQuery(document.body, queryLower);
    if (match) {
        const index = match.nodeValue.toLowerCase().indexOf(queryLower);
        highlightAndScroll(match, index, query.length);
    }
});

function findTextNodeWithQuery(element, queryLower) {
    //Pre-order traversal of the DOM tree
    for (let node of element.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.nodeValue.toLowerCase().includes(queryLower)) {
                return node;
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const childMatch = findTextNodeWithQuery(node, queryLower);
            if (childMatch) return childMatch;
        }
    }
    return null;
}

function highlightAndScroll(textNode, index, length) {
    // Split the text node into: before + match + after
    const text = textNode.nodeValue;
    const before = text.slice(0, index);
    const match = text.slice(index, index + length);
    const after = text.slice(index + length);

    const mark = document.createElement("mark");
    mark.className = "search-highlight";
    mark.textContent = match;

    const matchedText = document.createDocumentFragment();
    if (before) {
        matchedText.appendChild(document.createTextNode(before));
    }
    matchedText.appendChild(mark);
    if (after) {
        matchedText.appendChild(document.createTextNode(after));
    }

    textNode.parentNode.replaceChild(matchedText, textNode);

    mark.scrollIntoView({
        behavior: "smooth",
        block: "center",
    });
}

function clearHighlights() {
    document.querySelectorAll("mark.search-highlight").forEach((mark) => {
        const parent = mark.parentNode;
        parent.replaceChild(document.createTextNode(mark.textContent), mark);
        // restore the DOM tree to a valid state
        parent.normalize();
    });
}
var myIndex = 0;


function carousel() {
  const slides = document.getElementsByClassName("banner-slide");
  if (!slides.length) return; // 👈 critical

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  myIndex++;
  if (myIndex > slides.length) myIndex = 1;
  slides[myIndex - 1].style.display = "block";

  setTimeout(carousel, 2000);
}
carousel();
// Science Section Toggle
const scienceHeader = document.querySelector(".science-header");
const scienceContent = document.getElementById("science-content");
const arrowIcon = document.querySelector(".arrow-icon");

if(scienceHeader && scienceContent && arrowIcon){
  scienceHeader.addEventListener("click", function() {
    scienceContent.classList.toggle("collapsed");
    arrowIcon.classList.toggle("rotated");
  });

}

// Expand Stories section when clicking Stories quick link
const storiesQuickLinks = document.querySelectorAll('a[href="#stories"]');

function expandStoriesSection() {
  // Check if the section is collapsed
  if (scienceContent && scienceContent.classList.contains("collapsed")) {
    scienceContent.classList.remove("collapsed");
    if (arrowIcon) {
      arrowIcon?.classList.remove("rotated");
    }
  }
}

storiesQuickLinks.forEach((link) => {
  link.addEventListener("click", expandStoriesSection);
});

// Hamburger Menu/ Overlay
const openBtn = document.getElementById("mobile-menu-button");
const openDesktopBtn = document.getElementById("desktop-menu-button");
const overlay = document.getElementById("nav-overlay");
const closeBtn = overlay.querySelector(".overlay-close");
const overlaySlot = document.getElementById("overlay-nav-slot");
const sourceList = document.querySelector(".nav-list");

function buildOverlayMenuOnce() {
  if (overlaySlot.childElementCount > 0) return;

  const clonedList = sourceList.cloneNode(true);
  clonedList.removeAttribute("id");
  overlaySlot.appendChild(clonedList);
}

function openMenu() {
  buildOverlayMenuOnce();

  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  openBtn.setAttribute("aria-expanded", "true");
  openDesktopBtn.setAttribute("aria-expanded", "true");

  document.body.classList.add("menu-open");
  closeBtn.focus();
}

function closeMenu() {
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  openBtn.setAttribute("aria-expanded", "false");
  openDesktopBtn.setAttribute("aria-expanded", "false");

  document.body.classList.remove("menu-open");
  openBtn.focus();
}

openBtn.addEventListener("click", openMenu);
openDesktopBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("is-open")) {
    closeMenu();
  }
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeMenu();
});

// Close menu when clicking on any link in the overlay menu
overlaySlot.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    closeMenu();
  }
});


// ads close btn
const adsBox = document.getElementById("riverAds");
const adsBannerCloseBtn = adsBox.querySelector(".banner-close");
const banner = adsBox.querySelector(".banner");
const DELAY_MS = 3000;
setTimeout(()=>{
  adsBox.classList.add("is-visible");
  adsBox.classList.remove("is-delayed");
}, DELAY_MS);


adsBannerCloseBtn.addEventListener("click", () => {
  
  banner.classList.remove("is-pulsing");
adsBox.style.display = "none";
});
});