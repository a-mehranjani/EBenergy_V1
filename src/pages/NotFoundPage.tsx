import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { useSeo } from "@/components/Seo";

export function NotFoundPage() {
  useSeo({ title: "Page not found — EBenergy", description: "The page you're looking for doesn't exist." });

  return (
    <section className="flex min-h-[70vh] items-center bg-white">
      <div className="container-content text-center">
        <p className="font-display text-7xl font-bold text-brand-100 sm:text-8xl">404</p>
        <h1 className="mt-4 text-balance text-2xl font-bold text-ink-900 sm:text-3xl">This page isn't generating any power</h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-ink-600">
          The page you're looking for may have been moved or retired. Let's get you back on the grid.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary">
            <Home className="h-4 w-4" />
            Back home
          </Link>
          <Link to="/solutions" className="btn-secondary">
            <ArrowLeft className="h-4 w-4" />
            View solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
