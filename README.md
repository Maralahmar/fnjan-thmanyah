# 🎧 Fnjan Podcast Platform

A modern and fast podcast discovery platform built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** — inspired by platforms like Podbay.

---

## 🚀 Features

- 🎨 Clean and responsive UI
- ⚡ Superfast performance with Next.js 14
- 💅 Utility-first styling using Tailwind CSS
- 🔧 Modular and scalable folder structure
- 🌙 Dark mode support

---

## 🛠️ Tech Stack

| Technology     | Purpose                          |
|----------------|----------------------------------|
| Next.js 14     | Full-stack React framework       |
| TypeScript     | Static type checking              |
| Tailwind CSS   | Styling and responsive design     |
| Prisma + PostgreSQL | Database ORM & storage     |
| Lucide Icons   | Icon set (optional)               |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── test-podcast/route.ts   # API route for podcast search
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Home page
│   └── globals.css                 # Global styles
│
├── components/
│   ├── page/landingpage/           # Landing page UI components
│   │   ├── EpisodeGrid.tsx
│   │   ├── PodcastSection.tsx
│   │   └── ...
│   └── ui/                         # Reusable UI elements
│       ├── button.tsx
│       ├── dropdown-menu.tsx
│       └── input.tsx
│
├── features/
│   └── podcast/
│       └── podcastService.ts       # Business logic for podcasts
│
├── hook/
│   └── useSearch.ts                # Custom hook for search
│
├── lib/
│   ├── prisma.ts                   # Prisma DB config
│   └── utils.ts                    # Utility functions
│
├── services/
│   └── itunes.ts                   # iTunes API integration
```

---

## ⚙️ Getting Started

1. **Clone the repository**
```bash
git clone git@github.com:Maralahmar/fnjan-thmanyah.git
cd fnjan-thmanyah
```

2. **Install dependencies**
```bash
yarn install
```

3. **Run the development server**
```bash
yarn dev
```

Visit: [http://localhost:5000](http://localhost:5000)

---

## 🚀 Deployment

This project is ready to deploy on **Vercel**.  
Simply connect your GitHub repository to Vercel — no additional configuration required.

---

## 🧩 Database Setup (Optional for Local Development)

This project uses **Prisma + PostgreSQL** to store podcast data fetched from the iTunes API.

To set up the database locally:

```bash
npx prisma db push
npx prisma studio
```

---

## 🧑‍💻 Author

Made with 💙 by [Maralahmar](https://github.com/Maralahmar)
