# Push-Ups Tracker

A React app that visualizes push-up workout progress over time as a stacked bar chart. Each bar represents a workout day, broken down by set (up to 6 sets per session).

Built with [React](https://reactjs.org/) and [Vega-Lite](https://vega.github.io/vega-lite/).

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Adding Workout Data

Add a new row to `public/pushups.csv` with the date and reps per set:

```
2019-11-01,40,24,20,16,14,12
```

The chart reads the CSV at runtime — no code changes needed.

## Build

```bash
npm run build    # Production build to build/
npm test         # Run tests
```
