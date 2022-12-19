import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup.string().max(40).required(),
  price: yup.number().required(),
  stock_number: yup.number().required(),
  description: yup.string().max(100).required()
})
