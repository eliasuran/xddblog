export interface PostType {
	id: string;
	title: string;
	likes: number;
	comments: number;
	date: Date;
	time: number;
	words: number;
	tags: string[];
	author_username: string;
}
