export function User() {
  return (
    <div className="flex items-center justify-center h-full p-4 md:p-8">
      <div className="text-center space-y-6 animate-fade-in">
        <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-pulse-slow">
          <span className="text-4xl md:text-5xl">👤</span>
        </div>
        <div className="space-y-2 glass-sidebar rounded-2xl p-6 md:p-8 border border-white/20 dark:border-white/10">
          <h1 className="text-gray-900 dark:text-white">User Page</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            This page is ready for your custom implementation.
          </p>
        </div>
      </div>
    </div>
  );
}