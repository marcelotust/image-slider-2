import { ImageSlider } from "./components/ImageSlider";

const images = [
  "/assets/image0.jpg",
  "/assets/image1.jpg",
  "/assets/image2.jpg",
  "/assets/image3.jpg",
];

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Publitas Image Slider</h1>
      <ImageSlider images={images} width={640} height={400} />
    </div>
  );
}

export default App;
