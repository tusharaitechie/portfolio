# Tushar Nile — Data Science, Machine Learning & MLOps Portfolio

A responsive, dark-first personal portfolio inspired by the clean editorial style of the supplied Next.js MDX reference. It is implemented as a lightweight static website using HTML, CSS, and vanilla JavaScript.

## Run locally

1. Extract the ZIP file.
2. Open `index.html` in a browser.

For a local development server, you can use VS Code Live Server or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy

### Vercel
1. Create a new GitHub repository and upload the contents of this folder.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Select **Other** as the framework preset if prompted.
4. Leave the build command empty and set the output directory to `.` (root).
5. Deploy.

### Netlify
1. Open Netlify and choose **Add new site → Deploy manually**.
2. Drag the extracted folder into the deploy area.
3. Netlify will publish `index.html` as the site entry point.

## Customize before publishing

- Add your LinkedIn URL if you want it displayed.
- Add a downloadable resume link if you have a final PDF ready.
- Confirm each linked repository and its README before sharing the portfolio with recruiters.
- Keep project claims aligned with what is implemented and tested. The Book Recommender page intentionally describes AWS deployment as a documented next step, not a completed live deployment.
- Update the profile summary if you want to target a specific job title.

## Files

- `index.html` — page content and project descriptions
- `styles.css` — responsive styling, layouts, and light/dark themes
- `script.js` — theme toggle, mobile navigation, and current year
