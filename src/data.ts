import type { Category, Deal } from './types';

export const CATEGORIES: Category[] = [
  { 
    label: "Mall & Retail", 
    emoji: "🛍️", 
    bg: "#3A1C71", 
    panel: "#4A2080",
    accent: "linear-gradient(137deg,#7C3AED,#C4B5FD,#EC4899)",
    stat: "200+ stores", 
    sub: "Offline discounts" 
  },
  { 
    label: "Food & Cafes", 
    emoji: "🍕", 
    bg: "#1A0A00", 
    panel: "#2A1500",
    accent: "linear-gradient(137deg,#F59E0B,#FDE68A,#EF4444)",
    stat: "150+ brands", 
    sub: "Dine-in & delivery" 
  },
  { 
    label: "Online Deals", 
    emoji: "💻", 
    bg: "#001A2C", 
    panel: "#002A40",
    accent: "linear-gradient(137deg,#06B6D4,#7DD3FC,#6366F1)",
    stat: "500+ websites", 
    sub: "Signup discounts" 
  },
  { 
    label: "Travel & Stay", 
    emoji: "✈️", 
    bg: "#0A1A00", 
    panel: "#102500",
    accent: "linear-gradient(137deg,#10B981,#6EE7B7,#3B82F6)",
    stat: "80+ services", 
    sub: "Transport & hotels" 
  },
];

export const DEALS: Deal[] = [
  // RETAIL
  { 
    brand: "Myntra", 
    category: "online", 
    discount: "30% OFF",
    desc: "On your first order with student signup.",
    type: "Online", 
    code: "STUDENT30",
    gradient: "linear-gradient(137deg,#FF3D77,#FFB1CE,#FF9D3C)", 
    isNew: true 
  },
  { 
    brand: "H&M", 
    category: "retail", 
    discount: "20% OFF",
    desc: "In-store every day with student ID.",
    type: "In-store", 
    code: "Show ID",
    gradient: "linear-gradient(137deg,#FF3D77,#FFB1CE,#FF9D3C)", 
    isNew: false 
  },
  { 
    brand: "Westside", 
    category: "retail", 
    discount: "15% OFF",
    desc: "On full-price items in-store.",
    type: "In-store", 
    code: "Show ID",
    gradient: "linear-gradient(137deg,#FF3D77,#FFB1CE,#FF9D3C)", 
    isNew: false 
  },
  { 
    brand: "Lenskart", 
    category: "retail", 
    discount: "25% OFF",
    desc: "On eyewear, frames and lenses.",
    type: "Online + In-store", 
    code: "LENSTUDENT",
    gradient: "linear-gradient(137deg,#7C3AED,#C4B5FD,#EC4899)", 
    isNew: true 
  },

  // FOOD
  { 
    brand: "Zomato", 
    category: "food", 
    discount: "₹100 OFF",
    desc: "On orders above ₹299, every week.",
    type: "Online", 
    code: "ZOMSTUDENT",
    gradient: "linear-gradient(137deg,#F59E0B,#FDE68A,#EF4444)", 
    isNew: true 
  },
  { 
    brand: "Swiggy", 
    category: "food", 
    discount: "Free Delivery",
    desc: "Unlimited free delivery for 3 months.",
    type: "Online", 
    code: "SWIGSTUD",
    gradient: "linear-gradient(137deg,#F59E0B,#FDE68A,#EF4444)", 
    isNew: false 
  },
  { 
    brand: "McDonald's", 
    category: "food", 
    discount: "10% OFF",
    desc: "On any order at counter with ID.",
    type: "In-store", 
    code: "Show ID",
    gradient: "linear-gradient(137deg,#F59E0B,#FDE68A,#EF4444)", 
    isNew: false 
  },
  { 
    brand: "Starbucks", 
    category: "food", 
    discount: "15% OFF",
    desc: "On any handcrafted beverage.",
    type: "In-store", 
    code: "Show ID",
    gradient: "linear-gradient(137deg,#10B981,#6EE7B7,#3B82F6)", 
    isNew: true 
  },

  // ONLINE
  { 
    brand: "Spotify", 
    category: "online", 
    discount: "50% OFF",
    desc: "Premium plan for students — ₹59/month.",
    type: "Online", 
    code: "SPOTISTUDENT",
    gradient: "linear-gradient(137deg,#06B6D4,#7DD3FC,#6366F1)", 
    isNew: false 
  },
  { 
    brand: "Notion", 
    category: "online", 
    discount: "FREE",
    desc: "Notion Plus plan, completely free for students.",
    type: "Online", 
    code: "EDU email",
    gradient: "linear-gradient(137deg,#06B6D4,#7DD3FC,#6366F1)", 
    isNew: false 
  },
  { 
    brand: "Canva", 
    category: "online", 
    discount: "FREE Pro",
    desc: "Canva Pro free for 1 year with student email.",
    type: "Online", 
    code: "EDU email",
    gradient: "linear-gradient(137deg,#06B6D4,#7DD3FC,#6366F1)", 
    isNew: true 
  },
  { 
    brand: "GitHub", 
    category: "online", 
    discount: "FREE",
    desc: "GitHub Pro + Copilot free via GitHub Education.",
    type: "Online", 
    code: "EDU email",
    gradient: "linear-gradient(137deg,#4361EE,#E0AEFF,#F72585)", 
    isNew: false 
  },

  // TRAVEL
  { 
    brand: "IRCTC", 
    category: "travel", 
    discount: "10–25% OFF",
    desc: "Student concession on train tickets.",
    type: "In-person", 
    code: "Show ID",
    gradient: "linear-gradient(137deg,#10B981,#6EE7B7,#3B82F6)", 
    isNew: false 
  },
  { 
    brand: "RedBus", 
    category: "travel", 
    discount: "15% OFF",
    desc: "On bus bookings with student promo.",
    type: "Online", 
    code: "REDSTUDENT",
    gradient: "linear-gradient(137deg,#10B981,#6EE7B7,#3B82F6)", 
    isNew: true 
  },

  // ENTERTAINMENT
  { 
    brand: "BookMyShow", 
    category: "entertainment", 
    discount: "BOGO",
    desc: "Buy 1 Get 1 movie ticket on weekdays.",
    type: "Online", 
    code: "BMSSTUDENT",
    gradient: "linear-gradient(137deg,#4361EE,#E0AEFF,#F72585)", 
    isNew: true 
  },
  { 
    brand: "INOX / PVR", 
    category: "entertainment", 
    discount: "20% OFF",
    desc: "On all shows with student ID at counter.",
    type: "In-store", 
    code: "Show ID",
    gradient: "linear-gradient(137deg,#4361EE,#E0AEFF,#F72585)", 
    isNew: false 
  },
];
