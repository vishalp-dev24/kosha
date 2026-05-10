"use client";

/**
 * Subtle background gradient component inspired by Linear.app
 * Creates soft radial glows that don't distract from content
 */
export function MeshGradient({ className = "" }: { className?: string }) {
  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Primary glow - top left */}
      <div 
        className="absolute -left-[20%] -top-[10%] h-[50rem] w-[50rem] rounded-full opacity-[0.08] blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(47,107,255,0.4) 0%, transparent 70%)"
        }}
      />
      {/* Secondary glow - bottom right */}
      <div 
        className="absolute -right-[10%] bottom-[10%] h-[40rem] w-[40rem] rounded-full opacity-[0.06] blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(30,158,143,0.5) 0%, transparent 70%)"
        }}
      />
      {/* Tertiary accent - copper */}
      <div 
        className="absolute left-[30%] -top-[10%] h-[30rem] w-[30rem] rounded-full opacity-[0.05] blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(184,115,51,0.5) 0%, transparent 70%)"
        }}
      />
    </div>
  );
}

/**
 * Dark section background with subtle glow
 */
export function DarkMeshGradient({ className = "" }: { className?: string }) {
  return (
    <div 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Center glow */}
      <div 
        className="absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] blur-[150px]"
        style={{
          background: "radial-gradient(circle, rgba(47,107,255,0.3) 0%, transparent 60%)"
        }}
      />
      {/* Top accent */}
      <div 
        className="absolute left-[20%] -top-[20%] h-[35rem] w-[35rem] rounded-full opacity-[0.08] blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(30,158,143,0.4) 0%, transparent 70%)"
        }}
      />
    </div>
  );
}

/**
 * Grid pattern for technical sections
 */
export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none opacity-[0.03] ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(7,17,31,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(7,17,31,1) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px"
      }}
      aria-hidden="true"
    />
  );
}
