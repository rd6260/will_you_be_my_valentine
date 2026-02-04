'use client';

import { useEffect, useState } from 'react';

export default function Flower02() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full bg-black overflow-hidden flex items-end justify-center" style={{height: '100dvh', perspective: '1000px' }}>
      {/* Night Background */}
      <div 
        className="fixed left-1/2 top-0 w-full h-full -translate-x-1/2"
        style={{
          filter: 'blur(0.1vmin)',
          backgroundImage: `
            radial-gradient(ellipse at top, transparent 0%, #000),
            radial-gradient(ellipse at bottom, #000, rgba(145, 233, 255, 0.2)),
            repeating-linear-gradient(220deg, black 0px, black 19px, transparent 19px, transparent 22px),
            repeating-linear-gradient(189deg, black 0px, black 19px, transparent 19px, transparent 22px),
            repeating-linear-gradient(148deg, black 0px, black 19px, transparent 19px, transparent 22px),
            linear-gradient(90deg, #00fffa, #f0f0f0)
          `
        }}
      />

      {/* Flowers Container */}
      <div className="relative" style={{ transform: 'scale(0.9)' }}>
        {/* Flower 1 */}
        <div 
          className="absolute z-10"
          style={{
            bottom: '10vmin',
            transformOrigin: 'bottom center',
            animation: loaded ? 'moving-flower-1 4s linear infinite' : 'none'
          }}
        >
          <div 
            style={{
              position: 'relative',
              animation: loaded ? 'blooming-flower 2s 1.1s backwards' : 'none'
            }}
          >
            {/* Flower Petals */}
            <div className="absolute bottom-0 left-1/2 w-[8vmin] h-[11vmin] opacity-90" style={{ borderRadius: '51% 49% 47% 53%/44% 45% 55% 69%', backgroundColor: '#a7ffee', backgroundImage: 'linear-gradient(to top, #54b8aa, #a7ffee)', transform: 'translate(-10%, 1%) rotateY(40deg) rotateX(-50deg)', transformOrigin: 'bottom center', boxShadow: 'inset 0 0 2vmin rgba(255, 255, 255, 0.5)' }} />
            <div className="absolute bottom-0 left-1/2 w-[8vmin] h-[11vmin] opacity-90" style={{ borderRadius: '51% 49% 47% 53%/44% 45% 55% 69%', backgroundColor: '#a7ffee', backgroundImage: 'linear-gradient(to top, #54b8aa, #a7ffee)', transform: 'translate(-50%, -4%) rotateX(40deg)', transformOrigin: 'bottom center', boxShadow: 'inset 0 0 2vmin rgba(255, 255, 255, 0.5)' }} />
            <div className="absolute bottom-0 left-1/2 w-[8vmin] h-[11vmin] opacity-90" style={{ borderRadius: '51% 49% 47% 53%/44% 45% 55% 69%', backgroundColor: '#a7ffee', backgroundImage: 'linear-gradient(to top, #54b8aa, #a7ffee)', transform: 'translate(-90%, 0%) rotateY(45deg) rotateX(50deg)', transformOrigin: 'bottom center', boxShadow: 'inset 0 0 2vmin rgba(255, 255, 255, 0.5)' }} />
            <div className="absolute bottom-0 left-1/2 w-[8vmin] h-[8vmin] opacity-80 z-[1]" style={{ borderRadius: '4vmin 10vmin 4vmin 4vmin', backgroundImage: 'linear-gradient(to top, #39c6d6, #a7ffee)', transform: 'translate(0%, 18%) rotateX(70deg) rotate(-43deg)', transformOrigin: 'bottom left' }} />
            
            {/* White Circle (Center) */}
            <div className="absolute w-[9vmin] h-[4vmin] rounded-full bg-white" style={{ left: '-3.5vmin', top: '-3vmin' }}>
              <div className="absolute left-1/2 top-[45%] w-[60%] h-[60%] rounded-full -translate-x-1/2 -translate-y-1/2" style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0px, rgba(0, 0, 0, 0.03) 1px, transparent 1px, transparent 12px), repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.03) 0px, rgba(0, 0, 0, 0.03) 1px, transparent 1px, transparent 12px), linear-gradient(90deg, #ffeb12, #ffce00)' }} />
            </div>

            {/* Lights */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="absolute bottom-0 w-[1vmin] h-[1vmin] rounded-full"
                style={{
                  backgroundColor: i % 2 === 1 ? '#23f0ff' : '#fffb00',
                  filter: 'blur(0.2vmin)',
                  left: `${[-2, 3, -6, 6, -1, -4, 3, -6][i - 1]}vmin`,
                  animation: loaded ? `light-ans 4s ${[1, 0.5, 0.3, 0.9, 1.5, 3, 2, 3.5][i - 1]}s linear infinite backwards` : 'none'
                }}
              />
            ))}
          </div>

          {/* Stem */}
          <div 
            className="w-[1.5vmin]"
            style={{
              height: '70vmin',
              backgroundImage: 'linear-gradient(to left, rgba(0, 0, 0, 0.2), transparent, rgba(255, 255, 255, 0.2)), linear-gradient(to top, transparent 10%, #14757a, #39c6d6)',
              boxShadow: 'inset 0 0 2px rgba(0, 0, 0, 0.5)',
              animation: loaded ? 'grow-flower-tree 4s 0.3s backwards' : 'none'
            }}
          >
            {/* Stem Leaves */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  width: '7vmin',
                  height: '9vmin',
                  top: [20, 45, 12, 40, 0, -2][i - 1] + '%',
                  left: i <= 2 || i === 5 ? '90%' : '-460%',
                  borderRadius: i <= 2 || i === 5 ? '0 9vmin 9vmin 0' : '9vmin 0 0 9vmin',
                  backgroundImage: 'linear-gradient(to top, rgba(20, 117, 122, 0.4), #39c6d6)',
                  transform: i <= 2 ? 'rotate(70deg) rotateY(30deg)' : i === 5 ? 'rotate(70deg) rotateY(30deg) scale(0.6)' : i === 6 ? 'rotate(-70deg) rotateY(30deg) scale(0.6)' : 'rotate(-70deg) rotateY(30deg)',
                  transformOrigin: i === 5 ? 'left' : i === 6 ? 'right' : 'center',
                  animation: loaded ? `blooming-leaf-${i <= 2 || i === 5 ? 'right' : 'left'} 0.8s ${[1.6, 1.4, 1.2, 1, 1.8, 2][i - 1]}s backwards` : 'none'
                }}
              />
            ))}
          </div>
        </div>

        {/* Flower 2 */}
        <div 
          className="absolute z-10 left-1/2"
          style={{
            bottom: '10vmin',
            transformOrigin: 'bottom center',
            transform: 'rotate(20deg)',
            animation: loaded ? 'moving-flower-2 4s linear infinite' : 'none'
          }}
        >
          <div 
            style={{
              position: 'relative',
              animation: loaded ? 'blooming-flower 2s 1.4s backwards' : 'none'
            }}
          >
            {/* Flower Petals */}
            <div className="absolute bottom-0 left-1/2 w-[8vmin] h-[11vmin] opacity-90" style={{ borderRadius: '51% 49% 47% 53%/44% 45% 55% 69%', backgroundColor: '#a7ffee', backgroundImage: 'linear-gradient(to top, #54b8aa, #a7ffee)', transform: 'translate(-10%, 1%) rotateY(40deg) rotateX(-50deg)', transformOrigin: 'bottom center', boxShadow: 'inset 0 0 2vmin rgba(255, 255, 255, 0.5)' }} />
            <div className="absolute bottom-0 left-1/2 w-[8vmin] h-[11vmin] opacity-90" style={{ borderRadius: '51% 49% 47% 53%/44% 45% 55% 69%', backgroundColor: '#a7ffee', backgroundImage: 'linear-gradient(to top, #54b8aa, #a7ffee)', transform: 'translate(-50%, -4%) rotateX(40deg)', transformOrigin: 'bottom center', boxShadow: 'inset 0 0 2vmin rgba(255, 255, 255, 0.5)' }} />
            <div className="absolute bottom-0 left-1/2 w-[8vmin] h-[11vmin] opacity-90" style={{ borderRadius: '51% 49% 47% 53%/44% 45% 55% 69%', backgroundColor: '#a7ffee', backgroundImage: 'linear-gradient(to top, #54b8aa, #a7ffee)', transform: 'translate(-90%, 0%) rotateY(45deg) rotateX(50deg)', transformOrigin: 'bottom center', boxShadow: 'inset 0 0 2vmin rgba(255, 255, 255, 0.5)' }} />
            <div className="absolute bottom-0 left-1/2 w-[8vmin] h-[8vmin] opacity-80 z-[1]" style={{ borderRadius: '4vmin 10vmin 4vmin 4vmin', backgroundImage: 'linear-gradient(to top, #39c6d6, #a7ffee)', transform: 'translate(0%, 18%) rotateX(70deg) rotate(-43deg)', transformOrigin: 'bottom left' }} />
            
            <div className="absolute w-[9vmin] h-[4vmin] rounded-full bg-white" style={{ left: '-3.5vmin', top: '-3vmin' }}>
              <div className="absolute left-1/2 top-[45%] w-[60%] h-[60%] rounded-full -translate-x-1/2 -translate-y-1/2" style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0px, rgba(0, 0, 0, 0.03) 1px, transparent 1px, transparent 12px), repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.03) 0px, rgba(0, 0, 0, 0.03) 1px, transparent 1px, transparent 12px), linear-gradient(90deg, #ffeb12, #ffce00)' }} />
            </div>

            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="absolute bottom-0 w-[1vmin] h-[1vmin] rounded-full"
                style={{
                  backgroundColor: i % 2 === 1 ? '#23f0ff' : '#fffb00',
                  filter: 'blur(0.2vmin)',
                  left: `${[-2, 3, -6, 6, -1, -4, 3, -6][i - 1]}vmin`,
                  animation: loaded ? `light-ans 4s ${[1, 0.5, 0.3, 0.9, 1.5, 3, 2, 3.5][i - 1]}s linear infinite backwards` : 'none'
                }}
              />
            ))}
          </div>

          <div 
            className="w-[1.5vmin]"
            style={{
              height: '60vmin',
              backgroundImage: 'linear-gradient(to left, rgba(0, 0, 0, 0.2), transparent, rgba(255, 255, 255, 0.2)), linear-gradient(to top, transparent 10%, #14757a, #39c6d6)',
              boxShadow: 'inset 0 0 2px rgba(0, 0, 0, 0.5)',
              animation: loaded ? 'grow-flower-tree 4s 0.6s backwards' : 'none'
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  width: '7vmin',
                  height: '9vmin',
                  top: [20, 45, 12, 40][i - 1] + '%',
                  left: i <= 2 ? '90%' : '-460%',
                  borderRadius: i <= 2 ? '0 9vmin 9vmin 0' : '9vmin 0 0 9vmin',
                  backgroundImage: 'linear-gradient(to top, rgba(20, 117, 122, 0.4), #39c6d6)',
                  transform: i <= 2 ? 'rotate(70deg) rotateY(30deg)' : 'rotate(-70deg) rotateY(30deg)',
                  animation: loaded ? `blooming-leaf-${i <= 2 ? 'right' : 'left'} 0.8s ${[1.9, 1.7, 1.5, 1.3][i - 1]}s backwards` : 'none'
                }}
              />
            ))}
          </div>
        </div>

        {/* Flower 3 */}
        <div 
          className="absolute z-10 left-1/2"
          style={{
            bottom: '10vmin',
            transformOrigin: 'bottom center',
            transform: 'rotate(-15deg)',
            animation: loaded ? 'moving-flower-3 4s linear infinite' : 'none'
          }}
        >
          <div 
            style={{
              position: 'relative',
              animation: loaded ? 'blooming-flower 2s 1.7s backwards' : 'none'
            }}
          >
            <div className="absolute bottom-0 left-1/2 w-[8vmin] h-[11vmin] opacity-90" style={{ borderRadius: '51% 49% 47% 53%/44% 45% 55% 69%', backgroundColor: '#a7ffee', backgroundImage: 'linear-gradient(to top, #54b8aa, #a7ffee)', transform: 'translate(-10%, 1%) rotateY(40deg) rotateX(-50deg)', transformOrigin: 'bottom center', boxShadow: 'inset 0 0 2vmin rgba(255, 255, 255, 0.5)' }} />
            <div className="absolute bottom-0 left-1/2 w-[8vmin] h-[11vmin] opacity-90" style={{ borderRadius: '51% 49% 47% 53%/44% 45% 55% 69%', backgroundColor: '#a7ffee', backgroundImage: 'linear-gradient(to top, #54b8aa, #a7ffee)', transform: 'translate(-50%, -4%) rotateX(40deg)', transformOrigin: 'bottom center', boxShadow: 'inset 0 0 2vmin rgba(255, 255, 255, 0.5)' }} />
            <div className="absolute bottom-0 left-1/2 w-[8vmin] h-[11vmin] opacity-90" style={{ borderRadius: '51% 49% 47% 53%/44% 45% 55% 69%', backgroundColor: '#a7ffee', backgroundImage: 'linear-gradient(to top, #54b8aa, #a7ffee)', transform: 'translate(-90%, 0%) rotateY(45deg) rotateX(50deg)', transformOrigin: 'bottom center', boxShadow: 'inset 0 0 2vmin rgba(255, 255, 255, 0.5)' }} />
            <div className="absolute bottom-0 left-1/2 w-[8vmin] h-[8vmin] opacity-80 z-[1]" style={{ borderRadius: '4vmin 10vmin 4vmin 4vmin', backgroundImage: 'linear-gradient(to top, #39c6d6, #a7ffee)', transform: 'translate(0%, 18%) rotateX(70deg) rotate(-43deg)', transformOrigin: 'bottom left' }} />
            
            <div className="absolute w-[9vmin] h-[4vmin] rounded-full bg-white" style={{ left: '-3.5vmin', top: '-3vmin' }}>
              <div className="absolute left-1/2 top-[45%] w-[60%] h-[60%] rounded-full -translate-x-1/2 -translate-y-1/2" style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0px, rgba(0, 0, 0, 0.03) 1px, transparent 1px, transparent 12px), repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.03) 0px, rgba(0, 0, 0, 0.03) 1px, transparent 1px, transparent 12px), linear-gradient(90deg, #ffeb12, #ffce00)' }} />
            </div>

            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="absolute bottom-0 w-[1vmin] h-[1vmin] rounded-full"
                style={{
                  backgroundColor: i % 2 === 1 ? '#23f0ff' : '#fffb00',
                  filter: 'blur(0.2vmin)',
                  left: `${[-2, 3, -6, 6, -1, -4, 3, -6][i - 1]}vmin`,
                  animation: loaded ? `light-ans 4s ${[1, 0.5, 0.3, 0.9, 1.5, 3, 2, 3.5][i - 1]}s linear infinite backwards` : 'none'
                }}
              />
            ))}
          </div>

          <div 
            className="w-[1.5vmin]"
            style={{
              height: '55vmin',
              backgroundImage: 'linear-gradient(to left, rgba(0, 0, 0, 0.2), transparent, rgba(255, 255, 255, 0.2)), linear-gradient(to top, transparent 10%, #14757a, #39c6d6)',
              boxShadow: 'inset 0 0 2px rgba(0, 0, 0, 0.5)',
              animation: loaded ? 'grow-flower-tree 4s 0.9s backwards' : 'none'
            }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  width: '7vmin',
                  height: '9vmin',
                  top: [20, 45, 12, 40][i - 1] + '%',
                  left: i <= 2 ? '90%' : '-460%',
                  borderRadius: i <= 2 ? '0 9vmin 9vmin 0' : '9vmin 0 0 9vmin',
                  backgroundImage: 'linear-gradient(to top, rgba(20, 117, 122, 0.4), #39c6d6)',
                  transform: i <= 2 ? 'rotate(70deg) rotateY(30deg)' : 'rotate(-70deg) rotateY(30deg)',
                  animation: loaded ? `blooming-leaf-${i <= 2 ? 'right' : 'left'} 0.8s ${[2.5, 2.3, 2.1, 1.9][i - 1]}s backwards` : 'none'
                }}
              />
            ))}
          </div>
        </div>

        {/* Long Grass */}
        <div style={{ animation: loaded ? 'grow-ans 2s 1.2s backwards' : 'none' }}>
          <div className="absolute" style={{ bottom: '10vmin', left: '-3vmin', transformOrigin: 'bottom left', transform: 'rotate(-30deg) rotateY(-20deg)', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', animation: loaded ? 'flower-g-long-ans 3s linear infinite' : 'none' }}>
            <div style={{ width: '3vmin', height: '6vmin', borderTopRightRadius: '100%', borderRight: '0.7vmin solid #159faa', transform: 'translate(-0.7vmin, 1vmin)' }} />
            <div style={{ width: '2vmin', height: '50vmin', transformOrigin: 'bottom center', backgroundImage: 'linear-gradient(to top, transparent 30%, #159faa)', boxShadow: 'inset 0 0 2px rgba(0, 0, 0, 0.5)', clipPath: 'polygon(35% 0, 65% 1%, 100% 100%, 0% 100%)' }} />
          </div>
        </div>

        {/* Grass 1 */}
        <div style={{ animation: loaded ? 'growing-grass-ans 1s 2s backwards' : 'none' }}>
          <div className="absolute flex flex-col items-end z-20" style={{ bottom: '12vmin', left: '-7vmin', transformOrigin: 'bottom center', transform: 'rotate(-48deg) rotateY(40deg)', animation: loaded ? 'moving-grass 2s linear infinite' : 'none' }}>
            <div style={{ width: '7vmin', height: '10vmin', borderTopRightRadius: '100%', borderRight: '1.5vmin solid #159faa', transformOrigin: 'bottom center', transform: 'rotate(-2deg)' }} />
            <div style={{ marginTop: '-2px', width: '1.5vmin', height: '25vmin', backgroundImage: 'linear-gradient(to top, transparent, #159faa)' }} />
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="absolute z-[100]"
                style={{
                  width: 'calc(10vmin * 2.1)',
                  height: '10vmin',
                  top: [-6, -5, 5, 6, 20, 22, 39, 40][i - 1] + '%',
                  left: [30, -110, 60, -135, 60, -180, 70, -215][i - 1] + '%',
                  borderTopLeftRadius: '10vmin',
                  borderTopRightRadius: '10vmin',
                  backgroundImage: 'linear-gradient(to top, transparent, transparent 30%, #159faa)',
                  transform: `rotate(${[-20, 10, -18, 2, -24, 10, -10, 10][i - 1]}deg)${i === 3 ? ' rotateX(-20deg)' : i === 5 ? ' rotateX(-20deg)' : ''}`,
                  transformOrigin: i % 2 === 1 ? 'bottom left' : 'bottom right',
                  animation: loaded ? `growing-grass-ans--${i} 2s ${[2.6, 2.4, 2.2, 2, 1.8, 1.6, 1.4, 1.2][i - 1]}s linear backwards` : 'none'
                }}
              />
            ))}
            <div className="absolute top-[-10%] right-0 w-full h-full z-[100]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', filter: 'blur(1.5vmin)' }} />
          </div>
        </div>

        {/* Grass 2 */}
        <div style={{ animation: loaded ? 'growing-grass-ans 1s 2s backwards' : 'none' }}>
          <div className="absolute flex flex-col items-end" style={{ bottom: '10vmin', left: '2vmin', transformOrigin: 'bottom center', transform: 'scale(0.5) rotate(75deg) rotateX(10deg) rotateY(-200deg)', opacity: 0.8, zIndex: 0, animation: loaded ? 'moving-grass--2 1.5s linear infinite' : 'none' }}>
            <div style={{ width: '7vmin', height: '10vmin', borderTopRightRadius: '100%', borderRight: '1.5vmin solid #159faa', transformOrigin: 'bottom center', transform: 'rotate(-2deg)' }} />
            <div style={{ marginTop: '-2px', width: '1.5vmin', height: '25vmin', backgroundImage: 'linear-gradient(to top, transparent, #159faa)' }} />
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="absolute z-[100]"
                style={{
                  width: 'calc(10vmin * 2.1)',
                  height: '10vmin',
                  top: [-6, -5, 5, 6, 20, 22, 39, 40][i - 1] + '%',
                  left: [30, -110, 60, -135, 60, -180, 70, -215][i - 1] + '%',
                  borderTopLeftRadius: '10vmin',
                  borderTopRightRadius: '10vmin',
                  backgroundImage: 'linear-gradient(to top, transparent, transparent 30%, #159faa)',
                  transform: `rotate(${[-20, 10, -18, 2, -24, 10, -10, 10][i - 1]}deg)${i === 3 ? ' rotateX(-20deg)' : i === 5 ? ' rotateX(-20deg)' : ''}`,
                  transformOrigin: i % 2 === 1 ? 'bottom left' : 'bottom right',
                  animation: loaded ? `growing-grass-ans--${i} 2s ${[2.6, 2.4, 2.2, 2, 1.8, 1.6, 1.4, 1.2][i - 1]}s linear backwards` : 'none'
                }}
              />
            ))}
            <div className="absolute top-[-10%] right-0 w-full h-full z-[100]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', filter: 'blur(1.5vmin)' }} />
          </div>
        </div>

        {/* Right Grass 1 */}
        <div style={{ animation: loaded ? 'grow-ans 2s 2.4s backwards' : 'none' }}>
          <div className="absolute" style={{ bottom: '6vmin', left: '-2vmin', transformOrigin: 'bottom left', transform: 'rotate(20deg)', animation: loaded ? 'flower-g-right-ans 2.5s linear infinite' : 'none' }}>
            <div style={{ width: '30vmin', height: '50vmin', borderTopLeftRadius: '100%', borderLeft: '2vmin solid #079097', backgroundImage: 'linear-gradient(to bottom, transparent, #000 60%)', WebkitMaskImage: 'linear-gradient(to top, transparent 30%, #079097 60%)' }} />
          </div>
        </div>

        {/* Right Grass 2 */}
        <div style={{ animation: loaded ? 'grow-ans 2s 2.8s backwards' : 'none' }}>
          <div className="absolute" style={{ bottom: '6vmin', left: '5vmin', transformOrigin: 'bottom left', transform: 'rotateY(-180deg)', animation: loaded ? 'flower-g-right-ans--2 3s linear infinite' : 'none' }}>
            <div style={{ width: '30vmin', height: '75vmin', borderTopLeftRadius: '100%', borderLeft: '2vmin solid #079097', backgroundImage: 'linear-gradient(to bottom, transparent, #000 60%)', WebkitMaskImage: 'linear-gradient(to top, transparent 30%, #079097 60%)', filter: 'blur(0.3vmin)', opacity: 0.8 }} />
          </div>
        </div>

        {/* Front Grass */}
        <div style={{ animation: loaded ? 'grow-ans 2s 2.8s backwards' : 'none' }}>
          <div className="absolute z-[100]" style={{ bottom: '6vmin', left: '2.5vmin', transformOrigin: 'bottom center', transform: 'rotate(-28deg) rotateY(30deg) scale(1.04)', animation: loaded ? 'flower__g-front-ans 2s linear infinite' : 'none' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="absolute top-0 left-0"
                style={{
                  transformOrigin: i % 2 === 0 ? 'bottom left' : 'bottom right',
                  transform: i % 2 === 0 ? 'rotateY(-180deg) rotate(5deg)' : 'rotate(10deg)',
                  top: ['-8vmin', '-8vmin', '-3vmin', '-3vmin', '2vmin', '2vmin', '6.5vmin', '6.5vmin'][i - 1],
                  animation: loaded ? (i % 2 === 0 ? `flower__g-front__leaf-left-ans${i === 2 || i === 4 ? '-2' : ''} 1s ${[5.5, 5.2, 4.6, 4.6, 4.3, 4.1, 3.8, 3.5][i - 1]}s ease-in backwards` : `flower__g-front__leaf-ans 1s ${[5.5, 5.2, 4.9, 4.6, 4.3, 4.1, 3.8, 3.5][i - 1]}s ease-in backwards`) : 'none'
                }}
              >
                <div style={{ width: '10vmin', height: '10vmin', borderRadius: '100% 0% 0% 100%/100% 100% 0% 0%', boxShadow: 'inset 0 2px 1vmin rgba(44, 238, 252, 0.2)', backgroundImage: 'linear-gradient(to bottom left, transparent, #000), linear-gradient(to bottom right, #159faa 50%, transparent 50%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom right, #159faa 50%, transparent 50%, transparent)', maskImage: 'linear-gradient(to bottom right, #159faa 50%, transparent 50%, transparent)' }} />
              </div>
            ))}
            <div style={{ width: '0.3vmin', height: '20vmin', backgroundImage: 'linear-gradient(to top, transparent, #079097, transparent 100%)', position: 'relative' }} />
          </div>
        </div>

        {/* Front Right Grass */}
        <div style={{ animation: loaded ? 'grow-ans 2s 3.2s backwards' : 'none' }}>
          <div className="absolute z-10" style={{ bottom: '-4vmin', left: '0vmin', transformOrigin: 'bottom left', animation: loaded ? 'flower__g-fr-ans 2s linear infinite' : 'none' }}>
            <div style={{ width: '30vmin', height: '50vmin', borderTopLeftRadius: '100%', borderLeft: '2vmin solid #079097', WebkitMaskImage: 'linear-gradient(to top, transparent 25%, #079097 50%)', position: 'relative', zIndex: 1 }} />
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="absolute top-0 left-0"
                style={{
                  width: '10vmin',
                  height: '10vmin',
                  left: [20, 12, 15, 6, 10, 0, 5, -4][i - 1] + 'vmin',
                  top: [0, -7, 6, -2, 14, 6, 22, 15][i - 1] + 'vmin',
                  borderRadius: '100% 0% 0% 100%/100% 100% 0% 0%',
                  boxShadow: 'inset 0 2px 1vmin rgba(44, 238, 252, 0.2)',
                  backgroundImage: 'linear-gradient(to bottom left, transparent, #000 98%), linear-gradient(to bottom right, #23f0ff 45%, transparent 50%, transparent)',
                  WebkitMaskImage: 'linear-gradient(135deg, #159faa 40%, transparent 50%, transparent)',
                  transform: i % 2 === 0 ? `rotate(${[45, 25, 55, 25, 55, 25, 45, 15][i - 1]}deg) rotateY(-180deg)` : `rotate(${[45, 25, 55, 25, 55, 25, 45, 15][i - 1]}deg)`,
                  transformOrigin: i % 2 === 0 ? 'right' : 'left',
                  animation: loaded ? `flower__g-fr-leaft-ans-${i % 2 === 0 ? (i === 2 || i === 4 || i === 6 ? '6' : '8') : (i === 1 ? '1' : i === 3 || i === 5 ? '5' : '7')} 0.5s ${[5.2, 5, 4.8, 4.6, 4.4, 4.2, 4, 3.8][i - 1]}s linear backwards` : 'none'
                }}
              />
            ))}
          </div>
        </div>

        {/* Long Grass Elements */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((gIndex) => (
          <div
            key={gIndex}
            className="absolute"
            style={{
              bottom: [25, 0, -3, 0, -3, 0, -20, 20][gIndex] + 'vmin',
              left: [-42, -42, -35, -17, 25, 42, 0, 35][gIndex] + 'vmin',
              transformOrigin: gIndex === 0 ? 'bottom left' : 'center',
              transform: gIndex === 0 ? 'scale(1)' : gIndex === 1 ? 'scale(0.8) rotate(-5deg)' : gIndex === 2 || gIndex === 3 || gIndex === 4 ? 'scale(0.6) rotateX(60deg)' : gIndex === 5 ? 'scale(0.8) rotate(2deg)' : gIndex === 6 ? 'scale(0.8) rotate(2deg)' : 'scale(0.6) rotate(2deg)',
              zIndex: gIndex === 6 ? 100 : gIndex === 7 ? -1 : 'auto',
              filter: gIndex === 6 || gIndex === 7 ? 'blur(0.3vmin)' : 'none',
              opacity: gIndex === 7 ? 0.7 : 1
            }}
          >
            {[0, 1, 2, 3].map((leafIndex) => (
              <div key={leafIndex} style={{ animation: loaded ? `grow-ans 2s ${[3, 2.2, 3.4, 3.6, 3.6, 3.8, 4, 4.2, 4, 4.2, 4.4, 4.6, 4, 4.2, 3, 3.6, 4, 4.2, 3, 3.6, 4, 4.2, 3, 3.6, 4.2, 4.4, 4.6, 4.8, 3, 3.2, 3.5, 3.6][gIndex * 4 + leafIndex]}s backwards` : 'none' }}>
                <div
                  className="absolute bottom-0"
                  style={{
                    width: leafIndex === 0 ? '15vmin' : leafIndex === 1 ? (gIndex === 1 ? '5vmin' : '5vmin') : leafIndex === 2 ? '10vmin' : '5vmin',
                    height: leafIndex === 0 ? '40vmin' : leafIndex === 1 ? '60vmin' : leafIndex === 2 ? '40vmin' : '30vmin',
                    borderTopLeftRadius: '100%',
                    borderLeft: '2vmin solid #1aaa15',
                    WebkitMaskImage: gIndex === 1 ? 'linear-gradient(to top, transparent 40%, #079097 80%)' : gIndex === 2 || gIndex === 3 || gIndex === 4 ? 'linear-gradient(to top, transparent 50%, #079097 80%)' : 'linear-gradient(to top, transparent 20%, #000)',
                    transformOrigin: 'bottom center',
                    left: leafIndex === 0 ? '2vmin' : leafIndex === 1 ? (gIndex === 1 ? '-2vmin' : '0') : '-0.5vmin',
                    bottom: leafIndex === 2 ? '5vmin' : leafIndex === 3 ? '3.2vmin' : '0',
                    transform: leafIndex === 0 ? 'rotate(-5deg) scale(1)' : leafIndex === 1 ? (gIndex === 1 ? 'rotate(3deg) rotateY(-180deg)' : 'rotate(-5deg) scale(1)') : leafIndex === 2 ? 'rotateY(-180deg)' : 'rotate(-10deg) rotateY(-180deg)',
                    animation: loaded ? (leafIndex === 0 ? 'leaf-ans-1 4s linear infinite' : leafIndex === 1 ? 'leaf-ans-1 4s linear infinite' : leafIndex === 2 ? 'leaf-ans-2 3s linear infinite' : 'leaf-ans-3 3s linear infinite') : 'none'
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes moving-flower-1 {
          0%, 100% { transform: rotate(2deg); }
          50% { transform: rotate(-2deg); }
        }
        @keyframes moving-flower-2 {
          0%, 100% { transform: rotate(18deg); }
          50% { transform: rotate(14deg); }
        }
        @keyframes moving-flower-3 {
          0%, 100% { transform: rotate(-18deg); }
          50% { transform: rotate(-20deg) rotateY(-10deg); }
        }
        @keyframes blooming-flower {
          0% { transform: scale(0); }
        }
        @keyframes blooming-leaf-right {
          0% { transform-origin: left; transform: rotate(70deg) rotateY(30deg) scale(0); }
        }
        @keyframes blooming-leaf-left {
          0% { transform-origin: right; transform: rotate(-70deg) rotateY(30deg) scale(0); }
        }
        @keyframes grow-flower-tree {
          0% { height: 0; border-radius: 1vmin; }
        }
        @keyframes light-ans {
          0% { opacity: 0; transform: translateY(0vmin); }
          25% { opacity: 1; transform: translateY(-5vmin) translateX(-2vmin); }
          50% { opacity: 1; transform: translateY(-15vmin) translateX(2vmin); filter: blur(0.2vmin); }
          75% { transform: translateY(-20vmin) translateX(-2vmin); filter: blur(0.2vmin); }
          100% { transform: translateY(-30vmin); opacity: 0; filter: blur(1vmin); }
        }
        @keyframes flower-g-long-ans {
          0%, 100% { transform: rotate(-30deg) rotateY(-20deg); }
          50% { transform: rotate(-32deg) rotateY(-20deg); }
        }
        @keyframes growing-grass-ans {
          0% { transform: scale(0); }
        }
        @keyframes growing-grass-ans--1 {
          0% { transform-origin: bottom left; transform: rotate(-20deg) scale(0); }
        }
        @keyframes growing-grass-ans--2 {
          0% { transform-origin: bottom right; transform: rotate(10deg) scale(0); }
        }
        @keyframes growing-grass-ans--3 {
          0% { transform-origin: bottom left; transform: rotate(-18deg) rotateX(-20deg) scale(0); }
        }
        @keyframes growing-grass-ans--4 {
          0% { transform-origin: bottom right; transform: rotate(2deg) scale(0); }
        }
        @keyframes growing-grass-ans--5 {
          0% { transform-origin: bottom left; transform: rotate(-24deg) rotateX(-20deg) scale(0); }
        }
        @keyframes growing-grass-ans--6 {
          0% { transform-origin: bottom right; transform: rotate(10deg) scale(0); }
        }
        @keyframes growing-grass-ans--7 {
          0% { transform-origin: bottom left; transform: rotate(-10deg) scale(0); }
        }
        @keyframes growing-grass-ans--8 {
          0% { transform-origin: bottom right; transform: rotate(10deg) scale(0); }
        }
        @keyframes moving-grass {
          0%, 100% { transform: rotate(-48deg) rotateY(40deg); }
          50% { transform: rotate(-50deg) rotateY(40deg); }
        }
        @keyframes moving-grass--2 {
          0%, 100% { transform: scale(0.5) rotate(75deg) rotateX(10deg) rotateY(-200deg); }
          50% { transform: scale(0.5) rotate(79deg) rotateX(10deg) rotateY(-200deg); }
        }
        @keyframes flower-g-right-ans {
          0%, 100% { transform: rotate(20deg); }
          50% { transform: rotate(24deg) rotateX(-20deg); }
        }
        @keyframes flower-g-right-ans--2 {
          0%, 100% { transform: rotateY(-180deg) rotate(0deg) rotateX(-20deg); }
          50% { transform: rotateY(-180deg) rotate(6deg) rotateX(-20deg); }
        }
        @keyframes flower__g-front-ans {
          0%, 100% { transform: rotate(-28deg) rotateY(30deg) scale(1.04); }
          50% { transform: rotate(-35deg) rotateY(40deg) scale(1.04); }
        }
        @keyframes flower__g-front__leaf-ans {
          0% { transform: rotate(10deg) scale(0); }
        }
        @keyframes flower__g-front__leaf-left-ans {
          0% { transform: rotateY(-180deg) rotate(5deg) scale(0); }
        }
        @keyframes flower__g-front__leaf-left-ans-2 {
          0% { transform: rotateY(-180deg) scale(0); }
        }
        @keyframes flower__g-fr-ans {
          0%, 100% { transform: rotate(2deg); }
          50% { transform: rotate(4deg); }
        }
        @keyframes flower__g-fr-leaft-ans-1 {
          0% { transform-origin: left; transform: rotate(45deg) scale(0); }
        }
        @keyframes flower__g-fr-leaft-ans-5 {
          0% { transform-origin: left; transform: rotate(55deg) scale(0); }
        }
        @keyframes flower__g-fr-leaft-ans-6 {
          0% { transform-origin: right; transform: rotate(25deg) rotateY(-180deg) scale(0); }
        }
        @keyframes flower__g-fr-leaft-ans-7 {
          0% { transform-origin: left; transform: rotate(45deg) scale(0); }
        }
        @keyframes flower__g-fr-leaft-ans-8 {
          0% { transform-origin: right; transform: rotate(15deg) rotateY(-180deg) scale(0); }
        }
        @keyframes grow-ans {
          0% { transform: scale(0); opacity: 0; }
        }
        @keyframes leaf-ans-1 {
          0%, 100% { transform: rotate(-5deg) scale(1); }
          50% { transform: rotate(5deg) scale(1.1); }
        }
        @keyframes leaf-ans-2 {
          0%, 100% { transform: rotateY(-180deg) rotate(5deg); }
          50% { transform: rotateY(-180deg) rotate(0deg) scale(1.1); }
        }
        @keyframes leaf-ans-3 {
          0%, 100% { transform: rotate(-10deg) rotateY(-180deg); }
          50% { transform: rotate(-20deg) rotateY(-180deg); }
        }
      `}</style>
    </div>
  );
}
