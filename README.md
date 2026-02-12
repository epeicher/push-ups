# Push-Ups Tracker

**Live:** https://epeicher.github.io/push-ups/

A React app that visualizes push-up workout progress over time as a stacked bar chart. Each bar represents a workout day, broken down by set (up to 6 sets per session).

Built with [React](https://reactjs.org/) and [Vega-Lite](https://vega.github.io/vega-lite/).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Adding Workout Data

Add a new row to `public/pushups.csv` with the date and reps per set:

```
2019-11-01,40,24,20,16,14,12
```

The chart reads the CSV at runtime — no code changes needed.

## Build

```bash
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
```
