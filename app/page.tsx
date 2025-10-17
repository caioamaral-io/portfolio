"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import {
  Timeline,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { jobs } from "@/lib/jobs";
import { Project, projects } from "@/lib/projects";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Toggle } from "radix-ui";

export default function Page() {
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(
    projects[0] ?? null,
  );
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-16 p-6 font-sans md:px-0 md:py-20">
      <div className="flex flex-col gap-2">
        <Image
          src="/logo-dark.svg"
          alt="Caio"
          className="-ml-4 block aspect-square rounded-2xl dark:hidden"
          width={64}
          height={64}
        />
        <Image
          src="/logo-light.svg"
          alt="Caio"
          className="-ml-4 hidden aspect-square rounded-2xl dark:block"
          width={64}
          height={64}
        />
        <div className="flex flex-col">
          <h1 className="w-fit leading-tight font-semibold">Caio Amaral</h1>
          <p className="w-fit text-sm opacity-50">Data Engineer</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="https://www.linkedin.com/in/caio-amaral-4b6204270/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin-icon.svg"
            alt="Twitter"
            width={17}
            height={17}
            className="hover:opacity-80 transition"
          />
        </Link>

        <Link
          href="https://github.com/caioamaral-io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github-icon.svg"
            alt="GitHub"
            width={17}
            height={17}
            className="hover:opacity-80 transition"
          />
        </Link>
      </div>
      <p className="text-foreground/50 w-full text-sm text-pretty leading-relaxed lg:text-base">
        Currently studying Information Technology Management at CESAR School and specializing to work as a Data Engineer. I&apos;m building a solid foundation by developing projects using
        <span className="mx-2 mb-0.5 inline-flex items-center gap-1">
          Python 
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                src="/python.png"
                alt="Python"
                className="ml-1 inline-flex cursor-pointer rounded-lg align-text-bottom"
                width={20}
                height={20}
              />
            </TooltipTrigger>
            <TooltipContent className="py-3 font-sans">
              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center text-sm font-medium">
                    <Image
                      src="/python.png"
                      alt="Python"
                      className="mr-2 inline-flex rounded-lg"
                      width={22}
                      height={22}
                    />
                    Python
                  </div>
                  <p className="text-foreground/50 text-xs">
                    Essential language for data analysis, automation, and manipulation.
                  </p>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </span>
        ,
        <span className="mx-2 mb-0.5 inline-flex items-center gap-1">
          Streamlit 
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                src="/streamlit.png"
                alt="Streamlit"
                className="ml-1 inline-flex cursor-pointer rounded-lg align-text-bottom"
                width={20}
                height={20}
              />
            </TooltipTrigger>
            <TooltipContent className="py-3 font-sans">
              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center text-sm font-medium">
                    <Image
                      src="/streamlit.png"
                      alt="Streamlit"
                      className="mr-2 inline-flex rounded-lg"
                      width={22}
                      height={22}
                    />
                    Streamlit
                  </div>
                  <p className="text-foreground/50 text-xs">
                    Framework focused on creating dashboards and interactive data visualizations.
                  </p>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </span>
        and managing
        <span className="mx-0 mb-0.5 inline-flex items-center gap-1">
          Database
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                src="/supabase.png"
                alt="Bancos de Dados"
                className="ml-1 inline-flex cursor-pointer rounded-lg align-text-bottom"
                width={20}
                height={20}
              />
            </TooltipTrigger>
            <TooltipContent className="py-3 font-sans">
              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center text-sm font-medium">
                    <Image
                      src="/supabase.png"
                      alt="Bancos de Dados"
                      className="mr-2 inline-flex rounded-lg"
                      width={22}
                      height={22}
                    />
                    Supabase
                  </div>
                  <p className="text-foreground/50 text-xs">
                    Essential structure for storing, managing, and querying information efficiently.
                  </p>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </span>{' '}
        , with a focus on transforming large volumes of data into clear and useful insights.
      </p>
      <div className="flex flex-col gap-8">
        <h1 className="w-fit leading-tight font-semibold">Certificates</h1>
        {jobs.map((job) => {
          return (
            <div className="flex flex-col gap-4" key={job.id}>
              <div className="flex items-center gap-4">
                <Image
                  src={job.logo}
                  alt={job.company}
                  className="mb-0.5 inline-flex rounded-xl shadow-lg shadow-black/10"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col">
                  <Link
                    href={job.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm leading-tight font-semibold"
                  >
                    {job.company}
                  </Link>
                  <p className="w-fit text-sm opacity-50">{job.location}</p>
                </div>
              </div>
              <Timeline className="ml-2" defaultValue={2}>
                {job.positions.map((item) => (
                  <TimelineItem key={item.id} step={item.id}>
                    <TimelineHeader>
                      <TimelineSeparator />
                      <TimelineTitle className="w-fit">
                        {item.title}
                        <Badge className="scale-90">{item.level}</Badge>
                      </TimelineTitle>
                      <TimelineDate>
                        {item.date} • {item.remote ? "Remote" : "Onsite"}
                      </TimelineDate>
                      <TimelineIndicator className="scale-30" />
                    </TimelineHeader>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-3.5">
        <h1 className="w-fit leading-tight font-semibold">Projects</h1>
        <Drawer open={open} onOpenChange={setOpen}>
          {projects.map((project) => {
            return project.showcase ? (
              <DrawerTrigger
                key={project.id}
                onClick={() => setSelectedProject(project)}
              >
                <Project project={project} />
              </DrawerTrigger>
            ) : (
              <Link
                href={project.website}
                key={project.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Project project={project} />
              </Link>
            );
          })}
          {selectedProject && (
            <DrawerContent className="min-h-[95%] justify-between gap-4 font-sans lg:max-w-[75%]">
              <div className="mx-auto flex w-[85%] items-center text-sm">
                <Image
                  src={selectedProject.logo}
                  alt={selectedProject.name}
                  className="mb-0.5 inline-flex rounded-xl shadow-lg shadow-black/10"
                  width={40}
                  height={40}
                />
                <DrawerHeader className="gap-0 text-left">
                  <DrawerTitle className="w-fit text-sm leading-tight font-semibold">
                    {selectedProject.name}
                  </DrawerTitle>
                  <DrawerDescription className="flex w-fit items-center text-xs">
                    <span className="w-fit text-sm opacity-50">
                      {selectedProject.description}
                    </span>
                    <Badge className="scale-90">{selectedProject.type}</Badge>
                  </DrawerDescription>
                </DrawerHeader>
              </div>
              <ScrollArea
                className="w-full [&>[data-radix-scroll-area-viewport]]:max-h-[calc(100vh-200px)]"
                type="hover"
              >
                <div className="mx-auto mb-16 flex max-w-[85%] flex-col">
                  <div className="flex w-full flex-col gap-8 lg:gap-10">
                    {selectedProject.content}
                  </div>
                </div>
              </ScrollArea>
            </DrawerContent>
          )}
        </Drawer>
      </div>
    </div>
  );
}
