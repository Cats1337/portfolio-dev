## Steps to Update the Portfolio
1. **Update**
   - Install dependencies/libraries using `pnpm`:
     ```bash
     pnpm install
     ```
    - Update the project as needed.

2. **Build the Project**
   - Build the project:
     ```bash
     pnpm run build
     ```


> [!IMPORTANT]
> ⚠️ Make sure to switch to **[portolfio](https://github.com/Cats1337/portfolio.git) Repository** ⚠️


3. Deploying to GitHub
   - Check out to the `gh-pages` branch:
     ```bash
     git checkout gh-pages
     ```
   - Drag `dist` folder into the repository and replace:
     ```bash
     git add dist
     git commit -m "Updating Portfolio"
     ```
   - Push the `dist` folder to the `gh-pages` branch:
     ```bash
     git subtree push --prefix dist origin gh-pages
     ```

> [!NOTE] 
> **Deploy to GitHub Pages First-Time**
>   - Check out to the `gh-pages` branch (creates it if it doesn’t exist):
>     ```bash
>     git checkout -b gh-pages
>     ```
>   - Add and commit the `dist` folder:
>     ```bash
>     git add dist
>     git commit -m "Deploying updated version to GitHub Pages"
>     ```
>   - Push the `dist` folder to the `gh-pages` branch:
>     ```bash
>     git subtree push --prefix dist origin gh-pages
>     ```
