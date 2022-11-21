import contentful from 'contentful'

const client = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE,
  environment: import.meta.env.CONTENTFUL_ENVIRONMENT,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN
})

//For exploring out content model
export async function getContentTypes() {
  return await client.getContentTypes()
}

export async function getAllEntriesOfContentType(content_type) {
  let entries = await client.getEntries({ content_type })
  return entries.items
}

export async function getAssetsByTitle(title) {
  let assets = await client.getAssets({ title })
  return assets.items
}