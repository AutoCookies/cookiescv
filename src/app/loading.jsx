export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-center px-4">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
        <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>
        <p className="text-gray-500 text-sm mt-2">Please wait while we load the content for you.</p>
      </div>
    </div>
  );
}
