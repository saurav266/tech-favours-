
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
} from "lucide-react";
import { notFound } from "next/navigation";

import {
  getProject,
  projects,
  sharedStack,
  projectDetails,
} from "../../../data/projects.js";

// Generate routes for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found | TechFavours",
    };
  }

  return {
    title: `${project.title} Case Study | TechFavours`,
    description: project.description,
  };
}

export default async function ProjectCaseStudy({ params }) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  // Get additional case-study content
  const details = projectDetails?.[slug] ?? {};

  // Safe defaults prevent undefined.map errors
  const objectives = details.objectives ?? [];
  const modules = details.modules ?? [];
  const engineering = details.engineering ?? [];
  const futureScope = details.futureScope ?? [];

  const businessContext =
    details.businessContext ?? "";

  const architecture = project.architecture ?? [];
  const contribution = project.contribution ?? [];
  const gallery = project.gallery ?? [];

  const Icon = project.icon ?? Layers3;

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">

      {/* HERO SECTION */}
      <section className="relative border-b border-slate-200 bg-slate-50">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-40" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-indigo-600"
          >
            <ArrowLeft size={16} />
            All Projects
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">

            {/* PROJECT INTRODUCTION */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
                <Icon size={16} />
                {project.category}
              </div>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[.22em] text-indigo-600">
                Project {project.number} · TechFavours Case Study
              </p>

              <h1 className="mt-4 text-5xl font-semibold tracking-[-.05em] sm:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                {project.description}
              </p>

              {details.tagline && (
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
                  {details.tagline}
                </p>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-3">

                {project.status && (
                  <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                    {project.status}
                  </span>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
                  >
                    Visit Live Project
                    <ArrowUpRight size={16} />
                  </a>
                )}

              </div>
            </div>

            {/* PROJECT IMAGE */}
            <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60">

              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt || `${project.title} screenshot`}
                  width={1200}
                  height={800}
                  priority
                  className="max-h-[430px] w-full rounded-2xl object-contain"
                />
              ) : (
                <div className="flex aspect-[16/10] w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-slate-100 text-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon size={30} />
                  </div>

                  <p className="mt-5 text-2xl font-semibold">
                    {project.title}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Project preview coming soon
                  </p>

                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-10">

        {/* SIDEBAR */}
        <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-7 lg:sticky lg:top-8">

          <p className="text-xs font-bold uppercase tracking-[.2em] text-indigo-600">
            Project At A Glance
          </p>

          <h2 className="mt-3 text-2xl font-semibold">
            {project.metric || project.title}
          </h2>

          <div className="mt-6 border-t border-slate-200 pt-5">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Project Status
            </p>

            <p className="mt-1 font-semibold">
              {project.status || "Portfolio Project"}
            </p>
          </div>

          <div className="mt-5 border-t border-slate-200 pt-5">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Category
            </p>

            <p className="mt-1 font-semibold">
              {project.category}
            </p>
          </div>

          <div className="mt-5 border-t border-slate-200 pt-5">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Technology Reference
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {(project.tech?.length ? project.tech : sharedStack).map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600"
            >
              Open Website
              <ExternalLink size={15} />
            </a>
          )}

        </aside>

        {/* CASE STUDY CONTENT */}
        <div className="space-y-16">

          {/* 01 OVERVIEW */}
          <article>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-indigo-600">
              01 · Overview
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              About the Project
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {project.overview || project.description}
            </p>
          </article>

          {/* 02 BUSINESS CONTEXT */}
          {businessContext && (
            <article>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-indigo-600">
                02 · Business Context
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Understanding the Product
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                {businessContext}
              </p>
            </article>
          )}

          {/* 03 CHALLENGE */}
          <article>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-indigo-600">
              03 · The Challenge
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              The Problem to Solve
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {project.challenge ||
                "The project focuses on delivering a useful digital experience aligned with its business requirements."}
            </p>
          </article>

          {/* 04 SOLUTION */}
          <article>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-indigo-600">
              04 · Solution
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Our Approach
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {project.solution ||
                "The solution focuses on application development, user experience and integration of the required software components."}
            </p>
          </article>

          {/* 05 OBJECTIVES */}
          {objectives.length > 0 && (
            <section>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-indigo-600">
                05 · Project Objectives
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                What We Set Out to Achieve
              </h2>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {objectives.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-200 hover:shadow-lg"
                  >
                    <span className="text-sm font-bold text-indigo-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-3 leading-7 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 06 PRODUCT MODULES */}
          {modules.length > 0 && (
            <section>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-indigo-600">
                06 · Product Modules
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Inside the Application
              </h2>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {modules.map((module, index) => (
                  <div
                    key={module.title}
                    className="rounded-3xl border border-slate-200 p-6 transition hover:border-indigo-200 hover:shadow-lg"
                  >
                    <span className="text-sm font-bold text-indigo-600">
                      MODULE {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-4 text-xl font-semibold">
                      {module.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {module.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 07 TECHNICAL ARCHITECTURE */}
          <article>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-indigo-600">
              07 · Technical Architecture
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Technology Behind the Product
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              The following describes the project's technical architecture.
              Only list technologies and components that are actually used
              in this project.
            </p>

            {architecture.length > 0 ? (
              <ul className="mt-6 space-y-3">
                {architecture.map((item, index) => (
                  <li
                    key={`${item}-${index}`}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-indigo-600"
                      size={18}
                    />

                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 text-sm text-slate-500">
                Technical architecture details will be added after verification.
              </p>
            )}
          </article>

          {/* 08 DEVELOPMENT CONTRIBUTION */}
          <article>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-indigo-600">
              08 · Development Contribution
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Development Responsibilities
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {contribution.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-200"
                >
                  <CheckCircle2
                    className="text-indigo-600"
                    size={19}
                  />

                  <p className="mt-3 font-medium leading-6 text-slate-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* 09 ENGINEERING IMPLEMENTATION */}
          {engineering.length > 0 && (
            <section>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-indigo-600">
                09 · Engineering Implementation
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                How the Product Is Engineered
              </h2>

              <div className="mt-7 rounded-3xl bg-slate-950 p-7 sm:p-9">
                <div className="grid gap-5 sm:grid-cols-2">
                  {engineering.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="flex gap-3 text-slate-200"
                    >
                      <span className="text-indigo-400">✦</span>

                      <span className="leading-7">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 10 FUTURE SCOPE */}
          {futureScope.length > 0 && (
            <section>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-indigo-600">
                10 · Future Scope
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                Opportunities for Further Development
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Potential areas for future development, subject to
                project requirements.
              </p>

              <ul className="mt-6 space-y-3">
                {futureScope.map((item, index) => (
                  <li
                    key={`${item}-${index}`}
                    className="flex gap-3 rounded-xl bg-slate-50 p-4 text-slate-700"
                  >
                    <ArrowRight
                      size={18}
                      className="mt-1 shrink-0 text-indigo-600"
                    />

                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 11 SCREENSHOT GALLERY */}
          <article>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-indigo-600">
              11 · Project Gallery
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Project Screenshots
            </h2>

            {gallery.length > 0 ? (
              <div className="mt-7 grid gap-6">
                {gallery.map((shot, index) => (
                  <figure
                    key={`${shot.src}-${index}`}
                    className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-3"
                  >
                    <Image
                      src={shot.src}
                      alt={shot.caption || `${project.title} screenshot`}
                      width={1600}
                      height={1000}
                      className="h-auto w-full rounded-2xl object-contain"
                    />

                    <figcaption className="px-3 py-4 text-sm text-slate-500">
                      {shot.caption || `${project.title} screenshot`}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <div className="mt-7 flex min-h-64 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm">
                  <Icon size={26} />
                </div>

                <h3 className="mt-4 text-lg font-semibold">
                  Screenshots Coming Soon
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Project screenshots will be added when they are available.
                </p>
              </div>
            )}
          </article>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-6 py-24 text-center text-white">

        <p className="text-sm font-semibold uppercase tracking-[.2em] text-indigo-300">
          Have a Similar Idea?
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Let's Build Something Useful.
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
          Have a business idea or need a custom digital solution?
          Let's discuss how TechFavours can help.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-indigo-400"
        >
          Discuss Your Project
          <ExternalLink size={16} />
        </Link>

        <div className="mt-8">
          <Link
            href="/work"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="mr-1 inline" size={14} />
            Back to All Projects
          </Link>
        </div>

      </section>

    </main>
  );
}
