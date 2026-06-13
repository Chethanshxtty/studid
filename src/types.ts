export interface Category {
  label: string;
  emoji: string;
  bg: string;
  panel: string;
  accent: string;
  stat: string;
  sub: string;
}

export interface Deal {
  brand: string;
  category: string; // 'retail' | 'food' | 'online' | 'travel' | 'entertainment'
  discount: string;
  desc: string;
  type: string;
  code: string;
  gradient: string;
  isNew: boolean;
}

// Deal interface defines structure of a coupon item

// Category interface defines hero carousel items
