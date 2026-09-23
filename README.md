# Professor Platform v2

Premium academic website, interactive teaching-tools laboratory, and data-first admin workspace for one engineering professor.

## Run

1. Copy `.env.example` to `.env` and set values.
2. Install dependencies with `pnpm install`.
3. Run `pnpm dev`.
4. Build with `pnpm build`.

## Routes

- Public site: `/`, `/about`, `/research`, `/publications`, `/projects`, `/journal`, `/contact`.
- Teaching lab: `/teaching-tools` and `/teaching-tools/:slug`.
- Admin workspace: `/admin`, `/admin/content`, `/admin/tools`, `/admin/settings`.

## Edit content without touching React

The source of truth is `apps/api/src/data/`:

- `site.json` controls the professor profile, homepage statistics, research areas, timeline, selected projects, and global copy.
- `content.json` controls publications, projects, journal posts, and achievements.
- `tools.json` controls teaching-tool cards, objectives, categories, and draft/published state.

The admin workspace can edit frequent fields and writes directly to these JSON files. For complete control, edit the JSON records, keep the syntax valid, then refresh the site.

Uploaded tool packages must be served from a separate asset origin in production and rendered through a sandboxed iframe.
