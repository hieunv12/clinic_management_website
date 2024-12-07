import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const categories = [
    "All",
    "Health Check-ups",
    "Nutrition",
    "Mental Health",
    "Stress Management"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate(); 
  const blogPosts = [
    {
      id: 1,
      title: "Understanding the Importance of Regular Health Check-ups",
      description: "Regular health check-ups can help detect potential health issues early and improve overall well-being.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Health Check-ups"
    },
    {
      id: 2,
      title: "The Benefits of a Plant-Based Diet",
      description: "Explore the numerous health benefits associated with adopting a plant-based diet and how it can impact your overall health.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Nutrition"
    },
    {
      id: 3,
      title: "The Impact of Sleep on Mental Health",
      description: "Discover how quality sleep plays a crucial role in maintaining good mental health and overall well-being.",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=80",
      category: "Mental Health"
    },
    {
      id: 4,
      title: "Effective Stress Management Techniques",
      description: "Learn about various stress management techniques that can help you lead a more balanced and healthier life.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80",
      category: "Stress Management"
    }
  ];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Health and Wellness Blog</h1>
      
      {/* Category Navigation */}
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors duration-200 ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => navigate(`/user/blog/${post.id}`)}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-blue-400"
            aria-labelledby={`post-${post.id}-title`}
          >
            <img
              src={post.image}
              alt=""
              className="w-full h-48 object-cover"
              aria-hidden="true"
            />
            <div className="p-6">
              <h2
                id={`post-${post.id}-title`}
                className="text-xl font-semibold mb-2"
              >
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-500 font-medium">{post.category}</span>
                <button
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors duration-200"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More
                  <FaArrowRight className="ml-2 animate-pulse" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;