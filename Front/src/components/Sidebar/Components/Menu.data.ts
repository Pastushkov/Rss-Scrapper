import { PATH_ALL, PATH_ARTICLE, PATH_AUTH, PATH_REGISTER } from 'config/path'
import { LoginIcon, RssIcon } from 'assets/images/svgs'


export const sidebarData = (access: boolean) => {
    const data: { label: string; linkTo: string; icon: any }[] = [
        {
            label: 'Articles',
            linkTo: PATH_ALL.articles,
            icon: RssIcon,
        },
    ]
    if (!access)
        data.push({
            label: 'Login',
            linkTo: PATH_ALL.sign_in,
            icon: LoginIcon,
        })
    return data
}

export const findActive = (activePath: string, linkTo: string) => {
    const keys = {
        [`${PATH_ALL.articles}`]: Object.values(PATH_ARTICLE),
        [`${PATH_ALL.sign_in}`]: Object.values(PATH_AUTH),
        [`${PATH_ALL.register}`]: Object.values(PATH_REGISTER),
    }

    const filter = (arr: string) =>
        arr.split('/').filter(it => it && it !== ':id')

    return !!keys[linkTo]?.find(
        path => !!filter(path)?.find(el => filter(activePath).includes(el)),
    )
}
