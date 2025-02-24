# The Zeplyn Editor

Available at: https://zeplyn-project.vercel.app/

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
3. While the Right sidebar is modular and will easily support more panels (as and when required), the left sidebar (i.e., "Explorer") is less so. This was the way I originally built the application during v1 (on CodeSandbox). This would not be the case in a prod-ready application. In fact, in a prod app, everything would probably end up becoming a "panel" - with configuration that lets the user determine where each of them will be located (i.e., left / right sidebar; bottom; etc)
4. Instead of separate PRs for all of the "features" (like adding Linaria / Redux; or code refactor), I made a **single PR** (https://github.com/gdebojyoti/zeplyn-project/pull/1) to make it easy for anyone to see and compare the changes made since the initial version of this assignment (i.e., the one built using CodeSandBox).
5. A prod-ready project should also ideally have all strings in a single file / folder - in order to be ready for future internationalization. This was skipped for lack of time. I did however make a config file for storing some specific variables - like app name and root folder name.