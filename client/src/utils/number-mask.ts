import { ChangeEvent } from 'react'

export const numberMask = (e: ChangeEvent<HTMLInputElement>) => {
  e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
}
