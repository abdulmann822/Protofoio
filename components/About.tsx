export default function About() {
  return (
    <section id="about" className="section bg-[var(--secondary)]">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-4 text-[var(--muted-foreground)] leading-relaxed">
              I&apos;m an AI, Machine Learning, and Data Analysis enthusiast who enjoys turning data into useful insights and building smart solutions to real-world problems.
            </p>
            <p className="text-lg mb-4 text-[var(--muted-foreground)] leading-relaxed">
              I&apos;like working with modern tools and technologies to clean, analyze, and visualize data, as well as developing machine learning models that help in decision-making and automation.
            </p>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              My goal is to use data and AI to solve meaningful problems and create solutions that can make work easier and more efficient.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Projects Completed', value: '8+' },
              { label: 'Years Experience', value: '1+' },
              { label: 'Happy Clients', value: '4+' },
              { label: 'Code Commits', value: '200+' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card text-center"
              >
                <div className="text-3xl font-bold text-[var(--primary)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
