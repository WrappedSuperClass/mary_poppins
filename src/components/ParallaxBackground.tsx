'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const cloudRefs = useRef<(HTMLDivElement | null)[]>([]);
  const starRefs = useRef<(HTMLDivElement | null)[]>([]);
  const marryPoppinsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect mobile devices and disable parallax for better performance
    const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Ensure the background layer is tall enough to never expose edges
    const updateBackgroundSize = () => {
      if (!backgroundRef.current) return;
      const viewportHeight = window.innerHeight;
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      );
      // Oversize generously to ensure coverage even with late layout shifts
      const maxScroll = Math.max(0, docHeight - viewportHeight);
      const parallaxShift = Math.ceil(maxScroll * 0.25);
      const bgHeightt = Math.min(
        Math.ceil(docHeight + parallaxShift),
        Math.ceil(viewportHeight * 4)
      );
      console.log(bgHeightt);
      const bgHeight = bgHeightt - 2000;
      backgroundRef.current.style.height = `${bgHeight}px`;
      // Pin to top so we never start at the image bottom on narrow screens
      backgroundRef.current.style.top = `0px`;
    };

    updateBackgroundSize();

    // Recompute when images/content change page height
    const resizeObserver = new ResizeObserver(() => updateBackgroundSize());
    try {
      if (document.body) resizeObserver.observe(document.body);
    } catch {}

    // Also after full load and a short delay to catch async layout shifts
    const onLoad = () => updateBackgroundSize();
    window.addEventListener('load', onLoad);
    const delayed = window.setTimeout(updateBackgroundSize, 600);

    const handleScroll = () => {
      // Skip parallax on mobile devices
      if (isMobile) return;
      
      const scrollY = window.scrollY;
      
      // Background parallax (slowest movement) with clamped bounds
      if (backgroundRef.current) {
        const bgHeight = backgroundRef.current.offsetHeight;
        const viewport = window.innerHeight;
        const maxUp = Math.max(0, bgHeight - viewport);
        const shift = Math.min(scrollY * 0.1, maxUp);
        backgroundRef.current.style.transform = `translateY(${-shift}px)`;
      }

      // Clouds with different parallax speeds - move UP as user scrolls DOWN
      cloudRefs.current.forEach((cloudRef, index) => {
        if (cloudRef) {
          const speeds = [0.35, 0.45, 0.55, 0.65, 0.4, 0.5, 0.6, 0.7, 0.3, 0.55, 0.6, 0.45, 0.5, 0.65, 0.35, 0.6, 0.5, 0.55, 0.45, 0.4];
          const speed = speeds[index] || 0.5;
          const cloudOffset = -scrollY * speed;
          cloudRef.style.transform = `translateY(${cloudOffset}px)`;
        }
      });

      // Stars with very slow parallax speeds (they're far in the background) - move UP
      starRefs.current.forEach((starRef, index) => {
        if (starRef) {
          const starSpeeds = [0.02, 0.03, 0.04, 0.05, 0.05, 0.07, 0.09, 0.05, 0.05, 0.01, 0.02, 0.10, 0.05, 0.09, 0.06, 0.07, 0.08, 0.08, 0.05, 0.09, 0.09];
          const speed = starSpeeds[index] || 0.1;
          const starOffset = -scrollY * speed;
          starRef.style.transform = `translateY(${starOffset}px)`;
        }
      });

      // Mary Poppins flying upward effect - compose X and Y transforms
      if (marryPoppinsRef.current) {
        const flyingOffset = -scrollY * 0.8; // Move UP as user scrolls DOWN
        marryPoppinsRef.current.style.transform = `translateX(-50%) translateY(${flyingOffset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateBackgroundSize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateBackgroundSize);
      window.removeEventListener('load', onLoad);
      window.clearTimeout(delayed);
      try { resizeObserver.disconnect(); } catch {}
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ height: '100vh', width: '100vw' }}
    >
      {/* Main background */}
      <div 
        ref={backgroundRef}
        className="absolute parallax-bg"
        style={{
          top: 0,
          left: 0,
          right: 0,
          width: '100vw',
          height: '100vh'
        }}
      >
        <Image
          src="/images/background_desktop.png"
          alt="Background"
          fill
          className="object-cover object-top static-bg-mobile"
          priority
          quality={90}
        />
      </div>

      {/* Clouds naturally distributed across the entire page with reduced density on mobile */}
      {[
        // Visible on all screens (keep fewer but much larger on mobile)
        { top: '7%',  left: '40%', cloud: 'cloud1.png', size: { mobile: 150, desktop: 420 }, bp: 'all' },
        { top: '20%', right: '45%', cloud: 'cloud2.png', size: { mobile: 140, desktop: 380 }, bp: 'all' },
        { top: '50%', left: '46%',  cloud: 'cloud3.png', size: { mobile: 160, desktop: 420 }, bp: 'all' },
        { top: '32%', right: '78%', cloud: 'cloud1.png', size: { mobile: 150, desktop: 400 }, bp: 'all' },
        { top: '118%', left: '46%', cloud: 'cloud3.png', size: { mobile: 150, desktop: 420 }, bp: 'all' },

        // Only from md and up (rearranged for less overlap)
        { top: '52%', left: '20%', cloud: 'cloud1.png', size: { mobile: 140, desktop: 420 }, bp: 'md' },
        { top: '74%', left: '70%', cloud: 'cloud3.png', size: { mobile: 140, desktop: 420 }, bp: 'md' },
        { top: '98%', right: '20%', cloud: 'cloud2.png', size: { mobile: 130, desktop: 380 }, bp: 'md' },
        { top: '136%', left: '72%', cloud: 'cloud1.png', size: { mobile: 130, desktop: 380 }, bp: 'md' },

        // Only from lg and up
        { top: '158%', right: '10%', cloud: 'cloud2.png', size: { mobile: 130, desktop: 380 }, bp: 'lg' },
        { top: '146%', left: '18%', cloud: 'cloud1.png', size: { mobile: 140, desktop: 420 }, bp: 'lg' }
      ].map((cfg, index) => (
        <div
          key={`cloud-${index}`}
          ref={(el) => { cloudRefs.current[index] = el; }}
          className={`absolute parallax-clouds ${cfg.bp === 'md' ? 'hidden md:block' : cfg.bp === 'lg' ? 'hidden lg:block' : ''}`}
          style={{
            top: cfg.top,
            left: cfg.left,
            right: cfg.right,
            // Make clouds ~2x larger on mobile while keeping reasonable caps
            width: `clamp(${Math.round(cfg.size.mobile * 2)}px, 46vw, ${cfg.size.desktop}px)`,
            height: `clamp(${Math.round(cfg.size.mobile * 1.4)}px, 32vw, ${Math.round(cfg.size.desktop * 0.75)}px)`,
            opacity: 0.9,
            zIndex: index + 1
          }}
        >
          <Image
            src={`/images/${cfg.cloud}`}
            alt={`Cloud ${index + 1}`}
            fill
            className="object-contain"
            quality={80}
          />
        </div>
      ))}

      {/* 21 Stars (3 animations × 7 stars each) distributed naturally across the screen, behind clouds - responsive sizing */}
      {[
        // Animation 1: star1.png → star2.png → star3.png
        { top: '8%', left: '12%', size: 'clamp(20px, 4vw, 60px)', animation: 'starAnimation1', delay: '0s' },
        { top: '18%', left: '25%', size: 'clamp(15px, 3vw, 45px)', animation: 'starAnimation1', delay: '0.5s' },
        { top: '12%', left: '60%', size: 'clamp(25px, 5vw, 75px)', animation: 'starAnimation1', delay: '1s' },
        { top: '22%', left: '8%', size: 'clamp(18px, 4vw, 54px)', animation: 'starAnimation1', delay: '1.5s' },
        { top: '28%', left: '40%', size: 'clamp(22px, 4.5vw, 66px)', animation: 'starAnimation1', delay: '2s' },
        { top: '35%', left: '75%', size: 'clamp(16px, 3.5vw, 48px)', animation: 'starAnimation1', delay: '2.5s' },
        { top: '42%', left: '20%', size: 'clamp(24px, 5vw, 72px)', animation: 'starAnimation1', delay: '3s' },
        
        // Animation 2: star2.png → star3.png → star1.png (star2 images 10% smaller)
        { top: '48%', left: '55%', size: 'clamp(17px, 3.5vw, 51px)', animation: 'starAnimation2', delay: '0s' },
        { top: '38%', right: '12%', size: 'clamp(19px, 4vw, 57px)', animation: 'starAnimation2', delay: '0.7s' },
        { top: '52%', left: '35%', size: 'clamp(15px, 3vw, 46px)', animation: 'starAnimation2', delay: '1.4s' },
        { top: '58%', left: '65%', size: 'clamp(21px, 4vw, 62px)', animation: 'starAnimation2', delay: '2.1s' },
        { top: '62%', left: '15%', size: 'clamp(18px, 4vw, 54px)', animation: 'starAnimation2', delay: '2.8s' },
        { top: '68%', left: '45%', size: 'clamp(16px, 3.5vw, 49px)', animation: 'starAnimation2', delay: '3.5s' },
        { top: '72%', right: '25%', size: 'clamp(20px, 4vw, 59px)', animation: 'starAnimation2', delay: '4.2s' },
        
        // Animation 3: star3.png → star1.png → star2.png
        { top: '14%', left: '35%', size: 'clamp(26px, 5.5vw, 78px)', animation: 'starAnimation3', delay: '0s' },
        { top: '32%', left: '70%', size: 'clamp(14px, 3vw, 42px)', animation: 'starAnimation3', delay: '0.8s' },
        { top: '46%', left: '25%', size: 'clamp(28px, 6vw, 84px)', animation: 'starAnimation3', delay: '1.6s' },
        { top: '54%', right: '18%', size: 'clamp(19px, 4vw, 57px)', animation: 'starAnimation3', delay: '2.4s' },
        { top: '66%', left: '50%', size: 'clamp(25px, 5vw, 75px)', animation: 'starAnimation3', delay: '3.2s' },
        { top: '74%', left: '8%', size: 'clamp(17px, 3.5vw, 51px)', animation: 'starAnimation3', delay: '4s' },
        { top: '78%', right: '35%', size: 'clamp(23px, 4.5vw, 69px)', animation: 'starAnimation3', delay: '4.8s' }
      ].map((star, index) => (
        <div 
          key={`star-${index}`}
          ref={(el) => { starRefs.current[index] = el; }}
          className="absolute parallax-clouds"
          style={{
            top: star.top,
            left: star.left,
            right: star.right,
            width: star.size,
            height: star.size,
            zIndex: 0, // Behind clouds
            animation: `${star.animation} 5.15s steps(1, end) infinite ${star.delay}`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
      ))}

      {/* Mary Poppins flying upward - responsive sizing */}
      <div 
        ref={marryPoppinsRef}
        className="absolute parallax-clouds"
        style={{
          top: '60%',
          left: '70%',
          transform: 'translateX(-50%)',
          width: 'clamp(200px, 25vw, 400px)',
          height: 'clamp(300px, 35vw, 600px)',
          zIndex: 5, // Above clouds
          animation: 'float 3s ease-in-out infinite'
        }}
      >
        <Image
          src="/images/marry_poppins.png"
          alt="Mary Poppins"
          fill
          className="object-contain"
          quality={90}
        />
      </div>
    </div>
  );
}
