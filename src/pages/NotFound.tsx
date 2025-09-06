import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header currentPath={undefined} />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4 text-foreground">404</h1>
          <p className="text-lg text-muted-foreground mb-6">Oops! Page not found</p>
          <a href="/" className="btn btn-secondary">Return to Home</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
