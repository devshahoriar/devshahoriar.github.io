/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'

export const alt = 'About Acme'

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#ddd',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundImage:
            'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%)',
          backgroundSize: '100px 100px',
        }}
      >
        <img
          src={`https://github.com/devshahoriar.png`}
          alt={'alt'}
          height="400px"
          width="400px"
          style={{
            width: '400px',
            height: '400px',
            objectFit: 'cover',
            objectPosition: 'top',
            borderRadius: '100000px',
            marginTop: '10px',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            justifyItems: 'center',
            alignItems: 'center',
            marginTop: '20px',
            lineHeight: '10px',
          }}
        >
          <h1
            style={{ textAlign: 'center', fontWeight: '800', fontSize: '50px' }}
          >
            Shahoriar Ahmed
          </h1>
          <p style={{ textAlign: 'center' }}>Full stack web developer</p>
          <b style={{ textAlign: 'center' }}>#nodejs #nextjs #reactjs</b>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
