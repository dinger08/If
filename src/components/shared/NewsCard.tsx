import Link from "next/link";
import Image from "next/image";
import type { NewsPost } from "@/lib/data/news";

interface NewsCardProps {
  post: NewsPost;
}

export default function NewsCard({ post }: NewsCardProps) {
  const categoryColors: Record<string, string> = {
    News: "bg-navy text-white",
    Article: "bg-gold text-navy",
    Insight: "bg-navy-light text-white",
  };

  return (
    <div className="card-hover bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
        />
        <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded ${categoryColors[post.category] || "bg-navy text-white"}`}>
          {post.category}
        </span>
      </div>
      <div className="p-5">
        <time className="text-xs text-text-muted">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h3 className="font-serif text-lg font-bold text-navy mt-2 mb-2 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-text-muted line-clamp-3 mb-4">{post.excerpt}</p>
        <Link
          href={`/publications/${post.category === "Insight" ? "insights" : "articles"}`}
          className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
