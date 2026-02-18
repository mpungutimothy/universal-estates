/*
  # Add Property Status Field

  1. Changes
    - Add `property_status` column to `properties` table
      - Type: text (nullable)
      - Allows values like "Under Construction", "Possession Soon", "Newly Launched"
      - Nullable to support properties without a special status
    
  2. Security
    - No RLS changes needed as the column is part of existing table
*/

-- Add property_status column to properties table
ALTER TABLE properties 
ADD COLUMN IF NOT EXISTS property_status text;

-- Add a comment to describe the column
COMMENT ON COLUMN properties.property_status IS 'Property lifecycle status: Under Construction, Possession Soon, Newly Launched, etc.';
