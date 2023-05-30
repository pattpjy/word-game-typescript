export default function Home() {
  const playWord = (src: string) => {
    const audio = new Audio(src);

    console.log("audio", audio);
    audio.play();
  };
  return (
    <>
      <h1>
        <title>Learn Words Game</title>
        <meta name="description" content="Learning word in new language" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </h1>
      <main>
        <div>
          <p>Hello, Maddie. Let's learn new Thai words</p>
        </div>
        <div>
          <p>play the word by clicking on the images</p>
        </div>
        <div>
          <button onClick={() => playWord("./src/assets/audio/tree.mp3")}>
            <img
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9"
              width={200}
              height={150}
              alt="tree"
            />
          </button>

          <button onClick={() => playWord("./src/assets/audio/apple-word.mp3")}>
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
