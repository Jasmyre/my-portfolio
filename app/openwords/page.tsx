import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MenuIcon,
  MessageCircle,
  Heart,
  Share2,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container m-auto flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <MessageCircle className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                Open Words
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#features"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                How It Works
              </Link>
              <Link
                href="#testimonials"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Testimonials
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button className="hidden md:inline-flex">Get Started</Button>
            </div>
            <nav className="flex items-center">
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="container m-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Open Words
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Express yourself freely. Connect anonymously. Share your
                  thoughts without boundaries.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-purple-500 hover:bg-gray-100">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white/20"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container m-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <MessageCircle className="h-12 w-12 mb-4 text-purple-500" />
                <h3 className="text-xl font-bold">Anonymous Posting</h3>
                <p className="text-gray-500 mt-2">
                  Share your thoughts without revealing your identity
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Heart className="h-12 w-12 mb-4 text-purple-500" />
                <h3 className="text-xl font-bold">Reactions</h3>
                <p className="text-gray-500 mt-2">
                  Express your feelings on posts with various reactions
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Share2 className="h-12 w-12 mb-4 text-purple-500" />
                <h3 className="text-xl font-bold">Easy Sharing</h3>
                <p className="text-gray-500 mt-2">
                  Share interesting posts with your friends
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-foreground"
        >
          <div className="container m-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold">Create an Account</h3>
                <p className="text-gray-500 mt-2">
                  Sign up anonymously with just a username and password
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold">Start Posting</h3>
                <p className="text-gray-500 mt-2">
                  Share your thoughts, ideas, or experiences anonymously
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold">Engage with Others</h3>
                <p className="text-gray-500 mt-2">
                  Comment on posts and react to share your feelings
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container m-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Users Say
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between p-6 bg-white rounded-lg shadow">
                <p className="text-gray-500">
                  &ldquo;Open Words has given me a platform to express myself
                  freely without fear of judgment. It&apos;s liberating!&ldquo;
                </p>
                <p className="text-sm font-bold mt-4">- Anonymous User</p>
              </div>
              <div className="flex flex-col justify-between p-6 bg-white rounded-lg shadow">
                <p className="text-gray-500">
                  &ldquo;I&apos;ve found a supportive community here. It&apos;s
                  amazing how people can connect when barriers are
                  removed.&ldquo;
                </p>
                <p className="text-sm font-bold mt-4">- Anonymous User</p>
              </div>
              <div className="flex flex-col justify-between p-6 bg-white rounded-lg shadow">
                <p className="text-gray-500">
                  &ldquo;The anonymity allows for honest discussions about
                  topics that are often taboo. It&apos;s refreshing and
                  eye-opening.&ldquo;
                </p>
                <p className="text-sm font-bold mt-4">- Anonymous User</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-500">
          <div className="container m-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to join Open Words?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start sharing your thoughts anonymously and connect with
                  others today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-gray-900"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    className="bg-white text-purple-500 hover:bg-gray-100"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2023 Open Words. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
