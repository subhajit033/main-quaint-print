import React from 'react';

const BlogCard = ({ title, excerpt, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full rounded-[25px] aspect-video object-cover" />
      <div className="py-4 text-center sm:text-left">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
        <a href="#" className="inline-block mt-4 px-8 py-4 rounded-[10px] bg-gray-200 font-medium text-blue-600 hover:underline">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
