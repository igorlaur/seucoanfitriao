// Rota de ícone - usando SVG personalizado
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/svg+xml'
 
// Função que retorna o SVG do logofav
export default function Icon() {
  return new Response(
    `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <image href="/logofav.svg" width="32" height="32"/>
    </svg>`,
    {
      headers: {
        'Content-Type': 'image/svg+xml',
      },
    }
  )
}
