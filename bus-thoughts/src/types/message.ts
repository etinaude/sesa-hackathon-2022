export interface Message {
  id: string;
  name: string;
  message: string;
  date: string;
  reply?: string;
  likes: number;
}
