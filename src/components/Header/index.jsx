import Image from 'next/image'
import logo from '../../resources/logo.png'

export default function Header() {
  return (
    <div className='px-28 pt-3 flex w-full justify-between'>
        <Image src={logo} alt="blob logo" className='' width={150} height={170} />
        <span>
            <ol className='flex gap-10 h-10 items-center'>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
            </ol>
        </span>
    </div>
  )
}
