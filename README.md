## 🎵 Spotify Clone 🎧

A sleek and functional **Spotify Clone** built with **HTML, CSS, JavaScript**, and **React (via CDN)**. This project mimics a simplified version of the Spotify music player, featuring:

* Dynamic song list rendering using **React components**
* **Play, Pause, Next, Previous, Shuffle**, and **Repeat** features
* Fully responsive and styled UI
* Powered by **FontAwesome** icons and custom song data
* Live preview deployed on **Vercel** ✅

---

### 🚀 Live Demo

🔗 **[Click here to visit the live app on Vercel](https://vercel.com/varun-sharmas-projects-4be662a1/spotifyclone-github-io)**

---

### 🛠️ Features

* 🎼 Displays a list of songs with cover art
* ▶️ Play/pause each song individually
* ⏩ Skip to next/previous songs
* 🔀 Shuffle button to play a random song
* 🔁 Repeat toggle to loop current song
* 📻 React `useState` and `useEffect` to manage audio logic
* 📦 Clean Git branch and PR structure for React integration

---

### 📁 Project Structure

```
📦 spotify-clone/
 ┣ 📁 covers/          → Album cover images
 ┣ 📁 songs/           → MP3 audio files
 ┣ 📄 index.html       → Main HTML file (React CDN integrated)
 ┣ 📄 script.js        → JS logic for playback and UI controls
 ┣ 📄 style.css        → Stylesheet for UI
 ┗ 📄 README.md        → Project overview
```

---

### 🔧 Tech Stack

* 🧠 React (via CDN)
* 🎨 HTML + CSS (Vanilla)
* ⚙️ JavaScript (ES6)
* 🎧 Audio API
* 🌐 Deployed on [Vercel](https://vercel.com)

---

### 🧩 How It Works

* `SongList` React component renders the full song list dynamically.
* Clicking on any song updates the current song index and plays it.
* Repeat and shuffle are toggled with audio element events.
* Master play/pause and progress bar are managed through native JavaScript for now.

---

### 📸 Screenshots

| Song List (React)                                           | Player Controls                                              |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| ![list](https://via.placeholder.com/300x150?text=Song+List) | ![player](https://via.placeholder.com/300x150?text=Controls) |

*Feel free to replace with actual screenshots.*

---

### 💻 Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/spotifyclone.github.io
   cd spotifyclone.github.io
   ```

2. Open `index.html` in your browser (you don’t need a server, thanks to CDN setup).

---

### 🌱 Branching Strategy

* `main`: Initial vanilla JS version
* `react-song-list`: 🎯 Feature branch to convert `songItem` into a React component
* ✅ Pull Request merged after React conversion

---

### 🧠 Learning Goals

* Practice DOM manipulation with JavaScript
* Learn how to incrementally migrate to React
* Understand how `useState` and `useEffect` manage side-effects
* Set up modern deployment using **Vercel**

---

### 🤝 Contributing

Open to contributions! If you’d like to help improve this clone:

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/myFeature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/myFeature`
5. Open a Pull Request

---

### 📬 Contact

Made with ❤️ by [Varun Sharma](https://github.com/varunsharma10)


* Badges (e.g., GitHub stars, Vercel deploy badge)
* Next step: converting the bottom player bar into React?

Ready when you are!
