"use client"; // Allows form handling in the browser
import officers from "@/data/officers.json";

export default function ContactPage() {

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-[#7f0000]">Contact Us</h1>
      <p className="text-gray-700 mt-4">
        Interested in joining? Reach out to our President or Recruitment Chair or message us on Instagram!
      </p>
      {/* Officer Contact Info */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {officers.map((officer, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-[#7f0000]">{officer.title}</h2>
            <p><strong>Name:</strong> {officer.name}</p>
            <p><strong>Email:</strong> <a href={`mailto:${officer.email}`} className="text-[#7f0000] hover:underline">{officer.email}</a></p>
            <p><strong>Phone:</strong> {officer.phone}</p>
          </div>
          ))}
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      </div>
      
    </main>
  );
}
