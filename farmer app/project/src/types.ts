export interface Location {
  lat: number;
  lng: number;
}

export interface Market {
  id: string;
  name: string;
  description: string;
  address: string;
  image: string;
  hours: string;
  distance: number;
  vendors: string[];
  location: Location;
}

export interface Vendor {
  id: string;
  name: string;
  description: string;
  products: Product[];
  marketId: string;
  profileImage: string;
  contactInfo: {
    phone: string;
    email: string;
  };
  rating: number;
  location: Location;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  inStock: boolean;
  category: string;
  minimumOrder: number;
  bulkPricing?: {
    quantity: number;
    price: number;
  }[];
}

export interface Farmer {
  id: string;
  name: string;
  profileImage: string;
  description: string;
  location: string;
  products: Product[];
  certifications: string[];
  contactInfo: {
    phone: string;
    email: string;
  };
  rating: number;
  availableForBulkSale: boolean;
  coordinates: Location;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  requirements: BuyingRequirement[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  verificationStatus: 'verified' | 'pending' | 'unverified';
  location: Location;
}

export interface BuyingRequirement {
  id: string;
  productName: string;
  quantity: number;
  unit: string;
  frequency: 'one-time' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  priceRange: {
    min: number;
    max: number;
  };
  qualityRequirements: string[];
  deadline?: Date;
}

export type UserRole = 'farmer' | 'vendor' | 'company' | 'consumer';

export interface User {
  id: string;
  role: UserRole;
  name: string;
  email: string;
  profileImage: string;
  dateJoined: Date;
  farmerId?: string;
  vendorId?: string;
  companyId?: string;
}