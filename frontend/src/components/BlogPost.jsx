import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { useParams, Link } from "react-router-dom";
import { client, urlFor } from "../sanity/sanityClient";

export default function BlogPost() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "blog" && slug.current == $slug][0]{
          title,
          excerpt,
          mainImage,
          content,
          gallery,
          publishedAt
        }`,
        { slug }
      )
      .then(setPost)
      .catch(console.error);
  }, [slug]);

  if (!post) {
    return (
      <section className="section">
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section className="section blog-post-page">

      <Link to="/" className="ghost-btn">
        ← Back
      </Link>

      {post.mainImage && (
        <img
          src={urlFor(post.mainImage).width(1600).url()}
          alt={post.title}
          className="blog-post-cover"
          loading="lazy"
          decoding="async"
        />
      )}

      <h1>{post.title}</h1>
      <p className="blog-excerpt">
  {post.excerpt}
</p>

      <p className="blog-date">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>

      <div className="blog-content">
        <PortableText value={post.content} />
      </div>

      {post.gallery?.length > 0 && (
  <div className="blog-gallery">
    {post.gallery.map((img) => (
      <img
        key={img._key}
        src={urlFor(img).width(1200).url()}
        alt=""
        className="gallery-image"
        loading="lazy"
        decoding="async"
        onClick={() =>
          window.open(urlFor(img).url(), "_blank")
        }
      />
    ))}
  </div>
)}

    </section>
  );
}