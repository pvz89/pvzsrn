import React from 'react';

interface ArticleContentProps {
  content: {
    text: string;
    type: 'paragraph' | 'heading2' | 'heading3';
  }[];
}

const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  const renderContent = (item: { text: string; type: string }, index: number) => {
    switch (item.type) {
      case 'heading2':
        return <h2 key={index} className="text-3xl font-bold mt-12 mb-8 border-b pb-4">{item.text}</h2>;
      case 'heading3':
        return <h3 key={index} className="text-2xl font-bold mt-10 mb-6">{item.text}</h3>;
      default:
        // Split paragraphs into smaller chunks for better readability
        const sentences = item.text.split('. ').map(sentence => sentence.trim() + '.');
        const chunks = [];
        let currentChunk = [];
        
        for (let sentence of sentences) {
          currentChunk.push(sentence);
          if (currentChunk.join(' ').length > 200) {
            chunks.push(currentChunk.join(' '));
            currentChunk = [];
          }
        }
        if (currentChunk.length > 0) {
          chunks.push(currentChunk.join(' '));
        }

        return (
          <div key={index} className="mb-8">
            {chunks.map((chunk, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-4 text-lg">
                {chunk}
              </p>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="prose max-w-none">
      {content.map((item, index) => renderContent(item, index))}
    </div>
  );
};

export default ArticleContent;