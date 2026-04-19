import { useForm, schemaResolver } from '@mantine/form'
import { loginValidation } from './validation'

export const useLoginForm = () => {
  return useForm({
    mode: 'controlled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: schemaResolver(loginValidation(), { sync: true })
  })
}