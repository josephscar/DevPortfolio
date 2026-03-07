import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Mail, MapPin, Twitter, Github, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "MESSAGE SENT",
      description: "I'll get back to you as soon as possible.",
      className: "border border-accent rounded-none bg-card text-accent font-mono"
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="pt-24 container mx-auto px-4 pb-20 flex-grow">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="section-label mb-4 block">Connect</span>
            <h1 className="font-sans text-6xl font-bold tracking-tighter mb-8">
              GET IN{" "}
              <span className="text-accent">TOUCH</span>
            </h1>
            <p className="font-mono text-sm text-muted-foreground mb-12 leading-relaxed">
              Have a project in mind or just want to chat about game dev? Drop me a line. I'm currently open for freelance work and collaborations.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono font-bold text-xs text-muted-foreground tracking-widest uppercase mb-1">EMAIL</div>
                  <div className="font-sans text-lg font-bold">hello@devportfolio.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono font-bold text-xs text-muted-foreground tracking-widest uppercase mb-1">LOCATION</div>
                  <div className="font-sans text-lg font-bold">Fullerton, CA</div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-border">
              <h3 className="font-mono font-bold text-xs tracking-widest uppercase text-muted-foreground mb-4">SOCIAL_UPLINK</h3>
              <div className="flex gap-3">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border p-8 relative card-accent-cyan box-shadow-comic"
          >
            <h2 className="font-sans text-3xl font-bold mb-6">TRANSMIT_MESSAGE</h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="PLAYER ONE" {...field} className="rounded-none border border-border bg-background focus-visible:ring-0 focus-visible:border-accent font-mono text-sm" />
                      </FormControl>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} className="rounded-none border border-border bg-background focus-visible:ring-0 focus-visible:border-accent font-mono text-sm" />
                      </FormControl>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Type your message here..." {...field} className="rounded-none border border-border bg-background min-h-[150px] focus-visible:ring-0 focus-visible:border-accent font-mono text-sm resize-none" />
                      </FormControl>
                      <FormMessage className="font-mono text-xs" />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full rounded-none bg-transparent text-accent border border-accent hover:bg-accent hover:text-background transition-all font-mono font-bold text-xs h-12 uppercase tracking-widest">
                  <Send className="w-4 h-4 mr-2" /> Send Transmission
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
