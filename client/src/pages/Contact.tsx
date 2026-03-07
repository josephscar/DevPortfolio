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
      className: "border-border rounded-none bg-card text-accent-cyan font-mono font-bold"
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
            <h1 className="font-sans text-6xl font-extrabold tracking-tighter mb-8 text-foreground">
              GET IN <span className="text-gradient-hero">TOUCH</span>
            </h1>
            <p className="font-mono text-lg text-muted-foreground mb-12">
              Have a project in mind or just want to chat about game dev? Drop me a line. I'm currently open for freelance work and collaborations.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card text-accent-cyan flex items-center justify-center border border-border">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono font-bold text-sm text-muted-foreground">EMAIL</div>
                  <div className="font-sans text-xl font-bold">hello@devportfolio.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card text-accent-cyan flex items-center justify-center border border-border">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono font-bold text-sm text-muted-foreground">LOCATION</div>
                  <div className="font-sans text-xl font-bold">San Francisco, CA</div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-border">
              <h3 className="section-label mb-4 w-full">SOCIAL UPLINK</h3>
              <div className="flex gap-4 mt-6">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 border border-border flex items-center justify-center hover:bg-accent-cyan hover:text-black transition-colors">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="card-sci-fi p-8 relative"
          >
            <div className="absolute top-0 right-0 w-full h-2 bg-transparent opacity-10" />
            <h2 className="font-sans text-3xl font-extrabold mb-6 text-foreground">TRANSMIT_MESSAGE</h2>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono font-bold uppercase">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="PLAYER ONE" {...field} className="rounded-none border-border bg-transparent focus-visible:ring-0 focus-visible:border-accent-cyan font-mono" />
                      </FormControl>
                      <FormMessage className="font-mono" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono font-bold uppercase">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} className="rounded-none border-border bg-transparent focus-visible:ring-0 focus-visible:border-accent-cyan font-mono" />
                      </FormControl>
                      <FormMessage className="font-mono" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono font-bold uppercase">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Type your message here..." {...field} className="rounded-none border-border bg-transparent min-h-[150px] focus-visible:ring-0 focus-visible:border-accent-cyan font-mono resize-none" />
                      </FormControl>
                      <FormMessage className="font-mono" />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full btn-sci-fi h-12 bg-accent-cyan text-black hover:bg-white hover:text-black">
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
