"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

const sections = [
  { id: "work", label: "Work" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
] as const;

export function Nav() {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        }

        let next: string | null = null;
        let best = 0;
        for (const [id, ratio] of ratios) {
          if (ratio > best) {
            next = id;
            best = ratio;
          }
        }
        setCurrent(next);
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.05, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <span className="brand-full">{profile.name}</span>
          <span className="brand-short">{profile.shortName}</span>
        </a>
        <nav className="nav-links" aria-label="Sections">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={current === section.id ? "true" : undefined}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
