export interface Message {
  _id: string;
  name: string;
  content: string;
  createdAt: string;
  reply?: string;
  replies: string[];
  likes: number;
  isLiked: boolean;
  image: string;
}
