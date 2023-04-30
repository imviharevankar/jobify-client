export type SignInFormSchema = {
  email: string,
  password: string,
}

export type SignUpSchema = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  skills: string[],
  location: string,
}

export type JobFormSchema = {
  title: string,
  category: string,
  description: string,
  location: string,
  skills: string[],
  timeline: string,
  amount: number,
}