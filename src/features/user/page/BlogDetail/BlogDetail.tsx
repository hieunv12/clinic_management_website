import React, { useState, useEffect } from "react";
import { FaUser, FaCalendar, FaChevronRight } from "react-icons/fa";

const BlogDetail = () => {
  const [article, setArticle] = useState<any>(null);
  const [relatedArticles, setRelatedArticles] = useState<any>([]);

  useEffect(() => {
    // Simulating API call to fetch article data
    const fetchArticleData = () => {
      const dummyArticle = {
        title: "The Future of Artificial Intelligence",
        author: "John Doe",
        date: "2023-06-15",
        content: [
          { type: "text", content: "Artificial Intelligence (AI) is rapidly evolving, transforming various aspects of our lives. From autonomous vehicles to personalized recommendations, AI is becoming an integral part of our daily experiences." },
          { type: "image", src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e", alt: "Futuristic AI concept" },
          { type: "text", content: "One of the most exciting developments in AI is machine learning, which allows systems to improve their performance over time without being explicitly programmed." },
          { type: "video", src: "https://www.example.com/ai_video.mp4" },
          { type: "text", content: "As AI continues to advance, it's crucial to consider the ethical implications and ensure that these technologies are developed and used responsibly." }
        ]
      };
      setArticle(dummyArticle);
    };

    const fetchRelatedArticles = () => {
      const dummyRelatedArticles = [
        { id: 1, title: "The Ethics of AI Development", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485" },
        { id: 2, title: "Machine Learning: A Beginner's Guide", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4" },
        { id: 3, title: "AI in Healthcare: Revolutionizing Patient Care", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d" }
      ];
      setRelatedArticles(dummyRelatedArticles);
    };

    fetchArticleData();
    fetchRelatedArticles();
  }, []);

  const [expandedMedia, setExpandedMedia] = useState<any>(null);

  const handleMediaClick = (index:any) => {
    setExpandedMedia(expandedMedia === index ? null : index);
  };

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{article.title}</h1>
      <div className="flex items-center text-gray-600 mb-6">
        <FaUser className="mr-2" />
        <span className="mr-4">{article.author}</span>
        <FaCalendar className="mr-2" />
        <span>{article.date}</span>
      </div>
      <div className="space-y-6">
        {article.content.map((item:any, index:any) => {
          switch (item.type) {
            case "text":
              return (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {item.content}
                </p>
              );
            case "image":
              return (
                <div key={index} className="relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`w-full rounded-lg cursor-pointer transition-all duration-300 ${expandedMedia === index ? 'scale-110' : 'hover:scale-105'}`}
                    onClick={() => handleMediaClick(index)}
                  />
                  {expandedMedia === index && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setExpandedMedia(null)}>
                      <img src={item.src} alt={item.alt} className="max-w-full max-h-full" />
                    </div>
                  )}
                </div>
              );
            case "video":
              return (
                <div key={index} className="relative">
                  <video
                    src={item.src}
                    controls
                    className="w-full rounded-lg cursor-pointer transition-all duration-300 hover:scale-105"
                    onClick={() => handleMediaClick(index)}
                  ></video>
                  {expandedMedia === index && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setExpandedMedia(null)}>
                      <video src={item.src} controls className="max-w-full max-h-full"></video>
                    </div>
                  )}
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((relatedArticle:any) => (
            <div
              key={relatedArticle.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <img
                src={relatedArticle.image}
                alt={relatedArticle.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{relatedArticle.title}</h3>
                <button className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center">
                  Read More <FaChevronRight className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;