# 🎧 Fnjan Podcast Platform

A modern, fast, and clean podcast discovery platform built using **Next.js 14**, **TypeScript**, and **Tailwind CSS** — inspired by Podbay.

![Fnjan Cover](https://prod842022-kiet-v2-storage-uploadsbucketc4b27cc7-115kl3obdhv7w.s3.eu-central-1.amazonaws.com/assets/tenant/1jhggnmybp/projects/86246ad7-c46a-428c-8261-aaaaee4ffb1f.jpeg)

---

## 🚀 Features

- 🎨 Beautiful and responsive UI
- ⚡ Blazing-fast performance using Next.js 14
- 💅 Styled with Tailwind CSS
- 🧱 Modular and maintainable architecture
- 🌙 Built-in dark mode support
- 🔍 Podcast search powered by iTunes API

---

## 🛠️ Tech Stack

| Technology         | Purpose                          |
|--------------------|----------------------------------|
| Next.js 14         | Full-stack React framework       |
| TypeScript         | Type safety and code robustness  |
| Tailwind CSS       | Utility-first CSS styling        |
| Prisma + PostgreSQL| Database ORM & storage           |
| Lucide Icons       | Icon set (UI elements)           |
| iTunes API         | Podcast data provider            |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── test-podcast/route.ts    # Podcast search API
│   ├── layout.tsx                   # Shared layout
│   ├── page.tsx                     # Home page
│   └── globals.css                  # Global styles
│
├── components/
│   ├── page/landingpage/            # UI sections
│   │   ├── PodcastSection.tsx
│   │   ├── EpisodeGrid.tsx
│   │   └── ...
│   └── ui/                          # Reusable UI components
│       ├── button.tsx
│       ├── dropdown-menu.tsx
│       └── input.tsx
│
├── features/
│   └── podcast/
│       └── podcastService.ts        # Podcast fetching logic
│
├── hook/
│   └── useSearch.ts                 # Custom hook for searching
│
├── lib/
│   ├── prisma.ts                    # Prisma DB config
│   └── utils.ts                     # Utilities
│
├── services/
│   └── itunes.ts                    # iTunes API integration
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

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

---

## 🧩 Database Setup (Optional - for Full Functionality)

This project uses **PostgreSQL** with **Prisma** for storing podcast and episode data.

1. Create a `.env` file and set your `DATABASE_URL`.
2. Run migrations and open Prisma Studio:

```bash
npx prisma db push
npx prisma studio
```

---

## 🚀 Deployment

This app is ready to deploy on [**Vercel**](https://vercel.com).  
Just connect your GitHub repo and you're good to go — no extra setup needed.

---

## 👩‍💻 Author

Made with 💙 by [Mariam Alahmar](https://github.com/Maralahmar)

---

## 📄 License

This project is licensed under the MIT License. See `LICENSE` for more details.
