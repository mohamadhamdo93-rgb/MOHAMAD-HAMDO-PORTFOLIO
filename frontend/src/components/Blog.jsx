import React, { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../sanity/sanityClient";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(`
        *[_type == "blog"] | order(publishedAt desc){
          _id,
          title,
          excerpt,
          slug,
          publishedAt,
          mainImage
        }
      `)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <section className="section" id="blog">
      <div className="glass-panel service-header">
        <span className="eyebrow">Blog</span>
        <h2>Latest Insights</h2>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <Link
  to={`/blog/${post.slug?.current}`}
  className="blog-card"
  key={post._id}
>
            {post.mainImage ? (
              <img
                src={urlFor(post.mainImage).width(800).url()}
                alt={post.title}
                className="blog-image"
              />
            ) : (
              <BookOpen />
            )}

            <h3>{post.title}</h3>

<p>Slug: {post.slug?.current}</p>

<p>{post.excerpt}</p>


            <Link to={`/blog/${post.slug?.current}`}>
  Read insight
</Link>
          </Link>
        ))}
      </div>
    </section>
  );
}