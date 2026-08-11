# IT Support frontend

Vite + React. Content lives in JSON. Pages and styles stay empty until you provide them.

## Run

```bash
cd frontend
npm install
npm run dev
```

## Add content

Put copy in `src/content/*.json`. Do not put page text in components.

| File | Use |
| --- | --- |
| `src/content/site.json` | Brand, nav, footer |
| `src/content/home.json` | Home page sections |

Add a new page by creating a JSON file, a page component in `src/pages`, and a route in `App.jsx`.
