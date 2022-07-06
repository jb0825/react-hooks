import { useFullScreen } from "./useFullScreen";
import nasa from "./nasa.jpg";

export default function App() {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "We Are Full" : "We Are Small");
  };
  const { element, triggerFullscreen, exitFullscreen } = useFullScreen(onFullScreen);

  return (
    <div ref={element}>
      <img src={nasa} width="500" />
      <div>
        <button onClick={triggerFullscreen}>Fullscreen</button>
        <button onClick={exitFullscreen}>Exit Fullscreen</button>
      </div>
    </div>
  );
}
