import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { siteConfig } from '@/content/siteConfig';
import AuthControls from './AuthControls';

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/generated/business-logo.dim_512x512.png"
            alt={siteConfig.businessName}
            className="h-10 w-10 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight">{siteConfig.businessName}</span>
            {siteConfig.tagline && (
              <span className="hidden text-xs text-muted-foreground sm:block">{siteConfig.tagline}</span>
            )}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <nav className="flex items-center gap-1">
            {siteConfig.navigation.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? 'default' : 'ghost'}
                  className="font-medium"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
          <AuthControls variant="default" />
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <div className="flex flex-col gap-6 pt-8">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/generated/business-logo.dim_512x512.png"
                  alt={siteConfig.businessName}
                  className="h-10 w-10 object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-base font-bold">{siteConfig.businessName}</span>
                  {siteConfig.tagline && (
                    <span className="text-xs text-muted-foreground">{siteConfig.tagline}</span>
                  )}
                </div>
              </div>
              <nav className="flex flex-col gap-2">
                {siteConfig.navigation.map((item) => (
                  <SheetClose asChild key={item.path}>
                    <Link to={item.path}>
                      <Button
                        variant={isActive(item.path) ? 'default' : 'ghost'}
                        className="w-full justify-start font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="border-t border-border pt-4">
                <AuthControls variant="outline" className="w-full" showPrincipal />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
