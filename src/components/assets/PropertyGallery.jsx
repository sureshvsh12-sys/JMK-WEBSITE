export default function PropertyGallery({ images = [] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-3xl border border-white/10"
        >
          <img
            src={image}
            alt={`Property ${index + 1}`}
            className="h-72 w-full object-cover transition duration-500 hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
}