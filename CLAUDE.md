# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:3000
npm run build      # Production build to build/
npm test           # Jest test runner (interactive watch mode)
node buildDataJson.js  # Convert pushups.csv → pushups.json + pushupsSplit.json
```

## Architecture

Push-ups tracker: a React app that visualizes workout data as a stacked bar chart using Vega-Lite.

**Data flow:**
```
pushups.csv → buildDataJson.js → JSON files
                                      ↓
BarChart.js (hardcoded barData) + spec.json → react-vega VegaEmbed → rendered chart
```

- **src/App.js** — Root component, renders BarChart
- **src/BarChart.js** — Merges hardcoded `barData` array with the Vega-Lite spec and renders via `react-vega`. Stateless, no hooks. The data is embedded directly in this file, not fetched from an API
- **src/spec.json** — Vega-Lite v4 specification (800×400 bar chart, temporal x-axis, sum aggregation on y-axis, color by series index)
- **src/api.js** / **src/data.js** — Empty/unused placeholders

**Data shape:** flat array of `{ date, serieIndex (1-6), amount }` objects representing push-up counts per set per day.

**Stack:** React 19, react-scripts 5 (CRA), Vega-Lite 6, react-vega 8. No state management library, no backend. PWA-capable via service worker.

## Notes

- `react-scripts` is unmaintained; `package.json` has `overrides` to patch transitive dependency vulnerabilities (nth-check, postcss, svgo). The webpack-dev-server vulnerabilities are dev-only and can't be overridden without breaking the dev server.
- Both `yarn.lock` and `package-lock.json` exist; prefer npm.
