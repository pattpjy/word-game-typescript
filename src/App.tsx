import navBar from "./components/navbar";
import "./App.css";
export default function Home() {
  const getAllWords = async () => {
    const url = "http://localhost:3001/api/v1/thai_words";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Unable To Fetch Your Word. Try Later.");
    }
    return response.json();
  };

  const fetchData = async () => {
    const data = await getAllWords();
    console.log(data);
  };

  fetchData();
  const playWord = (src: string) => {
    const audio = new Audio(src);
    audio.play();
  };
  return (
    <>
      <main className="main">
        {navBar()}

        <h1>
          <title>Learn Words Game</title>
          <meta name="description" content="Learning word in new language" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </h1>
        <div>
          <p>Hello, Maddie. Let's learn new Thai words</p>
          <p>play the word by clicking on the images</p>
        </div>
        <div className="word-board">
          <button onClick={() => playWord("./src/assets/audio/tree.mp3")}>
            <img
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9"
              width={200}
              height={150}
              alt="tree"
            />
          </button>
          <button onClick={() => playWord("./src/assets/audio/apple.mp3")}>
            <img
              src="https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a"
              width={200}
              height={150}
              alt="apple"
            />
          </button>
          <button onClick={() => playWord("./src/assets/audio/car.mp3")}>
            <img
              src="https://images.unsplash.com/photo-1489824904134-891ab64532f1"
              width={200}
              height={150}
              alt="car"
            />
          </button>
        </div>
      </main>
    </>
  );
}
