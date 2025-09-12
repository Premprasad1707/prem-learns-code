import { useState } from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, color: "bg-primary" },
        { name: "SQL", level: 80, color: "bg-accent" },
        { name: "JavaScript", level: 65, color: "bg-secondary" },
        { name: "R", level: 55, color: "bg-muted" },
      ]
    },
    {
      title: "Data Science & Analytics",
      skills: [
        { name: "Pandas", level: 85, color: "bg-primary" },
        { name: "NumPy", level: 80, color: "bg-accent" },
        { name: "Matplotlib", level: 90, color: "bg-secondary" },
        { name: "Seaborn", level: 75, color: "bg-muted" },
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "Scikit-learn", level: 75, color: "bg-primary" },
        { name: "TensorFlow", level: 50, color: "bg-accent" },
        { name: "Statistical Analysis", level: 80, color: "bg-secondary" },
        { name: "Data Mining", level: 70, color: "bg-muted" },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Jupyter Notebook", level: 95, color: "bg-primary" },
        { name: "Git & GitHub", level: 75, color: "bg-accent" },
        { name: "Excel", level: 90, color: "bg-secondary" },
        { name: "Power BI", level: 65, color: "bg-muted" },
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-h1 mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels 
            across various programming languages, frameworks, and tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-smooth ${
                activeCategory === index
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          <div className="card-professional">
            <h3 className="text-h2 mb-8 text-center text-primary">
              {skillCategories[activeCategory].title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  
                  <div className="skill-bar">
                    <div 
                      className={`skill-progress ${skill.color}`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-professional text-center">
            <div className="text-2xl font-bold text-primary mb-2">3+</div>
            <p className="text-muted-foreground">Years Learning</p>
          </div>
          
          <div className="card-professional text-center">
            <div className="text-2xl font-bold text-primary mb-2">10+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          
          <div className="card-professional text-center">
            <div className="text-2xl font-bold text-primary mb-2">5+</div>
            <p className="text-muted-foreground">Technologies Mastered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;