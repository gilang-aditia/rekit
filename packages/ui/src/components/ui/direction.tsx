import * as React from "react"
import { Direction as DirectionPrimitive } from "@moonblanck/rakit-ui"

/**
 * Menetapkan arah baca (ltr/rtl) untuk seluruh komponen Radix di bawahnya.
 * Pasang sekali di root aplikasi; komponen seperti Slider, Select, dan
 * DropdownMenu akan menyesuaikan arah navigasi keyboard dan posisinya.
 */
function DirectionProvider(
  props: React.ComponentPropsWithoutRef<typeof DirectionPrimitive.DirectionProvider>
) {
  return <DirectionPrimitive.DirectionProvider {...props} />
}

const useDirection = DirectionPrimitive.useDirection

export { DirectionProvider, useDirection }
