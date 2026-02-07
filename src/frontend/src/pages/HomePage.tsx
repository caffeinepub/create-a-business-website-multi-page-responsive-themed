import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/content/siteConfig';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function HomePage() {
  usePageMeta(
    `${siteConfig.businessName} - ${siteConfig.tagline}`,
    `${siteConfig.businessName} - ${siteConfig.tagline}. ${siteConfig.hero.subheadline}`
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-muted/30 to-background">
        <div className="container py-16 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  {siteConfig.hero.headline}
                </h1>
                <p className="text-lg text-muted-foreground sm:text-xl">
                  {siteConfig.hero.subheadline}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    {siteConfig.hero.ctaLabel}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg border border-border/40 bg-muted lg:aspect-auto lg:h-full">
              <img
                src="/assets/generated/hero-banner.dim_1600x900.png"
                alt="Hero banner"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features/Services Highlights */}
      <section className="container py-16 md:py-24">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Choose Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We deliver exceptional results through our commitment to quality and customer satisfaction.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.highlights.map((highlight, index) => (
            <Card key={index} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <CardTitle className="text-xl">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{highlight.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-muted/30">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contact us today to learn how we can help your business succeed.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button size="lg">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
