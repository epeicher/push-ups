# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:3000
npm run build      # Production build to build/
npm test           # Jest test runner (interactive watch mode)
```

## Architecture

Push-ups tracker: a React app that visualizes workout data as a stacked bar chart using Vega-Lite.

**Data flow:**
```
public/pushups.csv → fetch at runtime → parseCsv → Vega-Lite spec → rendered chart
```

- **src/App.js** — Root component, renders BarChart
- **src/BarChart.js** — Fetches `public/pushups.csv` at runtime, parses it, merges with the Vega-Lite spec, and renders via `react-vega`
- **public/pushups.csv** — Workout data source (edit this to add new data)
- **src/spec.json** — Vega-Lite v4 specification (800×400 bar chart, temporal x-axis, sum aggregation on y-axis, color by series index)

**Data shape:** flat array of `{ date, serieIndex (1-6), amount }` objects representing push-up counts per set per day.

**Stack:** React 19, react-scripts 5 (CRA), Vega-Lite 6, react-vega 8. No state management library, no backend. PWA-capable via service worker.

## Notes

- `react-scripts` is unmaintained; `package.json` has `overrides` to patch transitive dependency vulnerabilities (nth-check, postcss, svgo). The webpack-dev-server vulnerabilities are dev-only and can't be overridden without breaking the dev server.
- Uses npm (not yarn).
