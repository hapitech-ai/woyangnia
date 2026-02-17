

Build a production-ready SaaS website using Next.js (App Router) + Supabase (DB + Storage). It will be deployed on Vercel.

Project name: woyangnia.com
Meaning: “I’ll take care of you for the rest of your life.” (romantic couple website platform)

1️⃣ Core Concept

This is a romantic website builder for couples.
Users can create personalized subdomain websites like:

sophia.woyangnia.com

jackandsophia.woyangnia.com



2️⃣ Main Landing Page Requirements
🎨 Style & Design

Elegant, romantic, warm aesthetic

Soft gradient backgrounds (pink, beige, cream, sunset)

Smooth fade-in animations

Subtle floating hearts or light particles

Fully responsive (mobile-first)

Clean modern typography

🖼 Demo Section

Show 20 demo romantic images

Use placeholder romantic couple images

Masonry grid layout

Hover effect (soft zoom + overlay text)

Images stored in Supabase Storage (mock for now)

🎵 Music Feature

Background music auto-play (muted by default)

Floating music toggle button (bottom right)

Provide 3 selectable romantic music themes

🎨 Theme Configurability

Allow users to preview different themes:

Theme 1: Soft Pink

Theme 2: Sunset Gold

Theme 3: Minimal White

Theme 4: Night Sky Romance

Use theme switcher (persist selection in localStorage).

3️⃣ Navigation Tabs

Top navigation:

Home

Demo

Pricing

Free Trial

Contact

Sticky navbar with smooth scroll.

4️⃣ Pricing Section

Display pricing cards:

1 Month – 99 RMB

1 Year – 520 RMB

5 Years – 1314 RMB

Include:

Custom subdomain

Photo gallery

Background music

Theme selection

Private access option

Mobile optimized

Anniversary counter

Highlight “1 Year – 520 RMB” as recommended.

5️⃣ Free Trial Page

Route: /try

Features:

Input field: desired subdomain

Button: “Check Availability”

Query Supabase DB table sites

If available → allow:

Upload up to 10 photos

Enter couple names

Enter anniversary date

Select theme

Select background music

On submit:

Save record in Supabase

Upload images to Supabase Storage

Generate preview page at:
/preview/[subdomain]

Preview should render:

Hero section with names

Romantic quote

Anniversary counter

Image gallery

Background music

6️⃣ Contact Page

Display:

Email: zspengyou@gmail.com

WeChat: smile04009

Include:

Simple contact form (name, message)

Store submissions in Supabase table messages

7️⃣ Subdomain Rendering Logic

Implement dynamic routing:

app/[subdomain]/page.tsx

Fetch site config from Supabase

Render themed romantic page dynamically

If subdomain not found → show elegant 404 page.

8️⃣ Supabase Schema

Create tables:

sites

id

subdomain (unique)

couple_name_1

couple_name_2

anniversary_date

theme

music

created_at

messages

id

name

email (optional)

message

created_at

Images stored under:
/sites/{subdomain}/

9️⃣ Technical Requirements

Next.js 14+ App Router

TypeScript

TailwindCSS

Supabase JS SDK

Fully modular components

Clean folder structure

Production-ready

SEO meta tags

OpenGraph preview image

Favicon heart icon

No unnecessary libraries

10️⃣ Extra Enhancements

Add:

Animated countdown to anniversary

Floating “Create Your Love Page” CTA button

Elegant loading skeletons

Toast notifications

Basic rate limit for subdomain checks

Generate full project structure with:

Pages

Components

Supabase config

Environment variable instructions

README with deployment steps for Vercel

Do NOT add payment integration yet.
Focus on MVP foundation.
