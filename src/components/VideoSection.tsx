import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
const VIDEO_URL = 'https://assets.cdn.filesafe.space/5HWy6bgOsEC3bfBTO15d/media/6a5f880452b008d5618b0100.mov';

export const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const hideControlsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  // Format seconds to mm:ss
  const formatTime = (s: number) => {
    if (isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  // Auto-hide controls after 3s of no interaction
  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    hideControlsTimer.current = setTimeout(() => {
      if (playing) setShowControls(false);
    }, 3000);
  }, [playing]);

  useEffect(() => {
    resetHideTimer();
    return () => { if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current); };
  }, [playing, resetHideTimer]);

  // Sync play state
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) v.play().catch(() => setPlaying(false));
    else v.pause();
  }, [playing]);

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || isDragging) return;
    setCurrentTime(v.currentTime);
    setProgress((v.currentTime / v.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration);
  };

  // Click on progress bar
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = progressRef.current;
    const v = videoRef.current;
    if (!bar || !v) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    v.currentTime = ratio * v.duration;
    setProgress(ratio * 100);
    setCurrentTime(ratio * v.duration);
  };

  // Drag scrubbing
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleProgressClick(e);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const bar = progressRef.current;
      const v = videoRef.current;
      if (!bar || !v) return;
      const rect = bar.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      v.currentTime = ratio * v.duration;
      setProgress(ratio * 100);
      setCurrentTime(ratio * v.duration);
    };
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Fullscreen
  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section className="relative py-16 sm:py-20 bg-[#06020c] border-t border-purple-900/40 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-900/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight font-sans">
            SEE IT IN <span className="text-purple-400">ACTION</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Watch how the Swell Point Indicator works within the educational framework.
          </p>
        </div>

        {/* Video Container */}
        <div
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden border border-purple-500/40 shadow-2xl shadow-purple-950/60 bg-black group"
          onMouseMove={resetHideTimer}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => { if (playing) setShowControls(false); }}
        >
          {/* Video */}
          <video
            ref={videoRef}
            src={VIDEO_URL}
            autoPlay
            loop
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onClick={() => setPlaying(p => !p)}
            className="w-full h-auto block cursor-pointer"
          />

          {/* Center Play/Pause overlay on click */}
          {!playing && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
              onClick={() => setPlaying(true)}
            >
              <div className="w-16 h-16 rounded-full bg-purple-600/80 border border-purple-300/40 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.6)]">
                <Play className="w-7 h-7 text-white ml-1" fill="white" />
              </div>
            </div>
          )}

          {/* Controls Bar */}
          <div
            className={`absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8 transition-opacity duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}
          >
            {/* Progress Bar */}
            <div
              ref={progressRef}
              className="w-full h-1.5 bg-white/20 rounded-full mb-3 cursor-pointer relative group/progress"
              onClick={handleProgressClick}
              onMouseDown={handleMouseDown}
            >
              {/* Filled */}
              <div
                className="absolute left-0 top-0 h-full bg-purple-500 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
              {/* Thumb */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)] opacity-0 group-hover/progress:opacity-100 transition-opacity"
                style={{ left: `calc(${progress}% - 7px)` }}
              />
            </div>

            {/* Buttons Row */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {/* Play / Pause */}
                <button
                  onClick={() => setPlaying(p => !p)}
                  className="text-white hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {playing
                    ? <Pause className="w-5 h-5" fill="currentColor" />
                    : <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                  }
                </button>

                {/* Mute */}
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {muted
                    ? <VolumeX className="w-5 h-5" />
                    : <Volume2 className="w-5 h-5" />
                  }
                </button>

                {/* Time */}
                <span className="text-[11px] font-mono text-slate-300 select-none">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                className="text-white hover:text-purple-300 transition-colors cursor-pointer"
              >
                {isFullscreen
                  ? <Minimize className="w-5 h-5" />
                  : <Maximize className="w-5 h-5" />
                }
              </button>
            </div>
          </div>

          {/* Purple neon border glow */}
          <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500 pointer-events-none" />
        </div>

      </div>
    </section>
  );
};
