
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { projects } from "../../data/projects.js";

const filters = [
  "All",
  "Food & Delivery",
  "CRM",
  "E-Commerce",
  "HRMS",
  "Healthcare",
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter(
            (project) => project.category === activeFilter
          ),
    [activeFilter]
  );

  return (
    <main className="overflow-hidden bg-white text-slate-950">

      {/* HERO */}
      <section className="relative isolate border-b border-slate-200 bg-slate-50">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />

        <div className="mx-auto grid min-h-[580px] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-10">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              <Sparkles size={16} />
              Selected work · TechFavours
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-.05em] sm:text-6xl lg:text-7xl">
              Work that moves{" "}
              <span className="text-indigo-600">
                businesses forward.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Explore digital products and platforms across food
              delivery, CRM, e-commerce, HR technology and healthcare.
            </p>

            <a
              href="#projects"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-medium text-white transition hover:bg-indigo-600"
            >
              Explore projects
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-indigo-100/60">
            <p className="text-sm font-semibold uppercase tracking-[.2em] text-indigo-600">
              Portfolio snapshot
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                ["06", "Projects"],
                ["05", "Screenshots available"],
                ["02", "Products in development"],
                ["04", "Live project links"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-4xl font-semibold tracking-tight">
                    {value}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Minta Restro currently uses a designed placeholder
              until its product screenshot is available.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT LIST */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.22em] text-indigo-600">
              Selected work
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Explore the case studies.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Open any project to learn about its purpose,
              technical approach, development contribution and
              available screenshots.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  activeFilter === filter
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECT CARDS */}
        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {visibleProjects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/60"
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="block"
                >
                  <div className="relative flex min-h-[270px] items-center justify-center overflow-hidden bg-slate-100 p-5">

                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        width={1200}
                        height={800}
                        className="h-[270px] w-full rounded-xl object-contain transition duration-500 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="flex h-[270px] w-full flex-col items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 via-white to-slate-200">
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

                    <span className="absolute left-7 top-7 rounded-full border border-slate-200 bg-white/95 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                      {project.status}
                    </span>
                  </div>

                  <div className="p-7 sm:p-9">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-indigo-600">
                        {project.number} / {project.category}
                      </span>

                      <ArrowUpRight
                        size={19}
                        className="text-slate-400 transition group-hover:text-indigo-600"
                      />
                    </div>

                    <h3 className="mt-5 text-3xl font-semibold tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-3 min-h-[56px] leading-7 text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                      <span className="text-sm font-medium text-slate-500">
                        {project.metric}
                      </span>

                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 group-hover:text-indigo-600">
                        View case study
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        {visibleProjects.length === 0 && (
          <p className="mt-10 rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
            No projects in this category yet.
          </p>
        )}
      </section>

      {/* CTA */}
      <section className="bg-slate-950 px-6 py-24 text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[.2em] text-indigo-300">
          Have a project worth building?
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Let’s create your next digital product.
        </h2>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-medium text-slate-950 transition hover:bg-indigo-400"
        >
          Start a conversation
          <ArrowRight size={17} />
        </Link>
      </section>
    </main>
  );
}
