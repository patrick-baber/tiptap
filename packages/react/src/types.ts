import type { NodeViewProps as CoreNodeViewProps } from '@patrick-baber-test/core'
import type React from 'react'

export type ReactNodeViewProps<T = HTMLElement> = CoreNodeViewProps & {
  ref: React.RefObject<T | null>
}
