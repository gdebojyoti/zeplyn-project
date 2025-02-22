# The Zeplyn Editor

## Setup
Run the following commands in your terminal:
1. `git clone https://github.com/gdebojyoti/zeplyn-project`
2. `cd zeplyn-project`
3. `npm i`
4. `npm run dev`

## Notes
My reasoning behind certain "shortcuts" / decisions:
1. Using **Redux** to manage global state and have a single source of truth.
2. Using **Linaria - a compile time CSS-in-JS library**. It provides modularity. It being compile time has performance benefits over something like EmotionJS. There is also the option to enable "atomic css" in Linaria - which would lower the amount CSS that would be shipped (similar to using Tailwind CSS).
3. Instead of separate PRs for all of the "features" (like adding Linaria / Redux; or code refactor), I made a **single PR** (https://github.com/gdebojyoti/zeplyn-project/pull/1) to make it easy for anyone to see and compare the changes made since the initial version of this assignment (i.e., the one built using CodeSandBox).