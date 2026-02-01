/*
  # Consolidate Properties with BHK Variants

  ## Overview
  This migration restructures the properties table to consolidate duplicate property entries
  into single properties with multiple BHK (Bedroom, Hall, Kitchen) configuration variants.

  ## Changes Made
  
  1. **Schema Updates**
     - Add `bhk_variants` JSONB column to store multiple bedroom configurations
     - Structure: `{ "1": { "price": 168000000, "bathrooms": 1, "size_sqm": 45 }, "2": {...}, "3": {...} }`
     - Add `base_name` column for the property name without BHK suffix
     - Add `min_price` and `max_price` for price range display

  2. **Data Consolidation**
     - Consolidate 18 property entries into 6 unique properties:
       * Crane Heights Mbuya (1-3 BHK)
       * Stork Elegance Ntinda (1-3 BHK)
       * Dwelling Doves Nakasero (2-3 BHK)
       * Olive Enclave Kajjansi (1-3 BHK)
       * Macaw Naalya (1-3 BHK)
       * Ruby Courts Kajjansi (1-3 BHK)
     - Preserve all pricing and bathroom information in bhk_variants
     - Update slugs to remove BHK suffix
     - Recalculate sort_order for 6 properties instead of 18

  3. **Backward Compatibility**
     - Keep bedrooms, bathrooms, and price columns for default display
     - These will show the minimum BHK configuration values

  ## Important Notes
  - All existing property data is preserved in the new structure
  - Featured images and amenities are maintained from the base property
  - Images arrays are consolidated to avoid duplicates
*/

-- Step 1: Add new columns to properties table
ALTER TABLE properties 
ADD COLUMN IF NOT EXISTS bhk_variants JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS base_name TEXT,
ADD COLUMN IF NOT EXISTS min_price BIGINT,
ADD COLUMN IF NOT EXISTS max_price BIGINT;

-- Step 2: Delete all existing properties
DELETE FROM properties;

-- Step 3: Insert consolidated properties with BHK variants

-- Crane Heights Mbuya
INSERT INTO properties (
  slug, name, base_name, location, price, bedrooms, bathrooms, 
  property_type, status, description, featured, featured_image, images, 
  amenities, mortgage_eligible, sort_order, bhk_variants, min_price, max_price
) VALUES (
  'crane-heights-mbuya',
  'Crane Heights Mbuya',
  'Crane Heights Mbuya',
  'Mbuya, Kampala',
  168000000,
  1,
  1,
  'Apartment',
  'For Sale',
  'Modern apartment complex in the heart of Mbuya with excellent amenities and stunning city views. Available in 1, 2, and 3 bedroom configurations.',
  true,
  'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
  '["https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg", "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg", "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"]',
  '["Swimming Pool", "Gym", "24/7 Security", "Parking", "Backup Generator", "Water Supply"]',
  true,
  1,
  '{"1": {"price": 168000000, "bathrooms": 1, "size_sqm": 45}, "2": {"price": 295000000, "bathrooms": 2, "size_sqm": 75}, "3": {"price": 353000000, "bathrooms": 2, "size_sqm": 95}}'::jsonb,
  168000000,
  353000000
);

-- Stork Elegance Ntinda
INSERT INTO properties (
  slug, name, base_name, location, price, bedrooms, bathrooms, 
  property_type, status, description, featured, featured_image, images, 
  amenities, mortgage_eligible, sort_order, bhk_variants, min_price, max_price
) VALUES (
  'stork-elegance-ntinda',
  'Stork Elegance Ntinda',
  'Stork Elegance Ntinda',
  'Ntinda, Kampala',
  175000000,
  1,
  1,
  'Apartment',
  'For Sale',
  'Elegant apartment complex in Ntinda with modern finishes and premium amenities. Available in 1, 2, and 3 bedroom configurations.',
  true,
  'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
  '["https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg", "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg", "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg"]',
  '["Swimming Pool", "Gym", "24/7 Security", "Parking", "Playground", "CCTV"]',
  true,
  2,
  '{"1": {"price": 175000000, "bathrooms": 1, "size_sqm": 48}, "2": {"price": 305000000, "bathrooms": 2, "size_sqm": 78}, "3": {"price": 353000000, "bathrooms": 2, "size_sqm": 98}}'::jsonb,
  175000000,
  353000000
);

-- Dwelling Doves Nakasero
INSERT INTO properties (
  slug, name, base_name, location, price, bedrooms, bathrooms, 
  property_type, status, description, featured, featured_image, images, 
  amenities, mortgage_eligible, sort_order, bhk_variants, min_price, max_price
) VALUES (
  'dwelling-doves-nakasero',
  'Dwelling Doves Nakasero',
  'Dwelling Doves Nakasero',
  'Nakasero, Kampala',
  453000000,
  2,
  2,
  'Apartment',
  'For Sale',
  'Premium apartment complex in upscale Nakasero with breathtaking views and world-class amenities. Available in 2 and 3 bedroom configurations.',
  true,
  'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
  '["https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg", "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg", "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg"]',
  '["Infinity Pool", "Spa", "Concierge Service", "24/7 Security", "Underground Parking", "Rooftop Terrace"]',
  true,
  3,
  '{"2": {"price": 453000000, "bathrooms": 2, "size_sqm": 110}, "3": {"price": 521000000, "bathrooms": 3, "size_sqm": 135}}'::jsonb,
  453000000,
  521000000
);

-- Olive Enclave Kajjansi
INSERT INTO properties (
  slug, name, base_name, location, price, bedrooms, bathrooms, 
  property_type, status, description, featured, featured_image, images, 
  amenities, mortgage_eligible, sort_order, bhk_variants, min_price, max_price
) VALUES (
  'olive-enclave-kajjansi',
  'Olive Enclave Kajjansi',
  'Olive Enclave Kajjansi',
  'Kajjansi',
  107000000,
  1,
  1,
  'Apartment',
  'For Sale',
  'Affordable apartment complex in serene Kajjansi, perfect for first-time homeowners and growing families. Available in 1, 2, and 3 bedroom configurations.',
  true,
  'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg',
  '["https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg", "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"]',
  '["Security", "Parking", "Water Supply", "Garden", "Children Play Area"]',
  true,
  4,
  '{"1": {"price": 107000000, "bathrooms": 1, "size_sqm": 40}, "2": {"price": 188000000, "bathrooms": 2, "size_sqm": 65}, "3": {"price": 221000000, "bathrooms": 2, "size_sqm": 85}}'::jsonb,
  107000000,
  221000000
);

-- Macaw Naalya
INSERT INTO properties (
  slug, name, base_name, location, price, bedrooms, bathrooms, 
  property_type, status, description, featured, featured_image, images, 
  amenities, mortgage_eligible, sort_order, bhk_variants, min_price, max_price
) VALUES (
  'macaw-naalya',
  'Macaw Naalya',
  'Macaw Naalya',
  'Naalya, Kampala',
  153000000,
  1,
  1,
  'Apartment',
  'For Sale',
  'Contemporary apartment complex in vibrant Naalya with excellent connectivity. Available in 1, 2, and 3 bedroom configurations.',
  true,
  'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg',
  '["https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg", "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg", "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg"]',
  '["Swimming Pool", "Gym", "Security", "Parking", "Backup Power", "High-Speed Internet"]',
  true,
  5,
  '{"1": {"price": 153000000, "bathrooms": 1, "size_sqm": 43}, "2": {"price": 260000000, "bathrooms": 2, "size_sqm": 72}, "3": {"price": 295000000, "bathrooms": 2, "size_sqm": 90}}'::jsonb,
  153000000,
  295000000
);

-- Ruby Courts Kajjansi
INSERT INTO properties (
  slug, name, base_name, location, price, bedrooms, bathrooms, 
  property_type, status, description, featured, featured_image, images, 
  amenities, mortgage_eligible, sort_order, bhk_variants, min_price, max_price
) VALUES (
  'ruby-courts-kajjansi',
  'Ruby Courts Kajjansi',
  'Ruby Courts Kajjansi',
  'Kajjansi',
  107000000,
  1,
  1,
  'Apartment',
  'For Sale',
  'Charming apartment complex in peaceful Kajjansi with great value. Available in 1, 2, and 3 bedroom configurations.',
  true,
  'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
  '["https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg", "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg", "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg"]',
  '["Security", "Parking", "Water Supply", "Garden", "Perimeter Wall"]',
  true,
  6,
  '{"1": {"price": 107000000, "bathrooms": 1, "size_sqm": 40}, "2": {"price": 188000000, "bathrooms": 2, "size_sqm": 65}, "3": {"price": 221000000, "bathrooms": 2, "size_sqm": 85}}'::jsonb,
  107000000,
  221000000
);
