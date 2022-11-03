import contentful from 'contentful'

const client = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE,
  environment: import.meta.env.CONTENTFUL_ENVIRONMENT,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN
})

export async function getAbout() {
    let entries = await client.getEntries({ content_type: 'about' })
    return entries.items[0]
}