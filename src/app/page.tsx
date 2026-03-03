import type { Metadata } from 'next';
import Image from 'next/image';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import fact1 from '@/pics/factory_pics/fact1.jpg';
import awardsImage from '@/pics/factory_pics/awards.jpg';
import logo1Image from '@/logo1.png';
import logo2Image from '@/pics/logo2.png';
import pic1 from '@/pics/other_product_pics/1.jpg';
import pic12 from '@/pics/other_product_pics/12.jpg';
import pic23 from '@/pics/other_product_pics/23.jpg';
import { 
  Factory, 
  Mail, 
  Phone,
  Globe,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Trusted Manufacturer | PortalsMachinary',
  description: 'Learn more about our manufacturing capability, factory standards, awards, and global delivery support.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="h-14 w-[220px] overflow-hidden">
              <Image
                src={logo2Image}
                alt="PortalsMachinery logo"
                className="h-14 w-auto max-w-none scale-125 origin-left object-contain"
                priority
              />
            </div>
            <Badge variant="secondary" className="ml-2">Futuristic Solutions</Badge>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#factory" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              About Factory
            </a>
            <a href="#products" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              Other Products
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700"
          >
            Get Quote
          </a>
        </div>
      </nav>

      {/* Factory Background Section */}
      <section id="factory" className="container mx-auto px-4 py-20">
        <div className="mb-16 grid gap-8 lg:grid-cols-[320px_1fr] lg:items-center">
          <div className="mx-auto w-full max-w-[320px]">
            <Image
              src={logo1Image}
              alt="PortalsMachinery logo"
              className="h-auto w-full object-contain"
              priority
            />
          </div>
          <div className="text-center lg:text-left">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300">
              <Award className="mr-2 h-4 w-4" />
              About Us
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
              Trusted Manufacturer
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl lg:mx-0 mx-auto">
              As a leading Chinese manufacturing enterprise, we specialise in precision machinery and industrial equipment with over 15 years of experience serving global markets.
            </p>
          </div>
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

        <div id="products" className="mt-8">
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
