# Thai Game UI

This repository contains the user interface (UI) code for the Thai Game, a language learning application that helps users learn Thai words through interactive games. The UI is built using React and incorporates various components and patterns for a well-structured and maintainable codebase.

## Features

- Displays a collection of Thai words and their corresponding images.
- Allows users to play audio for each word to practice pronunciation.
- Supports category selection to filter words based on specific themes.
- Implements a responsive layout for optimal viewing on different devices.
- Integrates API calls to fetch random words from selected categories.

## Documentation

UX/UI process https://citrine-peridot-63e.notion.site/Thai-words-game-UX-UI-process-694f7e7a015f4413b4fd128259512e33?pvs=4

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pattpjy/word-game-typescript.git
   ```

2. Navigate to the project directory:

   ```bash
   cd word-game-typescript
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

   This will run the application in development mode and open it in your default browser. The page will automatically reload if you make any changes to the code.

2. Explore the Thai Game UI:

   - Use the navigation bar to select different word categories.
   - Click on the images to play the corresponding word audio.
   - Enjoy learning Thai words through interactive gameplay!

## Backend Server

The backend server for the Thai Game is a separate repository. To set up and run the server, please refer to the [Thai Game Backend](https://github.com/pattpjy/word-game-api-typescript)repository for installation and usage instructions.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request. For major changes, please discuss them with the repository owners first to ensure they align with the project's goals.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

The Thai Game UI was developed as part of a collaborative effort. We would like to acknowledge and thank the contributors who have dedicated their time and expertise to make this project possible.

## Contact

If you have any questions or need further assistance, please feel free to contact us at [email protected]

---

Feel free to customize this README template further based on your specific project and repository details.

```
word-game-typescript
├─ .eslintrc.cjs
├─ .git
├─ .gitignore
├─ README.md
├─ documentations
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ assets
│  └─ vite.svg
├─ src
│  ├─ App.module.css
│  ├─ App.tsx
│  ├─ apiCall
│  │  └─ apiCall.ts
│  ├─ assets
│  │  ├─ audio
│  │  │  ├─ apple.mp3
│  │  │  ├─ car.mp3
│  │  │  └─ tree.mp3
│  │  └─ react.svg
│  ├─ components
│  │  ├─ CatBar
│  │  │  ├─ CatBar.module.css
│  │  │  └─ CatBar.tsx
│  │  ├─ CatBox
│  │  │  ├─ CatBox.tsx
│  │  │  └─ catBox.module.css
│  │  ├─ GameBoard
│  │  │  ├─ GameBoard.tsx
│  │  │  └─ gameBoard.module.css
│  │  ├─ ParentMode
│  │  │  └─ parentModeBtn.tsx
│  │  └─ WordBTN
│  │     ├─ wordBTN.module.css
│  │     └─ wordBTN.tsx
│  ├─ containers
│  │  ├─ CatBarContainer.tsx
│  │  ├─ GameContainer.tsx
│  │  ├─ LandingContainer.tsx
│  │  ├─ ProgressContainer.tsx
│  │  ├─ SettingContainer.tsx
│  │  └─ container.module.css
│  ├─ index.css
│  ├─ index.tsx
│  ├─ repository
│  │  └─ wordRepo.ts
│  ├─ styles
│  ├─ types
│  │  └─ WordData.ts
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```
