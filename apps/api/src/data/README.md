# Editable site data

This folder is the source of truth for the demo/public content layer.

- `site.json`: professor profile, homepage statistics, research areas, selected projects, timeline, and global copy.
- `content.json`: publications, projects, journal posts, and achievements. Each item uses `status: published` or `status: draft`.
- `tools.json`: teaching tools, categories, learning objectives, difficulty, and publish state.

Run the API from the workspace with `pnpm --filter @professor/api dev`. The public frontend reads these records through `/api/data/site`, `/api/data/content`, and `/api/data/tools`. The admin workspace writes changes back through the `/api/data/admin/*` endpoints.

Keep JSON valid. After editing, refresh the frontend; no React component needs to be changed for normal content updates.
