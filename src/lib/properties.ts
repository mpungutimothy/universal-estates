export interface BHKVariant {
  price: number;
  size_sqm: number;
  bathrooms: number;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  property_type: string;
  status: string;
  description: string;
  featured: boolean;
  featured_image: string;
  images: string[];
  amenities: string[];
  floor_plans: Record<string, never>;
  mortgage_eligible: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
  bhk_variants: Record<string, BHKVariant>;
  base_name: string;
  min_price: number;
  max_price: number;
}

export const properties: Property[] = [
  {
    id: "d1e5271f-c237-4c10-bf7e-9efcd2e65714",
    slug: "crane-heights-mbuya",
    name: "Crane Heights Mbuya",
    location: "Mbuya, Kampala",
    price: "168000000",
    bedrooms: 1,
    bathrooms: 1,
    property_type: "Apartment",
    status: "For Sale",
    description: "Modern apartment complex in the heart of Mbuya with excellent amenities and stunning city views. Available in 1, 2, and 3 bedroom configurations.",
    featured: true,
    featured_image: "properties/craneheights3.jpg",
    images: [
      "properties/craneheights1.jpg",
      "properties/craneheights2.jpg",
      "properties/craneheights4.jpg"
    ],
    amenities: [
      "Swimming Pool",
      "Gym",
      "24/7 Security",
      "Parking",
      "Backup Generator",
      "Water Supply"
    ],
    floor_plans: {},
    mortgage_eligible: true,
    sort_order: 1,
    created_at: "2026-02-01 16:19:21.005539+00",
    updated_at: "2026-02-01 16:19:21.005539+00",
    bhk_variants: {
      "1": {
        price: 168000000,
        size_sqm: 45,
        bathrooms: 1
      },
      "2": {
        price: 295000000,
        size_sqm: 75,
        bathrooms: 2
      },
      "3": {
        price: 353000000,
        size_sqm: 95,
        bathrooms: 2
      }
    },
    base_name: "Crane Heights Mbuya",
    min_price: 168000000,
    max_price: 353000000
  },
  {
    id: "7d5025ef-a132-43a4-9929-7c4828718a82",
    slug: "stork-elegance-ntinda",
    name: "Stork Elegance Ntinda",
    location: "Ntinda, Kampala",
    price: "175000000",
    bedrooms: 1,
    bathrooms: 1,
    property_type: "Apartment",
    status: "For Sale",
    description: "Elegant apartment complex in Ntinda with modern finishes and premium amenities. Available in 1, 2, and 3 bedroom configurations.",
    featured: true,
    featured_image: "properties/storkelegance4.jpg",
    images: [
      "properties/storkelegance5.jpg",
      "properties/storkelegance8.jpg",
      "properties/storkelegance2.jpg",
    ],
    amenities: [
      "Swimming Pool",
      "Gym",
      "24/7 Security",
      "Parking",
      "Playground",
      "CCTV"
    ],
    floor_plans: {},
    mortgage_eligible: true,
    sort_order: 2,
    created_at: "2026-02-01 16:19:21.005539+00",
    updated_at: "2026-02-01 16:19:21.005539+00",
    bhk_variants: {
      "1": {
        price: 175000000,
        size_sqm: 48,
        bathrooms: 1
      },
      "2": {
        price: 305000000,
        size_sqm: 78,
        bathrooms: 2
      },
      "3": {
        price: 353000000,
        size_sqm: 98,
        bathrooms: 2
      }
    },
    base_name: "Stork Elegance Ntinda",
    min_price: 175000000,
    max_price: 353000000
  },
  {
    id: "8c4a6afd-f657-46ac-8607-8a5baf876fb1",
    slug: "dwelling-doves-nakasero",
    name: "Dwelling Doves Nakasero",
    location: "Nakasero, Kampala",
    price: "453000000",
    bedrooms: 2,
    bathrooms: 2,
    property_type: "Apartment",
    status: "For Sale",
    description: "Premium apartment complex in upscale Nakasero with breathtaking views and world-class amenities. Available in 2 and 3 bedroom configurations.",
    featured: true,
    featured_image: "properties/dwellingdoves1.jpg",
    images: [
      "properties/dwellingdoves2.jpg",
      "properties/dwellingdoves3.jpg"
    ],
    amenities: [
      "Infinity Pool",
      "Spa",
      "Concierge Service",
      "24/7 Security",
      "Underground Parking",
      "Rooftop Terrace"
    ],
    floor_plans: {},
    mortgage_eligible: true,
    sort_order: 3,
    created_at: "2026-02-01 16:19:21.005539+00",
    updated_at: "2026-02-01 16:19:21.005539+00",
    bhk_variants: {
      "2": {
        price: 453000000,
        size_sqm: 110,
        bathrooms: 2
      },
      "3": {
        price: 521000000,
        size_sqm: 135,
        bathrooms: 3
      }
    },
    base_name: "Dwelling Doves Nakasero",
    min_price: 453000000,
    max_price: 521000000
  },
  {
    id: "a6d9dbbb-8aa8-4f35-96c8-35453279a823",
    slug: "olive-enclave-kajjansi",
    name: "Olive Enclave Kajjansi",
    location: "Kajjansi",
    price: "107000000",
    bedrooms: 1,
    bathrooms: 1,
    property_type: "Apartment",
    status: "For Sale",
    description: "Affordable apartment complex in serene Kajjansi, perfect for first-time homeowners and growing families. Available in 1, 2, and 3 bedroom configurations.",
    featured: true,
    featured_image: "properties/olive-enclave1.jpg",
    images: [
      "properties/olive-enclave4.jpg",
      "properties/olive-enclave6.jpg",
      "properties/olive-enclave8.jpg"
    ],
    amenities: [
      "Security",
      "Parking",
      "Water Supply",
      "Garden",
      "Children Play Area"
    ],
    floor_plans: {},
    mortgage_eligible: true,
    sort_order: 4,
    created_at: "2026-02-01 16:19:21.005539+00",
    updated_at: "2026-02-01 16:19:21.005539+00",
    bhk_variants: {
      "1": {
        price: 107000000,
        size_sqm: 40,
        bathrooms: 1
      },
      "2": {
        price: 188000000,
        size_sqm: 65,
        bathrooms: 2
      },
      "3": {
        price: 221000000,
        size_sqm: 85,
        bathrooms: 2
      }
    },
    base_name: "Olive Enclave Kajjansi",
    min_price: 107000000,
    max_price: 221000000
  },
  {
    id: "75b34dbb-8f13-4b3c-a612-be7c7ce08dea",
    slug: "macaw-naalya",
    name: "Macaw Naalya",
    location: "Naalya, Kampala",
    price: "153000000",
    bedrooms: 1,
    bathrooms: 1,
    property_type: "Apartment",
    status: "For Sale",
    description: "Contemporary apartment complex in vibrant Naalya with excellent connectivity. Available in 1, 2, and 3 bedroom configurations.",
    featured: true,
    featured_image: "properties/macaw2.jpg",
    images: [
      "properties/macaw1.jpg",
      "properties/macaw3.jpg",
      "properties/macaw4.jpg"
    ],
    amenities: [
      "Swimming Pool",
      "Gym",
      "Security",
      "Parking",
      "Backup Power",
      "High-Speed Internet"
    ],
    floor_plans: {},
    mortgage_eligible: true,
    sort_order: 5,
    created_at: "2026-02-01 16:19:21.005539+00",
    updated_at: "2026-02-01 16:19:21.005539+00",
    bhk_variants: {
      "1": {
        price: 153000000,
        size_sqm: 43,
        bathrooms: 1
      },
      "2": {
        price: 260000000,
        size_sqm: 72,
        bathrooms: 2
      },
      "3": {
        price: 295000000,
        size_sqm: 90,
        bathrooms: 2
      }
    },
    base_name: "Macaw Naalya",
    min_price: 153000000,
    max_price: 295000000
  },
  {
    id: "4fcc1961-a685-4871-83bd-753a39be2eff",
    slug: "ruby-courts-kajjansi",
    name: "Ruby Courts Kajjansi",
    location: "Kajjansi",
    price: "107000000",
    bedrooms: 1,
    bathrooms: 1,
    property_type: "Apartment",
    status: "For Sale",
    description: "Charming apartment complex in peaceful Kajjansi with great value. Available in 1, 2, and 3 bedroom configurations.",
    featured: true,
    featured_image: "properties/rubycourts7.jpg",
    images: [
      "properties/rubycourts2.jpg",
      "properties/rubycourts1.jpg",
      "properties/rubycourts6.jpg"
    ],
    amenities: [
      "Security",
      "Parking",
      "Water Supply",
      "Garden",
      "Perimeter Wall"
    ],
    floor_plans: {},
    mortgage_eligible: true,
    sort_order: 6,
    created_at: "2026-02-01 16:19:21.005539+00",
    updated_at: "2026-02-01 16:19:21.005539+00",
    bhk_variants: {
      "1": {
        price: 107000000,
        size_sqm: 40,
        bathrooms: 1
      },
      "2": {
        price: 188000000,
        size_sqm: 65,
        bathrooms: 2
      },
      "3": {
        price: 221000000,
        size_sqm: 85,
        bathrooms: 2
      }
    },
    base_name: "Ruby Courts Kajjansi",
    min_price: 107000000,
    max_price: 221000000
  }
];
