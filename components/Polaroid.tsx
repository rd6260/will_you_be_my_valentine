import Image from 'next/image';

interface PolaroidProps {
  imageUrl: string;
  caption: string;
  enableHover?: boolean;
}

export default function Polaroid({ 
  imageUrl, 
  caption, 
  enableHover = false 
}: PolaroidProps) {
  return (
    <div 
      className={`
        w-[220px] p-[10px_10px_20px_10px] bg-white
        shadow-[0_1px_1px_rgba(0,0,0,0.12),0_2px_2px_rgba(0,0,0,0.12),0_4px_4px_rgba(0,0,0,0.12),0_8px_8px_rgba(0,0,0,0.12)]
        -rotate-2 transition-all duration-300 ease-in-out
        ${enableHover ? 'hover:rotate-0 hover:scale-[1.02] hover:shadow-[0_2px_2px_rgba(0,0,0,0.15),0_4px_4px_rgba(0,0,0,0.15),0_8px_8px_rgba(0,0,0,0.15),0_16px_16px_rgba(0,0,0,0.15)]' : ''}
      `}
    >
      <div className="w-full h-[200px] relative overflow-hidden bg-sky-300">
        <Image
          src={imageUrl}
          alt={caption}
          fill
          className="object-cover"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.4) 32%, rgba(255,255,255,0) 35%)',
            animation: 'shine 3s infinite',
          }}
        />
      </div>
      <div className="font-['Courier_New',monospace] text-center mt-3 text-[#333] text-sm opacity-80">
        {caption}
      </div>
      
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(120deg);
          }
          20%, 100% {
            transform: translateX(100%) rotate(120deg);
          }
        }
      `}</style>
    </div>
  );
}
