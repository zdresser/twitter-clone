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

type follow = {
  userImg: string
  username: string
  tag: string
}
export interface IHome {
  trendingResults: trending
  followResults: follow
  providers: object
}
