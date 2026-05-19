const Card = ({ video, className = "" }) => {
  return (
    // Responsive container with dynamic width/aspect ratio
    <div className={`relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-0 border-white/50 bg-gray-100 group lg:m-0 ${className}`}>
      {/* Background Video - Covers the entire card */}
      <video
        src={video}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        autoPlay
        muted
        loop
        playsInline
        defaultMuted
      />
    </div>
  );
};

export default Card;
