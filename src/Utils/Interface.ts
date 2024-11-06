export interface PostProps {
    id: string
    userId: string;
    username: string;
    avatar: string;
    date: string;
    shopName: string;
    images: string[];
    text: string;
    likes: number;
    comments: number;
    didLike: boolean;
}
