import Footer from "./components/Footer"
import Header from "./components/Header"
import ConfigPanel from "./layouts/ConfigPanel"
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-wrap gap-10 md:flex-nowrap flex-grow justify-center items-center bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 text-gray-700 px-10">
        <ConfigPanel />
      </main>
      <Footer />
    </div>
  )
}

export default App
