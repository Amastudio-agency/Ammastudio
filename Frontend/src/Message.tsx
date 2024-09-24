

import React, { useState } from 'react';

const Message: React.FC = () => {
  const [name, setName] = useState('');
  const [project, setProject] = useState('');
  const [budget, setBudget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle the form submission, like sending data to a server or displaying it
    console.log('Form submitted:', { name, project, budget, deadline, email });
    alert(`Name: ${name}\nProject: ${project}\nBudget: ${budget}\nDeadline: ${deadline}\nEmail: ${email}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4 text-black">Project Inquiry Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-black font-medium mb-2">I am</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-black font-medium mb-2">I have got a project for you</label>
          <input
            type="text"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter the project name or details"
            required
          />
        </div>
        <div>
          <label className="block text-black font-medium mb-2">My budget is</label>
          <input
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your budget"
            required
          />
        </div>
        <div>
          <label className="block text-black font-medium mb-2">I need it in the next</label>
          <input
            type="text"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter the deadline"
            required
          />
        </div>
        <div>
          <label className="block text-black font-medium mb-2">You can contact me via this email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Message;









