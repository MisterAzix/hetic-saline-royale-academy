export type StorybookTitle<T extends string> =
  | `Atoms/${T}`
  | `Molecules/${T}`
  | `Organism/${T}`
  | `Templates/${T}`
  | `Pages/${T}`
