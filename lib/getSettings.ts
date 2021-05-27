type JSONResponse = {
    data?: {
        settings: Settings
    }
    errors?: Array<{ message: string }>
}

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

let description = `Mina aute id magna aliqua ad ad non tundraset sunt. Qui irure qui lorem cupidatat commodo.`
    + `Elit sunt amet fugiat veniam occaecat fugiat aliqua.`

let siteSettings = {
    navigation,
    heading,
    description
}

export default async function getSettings(): Promise<SiteSettings> {

    const response = await fetch('http://localhost:3000/api/settings')
    const { records } = await response.json() as Settings

    if (response.ok) {
        records?.map((record: SingleRecord) => {
            switch (record.fields.Id) {
                case 'header':
                    console.log('updating heading')
                    siteSettings.heading = {
                        titleHead: record.fields.Title.trim(),
                        titleTail: record.fields.Text.trim(),
                    }
                    break;
                case 'description':
                    description = record.fields.value.trim()
                    break;
                //default:
                //console.log('WhatTheCase', record.fields.key)
            }
        })
    } else {
        console.log('Server made a boo boo!')
    }

    return siteSettings
}