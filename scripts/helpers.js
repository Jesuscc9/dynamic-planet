export function convertCordsToCartesian([lat, lng]) {
  const phi = lat * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)

  let x = -(Math.cos(phi) * Math.cos(theta))
  let y = Math.sin(phi)
  let z = Math.cos(phi) * Math.sin(theta)

  return { x, y, z }
}