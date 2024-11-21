import Footer from "./components/Footer"
import Header from "./components/Header"
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-wrap md:flex-nowrap flex-grow justify-center bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 text-gray-700"></main>
      <Footer />
    </div>
  )
}

export default App
