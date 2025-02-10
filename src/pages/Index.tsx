
import { motion } from "framer-motion";
import { ArrowRight, Code, GitBranch, Layout } from "lucide-react";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted">
      {/* Hero Section */}
      <section className="container pt-32 pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-sm font-medium text-primary/60">Webflow Developer</span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 text-gradient leading-tight"
          >
            Crafting Digital Experiences Through Motion
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg text-primary/80 mb-8">
            I bring designs to life with seamless animations and intuitive interactions
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="#work"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
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
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Layout,
                title: "Webflow Development",
                description: "Custom websites built with clean code and smooth animations",
              },
              {
                icon: Code,
                title: "Custom Solutions",
                description: "Tailored functionality to meet your specific needs",
              },
              {
                icon: GitBranch,
                title: "Version Control",
                description: "Organized development process with proper versioning",
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
      </section>

      {/* Projects Preview */}
      <section id="work" className="py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-2xl mx-auto mb-16 text-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </motion.h2>
            <motion.p variants={itemVariants} className="text-primary/60">
              A selection of my recent work in web development and animation
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[1, 2].map((project) => (
              <motion.div
                key={project}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-video bg-muted rounded-2xl" />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                    <p className="text-white/80 mb-4">Web Development / Animation</p>
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-white hover:text-accent transition-colors"
                    >
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-muted">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-xl mx-auto text-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work Together
            </motion.h2>
            <motion.p variants={itemVariants} className="text-primary/60 mb-8">
              Have a project in mind? I'd love to help bring it to life.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
