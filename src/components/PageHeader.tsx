interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage: string
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <div
      className="relative h-60 md:h-80 flex items-end"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(45,64,85,0.92) 0%, rgba(45,64,85,0.4) 60%, rgba(0,0,0,0.1) 100%)' }} />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-10">
        <div className="w-12 h-1 rounded-full mb-3" style={{ backgroundColor: '#5da028' }} />
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-2 text-white/75 text-base md:text-lg max-w-xl">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
