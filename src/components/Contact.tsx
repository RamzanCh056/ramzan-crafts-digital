import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Your App
          </h2>
          <p className="text-xl text-muted-foreground">
            Tell me about your project and let's get started
          </p>
        </div>

        <Card className="p-8 shadow-xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Project Budget</Label>
              <Input
                id="budget"
                placeholder="$5,000 - $10,000"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Project Description</Label>
              <Textarea
                id="description"
                placeholder="Tell me about your project..."
                className="min-h-32 resize-none"
              />
            </div>

            <Button size="lg" className="w-full text-base">
              Send Message
            </Button>

            <div className="pt-6 border-t border-border">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <span>
                  Prefer email?{" "}
                  <a
                    href="mailto:contact@ramzanch.dev"
                    className="text-primary hover:underline font-medium"
                  >
                    contact@ramzanch.dev
                  </a>
                </span>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
