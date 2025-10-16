import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Clock, DollarSign, ArrowRight, Users, Briefcase, Heart, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health, dental, and vision insurance for you and your family",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Continuous learning opportunities, mentorship programs, and clear career paths",
  },
  {
    icon: Users,
    title: "Great Culture",
    description: "Collaborative environment with team events, flexible work, and work-life balance",
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Market-leading salaries, equity options, and performance bonuses",
  },
];

const openPositions = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$150k - $200k",
    description: "Lead the development of cutting-edge AI solutions and mentor junior team members in machine learning best practices.",
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    department: "Engineering",
    location: "New York, NY / Remote",
    type: "Full-time",
    salary: "$140k - $180k",
    description: "Design and implement scalable cloud infrastructure solutions for enterprise clients using AWS, Azure, and GCP.",
  },
  {
    id: 3,
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "Austin, TX / Remote",
    type: "Full-time",
    salary: "$130k - $170k",
    description: "Protect our clients' critical systems and data through advanced security protocols and threat analysis.",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $160k",
    description: "Build modern web applications using React, Node.js, and cloud technologies to deliver exceptional user experiences.",
  },
  {
    id: 5,
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA / Hybrid",
    type: "Full-time",
    salary: "$140k - $180k",
    description: "Drive product strategy and roadmap for our flagship AI platform, working closely with engineering and design teams.",
  },
  {
    id: 6,
    title: "UX/UI Designer",
    department: "Design",
    location: "Los Angeles, CA / Remote",
    type: "Full-time",
    salary: "$110k - $150k",
    description: "Create beautiful, intuitive interfaces that delight users and solve complex business problems.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      ease: "easeOut",
    },
  },
};

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  
  const departments = ["All", ...Array.from(new Set(openPositions.map(p => p.department)))];
  
  const filteredPositions = selectedDepartment === "All"
    ? openPositions
    : openPositions.filter(p => p.department === selectedDepartment);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/90 to-background text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge className="mb-4 bg-chart-2 text-white">Join Our Team</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
                Build the Future with Us
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Join a team of passionate innovators working on cutting-edge technology solutions that make a real difference in the world.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Join ForanTech?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe in creating an environment where talented people can thrive, innovate, and make an impact.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <motion.div key={benefit.title} variants={itemVariants}>
                    <Card className="h-full hover-elevate active-elevate-2 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Open Positions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Find your next challenge and join our mission to transform businesses through technology.
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                {departments.map((dept) => (
                  <Button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    variant={selectedDepartment === dept ? "default" : "outline"}
                    size="sm"
                  >
                    {dept}
                  </Button>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {filteredPositions.map((position) => (
                <motion.div key={position.id} variants={itemVariants}>
                  <Card className="group hover-elevate active-elevate-2 transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                              {position.title}
                            </CardTitle>
                            <Badge>{position.department}</Badge>
                          </div>
                          <CardDescription className="text-base mb-4">
                            {position.description}
                          </CardDescription>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{position.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{position.type}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              <span>{position.salary}</span>
                            </div>
                          </div>
                        </div>
                        <Button className="group/btn w-full md:w-auto">
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {filteredPositions.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-xl text-muted-foreground">No positions available in this department.</p>
              </motion.div>
            )}
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Don't See a Perfect Match?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button size="lg" onClick={() => window.location.href = "/contact"}>
                Send Your Resume
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
