import Image from "next/image";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

export default function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    image(image) {
      return (
        <>
          {" "}
          <Image
            src={`/images/posts/${post.slug}/${image.src}`}
            alt={image.alt}
            width={600}
            height={300}
          />{" "}
        </>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
