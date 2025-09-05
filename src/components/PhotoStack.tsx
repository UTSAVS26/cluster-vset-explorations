interface PhotoStackProps {
  images: string[];
}

const PhotoStack = ({ images }: PhotoStackProps) => {
  // Define 5 sections with different overlap patterns
  const sections = [
    // Section 1: Top-left cluster
    { top: -30, left: -20, images: [0, 1] },
    // Section 2: Top-right cluster  
    { top: -15, left: 40, images: [1, 2] },
    // Section 3: Center cluster
    { top: 20, left: 10, images: [2, 3] },
    // Section 4: Bottom-left cluster
    { top: 50, left: -25, images: [3, 0] },
    // Section 5: Bottom-right cluster
    { top: 35, left: 45, images: [0, 1, 2] }
  ];

  // Random rotations for each image
  const rotations = [-18, -12, -6, 3, 8, 15, -20, 5, -8, 12, -15, 7];

  return (
    <div className="relative w-96 h-96 group">
      {images.map((src, idx) => {
        const rotation = rotations[idx % rotations.length];
        
        // Determine which section this image belongs to
        const sectionIndex = idx % sections.length;
        const section = sections[sectionIndex];
        
        // Add some randomness within each section
        const randomOffset = {
          top: Math.random() * 20 - 10, // -10 to +10
          left: Math.random() * 20 - 10  // -10 to +10
        };

        const position = {
          top: section.top + randomOffset.top,
          left: section.left + randomOffset.left
        };

        // Create overlapping effect by adjusting z-index based on section
        const baseZIndex = 10 + (sectionIndex * 2) + (idx % 2);

        return (
          <img
            key={idx}
            src={src}
            alt={`photo-${idx}`}
            className={`absolute w-60 h-80 object-cover rounded-xl shadow-xl border-4 border-white transition-all duration-700 ease-out cursor-pointer hover:scale-110 hover:z-50 animate-float-${idx % 3} photostack-img`}
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
              transform: `rotate(${rotation}deg)`,
              zIndex: baseZIndex,
              animationDelay: `${idx * 0.2}s`,
              '--rotation': `${rotation}deg`,
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              // On hover, bring this photo to front
              e.currentTarget.style.zIndex = '100';
              e.currentTarget.style.transform = `rotate(${rotation}deg) scale(1.15)`;
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              // On leave, restore original state
              e.currentTarget.style.zIndex = baseZIndex.toString();
              e.currentTarget.style.transform = `rotate(${rotation}deg) scale(1)`;
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            }}
          />
        );
      })}
    </div>
  );
};

export default PhotoStack;
