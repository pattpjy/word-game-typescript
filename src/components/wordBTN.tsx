export default function wordBtn(): React.ReactNode {
  const playWord = (src: string) => {
    const audio = new Audio(src);
    audio.play();
  };
  return (
    <button onClick={() => playWord("./src/assets/audio/tree.mp3")}>
      <img
        src="https://images.unsplash.com/photo-1502082553048-f009c37129b9"
        width={200}
        height={150}
        alt="tree"
      />
    </button>
  );
}
