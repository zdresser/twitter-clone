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
