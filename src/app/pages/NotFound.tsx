import { Link } from "react-router";
import { Button } from "../components/ui/button.tsx";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl text-orange-600 mb-4">404</h1>
          <h2 className="text-4xl mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off. Let's get you back to the delicious stuff!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" onClick={() => window.history.back()}>
            <a>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
