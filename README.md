This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install the packages using one of the below depending on you package manager

```bash
npm i
# or
pnpm i
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
_Note that it is http not https (https can be used when going live)._

Information about the application:

- Matches the [mockups](https://www.figma.com/file/jupkhmJX9J2ErE5O9NPOg4/Frontend---Interview)
- To displays all the videos of a given category simply go to `See All` and choose the category from the options above the videos, `See All` is clickable
- Users are allowed to play videos by clicking on it. A modal will come up showing the videos along with controls
- The application is responsive according to the dimensions on the figma, it is friendly with small & big screens
- The application is maintainable and can be accessed and contributed to via the github repo

_NOTE: Rounded buttons and icons don't do anything._

## Data

You can find all the data needed for the exercise was gotten from the `data.json` file in the `json` folder and simply parsed via a helper function to where it is needed.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Hope you like it and hoping to hear from you soon
