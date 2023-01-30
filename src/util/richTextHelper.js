import { INLINES } from "@contentful/rich-text-types";
import { documentToHtmlString as render } from "@contentful/rich-text-html-renderer";
const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, next) => {
      return `<a href="${
        node.data.uri
      }" style="text-decoration: underline;">${next(
        node.content
      )}</a>`;
    }
  }
};

const documentToHtmlString = (body) => render(body, options);

export { documentToHtmlString };