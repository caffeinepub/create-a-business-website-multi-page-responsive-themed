import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/content/siteConfig';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function ServicesPage() {
  usePageMeta(
    `Services - ${siteConfig.businessName}`,
    `Explore our comprehensive range of professional services. ${siteConfig.services.map(s => s.title).join(', ')}.`
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-b from-muted/30 to-background">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Comprehensive solutions tailored to meet your unique business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, index) => (
            <Card key={index} className="flex flex-col transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  {service.startingFrom && (
                    <Badge variant="secondary" className="text-xs">
                      {service.startingFrom}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
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
              Let's Discuss Your Project
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get in touch to learn more about how our services can benefit your business.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button size="lg">
                  Contact Us Today
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
