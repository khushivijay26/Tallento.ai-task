import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBuilding, faUsers } from "@fortawesome/free-solid-svg-icons";

const tags = [
  "Social Science Teacher",
  "Math Faculty",
  "Physics Lecturer",
  "Chemistry Teacher",
  "Computer Science"
];

const features = [
  {
    icon: faBriefcase,
    title: "Curated Openings",
    desc: "Handpicked roles that match your skills."
  },
  {
    icon: faBuilding,
    title: "Top Companies",
    desc: "Trusted employers actively hiring."
  },
  {
    icon: faUsers,
    title: "Smart Matching",
    desc: "AI-powered job recommendations."
  }
];

const stats = [
  { label: "Jobs Available", value: "12,480+" },
  { label: "Companies Hiring", value: "1,250+" },
  { label: "Candidates", value: "98,300+" }
];

export default function HeroBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 transition-colors duration-300">

      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Find Your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 dark:from-orange-400 dark:via-pink-400 dark:to-red-400">
            Dream Job
          </span>{" "}
          Now
        </h1>
      </div>

      <div className="mt-8 max-w-3xl mx-auto p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex flex-col sm:flex-row gap-2">
          <select className="w-full sm:w-40 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-pink-500">
            <option>All Categories</option>
            <option>Teaching</option>
            <option>Engineering</option>
            <option>Design</option>
            <option>Sales</option>
          </select>
          <input
            type="text"
            placeholder="Search by role, skill, or keyword"
            className="flex-1 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-4 py-2 outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="rounded-lg px-6 py-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 dark:from-orange-400 dark:via-pink-400 dark:to-red-400 text-white font-medium hover:opacity-90 transition">
            Find Jobs
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button key={tag} className="tag">
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center p-6 card"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 dark:from-orange-400 dark:via-pink-400 dark:to-red-400 text-white mb-4">
              <FontAwesomeIcon icon={feature.icon} className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-slate-600 dark:text-slate-300">
          We help employers in education, coaching, and tech sectors hire verified,
          ready-to-join talent faster, while empowering job seekers to find
          high-paying jobs that match their skills and goals.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="p-6 card text-center">
            <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 dark:from-orange-400 dark:via-pink-400 dark:to-red-400">
              {stat.value}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
