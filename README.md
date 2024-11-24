# Elanco Interview Task

A task that I was assigned for an interview with Elanco.

[elanco-interview-task.vercel.app](https://elanco-interview-task.vercel.app)

## Table of Contents

<!--toc:start-->

- [General Information](#general-information)
- [File Structure](#file-structure)
- [Naming](#naming)
- [Install](#install)
- [Acknowledgements](#acknowledgements)
<!--toc:end-->

## General Information

This project was built using `Next.js` and it uses the following API routes to fetch country and population data:

- `https://countriesnow.space/api/v0.1/countries/population`
- `https://countriesnow.space/api/v0.1/countries/flag/images`

The population data is then displayed in a line chart by using `chart.js` and `react-chartjs-2`.

## File Structure

The file structure follows a similar structure to [Bullet Proof React](https://github.com/alan2207/bulletproof-react) as I have used it as a reference for most of my React projects.

Overview:

- `src/app` - contains React components related to pages on the site.
- `src/components` - contains general React components, `index.ts` is used here to export all components, which allows you to import all components from one location.
- `src/features/countries` - contains code related to countries, `index.ts` is used here to export everything inside `features/countries`.

Each component is a folder which has a corresponding `index.tsx` and optionally a `styles.module.css`.

## Naming

For CSS naming I follow [BEM](https://getbem.com/naming/).

## Install

1. Install [pnpm](https://pnpm.io/installation).
2. `cd` to this projects' directory.
3. Run `pnpm install` to install the projects' dependencies.
4. Run `pnpm run dev` to run the server locally.

## Acknowledgements

The SVGs are from [Remix Icon](https://remixicon.com/) and were converted into React components with [SVGR Playground](https://react-svgr.com/playground/?typescript=true).
