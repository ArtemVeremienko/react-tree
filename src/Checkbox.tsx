import { useRef, useEffect, InputHTMLAttributes } from 'react'

type ObjectValues<T> = T[keyof T]

export const CHECKBOX_STATUS = {
  INDETERMINATE: -1,
  UNCHECKED: 0,
  CHECKED: 1
} as const

export type CheckboxStatus = ObjectValues<typeof CHECKBOX_STATUS>

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  indeterminate?: boolean
}

export function Checkbox({
  label,
  checked = false,
  indeterminate = false,
  ...checkboxProps
}: CheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!checkboxRef.current) return
    checkboxRef.current.indeterminate = indeterminate
    checkboxRef.current.checked = checked
  }, [indeterminate, checked])

  return (
    <label>
      <input type="checkbox" ref={checkboxRef} {...checkboxProps} />
      {label}
    </label>
  )
}
