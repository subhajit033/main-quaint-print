import BlogCard from './BlogCard'; // Assuming you have a BlogCard component
import Blog1 from '../../../assets/png/zaroka.jpg';
import Blog2 from '../../../assets/png/zaroka.jpg';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Custom Printing",
      excerpt: "Discover the latest trends in personalized printing...",
      imageUrl: Blog1,
    },
    {
      id: 2,
      title: "Sustainable Printing Practices",
      excerpt: "Learn how eco-friendly printing is shaping the industry...",
      imageUrl: Blog2,
    },
  ];

  return (
    <section className="blogs-section">
      <div className="w-full sm:w-[90%] md:w-[80%]  mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Latest Blogs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in the world of custom printing and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
