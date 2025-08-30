const base = import.meta.env.BASE_URL;

export function formatUrl(url: string) {
  // Si la URL es solo la raíz, devolvemos la base tal cual.
  if (url === '/') {
    return base;
  }

  // Limpiamos la base para que no tenga barra al final.
  // Ej: '/' -> '', '/DGPS/' -> '/DGPS'
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;

  // Limpiamos la URL para que siempre empiece con una barra.
  const cleanUrl = url.startsWith('/') ? url : '/' + url;
  
  // Combinamos la base limpia con la URL limpia.
  // Ej: '' + '/sistema-snnat' -> '/sistema-snnat'
  // Ej: '/DGPS' + '/riesgo-psicosocial/denuncias' -> '/DGPS/riesgo-psicosocial/denuncias'
  const combinedUrl = `${cleanBase}${cleanUrl}`;

  // AÑADIMOS LA BARRA FINAL SOLO SI NO ES UN ENLACE A UN ARCHIVO
  // (asumiendo que los archivos tienen extensiones como .pdf, .jpg, etc.)
  // Y si la URL no es solo la raíz
  if (combinedUrl.includes('.') || combinedUrl === '/') {
    return combinedUrl;
  } else {
    return combinedUrl.endsWith('/') ? combinedUrl : combinedUrl + '/';
  }
}