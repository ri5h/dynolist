export const getSiteSettings = (): SiteSettings => {
    let navigation: Navigation = [
        // { name: 'Product', href: '#' },
        // { name: 'Features', href: '#' },
        // { name: 'Marketplace', href: '#' },
        // { name: 'Company', href: '#' },
    ]

    let heading: Heading = {
        titleHead: "Proudly showcase",
        titleTail: "awesome directory"
    }

    let description = "Mina aute id magna aliqua ad ad non tundraset sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."

    return { navigation, heading, description }
}