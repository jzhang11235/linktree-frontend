# Solution

Implemented components for the 3 types of links in Storybook, with music link containing a placeholder for the music player.

I have created a quick example page for the purpose of demonstrating the links next to each other.
The code there is quite crude. The components can be seen in isolation in Storybook.

Mock data sets (and types) are very basic, real-world data are most likely more complicated, and require some transforms (e.g. event date formatting).

Also, first time using Storybook, so probably not using it to its full potential!

## Running

Install dependencies:

```sh
npm install
```

Run Storybook:

```sh
npm run storybook
```

Run example page:

```sh
npm start
```

Run tests:

```sh
npm test
```

## Other notes and assumptions

- Link labels and URLs are expected not to be empty strings
- Events link content scrollbar isn't implemented and simply stretches to content height
- Handling of empty event list isn't implemented
- Use of fixed height values to allow for animation when expanding and collapsing links
- Theming performed through `styled-components`, which can allow the entire page to be themed
