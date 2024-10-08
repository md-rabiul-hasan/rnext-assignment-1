// data.js
const features = [
    {
      title: "Premium Property Listings",
      paragraph: "Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.",
      button_text: "Learn More",
      icon: "/assets/images/svg/feature-1.svg"  // Path to your SVG file
    },
    {
      title: "Personalized Property Matching",
      paragraph: "Our advanced matching system pairs you with properties that align with your specific needs and desires.",
      button_text: "Learn More",
      icon: "/assets/images/svg/feature-2.svg"  // Path to your SVG file
    },
    {
      title: "Expert Guidance and Support",
      paragraph: "Benefit from the expertise of our dedicated team of real estate professionals.",
      button_text: "Learn More",
      icon: "/assets/images/svg/feature-3.svg"  // Path to your SVG file
    },
    {
      title: "Virtual Tours",
      paragraph: "Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.",
      button_text: "Learn More",
      icon: "/assets/images/svg/feature-4.svg"  // Path to your SVG file
    },
];


const properties = [
    {
      id: 1,
      title: "Modern Design Villa",
      price: "$3000.00",
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
    },
    {
      id: 2,
      title: "Luxury City Apartment",
      price: "$2500.00",
      bedrooms: 2,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Cozy Country House",
      price: "$1800.00",
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1498373419901-52eba931dc4f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "Charming Beachfront",
      price: "$3500.00",
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1483097365279-e8acd3bf9f18?q=80&w=1622&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "Spacious Family Home",
      price: "$2900.00",
      bedrooms: 5,
      bathrooms: 4,
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      title: "Stylish Studio Apartment",
      price: "$1500.00",
      bedrooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const faqs = [
    {
      question: "Is TailGrids Well-documented?",
      answer: "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content UI/UX strategy that we do writing your first blog post.",
    },
    {
      question: "What is the pricing model?",
      answer: "Our pricing model is flexible. We offer monthly subscriptions as well as one-time payment options.",
    },
    {
      question: "Can I customize the components?",
      answer: "Yes, TailGrids components are highly customizable to fit your project needs.",
    },
    {
      question: "Do you offer support for integration?",
      answer: "Absolutely! Our support team is here to assist you with any integration queries you may have, ensuring a smooth experience.",
    },
];

const teams = [
    {
      image: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Melissa Tatcher",
      designation: "Marketing Expert",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        name: "Stuard Ferrel",
        designation: "Digital Marketer",
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1689531953275-a5cfcc458931?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Eva Hudson",
        designation: "Creative Designer",
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1689708385255-fe5ee98674ca?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Jackie Sanders",
        designation: "Founder of Facebook",
      },
];
  
const footer = {
  subtitle: "We create digital experiences for brands and companies by using technology.",
  about_us_links: [
    { title: "Home" },
    { title: "Features" },
    { title: "About" },
  ],
  feature_links: [
    { title: "How it works" },
    { title: "Privacy policy" },
    { title: "Terms of Service" },
    { title: "Refund policy" },
  ],
  latest_blogs: [
    { title: "I think really important to design with...", image: "/assets/images/blog/blog-footer-01.jpg" },
    { title: "Recognizing the need is the primary...", image: "/assets/images/blog/blog-footer-02.jpg" },
  ],
};

export { faqs, features, footer, properties, teams };

