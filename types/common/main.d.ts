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