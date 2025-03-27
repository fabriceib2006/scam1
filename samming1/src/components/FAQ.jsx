const FAQ = () => {
    const faqs = [
      { question: "How do I earn money?", answer: "Watch ads and earn $0.05 per ad." },
      { question: "How do I withdraw earnings?", answer: "Withdraw when you reach $10." },
    ];
  
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-gray-700">{faq.question}</h4>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default FAQ;
  