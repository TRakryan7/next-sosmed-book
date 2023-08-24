import Image from 'next/image'

import AuthComponent from '@/components/auth/AuthComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <AuthComponent/>
    </main>
  )
}
