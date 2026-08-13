// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type FullUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  gender: 'masculino' | 'femenino' | 'otro' | '';
  birthday: string;
  workplace: string;
};

export type Friendship = {
  id: string;
  userIdSource: string;
  userIdTarget: string;
};

export type ItemData = {
  id: string;
  user_id: string;
  name: string;
  extension: string;
  summary: string;
  description: number;
  quality: number;
  capacity: number;
  adaptable: number;
  interaction: number;
  motivation: number;
  design: number;
  reusable: number;
  portable: number;
  toughness: number;
  structure: number;
  navigation: number;
  operable: number;
  av_accessible: number;
  text_accessible: number;
  date: string;
}

export type LatestItem = {
  id: string;
  name: string;
  extension: string;
  date: string;
  username: string;
  user_id: string;
};