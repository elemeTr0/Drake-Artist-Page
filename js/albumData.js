(function(){
    "use strict";

    /* ============================================================
       ALBUM DATA
       Each entry describes one project in Drake's discography.
       colors: gradient stops used to generate the placeholder artwork
       glyph: the large letterform shown on the artwork
       ============================================================ */
const albums = [
    {
        title: "So Far Gone",
        year: "2009",
        color: "white",
        bcolor: "#040404",
        type: "Mixtape",
        rating: 8.7,
        image: "src/albumCovers/so-far-gone.jpg",
        description: "The project that transformed Drake from a promising Toronto rapper and actor into a genuine star. So Far Gone blends introspective rap, atmospheric production, and R&B into a sound that would become hugely influential throughout the next decade.",
        tracks: [
            "Lust for Life",
            "Houstatlantavegas",
            "Successful",
            "Let's Call It Off",
            "November 18th",
            "Ignant Shit",
            "A Night Off",
            "Say What's Real",
            "Little Bit",
            "Best I Ever Had",
            "Unstoppable",
            "Uptown",
            "Sooner Than Later",
            "Bria's Interlude",
            "The Calm",
            "Outro",
            "Brand New",
            "Congratulations"
        ]
    },
    {
        title: "Thank Me Later",
        year: "2010",
        color: "#c63727",
        bcolor: "black",
        type: "Studio Album",
        rating: 7.8,
        image: "src/albumCovers/thank-me-later.jpg",
        description: "Drake's major-label debut, released under enormous expectations following the success of So Far Gone. The album balances introspective songwriting with polished pop and hip-hop production while establishing Drake as a major commercial artist.",
        tracks: [
            "Fireworks",
            "Karaoke",
            "The Resistance",
            "Over",
            "Show Me a Good Time",
            "Up All Night",
            "Fancy",
            "Shut It Down",
            "Unforgettable",
            "Light Up",
            "Miss Me",
            "Cece's Interlude",
            "Find Your Love",
            "Thank Me Now",
            "9AM in Dallas"
        ]
    },
    {
        title: "Take Care",
        year: "2011",
        color: "#B39676",
        bcolor: "#2E1F17",
        type: "Studio Album",
        rating: 9.4,
        image: "src/albumCovers/take-care.jpg",
        description: "Drake's defining album and one of the most influential rap and R&B records of the 2010s. Its atmospheric production, emotional vulnerability, and seamless blending of singing and rapping established the sound that would become synonymous with Drake.",
        tracks: [
            "Over My Dead Body",
            "Shot for Me",
            "Headlines",
            "Crew Love",
            "Take Care",
            "Marvins Room",
            "Buried Alive Interlude",
            "Under Ground Kings",
            "We'll Be Fine",
            "Make Me Proud",
            "Lord Knows",
            "Cameras",
            "Good Ones Go Interlude",
            "Doing It Wrong",
            "The Real Her",
            "Look What You've Done",
            "HYFR",
            "Practice",
            "The Ride",
            "The Motto",
            "Hate Sleeping Alone"
        ]
    },
    {
        title: "Nothing Was the Same",
        year: "2013",
        color: "#3b90bc",
        bcolor: "#013351",
        type: "Studio Album",
        rating: 8.9,
        image: "src/albumCovers/NWST.jpg",
        description: "A more confident and polished Drake emerges on Nothing Was the Same. The album combines expansive production with sharper rapping and some of his biggest records, marking a shift from vulnerable newcomer to established superstar.",
        tracks: [
            "Tuscan Leather",
            "Furthest Thing",
            "Started from the Bottom",
            "Wu-Tang Forever",
            "Own It",
            "Worst Behavior",
            "From Time",
            "Hold On, We're Going Home",
            "Connect",
            "The Language",
            "305 to My City",
            "Too Much",
            "Pound Cake / Paris Morton Music 2",
            "Come Thru",
            "All Me",
            "The Motion"
        ]
    },
    {
        title: "If You're Reading This It's Too Late",
        year: "2015",
        color: "#1E2123",
        bcolor: "#D9D9DB",
        type: "Mixtape",
        rating: 8.6,
        image: "src/albumCovers/IYRTITL.jpg",
        description: "A surprise mixtape that showed Drake at his most aggressive and rap-focused. Dark production, confident performances, and minimal emphasis on crossover appeal made it one of the most respected projects of his career.",
        tracks: [
            "Legend",
            "Energy",
            "10 Bands",
            "Know Yourself",
            "No Tellin'",
            "Madonna",
            "6 Man",
            "Star67",
            "Preach",
            "Wednesday Night Interlude",
            "Used To",
            "Right Hand",
            "Now & Forever",
            "6 God",
            "You & The 6",
            "Jungle",
            "6PM in New York",
            "How Bout Now",
            "My Side"
        ]
    },
    {
        title: "What a Time to Be Alive",
        year: "2015",
        color: "#BFBFC4",
        bcolor: "#34343C",
        type: "Collaborative Album",
        rating: 7.3,
        image: "src/albumCovers/what-a-time-to-be-alive.jpg",
        description: "A rapid-fire collaboration between Drake and Future built around Metro Boomin's trap-heavy production. The project is short, energetic, and unapologetically focused on flexing, partying, and chemistry between the two artists.",
        tracks: [
            "Digital Dash",
            "Big Rings",
            "Live From the Gutter",
            "Diamonds Dancing",
            "Scholarships",
            "Plastic Bag",
            "I'm the Plug",
            "Change Locations",
            "Jumpman",
            "Jersey",
            "30 for 30 Freestyle"
        ]
    },
    {
        title: "Views",
        year: "2016",
        color: "#ADB2B4",
        bcolor: "#46535d",
        type: "Studio Album",
        rating: 7.5,
        image: "src/albumCovers/views.jpg",
        description: "A massive commercial success built around a cold, atmospheric vision of Toronto. Views contains some of Drake's biggest global hits, but its long runtime and uneven pacing made it one of his more divisive albums.",
        tracks: [
            "Keep the Family Close",
            "9",
            "U with Me?",
            "Feel No Ways",
            "Hype",
            "Weston Road Flows",
            "Redemption",
            "With You",
            "Faithful",
            "Still Here",
            "Controlla",
            "One Dance",
            "Grammys",
            "Child's Play",
            "Pop Style",
            "Too Good",
            "Summers Over Interlude",
            "Fire & Desire",
            "Views",
            "Hotline Bling"
        ]
    },
    {
        title: "More Life",
        year: "2017",
        color: "#1163A7",
        bcolor: "#0A0909",
        type: "Playlist",
        rating: 8.2,
        image: "src/albumCovers/more-life.jpg",
        description: "A genre-spanning playlist that expands Drake's sound through dancehall, grime, Afrobeats, and contemporary R&B. Its relaxed structure gives Drake room to experiment with different styles and international influences.",
        tracks: [
            "Free Smoke",
            "No Long Talk",
            "Passionfruit",
            "Jorja Interlude",
            "Get It Together",
            "Madiba Riddim",
            "Blem",
            "4422",
            "Gyalchester",
            "Skepta Interlude",
            "Portland",
            "Sacrifices",
            "Nothings Into Somethings",
            "Teenage Fever",
            "KMT",
            "Lose You",
            "Can't Have Everything",
            "Glow",
            "Since Way Back",
            "Fake Love",
            "Ice Melts",
            "Do Not Disturb"
        ]
    },
    {
        title: "Scorpion",
        year: "2018",
        color: "#CBCBCB",
        bcolor: "#2f2f2f",
        type: "Studio Album",
        rating: 7.0,
        image: "src/albumCovers/scorpion.jpg",
        description: "A double album divided between rap and R&B, released during one of the biggest periods of Drake's career. Despite its massive collection of hits, the album's length and uneven sequencing make it a sprawling listen.",
        tracks: [
            "Survival",
            "Nonstop",
            "Elevate",
            "Emotionless",
            "God's Plan",
            "I'm Upset",
            "8 Out of 10",
            "Mob Ties",
            "Can't Take a Joke",
            "Sandra's Rose",
            "Talk Up",
            "Is There More",
            "Peak",
            "Summer Games",
            "Jaded",
            "Nice for What",
            "Finesse",
            "Ratchet Happy Birthday",
            "That's How You Feel",
            "Blue Tint",
            "In My Feelings",
            "Don't Matter to Me",
            "After Dark",
            "Final Fantasy",
            "March 14"
        ]
    },
    {
        title: "Care Package",
        year: "2019",
        color: "#BBC3CE",
        bcolor: "#0C0D0E",
        type: "Compilation",
        rating: 6.5,
        image: "src/albumCovers/care-package.jpg",
        description: "A collection of previously released loosies, singles, and unreleased tracks from Drake's early-to-mid 2010s run. Rather than functioning as a traditional album, Care Package serves as an archive of songs that helped define his most prolific era.",
        tracks: [
            "Dreams Money Can Buy",
            "The Motion",
            "How Bout Now",
            "Trust Issues",
            "Days in the East",
            "Draft Day",
            "4PM in Calabasas",
            "5AM in Toronto",
            "I Get Lonely",
            "My Side",
            "Jodeci Freestyle",
            "Club Paradise",
            "Free Spirit",
            "Heat of the Moment",
            "Girls Love Beyoncé",
            "Paris Morton Music",
            "Can I"
        ]
    },
    {
        title: "Dark Lane Demo Tapes",
        year: "2020",
        color: "#7C7C84",
        bcolor: "#1A1C08",
        type: "Mixtape",
        rating: 6.8,
        image: "src/albumCovers/dld.jpg",
        description: "A loose collection of leaks, demos, and new material released during the pandemic. Dark Lane Demo Tapes feels intentionally informal, offering glimpses of different sounds while setting the stage for Drake's next era.",
        tracks: [
            "Deep Pockets",
            "When to Say When",
            "Chicago Freestyle",
            "Not You Too",
            "Toosie Slide",
            "Desires",
            "Time Flies",
            "Landed",
            "D4L",
            "Pain 1993",
            "Losses",
            "From Florida With Love",
            "Demons",
            "War"
        ]
    },
    {
        title: "Certified Lover Boy",
        year: "2021",
        color: "#2B3348",
        bcolor: "white",
        type: "Studio Album",
        rating: 6.9,
        image: "src/albumCovers/clb.jpg",
        description: "A highly anticipated album centered around Drake's familiar themes of relationships, fame, and nightlife. Packed with major collaborations and chart-ready singles, Certified Lover Boy represents the peak of his feature-heavy commercial formula.",
        tracks: [
            "Champagne Poetry",
            "Papi's Home",
            "Girls Want Girls",
            "In the Bible",
            "Love All",
            "Fair Trade",
            "Way 2 Sexy",
            "TSU",
            "N 2 Deep",
            "Pipe Down",
            "Yebba's Heartbreak",
            "No Friends in the Industry",
            "Knife Talk",
            "7AM on Bridle Path",
            "Race My Mind",
            "Fountains",
            "Get Along Better",
            "You Only Live Twice",
            "IMY2",
            "Fucking Fans",
            "The Remorse"
        ]
    },
    {
        title: "Honestly, Nevermind",
        year: "2022",
        color: "#BCB9B9",
        bcolor: "#0D0F10",
        type: "Studio Album",
        rating: 7.6,
        image: "src/albumCovers/honestly-nevermind.jpg",
        description: "One of Drake's biggest stylistic departures, replacing traditional rap production with house, dance, and electronic influences. The album prioritizes atmosphere and rhythm over bars, revealing a more experimental side of his sound.",
        tracks: [
            "Intro",
            "Falling Back",
            "Texts Go Green",
            "Currents",
            "A Keeper",
            "Calling My Name",
            "Sticky",
            "Massive",
            "Flight's Booked",
            "Overdrive",
            "Down Hill",
            "Tie That Binds",
            "Liability",
            "Jimmy Cooks"
        ]
    },
    {
        title: "Her Loss",
        year: "2022",
        color: "#C0999C",
        bcolor: "#231928",
        type: "Collaborative Album",
        rating: 8.0,
        image: "src/albumCovers/her-loss.jpg",
        description: "Drake and 21 Savage combine for a confident, chemistry-driven rap album. Her Loss is tighter and more focused than many of Drake's recent releases, with both artists leaning into competitive performances, punchlines, and sharp production.",
        tracks: [
            "Rich Flex",
            "Major Distribution",
            "On BS",
            "BackOutsideBoyz",
            "Privileged Rappers",
            "Spin Bout U",
            "Hours in Silence",
            "Treacherous Twins",
            "Circo Loco",
            "Pussy & Millions",
            "Broke Boys",
            "Middle of the Ocean",
            "Jumbotron Shit Poppin",
            "More M's",
            "3AM on Glenwood",
            "I Guess It's Fuck Me"
        ]
    },
    {
        title: "For All the Dogs",
        year: "2023",
        color: "#9EA29D",
        bcolor: "#0B0B08",
        type: "Studio Album",
        rating: 6.6,
        image: "src/albumCovers/for-all-the-dogs.jpg",
        description: "A lengthy return to Drake's rap-heavy sound after the experimentation of Honestly, Nevermind. The album features major collaborations and several standout performances, but its large tracklist makes the overall project feel inconsistent.",
        tracks: [
            "Virginia Beach",
            "Amen",
            "Calling for You",
            "Fear of Heights",
            "Daylight",
            "First Person Shooter",
            "IDGAF",
            "7969 Santa",
            "Slime You Out",
            "Bahamas Promises",
            "Tried Our Best",
            "Screw the World Interlude",
            "Drew a Picasso",
            "Members Only",
            "What Would Pluto Do",
            "All the Parties",
            "8AM in Charlotte",
            "BBL Love Interlude",
            "Gently",
            "Rich Baby Daddy",
            "Another Late Night",
            "Away From Home",
            "Polar Opposites"
        ]
    },
    {
        title: "$ome $exy $ongs 4 U",
        year: "2025",
        color: "#D8DBD6",
        bcolor: "#0E1918",
        type: "Collaborative Album",
        rating: 6.4,
        image: "src/albumCovers/some-sexy-songs.jpg",
        description: "A collaboration between Drake and PARTYNEXTDOOR centered heavily around R&B, romance, and late-night atmosphere. The project leans into the melodic side of both artists while keeping the production relatively minimal and intimate.",
        tracks: [
            "CN TOWER",
            "MOTH BALLS",
            "SOMETHING ABOUT YOU",
            "CRYING IN CHANEL",
            "SPIDER-MAN SUPERMAN",
            "DEEPER",
            "SMALL TOWN FAME",
            "PIMMIE'S DILEMMA",
            "BRIAN STEEL",
            "GIMME A HUG",
            "RAINING IN HOUSTON",
            "LASERS",
            "MEET YOUR PADRE",
            "NOKIA",
            "DIE TRYING",
            "SOMEBODY LOVES ME",
            "CELIBACY",
            "OMW",
            "GLORIOUS",
            "WHEN HE'S GONE",
            "GREEDY"
        ]
    },
    {
        title: "ICEMAN",
        year: "2026",
        color: "#B8B0AF",
        bcolor: "#0C0A0A",
        type: "Mixtape",
        rating: 6.0,
        image: "src/albumCovers/iceman.jpg",
        description: "Drake's latest project, representing his current creative direction and the newest chapter in his constantly evolving catalog. ICEMAN explores a colder and more stripped-back sound while continuing his long-running balance between rap, melody, and atmospheric production.",
        tracks: [
            "Make Them Cry",
            "Dust",
            "Whisper My Name",
            "Janice STFU",
            "Ran To Atlanta",
            "Shabang",
            "Make Them Pay",
            "Burning Bridges",
            "National Treasures",
            "B's On The Table",
            "What Did I Miss?",
            "Plot Twist",
            "2 Hard 4 The Radio",
            "Make Them Remember",
            "Little Birdie",
            "Don't Worry",
            "Firm Friends",
            "Make Them Know"
        ]
    },
    {
        title: "Habibti",
        year: "2026",
        color: "#5D4F4E",
        bcolor: "#D7C1A6",
        type: "Mixtape",
        rating: 6.8,
        image: "src/albumCovers/habibti.jpg",
        description: "A contemporary addition to Drake's catalog that leans into melodic songwriting and modern R&B influences. Habibti presents a more intimate side of Drake while experimenting with a softer, more atmospheric production style.",
        tracks: [
            "Rusty Intro",
            "WNBA",
            "Slap The City",
            "High Fives",
            "Hurrr Nor Thurrr",
            "I'm Spent",
            "Classic",
            "Gen 5",
            "White Bone",
            "Fortworth",
            "Prioritizing"
        ]
    },
    {
        title: "Maid of Honor",
        year: "2026",
        color: "#B39E99",
        bcolor: "#4A3B3B",
        type: "Mixtape",
        rating: 6.8,
        image: "src/albumCovers/maid-of-honor.jpg",
        description: "A recent project that continues Drake's exploration of melodic rap and R&B while introducing another chapter in his evolving sound. The project focuses more on atmosphere and personal songwriting than the larger-than-life commercial approach of his earlier releases.",
        tracks: [
            "Hoe Phase",
            "Road Trips",
            "Outside Tweaking",
            "Cheetah Print",
            "Which One",
            "Amazing Shape",
            "BBW",
            "True Bestie",
            "Where's Your Stuff Interlude",
            "New Bestie",
            "Q&A",
            "Stuck",
            "Goose and The Juice",
            "Princess"
        ]
    },
    {
        title: "FOMO",
        year: "2026",
        color: "whitesmoke",
        bcolor: "black",
        type: "OUT SEPTEMBER 15TH",
        rating: 0,
        image: "src/albumCovers/fomo.jpg",
        description: "FOMO / Fear of Missing Out is Drake’s mysterious next project following his 2026 run of Iceman, Habibti, and Maid of Honour. The rollout has been deliberately cryptic, with Drake posting “FOMO 2026”, a CD case titled Fear of Missing Out, and now the September 15 YouTube announcement. Fans are speculating that it could be another music project, a visual project, or something entirely different.",
        tracks: [
            "NO TRACKS YET"
        ]
    }
];


    /* ============================================================
       STATE
       activeIndex of -1 means "no album selected" (intro state).
       ============================================================ */
    let activeIndex = -1;
    let wheelAccumulator = 0;
    let wheelCooldown = false;
    const WHEEL_THRESHOLD = 48;
    const COOLDOWN_MS = 460;
    const DEFAULT_GOLD = '#c3bd75';

    const carouselList = document.getElementById('carouselList');
    const carouselViewport = document.getElementById('carouselViewport');
    const introBtn = document.getElementById('introBtn');
    const scrollHint = document.getElementById('scrollHint');
    const introView = document.getElementById('introView');
    const albumView = document.getElementById('albumView');


    /* ------------------------------------------------------------
       Build carousel DOM once. Each <li> is positioned every
       render via CSS transform based on its distance from the
       active index — see positionItems().
       ------------------------------------------------------------ */
    function buildCarouselItems(){
        albums.forEach((album, index) => {
            const li = document.createElement('li');
            li.className = 'carousel-item';
            li.dataset.index = index;

            const cover = document.createElement('div');
            cover.className = 'cover';
            const img = document.createElement('img');
            img.className = 'cover-image';
            img.src = album.image;
            cover.appendChild(img);

            const meta = document.createElement('div');
            meta.className = 'meta';
            const title = document.createElement('div');
            title.className = 'title';
            title.textContent = album.title;
            const year = document.createElement('div');
            year.className = 'year';
            year.textContent = album.year;
            meta.appendChild(title);
            meta.appendChild(year);

            li.appendChild(cover);
            li.appendChild(meta);

            li.addEventListener('click', () => setActive(index));

            carouselList.appendChild(li);
        });
    }

    /* ------------------------------------------------------------
       Position every carousel item relative to the fixed center
       point based on (itemIndex - activeIndex). Distance 0 is the
       dominant, centered album; larger |distance| shrinks and
       fades the item using the scale/opacity table from the brief.
       ------------------------------------------------------------ */
    function scaleForDistance(distance){
        const abs = Math.abs(distance);
        if (abs === 0) return { scale: 1.00, opacity: 1.00 };
        if (abs === 1) return { scale: 0.80, opacity: 0.80 };
        if (abs === 2) return { scale: 0.62, opacity: 0.60 };
        if (abs === 3) return { scale: 0.45, opacity: 0.40 };
        return { scale: 0.30, opacity: 0.20 };
    }

    function positionItems(){
        const items = carouselList.children;
        for (let i = 0; i < items.length; i++){
            const distance = i - activeIndex;
            const { scale, opacity } = scaleForDistance(distance);
            const translateY = distance * getSpacing();
            const item = items[i];
            item.style.transform =
                `translate(-50%, -50%) translateY(${translateY}px) scale(${scale})`;
            item.style.opacity = Math.abs(distance) > 6 ? 0 : opacity;
            item.style.zIndex = 100 - Math.abs(distance);
            item.style.pointerEvents = Math.abs(distance) > 6 ? 'none' : 'auto';
            item.classList.toggle('is-active', distance === 0);
        }
    }

    function getSpacing(){
        // Slightly tighten item spacing on shorter viewports so the
        // full wheel stays legible without overflowing.
        const h = carouselViewport.clientHeight;
        return h < 640 ? 88 : 116;
    }

    /* ------------------------------------------------------------
       Update the right-hand content panel to match activeIndex.
       ------------------------------------------------------------ */
    function renderContent(){
        const showIntro = activeIndex === -1;

        introView.classList.toggle('is-visible', showIntro);
        albumView.classList.toggle('is-visible', !showIntro);
        introBtn.classList.toggle('is-active', showIntro);
        scrollHint.classList.toggle('is-hidden', !showIntro);
        const contentPanel = document.getElementById("contentPanel");
        if (showIntro) {
            document.documentElement.style.setProperty('--gold', DEFAULT_GOLD);


            contentPanel.style.background = '';
            contentPanel.style.color = '';

            contentPanel.scrollTop = 0;
            contentPanel.style.overflowY = 'hidden';

            introBtn.innerText = "LAST";
            introBtn.onclick = () => setActive(albums.length - 1);

            return;
        }

        contentPanel.style.overflowY = 'auto';

        const album = albums[activeIndex];

        document.getElementById('albumCoverLarge').src = album.image;
        document.getElementById('albumCoverGlyph').src = album.image;
        document.getElementById('albumType').textContent = album.type.toUpperCase();
        document.getElementById('albumTitle').textContent = album.title;
        document.getElementById('albumYear').textContent = album.year;
        document.getElementById('albumDescription').textContent = album.description;

        contentPanel.style.background = album.bcolor;
        contentPanel.style.color = album.color;

        document.documentElement.style.setProperty('--gold', album.color);

        introBtn.innerText = "FIRST";
        introBtn.onclick = () => setActive(-1);

        const filled = Math.round(album.rating);
        let starString = '';

        for (let i = 0; i < 10; i++){
            starString += i < filled
                ? '★'
                : '<span class="dim">★</span>';
        }

        document.getElementById('albumStars').innerHTML = starString;

        document.getElementById('albumScore').innerHTML =
            `${album.rating.toFixed(1)} <span>/ 10</span>`;

        const tracksEl = document.getElementById('albumTracks');
        tracksEl.innerHTML = '';

        album.tracks.forEach(track => {
            const li = document.createElement('li');

            li.appendChild(document.createTextNode(track));
            tracksEl.appendChild(li);
        });

        contentPanel.scrollTop = 0;
    }
    /* ------------------------------------------------------------
       Move to a new active index, clamped to valid range.
       -1 = intro state, 0..albums.length-1 = an album.
       ------------------------------------------------------------ */
    function setActive(index){
        const clamped = Math.max(-1, Math.min(albums.length - 1, index));
        if (clamped === activeIndex) return;
        activeIndex = clamped;
        positionItems();
        renderContent();
    }

    function step(delta){
        setActive(activeIndex + delta);
    }

    /* ------------------------------------------------------------
       Input handling: wheel, click (bound per-item above), and
       keyboard. Wheel input is accumulated and throttled so a
       single scroll gesture advances exactly one album at a time,
       rather than the carousel flying past several at once.
       ------------------------------------------------------------ */
    carouselViewport.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (wheelCooldown) return;

        wheelAccumulator += e.deltaY;

        if (wheelAccumulator > WHEEL_THRESHOLD){
            step(1);
            wheelAccumulator = 0;
            lockWheel();
        } else if (wheelAccumulator < -WHEEL_THRESHOLD){
            step(-1);
            wheelAccumulator = 0;
            lockWheel();
        }
    }, { passive:false });

    function lockWheel(){
        wheelCooldown = true;
        setTimeout(() => { wheelCooldown = false; }, COOLDOWN_MS);
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown'){
            e.preventDefault();
            step(1);
        } else if (e.key === 'ArrowUp'){
            e.preventDefault();
            step(-1);
        }
    });

    /* ------------------------------------------------------------
       Init
       ------------------------------------------------------------ */
    buildCarouselItems();
    positionItems();
    renderContent();

    window.addEventListener('resize', positionItems);
})();