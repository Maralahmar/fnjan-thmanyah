# 🎧 Fnjan Podcast Platform

<<<<<<< HEAD
A modern and fast podcast discovery platform built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** — inspired by platforms like Podbay.

## 🚀 Features

- 🎨 Clean and responsive UI  
- ⚡ Superfast performance with Next.js 14  
- 💅 Utility-first styling using Tailwind CSS  
- 🔧 Modular and scalable folder structure  
- 🌙 Dark mode  

## 🛠️ Tech Stack

| Technology     | Purpose                          |
|----------------|----------------------------------|
| Next.js 14     | Full-stack React framework       |
| TypeScript     | Static type checking             |
| Tailwind CSS   | Styling and responsive design    |
| Lucide Icons   | Icon set (optional)              |

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── test-podcast/route.ts   # API route for podcast search
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Main entry page
│   └── globals.css                 # Global styles
│
├── components/
│   ├── page/landingpage/           # All landing UI components
│   │   ├── EpisodeGrid.tsx
│   │   ├── PodcastSection.tsx
│   │   └── ...
│   └── ui/                         # Reusable UI elements
│       ├── button.tsx
│       └── dropdown-menu.tsx
│
├── features/
│   └── podcast/                    # Domain-specific logic
│       └── podcastService.ts
│
├── hook/
│   └── useSearch.ts                # Custom hook for search
│
├── lib/
│   ├── prisma.ts                   # Prisma DB setup
│   └── utils.ts                    # Helper functions
│
├── services/
│   └── itunes.ts                   # iTunes API integration
```

## ⚙️ Getting Started

1. **Clone the repository**
```bash
git clone git@github.com:Maralahmar/thmanyah-fnjan.git
cd thmanyah-fnjan
=======
A modern podcast discovery platform inspired, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

- 🎨 Responsive UI 
- 🌙 Dark theme layout
- ⚡ Superfast performance with `Next.js 14`
- 🧱 UI components built with Tailwind

## 🛠️ Tech Stack

| Tech             | Usage                                  |
|------------------|-----------------------------------------|
| Next.js 14       | App framework                          |
| TypeScript       | Static typing                          |
| Tailwind CSS     | Styling                                |
| Lucide Icons     | Icon library (if added)                |

## 📂 Project Structure

```
src/
├── app/                    # Pages and app layout
│   ├── favicon.ico         # Favicon for the browser tab
│   ├── globals.css         # Global Tailwind styles
│   ├── layout.tsx          # Shared layout across all pages
│   └── page.tsx            # Home page
│
├── assets/
│   └── cover.svg           # Default podcast image or illustration
│
├── components/
│   └── ui/                 # Reusable UI components
│       ├── button.tsx
│       ├── dropdown-menu.tsx
│       └── input.tsx
│
├── lib/
│   └── utils.ts            # Utility functions
```

## 🔧 Setup Instructions

1. **Navigate into the project folder**
```bash
cd fnjan-podcast
>>>>>>> 608bf0e (Initial commit with correct user info)
```

2. **Install dependencies**
```bash
yarn install
```

<<<<<<< HEAD
3. **Run the development server**
=======
3. **Start the development server**
>>>>>>> 608bf0e (Initial commit with correct user info)
```bash
yarn dev
```

<<<<<<< HEAD
Your app will be available at:  
👉 [http://localhost:5000](http://localhost:5000)

## 🚀 Deployment

This project is ready for deployment on **Vercel**.

> Simply connect your GitHub repository to Vercel and deploy — no additional configuration required.

---

## 🧩 Database Setup (Optional for Local Development)

This project uses **Prisma + PostgreSQL** to store podcast data fetched from iTunes API.

To set up the database locally:

```bash
npx prisma db push
npx prisma studio
```

Ensure you have a `.env` file with your `DATABASE_URL`.

---

Made with 💙 by [Maralahmar](https://github.com/Maralahmar)
=======
> The development server will run on `http://localhost:5000`

## 🌍 Deployment

This project can be deployed easily on **Vercel**.  
Just push your code to GitHub and connect the repository to Vercel — no additional configuration needed.
>>>>>>> 608bf0e (Initial commit with correct user info)
