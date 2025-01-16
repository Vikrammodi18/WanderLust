const places = [
    {
      title: "Splits Villa",
      description: "Swimming pool",
      image: "https://images.unsplash.com/photo-1736435443725-6d726a127e0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 20000,
      location: "Goa",
      country: "India"
    },
    {
      title: "Beachside Haven",
      description: "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=1830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 15000,
      location: "Maldives",
      country: "Maldives"
    },
    {
      title: "Mountain Retreat",
      description: "Breathtaking mountain view",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 18000,
      location: "Manali",
      country: "India"
    },
    {
      title: "Urban Escape",
      description: "Luxurious cityscape",
      image: "https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 25000,
      location: "Dubai",
      country: "UAE"
    },
    {
      title: "Jungle Lodge",
      description: "Nature at its best",
      image: "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=1830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 22000,
      location: "Amazon Rainforest",
      country: "Brazil"
    },
    {
      title: "Lakeview Paradise",
      description: "Serene lakeside experience",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 17000,
      location: "Nainital",
      country: "India"
    },
    {
      title: "Safari Adventure",
      description: "Exotic wildlife",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 30000,
      location: "Serengeti",
      country: "Tanzania"
    },
    {
      title: "Tropical Bliss",
      description: "Palm-fringed paradise",
      image: "https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 16000,
      location: "Phuket",
      country: "Thailand"
    },
    {
      title: "Desert Oasis",
      description: "Majestic dunes and luxury",
      image: "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=1830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 28000,
      location: "Sahara",
      country: "Morocco"
    },
    {
      title: "Island Escape",
      description: "Secluded beaches",
      image: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 23000,
      location: "Bora Bora",
      country: "French Polynesia"
    },
    {
        title: "Hilltop Villa",
        description: "Panoramic hill view",
        image: "https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 19000,
        location: "Ooty",
        country: "India"
      },
      {
        title: "Countryside Cottage",
        description: "Peaceful rural retreat",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 14000,
        location: "Kent",
        country: "England"
      },
      {
        title: "Oceanfront Condo",
        description: "Stunning ocean view",
        image: "https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 27000,
        location: "Miami",
        country: "USA"
      },
      {
        title: "Rainforest Resort",
        description: "Tropical jungle stay",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 24000,
        location: "Kerala",
        country: "India"
      },
      {
        title: "Alpine Lodge",
        description: "Snowy mountain retreat",
        image: "https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 25000,
        location: "Swiss Alps",
        country: "Switzerland"
      },
      {
        title: "Cultural Retreat",
        description: "Heritage architecture",
        image: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 20000,
        location: "Jaipur",
        country: "India"
      },
      {
        title: "Vineyard Escape",
        description: "Lush vineyards and wine",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 30000,
        location: "Napa Valley",
        country: "USA"
      },
      {
        title: "Forest Getaway",
        description: "Cabin in the woods",
        image: "https://images.unsplash.com/photo-1721989518229-3e84837fc398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 12000,
        location: "Ranikhet",
        country: "India"
      },
      {
        title: "Luxury Igloo",
        description: "Ice and luxury",
        image: "https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 35000,
        location: "Lapland",
        country: "Finland"
      },
      {
        title: "Island Hut",
        description: "Traditional stilt huts",
        image: "https://plus.unsplash.com/premium_photo-1673014202349-38687dd47f94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 17000,
        location: "Bali",
        country: "Indonesia"
      },
      {
        title: "Historic Palace Stay",
        description: "Live like royalty",
        image: "https://images.unsplash.com/photo-1721989518229-3e84837fc398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 32000,
        location: "Udaipur",
        country: "India"
      },
      {
        title: "Cave Hotel",
        description: "Unique rocky interiors",
        image: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 18000,
        location: "Cappadocia",
        country: "Turkey"
      },
      {
        title: "Lake House",
        description: "Private lake access",
        image: "https://images.unsplash.com/photo-1721989518229-3e84837fc398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 22000,
        location: "Lake Tahoe",
        country: "USA"
      },
      {
        title: "Riverfront Chalet",
        description: "Crystal-clear riverside",
        image: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 18000,
        location: "Rishikesh",
        country: "India"
      },
      {
        title: "Eco Village",
        description: "Sustainable tourism",
        image: "https://images.unsplash.com/photo-1702817727742-d5d9f092b709?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 21000,
        location: "Costa Rica",
        country: "Costa Rica"
      },
      {
        title: "Cliffside Resort",
        description: "Stunning cliff views",
        image: "https://images.unsplash.com/photo-1685648628650-63740d39bffc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 28000,
        location: "Santorini",
        country: "Greece"
      },
      {
        title: "Luxury Yacht Stay",
        description: "Ocean luxury experience",
        image: "https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40000,
        location: "Monaco",
        country: "Monaco"
      },
      {
        title: "Treehouse Retreat",
        description: "Live among treetops",
        image: "https://images.unsplash.com/photo-1702817727742-d5d9f092b709?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 20000,
        location: "Munnar",
        country: "India"
      },
      {
        title: "Artistic Loft",
        description: "Modern urban loft",
        image: "https://plus.unsplash.com/premium_photo-1673014202349-38687dd47f94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 27000,
        location: "New York",
        country: "USA"
      },
      {
        title: "Mediterranean Getaway",
        description: "Sea breeze and sun",
        image: "https://images.unsplash.com/photo-1685648628650-63740d39bffc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 29000,
        location: "Ibiza",
        country: "Spain"
      }
  ];
module.exports = {data:places}  