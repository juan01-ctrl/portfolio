import { motion } from "framer-motion";
import { ArrowRight, Code, Layout, Server } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Novatrix } from "uvcanvas"
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Index = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {


    fetch('https://formspree.io/f/xldgweke', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    toast.success("Message sent successfully!")
    form.reset();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const projects = [
    {
      url: 'https://dashboard.wortise.com/',
      img: './wortise.png',
      name: 'Wortise'
    },
    {
      url: 'https://www.bioeutectics.com/',
      img: './bioeutectics.png',
      name: 'Bioeutectics'
    },
    {
      url: 'https://www.ukali.cl/',
      img: './ukali.png',
      name: 'Ukali'
    },
    {
      url: 'https://www.oncoliq.bio/',
      img: './oncoliq.png',
      name: 'Oncoliq'

    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted">
      {/* Hero Section */}
      <section className="px-10 md:px-16 pt-32 pb-24 relative h-screen">
        <div className="w-full absolute top-0 left-0 h-screen rounded-b-lg overflow-hidden">
          <Novatrix />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto text-center relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="text-lg font-bold text-blue-700 ">Webflow Expert & Full Stack Developer</span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-8xl font-bold mb-6 text-gradient md:leading-snug "
          >
            Crafting Beautiful <br />Webflow Experiences
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-primary/80 mb-8 font-semibold">
            I create stunning, responsive websites with Webflow while leveraging full-stack capabilities for custom solutions
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="#work"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-xl"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="max-w-2xl mx-auto mb-16 text-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              Build Beyond Webflow
            </motion.h2>
            <motion.p variants={itemVariants} className="text-primary/60">
              Seamless Webflow development, custom code, and backend integrations.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >

            {[
              {
                icon: Layout,
                title: "Webflow Development",
                description: "Custom Webflow websites with stunning animations and interactions",
              },
              {
                icon: Code,
                title: "Custom Solutions",
                description: "Integration of custom code and third-party services with Webflow",
              },
              {
                icon: Server,
                title: "Full Stack Integration",
                description: "Seamless connection between Webflow and backend services",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-8 rounded-2xl"
              >
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-primary/60">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section >

      {/* Projects Preview */}
      < section id="work" className="py-24 bg-slate-100" >
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="max-w-2xl mx-auto mb-16 text-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              Featured Webflow Projects
            </motion.h2>
            <motion.p variants={itemVariants} className="text-primary/60">
              A showcase of my best Webflow websites and custom integrations
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.img}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className={`aspect-video bg-cover bg-center  rounded-2xl`} style={{ backgroundImage: `url(${project.img})` }} />
                <a
                  href={project.url}
                  target="_blank"
                >
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                      {/* <p className="text-white/80 mb-4">Custom Design / Animations</p> */}
                      <span
                        className="inline-flex items-center text-sm font-medium text-white hover:text-accent transition-colors"
                      >
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section >

      {/* Contact Form Section */}
      < section className="py-24 relative bg-gradient-to-r from-[#f1eff1] via-[#e1e6f8] to-[#d0d9f7]" >
        <div className="container max-w-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="glass-card p-8 rounded-2xl"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
              <p className="text-primary/60">
                Have a project in mind? Let's discuss how we can work together.
              </p>
            </motion.div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </div>
      </section >
      <footer className="bg-black p-4">
        <div className="flex gap-4 w-full items-center justify-between  container">
          <h2 className="text-white mb-0">Juan Ierace</h2>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/juan-ierace/" target="_blank" className="hover:-translate-y-1 transition-transform duration-300 ease-out py-2" >
              <img src="./Linkedin.svg" alt="linkedin" className="w-8" />
            </a>
            <a href="https://github.com/juan01-ctrl" target="_blank" className="hover:-translate-y-1 transition-transform duration-300 ease-out py-2">
              <img src="./Github.svg" alt="github" className="w-8" />
            </a>
          </div>
        </div>
      </footer >
    </div >
  );
};

export default Index;
