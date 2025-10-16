import { 
  type ContactSubmission, 
  type InsertContactSubmission,
  type BlogPost,
  type InsertBlogPost
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  createBlogPost(data: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<string, ContactSubmission>;
  private blogPosts: Map<string, BlogPost>;

  constructor() {
    this.contactSubmissions = new Map();
    this.blogPosts = new Map();
    this.seedBlogPosts();
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
}

export const storage = new MemStorage();
