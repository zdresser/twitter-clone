interface FileReaderEventTarget extends EventTarget {
  result: string
}

export interface IFileReaderEvent extends ProgressEvent {
  target: FileReaderEventTarget
}
