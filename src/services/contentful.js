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

export async function getAbout(){
    let entries = await client.getEntries({ content_type: 'about' });
    return entries.items[0].fields;
}

// export function getHtmlText(content) {
//   let htmlText = "";
//   for(const element of content) {
//     if(element.nodeType == 'text') {
//       htmlText += element.value;
//     }
//     else if(element.nodeType == 'hyperlink') {
//       htmlText += ('<a class="text-blue-500" href="' + element.data.uri + '">' + element.content[0].value +'<a>');
//     }
//   }
//   return htmlText;
// }