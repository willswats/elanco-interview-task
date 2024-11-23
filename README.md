# Elanco Interview Task

A task that I was assigned for an interview with Elanco.

## File Structure

Follows a similar structure to [Bullet Proof React](https://github.com/alan2207/bulletproof-react).

- `src/app` - contains React components related to pages on the site.
- `src/components` - contains general React components, `index.ts` is used here to export all components.
- `src/features/countries` - contains code related to countries, `index.ts` is used here to export everything inside `features/countries`.

Each component is a folder which has a corresponding `index.tsx` and optionally a `styles.module.css`.

## Naming

For CSS naming I have followed [BEM](https://getbem.com/naming/).

## Technologies

- `Next.js` - To build the front-end.
- `svgr` - To handle SVGs.
- `chart.js` and `react-chartjs-2` - For the charts.
