
export interface INewsCard {
  title: String;
  content: String;
  type: 'Music' | 'Entertainment' | 'Lifestyle' | 'Mark' | 'Opinion';
  thumbnailPath: String;
  authorName: String;
  views: Number;
  comments: Number;
  postedAt: Date;
}
