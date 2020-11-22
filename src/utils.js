import React from 'react';
import { MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

/**
 * Render rich text document nodes from Contentful
 * to React components.
 * 
 * @param {*} document 
 */
export function renderRichTextDocument(document) {

  return documentToReactComponents(document, {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
    },
    renderNode: {
      'embedded-asset-block': node => {
        const file = node.data.target.fields.file;

        switch (file.contentType) {
          case 'image/png':
          case 'image/jpeg':
            return <img src={file.url} />
          case 'audio/x-wav':
            return (
              <audio controls>
                <source src={file.url} type="audio/ogg" />
                Your browser does not support the audio element.
              </audio>
            );
          default:
            return <a href={file.url}>{file.fileName}</a>
        }
      }
    },
  });
}