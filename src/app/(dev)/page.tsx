export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-8 sm:p-20">
      <main className="flex flex-col items-center sm:items-start gap-6">
        <h2 className="text-2xl font-semibold text-gray-700">Go to page:</h2>
        <ul className="flex flex-col gap-4 w-full">
          <li className="p-2 w-full">
            <a
              href="/basket"
              className="block w-full px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition text-center"
            >
              Basket
            </a>
          </li>
          <li className="p-2 w-full">
            <a
              href="/wishlist"
              className="block w-full px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition text-center"
            >
              Wishlist
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
