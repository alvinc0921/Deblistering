import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import fact1 from '@/pics/factory_pics/fact1.jpg';
import awardsImage from '@/pics/factory_pics/awards.jpg';
import pic1 from '@/pics/other_product_pics/1.jpg';
import pic12 from '@/pics/other_product_pics/12.jpg';
import pic23 from '@/pics/other_product_pics/23.jpg';
import machineFront from '@/pics/machine_pics/front.png';
import generatedProduct4 from '@/pics/machine_pics/generated-product-4.png';
import generatedProduct7 from '@/pics/machine_pics/generated-product-7.png';
import generatedProduct9 from '@/pics/machine_pics/generated-product-9.png';
import { 
  CheckCircle2, 
  Factory, 
  Zap, 
  Shield, 
  Droplets, 
  Users, 
  Mail, 
  Phone,
  Globe,
  Award,
  Settings,
  Clock,
  TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'PM1000 Deblistering Machine | Advanced Pharmaceutical Equipment',
  description: 'High-efficiency automatic deblistering machine for UK market. Manufactured by leading Chinese factory with ISO certification.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <Factory className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900 dark:text-white">PortalsMachinary</span>
            <Badge variant="secondary" className="ml-2">Made in China</Badge>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              Features
            </a>
            <a href="#specs" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              Specifications
            </a>
            <a href="#factory" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              About Factory
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              Contact
            </a>
          </div>
          <Button asChild>
            <a href="#contact">Get Quote</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300">
              <Zap className="mr-2 h-4 w-4" />
              UK Market Ready
            </Badge>
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl">
              Professional{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Deblistering
              </span>{' '}
              Machine
            </h1>
            <p className="text-xl font-semibold text-blue-700 dark:text-blue-300">
              Model: PM1000
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Revolutionise your pharmaceutical packaging process with our state-of-the-art automatic deblistering machine. Designed for efficiency, reliability, and compliance with UK pharmaceutical standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base" asChild>
                <a href="#contact">Request Quote</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a href="#specs">View Specifications</a>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">UK Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">ISO</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Certified</div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="inline-block rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 p-4 shadow-2xl">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-3">
                <Image
                  src={machineFront}
                  alt="Front view of deblistering machine"
                  priority
                  className="h-auto w-full max-w-[560px] object-contain"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-4 shadow-xl dark:bg-slate-800">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">CE Certified</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">UK Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="text-center mb-16">
          <Badge className="mb-4">Key Features</Badge>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
            Why Choose Our Deblistering Machine?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Practical, pharmacy-focused performance with stable output, low damage, and easy operation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-2 hover:border-blue-500 transition-colors">
            <CardHeader>
              <Zap className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-2" />
              <CardTitle className="text-2xl">Semi-automatic Throughput</CardTitle>
              <CardDescription>
                Handles <strong>30-40 blister sheets per minute</strong> for efficient daily deblistering work.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-blue-500 transition-colors">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-2" />
              <CardTitle className="text-2xl">High Success Rate</CardTitle>
              <CardDescription>
                Delivers a separation success rate of <strong>&ge;98.5%</strong> for reliable pill recovery.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-blue-500 transition-colors">
            <CardHeader>
              <CheckCircle2 className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-2" />
              <CardTitle className="text-2xl">Low Pill Damage</CardTitle>
              <CardDescription>
                Designed to keep pill damage at <strong>&le;0.5%</strong> under standard operating conditions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-blue-500 transition-colors">
            <CardHeader>
              <Clock className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-2" />
              <CardTitle className="text-2xl">Fast Setup</CardTitle>
              <CardDescription>
                Ready to use within minutes with straightforward startup and operator-friendly controls.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-blue-500 transition-colors">
            <CardHeader>
              <Shield className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-2" />
              <CardTitle className="text-2xl">Safer Operation</CardTitle>
              <CardDescription>
                A transparent protective cover helps prevent accidental contact with moving components.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-blue-500 transition-colors">
            <CardHeader>
              <Settings className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-2" />
              <CardTitle className="text-2xl">Flexible and Stable Mechanics</CardTitle>
              <CardDescription>
                Simple adjustment supports multiple blister sizes, and a robust roller system ensures consistent separation.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-blue-500 transition-colors md:col-span-2 lg:col-span-3">
            <CardHeader>
              <Users className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-2" />
              <CardTitle className="text-2xl">Designed for Real Pharmacy Workflows</CardTitle>
              <CardDescription>
                Built for <strong>hospital pharmacies</strong>, <strong>community pharmacies</strong>, and <strong>wholesalers</strong>.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-12 text-center mb-16">
          <h3 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Product Highlights</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Key design details shown directly on the machine images.
          </p>
        </div>
        <div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="overflow-hidden border-2">
              <div className="relative aspect-[4/3] w-full">
                <Image src={generatedProduct4} alt="Convenient storage design" fill className="object-contain bg-white p-2 dark:bg-slate-950" />
              </div>
            </Card>

            <Card className="overflow-hidden border-2">
              <div className="relative aspect-[4/3] w-full">
                <Image src={generatedProduct7} alt="Easy operation design" fill className="object-contain bg-white p-2 dark:bg-slate-950" />
              </div>
            </Card>

            <Card className="overflow-hidden border-2">
              <div className="relative aspect-[4/3] w-full">
                <Image src={generatedProduct9} alt="Durable and easy-to-clean design" fill className="object-contain bg-white p-2 dark:bg-slate-950" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4">Technical Specs</Badge>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
            Machine Specifications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technical specifications for PM1000
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                Parameter / Value
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between py-2 border-b">
                <span className="text-slate-600 dark:text-slate-400">Dimensions</span>
                <span className="font-semibold text-slate-900 dark:text-white">285mm (L) × 255mm (W) × 250mm (H)</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-slate-600 dark:text-slate-400">Power</span>
                <span className="font-semibold text-slate-900 dark:text-white">25W</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-slate-600 dark:text-slate-400">Noise Level</span>
                <span className="font-semibold text-slate-900 dark:text-white">56dB</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-slate-600 dark:text-slate-400">Voltage</span>
                <span className="font-semibold text-slate-900 dark:text-white">AC 250V</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-slate-600 dark:text-slate-400">Blister Width Range</span>
                <span className="font-semibold text-slate-900 dark:text-white">1cm - 12cm</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-600 dark:text-slate-400">Supported Blister Rows</span>
                <span className="font-semibold text-slate-900 dark:text-white">1 - 5</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Factory Background Section */}
      <section id="factory" className="container mx-auto px-4 py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300">
            <Award className="mr-2 h-4 w-4" />
            About Us
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
            Trusted Manufacturer
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            As a leading Chinese manufacturing enterprise, we specialise in precision machinery and industrial equipment with over 15 years of experience serving global markets.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="overflow-hidden border-2">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={fact1}
                alt="Factory workshop with production equipment"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Card>
          <Card className="overflow-hidden border-2">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={pic12}
                alt="Factory production line and quality inspection area"
                fill
                className="object-contain bg-white dark:bg-slate-950 p-2"
              />
            </div>
          </Card>
        </div>

        <Card className="mt-8 border-2">
          <CardHeader>
            <CardTitle className="text-3xl">Factory Overview</CardTitle>
            <CardDescription>
              Stable production, strict quality control, and global delivery support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Our factory is equipped with modern machining lines, standardized assembly stations, and in-process quality checkpoints to ensure every deblistering machine is built with consistent precision. From component sourcing to final performance testing, each step follows documented procedures focused on reliability, safety, and export-ready quality. With experienced engineers and responsive after-sales coordination, we support customers from quotation and customization to shipment and long-term operation.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-8 overflow-hidden border-2">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative aspect-[4/3] w-full md:aspect-auto md:min-h-[320px]">
              <Image
                src={awardsImage}
                alt="Factory awards and certifications display"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex items-center p-8">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                  <Award className="h-4 w-4" />
                  Awarded Manufacturer
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Our manufacturing team has been recognized for consistent product quality, export reliability, and strong after-sales support. These awards reflect our commitment to delivering dependable equipment for global pharmaceutical workflows.
                </p>
              </div>
            </CardContent>
          </div>
        </Card>

        <div className="mt-8">
          <h3 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">Other Products</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden border-2">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={pic23}
                  alt="High precision crystal cutting machine"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">High-Precision Crystal Cutting Machine</CardTitle>
                <CardDescription>
                  This model is built for stable micron-level cutting and consistent edge quality in gemstone processing.
                  Our cutting solutions are supplied to high-standard industrial customers, including suppliers serving
                  leading automotive brands such as BMW.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden border-2">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={pic1}
                  alt="Automatic packaging machine"
                  fill
                  className="object-contain bg-white dark:bg-slate-950 p-2"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">packaging machines</CardTitle>
                <CardDescription>
                  A compact and reliable packaging solution designed for fast line integration, clean sealing quality,
                  and long-hour operation with low maintenance requirements.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
              Ready to Upgrade Your Production?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Contact us today for a free consultation and quotation
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Information</h3>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Email</div>
                      <div className="text-slate-600 dark:text-slate-400">zhuochen@portalsgroup.org</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Phone</div>
                      <div className="text-slate-600 dark:text-slate-400">+44 7895784578</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">Location</div>
                      <div className="text-slate-600 dark:text-slate-400">Manufacturing Base, China</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Quick Enquiry</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Send us a message with your requirements and we'll get back to you within 24 hours.
                  </p>
                  <ContactForm />
                  <div className="text-center text-sm text-slate-500 dark:text-slate-500">
                    Or call us directly at +44 7895784578
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Factory className="h-6 w-6 text-slate-600 dark:text-slate-400" />
              <span className="font-semibold text-slate-900 dark:text-white">PortalsMachinary Pro</span>
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              © 2024 PortalsMachinary Manufacturing. All rights reserved.
            </div>
            <Badge variant="outline">Made in China</Badge>
          </div>
        </div>
      </footer>
    </div>
  );
}
