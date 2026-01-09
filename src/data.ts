export const data = {
  spaces: [
    {
      id: 1,
      spaceName: "Shared Desk",
      perks: [
        "10 pages printing",
        "1 coffee",
        "1 bottle of water",
        "shared space",
        "free wifi",
      ],
      price: 500,
    },
    {
      id: 1,
      spaceName: "",
      perks: [
        "unlimited printing",
        "1 coffee",
        "open desk access",
        "fully furnished office",
        "free wifi",
      ],
      price: 1000,
    },
    {
      id: 3,
      spaceName: "Dedicated Desk",
      perks: [
        "10 pages printing",
        "1 coffee",
        "1 bottle of water",
        "dedicated desk",
        "free wifi",
      ],
      price: 800,
    },
  ],
  membership: [
    {
      id: 1,
      planType: "Bronze",
      price: 7000,
      spacs: [
        "shred desk access",
        "bookable meeting rooms",
        "1 coffee & water/day",
        "printing (10 pages/day)",
        "locker & storage",
        "10% off event access",
        "1 free guest passes/month",
        "high-speed wi-fi",
      ],
    },
    {
      id: 2,
      planType: "Silver",
      price: 8500,
      spacs: [
        "dedicated desk",
        "20 hours meeting room access",
        "2 coffee & water/day",
        "printing (50 pages/day)",
        "locker & storage",
        "50% off event access",
        "1 free guest passes/month",
        "high-speed wi-fi",
      ],
    },
    {
      id: 3,
      planType: "Gold",
      price: 20000,
      spacs: [
        "private office access",
        "60 hours meeting room hours",
        "2 coffee & water/day",
        "printing (unlimited)",
        "locker & storage",
        "free event access",
        "2 free guest passes/month",
        "high-speed wi-fi",
      ],
    },
  ],
  testimonials: [
    {
      id: 1,
      imgSrc: "",
      freelancerName: "Leul Mekonen",
      role: "Freelancer",
      message:
        "Deskore completely changed how i work. I used to bounce between cafes, but now I have a space that feels like mine with better coffee and zero distractions.",
    },
    {
      id: 1,
      imgSrc: "",
      freelancerName: "Samuel T.",
      role: "Co-founder, BTech",
      message:
        "Our Startup team started with hot desks, then upgraded to a private office once we grew. The flexibility and support have been incrediblle.",
    },
    {
      id: 1,
      imgSrc: "",
      freelancerName: "Beti Tesfaye",
      role: "Freelancer",
      message:
        "The vibe at Deskora is just right produvtive, but not stiff. i've met other creatives, joined events, and even landed two new clients here",
    },
  ],
  blogs: [
    {
      id: 1,
      author: "osman",
      imgsrc: "../src/assets/images/blogs_1.jpg",
      createdat: "Sep 27,2025",
      title: "Why Coworking Works: 5 Surprising Productivity Benefits",
      content:
        "From better focus to unexpected collaborations, coworking spaces are changing how we work...",
    },
    {
      id: 2,
      author: "admin",
      imgsrc: "../src/assets/images/blogs_2.jpg",
      createdat: "Oct 12,2025",
      title: "Designing for Focus: What Makes a Workspace Truly Inspiring?",
      content:
        "Lighting, layout, energy there’s more to a great workspace than desks and chairs. In this post....",
    },
    {
      id: 3,
      author: "salim",
      imgsrc: "../src/assets/images/blogs_3.jpg",
      createdat: "Jan 6,2026",
      title: "Membership vs. Day Pass: Which Plan Fits Your Work Style?",
      content:
        "Whether you're a digital nomad, a growing startup, or a remote worker craving community, we break ...",
    },
  ],
};
