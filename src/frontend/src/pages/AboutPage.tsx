import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/content/siteConfig';
import { usePageMeta } from '@/hooks/usePageMeta';

export default function AboutPage() {
  usePageMeta(
    `About - ${siteConfig.businessName}`,
    `Learn more about ${siteConfig.businessName} and our commitment to excellence. ${siteConfig.about.story.substring(0, 100)}...`
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-b from-muted/30 to-background">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Discover our story and what makes us different.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed">{siteConfig.about.story}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-border/40 bg-muted/30">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles that guide everything we do.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {siteConfig.about.values.map((value, index) => (
                <Card key={index} className="transition-shadow hover:shadow-md">
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
