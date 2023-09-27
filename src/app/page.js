
import Tile from '@/components/Tile'

export default function Home() {
  return (
    <main className="flex min-h-screen gap-7 flex-col items-center justify-between p-24">
      <div className='flex justify-start'><Tile/></div>
      <div className='flex justify-end'><Tile/></div>
      <div className='flex justify-center'><Tile/></div>
    </main>
  )
}
