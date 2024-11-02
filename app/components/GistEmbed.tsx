"use client";

import React, { useEffect, useRef } from 'react';

interface GistEmbedProps {
  gistUrl: string;
}

const GistEmbed: React.FC<GistEmbedProps> = ({ gistUrl }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(`
          <html>
            <body>
              <script src="${gistUrl}"></script>
            </body>
          </html>
        `);
        doc.close();
      }
    }
  }, [gistUrl]); // gistUrlが変更されたときに再実行

  return (
    <iframe
      ref={iframeRef}
      style={{ width: '100%', border: 'none', minHeight: '300px' }}
      title="Gist Embed"
    />
  );
};

export default GistEmbed;
