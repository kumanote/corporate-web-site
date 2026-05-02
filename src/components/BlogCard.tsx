import type { Activity } from "../api/blog";

interface Props {
  activity: Activity;
}

const BLOG_ACTIVITIES_URL = "https://blog.kumano-te.com/activities";

export default function BlogCard({ activity }: Props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`${BLOG_ACTIVITIES_URL}/${activity.slug}`}
      className="block flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      {activity.banner_image_url && (
        <div className="flex-shrink-0 h-48 overflow-hidden">
          <img
            className="h-48 w-full object-cover transform hover:scale-110 transition duration-500"
            src={activity.banner_image_url}
            alt=""
          />
        </div>
      )}
      <div className="flex-1 bg-white p-6 flex flex-col justify-between hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex-1">
          <p className="text-sm text-gray-500 dark:text-gray-400">{activity.published_at}</p>
          <p className="text-xl font-semibold text-gray-900 dark:text-gray-50">{activity.title}</p>
          {activity.tags && (
            <p className="mt-2 space-x-2">
              {activity.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                >
                  {tag}
                </span>
              ))}
            </p>
          )}
          {activity.subtitle && (
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{activity.subtitle}</p>
          )}
        </div>
      </div>
    </a>
  );
}
