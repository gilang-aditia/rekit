import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

/** Daftar pertanyaan berurutan dengan pilihan jawaban. */
const Questionnaire = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    data-slot="questionnaire"
    className={cn("flex w-full flex-col gap-6", className)}
    {...props}
  />
))
Questionnaire.displayName = "Questionnaire"

const QuestionnaireItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="questionnaire-item"
    className={cn("flex flex-col gap-3", className)}
    {...props}
  />
))
QuestionnaireItem.displayName = "QuestionnaireItem"

const QuestionnaireQuestion = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="questionnaire-question"
    className={cn("text-sm leading-snug font-medium text-balance", className)}
    {...props}
  />
))
QuestionnaireQuestion.displayName = "QuestionnaireQuestion"

const QuestionnaireDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="questionnaire-description"
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
QuestionnaireDescription.displayName = "QuestionnaireDescription"

type QuestionnaireOptionsProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "onChange" | "dir" | "defaultValue"
> & {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  name?: string
  required?: boolean
  disabled?: boolean
  orientation?: "horizontal" | "vertical"
  loop?: boolean
  asChild?: boolean
}

const QuestionnaireOptions = React.forwardRef<
  HTMLDivElement,
  QuestionnaireOptionsProps
>(({ className, ...props }, ref) => (
  <RadioGroup
    ref={ref}
    data-slot="questionnaire-options"
    className={cn("gap-2", className)}
    {...props}
  />
))
QuestionnaireOptions.displayName = "QuestionnaireOptions"

/**
 * Satu pilihan jawaban. Seluruh kartu berfungsi sebagai label, jadi klik di
 * mana pun akan memilih opsinya.
 */
// Radix RadioGroupItem merender <button>; tipe ditulis eksplisit terhadap DOM
// supaya file .d.ts tidak merujuk paket @radix-ui transitif.
type QuestionnaireOptionProps = React.ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean
  value: string
  description?: React.ReactNode
}

const QuestionnaireOption = React.forwardRef<
  HTMLButtonElement,
  QuestionnaireOptionProps
>(({ className, children, description, id, value, ...props }, ref) => {
  const generatedId = React.useId()
  const optionId = id ?? `${generatedId}-${value}`

  return (
    <Label
      htmlFor={optionId}
      data-slot="questionnaire-option"
      className={cn(
        "flex cursor-pointer items-start gap-3 rounded-lg border border-input p-3 font-normal transition-colors",
        "hover:bg-muted/50",
        "has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-muted/50",
        "has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50",
        className
      )}
    >
      <RadioGroupItem
        ref={ref}
        id={optionId}
        value={value}
        className="mt-0.5"
        {...props}
      />
      <span className="flex min-w-0 flex-col gap-1">
        <span className="text-sm leading-snug font-medium">{children}</span>
        {description && (
          <span className="text-sm text-muted-foreground">{description}</span>
        )}
      </span>
    </Label>
  )
})
QuestionnaireOption.displayName = "QuestionnaireOption"

export {
  Questionnaire,
  QuestionnaireItem,
  QuestionnaireQuestion,
  QuestionnaireDescription,
  QuestionnaireOptions,
  QuestionnaireOption,
}
