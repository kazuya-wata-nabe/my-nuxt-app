<script lang="ts">
import type { FunctionalComponent } from "vue"
import BaseButton, { type Props } from "./base.vue"

type FcParams = Parameters<FunctionalComponent<Props>>
type FcProps = FcParams[0]
type FcCtx = FcParams[1]

const factory = (p: Props) => {
  return (props: FcProps, context: FcCtx) => {
    return h(BaseButton, { ...props, ...p }, context.slots)
  }
}

export const ButtonPrimary = factory({ primary: true })
export const ButtonSecondary = factory({ secondary: true })
export const ButtonTertiary = factory({ tertiary: true })
</script>
