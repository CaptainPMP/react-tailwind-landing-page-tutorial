// eslint-disable-next-line no-unused-vars
import React from 'react'

const InfoOne = () => {
  return (
    <div className="container mx-auto flex items-center py-16">
      <div className="w-1/2 px-6">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="w-1/2 px-6">
        <h2 className="text-3xl font-semibold">Welcome to Our Website</h2>
        <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, explicabo quisquam sapiente enim laborum nostrum quo. Cumque temporibus saepe possimus?</p>
      </div>
    </div>
  );
}

export default InfoOne