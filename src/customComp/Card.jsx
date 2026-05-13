const Card = ({ video }) => {
  return (
    // Responsive container with a max-width for desktop, but fluid on mobile
    <div className="relative w-full max-w-[360px] aspect-video sm:h-[560px] sm:aspect-auto mx-auto rounded-[24px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-6 border-white/50 bg-gray-100 group lg:m-0">
      {/* Background Video - Covers the entire card */}
      <video
        src={video}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default Card;
