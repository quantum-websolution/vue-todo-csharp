type todolistResponse = {
  /** ID **/
  id: number
  /** タイトル **/
  title: string
  /** 詳細 **/
  detail: string
  /** 場所 **/
  place: string
  /** 期限 **/
  deadline: string
  /** 備考 **/
  remarks: string
  /** 期限切れかどうか **/
  isOverdue: boolean
}

type CreateTodoRequest = {
  /** タイトル **/
  title: string
  /** 詳細 **/
  detail: string
  /** 場所 **/
  place: string
  /** 期限 **/
  deadline: string
  /** 備考 **/
  remarks: string
}

type UpdateTodoRequest = CreateTodoRequest
