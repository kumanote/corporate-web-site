import { useEffect, useState } from "react";
import type { Activity } from "../api/blog";
import { fetchLatestActivities } from "../api/blog";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchLatestActivities(3)
      .then((list) => {
        setActivities(list);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return null;
  }

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="text-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-base font-semibold tracking-wider text-primary-600 uppercase">
            ブログ
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight sm:text-4xl">
            Kumanote Tech Blog
          </p>
          <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500 dark:text-gray-400">
            合同会社kumanoteではエンジニアブログを運用しています。
            <br />
            開発に役立つ情報を発信しています。是非お立ち寄りください。
          </p>
        </div>
        {loading ? (
          <div className="mt-12 flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-200 border-t-primary-600" />
          </div>
        ) : (
          activities.length > 0 && (
            <div className="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3">
              {activities.map((activity) => (
                <BlogCard key={activity.slug} activity={activity} />
              ))}
            </div>
          )
        )}
      </div>
    </section>
  );
}
