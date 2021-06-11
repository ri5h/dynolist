interface ContentItem {
    id: string,
    type: string,
    title: ?string,
    text: ?string,
}

type Content = {
    header: ContentItem,
    list: ContentItem,
    footer: ContentItem,
    [k: string]: any // To allow dynamically populating the object
}


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


type ListOfItemsProps = {
    items: Array<ItemProps>
}

type ItemProps = {
    title: string,
    subtitle: string,
    body: string,
}