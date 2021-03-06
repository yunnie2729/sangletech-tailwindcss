/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

interface Props {
  titleNormal?: string;
  titleHighlight?: string;
  description?: string;
  buttonNormal?: string;
  buttonHighlight?: string;
  imgSrc?: string;
  alt?: string;
}

export default function HeroWithAngelImageOnRight(props: Props) {
  const description = props.description
    ? `<div class="note">

${props.description}

</div>`
    : `<div class="note">

"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure quilorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."

</div>`;

  return (
    <div className="relative overflow-hidden bg-white ">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none "
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-5xl">
                <span className="block xl:inline">
                  {props.titleNormal || "Data to enrich your"}
                </span>{" "}
                <span className="block mt-6 text-indigo-600 xl:inline">
                  {props.titleHighlight || "online business"}
                </span>
              </h1>
              <ReactMarkdown
                children={description}
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              />

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    {props.buttonHighlight || "Get started"}
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    {props.buttonNormal || "Live demo"}
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className=" lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="object-cover w-full h-62 rounded-xl sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={
            props.imgSrc ||
            "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          }
          alt={props.alt}
        />
      </div>
    </div>
  );
}
