import * as yup from 'yup'
import { errorMessages } from './errors'
import { regex } from './regex'

export const registerSchema = yup.object().shape({
    email: yup.string().email().required(errorMessages.required),
    password: yup.string().required(errorMessages.required),
    name: yup.string().required(errorMessages.required),
})

export const loginSchema = yup.object().shape({
    email: yup.string().email().required(errorMessages.required),
    password: yup.string().required(errorMessages.required),
})

export const createArticleSchema = yup.object().shape({
    title: yup.string().required(),
    link: yup.string().url().required(),
    description: yup.string().required(),
    pubDate: yup.string().required(),
    category: yup
        .string()
        .matches(regex.category, errorMessages.category).optional(),
    source: yup.string().required(),
    media: yup.string().url().optional(),
})
