// Initialize AOS
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 900,
    once: true
  });
}

// Smooth scroll for navbar links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Contact form handler
const contactForm = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formAlert.innerHTML = '<div class="alert alert-success">Thank you for contacting us! We will get back to you soon.</div>';
    contactForm.reset();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // Property details page logic
  if (window.location.pathname.includes('properties.html')) {
    console.log('Property page JS running');
    const propertyData = [
      {
        title: 'Luxury Villa',
        images: [
          'assets/image2.webp',
          'https://via.placeholder.com/400x250?text=Living+Room',
          'https://via.placeholder.com/400x250?text=Bedroom',
          'https://via.placeholder.com/400x250?text=Kitchen',
          'https://via.placeholder.com/400x250?text=Bathroom',
          'https://via.placeholder.com/400x250?text=Balcony',
          'https://via.placeholder.com/400x250?text=Garden'
        ],
        cost: '$500,000',
        dimensions: '3500 sq.ft',
        interiors: '4BHK, Modern Kitchen, Private Pool, Garden',
        features: ['4BHK', 'Modern Kitchen', 'Private Pool', 'Garden', 'Garage', 'Smart Home'],
        description: 'Spacious 4BHK villa with garden and pool in a prime location.'
      },
      {
        title: 'Modern Apartment',
        images: [
          'assets/image3.webp',
          'https://via.placeholder.com/400x250?text=Balcony',
          'https://via.placeholder.com/400x250?text=Gym',
          'https://via.placeholder.com/400x250?text=Living+Room',
          'https://via.placeholder.com/400x250?text=Bedroom',
          'https://via.placeholder.com/400x250?text=Kitchen',
          'https://via.placeholder.com/400x250?text=Bathroom'
        ],
        cost: '$250,000',
        dimensions: '1200 sq.ft',
        interiors: '2BHK, City View, Gym Access',
        features: ['2BHK', 'City View', 'Gym Access', 'Balcony', 'Security'],
        description: '2BHK apartment with city views and modern amenities.'
      },
      {
        title: 'Cozy Cottage',
        images: [
          'assets/image4.webp',
          'https://via.placeholder.com/400x250?text=Fireplace',
          'https://via.placeholder.com/400x250?text=Nature+View',
          'https://via.placeholder.com/400x250?text=Living+Room',
          'https://via.placeholder.com/400x250?text=Bedroom',
          'https://via.placeholder.com/400x250?text=Kitchen',
          'https://via.placeholder.com/400x250?text=Bathroom'
        ],
        cost: '$320,000',
        dimensions: '1800 sq.ft',
        interiors: '3BHK, Fireplace, Nature View',
        features: ['3BHK', 'Fireplace', 'Nature View', 'Patio', 'Family Friendly'],
        description: 'Charming 3BHK cottage surrounded by nature, perfect for families.'
      },
      // Demo properties
      ...Array.from({length: 6}).map(() => ({
        title: 'Property Title',
        images: [
          'https://via.placeholder.com/400x250?text=Property+Image',
          'https://via.placeholder.com/400x250?text=Living+Room',
          'https://via.placeholder.com/400x250?text=Bedroom',
          'https://via.placeholder.com/400x250?text=Kitchen',
          'https://via.placeholder.com/400x250?text=Bathroom',
          'https://via.placeholder.com/400x250?text=Balcony',
          'https://via.placeholder.com/400x250?text=Garden'
        ],
        cost: '$XXX,XXX',
        dimensions: 'XXXX sq.ft',
        interiors: 'Demo interiors, replace with your own',
        features: ['Demo Feature 1', 'Demo Feature 2', 'Demo Feature 3'],
        description: 'Demo description for property. Replace this text with your own.'
      }))
    ];
    function getQueryParam(name) {
      const url = new URL(window.location.href);
      return url.searchParams.get(name);
    }
    const id = parseInt(getQueryParam('id'), 10);
    const detailsDiv = document.getElementById('property-details');
    if (id && id >= 1 && id <= propertyData.length) {
      const prop = propertyData[id-1];
      // Carousel HTML
      const carouselId = 'propertyCarousel';
      const carouselIndicators = prop.images.map((img, idx) => `
        <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${idx}" ${idx===0?'class="active" aria-current="true"':''} aria-label="Slide ${idx+1}"></button>
      `).join('');
      const carouselItems = prop.images.map((img, idx) => `
        <div class="carousel-item${idx===0?' active':''}">
          <img src="${img}" class="d-block w-100 rounded" alt="Property Image ${idx+1}">
        </div>
      `).join('');
      // Features list
      const featuresList = prop.features.map(f => `<li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>${f}</li>`).join('');
      detailsDiv.innerHTML = `
        <div class="row align-items-center mb-5">
          <div class="col-md-6 mb-4 mb-md-0">
            <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                ${carouselIndicators}
              </div>
              <div class="carousel-inner">
                ${carouselItems}
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <h2 class="fw-bold mb-3">${prop.title}</h2>
            <div class="mb-3">
              <span class="badge bg-primary fs-5 p-2"><i class="fas fa-money-bill-wave me-2"></i>${prop.cost}</span>
            </div>
            <p class="mb-2"><i class="fas fa-ruler-combined text-primary me-2"></i><strong>Dimensions:</strong> ${prop.dimensions}</p>
            <p class="mb-2"><i class="fas fa-couch text-primary me-2"></i><strong>Interiors:</strong> ${prop.interiors}</p>
            <p class="mt-4">${prop.description}</p>
            <div class="mt-4">
              <h5 class="fw-bold mb-2">Features</h5>
              <ul class="list-unstyled fs-6">
                ${featuresList}
              </ul>
            </div>
            <a href="index.html#properties" class="btn btn-outline-primary mt-3">Back to Properties</a>
          </div>
        </div>
      `;
    } else {
      detailsDiv.innerHTML = '<div class="alert alert-warning">Property not found. <a href="index.html#properties">Back to Properties</a></div>';
    }
  }
});
