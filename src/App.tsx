import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import React, { Suspense } from "react";
const Index = React.lazy(() => import("./pages/Index"));
const TemplatesPage = React.lazy(() => import("./pages/Templates"));
const TemplateDetail = React.lazy(() => import("./pages/TemplateDetail"));
const OrderPage = React.lazy(() => import("./pages/Order"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const Terms = React.lazy(() => import("./pages/Terms"));
const Admin = React.lazy(() => import("./pages/Admin"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function RouteErrorFallback() {
  return (
    <div className="min-h-[50vh] grid place-items-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
        <p className="text-muted-foreground">Please refresh the page.</p>
      </div>
    </div>
  );
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-[50vh]" /> }>
            <Routes>
              <Route path="/" element={<Index />} errorElement={<RouteErrorFallback />} />
              <Route path="/templates" element={<TemplatesPage />} errorElement={<RouteErrorFallback />} />
              <Route path="/t/:slug" element={<TemplateDetail />} errorElement={<RouteErrorFallback />} />
              <Route path="/order/:id" element={<OrderPage />} errorElement={<RouteErrorFallback />} />
              <Route path="/privacy" element={<Privacy />} errorElement={<RouteErrorFallback />} />
              <Route path="/terms" element={<Terms />} errorElement={<RouteErrorFallback />} />
              <Route path="/admin" element={<Admin />} errorElement={<RouteErrorFallback />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
