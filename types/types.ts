import { DefaultSession } from 'next-auth'

interface FileReaderEventTarget extends EventTarget {
  result: string
}

export interface IFileReaderEvent extends ProgressEvent {
  target: FileReaderEventTarget
}

export interface IEmoji {
  native: string
}

type trending = {
  heading: string
  description: string
  img: string
  tags: string[]
}

export type follow = {
  userImg: string
  username: string
  tag: string
}
export interface IHome {
  trendingResults: trending
  followResults: follow
  providers: object
}

export type postType = {
  userImg: string
  username: string
  tag: string
  timestamp: string
  text: string
  image: string
  id: string
}

export interface IPost {
  id: string
  post: postType
  postPage?: boolean
}

export interface Result {
  tags: string[]
  heading: string
  description: string
  img: string
}

export interface ITrendingResult {
  results: Result[]
  index?: number
}
