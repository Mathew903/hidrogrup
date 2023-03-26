export interface Link {
    name: string,
    url: string,
    Icon: () => JSX.Element
}

export interface iconLinks extends Link {
    colorHover: string
}

export type servicies = {
    servicio: string
    url: string
    title: string
    firstSub: string
    firstDesc: Array<string>
    secondSub: string
    secondDesc: Array<string>
    media: string
    titlePage: string,
    video?: boolean
}