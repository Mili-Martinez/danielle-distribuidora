import os

fp = r"c:\Users\milag\OneDrive\Documentos\Curso HTML y CSS\Danielle - copia\index.html"
with open(fp, "r", encoding="utf-8") as f:
    c = f.read()

# 1. CSS Comments
c = c.replace("      /* las baja, probá con otro % si querés más o menos */\n", "")
c = c.replace("      /* opcional: fondo para contraste */\n", "")
c = c.replace("    /* Tailwind personalizada */\n", "")
c = c.replace("      /* IE y Edge */\n", "")
c = c.replace("      /* Firefox */\n", "")
c = c.replace("    /* Animación Cascada Mobile Menu */\n", "")

# 2. Wireframe comment
wireframe = """<!--🛒 Wireframe de la Página de Inicio para Danielle Distribuidora
1-Encabezado (Header):
  Logo de la empresa.
  Menú de navegación con enlaces a las secciones principales: Inicio, Productos, Ofertas, Contacto.
  Iconos de búsqueda y carrito de compras.

2-Banner Principal (Hero):
  Imagen destacada de productos o promociones actuales.
  Texto llamativo que resalte la propuesta de valor.
  Botón de llamada a la acción (CTA) como "Ver Productos" o "Comprar Ahora".

3-Sección de Categorías:
  Muestra de las principales categorías de productos, como Papelería, Juguetería, Librería, etc.
  Cada categoría con una imagen representativa y enlace a su página correspondiente.

4-Productos Destacados:
  Galería de productos en oferta o más vendidos.
  Información básica: imagen, nombre, precio y botón de "Agregar al carrito".

5-Testimonios o Reseñas:
  Comentarios de clientes satisfechos para generar confianza.

6-Formulario de Suscripción:
  Invitación a los usuarios a suscribirse al boletín para recibir novedades y ofertas.

7-Pie de Página (Footer):
  Información de contacto: dirección, teléfono, correo electrónico.
  Enlaces a redes sociales.
  Políticas de privacidad, términos y condiciones.-->"""
c = c.replace(wireframe, "")

# 3. Security rel="noopener noreferrer"
c = c.replace('target="_blank"', 'target="_blank" rel="noopener noreferrer"')

# 4. Lazy loading & Alt texts for images
c = c.replace('<img src="./imagenes/Cuadernos.png"', '<img src="./imagenes/Cuadernos.png" alt="Librería" loading="lazy"')
c = c.replace('<img src="./imagenes/Juguete.png" alt="Juguetería"', '<img src="./imagenes/Juguete.png" alt="Juguetería" loading="lazy"')
c = c.replace('<img src="./imagenes/Vasos.png"', '<img src="./imagenes/Vasos.png" alt="Nuevos Ingresos" loading="lazy"')
c = c.replace('<img src="./imagenes/Globos.png"', '<img src="./imagenes/Globos.png" alt="Cotillón" loading="lazy"')
c = c.replace('<img src="./imagenes/Mochila.png" alt="Marroquinería"', '<img src="./imagenes/Mochila.png" alt="Marroquinería" loading="lazy"')
c = c.replace('<img src="./imagenes/Mayorista.png" alt="Mayorista"', '<img src="./imagenes/Mayorista.png" alt="Mayorista" loading="lazy"')

c = c.replace('alt="forma"', 'alt=""')
c = c.replace('alt="Fondo destacado"', 'alt="" loading="lazy"')
c = c.replace('alt="Olas decorativas"', 'alt="" loading="lazy"')

c = c.replace('<img src="https://images.fravega.com/f500', '<img loading="lazy" src="https://images.fravega.com/f500')

# 5. Product cards div -> a
# Card 1
c = c.replace('<!--Producto 1 (Destacado Principal - 2x2)-->\n        <div', '<!--Producto 1 (Destacado Principal - 2x2)-->\n        <a href="#"')
c = c.replace('al carrito</button>\n          </div>\n        </div>', 'al carrito</button>\n          </div>\n        </a>')

# Card 2
c = c.replace('<!--Producto 2 (Cuadrado chico - 1x1 convertible a horizontal)-->\n        <div\n          class="col-span-1 row-span-1', '<!--Producto 2 (Cuadrado chico - 1x1 convertible a horizontal)-->\n        <a href="#"\n          class="col-span-1 row-span-1')

# Card 3
c = c.replace('<!--Producto 3 (Cuadrado chico - 1x1 convertible a horizontal)-->\n        <div\n          class="col-span-1 row-span-1', '<!--Producto 3 (Cuadrado chico - 1x1 convertible a horizontal)-->\n        <a href="#"\n          class="col-span-1 row-span-1')

# Card 4
c = c.replace('<!--Producto 4 (Horizontal chico - 2x1 Estilo Termo)-->\n        <div', '<!--Producto 4 (Horizontal chico - 2x1 Estilo Termo)-->\n        <a href="#"')
c = c.replace('group-hover:bg-indigo-danielle/20">\n          </div>\n        </div>', 'group-hover:bg-indigo-danielle/20">\n          </div>\n        </a>')

# Card 5
c = c.replace('<!--Producto 5 (Cuadrado chico - 1x1 convertible a horizontal)-->\n        <div\n          class="col-span-1 row-span-1', '<!--Producto 5 (Cuadrado chico - 1x1 convertible a horizontal)-->\n        <a href="#"\n          class="col-span-1 row-span-1')

# Add missing 'Añadir' closing replacements (for cards 2, 3, 5)
c = c.replace('hover:shadow-sm">Añadir</button>\n          </div>\n        </div>', 'hover:shadow-sm">Añadir</button>\n          </div>\n        </a>')

# Padding for touch targets in mobile (increase padding of add to cart)
# py-1 -> py-1.5 in small buttons for better mobile touch, py-2 is already there for main product.
c = c.replace('text-[10px] py-1 mt-0.5', 'text-[10px] py-1.5 md:py-1 mt-0.5')
c = c.replace('text-[10px] py-1 mt-0', 'text-[10px] py-1.5 md:py-1 mt-0')


# 6. JS Resize Bug
js_resize = """          header.classList.add("bg-black/60", "shadow-md");
        }
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1280 && menuOpen) {
        menuBtn.click();
      }
    });

    //Carrusel"""
c = c.replace("""          header.classList.add("bg-black/60", "shadow-md");
        }
      }
    });

    //Carrusel""", js_resize)

with open(fp, "w", encoding="utf-8") as f:
    f.write(c)

print("Done")
