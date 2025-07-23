import { ProjectData } from "@/app/projects/projects";
import React from "react";

const project: ProjectData = {
  slug: "portfolio-website",
  title: "Portfolio Website",
  date: "June 2025",
  description: "A place to showcase some of my hobby projects as I learn more about front-end development.",
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  overview: (
    <>
      <p>
        This is a portfolio website built to showcase my work and learn more about modern web development. Prior to
        building this website, my only knowledge of front-end development was using
        <strong> Streamlit</strong> as well as injecting some basic <strong>HTML, CSS and JavaScript</strong> along the
        way. As a <strong>Quantitative Developer</strong>, this was enough to get by for small projects with a limited
        amount of internal users. But as we expanded our capabilities and wanted to build more sophisticated
        dashboards/websites, we began to hit somewhat of a ceiling. This motivated me to want to learn about React. And
        so with some extra time on my hands, I began the journey.
      </p>
      <h3 className="my-3 text-2xl text-gray-800 dark:text-white ">Learning</h3>
      <p>
        Before I could dive into creating the website, I needed to first learn how to build it. After some brief
        research, it seemed like <strong>React</strong> would be a good framework to learn given the size and popularity
        of the community. But I realized that as a prerequsite, I would also need to learn more about HTML, CSS and
        JavaScript. Luckily for me, I stumbled upon
        <strong>
          <a className="text-blue-500" href="https://scrimba.com/home">
            {" "}
            Scrimba{" "}
          </a>
        </strong>
        which I found to be a great platform for learning more about these languages and framework.
      </p>
      <h3 className="my-3 text-2xl text-gray-800 dark:text-white ">Building</h3>
      <p>
        After feeling confident enough with my HTML, CSS, JavaScript and React fundamentals, I was ready to begin
        building this site. The first thing I did was research best practices around tooling and deployment. I found{" "}
        <strong>Vercel, Next.js, Typescript and Tailwind CSS</strong>.
      </p>
      <ul className="list-disc marker:text-blue-600 hanging-indent ms-8 pl-4">
        <li>
          <b>Vercel</b> for deployment.
        </li>
        <li>
          <b>Next.js</b> for routing.
        </li>
        <li>
          <b>TypeScript</b> for typesafe JavaScript (aka better JavaScript).
        </li>
        <li>
          <b>Tailwind CSS</b> for easy styling.
        </li>
      </ul>
      <p>
        However, I also need a design to follow. I spent some time playing around with <strong>Figma</strong>, but
        ultimately, I really liked and was inspired by a template I found on <strong>Wix</strong>. With a design in
        hand, I began building. I setup my environment and started with having an LLM create the boiler-plate code. From
        there, I spent a lot of time creating and refining what you see here today.
      </p>
      <h4 className="my-3 text-1xl text-gray-800 dark:text-white ">Creating the Homepage</h4>
      <p>
        The first thing I needed to do was create the homepage such that it had a two-toned background and containers
        that would dynamically size with the screen size. Accomplishing the two-toned background was simple enough with
        a flexbox and setting the proportions (I went with 3/10 and 7/10).
      </p>
      <p>
        The second thing I needed to do was get the card element on the left and the text element on the right to
        position correctly with an expanding/minimizing window. This was tricky but I found a way with the following
        Tailwind CSS:
      </p>
      <pre className="ms-8 text-[12px]">
        <code>flex flex-1 items-center justify-center lg:justify-end relative</code>
      </pre>
      <ul className="list-disc marker:text-blue-600 hanging-indent ms-8 pl-4 text-[12px]">
        <li>
          <b>flex</b> creates a flexbox.
        </li>
        <li>
          <b>flex-1</b> makes sure that the element will take up as much space possible (sharing with other siblings).
        </li>
        <li>
          <b>items-center</b> vertically centers items.
        </li>
        <li>
          <b>justify-center</b> horizontally centers items.
        </li>
        <li>
          <b>lg:justify-end</b> if the screen size is large, item will horizontally align on the right of the container.
        </li>
        <li>
          <b>relative</b> will set the card relative to the absolute position of the other children in the flex. This
          was the key so that the card element didn't overlap with the text element on the right as well as was still
          positioned correctly on smaller screens (centered above the text element).
        </li>
      </ul>
      <h4 className="my-3 text-1xl text-gray-800 dark:text-white ">Creating the About Page</h4>
      <p>
        The About Page was the easiest page to build. Just four main containers and using flexboxes to organize
        everything. It was while building this page that I finalized the color scheme. I wanted the body to blend in
        completely with the header at the top, and then as you scroll down, move towards the beige colors on the
        homepage. Tailwind CSS made it super easy to do this.
      </p>
      <pre className="ms-8 text-[12px]">
        <code>bg-gradient-to-b from-[white] to-[#E6DACE]</code>
      </pre>
      <ul className="list-disc marker:text-blue-600 hanging-indent ms-8 pl-4 text-[12px]">
        <li>
          <b>bg-gradient-to-b</b> sets the background to a gradient and goes from top to bottom.
        </li>
        <li>
          <b>from-[white]</b> defines in this case our background top color.
        </li>
        <li>
          <b>to-[#E6DACE]</b> defines in this case our background bottom color.
        </li>
      </ul>

      <p>
        One of the fun things I was able to come up with was to have logos inplace of bullet points in the Experience
        and Education containers. The challenge here was to get the logos to render with the same dimensions and similar
        resolution. To accomplish this, I went out to the web and found <i>.svg</i> files and loaded them in with
        consistent dimensions, margins and paddings.
      </p>
      <h4 className="my-3 text-1xl text-gray-800 dark:text-white ">Creating the Project Page</h4>
      <p>
        I wanted my Project Page to be a timeline of projects, which upon clicking into, will route to more information
        about that particular project. To accomplish this, I would store each project in an array. I could then{" "}
        <i>map</i> through the array to render the timeline. But in order for this to work dynamically and for the
        experience to be consistent, I needed each project in the array to be defined in the same manner. For this, I
        created the following interface:
      </p>
      <pre className="ms-8 text-[12px]">
        <code>
          {`export interface ProjectData {
  slug: string;
  title: string;
  date: string;
  description: string;
  technologies: string[];
  overview: React.ReactNode;
  icon: string;
  iconColor: string;
}`}
        </code>
      </pre>
      <p>
        The <i>slug, title, date, description, technologies, icon and iconColor</i> would all be strings used to create
        the container in the timeline--additionally the container would get replicated on the top of the project detail
        page too. But for the details pertaining to each individual project, I wanted to allow for nuance and
        customization. So I kept this just a react object under <i>overview</i>.
      </p>
      <p>
        To handle the dynamic rendering of each individual project, I put a <i>[slug]</i> in the repo. We use{" "}
        <i>[slug]</i> to tell Next.js that the URL will get its value from <i>params.slug</i> (which in this case, gets
        defined in our interface). I then needed to create an <i>async function</i> so that we could <i>await</i> the{" "}
        <i>params object</i>.
      </p>
      <pre className="ms-8 text-[12px]">
        <code>
          {`export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
    let project: ProjectData | null = null;
    try {
    // Dynamic import based on slug
    const { slug } = await params; 
    project = (await import(\`@/data/projects/\${slug}\`)).default;
    } catch (e) {
    notFound();
    }
    ...`}
        </code>
      </pre>
      <p>
        The <i>await</i> keyword waits for the <i>params</i> to resolve before rendering the page--<i>params</i> gets
        resolved when
        <i>params.slug</i> is defined which happens when the proper URL request is made (i.e.
        .../projects/portfolio-website)
      </p>
      <h3 className="my-3 text-2xl text-gray-800 dark:text-white ">Conclusion</h3>
      <p>
        This project was a lot of fun to make and checked off a major personal goal! While I still have a long way to go
        in my front-development journey, I'm proud of how this turned out and look forward to adding to it and making it
        even better!
      </p>
    </>
  ),
  icon: "M10 12a5 5 0 100-10 5 5 0 000 10zm-7 8a7 7 0 0114 0H3z",
  iconColor: "blue",
};

export default project;
