const ProfileCard = ({
  imageSrc,
  videoSrc,
  name = "Project Name",
  description = "A creative designer passionate about blending nature with modern architecture to craft spaces that breathe.",
  techstack = "React, Tailwind CSS, JavaScript",
}) => {
  return (
    <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] bg-[#f0f0f0] rounded-[28px] p-2.5 flex flex-col gap-3 shadow-sm">
      {/* Image / Video */}
      <div
        className="relative w-full rounded-[20px] overflow-hidden"
        style={{ aspectRatio: "1/1" }}
      >
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        )}

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/40 to-transparent" />
      </div>

      {/* Info Row */}
      <div className="flex flex-col gap-3 px-2 pb-2 flex-1 justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="font-bricolage text-[17px] sm:text-[19px] font-bold text-gray-900 leading-tight">
            {name}
          </h2>
          <p className="text-[12px] sm:text-[13px] text-gray-500 leading-relaxed">
            {description}
          </p>
          {techstack ? (
            <span className="inline-flex items-center self-start rounded-full bg-gray-200 text-gray-500 px-3 py-1 text-[11px] sm:text-[12px] font-medium tracking-wide">
              {techstack}
            </span>
          ) : null}
        </div>

        {/* GitHub Pill Button */}
        <a
          href="#"
          className="inline-flex tracking-wide items-center justify-center gap-2 bg-gray-900 text-white px-6 py-2 rounded-full text-[13px] font-medium hover:bg-gray-800 transition-colors w-fit mt-auto"
        >
          <span>Github</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
