// slider start
$('#main-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    dots: true,
    arrows: false
});

$('#free-slider').slick({
    infinite: true,
    speed: 7000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    fade: false,
    cssEase: 'linear',
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});
// slider end

// tabs start
const tabs = document.querySelectorAll(".tabs__item");
const sections = document.querySelectorAll(".tabs__section");

tabs.forEach(tab => {
    tab.addEventListener("click", e => {
        e.preventDefault();
        removeActiveTab();
        addActiveTab(tab);
    });
})

const removeActiveTab = () => {
    tabs.forEach(tab => {
        tab.classList.remove("tabs__item-active");
    });
    sections.forEach(section => {
        section.classList.remove("tabs__section-active");
    });
}

const addActiveTab = tab => {
    tab.classList.add("tabs__item-active");
    const href = tab.querySelector("a").getAttribute("href");
    const matchingSection = document.querySelector(href);
    matchingSection.classList.add("tabs__section-active");
}
// tabs end

// hamburger start
(function () {
    const hamburger = document.querySelector("#hamburger")
    const hiddenMenu = document.querySelector("#hiddenMenu")
    const hiddenMenuLi = document.getElementsByClassName("hiddenMenuLi")
    const main = document.getElementsByClassName("click")

    for (var i = 0; i < hiddenMenuLi.length; i++) {
        hiddenMenuLi[i].addEventListener('click', removeClass);
    }
    for (var i = 0; i < main.length; i++) {
        main[i].addEventListener('click', function () {
            if (hamburger.classList.contains("open")) {
                hamburger.classList.remove("open")
            }

            if (hiddenMenu.classList.contains("open")) {
                hiddenMenu.classList.remove("open")
            }
        })
    }

    function removeClass(e) {
        if (hamburger.classList.contains("open")) {
            hamburger.classList.remove("open")
        }

        if (hiddenMenu.classList.contains("open")) {
            hiddenMenu.classList.remove("open")
        }
    }

    hamburger.addEventListener("click", function () {
        this.classList.toggle("open")
        hiddenMenu.classList.toggle("open")
    })

})
    ();
// hamburger end