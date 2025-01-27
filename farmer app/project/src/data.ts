import { Market, Vendor, Product, Farmer, Company, BuyingRequirement, User } from './types';

export const markets: Market[] = [
  {
    id: '1',
    name: 'Downtown Farmers Market',
    description: 'A vibrant market featuring local produce, artisanal goods, and fresh flowers.',
    address: '123 Main Street, Downtown',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80',
    hours: 'Saturday 8AM - 2PM',
    distance: 0.8,
    vendors: ['1', '2'],
    location: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: '2',
    name: 'Riverside Market',
    description: 'Scenic market along the river with organic produce and local crafts.',
    address: '456 River Road',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80',
    hours: 'Sunday 9AM - 3PM',
    distance: 1.2,
    vendors: ['3'],
    location: { lat: 40.7589, lng: -73.9851 }
  },
  {
    id: '3',
    name: 'Mountain View Market',
    description: 'Fresh mountain produce and artisanal goods with a stunning view.',
    address: '789 Mountain Road',
    image: 'https://images.unsplash.com/photo-1573481078935-b9605167e06b?auto=format&fit=crop&q=80',
    hours: 'Saturday & Sunday 9AM - 4PM',
    distance: 2.5,
    vendors: ['4', '5'],
    location: { lat: 40.7829, lng: -73.9654 }
  }
];

export const vendors: Vendor[] = [
  {
    id: '1',
    name: 'Green Acres Farm',
    description: 'Organic vegetables and fruits',
    marketId: '1',
    profileImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80',
    contactInfo: {
      phone: '(555) 123-4567',
      email: 'contact@greenacres.com'
    },
    rating: 4.8,
    products: [
      {
        id: '1',
        name: 'Organic Tomatoes',
        price: 4.99,
        unit: 'lb',
        inStock: true,
        category: 'Vegetables',
        minimumOrder: 1,
        bulkPricing: [
          { quantity: 10, price: 3.99 },
          { quantity: 50, price: 2.99 }
        ]
      },
      {
        id: '2',
        name: 'Fresh Strawberries',
        price: 6.99,
        unit: 'basket',
        inStock: true,
        category: 'Fruits',
        minimumOrder: 1
      }
    ],
    location: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: '2',
    name: 'Sweet Valley Dairy',
    description: 'Local dairy products and eggs',
    marketId: '1',
    profileImage: 'https://images.unsplash.com/photo-1528505086635-4c69d5b2a5c7?auto=format&fit=crop&q=80',
    contactInfo: {
      phone: '(555) 987-6543',
      email: 'info@sweetvalley.com'
    },
    rating: 4.9,
    products: [
      {
        id: '3',
        name: 'Farm Fresh Eggs',
        price: 5.99,
        unit: 'dozen',
        inStock: true,
        category: 'Dairy',
        minimumOrder: 1
      }
    ],
    location: { lat: 40.7589, lng: -73.9851 }
  },
  {
    id: '3',
    name: 'Harvest Moon Organics',
    description: 'Seasonal organic produce and herbs',
    marketId: '2',
    profileImage: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80',
    contactInfo: {
      phone: '(555) 555-1234',
      email: 'contact@harvestmoon.com'
    },
    rating: 4.7,
    products: [
      {
        id: '4',
        name: 'Fresh Herbs Bundle',
        price: 3.99,
        unit: 'bundle',
        inStock: true,
        category: 'Herbs',
        minimumOrder: 1
      }
    ],
    location: { lat: 40.7829, lng: -73.9654 }
  }
];

export const farmers: Farmer[] = [
  {
    id: '1',
    name: 'John Smith',
    profileImage: 'https://images.unsplash.com/photo-1507103011901-e954d6ec0988?auto=format&fit=crop&q=80',
    description: 'Third-generation farmer specializing in organic vegetables and fruits.',
    location: 'Smith Family Farms, 789 County Road',
    products: [
      {
        id: '1',
        name: 'Organic Tomatoes',
        price: 3.99,
        unit: 'lb',
        inStock: true,
        category: 'Vegetables',
        minimumOrder: 100,
        bulkPricing: [
          { quantity: 500, price: 2.99 },
          { quantity: 1000, price: 2.49 }
        ]
      }
    ],
    certifications: ['USDA Organic', 'Non-GMO Project Verified'],
    contactInfo: {
      phone: '(555) 111-2222',
      email: 'john@smithfarms.com'
    },
    rating: 4.9,
    availableForBulkSale: true,
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: '2',
    name: 'Maria Rodriguez',
    profileImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80',
    description: 'Sustainable farming expert specializing in heirloom vegetables.',
    location: 'Rodriguez Family Farm, 456 Valley Road',
    products: [
      {
        id: '2',
        name: 'Heirloom Tomatoes',
        price: 5.99,
        unit: 'lb',
        inStock: true,
        category: 'Vegetables',
        minimumOrder: 50,
        bulkPricing: [
          { quantity: 200, price: 4.99 },
          { quantity: 500, price: 3.99 }
        ]
      }
    ],
    certifications: ['Certified Organic', 'Sustainable Agriculture'],
    contactInfo: {
      phone: '(555) 333-4444',
      email: 'maria@rodriguezfarm.com'
    },
    rating: 4.8,
    availableForBulkSale: true,
    coordinates: { lat: 40.7589, lng: -73.9851 }
  }
];

export const companies: Company[] = [
  {
    id: '1',
    name: 'Fresh Foods Co.',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80',
    description: 'Leading organic food distributor looking for local farm partners.',
    requirements: [
      {
        id: '1',
        productName: 'Organic Tomatoes',
        quantity: 1000,
        unit: 'lb',
        frequency: 'weekly',
        priceRange: {
          min: 2.00,
          max: 3.50
        },
        qualityRequirements: [
          'USDA Organic Certified',
          'Non-GMO',
          'Grade A Quality'
        ],
        deadline: new Date('2024-12-31')
      }
    ],
    contactInfo: {
      phone: '(555) 999-8888',
      email: 'procurement@freshfoods.com',
      website: 'www.freshfoods.com'
    },
    verificationStatus: 'verified',
    location: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: '2',
    name: 'Green Earth Markets',
    logo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80',
    description: 'Sustainable grocery chain seeking partnerships with local farmers.',
    requirements: [
      {
        id: '2',
        productName: 'Mixed Organic Vegetables',
        quantity: 2000,
        unit: 'lb',
        frequency: 'weekly',
        priceRange: {
          min: 1.50,
          max: 4.00
        },
        qualityRequirements: [
          'Organic Certified',
          'Locally Sourced',
          'Premium Quality'
        ],
        deadline: new Date('2024-11-30')
      }
    ],
    contactInfo: {
      phone: '(555) 777-6666',
      email: 'sourcing@greenearth.com',
      website: 'www.greenearthmarkets.com'
    },
    verificationStatus: 'verified',
    location: { lat: 40.7589, lng: -73.9851 }
  }
];

export const users: User[] = [
  {
    id: '1',
    role: 'farmer',
    name: 'John Smith',
    email: 'john@smithfarms.com',
    profileImage: 'https://images.unsplash.com/photo-1507103011901-e954d6ec0988?auto=format&fit=crop&q=80',
    dateJoined: new Date('2023-01-15'),
    farmerId: '1'
  },
  {
    id: '2',
    role: 'company',
    name: 'Sarah Johnson',
    email: 'sarah@freshfoods.com',
    profileImage: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80',
    dateJoined: new Date('2023-03-20'),
    companyId: '1'
  }
];