export interface Technology {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Language' | 'Styling' | 'DevOps' | 'Tools' | string;
  description: string;
  icon: string;
  rating: number;
  difficulty: 'Beginner-Friendly' | 'Intermediate' | 'Advanced' | string;
  badge: string;
}
