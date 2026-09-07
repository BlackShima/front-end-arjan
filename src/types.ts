export interface Event {
  id: number | null
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petsAllowed: boolean
  organizer: string
}

export interface Organizer {
  id: number
  name: string
  address: string
}
export interface OrganizerState {
  organizer: Organizer | null
}

export interface MessageState {
  message: string
}

export interface EventState {
  event: Event | null
}
