import { useDateFormat } from '@vueuse/core'
export const displayDateFormat = (date: Date): string => {
  return date && typeof date === 'object'
    ? useDateFormat(date.toString(), 'YYYY/MM/DD(dd)hh:mm').value
    : ''
}

export const convertTodoResponse = (
  responses: TodolistResponse[],
): Todolist[] => {
  return responses.map((res) => {
    return { ...res, deadline: displayDateFormat(res.deadline) }
  })
}
