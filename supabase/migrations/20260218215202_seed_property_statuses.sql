/*
  # Seed Property Status Data

  1. Changes
    - Update properties with their lifecycle status
    - Set "Crane Heights Mbuya" as "Under Construction"
    - Set "Dwelling Doves Nakasero" as "Newly Launched"
    - Set "Stork Elegance Ntinda" as "Possession Soon"
    - Set "Macaw Naalya" as "Under Construction"
    - Set "Olive Enclave Kajjansi" as "Possession Soon"
    - Set "Ruby Courts Kajjansi" as "Newly Launched"
  
  2. Notes
    - Uses slug for identification as it's more stable than name
*/

-- Update Crane Heights Mbuya as Under Construction
UPDATE properties 
SET property_status = 'Under Construction'
WHERE slug = 'crane-heights-mbuya';

-- Update Dwelling Doves Nakasero as Newly Launched
UPDATE properties 
SET property_status = 'Newly Launched'
WHERE slug = 'dwelling-doves-nakasero';

-- Update Stork Elegance Ntinda as Possession Soon
UPDATE properties 
SET property_status = 'Possession Soon'
WHERE slug = 'stork-elegance-ntinda';

-- Update Macaw Naalya as Under Construction
UPDATE properties 
SET property_status = 'Under Construction'
WHERE slug = 'macaw-naalya';

-- Update Olive Enclave Kajjansi as Possession Soon
UPDATE properties 
SET property_status = 'Possession Soon'
WHERE slug = 'olive-enclave-kajjansi';

-- Update Ruby Courts Kajjansi as Newly Launched
UPDATE properties 
SET property_status = 'Newly Launched'
WHERE slug = 'ruby-courts-kajjansi';
