// ---------------------------------------------------------
// Wayfare — sample data
// Images are pulled live from LoremFlickr (free, no key
// required) using topic keywords, so each card gets a real,
// relevant Creative-Commons photo instead of a gray box.
// Swap any URL for your own image (e.g. "images/kyoto.jpg")
// if you'd rather ship your own photos in the repo.
// ---------------------------------------------------------

const interests = [
  { name: "Outdoors", img: "https://loremflickr.com/400/300/hiking,outdoors" },
  { name: "Food",     img: "https://loremflickr.com/400/300/street,food" },
  { name: "Culture",  img: "https://loremflickr.com/400/300/museum,culture" },
  { name: "Water",    img: "https://loremflickr.com/400/300/beach,water" }
];

const iconicPlaces = [
  { name: "Rome, Italy",       img: "https://loremflickr.com/500/400/rome,colosseum" },
  { name: "Paris, France",     img: "https://loremflickr.com/500/400/paris,eiffeltower" },
  { name: "Las Vegas, NV",     img: "https://loremflickr.com/500/400/lasvegas,strip" },
  { name: "London, UK",        img: "https://loremflickr.com/500/400/london,bigben" }
];

const hotels = [
  { name: "The Marlow House",   place: "Kyoto, Japan",          rating: 4.6, reviews: "2,341", price: 212, img: "https://loremflickr.com/400/300/japan,hotel" },
  { name: "Aegean Cliffside",   place: "Santorini, Greece",     rating: 4.9, reviews: "5,102", price: 340, img: "https://loremflickr.com/400/300/santorini,hotel" },
  { name: "Table Bay Lodge",    place: "Cape Town, S. Africa",  rating: 4.5, reviews: "1,890", price: 158, img: "https://loremflickr.com/400/300/safari,lodge" },
  { name: "Rocky Ridge Inn",    place: "Banff, Canada",         rating: 4.7, reviews: "3,004", price: 189, img: "https://loremflickr.com/400/300/mountain,cabin" }
];

const restaurants = [
  { name: "Nishiki Kitchen", cuisine: "Japanese",       place: "Kyoto",     rating: 4.8, reviews: "1,204", img: "https://loremflickr.com/200/200/japanese,food" },
  { name: "Caldera Table",   cuisine: "Mediterranean",  place: "Santorini", rating: 4.9, reviews: "2,310", img: "https://loremflickr.com/200/200/mediterranean,food" },
  { name: "Harbor & Vine",   cuisine: "Seafood",        place: "Cape Town", rating: 4.6, reviews: "980",   img: "https://loremflickr.com/200/200/seafood,restaurant" }
];

function starString(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function renderInterests() {
  const el = document.getElementById("interestsGrid");
  el.innerHTML = interests.map(i => `
    <div class="card">
      <img class="thumb" src="${i.img}" alt="${i.name}" loading="lazy">
      <div class="body">
        <h3>${i.name}</h3>
      </div>
    </div>
  `).join("");
}

function renderIconicPlaces() {
  const el = document.getElementById("iconicGrid");
  el.innerHTML = iconicPlaces.map(p => `
    <div class="card">
      <img class="thumb" src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="body">
        <h3>${p.name}</h3>
      </div>
    </div>
  `).join("");
}

function renderHotels() {
  const el = document.getElementById("hotelsGrid");
  el.innerHTML = hotels.map(h => `
    <div class="card hotel-card">
      <img class="thumb" src="${h.img}" alt="${h.name}" loading="lazy">
      <div class="body">
        <h3>${h.name}</h3>
        <div class="place">${h.place}</div>
        <div class="rating">
          <span class="stars">${starString(h.rating)}</span>
          <span class="count">${h.rating} (${h.reviews})</span>
        </div>
        <div class="hotel-price">$${h.price} <span>/ night</span></div>
      </div>
    </div>
  `).join("");
}

function renderRestaurants() {
  const el = document.getElementById("restaurantsGrid");
  el.innerHTML = restaurants.map(r => `
    <div class="card restaurant-card">
      <img class="thumb" src="${r.img}" alt="${r.name}" loading="lazy">
      <div class="body">
        <h3>${r.name}</h3>
        <div class="place">${r.place}</div>
        <div class="rating">
          <span class="stars">${starString(r.rating)}</span>
          <span class="count">${r.rating} (${r.reviews})</span>
        </div>
        <span class="cuisine-tag">${r.cuisine}</span>
      </div>
    </div>
  `).join("");
}

renderInterests();
renderIconicPlaces();
renderHotels();
renderRestaurants();

// ---------------------------------------------------------
// Interactivity
// ---------------------------------------------------------

// Hero search tabs (All / Things to Do / Hotels / Restaurants)
const searchTabs = document.getElementById("searchTabs");
if (searchTabs) {
  searchTabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".search-tab");
    if (!tab) return;
    searchTabs.querySelectorAll(".search-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
}

// Nav bar active-link highlight
document.querySelectorAll(".category-nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".category-nav a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");
  });
});
