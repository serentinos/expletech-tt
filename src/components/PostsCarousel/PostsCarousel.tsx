import { FC, useState } from "react"
import { PostWithUser } from "../../types/postWithUser";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PostCard from "../PostCard/PostCard";

interface Props {
  posts: PostWithUser[]
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const PostsCarousel:FC<Props> = ({ posts }) => {
  const [openCommentSection, setOpenCommentSection] = useState(false);


  return (
    <Carousel
      responsive={responsive}
      itemClass={'react-multi-carousel-item'}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      beforeChange={() => console.log('worked')}
    >
      {posts.map(post => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </Carousel>
  )
}

export default PostsCarousel