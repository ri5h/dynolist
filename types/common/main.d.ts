type NavItem = {
    name: string
    href: string
}

type Heading = {
    titleHead: string,
    titleTail: string
}

type Navigation = NavItem[]

type SiteSettings = {
    navigation: Navigation,
    heading: Heading,
    description: string
}

type SingleRecord = {
    id: string,
    fields: FieldSet
}

type Settings = {
    records: SingleRecord[]
}