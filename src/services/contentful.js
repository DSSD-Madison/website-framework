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

export async function getAllEntriesOfContentType(content_type, order) {
  const query = { content_type }

  //only sort if an order is passed in
  if (order) { 
    query.order = order
  }

  const entries = await client.getEntries(query)
  return entries.items
}

export async function getAssetsByTitle(title) {
  let assets = await client.getAssets({'fields.title': title })
  return assets.items
}