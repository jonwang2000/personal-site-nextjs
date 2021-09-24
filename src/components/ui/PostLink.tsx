import { FC } from "react";

type PostLinkProps = {
    post: string;
    flat: boolean;
};

const PostLink: FC<PostLinkProps> = ({ post, flat }) => {
    return (
        <div>
            {post}
            {flat}
        </div>
    );
};

export default PostLink;
