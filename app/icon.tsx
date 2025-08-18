import { ImageResponse } from 'next/og'
 
// Rota de ícone
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Função que retorna o favicon
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#1e40af',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'Inter',
        }}
      >
        SC
      </div>
    ),
    {
      ...size,
    }
  )
}
