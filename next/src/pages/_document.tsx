import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='container mx-auto'>
        <div className='col'>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
