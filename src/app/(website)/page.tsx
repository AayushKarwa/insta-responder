import { Instagram, MessageCircle, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500">
    {/* Header Section */}
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Instagram className="h-8 w-8 text-pink-600" />
            <span className="ml-2 text-2xl font-bold text-purple-700">InstaResponder</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="text-purple-700 hover:text-pink-600 transition-colors">How It Works</a>
            <a href="#pricing" className="text-purple-700 hover:text-pink-600 transition-colors">Pricing</a>
            <a href="#contact" className="text-purple-700 hover:text-pink-600 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-purple-700 hover:text-pink-600 hover:bg-pink-100">Log in</Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">Sign up</Button>
          </div>
        </div>
      </div>
    </header>

    {/* Hero Section */}
    <section className="py-20 text-center text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Automate Your Instagram Engagement</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Instantly respond to comments on your Instagram posts with AI-powered precision.</p>
        <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100 text-lg px-8 py-3">Get Started Free</Button>
      </div>
    </section>

    {/* How It Works Section */}
    <section id="how-it-works" className="py-20 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-700">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white rounded-full p-6 inline-block mb-4 shadow-lg">
              <Instagram className="h-12 w-12 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Connect Instagram</h3>
            <p className="text-gray-600">Link your Instagram account to our platform securely.</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full p-6 inline-block mb-4 shadow-lg">
              <MessageCircle className="h-12 w-12 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Set Keywords</h3>
            <p className="text-gray-600">Define keywords that trigger automatic responses.</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full p-6 inline-block mb-4 shadow-lg">
              <Zap className="h-12 w-12 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Auto-Respond</h3>
            <p className="text-gray-600">Our AI responds instantly to matching comments.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-700">Choose Your Plan</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-purple-700">Free Plan</CardTitle>
              <CardDescription>Get started with basic features</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-purple-600 mb-6">$0<span className="text-lg font-normal text-gray-600">/month</span></p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-pink-500" />
                  <span className="text-gray-600">1 Instagram account</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-pink-500" />
                  <span className="text-gray-600">50 auto-responses per month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-pink-500" />
                  <span className="text-gray-600">Basic keyword targeting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-pink-500" />
                  <span className="text-gray-600">Standard support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="border-2 border-pink-300 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-pink-600">Smart AI Plan</CardTitle>
              <CardDescription>Advanced features for power users</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-pink-600 mb-6">$29<span className="text-lg font-normal text-gray-600">/month</span></p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-purple-500" />
                  <span className="text-gray-600">5 Instagram accounts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-purple-500" />
                  <span className="text-gray-600">Unlimited auto-responses</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-purple-500" />
                  <span className="text-gray-600">Advanced AI-powered responses</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-purple-500" />
                  <span className="text-gray-600">Custom keyword sets</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-purple-500" />
                  <span className="text-gray-600">Analytics dashboard</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-purple-500" />
                  <span className="text-gray-600">Priority support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white">Upgrade Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">© 2023 InstaResponder. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-purple-600 hover:text-pink-600">Terms</a>
            <a href="#" className="text-purple-600 hover:text-pink-600">Privacy</a>
            <a href="#" className="text-purple-600 hover:text-pink-600">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  </div>  );
}
