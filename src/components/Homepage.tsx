
const Homepage = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Improve productivity"
          />

          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <p className="text-5xl font-semibold text-blue-500">“</p>

            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                Systems Integration and Architecture Final Project CI/CD with Database
            </h1>

            <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                Technologies used: Vite + React + Typescript
                Hosting Services with Continuous Integration and Deployment: Render for Express.js & Vercel for React.js
            </p>

            <h3 className="mt-6 text-lg font-medium text-blue-500">Submitted by: Hanz Archer M. Dalubatan</h3>
            <h3 className="mt-6 text-lg font-medium text-blue-500">Submitted to: Prof. Ryan H. Teo</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
