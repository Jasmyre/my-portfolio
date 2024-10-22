import { TypoH2, TypoMuted } from "@/components/Typography";
import React from "react";
import { TypoH3, TypoP } from "../../Typography";
import Image from "next/image";
import Animated from '../../template/Animated';

const SolutionSection = () => {
  return (
    <section className="relative" id="solution">
      <div className="absolute bottom-[25%] left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
      <div className="absolute bottom-[25%] right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px] max-md:hidden"></div>
      <div className="absolute bottom-0 left-0 top-[25%] -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px] max-md:hidden"></div>
      <div className="bg-box section">
        <header className="text-center">
          <Animated>
            <TypoH2>Solutions</TypoH2>
          </Animated>

          <Animated>
            <TypoMuted>My recipe for a good website</TypoMuted>
          </Animated>
        </header>
        <article className="mt-20 flex flex-col max-sm:gap-[25vh] [&>div:nth-child(odd)]:lg:flex-row-reverse [&>div]:mx-auto [&>div]:min-h-[75vh] [&>div]:max-w-screen-lg">
          <div className="flex flex-col gap-6 lg:flex-row [&>div]:flex-1">
            <div className="flex items-center justify-center">
              <Animated>
                <Image
                  className="h-[450px] w-[450px] max-sm:h-full max-sm:w-full"
                  src={"/home/vector-design.svg"}
                  alt="vector mockup for solution design"
                  width={150}
                  height={150}
                />
              </Animated>
            </div>
            <div className="flex flex-col items-start justify-center">
              <Animated>
                <TypoH3>Design</TypoH3>
                <TypoP className="text-justify">
                  While creating a design, emphasis is laid on aesthetics and
                  functionality to create an attractive, easy-to-use interface.
                  Some qualities allow a brand to be represented efficiently,
                  including simplicity, consistency in colors, and typography
                  used. Fewer elements enable more freedom for users to do what
                  they need to achieve on the site. Minimized designs remove
                  obstacles from the goals of users. It integrates the
                  website&apos;s form and actions by ensuring a design that
                  supports usability.
                </TypoP>
              </Animated>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row [&>div]:flex-1">
            <div className="flex items-center justify-center">
              <Animated>
                <Image
                  className="h-[450px] w-[450px] max-sm:h-full max-sm:w-full"
                  src={"/home/vector-ux.svg"}
                  alt="vector mockup for solution design"
                  width={150}
                  height={150}
                />
              </Animated>
            </div>
            <div className="flex flex-col items-start justify-center">
              <Animated>
                <TypoH3>User experience (UX)</TypoH3>
                <TypoP className="text-justify">
                  A user experience that has been thought out properly is
                  oriented toward helping users fulfill their needs and reach
                  their goals with no distractions. It should include a simple
                  logical structure and minimal load times so that visitors are
                  guided by the navigational maps without giving it a second
                  thought. They should also be responsive so that immediate
                  feedback can be provided in response to the user&apos;s click.
                  The user experience should also factor in emotional impacts by
                  making them easy, responsive, and, most importantly, pleasant,
                  thus increasing the chances of the visitor returning and
                  conversion rates.
                </TypoP>
              </Animated>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row [&>div]:flex-1">
            <div className="flex items-center justify-center">
              <Animated>
                <Image
                  className="h-[450px] w-[450px] max-sm:h-full max-sm:w-full"
                  src={"/home/vector-responsive.svg"}
                  alt="vector mockup for solution design"
                  width={150}
                  height={150}
                />
              </Animated>
            </div>
            <div className="flex flex-col items-start justify-center">
              <Animated>
                <TypoH3>Responsive & Interactive</TypoH3>
                <TypoP className="text-justify">
                  Responsive and interactive design makes websites capable of
                  adapting to all kinds of devices, can provide the best viewing
                  experience irrespective of whether users are using desktops,
                  tablets, or smartphones. Buttons, forms, and animations that
                  are interactive — such as the loading circle of our data table
                  or pull-to-refresh, for example—create a better navigation
                  experience and keep users hooked. Built using mobile-first
                  principles, the event layout for screen size changes and
                  further usability so that there&apos;s no content being cut
                  out.
                </TypoP>
              </Animated>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row [&>div]:flex-1">
            <div className="flex items-center justify-center">
              <Animated>
                <Image
                  className="h-[450px] w-[450px] max-sm:h-full max-sm:w-full"
                  src={"/home/vector-seo.svg"}
                  alt="vector mockup for solution design"
                  width={150}
                  height={150}
                />
              </Animated>
            </div>
            <div className="flex flex-col items-start justify-center">
              <Animated>
                <TypoH3>Search engine optimization (SEO)</TypoH3>
                <TypoP className="text-justify">
                  Search Engine Optimization is a strategy used primarily to
                  enhance the visibility of websites on search engines, e.g.,
                  Google. With an increased amount of keyword usage, site
                  velocity improvement, and proper use of meta tags and
                  structured data, websites are more likely to top search
                  output. If you practice functional SEO, your website attracts
                  more visitors than before and ensures that it generates
                  increased targeted traffic since it enables targeted user
                  search results. Not only does careful SEO keep up with active
                  sites, but it ensures they stand out at the top.
                </TypoP>
              </Animated>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SolutionSection;

// Design
// While creating a design, emphasis is laid on aesthetics and functionality to create an attractive, easy-to-use interface. Some qualities allow a brand to be represented efficiently, including simplicity, consistency in colors, and typography used. Fewer elements enable more freedom for users to do what they need to achieve on the site. Minimized designs remove obstacles from the goals of users. It integrates the website's form and actions by ensuring a design that supports usability.

// Responsive & Interactive
// Responsive and interactive design makes websites capable of adapting to all kinds of devices, can provide the best viewing experience irrespective of whether users are using desktops, tablets, or smartphones. Buttons, forms, and animations that are interactive — such as the loading circle of our data table or pull-to-refresh, for example—create a better navigation experience and keep users hooked. Built using mobile-first principles, the event layout for screen size changes and further usability so that there's no content being cut out.

// User Experience
// A user experience that has been thought out properly is oriented toward helping users fulfill their needs and reach their goals with no distractions. It should include a simple logical structure and minimal load times so that visitors are guided by the navigational maps without giving it a second thought. They should also be responsive so that immediate feedback can be provided in response to the user’s click. The user experience should also factor in emotional impacts by making them easy, responsive, and, most importantly, pleasant, thus increasing the chances of the visitor returning and conversion rates.

// Search engine optimization
// Search Engine Optimization (SEO) is a strategy used primarily to enhance the visibility of websites on search engines, e.g., Google. With an increased amount of keyword usage, site velocity improvement, and proper use of meta tags and structured data, websites are more likely to top search output. If you practice functional SEO, your website attracts more visitors than before and ensures that it generates increased targeted traffic since it enables targeted user search results. Not only does careful SEO keep up with active sites, but it ensures they stand out at the top.
