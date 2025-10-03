export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">
            Hi I'm Brian
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            I'm a 59-year-old vegetarian living in Ayrshire, Scotland. 
            I love dogs and am passionate about living a compassionate, 
            plant-based lifestyle. This is my little corner of the internet.
          </p>
        </div>
        
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/WTJ7n-wrUdQ"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </main>
  );
}