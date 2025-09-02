import { useEffect, useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const context = import.meta.glob("/public/images/*.{jpg,jpeg,png,gif}", { eager: true });
    const imgs = Object.keys(context).map((path, index) => {
      const name = `img_${index + 1}${path.substring(path.lastIndexOf("."))}`;
      return { src: path.replace("/public", ""), name };
    });
    setImages(imgs);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <h1 className="text-3xl font-bold mb-8 text-center text-sky-500">
        có ({images.length}) ảnh
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-full gap-6">
        {images.map((img, i) => (
          <div key={i} className="bg-black">
            <img
              src={img.src}
              alt={img.name}
              className="max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;



