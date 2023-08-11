import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'
import { PATH_ALL } from 'config/path'

export const RedirectPage: FC = () => <Redirect to={PATH_ALL.articles} />
