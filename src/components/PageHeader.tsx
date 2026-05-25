interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage: string
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <div
      className="relative h-56 md:h-72 flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow mb-2">{title}</h1>
        {subtitle && <p className="text-white/90 text-base md:text-lg max-w-xl mx-auto">{subtitle}</p>}
      </div>
    </div>
  )
}
