# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Soulrend players**, new and returning, who read the wiki to learn the Forge 1.20.1 modpack: bosses, progression, items, origins, skill trees and leveling.

## Product Purpose

The Soulrend Wiki is the reference for the Soulrend modpack, with game data extracted from the game itself rather than written by hand.

## Positioning

- The wiki's numbers, recipes, models and skill trees come from the modpack's own jars and an in-game export, not from community guesswork.

## Capabilities and Constraints

- Static site: a Node build writes plain HTML, CSS and JS; no framework. The only server code is the Hall of Fame API (`worker/index.js`).
- Small vendored libraries only (markdown-it, MiniSearch, three.js); no frameworks.
- A Cloudflare Worker deploys `main` to soulrend.wiki.

## Brand Commitments

- The wiki has its own pixel font (an original Times-style pixel serif) and Soulrend, Minecraft and plain themes. The Mod Planner moved to its own repo (`apotheoticstudios/modpack-dev-tools`) on 2026-11-16.

## Evidence on Hand

- `game-data/`: the modpack's extracted items, recipes, tags, models and skill trees.

## Product Principles

- Truth from the source: show what the game actually says, and say where the extracted data stops.
