import { 
  type ContactSubmission, 
  type InsertContactSubmission,
  type BlogPost,
  type InsertBlogPost,
  type Project,
  type InsertProject,
  type Testimonial,
  type InsertTestimonial
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  createBlogPost(data: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  
  createProject(data: InsertProject): Promise<Project>;
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  
  createTestimonial(data: InsertTestimonial): Promise<Testimonial>;
  getTestimonials(): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<string, ContactSubmission>;
  private blogPosts: Map<string, BlogPost>;
  private projects: Map<string, Project>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.contactSubmissions = new Map();
    this.blogPosts = new Map();
    this.projects = new Map();
    this.testimonials = new Map();
    this.seedBlogPosts();
    this.seedProjects();
    this.seedTestimonials();
  }

  private seedBlogPosts() {
    const samplePosts: InsertBlogPost[] = [
      {
        title: "The Future of AI in Enterprise Solutions",
        description: "Exploring how artificial intelligence is transforming business operations and decision-making processes.",
        content: "Artificial intelligence is revolutionizing the way enterprises operate...",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      },
      {
        title: "Cloud Security Best Practices for 2025",
        description: "Essential strategies to protect your cloud infrastructure from emerging threats.",
        content: "As cloud adoption accelerates, security becomes paramount...",
        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      },
      {
        title: "Building Scalable Microservices Architecture",
        description: "A comprehensive guide to designing and implementing microservices that grow with your business.",
        content: "Microservices architecture has become the standard for modern applications...",
        thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      },
    ];

    samplePosts.forEach(post => {
      const id = randomUUID();
      const blogPost: BlogPost = {
        ...post,
        id,
        publishedAt: new Date(),
      };
      this.blogPosts.set(id, blogPost);
    });
  }

  async createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = {
      ...data,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createBlogPost(data: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = {
      ...data,
      id,
      publishedAt: new Date(),
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  private seedProjects() {
    const sampleProjects: InsertProject[] = [
      {
        title: "Global E-Commerce Platform Transformation",
        description: "Complete digital transformation for a Fortune 500 retail company, implementing AI-powered personalization and cloud infrastructure.",
        category: "AI Solutions",
        thumbnail: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
        client: "RetailCorp International",
        year: "2024",
        challenge: "Outdated legacy systems, poor customer experience, and scalability issues during peak shopping seasons.",
        solution: "Implemented a cloud-native microservices architecture with AI-driven product recommendations, real-time inventory management, and auto-scaling infrastructure.",
        results: "350% increase in conversion rate, 99.99% uptime during Black Friday, and 60% reduction in infrastructure costs.",
        technologies: ["AWS", "Kubernetes", "TensorFlow", "React", "Node.js"],
      },
      {
        title: "Financial Services Security Overhaul",
        description: "Enterprise-grade cybersecurity implementation for a leading financial institution handling millions of transactions daily.",
        category: "Cybersecurity",
        thumbnail: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
        client: "SecureBank Global",
        year: "2024",
        challenge: "Increasing cyber threats, regulatory compliance requirements, and legacy security infrastructure.",
        solution: "Deployed zero-trust architecture, AI-powered threat detection, end-to-end encryption, and continuous security monitoring with SOC integration.",
        results: "Zero security breaches post-implementation, 95% faster threat detection, and full regulatory compliance across 30+ countries.",
        technologies: ["Splunk", "CrowdStrike", "Okta", "Azure Sentinel", "HashiCorp Vault"],
      },
      {
        title: "Healthcare Cloud Migration Initiative",
        description: "Multi-cloud infrastructure deployment for a healthcare network serving 2M+ patients with strict HIPAA compliance.",
        category: "Cloud Infrastructure",
        thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
        client: "HealthFirst Network",
        year: "2023",
        challenge: "On-premise infrastructure limitations, data compliance requirements, and need for 24/7 availability for critical health systems.",
        solution: "Designed and deployed HIPAA-compliant multi-cloud architecture with automated backups, disaster recovery, and seamless EMR integration.",
        results: "40% cost reduction, 99.95% uptime for critical systems, and full HIPAA compliance with enhanced patient data security.",
        technologies: ["Azure", "AWS", "Terraform", "Docker", "PostgreSQL"],
      },
      {
        title: "Manufacturing IoT Analytics Platform",
        description: "AI-powered predictive maintenance platform processing data from 10,000+ IoT sensors across global manufacturing facilities.",
        category: "AI Solutions",
        thumbnail: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
        client: "TechManufacture Inc",
        year: "2023",
        challenge: "Unexpected equipment failures, high maintenance costs, and inefficient production scheduling.",
        solution: "Built real-time IoT data pipeline with machine learning models for predictive maintenance and automated scheduling optimization.",
        results: "45% reduction in unplanned downtime, $12M annual savings in maintenance costs, and 25% improvement in production efficiency.",
        technologies: ["Azure IoT Hub", "Apache Kafka", "Python", "scikit-learn", "Power BI"],
      },
    ];

    sampleProjects.forEach(project => {
      const id = randomUUID();
      const proj: Project = {
        ...project,
        id,
        createdAt: new Date(),
      };
      this.projects.set(id, proj);
    });
  }

  async createProject(data: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = {
      ...data,
      id,
      createdAt: new Date(),
    };
    this.projects.set(id, project);
    return project;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(project => project.category === category)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  private seedTestimonials() {
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "Sarah Johnson",
        role: "CTO",
        company: "RetailCorp International",
        content: "ForanTech transformed our e-commerce platform completely. The AI-powered recommendations increased our conversion rate by 350%. Their team's expertise in cloud architecture and attention to detail is unmatched.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
        rating: "5",
      },
      {
        name: "Michael Chen",
        role: "VP of Security",
        company: "SecureBank Global",
        content: "The cybersecurity overhaul ForanTech delivered exceeded all our expectations. We achieved zero breaches and full regulatory compliance across 30+ countries. Their proactive approach to threat detection is remarkable.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
        rating: "5",
      },
      {
        name: "Dr. Emily Rodriguez",
        role: "Chief Information Officer",
        company: "HealthFirst Network",
        content: "Moving to the cloud seemed daunting for our healthcare network, but ForanTech made it seamless. We reduced costs by 40% while improving uptime and maintaining strict HIPAA compliance. Exceptional work!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
        rating: "5",
      },
      {
        name: "James Patterson",
        role: "Director of Operations",
        company: "TechManufacture Inc",
        content: "The IoT analytics platform reduced our unplanned downtime by 45% and saved us $12M annually. ForanTech's predictive maintenance solution is a game-changer for manufacturing. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
        rating: "5",
      },
      {
        name: "Lisa Anderson",
        role: "CEO",
        company: "InnovateTech Solutions",
        content: "Working with ForanTech has been transformative for our business. Their cloud infrastructure expertise helped us scale rapidly while maintaining security and performance. True technology partners!",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
        rating: "5",
      },
    ];

    sampleTestimonials.forEach(testimonial => {
      const id = randomUUID();
      const test: Testimonial = {
        ...testimonial,
        id,
        createdAt: new Date(),
      };
      this.testimonials.set(id, test);
    });
  }

  async createTestimonial(data: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = {
      ...data,
      id,
      createdAt: new Date(),
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
}

export const storage = new MemStorage();
