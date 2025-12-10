document.addEventListener('DOMContentLoaded', function () {
    
    // --- 1. ACTIVE NAVBAR LINK HIGHLIGHTER ---
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-link');
    const menuLength = menuItem.length;

    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add("active");
            // If inside dropdown, highlight parent
            if(menuItem[i].closest('.dropdown-menu')){
                menuItem[i].closest('.dropdown').querySelector('.dropdown-toggle').classList.add('active');
            }
        }
    }

    // --- 2. GLOSSARY DATA (The "Wikipedia" Content) ---
    // Based on terms from your theory paper [cite: 42] and blog content.
    const glossaryData = {
        "Seoul": {
            title: "Seoul (서울)",
            content: "The capital city of South Korea, a vibrant metropolis where modern skyscrapers, high-tech subways, and pop culture meet Buddhist temples, palaces, and street markets."
        },
        "Gyeongju": {
            title: "Gyeongju (경주)",
            content: "Known as 'the museum without walls', this coastal city was the capital of the ancient Silla Kingdom and is filled with archaeological sites."
        },
        "Kimchi": {
            title: "Kimchi (김치)",
            content: "A traditional Korean side dish of salted and fermented vegetables, such as napa cabbage and Korean radish."
        },
        "Hanbok": {
            title: "Hanbok (한복)",
            content: "Traditional Korean clothing worn for formal occasions, festivals, and celebrations. It is characterized by vibrant colors and simple lines."
        },
        "T-Money": {
            title: "T-Money Card",
            content: "A rechargeable smart card used for paying transportation fares in and around Seoul and other areas of South Korea."
        },
        "Bibimbap": {
            title: "Bibimbap (비빔밥)",
            content: "A Korean rice dish. The term literally means 'mixed rice'. It is served as a bowl of warm white rice topped with namul (sautéed or blanched seasoned vegetables) and gochujang."
        },
         "Jeonju": {
            title: "Jeonju (전주)",
            content: "A city famous for its Hanok Village and rich food culture. It is often cited as the spiritual capital of Korea."
        }
    };

    // --- 3. POPOVER INITIALIZATION ---
    const termElements = document.querySelectorAll('.wiki-term');
    const popoverList = [...termElements].map(el => {
        const termKey = el.getAttribute('data-term');
        const data = glossaryData[termKey];

        if (data) {
            return new bootstrap.Popover(el, {
                trigger: 'hover focus',
                placement: 'auto',
                title: data.title,
                html: true,
                content: `<div class="popover-body-custom">${data.content}</div>`,
                template: `
                    <div class="popover custom-popover" role="tooltip">
                        <div class="popover-arrow"></div>
                        <h3 class="popover-header"></h3>
                        <div class="popover-body"></div>
                    </div>`
            });
        }
    });
});