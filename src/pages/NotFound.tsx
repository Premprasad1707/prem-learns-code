import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="card-professional">
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          <h1 className="text-h2 mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="btn-hero inline-flex items-center justify-center">
              <Home size={20} className="mr-2" />
              Return Home
            </a>
            <button 
              onClick={() => window.history.back()} 
              className="btn-outline inline-flex items-center justify-center"
            >
              <ArrowLeft size={20} className="mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
