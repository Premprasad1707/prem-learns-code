import { ExternalLink, Github, BarChart, Building, TrendingUp, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TechZone Academy Construction Analysis",
      description: "Comprehensive data analysis project examining construction trends, cost optimization, and project timeline efficiency for TechZone Academy's infrastructure development.",
      technologies: ["Python", "Pandas", "Matplotlib", "Statistical Analysis"],
      icon: Building,
      category: "Data Analysis",
      highlights: [
        "Analyzed 500+ construction records",
        "Identified 15% cost reduction opportunities", 
        "Created interactive visualizations"
      ],
      status: "Completed"
    },
    {
      title: "Sales Performance Dashboard",
      description: "Interactive dashboard for tracking sales metrics, customer behavior analysis, and revenue forecasting using Python and data visualization libraries.",
      technologies: ["Python", "Seaborn", "Plotly", "Jupyter"],
      icon: BarChart,
      category: "Data Visualization",
      highlights: [
        "Real-time sales tracking",
        "Customer segmentation analysis",
        "Revenue prediction models"
      ],
      status: "In Progress"
    },
    {
      title: "Market Trend Predictor",
      description: "Machine learning model to predict market trends using historical data, technical indicators, and sentiment analysis for better investment decisions.",
      technologies: ["Scikit-learn", "NumPy", "Pandas", "ML Algorithms"],
      icon: TrendingUp,
      category: "Machine Learning",
      highlights: [
        "75% prediction accuracy",
        "Multi-factor analysis",
        "Risk assessment integration"
      ],
      status: "Planning"
    },
    {
      title: "Customer Data Pipeline",
      description: "Automated data processing pipeline for customer analytics, including data cleaning, transformation, and storage optimization for business intelligence.",
      technologies: ["Python", "SQL", "Data Processing", "ETL"],
      icon: Database,
      category: "Data Engineering",
      highlights: [
        "Automated data cleaning",
        "90% processing efficiency",
        "Scalable architecture"
      ],
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-700 border-green-200";
      case "In Progress": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Planning": return "bg-orange-100 text-orange-700 border-orange-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-h1 mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my data science and development projects, demonstrating practical 
            applications of Python, machine learning, and data analysis techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="card-feature group">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-h3 mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth">
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth">
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="card-professional inline-block">
            <h3 className="text-h3 mb-2">Interested in my work?</h3>
            <p className="text-muted-foreground mb-4">
              Check out my GitHub for more projects and code samples
            </p>
            <button className="btn-hero">
              <Github size={20} className="mr-2" />
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;