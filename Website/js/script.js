document.addEventListener('DOMContentLoaded', function () {

    // 1. GLOSSARY DATA
    const glossaryData = {
        "Seoul": {
            title: "Seoul (서울)",
            content: "The capital city of South Korea, a vibrant metropolis where modern skyscrapers meet Buddhist temples."
        },
        "Gyeongju": {
            title: "Gyeongju (경주)",
            content: "Known as 'the museum without walls', this coastal city was the capital of the ancient Silla Kingdom."
        },
        "Kimchi": {
            title: "Kimchi (김치)",
            content: "A traditional Korean side dish of salted and fermented vegetables."
        },
        "Hanbok": {
            title: "Hanbok (한복)",
            content: "Traditional Korean clothing worn for formal occasions."
        },
        "T-Money": {
            title: "T-Money",
            content: "A rechargeable smart card used for paying transportation fares."
        },
        "Jeonju": {
            title: "Jeonju (전주)",
            content: "A city famous for its Hanok Village and rich food culture."
        },
        "Hanok": {
            title: "Hanok",
            content: "Traditional Korean house."
        },
        "Bibimbap": {
            title: "Bibimbap",
            content: "Mixed rice with vegetables and meat."
        }
    };

    // 2. POPOVER INITIALIZATION (Simplified)
    const termElements = document.querySelectorAll('.wiki-term');

    termElements.forEach(el => {
        const termKey = el.getAttribute('data-term');
        const data = glossaryData[termKey];

        if (data) {
            new bootstrap.Popover(el, {
                trigger: 'hover focus',
                placement: 'top',
                title: data.title,
                content: data.content,
                html: false // Kept false for testing to ensure text shows
            });
        } else {
            console.warn("Missing definition for:", termKey);
        }
    });

    // 3. NAVBAR HIGHLIGHTER
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-link');
    menuItem.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add("active");
            if(item.closest('.dropdown-menu')){
                item.closest('.dropdown').querySelector('.dropdown-toggle').classList.add('active');
            }
        }
    });
});