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
          slug,
          mainImage
        }
      `)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <section className="section" id="blog">
      <div className="glass-panel services-header">
        <h2>Blog</h2>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <Link
            key={post._id}
            to={`/blog/${post.slug?.current}`}
            className="blog-card"
          >
            {post.mainImage ? (
              <img
                src={urlFor(post.mainImage).width(800).url()}
                alt={post.title}
                className="blog-image"
                loading="lazy"
              />
            ) : (
              <div className="blog-image-placeholder">
                <BookOpen size={40} />
              </div>
            )}

            <h3>{post.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}