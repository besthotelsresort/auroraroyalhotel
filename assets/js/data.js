/* ============================================================
   Aurora Royal Hotel — site data
   Editing this file updates cards, review headers, maps,
   reviews grids and author pages across the whole site.
   ============================================================ */

const SITE = {
  brand: "Aurora Royal Hotel",
  brandMark: "Aurora Royal",
  brandSuffix: "Hotel",
  glyph: "♛",
  tagline: "Canada's independent hotel review authority since 2011",
  established: 2011,
  email: "info@crystalgrovemanor.online",
  phone: "+46 73 474 52 04",
  city: "Toronto, Ontario",
  domain: "auroraroyalhotel.onrender.com",
  intro: "Honest, first-hand reviews of Canada's most memorable places to stay — from grand railway châteaux to lively resort escapes."
};

const AUTHORS = {
  "evelyn-marchetti": {
    name: "Evelyn Marchetti",
    slug: "evelyn-marchetti",
    role: "Senior Hotel Correspondent",
    since: 2012,
    location: "Montréal, QC",
    bio: "Evelyn has spent more than a decade sleeping in other people's beds so you don't have to gamble on yours. A former hospitality-school lecturer, she specialises in heritage and railway hotels and has stayed in over 400 properties across five continents. She is happiest dissecting a lobby's acoustics, the thread-count of a duvet, and whether the concierge remembers your name on day two.",
    focus: "Heritage & luxury hotels, service culture, fine dining"
  },
  "declan-rousseau": {
    name: "Declan Rousseau",
    slug: "declan-rousseau",
    role: "Resort & Entertainment Editor",
    since: 2014,
    location: "Niagara Falls, ON",
    bio: "Declan cut his teeth writing city guides before falling for the theatre of the big resort — the buzz of a gaming floor at midnight, a headline act on a Saturday, a quiet suite that still lets you sleep. He reviews with a stopwatch and a checklist, timing check-in queues and testing every lift, and he has a reputation for finding the one quiet corner in the loudest building.",
    focus: "Resort hotels, casinos, live entertainment, waterfront stays"
  },
  "priya-balakrishnan": {
    name: "Priya Balakrishnan",
    slug: "priya-balakrishnan",
    role: "Contributing Reviewer",
    since: 2018,
    location: "Toronto, ON",
    bio: "Priya travels with a partner, two children and an unreasonable amount of luggage, which makes her the person our readers trust for the practical questions: is the pool actually warm, how thin are the walls, and can a family of four get out the door before the breakfast room closes. She writes with warmth and a low tolerance for hidden fees.",
    focus: "Family travel, wellness, accessibility, value"
  }
};

const HOTELS = {
  "river-rock": {
    name: "River Rock Casino Resort",
    slug: "river-rock",
    city: "Richmond", province: "British Columbia",
    stars: 4, guestRating: 3.9, reviewCount: 2100,
    address: "8811 River Road, Richmond, BC V6X 3P8, Canada",
    phone: "+1 604-247-8900",
    lat: 49.196257, lng: -123.128141,
    casino: true,
    img: "assets/img/river-rock.jpg",
    author: "declan-rousseau",
    tags: ["Casino Resort", "Riverfront", "Near YVR Airport"],
    short: "A four-diamond riverfront resort minutes from Vancouver Airport, pairing a 24-hour casino and show theatre with airport-easy transit and Fraser River views.",
    amenities: ["24-hour casino & poker room", "River Rock Show Theatre", "Indoor pool with waterslide", "Absolute Spa & fitness centre", "10+ restaurants & bars", "Canada Line SkyTrain at the door", "144-berth marina", "Valet & self parking"],
    reviews: [
      { name: "Tourist23675", rating: 5, date: "Jul 2026", text: "Perfect start to our vacation — clean, quiet, comfortable suite, Starbucks downstairs, and a great location near the airport and cruise terminal." },
      { name: "Jonkay2013", rating: 5, date: "Jul 2026", text: "Helpful staff and a large, well-maintained suite. The train station right there makes airport and Vancouver trips easy. One of the best hotels we've stayed at." },
      { name: "Mandi K.", rating: 4, date: "Mar 2026", text: "Super convenient train location and comfortable, quiet rooms, though room cleanliness could use a little more attention." },
      { name: "JLNLondon", rating: 3, date: "Jun 2026", text: "Great big suite and perfect as an airport hotel with the Canada Line, but the lobby felt short-staffed and there was no smart TV." },
      { name: "Brian H.", rating: 3, date: "May 2026", text: "Loved the water views and the pool and hot tub, and early check-in was easy — but the rooms are dated and ours wasn't as clean as expected." },
      { name: "Michael P.", rating: 3, date: "Nov 2025", text: "Rooms look worn and the food court hasn't changed in years. Billing was confusing with charges I didn't expect above the booked rate." },
      { name: "Peter J.", rating: 3, date: "Jul 2026", text: "The casino and location are fine, but our room had damaged, stained furniture that didn't match the resort's premium image." },
      { name: "Christina R.", rating: 2, date: "Apr 2026", text: "Felt expensive for the quality: confusing valet parking, an outlet that didn't work, and a pool that looked poorly maintained." },
      { name: "Lily D.", rating: 2, date: "Jul 2026", text: "Airplane-noisy location far from downtown attractions, and the TV was limited to pay-per-view. Not especially family-friendly." },
      { name: "Kathy H.", rating: 1, date: "Jul 2026", text: "Several card authorizations tied up my credit before an Alaska cruise. The hotel admitted the error but the fix was slow." }
    ]
  },
  "fallsview": {
    name: "Fallsview Casino Resort",
    slug: "fallsview",
    city: "Niagara Falls", province: "Ontario",
    stars: 4, guestRating: 4.1, reviewCount: 1099,
    address: "6380 Fallsview Boulevard, Niagara Falls, ON L2G 7X5, Canada",
    phone: "+1 877-376-9722",
    lat: 43.082806, lng: -79.080845,
    casino: true,
    img: "assets/img/fallsview.jpg",
    author: "declan-rousseau",
    tags: ["Casino Resort", "Waterfall Views", "Spa"],
    short: "A cliff-top resort above the Horseshoe Falls, blending a vast gaming floor and two live-entertainment venues with rooms that look straight onto the falls.",
    amenities: ["Casino: 130+ tables, 3,500+ slots", "Avalon Theatre & OLG Stage", "Full-service spa & fitness centre", "18 restaurants & bars", "Fallsview rooms overlooking Horseshoe Falls", "Indoor pool", "30-store shopping galleria", "On-site parking structure"],
    reviews: [
      { name: "Compass", rating: 5, date: "Jun 2026", text: "Loved the combination of style, heritage, service and those unique views. The suite really stood out." },
      { name: "Donna", rating: 5, date: "Apr 2026", text: "The falls-view room and the spa services were excellent, and staff went out of their way to accommodate our health needs." },
      { name: "Lauren", rating: 5, date: "Sep 2025", text: "Best night's sleep I've had in ages. Clean rooms and great service throughout." },
      { name: "KKMARINO", rating: 5, date: "Feb 2025", text: "Smooth check-in, exceptional staff, a breathtaking view and top amenities. Hard to fault." },
      { name: "Kimmys", rating: 5, date: "Dec 2025", text: "Housekeeping was top-notch. My only wish was that bottled water was restocked on a multi-night stay." },
      { name: "Ray S.", rating: 5, date: "Mar 2026", text: "A fun casino visit — the players card gave me a little free play and I won on the very first spin." },
      { name: "mkelch", rating: 5, date: "Dec 2024", text: "Among the best options in town, with professional staff and spotless rooms." },
      { name: "Kevin M.", rating: 3, date: "Nov 2024", text: "Nice room but too few electrical outlets, and parking was expensive and a bit inconsistent." },
      { name: "HK49320", rating: 3, date: "Jul 2026", text: "Rooms felt a little dated with a musty odour and rough towels. Didn't quite feel worth the premium." },
      { name: "Kim C.", rating: 1, date: "Mar 2026", text: "Felt the casino has changed for the worse under new management, and cleanliness wasn't what it used to be." }
    ]
  },
  "chateau-frontenac": {
    name: "Fairmont Le Château Frontenac",
    slug: "chateau-frontenac",
    city: "Québec City", province: "Québec",
    stars: 5, guestRating: 4.5, reviewCount: 8300,
    address: "1 Rue des Carrières, Québec, QC G1R 4P5, Canada",
    phone: "+1 418-692-3861",
    lat: 46.8119, lng: -71.2049,
    casino: false,
    img: "assets/img/chateau-frontenac.jpg",
    author: "evelyn-marchetti",
    tags: ["Historic Landmark", "Old Québec", "Fine Dining"],
    short: "The castle above the St. Lawrence — a turreted 1893 landmark in the heart of Old Québec, and often called the most photographed hotel in the world.",
    amenities: ["Full-service spa & indoor pool", "Bistro Le Sam & Bar 1608", "Fairmont Gold executive lounge", "Concierge & valet parking", "St. Lawrence River views", "Steps from Dufferin Terrace", "Fitness centre", "Pet-friendly rooms"],
    reviews: [
      { name: "Peter", rating: 5, date: "Jun 2026", text: "A beautiful historic property in a fantastic location near the old city, with friendly, attentive staff and everything within walking distance." },
      { name: "Janet", rating: 5, date: "Jun 2026", text: "Fantastic room, breakfast and staff. They celebrated our anniversary with complimentary chocolates and prosecco." },
      { name: "Alyson", rating: 5, date: "May 2026", text: "A wonderful Mother's Day stay with St. Lawrence River views. The staff were thoughtful and the breakfast delicious." },
      { name: "Savvyrai", rating: 5, date: "Jun 2026", text: "Excellent location, comfortable rooms and strong service, with the Gold Lounge a standout. The bathroom was small and the WiFi a little weak." },
      { name: "Fenton", rating: 5, date: "May 2026", text: "Classy from the entrance, with a spacious room, stunning views and top-notch spa services. Only gripe was the small TV." },
      { name: "Steve", rating: 4, date: "Jun 2026", text: "A must-stay location with lovely valet and staff and an exceptional pool and hot tub — just be ready for premium pricing." },
      { name: "Christina", rating: 3, date: "Jul 2026", text: "I wanted to love this fairytale hotel, but the room didn't feel five-star, the bathroom was small, and the lobby was crowded with non-guests." },
      { name: "Mecene", rating: 3, date: "Jul 2026", text: "The iconic interior impressed, but our 16m² room was small with loud, old-fashioned air-con and a motion-sensor minibar that triggered charges." },
      { name: "Sonya", rating: 3, date: "Jun 2026", text: "Beautiful exterior, but let down by no bellhop help, a tiny room, and event noise that carried until 1:30 AM." },
      { name: "Stephen", rating: 2, date: "Jun 2026", text: "A beautiful hotel with a great bar and friendly staff, but the WiFi registration requirement felt unreasonable given the rate." }
    ]
  },
  "banff-springs": {
    name: "Fairmont Banff Springs",
    slug: "banff-springs",
    city: "Banff", province: "Alberta",
    stars: 5, guestRating: 4.4, reviewCount: 9900,
    address: "405 Spray Avenue, Banff, AB T1L 1J4, Canada",
    phone: "+1 403-762-2211",
    lat: 51.16444, lng: -115.56194,
    casino: false,
    img: "assets/img/banff-springs.jpg",
    author: "evelyn-marchetti",
    tags: ["Castle in the Rockies", "National Historic Site", "Golf & Spa"],
    short: "A châteauesque 'castle in the Rockies' inside Banff National Park — a National Historic Site wrapped in mountains, with a storied spa and a 27-hole golf course.",
    amenities: ["Willow Stream Spa", "Indoor & heated outdoor pools", "27-hole championship golf", "Multiple restaurants & afternoon tea", "Fairmont Gold floor & lounge", "Guided mountain excursions", "Kids' club & bowling", "Wedding & event facilities"],
    reviews: [
      { name: "Martin", rating: 5, date: "Jul 2026", text: "We raised a concern about our first room and staff immediately moved us to a better suite. Genuinely impressed by how responsive management was." },
      { name: "Peter", rating: 5, date: "Jul 2026", text: "Exceptional staff from the front desk to the spa, plus a great Fairmont Gold lounge and a wonderful tour guide who made the stay memorable." },
      { name: "Rebecca", rating: 5, date: "Jul 2026", text: "The guided excursions to Lake Louise and Moraine Lake were the highlight — I can't recommend the tour guide enough." },
      { name: "Seema", rating: 5, date: "Jul 2026", text: "A family favourite thanks to the kids' club, bowling and the gorgeous outdoor pool. Great for young children." },
      { name: "Joanne", rating: 5, date: "Jul 2026", text: "Loved the Italian restaurant and the stunning river and mountain views, though the bathroom was very small." },
      { name: "Sue", rating: 5, date: "Jun 2026", text: "Remarkable, attentive staff and a knowledgeable guide. The historic charm and mountain views more than outweigh the smaller rooms." },
      { name: "MN", rating: 4, date: "Jun 2026", text: "Spectacular views, but I was disappointed by the indoor pool conditions and a rather mediocre afternoon tea." },
      { name: "jbliv", rating: 3, date: "Jun 2026", text: "The tiniest bathroom I've seen in a luxury hotel — but the Fairmont Gold service, dining and spa were outstanding." },
      { name: "Jagath", rating: 1, date: "May 2026", text: "Serious cleanliness problems with the bathrooms in more than one room and poor communication. Fell short of other Fairmonts." },
      { name: "Basil", rating: 4, date: "Jun 2025", text: "Rooms and bathrooms are small and the décor a little dated, and restaurants are pricey — but still a memorable stay." }
    ]
  },
  "royal-york": {
    name: "The Fairmont Royal York",
    slug: "royal-york",
    city: "Toronto", province: "Ontario",
    stars: 4, guestRating: 4.2, reviewCount: 2300,
    address: "100 Front Street West, Toronto, ON M5J 1E3, Canada",
    phone: "+1 416-368-2511",
    lat: 43.646133, lng: -79.381561,
    casino: false,
    img: "assets/img/royal-york.jpg",
    author: "priya-balakrishnan",
    tags: ["Downtown Landmark", "Across from Union Station", "Rooftop Garden"],
    short: "A 1929 château-style grande dame in the heart of downtown, directly across from Union Station and connected to the PATH — heritage grandeur wired for the modern traveller.",
    amenities: ["Full-service spa & indoor pool", "Multiple restaurants & afternoon tea", "Rooftop garden & beehives", "Direct link to Union Station & PATH", "24-hour room service", "Extensive event & meeting space", "Pet-friendly", "Valet parking"],
    reviews: [
      { name: "Deane", rating: 5, date: "Jul 2026", text: "Felt at home, as always. Top-notch staff and facilities — special praise for a team member named Joyce." },
      { name: "Diego", rating: 5, date: "Jul 2026", text: "Spacious, comfortable rooms and consistently friendly staff. I keep coming back." },
      { name: "Herc", rating: 5, date: "May 2026", text: "Prime location, excellent gym and pool, spotless spacious rooms, and outstanding hospitality including a surprise upgrade." },
      { name: "Rob", rating: 5, date: "Jul 2026", text: "Well-organised rooms with thoughtful attention to detail — right down to how they arranged my personal items." },
      { name: "Tim", rating: 5, date: "Jul 2026", text: "The room was immaculately cleaned every single day. Excellent housekeeping." },
      { name: "A Verified Guest", rating: 5, date: "Jul 2026", text: "Perfect location across from Union Station with stunning CN Tower views and a warm, welcoming front desk." },
      { name: "unsocialite", rating: 3, date: "Jun 2026", text: "Central location, but the atmosphere felt chaotic — dark, cavernous hallways, keycard elevator hassles, and rooms that need modernising." },
      { name: "K.N.", rating: 2, date: "Jun 2026", text: "Overpriced for the value. I disliked the mandatory minibar rental fee and the confusing keycard elevator access." },
      { name: "Michael", rating: 1, date: "Jun 2026", text: "Accessibility fell short of what was advertised — wheelchair access routed through service elevators and a cramped bathroom." },
      { name: "Sukaina", rating: 1, date: "May 2026", text: "Felt nickel-and-dimed with charges for every request, plus a frustrating minibar billing dispute that took days to resolve." }
    ]
  }
};

/* Order hotels appear on the homepage */
const HOTEL_ORDER = ["chateau-frontenac", "banff-springs", "fallsview", "royal-york", "river-rock"];
