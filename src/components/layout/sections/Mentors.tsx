"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mentorData } from "@/data/team/Mentor.data";
import Image from "next/image";
import Link from "next/link";
import { getSocialIcon } from "./CoreCouncil";
import { usePathname } from "next/navigation";
import { BlurFade } from "@/components/ui/BlurFade";
export const Mentors = () => {
  const pathname = usePathname();
  return (
    <section
      id="team"
      className={
        pathname === "/team"
          ? "container py-16"
          : "container lg:w-[75%] py-24 sm:py-32"
      }
    >
      <div className="text-center mb-8">
        <BlurFade delay={0.25} inView>
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
            Our Mentors
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <h2 className="text-3xl md:text-4xl text-center font-bold">
            Nurturing talents through expertise mentorship.
          </h2>
        </BlurFade>
      </div>
      <BlurFade delay={0.25 * 3} inView>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {mentorData?.map(
            (
              { imageUrl, firstName, lastName, positions, socialNetworks },
              index
            ) => (
              <Card
                key={index}
                className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
              >
                <CardHeader className="p-0 gap-0">
                  <div className="h-full overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt=""
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                    />
                  </div>
                  <CardTitle className="py-3 pb-4 px-6">
                    {firstName}
                    <span className="text-primary ml-1">{lastName}</span>
                  </CardTitle>
                </CardHeader>
                {positions.map((position, index) => (
                  <CardContent
                    key={index}
                    className={`pb-0 text-muted-foreground ${
                      index === positions.length - 1 && "pb-6"
                    }`}
                  >
                    {position}
                    {index < positions.length - 1 && <span>,</span>}
                  </CardContent>
                ))}

                <CardFooter className="space-x-4 mt-auto">
                  {socialNetworks.map(({ name, url }, index) => (
                    <Link
                      key={index}
                      href={url}
                      target="_blank"
                      className=" hover:-translate-y-1 hover:opacity-80 transition-all"
                    >
                      {getSocialIcon(name)}
                    </Link>
                  ))}
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </BlurFade>
    </section>
  );
};
