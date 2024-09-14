type Todolist = {
  /** ID **/
  id: number
  /** タイトル **/
  title: string
  /** 詳細 **/
  detail: string | null
  /** 場所 **/
  place: string | null
  /** 期限 **/
  deadline: string | null
  /** 備考 **/
  remarks: string | null
  /** 期限切れかどうか **/
  isOverdue: boolean
}

type TodolistResponse = {
  /** ID **/
  id: number
  /** タイトル **/
  title: string
  /** 詳細 **/
  detail: string | null
  /** 場所 **/
  place: string | null
  /** 期限 **/
  deadline: Date | null
  /** 備考 **/
  remarks: string | null
  /** 期限切れかどうか **/
  isOverdue: boolean
}

type CreateTodoRequest = {
  /** タイトル **/
  title: string
  /** 詳細 **/
  detail: string | null
  /** 場所 **/
  place: string | null
  /** 期限 **/
  deadline: Date | null
  /** 備考 **/
  remarks: string | null
}

type UpdateTodoRequest = CreateTodoRequest
