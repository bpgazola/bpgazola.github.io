// Boot AOS library
AOS.init();

// Get elements by class name
const iconMenu = document.querySelectorAll('.icon-menu, .icon-menu-close, #panelMenu li');

// Add event listener to each element
iconMenu.forEach((element) => {
  element.addEventListener('click', function () {
    // Get the target element
    const target = element.getAttribute('data-target');
    // Toggle the 'active' class on the target element
    document.querySelector(target).classList.toggle('active');
  });
});

// Get elements by class name
const moveToAnchor = document.querySelectorAll('.arrow, .nav-item a, .btn-default');

// Add event listener to each element
moveToAnchor.forEach((element) => {
  element.addEventListener('click', function () {
    // Get the target element from the data-target attribute
    const target = element.getAttribute('data-target');

    // Get the actual target element
    const targetElement = document.querySelector(`${target}`);

    // Check if the target element exists
    if (!targetElement) {
      console.error(`Target element not found: ${target}`);
      return;
    }

    // Get the target element's offset top
    const targetTop = targetElement.offsetTop;

    // Smoothly scroll to the target element
    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });
  });
});

// Slick Carousel
$('.carousel-services').slick({
    dots: true,
    infinite: false,
    autoplaySpeed: 3000,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '',
    nextArrow: '',
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

// Show and hide cards
function setupPortfolioCards() {
    const groupCards = document.querySelector('.group-cards');
    const portfolioCards = groupCards.querySelectorAll('.card-porfolio');

    // Check if there are more than 5 portfolio cards
    if (portfolioCards.length > 5) {
        const buttonRow = document.createElement('div');
        buttonRow.className = 'col-12';
        const button = document.createElement('a');
        button.className = 'btn btn-default d-block mx-auto';
        buttonRow.appendChild(button);
        groupCards.appendChild(buttonRow);
    }

    // Show the first 5 cards
    for (let i = 0; i < portfolioCards.length; i++) {
        if (i < 5) {
            portfolioCards[i].classList.add('show');
        } else {
            portfolioCards[i].style.display = 'none'; // Hide the rest
        }
    }

    // Add click event to the button
    const defaultButton = groupCards.querySelector('.btn-default');
    if (defaultButton) {
        defaultButton.addEventListener('click', function() {
            const hiddenCards = Array.from(portfolioCards).filter(card => !card.classList.contains('show'));
            hiddenCards.forEach(card => {
                if (card.style.display === 'none') {
                    card.style.display = 'block'; // Show hidden cards
                } else {
                    card.style.display = 'none'; // Hide shown cards
                }
            });
            this.classList.toggle('showLess');
        });
    }
}

// Call the function to set up the cards
setupPortfolioCards();

$('.collapse').on('shown.bs.collapse', function() {
    $(this).parent().find(".icon-plus").removeClass("icon-plus").addClass("icon-minus");
   
    }).on('hidden.bs.collapse', function() {
    $(this).parent().find(".icon-minus").removeClass("icon-minus").addClass("icon-plus");
});

// Social share buttons
$(document).ready(function($) {
    setShareLinks();

    function socialWindow(url) {
        const left = (screen.width - 600) / 2;
        const top = (screen.height - 600) / 2;
        const params = "menubar=no,toolbar=no,status=no,width=600,height=600,top=" + top + ",left=" + left;
        window.open(url, "NewWindow", params);
    }

    function setShareLinks() {
        const pageUrl = encodeURIComponent(document.URL);

        $('.social-share.btn-share-whatsapp').on('click', function() {
            const url = "https://wa.me/?text=" + pageUrl;
            socialWindow(url);
        });

        $('.social-share.btn-share-linkedin').on('click', function() {
            const url = "https://www.linkedin.com/cws/share?url=" + pageUrl;
            socialWindow(url);
        });
    }
});

