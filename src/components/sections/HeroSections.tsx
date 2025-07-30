import Image from "next/image";
import { edu_font } from "@/lib/constants";
import { Globe } from "lucide-react";
import Link from "next/link";

const social_handles = [
  {
    name: "github",
    icon: "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
    link: "https://github.com/kishu279",
  },
  {
    name: "linkedin",
    icon: "https://img.icons8.com/?size=100&id=8808&format=png&color=000000",
    link: "https://www.linkedin.com/in/sourav-poddar-b50a31299/",
  },
  {
    name: "mail",
    icon: "https://img.icons8.com/?size=100&id=okvpqeYbG0xb&format=png&color=000000",
    link: "souravpoddar93042@gmail.com",
  },
  {
    name: "youtube",
    icon: "https://img.icons8.com/?size=100&id=ISBCNY3NwyMM&format=png&color=000000",
    link: "https://www.youtube.com/@Melodic_s",
  },
  {
    name: "x",
    link: "https://x.com/Sourav56984191",
    icon: "https://img.icons8.com/?size=100&id=YfCbGWCWcuar&format=png&color=000000",
  },
];

export default function HeroSection() {
  return (
    <section className="relative">
      {/* title  and description */}
      <div className="flex flex-col p-4 space-y-6">
        <div className="">
          <h1 className="text-5xl font-semibold">Kishu</h1>
          {/* some more to add */}
        </div>
        {/* description and image */}
        <div className="grid grid-cols-2 items-center justify-center w-full space-y-2">
          <p className="w-[600px]">
            I am a Full Stack Developer passionate about creating scalable and
            user-friendly applications. I enjoy building innovative solutions
            that combine simplicity with performance while exploring new
            technologies to improve my skills. My focus is on writing clean,
            maintainable code and delivering projects that not only work
            efficiently but also bring meaningful value and impact. Little{" "}
            <span className={`${edu_font.className} border border-red-600`}>
              Asthetic
            </span>
            . Love the{" "}
            <span
              className={`${edu_font.className} capitalize border-blue-300 border-2`}
            >
              font mono
            </span>
            .
          </p>
          <Image
            src={"/logo/my_image.jpg"}
            alt="my_image"
            height={120}
            width={120}
            className="rounded-2xl justify-self-end"
          />
          <div className="col-span-2 flex items-center gap-1 text-md font-light">
            <Globe className="opacity-75 size-5" />
            <p>India</p>
          </div>
        </div>
        {/* social handle */}
        <div className="flex flex-col">
          {/* list of social handles */}
          {/* <h1 className={`capitalize text-md`}>social handles</h1> */}
          <ul className="flex gap-1">
            {social_handles.map((item) => (
              <Link
                href={item.link}
                className="text-[12px] font-light capitalize flex flex-col items-center border-2 p-2  rounded-md"
                key={item.name}
              >
                {/* <item.icon className="size-5 opacity-75" />
                 */}
                <Image
                  src={`${item.icon}`}
                  height={24}
                  width={24}
                  className="opacity-70"
                  alt={item.name}
                />
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
