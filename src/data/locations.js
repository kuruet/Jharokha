const locations = [
  {
    id: 1,
    name: "Hundru Falls",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    description:
      "One of the highest waterfalls in Jharkhand, surrounded by lush greenery and rocky terrain.",
    category: "Waterfall",

    detailedDescription:
      "Hundru Falls is a breathtaking cascade on the Subarnarekha River, plunging nearly 98 metres into a dramatic gorge carved over millennia. The surrounding forest is dense with sal and mahua trees, creating a cool, mist-laden atmosphere even in the warmer months. During the monsoon season, the falls swell into a roaring curtain of white water that can be heard long before it comes into view — a truly humbling spectacle of raw natural power.",

    highlights: [
      "98-metre dramatic plunge waterfall",
      "Monsoon season surge — most spectacular in August",
      "Natural rock pools ideal for wading",
      "Surrounded by dense, birdsong-filled forest",
      "One of Jharkhand's most photographed natural landmarks",
    ],

    bestTimeToVisit: "July to February",

    travelTips: [
      "Visit early morning to avoid weekend crowds and catch the mist rising off the falls",
      "Wear non-slip footwear — the rocky descent can be slippery, especially after rain",
      "Carry sufficient drinking water and light snacks as vendors are limited beyond the entry point",
      "Swimming in the main plunge pool is restricted; stick to designated shallow areas",
    ],

    rating: 4.6,
    totalReviews: 214,
  },
  {
    id: 2,
    name: "Dassam Falls",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    description:
      "A stunning waterfall on the Kanchi River, known for its powerful flow and scenic beauty.",
    category: "Waterfall",

    detailedDescription:
      "Dassam Falls cascades 44 metres down a wide sandstone face on the Kanchi River, just 40 kilometres from Ranchi. Unlike narrower falls, Dassam spreads across a broad frontage that makes it feel like a living wall of water, particularly impressive after the monsoon rains replenish the river. The flat rocky banks beside the falls are a favourite gathering spot for families and nature enthusiasts, offering panoramic views and the constant therapeutic sound of rushing water.",

    highlights: [
      "44-metre wide-face cascade on the Kanchi River",
      "Flat rocky banks perfect for picnics and photography",
      "Accessible year-round with varying intensities",
      "Forested surroundings with rich birdlife",
      "Only 40 km from Ranchi — ideal for a day trip",
    ],

    bestTimeToVisit: "August to November",

    travelTips: [
      "Arrive before 9 AM on weekends to secure good viewpoints before crowds gather",
      "Do not enter the water during or immediately after heavy rainfall — currents can be deceptively strong",
      "A light jacket is advisable even in summer as the spray creates a persistent cool breeze",
      "The road to the falls is narrow — two-wheelers and small cars are more practical than larger vehicles",
    ],

    rating: 4.4,
    totalReviews: 178,
  },
  {
    id: 3,
    name: "Netarhat Hills",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    description:
      "Known as the Queen of Chotanagpur, famous for sunrise and sunset views.",
    category: "Hills",

    detailedDescription:
      "Perched at an elevation of 1,128 metres in the Latehar district, Netarhat is Jharkhand's most celebrated hill station — a title that scarcely does justice to its quiet grandeur. The plateau unfurls across pine-scented ridgelines and meadows, with the sunrise at Magnolia Point and the sunset at Sunset Point considered unmissable spectacles that draw visitors from across eastern India. Beyond its legendary skies, Netarhat harbours serene waterfalls, colonial-era architecture, and a pace of life that feels deliberately unhurried.",

    highlights: [
      "Sunrise at Magnolia Point — among the finest in eastern India",
      "Sunset Point offering 270-degree panoramic views",
      "Cool climate year-round, peaking in pleasant winters",
      "Dense pine and sal forests ideal for trekking",
      "Historic Netarhat Residential School campus with colonial architecture",
    ],

    bestTimeToVisit: "October to March",

    travelTips: [
      "Book accommodation well in advance during October–December as the hill station fills up quickly",
      "Reach Magnolia Point at least 30 minutes before sunrise — the light changes rapidly and is short-lived",
      "Carry warm layers even in October; temperatures drop sharply after sundown",
      "Hire a local guide for forest trails — paths can be unmarked and easy to lose in dense foliage",
    ],

    rating: 4.7,
    totalReviews: 296,
  },
  {
    id: 4,
    name: "Parasnath Hill",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    description:
      "A sacred pilgrimage site and the highest peak in Jharkhand.",
    category: "Religious",

    detailedDescription:
      "Rising to 1,365 metres, Parasnath Hill — known to Jains as Shikharji — is both the highest summit in Jharkhand and one of the holiest pilgrimage sites in the Jain tradition. The mountain is crowned by 24 Jain temples, each dedicated to a Tirthankara, connected by a 27-kilometre circumambulation route that pilgrims walk barefoot in a spirit of devotion and reflection. Even for non-pilgrims, the trek through forested slopes, past ancient shrines and sweeping ridge views, is a profoundly moving experience.",

    highlights: [
      "Highest peak in Jharkhand at 1,365 metres",
      "24 ancient Jain temples at the summit",
      "27 km pilgrim circumambulation trail",
      "Rich forest ecosystem with leopards and rare birds",
      "Deeply atmospheric at dawn when temple bells echo across the valley",
    ],

    bestTimeToVisit: "October to March",

    travelTips: [
      "Footwear is not permitted on the sacred trail — bring clean socks and be prepared for rough terrain underfoot",
      "The full trail takes 8–10 hours; start before 5 AM to complete it comfortably within daylight",
      "Non-vegetarian food and alcohol are strictly prohibited on the hill out of respect for religious sentiments",
      "Palanquin services are available for those unable to walk the full distance",
    ],

    rating: 4.8,
    totalReviews: 341,
  },
  {
    id: 5,
    name: "Jonha Falls",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    description:
      "Also known as Gautamdhara, a peaceful waterfall ideal for nature lovers.",
    category: "Waterfall",

    detailedDescription:
      "Jonha Falls — locally revered as Gautamdhara — is a 17-metre cascade on the Raru River, roughly 45 kilometres from Ranchi. A small temple dedicated to Lord Buddha sits near the base of the falls, lending the site a meditative, almost sacred quality that sets it apart from more tourist-heavy destinations. The descent to the waterfall involves a series of stone steps through layered forest, and the sound of the falls gradually intensifying as you approach creates a natural sense of arrival and reward.",

    highlights: [
      "Ancient Buddha temple at the base of the falls",
      "Peaceful, less commercialised atmosphere",
      "Layered stone-step descent through pristine forest",
      "Ideal for quiet reflection and nature photography",
      "Adjacent Rajrappa temple complex worth combining in a single trip",
    ],

    bestTimeToVisit: "September to February",

    travelTips: [
      "The stone steps can be extremely slippery in monsoon — descend slowly and use handrails where provided",
      "Respect the religious sanctity of the site; maintain quiet near the temple area",
      "Carry your own food and water as facilities near the falls are very limited",
      "Combine with a visit to Rajrappa Falls nearby to make the most of the journey",
    ],

    rating: 4.3,
    totalReviews: 132,
  },
  {
    id: 6,
    name: "Ranchi Lake",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    description:
      "A calm and scenic lake in the heart of Ranchi, perfect for relaxation.",
    category: "Nature",

    detailedDescription:
      "Ranchi Lake is a man-made reservoir at the very centre of the city, built in 1842 and now one of the most beloved urban green spaces in Jharkhand. The lake is flanked by a well-maintained promenade lined with trees and benches, while a small island in its centre — accessible by rowboat — houses a Shiva temple that draws both devotees and curious visitors. At dusk, the water mirrors the changing sky in shades of amber and rose, turning an ordinary evening into something quietly extraordinary.",

    highlights: [
      "Historic 1842 reservoir in the heart of the city",
      "Island Shiva temple accessible by rowboat",
      "Scenic promenade ideal for morning and evening walks",
      "Boating facilities available throughout the day",
      "Spectacular reflection views at golden hour",
    ],

    bestTimeToVisit: "November to February",

    travelTips: [
      "Visit at sunset for the best light and a noticeably calmer crowd than the afternoon rush",
      "Boating tickets sell out quickly on weekends — arrive early or book at the counter as soon as you reach",
      "The promenade is excellent for jogging in the early morning before the city wakes up",
      "Keep the lake surroundings clean — litter disposal is a known issue and responsible tourism makes a real difference here",
    ],

    rating: 4.2,
    totalReviews: 389,
  },
];

export default locations;