import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "Coursera - IBM",
      date: "2024",
      status: "Completed",
      description: "Comprehensive course covering Python fundamentals, data manipulation with pandas, and data visualization.",
      skills: ["Python", "Pandas", "Data Analysis", "Jupyter Notebooks"],
      credentialUrl: "#"
    },
    {
      title: "Machine Learning Basics",
      issuer: "edX - MIT",
      date: "2024",
      status: "Completed",
      description: "Introduction to machine learning algorithms, supervised and unsupervised learning techniques.",
      skills: ["ML Algorithms", "Scikit-learn", "Model Evaluation", "Feature Engineering"],
      credentialUrl: "#"
    },
    {
      title: "Data Visualization with Matplotlib",
      issuer: "DataCamp",
      date: "2023",
      status: "Completed",
      description: "Advanced data visualization techniques using Matplotlib and Seaborn for effective data storytelling.",
      skills: ["Matplotlib", "Seaborn", "Data Visualization", "Statistical Plots"],
      credentialUrl: "#"
    },
    {
      title: "SQL for Data Analysis",
      issuer: "Udacity",
      date: "2023", 
      status: "Completed",
      description: "Database querying, joins, aggregations, and advanced SQL techniques for data analysis.",
      skills: ["SQL", "Database Design", "Query Optimization", "Data Extraction"],
      credentialUrl: "#"
    },
    {
      title: "Advanced Python Programming",
      issuer: "LinkedIn Learning",
      date: "In Progress",
      status: "In Progress",
      description: "Advanced Python concepts including OOP, decorators, generators, and best practices.",
      skills: ["OOP", "Advanced Python", "Code Optimization", "Testing"],
      credentialUrl: "#"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "Planned 2024",
      status: "Planned",
      description: "Professional certification for building and deploying machine learning models using TensorFlow.",
      skills: ["TensorFlow", "Deep Learning", "Neural Networks", "Model Deployment"],
      credentialUrl: "#"
    }
  ];

  const achievements = [
    {
      title: "Dean's List",
      description: "Academic excellence recognition for outstanding performance",
      year: "2023"
    },
    {
      title: "Data Science Competition",
      description: "Top 10 finalist in university-wide data science hackathon",
      year: "2024"
    },
    {
      title: "Research Publication",
      description: "Co-authored paper on construction data analysis methodologies",
      year: "2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-700 border-green-200";
      case "In Progress": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Planned": return "bg-orange-100 text-orange-700 border-orange-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    return status === "Completed" ? CheckCircle : Calendar;
  };

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-h1 mb-4">Certifications & Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through certified courses and recognition of academic 
            and professional achievements in data science and programming.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-h2 mb-8 text-primary">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const StatusIcon = getStatusIcon(cert.status);
              return (
                <div key={index} className="card-professional group hover:scale-105 transition-spring">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="text-primary" size={20} />
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getStatusColor(cert.status)}`}>
                      <StatusIcon size={12} />
                      {cert.status}
                    </span>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                    {cert.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    {cert.issuer} • {cert.date}
                  </p>
                  
                  <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  {cert.status === "Completed" && (
                    <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth">
                      <ExternalLink size={14} />
                      <span className="text-sm font-medium">View Credential</span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-h2 mb-8 text-primary">Academic & Professional Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="card-professional text-center group hover:scale-105 transition-spring">
                <div className="p-3 bg-accent/10 rounded-full w-fit mx-auto mb-4">
                  <Award className="text-accent" size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{achievement.year}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Stats */}
        <div className="mt-16 card-professional bg-gradient-hero">
          <div className="text-center">
            <h3 className="text-h2 mb-8">Learning Journey Stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <p className="text-muted-foreground">Certifications</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground">Hours Studied</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <p className="text-muted-foreground">Major Platforms</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Skills Acquired</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;