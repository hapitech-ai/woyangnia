# woyangnia.com - Romantic Couple Website Builder

A production-ready SaaS platform for creating personalized romantic couple websites.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Database & Storage:** Supabase
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **UI Components:** shadcn/ui

## Features

- 🎨 4 Romantic Themes (Soft Pink, Sunset Gold, Minimal White, Night Sky)
- 🎵 Background Music with Toggle
- 📸 Photo Gallery (up to 10 images)
- 💝 Anniversary Counter
- 🔍 Subdomain Availability Check
- 📱 Fully Responsive
- ⚡ SEO Optimized

## Project Structure

```
app/
├── [subdomain]/          # Dynamic couple pages
├── api/                  # API routes
├── contact/              # Contact page
├── preview/              # Preview pages
├── try/                  # Free trial page
├── layout.tsx            # Root layout
├── page.tsx              # Landing page
├── globals.css           # Global styles
components/
├── ui/                   # shadcn/ui components
├── demo-gallery.tsx      # Masonry demo gallery
├── music-player.tsx      # Background music player
├── navbar.tsx            # Navigation
├── pricing-card.tsx      # Pricing cards
├── theme-switcher.tsx    # Theme selector
├── anniversary-counter.tsx
├── contact-form.tsx
├── subdomain-checker.tsx
lib/
├── supabase/             # Supabase clients
├── utils.ts              # Utilities
types/
├── database.ts           # Database types
public/
├── music/                # Background music files
├── images/               # Demo images
```

## Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Supabase Schema

### sites table
```sql
create table sites (
  id uuid default gen_random_uuid() primary key,
  subdomain text unique not null,
  couple_name_1 text not null,
  couple_name_2 text not null,
  anniversary_date date not null,
  theme text default 'soft-pink',
  music text default 'romantic-1',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### messages table
```sql
create table messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### Storage Bucket
```sql
-- Create bucket for site images
insert into storage.buckets (id, name, public)
values ('sites', 'sites', true);
```

## Development

```bash
npm run dev
```

## Deployment

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

## Payment Integration

Payment integration is planned for future updates.

## License

Private - All rights reserved.
