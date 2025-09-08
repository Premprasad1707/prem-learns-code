import { Code, Database, TrendingUp, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and efficient Python code following best practices"
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Extracting insights from complex datasets using pandas and visualization tools"
    },
    {
      icon: TrendingUp,
      title: "Machine Learning",
      description: "Building predictive models and exploring ML algorithms for real-world solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and communicating technical concepts clearly"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-h1 mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate learner on an exciting journey into the world of Python development 
            and Data Science, constantly exploring new technologies and methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Story */}
          <div>
            <h3 className="text-h2 mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                My fascination with technology began during my academic years, where I discovered 
                the power of data in solving real-world problems. This passion led me to dive deep 
                into Python programming and data science methodologies.
              </p>
              <p>
                Through hands-on projects like the TechZone Academy construction analysis, I've 
                learned to transform raw data into actionable insights. I believe in the power of 
                continuous learning and staying updated with the latest industry trends.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new datasets, reading about emerging 
                technologies, or contributing to open-source projects. I'm always excited to take on 
                new challenges and collaborate with fellow developers.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="card-feature group">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h4 className="text-h3 mb-2">{highlight.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;