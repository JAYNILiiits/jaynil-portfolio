"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Cpu,
  Wifi,
  Brain,
  Eye,
  Zap,
  Users,
  Building,
  Star,
  TrendingUp,
  Globe,
  Shield,
  Cloud,
  Target,
  CheckCircle,
  ArrowRight,
  Download,
  Play,
  Trophy,
  BookOpen,
  Microscope,
  Rocket,
  Network,
  Server,
  FileText,
  BarChart3,
  Activity,
  MessageSquare,
  Quote,
  Presentation,
  ChevronRight,
  User,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors">
      {/* Professional Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 dark:border-slate-800/60 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 dark:from-slate-700 dark:via-slate-600 dark:to-slate-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="font-bold text-white text-lg">JP</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-950"></div>
              </div>
              <div>
                <h1 className="font-bold text-xl text-slate-900 dark:text-slate-100">
                  Jaynil Panjwani
                </h1>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  IoT Engineer & Research Innovator
                </p>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="#about"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-medium text-sm tracking-wide"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-medium text-sm tracking-wide"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-medium text-sm tracking-wide"
              >
                Projects
              </Link>
              <Link
                href="#expertise"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-medium text-sm tracking-wide"
              >
                Expertise
              </Link>
              <Link
                href="#achievements"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-medium text-sm tracking-wide"
              >
                Achievements
              </Link>
              <Link
                href="#contact"
                className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-medium text-sm tracking-wide"
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 shadow-lg">
                <MessageSquare className="w-4 h-4 mr-2" />
                Connect
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - Professional */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30 dark:from-slate-950/50 dark:to-slate-900/30"></div>
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <Badge
                    variant="secondary"
                    className="bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 font-medium"
                  >
                    Available for Opportunities
                  </Badge>
                </div>

                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                    Jaynil
                    <span className="block text-slate-700 dark:text-slate-300">
                      Panjwani
                    </span>
                  </h1>

                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 text-sm font-medium">
                      IoT Systems Engineer
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-4 py-2 text-sm font-medium"
                    >
                      Research Innovator
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-4 py-2 text-sm font-medium"
                    >
                      IEEE Member
                    </Badge>
                  </div>
                </div>

                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                  Pioneering the future of connected systems through innovative
                  IoT solutions, advanced communication networks, and
                  intelligent edge computing architectures. Currently driving
                  research initiatives at IIIT Sri City while building
                  next-generation AI-powered technologies.
                </p>

                <div className="flex items-center gap-6 text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span className="font-medium">IIIT Sri City, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">1,345+ Connections</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 px-8 py-3"
                  asChild
                >
                  <a href="mailto:jaynil.dp24@iiits.in">
                    <Mail className="w-5 h-5 mr-2" />
                    Get in Touch
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 bg-transparent"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/jaynil-panjwani/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 bg-transparent"
                  asChild
                >
                  <a
                    href="https://github.com/JAYNILiiits"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Avatar className="w-80 h-80 mx-auto border-8 border-white dark:border-slate-800 shadow-2xl">
                  <AvatarImage
                    src="/jaynil-professional.jpg"
                    alt="Jaynil Panjwani"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-600 dark:to-slate-700 text-white">
                    JP
                  </AvatarFallback>
                </Avatar>

                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      7+
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                      Projects
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      10+
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                      Certifications
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-8 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      8+
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                      Papers written
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-blue-100/30 dark:from-slate-800/50 dark:to-slate-700/30 rounded-3xl -z-10 transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-slate-200/30 to-indigo-100/20 dark:from-slate-700/30 dark:to-slate-600/20 rounded-3xl -z-20 transform -rotate-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 px-6 bg-white dark:bg-slate-900 border-y border-slate-200/60 dark:border-slate-800/60">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-slate-700 dark:text-slate-300" />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                10+ Certifications
              </div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">
                Industry Expertise
              </div>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-slate-700 dark:text-slate-300" />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                8+ Papers written
              </div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">
                Research Contributions
              </div>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-slate-700 dark:text-slate-300" />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                IEEE Reviewer
              </div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">
                2025 ML & Data Science Conference
              </div>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-slate-700 dark:text-slate-300" />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Innovation
              </div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">
                Startup Leadership
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Professional */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <Badge
                    variant="outline"
                    className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Professional Profile
                  </Badge>
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
                    About Jaynil
                  </h2>
                  <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                    Transforming ideas into intelligent systems that shape
                    tomorrow's connected world
                  </p>
                </div>

                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    As a dedicated{" "}
                    <strong>Electronics and Communication Engineering</strong>{" "}
                    student at IIIT Sri City and an active{" "}
                    <strong>IEEE member</strong>, I specialize in developing
                    cutting-edge IoT solutions that bridge the gap between
                    theoretical innovation and practical implementation.
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    My expertise spans across{" "}
                    <strong>Internet of Things (IoT)</strong>,{" "}
                    <strong>artificial intelligence</strong>, and{" "}
                    <strong>communication systems</strong>, with a particular
                    focus on smart city applications, edge computing, and
                    next-generation wireless technologies. Currently, I'm
                    driving research initiatives at the EIDS (Edge Intelligence
                    and Distributed Systems) Lab while leading GlareGuard AI as
                    Founder & CEO.
                  </p>

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Through my work with the <strong>IEEE IoT Community</strong>{" "}
                    and <strong>IEEE Communications Society</strong>, I actively
                    contribute to advancing the field of connected systems and
                    have published research in mobile edge computing
                    optimization for intelligent IoT applications.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                        Education
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        B.Tech ECE, IIIT Sri City
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Pursuing advanced studies in Electronics & Communication
                    with specialization in IoT systems and wireless
                    communication.
                  </p>
                </Card>

                <Card className="p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                      <Building className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                        Leadership
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Founder & CEO, GlareGuard AI
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Leading AI-powered computer vision solutions with focus on
                    safety and automation technologies.
                  </p>
                </Card>

                <Card className="p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
                      <Microscope className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                        Research
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        EIDS Lab, IIIT Sri City
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Conducting research on edge intelligence, distributed
                    systems, and IoT optimization for smart cities.
                  </p>
                </Card>

                <Card className="p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                        Community
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        IEEE Member & Contributor
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Active member of IEEE IoT Community and Communications
                    Society, contributing to technical advancement.
                  </p>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">
                  Core Expertise
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-slate-700 dark:text-slate-300">
                      IoT System Architecture
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Edge Computing & AI
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Wireless Communication
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Smart City Solutions
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Computer Vision
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Research & Development
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Professional */}
      <section
        id="experience"
        className="py-20 px-6 bg-slate-50/50 dark:bg-slate-900/50"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <Badge
                variant="outline"
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Professional Experience
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
                Career Journey
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Building innovative solutions through leadership, research, and
                technical excellence
              </p>
            </div>

            <div className="space-y-8">
              {/* GlareGuard AI */}
              <Card className="p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-700 dark:from-slate-700 dark:to-slate-500 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src="/glareguard-logo.png"
                      alt="GlareGuard AI Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                          Founder & Chief Executive Officer
                        </h3>
                        <p className="text-xl text-slate-700 dark:text-slate-300 font-semibold">
                          GlareGuard AI
                        </p>
                        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                          <span className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">
                            <Calendar className="w-4 h-4" />
                            August 2024 - Present
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200"
                          >
                            Full-time
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                          >
                            Leadership
                          </Badge>
                        </div>
                      </div>
                      <Badge className="bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 mt-4 xl:mt-0">
                        Currently Active
                      </Badge>
                    </div>

                    <div className="space-y-6">
                      <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                        Leading the development of AI-powered computer vision
                        solutions with a focus on safety automation and
                        intelligent systems. Spearheading research initiatives
                        in vehicle-to-vehicle communication and advanced driver
                        assistance systems.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Strategic vision and product roadmap development
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Technical architecture and R&D leadership
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Team building and cross-functional collaboration
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Investor relations and business development
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                              Founded and scaled AI startup from concept to MVP
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                              Developed proprietary computer vision algorithms
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                              Built cross-functional engineering team
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                              Established strategic partnerships
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          Computer Vision
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          AI/ML
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          V2V Communication
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          Startup Leadership
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          Product Strategy
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          Team Building
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Web3SSH */}
              <Card className="p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                          Web3 Sponsorship & Research Member
                        </h3>
                        <p className="text-xl text-slate-700 dark:text-slate-300 font-semibold">
                          Web3SSH - Web 3.0 Summer School and Hackathon
                        </p>
                        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                          <span className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">
                            <Calendar className="w-4 h-4" />
                            April 2025 - Present
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                          >
                            Part-time
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200"
                          >
                            Remote
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                        Contributing to Web3 research initiatives and event
                        coordination for one of the premier blockchain education
                        programs. Responsible for sponsorship strategy,
                        technical research, and community engagement in the
                        decentralized technology ecosystem.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                            Research Contributions
                          </h4>
                          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Blockchain protocol analysis and optimization
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              DeFi ecosystem research and documentation
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Smart contract security analysis
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                            Event Management
                          </h4>
                          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Sponsorship strategy and partner relations
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Technical workshop coordination
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Community engagement and outreach
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          Web3
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          Blockchain
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          Event Planning
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          Sponsorship Strategy
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          Technical Research
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          Community Building
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* HCI Lab */}
              <Card className="p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                          AR Development Intern
                        </h3>
                        <p className="text-xl text-slate-700 dark:text-slate-300 font-semibold">
                          Human-Computer Interaction Lab, IIIT Sri City
                        </p>
                        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                          <span className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">
                            <Calendar className="w-4 h-4" />
                            February 2025 - Present
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200"
                          >
                            Research Internship
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200"
                          >
                            On-site
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                        Developing advanced augmented reality applications using
                        Unity engine with integrated machine learning
                        capabilities. Working on marker-based AR systems, GPS
                        integration, ML-powered object recognition, and
                        intelligent user interface design for immersive
                        experiences.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                            Technical Projects
                          </h4>
                          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Unity-based AR application development
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Marker-based tracking system implementation
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              GPS-integrated location services
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              ML-powered object recognition in AR environments
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                            Research Focus
                          </h4>
                          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Immersive user experience design
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              AR interface optimization
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Real-world AR applications
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          Unity Engine
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          AR Development
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          C# Programming
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          GPS Integration
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          UI/UX Design
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          HCI Research
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* IEEE Reviewer */}
              <Card className="p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                          IEEE Paper Reviewer
                        </h3>
                        <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold">
                          2025 IEEE International Conference on Future Machine
                          Learning and Data Science
                        </p>
                        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                          <span className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">
                            <Calendar className="w-4 h-4" />
                            2025
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
                          >
                            Academic Review
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
                          >
                            IEEE Conference
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                        Selected as an esteemed peer reviewer for the
                        prestigious 2025 IEEE International Conference on Future
                        Machine Learning and Data Science, recognized for
                        expertise in IoT systems, edge computing, and AI
                        applications.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                            Review Expertise
                          </h4>
                          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Machine Learning algorithms and applications
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              IoT and edge computing integration
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Computer vision and object detection
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                            Academic Contribution
                          </h4>
                          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Peer review of research manuscripts
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Technical quality assessment
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 mt-0.5 text-slate-500 dark:text-slate-400" />
                              Research methodology evaluation
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          IEEE Conference
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          Peer Review
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          Machine Learning
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          Data Science
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600"
                        >
                          Academic Research
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Additional Roles */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                        Associate for Operations
                      </h3>
                      <p className="text-orange-600 dark:text-orange-400 font-medium mb-2">
                        E-Cell IIITS
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        January 2025 - Present
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Leading operational initiatives for the entrepreneurship
                        cell, organizing startup events and mentoring student
                        entrepreneurs.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                        Machine Learning Intern
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                        Orinson Technologies
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                        December 2024 - January 2025
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">
                        Developed ML models for predictive analytics, worked on
                        data preprocessing pipelines and model optimization
                        techniques.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Professional */}
      <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <Badge
                variant="outline"
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Featured Projects
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
                Innovation Portfolio
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Transforming complex challenges into intelligent solutions
                through cutting-edge technology
              </p>
            </div>

            <Tabs defaultValue="iot" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl p-1">
                <TabsTrigger
                  value="iot"
                  className="text-base font-medium rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm"
                >
                  <Cpu className="w-5 h-5 mr-2" />
                  IoT Systems
                </TabsTrigger>
                <TabsTrigger
                  value="ai"
                  className="text-base font-medium rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  AI & Vision
                </TabsTrigger>
                <TabsTrigger
                  value="health"
                  className="text-base font-medium rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm"
                >
                  <Activity className="w-5 h-5 mr-2" />
                  Health Tech
                </TabsTrigger>
                <TabsTrigger
                  value="communication"
                  className="text-base font-medium rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm"
                >
                  <Network className="w-5 h-5 mr-2" />
                  Communication
                </TabsTrigger>
              </TabsList>

              <TabsContent value="iot" className="space-y-8">
                {/* Smart City Water Management - Comprehensive */}
                <Card className="overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 bg-white dark:bg-slate-800">
                  <div className="lg:flex">
                    <div className="lg:w-2/5 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-10 text-white relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/95 to-indigo-600/95"></div>
                      <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                            <Wifi className="w-6 h-6" />
                          </div>
                          <Badge className="bg-white/20 text-white border-white/30">
                            Smart City Integration
                          </Badge>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold">
                            Smart Automated Dewatering of Stormwater Well
                          </h3>
                          <p className="text-blue-100 text-lg leading-relaxed">
                            Comprehensive IoT solution for IIIT Sri City's water
                            management with real-time monitoring, automated
                            control systems, and integrated smart city dashboard
                            for weather, water, and energy management.
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                            <span className="font-medium">
                              600m LoRa Range Achieved
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                            <span className="font-medium">
                              Real-time Smart City Dashboard
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                            <span className="font-medium">
                              Multi-sensor Integration
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                            <span className="font-medium">
                              Full-stack Web Application
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold">3</div>
                            <div className="text-sm text-blue-200">
                              Prototypes
                            </div>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold">600m</div>
                            <div className="text-sm text-blue-200">
                              LoRa Range
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-3/5 p-10">
                      <div className="space-y-8">
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                            Complete Smart City Solution
                          </h4>
                          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            Developed a comprehensive smart city water
                            management system for IIIT Sri City with integrated
                            weather monitoring, smart meters, and street
                            lighting control through iterative prototyping and
                            full-stack development.
                          </p>

                          <div className="space-y-6">
                            <div className="border-l-4 border-blue-500 pl-6 space-y-3">
                              <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold">
                                  1
                                </span>
                                <h5 className="font-bold text-slate-900 dark:text-slate-100">
                                  NodeMCU + Ultrasonic Foundation
                                </h5>
                              </div>
                              <p className="text-slate-700 dark:text-slate-300">
                                Initial implementation with NodeMCU
                                microcontroller and ultrasonic sensors for water
                                level detection. Integrated Firebase for
                                real-time data storage and automated relay
                                control with distance-based thresholds.
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="outline" className="text-xs">
                                  NodeMCU
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Firebase
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Ultrasonic Sensors
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Relay Automation
                                </Badge>
                              </div>
                            </div>

                            <div className="border-l-4 border-emerald-500 pl-6 space-y-3">
                              <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center text-sm font-bold">
                                  2
                                </span>
                                <h5 className="font-bold text-slate-900 dark:text-slate-100">
                                  LoRa Long-Range Communication
                                </h5>
                              </div>
                              <p className="text-slate-700 dark:text-slate-300">
                                Enhanced system with LoRa modules using
                                esptool.py 3.0 protocol for extended range
                                communication (600m tested). Implemented
                                time-delay synchronization to prevent data
                                flooding and ensure accurate transmission.
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="outline" className="text-xs">
                                  LoRa
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  600m Range
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  esptool.py 3.0
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Time Synchronization
                                </Badge>
                              </div>
                            </div>

                            <div className="border-l-4 border-purple-500 pl-6 space-y-3">
                              <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center text-sm font-bold">
                                  3
                                </span>
                                <h5 className="font-bold text-slate-900 dark:text-slate-100">
                                  Advanced Multi-Module System
                                </h5>
                              </div>
                              <p className="text-slate-700 dark:text-slate-300">
                                Production-ready system with Arduino WiFi,
                                waterproof ultrasonic sensors, brushless
                                submersible water pump, HC-12 433 SI4463
                                wireless modules, and MOSFET-controlled smart
                                relay system.
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="outline" className="text-xs">
                                  Arduino WiFi
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  HC-12 433MHz
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  Waterproof Sensors
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  MOSFET Control
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                            Smart City Dashboard Integration
                          </h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                              <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-4">
                                Frontend Dashboard
                              </h5>
                              <p className="text-blue-800 dark:text-blue-200 mb-3">
                                React-based smart city dashboard for IIIT Sri
                                City
                              </p>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-blue-700 dark:text-blue-300">
                                    Technology:
                                  </span>
                                  <span className="font-medium">
                                    React, HTML, Vite
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-blue-700 dark:text-blue-300">
                                    Features:
                                  </span>
                                  <span className="font-medium">
                                    Weather, Water, Smart Meters
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-blue-700 dark:text-blue-300">
                                    Real-time:
                                  </span>
                                  <span className="font-medium">
                                    Live Data Updates
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
                              <h5 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4">
                                Backend Infrastructure
                              </h5>
                              <p className="text-emerald-800 dark:text-emerald-200 mb-3">
                                Complete backend for weather, water, and smart
                                meter data
                              </p>
                              <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                  <span className="text-emerald-700 dark:text-emerald-300">
                                    Technology:
                                  </span>
                                  <span className="font-medium">
                                    Node.js, Express.js
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-emerald-700 dark:text-emerald-300">
                                    Database:
                                  </span>
                                  <span className="font-medium">
                                    MongoDB, Mongoose
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-emerald-700 dark:text-emerald-300">
                                    Integration:
                                  </span>
                                  <span className="font-medium">
                                    Multi-sensor APIs
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                          <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Dashboard
                          </Button>
                          <Button
                            variant="outline"
                            className="border-slate-300 dark:border-slate-600 bg-transparent"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Frontend Code
                          </Button>
                          <Button
                            variant="outline"
                            className="border-slate-300 dark:border-slate-600 bg-transparent"
                          >
                            <Server className="w-4 h-4 mr-2" />
                            Backend Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Auto Dimming Street Light - Comprehensive */}
                <Card className="border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800">
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900 rounded-2xl flex items-center justify-center">
                          <Zap className="w-7 h-7 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
                            Auto-Dimming Street Light System
                          </CardTitle>
                          <CardDescription className="text-lg text-slate-600 dark:text-slate-400">
                            Intelligent lighting with LDR-based brightness
                            control, power monitoring, and mobile app
                            integration
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800">
                        Smart Infrastructure
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-lg">
                          Advanced Features
                        </h4>
                        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            <span>
                              LDR-based automatic brightness control responding
                              to natural light
                            </span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            <span>
                              ACS 172 power consumption monitoring for energy
                              efficiency
                            </span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            <span>
                              Clock-based backup control system with
                              sunrise/sunset timing
                            </span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            <span>
                              MIT App Inventor mobile control interface
                            </span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            <span>
                              HLK-PM01 power module integration for precise
                              control
                            </span>
                          </li>
                          <li className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            <span>
                              Multiple digital pins for manual brightness
                              adjustment
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-lg">
                          System Architecture
                        </h4>
                        <div className="space-y-4">
                          <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-xl border border-yellow-200 dark:border-yellow-800">
                            <h5 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                              Hardware Components
                            </h5>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div className="flex justify-between">
                                <span className="text-yellow-800 dark:text-yellow-200">
                                  Controller:
                                </span>
                                <span className="font-medium">
                                  Arduino + NodeMCU
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-yellow-800 dark:text-yellow-200">
                                  Sensor:
                                </span>
                                <span className="font-medium">
                                  LDR (Light Dependent Resistor)
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-yellow-800 dark:text-yellow-200">
                                  Power Monitor:
                                </span>
                                <span className="font-medium">ACS 172</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-yellow-800 dark:text-yellow-200">
                                  Power Module:
                                </span>
                                <span className="font-medium">HLK-PM01</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-emerald-50 dark:bg-emerald-950 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800">
                            <h5 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">
                              Performance Metrics
                            </h5>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                                <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                                  60%
                                </div>
                                <div className="text-xs text-emerald-700 dark:text-emerald-300">
                                  Energy Saved
                                </div>
                              </div>
                              <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg">
                                <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400">
                                  ₹25K
                                </div>
                                <div className="text-xs text-yellow-700 dark:text-yellow-300">
                                  Annual Savings
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Arduino</Badge>
                          <Badge variant="outline">NodeMCU</Badge>
                          <Badge variant="outline">LDR Sensors</Badge>
                          <Badge variant="outline">HLK-PM01</Badge>
                          <Badge variant="outline">MIT App Inventor</Badge>
                          <Badge variant="outline">Firebase</Badge>
                        </div>

                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            className="flex-1 border-slate-300 dark:border-slate-600 bg-transparent"
                          >
                            <Play className="w-4 h-4 mr-2" />
                            View Demo
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1 border-slate-300 dark:border-slate-600 bg-transparent"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ai" className="space-y-8">
                {/* Object Detection Research - Comprehensive */}
                <Card className="overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 bg-white dark:bg-slate-800">
                  <div className="lg:flex">
                    <div className="lg:w-2/5 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 p-10 text-white relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/95 to-teal-600/95"></div>
                      <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                            <Eye className="w-6 h-6" />
                          </div>
                          <Badge className="bg-white/20 text-white border-white/30">
                            AI Research
                          </Badge>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold">
                            Object Detection on Raspberry Pi
                          </h3>
                          <p className="text-emerald-100 text-lg leading-relaxed">
                            Comprehensive performance analysis of various object
                            detection models on resource-constrained hardware
                            for edge computing applications. Systematic
                            evaluation of 5+ model architectures.
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-400" />
                            <span className="font-medium">
                              5+ Model Architectures Tested
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-400" />
                            <span className="font-medium">
                              Edge Computing Optimization
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-400" />
                            <span className="font-medium">
                              Performance Benchmarking
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-400" />
                            <span className="font-medium">
                              Future Scope Analysis
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold">YOLOv5</div>
                            <div className="text-sm text-emerald-200">
                              Only Working Model
                            </div>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold">4</div>
                            <div className="text-sm text-emerald-200">
                              Failed Models
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-3/5 p-10">
                      <div className="space-y-8">
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                            Systematic Model Evaluation
                          </h4>
                          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            Conducted extensive research on deploying
                            state-of-the-art object detection models on
                            Raspberry Pi 4B, analyzing performance bottlenecks,
                            resource constraints, and optimization strategies
                            for edge AI deployment.
                          </p>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-red-50 dark:bg-red-950 p-6 rounded-xl border border-red-200 dark:border-red-800">
                              <h5 className="font-bold text-red-900 dark:text-red-100 mb-4">
                                Failed Model Analysis
                              </h5>
                              <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-xs font-bold">
                                      ✗
                                    </span>
                                  </div>
                                  <div>
                                    <p className="font-medium text-red-800 dark:text-red-200">
                                      COCO Model
                                    </p>
                                    <p className="text-sm text-red-700 dark:text-red-300">
                                      Memory overflow issues, exceeded 4GB RAM
                                      limit
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-xs font-bold">
                                      ✗
                                    </span>
                                  </div>
                                  <div>
                                    <p className="font-medium text-red-800 dark:text-red-200">
                                      TensorFlow Full
                                    </p>
                                    <p className="text-sm text-red-700 dark:text-red-300">
                                      CPU bottleneck, &lt;1 FPS performance
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-xs font-bold">
                                      ✗
                                    </span>
                                  </div>
                                  <div>
                                    <p className="font-medium text-red-800 dark:text-red-200">
                                      TensorFlow Lite
                                    </p>
                                    <p className="text-sm text-red-700 dark:text-red-300">
                                      Compatibility issues with Raspberry Pi
                                      architecture
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-3">
                                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-xs font-bold">
                                      ✗
                                    </span>
                                  </div>
                                  <div>
                                    <p className="font-medium text-red-800 dark:text-red-200">
                                      YOLOv4
                                    </p>
                                    <p className="text-sm text-red-700 dark:text-red-300">
                                      Resource intensive, thermal throttling
                                      issues
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
                              <h5 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4">
                                Successful Implementation
                              </h5>
                              <div className="space-y-4">
                                <div>
                                  <p className="font-bold text-emerald-800 dark:text-emerald-200 text-lg mb-3">
                                    YOLOv5 (Optimized)
                                  </p>
                                  <div className="space-y-3">
                                    <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded">
                                      <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                                        Performance:
                                      </span>
                                      <span className="font-bold text-emerald-900 dark:text-emerald-100">
                                        Noticeable lag but functional
                                      </span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded">
                                      <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                                        Memory Usage:
                                      </span>
                                      <span className="font-bold text-emerald-900 dark:text-emerald-100">
                                        ~2.8 GB RAM
                                      </span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded">
                                      <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                                        CPU Load:
                                      </span>
                                      <span className="font-bold text-emerald-900 dark:text-emerald-100">
                                        85-95%
                                      </span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded">
                                      <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                                        Detection Quality:
                                      </span>
                                      <span className="font-bold text-emerald-900 dark:text-emerald-100">
                                        Good accuracy
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                            Future Optimization Strategies
                          </h4>
                          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                                  Hardware Acceleration
                                </h5>
                                <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                                  <li className="flex items-center gap-2">
                                    <ArrowRight className="w-3 h-3" />
                                    Coral TPU integration
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <ArrowRight className="w-3 h-3" />
                                    Jetson Nano deployment
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <ArrowRight className="w-3 h-3" />
                                    Custom lightweight models
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                                  Software Optimization
                                </h5>
                                <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                                  <li className="flex items-center gap-2">
                                    <ArrowRight className="w-3 h-3" />
                                    Model quantization techniques
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <ArrowRight className="w-3 h-3" />
                                    Pruning and compression
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <ArrowRight className="w-3 h-3" />
                                    Edge-specific architectures
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                          <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Research Results
                          </Button>
                          <Button
                            variant="outline"
                            className="border-slate-300 dark:border-slate-600 bg-transparent"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </Button>
                          <Button
                            variant="outline"
                            className="border-slate-300 dark:border-slate-600 bg-transparent"
                          >
                            <FileText className="w-4 h-4 mr-2" />
                            Performance Report
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="health" className="space-y-8">
                {/* Health Data Analytics */}
                <Card className="overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 bg-white dark:bg-slate-800">
                  <div className="lg:flex">
                    <div className="lg:w-2/5 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 p-10 text-white relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/95 to-pink-600/95"></div>
                      <div className="relative z-10 space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                            <Activity className="w-6 h-6" />
                          </div>
                          <Badge className="bg-white/20 text-white border-white/30">
                            Health Tech
                          </Badge>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold">
                            Advanced Fitness Data Analytics
                          </h3>
                          <p className="text-purple-100 text-lg leading-relaxed">
                            Transforming raw fitness watch data into clinically
                            relevant cardiovascular insights using advanced
                            machine learning and statistical analysis
                            techniques.
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-rose-400" />
                            <span className="font-medium">
                              3,000+ Heart Rate Records
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-rose-400" />
                            <span className="font-medium">
                              98% Data Accuracy Validation
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-rose-400" />
                            <span className="font-medium">
                              Clinical-level Insights
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold">1,173</div>
                            <div className="text-sm text-purple-200">
                              Anomalies Detected
                            </div>
                          </div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold">90 Days</div>
                            <div className="text-sm text-purple-200">
                              Analysis Period
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-3/5 p-10">
                      <div className="space-y-8">
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                            Data Engineering Excellence
                          </h4>
                          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            Developed a sophisticated data pipeline to process
                            and analyze fitness tracker data, transforming raw
                            sensor readings into actionable health insights.
                          </p>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                              <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-4">
                                Data Processing
                              </h5>
                              <div className="space-y-3">
                                <div className="flex justify-between">
                                  <span className="text-blue-800 dark:text-blue-200">
                                    Data Quality
                                  </span>
                                  <span className="font-bold text-blue-900 dark:text-blue-100">
                                    &lt;10% → 100%
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-blue-800 dark:text-blue-200">
                                    Records Processed
                                  </span>
                                  <span className="font-bold text-blue-900 dark:text-blue-100">
                                    3,000+
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-blue-800 dark:text-blue-200">
                                    Accuracy
                                  </span>
                                  <span className="font-bold text-blue-900 dark:text-blue-100">
                                    98%
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800">
                              <h5 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4">
                                Health Insights
                              </h5>
                              <div className="space-y-3">
                                <div className="flex justify-between">
                                  <span className="text-emerald-800 dark:text-emerald-200">
                                    Tachycardia Episodes
                                  </span>
                                  <span className="font-bold text-emerald-900 dark:text-emerald-100">
                                    1,030
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-emerald-800 dark:text-emerald-200">
                                    Bradycardia Events
                                  </span>
                                  <span className="font-bold text-emerald-900 dark:text-emerald-100">
                                    143
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-emerald-800 dark:text-emerald-200">
                                    Avg Resting HR
                                  </span>
                                  <span className="font-bold text-emerald-900 dark:text-emerald-100">
                                    94.1 bpm
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                            Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">Python</Badge>
                            <Badge variant="outline">Pandas</Badge>
                            <Badge variant="outline">NumPy</Badge>
                            <Badge variant="outline">Matplotlib</Badge>
                            <Badge variant="outline">Scikit-learn</Badge>
                            <Badge variant="outline">Google Colab</Badge>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                          <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Analysis
                          </Button>
                          <Button
                            variant="outline"
                            className="border-slate-300 dark:border-slate-600 bg-transparent"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="communication" className="space-y-8">
                {/* V2V Communication System */}
                <Card className="border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800">
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900 rounded-2xl flex items-center justify-center">
                          <Network className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-slate-900 dark:text-slate-100">
                            Vehicle-to-Vehicle Communication System
                          </CardTitle>
                          <CardDescription className="text-lg text-slate-600 dark:text-slate-400">
                            Advanced V2V prototype using NodeMCU with HTTP-based
                            data exchange protocol
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-800">
                        V2V Technology
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-lg">
                          System Architecture
                        </h4>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                              1
                            </span>
                            <div>
                              <p className="font-medium text-slate-900 dark:text-slate-100">
                                Primary Vehicle Node (NodeMCU 1)
                              </p>
                              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                                Creates WiFi AP with SSID: Nodemcu_AP, Password:
                                12345678
                              </p>
                              <p className="text-sm text-slate-700 dark:text-slate-300">
                                Hosts HTTP server at IP: 192.168.4.1
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                              2
                            </span>
                            <div>
                              <p className="font-medium text-slate-900 dark:text-slate-100">
                                Secondary Vehicle Node (NodeMCU 2)
                              </p>
                              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                                Connects to WiFi AP created by NodeMCU 1
                              </p>
                              <p className="text-sm text-slate-700 dark:text-slate-300">
                                Assigned IP: 192.168.4.2, exchanges data via
                                HTTP POST
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-lg">
                          Technical Implementation
                        </h4>
                        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-xl border border-orange-200 dark:border-orange-800">
                          <h5 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">
                            Communication Protocol
                          </h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-orange-800 dark:text-orange-200">
                                Protocol:
                              </span>
                              <span className="font-medium">HTTP POST/GET</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-orange-800 dark:text-orange-200">
                                Network:
                              </span>
                              <span className="font-medium">
                                WiFi Access Point
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-orange-800 dark:text-orange-200">
                                Data Format:
                              </span>
                              <span className="font-medium">JSON payload</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-orange-800 dark:text-orange-200">
                                Range:
                              </span>
                              <span className="font-medium">
                                ~50m (WiFi range)
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">NodeMCU</Badge>
                          <Badge variant="outline">WiFi AP</Badge>
                          <Badge variant="outline">HTTP Server</Badge>
                          <Badge variant="outline">V2V Protocol</Badge>
                          <Badge variant="outline">JSON Communication</Badge>
                        </div>

                        <Button
                          variant="outline"
                          className="w-full border-slate-300 dark:border-slate-600 bg-transparent"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Source Code
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section - Professional */}
      <section
        id="expertise"
        className="py-20 px-6 bg-slate-50/50 dark:bg-slate-900/50"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <Badge
                variant="outline"
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
              >
                <Code className="w-4 h-4 mr-2" />
                Technical Expertise
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
                Skills & Proficiencies
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive technical mastery across IoT, AI, and emerging
                technologies
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <Card className="p-8 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center">
                      <Cpu className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                        IoT & Hardware Systems
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Embedded systems and smart device development
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          Arduino & Microcontrollers
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            Expert
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-xs"
                          >
                            5+ years
                          </Badge>
                        </div>
                      </div>
                      <Progress value={98} className="h-3 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        NodeMCU, ESP32, Arduino Uno/Nano, STM32, Raspberry Pi
                        integration
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          Wireless Communication
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            Advanced
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs"
                          >
                            600m range
                          </Badge>
                        </div>
                      </div>
                      <Progress value={92} className="h-3 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        LoRa, WiFi, Bluetooth, HC-12, Zigbee, cellular IoT
                        protocols
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          Sensor Integration
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            Expert
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs"
                          >
                            Multi-sensor
                          </Badge>
                        </div>
                      </div>
                      <Progress value={95} className="h-3 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Ultrasonic, LDR, temperature, humidity, pressure,
                        accelerometer
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="outline">NodeMCU</Badge>
                    <Badge variant="outline">ESP32</Badge>
                    <Badge variant="outline">LoRa</Badge>
                    <Badge variant="outline">Raspberry Pi</Badge>
                    <Badge variant="outline">Sensors</Badge>
                    <Badge variant="outline">PCB Design</Badge>
                  </div>
                </Card>

                <Card className="p-8 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900 rounded-2xl flex items-center justify-center">
                      <Code className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                        Programming Languages
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Full-stack development and system programming
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          Python
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            Expert
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-xs"
                          >
                            Primary
                          </Badge>
                        </div>
                      </div>
                      <Progress value={96} className="h-3 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Data science, ML/AI, automation, web scraping, API
                        development
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          C/C++
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            Advanced
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs"
                          >
                            Embedded
                          </Badge>
                        </div>
                      </div>
                      <Progress value={90} className="h-3 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Arduino programming, embedded systems, performance
                        optimization
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          JavaScript/TypeScript
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            Intermediate
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs"
                          >
                            Web Dev
                          </Badge>
                        </div>
                      </div>
                      <Progress value={78} className="h-3 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        React, Node.js, Express, full-stack web development
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="p-8 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center">
                      <Brain className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                        AI & Machine Learning
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Intelligent systems and data analytics
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          Computer Vision
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            Advanced
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-xs"
                          >
                            YOLOv5
                          </Badge>
                        </div>
                      </div>
                      <Progress value={90} className="h-3 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Object detection, image processing, OpenCV, real-time
                        analysis
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          Data Science & Analytics
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            Expert
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs"
                          >
                            3K+ records
                          </Badge>
                        </div>
                      </div>
                      <Progress value={94} className="h-3 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Pandas, NumPy, statistical analysis, data visualization
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          Machine Learning Frameworks
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            Intermediate
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs"
                          >
                            Multi-framework
                          </Badge>
                        </div>
                      </div>
                      <Progress value={82} className="h-3 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        TensorFlow, PyTorch, Scikit-learn, model optimization
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="outline">OpenCV</Badge>
                    <Badge variant="outline">TensorFlow</Badge>
                    <Badge variant="outline">PyTorch</Badge>
                    <Badge variant="outline">YOLOv5</Badge>
                    <Badge variant="outline">Pandas</Badge>
                    <Badge variant="outline">Scikit-learn</Badge>
                  </div>
                </Card>

                <Card className="p-8 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900 rounded-2xl flex items-center justify-center">
                      <Cloud className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                        Cloud & Web Technologies
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Scalable systems and modern web development
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          AWS IoT Services
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            Advanced
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-xs"
                          >
                            Certified
                          </Badge>
                        </div>
                      </div>
                      <Progress value={90} className="h-3 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        IoT Core, Greengrass, SiteWise, Lambda, DynamoDB
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          Firebase & Real-time Systems
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            Advanced
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs"
                          >
                            Real-time
                          </Badge>
                        </div>
                      </div>
                      <Progress value={88} className="h-3 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Firestore, Authentication, Cloud Functions, real-time
                        databases
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          Web Development
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                            Intermediate
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs"
                          >
                            Full-stack
                          </Badge>
                        </div>
                      </div>
                      <Progress value={76} className="h-3 mb-2" />
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        React, Next.js, Node.js, Express, RESTful APIs
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Additional Skills Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3">
                  AR/VR Development
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Unity Engine</span>
                    <span className="font-medium">Advanced</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div className="flex flex-wrap justify-center gap-1">
                  <Badge variant="outline" className="text-xs">
                    Unity
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    AR Foundation
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    GPS AR
                  </Badge>
                </div>
              </Card>

              <Card className="p-6 text-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Web3 & Blockchain
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Blockchain Tech</span>
                    <span className="font-medium">Intermediate</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div className="flex flex-wrap justify-center gap-1">
                  <Badge variant="outline" className="text-xs">
                    Blockchain
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Smart Contracts
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    DeFi
                  </Badge>
                </div>
              </Card>

              <Card className="p-6 text-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Research & Analysis
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Technical Research</span>
                    <span className="font-medium">Expert</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                <div className="flex flex-wrap justify-center gap-1">
                  <Badge variant="outline" className="text-xs">
                    Technical Writing
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Data Analysis
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Innovation
                  </Badge>
                </div>
              </Card>

              <Card className="p-6 text-center border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3">
                  Leadership & Management
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Team Leadership</span>
                    <span className="font-medium">Advanced</span>
                  </div>
                  <Progress value={86} className="h-2" />
                </div>
                <div className="flex flex-wrap justify-center gap-1">
                  <Badge variant="outline" className="text-xs">
                    Team Management
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Project Planning
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Mentoring
                  </Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section - Professional */}
      <section
        id="achievements"
        className="py-20 px-6 bg-white dark:bg-slate-900"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <Badge
                variant="outline"
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
              >
                <Trophy className="w-4 h-4 mr-2" />
                Achievements & Recognition
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
                Professional Accomplishments
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Recognition of expertise through certifications, publications,
                and industry contributions
              </p>
            </div>

            <Tabs defaultValue="certifications" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-12 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl p-1">
                <TabsTrigger
                  value="certifications"
                  className="text-base font-medium rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm"
                >
                  <Award className="w-5 h-5 mr-2" />
                  Certifications
                </TabsTrigger>
                <TabsTrigger
                  value="publications"
                  className="text-base font-medium rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Publications
                </TabsTrigger>
                <TabsTrigger
                  value="achievements"
                  className="text-base font-medium rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm"
                >
                  <Trophy className="w-5 h-5 mr-2" />
                  Awards
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="text-base font-medium rounded-xl data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm"
                >
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Education
                </TabsTrigger>
              </TabsList>

              <TabsContent value="certifications" className="space-y-8">
                <p className="text-lg text-slate-600 dark:text-slate-400 text-center">
                  Professional excellence demonstrated through 40+ industry
                  certifications, 8+ peer-reviewed publications, and recognition
                  as an IEEE conference reviewer
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* IEEE Certification */}
                  <Card className="p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950 dark:to-blue-900/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <Badge className="bg-blue-600 text-white">IEEE</Badge>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 text-lg">
                      IoT & Autonomous Systems Certificate Program 2.0
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                      Comprehensive certification covering IoT fundamentals,
                      digital twins, autonomous systems, and advanced computer
                      vision applications.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        IoT Architecture
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Digital Twins
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Computer Vision
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Issued: May 2025
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs bg-transparent"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Verify
                      </Button>
                    </div>
                  </Card>

                  {/* AWS Certifications */}
                  <Card className="p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950 dark:to-orange-900/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center">
                        <Cloud className="w-6 h-6 text-white" />
                      </div>
                      <Badge className="bg-orange-600 text-white">AWS</Badge>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 text-lg">
                      AWS IoT & Cloud Architecture Suite
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                      Multiple AWS certifications including IoT Core,
                      Greengrass, SiteWise, Solutions Architect, and Database
                      Specialty.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        IoT Core
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Greengrass
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        SiteWise
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Latest: Jun 2025
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs bg-transparent"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Portfolio
                      </Button>
                    </div>
                  </Card>

                  {/* Stanford ML */}
                  <Card className="p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950 dark:to-emerald-900/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <Badge className="bg-emerald-600 text-white">
                        Stanford
                      </Badge>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 text-lg">
                      Machine Learning Specialization
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                      Advanced machine learning specialization covering
                      supervised learning, unsupervised learning, recommender
                      systems, and reinforcement learning.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        Machine Learning
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Deep Learning
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Reinforcement Learning
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Credential: 375XD2QH0PD7
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs bg-transparent"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Certificate
                      </Button>
                    </div>
                  </Card>

                  {/* Additional certifications in similar format */}
                  <Card className="p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950 dark:to-purple-900/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <Badge className="bg-purple-600 text-white">
                        MathWorks
                      </Badge>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 text-lg">
                      MATLAB Programming & Analysis
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                      Comprehensive MATLAB programming certification covering
                      data analysis, signal processing, and engineering
                      applications.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        MATLAB
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Data Analysis
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Signal Processing
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Issued: Jan 2025
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs bg-transparent"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Verify
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-950 dark:to-red-900/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-white" />
                      </div>
                      <Badge className="bg-red-600 text-white">
                        Maven Silicon
                      </Badge>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 text-lg">
                      VLSI System On Chip Design
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                      Advanced VLSI design certification covering system-on-chip
                      architecture, digital design principles, and semiconductor
                      technology.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        VLSI
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        SoC Design
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Digital Circuits
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Credential: 9345677138
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs bg-transparent"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Certificate
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-950 dark:to-indigo-900/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <Badge className="bg-indigo-600 text-white">NPTEL</Badge>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 text-lg">
                      NPTEL Certification Portfolio
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                      Multiple NPTEL certifications from premier Indian
                      institutes covering Industry 4.0, 6G communications, and
                      electronic systems design.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        Industry 4.0
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        6G Communications
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        PCB Design
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        IIT Delhi, IIT Kharagpur
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs bg-transparent"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Portfolio
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-50 to-purple-50/50 dark:from-indigo-950 dark:to-purple-950/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <Badge className="bg-indigo-600 text-white">
                        IEEE Reviewer
                      </Badge>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 text-lg">
                      2025 IEEE International Conference Reviewer
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                      Distinguished selection as peer reviewer for IEEE's
                      premier conference on Future Machine Learning and Data
                      Science, evaluating cutting-edge research from global
                      academic institutions.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        Peer Review
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        ML & Data Science
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        IEEE Conference
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Academic Excellence
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        Recognition: 2025
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs bg-transparent"
                      >
                        <Award className="w-3 h-3 mr-1" />
                        Prestigious Role
                      </Button>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="publications" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-950 dark:to-indigo-950/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                        <BookOpen className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                          Research Publications
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          Peer-reviewed academic contributions
                        </p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-lg">
                              Optimizing Wireless-Powered MEC for Intelligent
                              and Energy-Conscious IoT
                            </h4>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                                IEEE Publication
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Q1 Journal
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                2025
                              </Badge>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                              Advanced research in Mobile Edge Computing (MEC)
                              optimization for IoT systems, focusing on wireless
                              power transfer and energy-efficient computation
                              offloading strategies.
                            </p>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                <span className="text-sm text-slate-700 dark:text-slate-300">
                                  Novel energy optimization algorithms
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                <span className="text-sm text-slate-700 dark:text-slate-300">
                                  Wireless power transfer integration
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                <span className="text-sm text-slate-700 dark:text-slate-300">
                                  Performance evaluation & validation
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Microscope className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-lg">
                              Smart City Water Management: IoT-based Automated
                              Systems
                            </h4>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                                Conference Paper
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                IIIT Sri City
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                2024
                              </Badge>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                              Comprehensive study on IoT-based water management
                              systems for smart cities, including system
                              architecture, implementation challenges, and
                              performance analysis.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-50 to-teal-50/50 dark:from-emerald-950 dark:to-teal-950/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center">
                        <Quote className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                          Technical Articles
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          Industry insights and tutorials
                        </p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-100 dark:border-emerald-800 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                              Edge AI Deployment: Optimizing Object Detection on
                              Raspberry Pi
                            </h4>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                                Medium Article
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                5K+ views
                              </Badge>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                              Comprehensive guide on deploying AI models on edge
                              devices, covering optimization techniques and
                              practical implementation strategies.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-100 dark:border-emerald-800 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Network className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                              Building V2V Communication Systems: A Practical
                              Approach
                            </h4>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                                LinkedIn Article
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                3K+ views
                              </Badge>
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                              Step-by-step tutorial on implementing
                              vehicle-to-vehicle communication using NodeMCU.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="p-10 border border-slate-200 dark:border-slate-700 bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50/50 dark:from-teal-950 dark:via-cyan-950 dark:to-blue-950/50">
                  <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                      Research Impact Metrics
                    </h3>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                      Measuring the reach and influence of research
                      contributions
                    </p>
                  </div>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        8+
                      </div>
                      <div className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                        Publications
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Peer-reviewed papers
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Eye className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                        25K+
                      </div>
                      <div className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                        Article Views
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Across all platforms
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Quote className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                        45+
                      </div>
                      <div className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                        Citations
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Research citations
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Presentation className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                        12+
                      </div>
                      <div className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                        Presentations
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Conference talks
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-950 dark:to-indigo-950/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                        <Star className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                          Professional Recognition
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          Industry acknowledgment and awards
                        </p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Trophy className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                              Unstop Talent Park 2025
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 mb-3">
                              Certificate of Excellence in Round 1: Learning
                              Boot Camp
                            </p>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                                Excellence Award
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Top Performer
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Recognized for outstanding performance in
                              technical learning and skill demonstration among
                              thousands of participants nationwide.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                              IIIT Sri City Healthcare Hackathon
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 mb-3">
                              Certificate of Participation in Presentation Round
                            </p>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                                Hackathon
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Healthcare Tech
                              </Badge>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              Presented innovative IoT-based healthcare solution
                              addressing real-world medical challenges.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-50 to-teal-50/50 dark:from-emerald-950 dark:to-teal-950/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center">
                        <TrendingUp className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                          Professional Impact
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          Measurable contributions and influence
                        </p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-100 dark:border-emerald-800 shadow-sm">
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-4">
                          Network Growth & Engagement
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                              1,345+
                            </div>
                            <p className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">
                              LinkedIn Connections
                            </p>
                          </div>
                          <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                              362
                            </div>
                            <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                              Profile Views (7 days)
                            </p>
                          </div>
                          <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                              83
                            </div>
                            <p className="text-sm text-purple-700 dark:text-purple-300 font-medium">
                              Post Impressions
                            </p>
                          </div>
                          <div className="text-center p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                              63
                            </div>
                            <p className="text-sm text-orange-700 dark:text-orange-300 font-medium">
                              Search Appearances
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-emerald-100 dark:border-emerald-800 shadow-sm">
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-4">
                          Technical Contributions
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                            <span className="font-medium text-emerald-800 dark:text-emerald-200">
                              Open Source Projects
                            </span>
                            <span className="font-bold text-emerald-600 dark:text-emerald-400">
                              15+
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                            <span className="font-medium text-blue-800 dark:text-blue-200">
                              GitHub Stars Received
                            </span>
                            <span className="font-bold text-blue-600 dark:text-blue-400">
                              250+
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                            <span className="font-medium text-purple-800 dark:text-purple-200">
                              Technical Articles
                            </span>
                            <span className="font-bold text-purple-600 dark:text-purple-400">
                              12+
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="p-10 border border-slate-200 dark:border-slate-700 bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50/50 dark:from-purple-950 dark:via-pink-950 dark:to-rose-950/50">
                  <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                      Entrepreneurial Impact
                    </h3>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                      Building the future through innovative startups and
                      technology ventures
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Building className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        1
                      </div>
                      <div className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                        Startup Founded
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        GlareGuard AI - Computer Vision Solutions
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Users className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                        5+
                      </div>
                      <div className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                        Team Members
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        Cross-functional engineering team
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Target className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                        3+
                      </div>
                      <div className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                        Products Developed
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        AI-powered safety solutions
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="education" className="space-y-8">
                <Card className="p-10 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-950 dark:to-indigo-950/50">
                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-8">
                        <div className="space-y-3">
                          <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                            Bachelor of Technology - BTech
                          </h3>
                          <p className="text-2xl text-blue-600 dark:text-blue-400 font-bold">
                            Electronics and Communications Engineering
                          </p>
                          <p className="text-xl text-slate-700 dark:text-slate-300 font-semibold">
                            Indian Institute of Information Technology, Sri City
                          </p>
                          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                            <span className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full">
                              <Calendar className="w-5 h-5" />
                              2024 - 2028 (Expected)
                            </span>
                            <Badge className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-base px-4 py-2">
                              Current CGPA: 8.7/10
                            </Badge>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 mt-6 xl:mt-0">
                          <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-base px-6 py-3">
                            Currently Enrolled
                          </Badge>
                          <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-base px-6 py-3">
                            Dean's List
                          </Badge>
                        </div>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-8 mb-8">
                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                            Core Specializations
                          </h4>
                          <div className="space-y-4">
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm">
                              <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                                <Cpu className="w-5 h-5" />
                                Internet of Things (IoT)
                              </h5>
                              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                Advanced IoT system design, sensor networks,
                                wireless communication protocols, and edge
                                computing architectures.
                              </p>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm">
                              <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                                <Network className="w-5 h-5" />
                                Communication Systems
                              </h5>
                              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                Digital signal processing, wireless
                                communication, network protocols, and
                                next-generation communication technologies.
                              </p>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm">
                              <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                                <Cpu className="w-5 h-5" />
                                Embedded Systems
                              </h5>
                              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                Microcontroller programming, real-time systems,
                                hardware-software integration, and system
                                optimization.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                            Advanced Coursework
                          </h4>
                          <div className="space-y-4">
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm">
                              <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                                <Brain className="w-5 h-5" />
                                Artificial Intelligence & ML
                              </h5>
                              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                Machine learning algorithms, neural networks,
                                computer vision, and AI applications in
                                engineering.
                              </p>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm">
                              <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                Network Security
                              </h5>
                              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                Cybersecurity principles, cryptography, secure
                                communication protocols, and IoT security
                                frameworks.
                              </p>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm">
                              <h5 className="font-bold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                                <Server className="w-5 h-5" />
                                Edge Computing
                              </h5>
                              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                Distributed computing, fog computing
                                architectures, edge AI deployment, and
                                performance optimization.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                          Academic Excellence & Leadership
                        </h4>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-blue-100 dark:border-blue-800 shadow-sm">
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                Professional Memberships
                              </h5>
                              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                                <li className="flex items-center gap-3">
                                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                  <span>
                                    IEEE IoT Community - Active Member
                                  </span>
                                </li>
                                <li className="flex items-center gap-3">
                                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                  <span>
                                    IEEE Communications Society - Contributor
                                  </span>
                                </li>
                                <li className="flex items-center gap-3">
                                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                  <span>
                                    E-Cell IIITS - Associate for Operations
                                  </span>
                                </li>
                                <li className="flex items-center gap-3">
                                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                  <span>HCI Lab - Research Intern</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                                <Microscope className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                Research Activities
                              </h5>
                              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                                <li className="flex items-center gap-3">
                                  <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                  <span>
                                    EIDS Lab collaboration on smart city
                                    projects
                                  </span>
                                </li>
                                <li className="flex items-center gap-3">
                                  <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                  <span>
                                    IoT research initiatives and publications
                                  </span>
                                </li>
                                <li className="flex items-center gap-3">
                                  <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                  <span>
                                    Hackathon participation and competitions
                                  </span>
                                </li>
                                <li className="flex items-center gap-3">
                                  <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                  <span>Industry collaboration projects</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm">
                          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Trophy className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                            8.7/10
                          </div>
                          <p className="text-slate-700 dark:text-slate-300 font-medium">
                            Current CGPA
                          </p>
                        </div>
                        <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm">
                          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                            45+
                          </div>
                          <p className="text-slate-700 dark:text-slate-300 font-medium">
                            Courses Completed
                          </p>
                        </div>
                        <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-blue-800 shadow-sm">
                          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                            Top 10%
                          </div>
                          <p className="text-slate-700 dark:text-slate-300 font-medium">
                            Class Ranking
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-emerald-50 to-teal-50/50 dark:from-emerald-950 dark:to-teal-950/50">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Building className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                        Previous Education
                      </h3>
                      <p className="text-xl text-emerald-600 dark:text-emerald-400 font-bold mb-4">
                        Atomic Energy Central School, Kakrapar
                      </p>
                      <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                        Completed higher secondary education with distinction in
                        Science stream, specializing in Physics, Chemistry,
                        Mathematics, and Computer Science.
                      </p>

                      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800 shadow-sm">
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-4 text-lg">
                          Foundation in STEM Excellence
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">
                              Academic Achievements
                            </h5>
                            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                              {/* Add achievements here if needed */}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">
                              Core Subjects
                            </h5>
                            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                              <li>Physics</li>
                              <li>Chemistry</li>
                              <li>Mathematics</li>
                              <li>Computer Science</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
