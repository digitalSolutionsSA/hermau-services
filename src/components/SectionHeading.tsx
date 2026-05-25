interface SectionHeadingProps {
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionHeading({ title, subtitle, light = false }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2
        className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
        style={{ color: light ? '#fff' : '#2d4055' }}
      >
        {title}
      </h2>
      <div className="mx-auto h-1 w-14 rounded-full" style={{ backgroundColor: '#5da028' }} />
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${light ? 'text-white/75' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
