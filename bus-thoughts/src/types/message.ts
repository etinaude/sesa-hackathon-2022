export interface Message {
  id: string;
  name: string;
  content: string;
  createdAt: string;
  reply?: string;
  replies: string[];
  likes: number;
}
