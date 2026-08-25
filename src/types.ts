export interface Event {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petsAllowed: boolean
  organizer: string
}

export interface MessageState {
  message: string
}

export interface EventState {
  event: Event | null
}
