import contentful from 'contentful'

/*const client = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE,
  environment: import.meta.env.CONTENTFUL_ENVIRONMENT,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN
})*/

const client = contentful.createClient({
  space: "x00i2tlytr27",
  environment: "master",
  accessToken: "YtMYObOqRHyvWmeAap9CRSG7a46tFA8AOkE_ENTpygs"
})

//For exploring out content model
export async function getContentTypes() {
  return await client.getContentTypes()
}

export async function getAbout(){
    let entries = await client.getEntries({ content_type: 'about' });
    return entries.items[0].fields;
}