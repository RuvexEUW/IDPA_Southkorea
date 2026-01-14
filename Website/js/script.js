document.addEventListener('DOMContentLoaded', function () {

    // 1. history facts
    const glossaryData = {
// --- SEOUL LOCATIONS ---
        "Myeongdong Cathedral": {
            title: "Myeongdong Cathedral",
            content: "Myeong-dong Cathedral, is Korea’s first large brick church built in the Gothic style, completed in 1898 and a central symbol of the Catholic Church in Korea. The cathedral stands on the historic site of early Korean Catholic community activity, houses relics of persecuted martyrs, and has long been a spiritual and cultural landmark in Seoul."
        },
        "Gyeongbokgung Palace": {
            title: "Gyeongbokgung Palace",
            content: "Gyeongbokgung was founded in 1395 as the main royal palace of the Joseon Dynasty, symbolizing the new dynasty’s capital and state order. Today it represents Joseon politics, royal architecture, and the later rebuilding efforts after major destruction in Korea’s turbulent modern history."
        },
        "Changdeokgung Palace": {
            title: "Changdeokgung Palace",
            content: "Built in the 15th century, Changdeokgung is famous for how its buildings and gardens were designed to harmonize with the natural landscape. It later served as an important royal residence and remains one of the best-preserved palace complexes of the Joseon period."
        },
        "DMZ": {
            title: "DMZ",
            content: "The DMZ was created by the Korean Armistice Agreement (27 July 1953) as a buffer zone around the Military Demarcation Line, reflecting the unresolved division after the Korean War. It remains a powerful symbol of ongoing tension and separation on the peninsula."
        },
        "N Seoul Tower": {
            title: "N Seoul Tower",
            content: "N Seoul Tower developed as a major broadcasting and observation landmark during South Korea’s modern urban transformation. It represents Seoul’s growth into a high-density global city, combining media infrastructure with tourism and skyline identity."
        },
        "Bongeunsa Temple": {
            title: "Bongeunsa Temple",
            content: "Bongeunsa was founded in 794 during the Silla period and remains an active Buddhist temple in Seoul. Today it highlights the continuity of Korean Buddhism across centuries — from ancient state Buddhism to modern religious life in the middle of a megacity."
        },
        "Cheongun Literature Library": {
            title: "Cheongun Literature Library",
            content: "Cheongun Literature Library is known as a hanok-style public library, blending traditional architecture with modern city culture. It reflects how Seoul preserves “old” design aesthetics while creating new public cultural spaces."
        },
        "Hill of Poet Yun Dong-ju": {
            title: "Hill of Poet Yun Dong-ju",
            content: "Poet Yun Dong-ju (1917–1945) is strongly associated with Korea’s colonial-era literature and identity, and the site commemorates that cultural memory. It connects a physical place in Seoul with modern Korean literary heritage shaped under occupation and wartime pressure."
        },

        // --- GYEONGJU LOCATIONS ---
        "Gyeongju National Museum": {
            title: "Gyeongju National Museum",
            content: "The museum presents major artifacts from Silla, the ancient kingdom whose capital was Gyeongju. It functions as a key modern institution for understanding Silla culture, craftsmanship, and state history through preserved objects."
        },
        "Wolji Pond": {
            title: "Wolji Pond",
            content: "Wolji (historically tied to palace grounds) was created in 674 during Silla and is linked to royal space and elite culture. It represents Silla court life, landscape design, and the political center of the ancient capital."
        },
        "Woljeonggyo Bridge": {
            title: "Woljeonggyo Bridge",
            content: "Woljeonggyo is historically associated with Silla-era infrastructure connecting key areas of the capital. The site is treated as cultural heritage because it reflects how Silla organized movement, urban space, and monumental building around the royal center."
        },
        "Tomb of King Michu": {
            title: "Tomb of King Michu",
            content: "This is the tomb of King Michu (r. 262–284), known as the first Silla king from the Kim clan. The site highlights Silla royal burial culture and the political significance of dynastic lineage."
        },
        "Cheomseongdae Observatory": {
            title: "Cheomseongdae Observatory",
            content: "Cheomseongdae was built during the reign of Queen Seondeok (r. 632–647) and is often described as one of Asia’s earliest surviving astronomical observatories. It reflects Silla’s scientific knowledge and the state-level role of astronomy."
        },
        "Bulguksa Temple": {
            title: "Bulguksa Temple",
            content: "Bulguksa represents peak Silla Buddhist architecture and state-supported religion, and it forms part of a major sacred complex with Seokguram. Its importance lies in religion, art, and the way Buddhism shaped political and cultural identity in ancient Korea."
        },
        "Seokguram Grotto": {
            title: "Seokguram Grotto",
            content: "Seokguram was established in the 8th century and is famous for its monumental Buddha and surrounding sculptures. It is considered a masterpiece of Buddhist art and illustrates the cultural power of Buddhism in Silla."
        },
        "Jungdo Tower": {
            title: "Jungdo Tower",
            content: "The modern tower in the Gyeongju Expo area visually references the legendary Hwangnyongsa nine-story pagoda, connecting present-day design with Silla-era symbolism. It shows how contemporary Korea reuses ancient heritage motifs to shape modern city identity."
        },
        "Gyochon Traditional Village": {
            title: "Gyochon Traditional Village",
            content: "Gyochon is tied to traditional Confucian learning and local elite households, with cultural assets linked to long-standing family and community life. It’s a living example of how Joseon-era social order, education, and tradition were embedded into everyday neighborhoods."
        },
        "Hwangnam-ppang": {
            title: "Hwangnam-ppang",
            content: "Hwangnam-ppang began in 1939 and became a signature regional pastry of Gyeongju. Today it’s treated as a recognizable “heritage food” that connects modern tourism with a product born during late-colonial era Korea."
        },

        // --- BUSAN LOCATIONS ---
        "Haedong Yonggungsa Temple": {
            title: "Haedong Yonggungsa Temple",
            content: "Haedong Yonggungsa is traditionally said to have been founded in 1376 during the Goryeo period, and it stands out because it is a rare major temple built along the coast. Its setting reflects how Korean Buddhism adapted sacred space to nature and geography beyond mountains."
        },
        "Gamcheon Culture Village": {
            title: "Gamcheon Culture Village",
            content: "Gamcheon’s early identity is tied to refugee settlement during the Korean War, when people built homes on the hillside under extreme hardship. Since 2009, art and regeneration projects transformed it into a cultural tourism site, combining painful history with modern community-driven renewal."
        },

        // --- JEONJU LOCATIONS ---
        "Gyeonggijeon Shrine": {
            title: "Gyeonggijeon Shrine",
            content: "Founded in 1410, Gyeonggijeon enshrines a portrait of King Taejo, founder of the Joseon Dynasty, connecting Jeonju to dynastic legitimacy and royal memory. It represents Joseon political ideology, Confucian rituals, and state heritage preservation."
        },
        "Jeonju Hanok Village": {
            title: "Jeonju Hanok Village",
            content: "Jeonju Hanok Village is presented as a major concentration of Joseon-era architecture and traditional urban culture, preserved and reused in modern tourism. It represents continuity of “everyday Joseon” life through houses, crafts, and neighborhood structure."
        },
        "Jeondong Cathedral": {
            title: "Jeondong Cathedral",
            content: "Jeondong Cathedral was completed in 1914 and is known for its Western-style church design developed under French Catholic leadership. It reflects how religion, architecture, and foreign networks shaped Korea’s early modern city landscapes during the colonial period."
        },
        "Donggosanseong Fortress": {
            title: "Donggosanseong Fortress",
            content: "Donggosanseong is treated as a heritage location connected to historic defense and fortress culture in the Jeonju region. It helps illustrate how Joseon-era security relied on fortified terrain and regional strongholds."
        },
        "Jaman Mural Village": {
            title: "Jaman Mural Village",
            content: "Jaman Mural Village is known for its painted walls and creative street atmosphere near key historic viewpoints in Jeonju. It represents modern urban culture layered onto an older historic environment, showing how tourism and local art reshape neighborhoods today."
        },

        // Kai's facts
        "Gangneung": {
            title: "Gangneung",
            content: "Gangneung was founded during the early Silla period and is located at the east cost of Korea. While it doesn’t have much historic importance there were some events that happened. On 18th September 1996 a north Korean submarine ran aground and started a 49-day manhunt for the fleeing crew. Gangneung was also one of the places where the 2018 winter Olympics were held."
        },
        "Gwanghwamun Square": {
            title: "Gwanghwamun Square",
            content: "The Gwanghwamun Square is an area right in front of Gyeongbokgung Palace and is used since ancient times to host major events. Historically it was the location of royal administrative buildings. These days it’s a public space with two major memorials, one Statue honouring Admiral Yi Sun-Sin and the other paying tribute to King Sejong the Great."
        },
        "Namdaemun Market": {
            title: "Namdaemun Market",
            content: "Located right next to Namdaemun, the south gate of the old city, this market features a lot of household goods and traditional medicine. It was established in 1414 during the reign of King Taejong and was a series of government licensed shops that sold a wide variety of items. During the Japanese colonialisations, Namdaemun was forced to open up to also allow Japanese and Chinese merchants to sell wares where it was previously a market exclusive to Korean customers and merchants. During the Korea war it was burned down and destroyed several times but always reestablished itself with roughly the same size and status."
        },
        "Yonsei University": {
            title: "Yonsei University",
            content: "Yonsei University is one of the three most prestigious universities in Korea. Its current form established itself in January 1957 by merging the Yonhi College, also known as Chosun Christian College which was founded in April 1885 and Severance Hospital. The universitys campus features all kinds of college faculties and is like a small village with shops, cafes and other facilities being on campus."
        },
        "Bukchon Hanok Village": {
            title: "Bukchon Hanok Village",
            content: "Traditionally the residential quarters of high-ranking officials and nobility, this Hanok village is still a residential area today. During the Japanese colonial period, a Korean real estate company intentionally built hanok instead of Japanese style buildings to preserve the culture, despite the pressure of the colonial government. Since November 2024 tourist are only allowed to enter the village from 10 am to 5 pm to reduce the high volume of tourists."
        },
        "Insa-dong": {
            title: "Insa-dong",
            content: "Insa-dong was a residence area for government officials 500 years ago and originally compromised two towns, Gwanin-bang and Daesa-dong, whose last syllable, In and Sa, created the name. During the Japanese occupation the wealthy Koreans were forced to move out and sell their belongings, often antiques from which it got its identity. After the Korean war it became a centre for South Koreas artistic life and café culture. Today it’s a cultural shopping street with many antique shops and coffee houses."
        },
        "Gwangjang Market": {
            title: "Gwangjang Market",
            content: "Gwangjang Market was established in 1905 in protest to the seizure of Namdaemun Market by the Japanese colonial forces. A few investors purchased the land and opened Dongdaemun Market, the first market that was open every day of the week. It was later renamed to Gwangjang Market and is today still one of the oldest and largest Markets in Seoul."
        },
        "Seongsan Ilchulbong": {
            title: "Seongsan Ilchulbong",
            content: "This volcano is a major tourist attraction and considered one of Koreas most beautiful tourist sites. During the Japanese colonial period the Japanese dug caves into the side of the mountain and hid boats loaded with explosives. Nowadays those caves are registered cultural heritages."
        },
        "Songaksan": {
            title: "Songaksan",
            content: "Another volcanic mountain and also a vivid tourist site, this location too was occupied by Japanese forces and used as a stepping stone for the invasion of China during World War 2."
        },
        "COEX": {
            title: "COEX",
            content: "Also known as the “Starfield COEX Mall” it is the one of Koreas largest malls and the world’s largest underground mall with an area of about 173’000 square meters. It finished construction in April 2000 and features a large number of shops, food courts, a cinema, an aquarium and various other entertainment venues. Its most famous attraction is the Starfield Library, which stands in the centre of the mall."
        },
        "Hongdae": {
            title: "Hongdae",
            content: "Hongdae is an area that established itself around Hongik University, a prestigious private university. Thanks to cheap rent street artist stared to move in in the area and started the indie music schene. These days Hongdae is famous for being the social spot for young people. The culture there includes a big clubbing scene, lots of cafes and small restaurants, street food and beauty shops."
        },
        "Gangneung Jungang Market": {
            title: "Gangneung Jungang Market",
            content: "This market was registered as a permanent market in 1980 and provides fresh local products. Its similar in structure to Seoul’s Gwangjang market but smaller."
        }
    };

    // 2. POPOVER INITIALIZATION 
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