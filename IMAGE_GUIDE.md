# Local Image Management Guide

## Quick Start

All image paths are centrally managed in `/src/lib/images.ts`. This makes it easy to update images throughout your site.

## Adding Your Own Images

### Step 1: Add Images to Public Folder

Place your images in the `/public` folder:

```
/public
  /my-image.jpg
  /properties
    /house1.jpg
    /house2.jpg
  /csr
    /event1.jpg
    /event2.jpg
```

### Step 2: Update Image Paths

Edit `/src/lib/images.ts` to reference your new images:

```typescript
export const localImages = {
  csr: {
    bloodDonation: [
      '/csr/event1.jpg',        // Your local image
      '/csr/event2.jpg',        // Your local image
      '/csr/event3.jpg',        // Your local image
      '/csr/event4.jpg',        // Your local image
    ],
  },
  projects: {
    craneHeights: [
      '/properties/crane-1.jpg',  // Your local image
      '/properties/crane-2.jpg',  // Your local image
      // Add up to 8 images per project
    ],
  },
};
```

### Step 3: That's It!

The changes will automatically appear throughout your site:
- CSR page will use your CSR images
- Site Updates page will use your project images
- Property images from database will use their featured_image URLs

## Image Organization Tips

### Recommended Folder Structure

```
/public
  /logos
    - Uni-logo2.png (already in use)
  /properties
    /crane-heights
      - exterior-1.jpg
      - interior-1.jpg
      - amenities-1.jpg
    /macaw-towers
      - tower-view.jpg
      - lobby.jpg
  /csr
    - blood-drive-1.jpg
    - church-outreach-1.jpg
  /team
    - member1.jpg
    - member2.jpg
```

### Naming Convention

Use descriptive names:
- ✅ `crane-heights-exterior-view.jpg`
- ✅ `blood-donation-event-2024.jpg`
- ❌ `img1.jpg`
- ❌ `photo.jpg`

## Where Images Are Used

### 1. CSR Page (`/src/pages/CSR.tsx`)
- Controlled by: `localImages.csr` in `/src/lib/images.ts`
- 4 initiatives, each can have 4+ images

### 2. Site Updates / Project Showroom (`/src/pages/SiteUpdates.tsx`)
- Controlled by: `localImages.projects` in `/src/lib/images.ts`
- 4 projects, each can have 8+ images

### 3. Property Listings (Database-driven)
- Hero Slider: Uses `featured_image` from database
- Property Cards: Uses `featured_image` from database
- Property Detail: Uses `images` array from database
- Fallback: `localImages.properties.defaultFallback`

### 4. Static Elements
- Logo: `/Uni-logo2.png` (used in Navbar, Footer, PreLoader)
- Favicon: `/favicon.png`

## Mixing Local and Remote Images

You can mix both:

```typescript
bloodDonation: [
  '/my-local-image.jpg',                                    // Local
  'https://images.pexels.com/photos/123/photo.jpeg',       // Remote
  '/another-local.jpg',                                     // Local
],
```

## Image Optimization Tips

1. **Compress images** before uploading (use tools like TinyPNG, ImageOptim)
2. **Use appropriate formats**:
   - JPG for photos
   - PNG for graphics with transparency
   - SVG for logos and icons
3. **Recommended sizes**:
   - Hero images: 1920x1080px or larger
   - Property cards: 800x600px
   - Gallery images: 1200x800px
   - Thumbnails: 400x300px

## Updating Database Properties

To add images to properties in your database, update the `featured_image` field:

```sql
UPDATE properties
SET featured_image = '/properties/crane-heights/main.jpg'
WHERE slug = 'crane-heights';
```

Or add to the images array:
```sql
UPDATE properties
SET images = ARRAY[
  '/properties/img1.jpg',
  '/properties/img2.jpg',
  '/properties/img3.jpg'
]
WHERE slug = 'crane-heights';
```

## Quick Reference

| Component | Image Source | How to Update |
|-----------|--------------|---------------|
| Logo | `/public/Uni-logo2.png` | Replace file directly |
| CSR Gallery | `/src/lib/images.ts` → `localImages.csr` | Edit array |
| Project Showroom | `/src/lib/images.ts` → `localImages.projects` | Edit array |
| Property Listings | Database `properties` table | Update database |
| Hero Slider | Database `properties.featured_image` | Update database |

## Example: Complete Image Update

Let's say you want to replace all CSR blood donation images:

1. Copy your 4 images to `/public/csr/`:
   - `blood-drive-1.jpg`
   - `blood-drive-2.jpg`
   - `blood-drive-3.jpg`
   - `blood-drive-4.jpg`

2. Edit `/src/lib/images.ts`:
```typescript
bloodDonation: [
  '/csr/blood-drive-1.jpg',
  '/csr/blood-drive-2.jpg',
  '/csr/blood-drive-3.jpg',
  '/csr/blood-drive-4.jpg',
],
```

3. Done! Visit the CSR page to see your images.

## Need Help?

All image paths are in one place: `/src/lib/images.ts`
- Easy to find
- Easy to update
- Changes reflect site-wide automatically
