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
        return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{item.text}</h2>;
      case 'heading3':
        return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{item.text}</h3>;
      default:
        return <p key={index} className="text-gray-700 leading-relaxed mb-4">{item.text}</p>;
    }
  };

  return (
    <div className="prose max-w-none">
      {content.map((item, index) => renderContent(item, index))}
    </div>
  );
};

export default ArticleContent;