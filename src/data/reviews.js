const reviews = {
  1: [
    {
      id: 100101,
      name: "Rahul Sharma",
      rating: 5,
      comment: "Absolutely breathtaking — the falls were roaring during our August visit. One of the best experiences I've had in Jharkhand.",
      date: "2025-08-14",
    },
    {
      id: 100102,
      name: "Sneha Mishra",
      rating: 4,
      comment: "Gorgeous waterfall with a wonderful forest trail leading up to it. Carry good footwear — the rocks near the base are slippery.",
      date: "2025-06-22",
    },
    {
      id: 100103,
      name: "Arjun Tiwari",
      rating: 5,
      comment: "The mist from the falls kept us cool the entire time. Reached early morning and practically had the place to ourselves.",
      date: "2025-04-10",
    },
    {
      id: 100104,
      name: "Pooja Agarwal",
      rating: 4,
      comment: "Very scenic and worth the drive from Ranchi. The natural pool at the base is lovely but don't expect any facilities nearby.",
      date: "2025-02-18",
    },
    {
      id: 100105,
      name: "Vikram Nair",
      rating: 3,
      comment: "Beautiful spot but the path down is quite steep and can be exhausting. Better suited for those comfortable with rough terrain.",
      date: "2024-12-30",
    },
  ],

  2: [
    {
      id: 100201,
      name: "Divya Rao",
      rating: 5,
      comment: "Dassam Falls is unlike anything I've seen — the width of the falls is staggering and the sound is something you feel in your chest.",
      date: "2025-09-03",
    },
    {
      id: 100202,
      name: "Karan Gupta",
      rating: 4,
      comment: "Perfect day trip from Ranchi. The rocky banks give great vantage points and the kids absolutely loved it.",
      date: "2025-07-19",
    },
    {
      id: 100203,
      name: "Anjali Singh",
      rating: 4,
      comment: "We visited post-monsoon and the flow was spectacular. The area around the falls is clean and well maintained.",
      date: "2025-10-08",
    },
    {
      id: 100204,
      name: "Mohit Pandey",
      rating: 3,
      comment: "Lovely waterfall but the narrow road getting here was a bit stressful with a larger vehicle. Worth it once you arrive though.",
      date: "2025-01-25",
    },
  ],

  3: [
    {
      id: 100301,
      name: "Preeti Joshi",
      rating: 5,
      comment: "Netarhat is magical at sunrise. Standing at Magnolia Point watching the sky turn from deep violet to gold is something I'll never forget.",
      date: "2025-11-02",
    },
    {
      id: 100302,
      name: "Suresh Verma",
      rating: 5,
      comment: "The Queen of Chotanagpur lives up to its name completely. Cool weather, pine-scented air, and views that go on forever.",
      date: "2025-10-15",
    },
    {
      id: 100303,
      name: "Ritika Bose",
      rating: 4,
      comment: "A serene escape from city noise. The sunset from Sunset Point was absolutely worth the drive. Book accommodation early — it fills up fast.",
      date: "2025-03-28",
    },
    {
      id: 100304,
      name: "Aakash Mehta",
      rating: 4,
      comment: "We trekked through the pine forest early morning and it was incredibly peaceful. The temperature drop after sundown caught us off guard — carry layers.",
      date: "2024-12-05",
    },
    {
      id: 100305,
      name: "Nandita Kulkarni",
      rating: 5,
      comment: "One of the most underrated hill stations in eastern India. No crowds, clean air, and the most dramatic sunrises I've witnessed.",
      date: "2025-01-12",
    },
  ],

  4: [
    {
      id: 100401,
      name: "Ramesh Dubey",
      rating: 5,
      comment: "A deeply moving pilgrimage. Walking the circumambulation trail barefoot through the forest, surrounded by ancient shrines, is humbling beyond words.",
      date: "2025-02-20",
    },
    {
      id: 100402,
      name: "Sunita Jain",
      rating: 5,
      comment: "Sacred, serene, and truly awe-inspiring. The 24 temples at the summit are immaculately maintained and the valley views are extraordinary.",
      date: "2025-04-15",
    },
    {
      id: 100403,
      name: "Deepak Srivastava",
      rating: 4,
      comment: "The trail is long and demanding but deeply rewarding. Start well before dawn to complete it comfortably — we barely managed in time.",
      date: "2024-11-30",
    },
    {
      id: 100404,
      name: "Kavita Sharma",
      rating: 4,
      comment: "A must-visit for anyone interested in Jain heritage. The atmosphere at the temples during early morning is unlike anything else.",
      date: "2025-03-07",
    },
  ],

  5: [
    {
      id: 100501,
      name: "Nikhil Chatterjee",
      rating: 4,
      comment: "Jonha Falls is peaceful in a way that the more popular falls aren't. The Buddha temple at the base adds a contemplative quality to the whole visit.",
      date: "2025-05-18",
    },
    {
      id: 100502,
      name: "Swati Patel",
      rating: 4,
      comment: "A hidden gem near Ranchi. The forested descent is beautiful and the falls themselves are calming rather than dramatic — perfect for unwinding.",
      date: "2025-07-04",
    },
    {
      id: 100503,
      name: "Manish Tripathi",
      rating: 3,
      comment: "Nice waterfall but the steps can be quite treacherous in wet conditions. Worth visiting but go carefully and avoid post-rain visits.",
      date: "2024-09-22",
    },
  ],

  6: [
    {
      id: 100601,
      name: "Ananya Reddy",
      rating: 4,
      comment: "Ranchi Lake at golden hour is genuinely beautiful. The rowboat to the island temple was a lovely experience and the promenade walk felt very relaxed.",
      date: "2025-08-30",
    },
    {
      id: 100602,
      name: "Saurabh Kumar",
      rating: 3,
      comment: "A pleasant spot in the city for an evening walk. It gets crowded on weekends but the atmosphere is lively and the views across the water are nice.",
      date: "2025-06-11",
    },
    {
      id: 100603,
      name: "Meera Iyer",
      rating: 4,
      comment: "We came early morning for the jog and had the promenade almost to ourselves. The reflection of the sky on the water was absolutely stunning.",
      date: "2025-01-08",
    },
    {
      id: 100604,
      name: "Tarun Saxena",
      rating: 4,
      comment: "The island Shiva temple is a lovely touch — taking a rowboat out to it feels like a mini adventure right in the middle of the city.",
      date: "2024-12-19",
    },
    {
      id: 100605,
      name: "Priya Verma",
      rating: 3,
      comment: "Decent lake for a quick city break but the boating queues on weekends are long. Worth visiting on a weekday if your schedule allows.",
      date: "2025-02-27",
    },
  ],
};

export default reviews;