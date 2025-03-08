import React, { useEffect, useRef, useState } from 'react';
import { Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const Contact = ({ sectionsRef }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    sectionsRef.current.push(sectionRef.current);
  }, [sectionsRef]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_y1gnv2u',
      'template_jwhy6ns',
      formData,
      'xkgZSVdJepB1yAoap'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Message sent successfully! 🎉');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        toast.error('Failed to send message. Please try again later. ❌');
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          Get In Touch 📬
        </h2>
        <div className="max-w-3xl mx-auto glass-effect rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-black/30">
              <h3 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                About Me 👨‍💻
              </h3>
              <p className="text-gray-300 mb-14">
                Hi, I'm Sivaprakasam T, a passionate MERN stack developer 💻 with a strong focus on creating user-friendly and efficient web applications. 🚀 If you have any queries, collaboration ideas, or just want to say hi, feel free to reach out! 😊
              </p>
              <div className="space-y-6">
                <a
                  href="https://github.com/sivaprakasam-07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Github size={24} />
                  <span>GitHub Profile 🌟</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sivaprakasam-coder/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <Linkedin size={24} />
                  <span>LinkedIn Profile 🔗</span>
                </a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="p-8 w-full max-w-md mx-auto">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name ✍️
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email 📧
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message 💬
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Send size={20} />
                  Send Message 🚀
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
