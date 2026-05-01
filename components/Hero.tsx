import Link from 'next/link'

export default function Hero() {
  return (
    <section className="section hero min-h-screen flex items-center">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I&apos;m Abdul Mannan
          </h1>
          <p className="text-xl md:text-2xl text-[var(--muted-foreground)] mb-8">
           A full-stack developer and AI/ML enthusiast building intelligent, scalable digital solutions.
           
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link href="#contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
