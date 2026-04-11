const fs = require('fs');
const path = require('path');

const fp = path.join(__dirname, 'index.html');
let c = fs.readFileSync(fp, 'utf-8');

// 1. CSS Comments
c = c.replace(/      \/\* las baja, probá con otro % si querés más o menos \*\/\r?\n/g, "");
c = c.replace(/      \/\* opcional: fondo para contraste \*\/\r?\n/g, "");
c = c.replace(/    \/\* Tailwind personalizada \*\/\r?\n/g, "");
c = c.replace(/      \/\* IE y Edge \*\/\r?\n/g, "");
c = c.replace(/      \/\* Firefox \*\/\r?\n/g, "");
c = c.replace(/    \/\* Animación Cascada Mobile Menu \*\/\r?\n/g, "");

// 2. Wireframe comment
const wireframeRegex = /<!--🛒 Wireframe de la Página de Inicio para Danielle Distribuidora[\s\S]*?Políticas de privacidad, términos y condiciones\.-->/g;
c = c.replace(wireframeRegex, "");

// 3. Security rel="noopener noreferrer"
c = c.replaceAll('target="_blank"', 'target="_blank" rel="noopener noreferrer"');

// 4. Lazy loading & Alt texts for images
c = c.replace('<img src="./imagenes/Cuadernos.png"', '<img src="./imagenes/Cuadernos.png" alt="Librería" loading="lazy"');
c = c.replace('<img src="./imagenes/Juguete.png" alt="Juguetería"', '<img src="./imagenes/Juguete.png" alt="Juguetería" loading="lazy"');
c = c.replace('<img src="./imagenes/Vasos.png"', '<img src="./imagenes/Vasos.png" alt="Nuevos Ingresos" loading="lazy"');
c = c.replace('<img src="./imagenes/Globos.png"', '<img src="./imagenes/Globos.png" alt="Cotillón" loading="lazy"');
c = c.replace('<img src="./imagenes/Mochila.png" alt="Marroquinería"', '<img src="./imagenes/Mochila.png" alt="Marroquinería" loading="lazy"');
c = c.replace('<img src="./imagenes/Mayorista.png" alt="Mayorista"', '<img src="./imagenes/Mayorista.png" alt="Mayorista" loading="lazy"');

c = c.replaceAll('alt="forma"', 'alt=""');
c = c.replaceAll('alt="Fondo destacado"', 'alt="" loading="lazy"');
c = c.replaceAll('alt="Olas decorativas"', 'alt="" loading="lazy"');

c = c.replaceAll('<img src="https://images.fravega.com/f500', '<img loading="lazy" src="https://images.fravega.com/f500');

// 5. Product cards div -> a
// Card 1
c = c.replace('<!--Producto 1 (Destacado Principal - 2x2)-->\n        <div', '<!--Producto 1 (Destacado Principal - 2x2)-->\n        <a href="#"');
c = c.replace('<!--Producto 1 (Destacado Principal - 2x2)-->\r\n        <div', '<!--Producto 1 (Destacado Principal - 2x2)-->\r\n        <a href="#"');
c = c.replace('al carrito</button>\n          </div>\n        </div>', 'al carrito</button>\n          </div>\n        </a>');
c = c.replace('al carrito</button>\r\n          </div>\r\n        </div>', 'al carrito</button>\r\n          </div>\r\n        </a>');

// Card 2
c = c.replace('<!--Producto 2 (Cuadrado chico - 1x1 convertible a horizontal)-->\n        <div\n          class="col-span-1 row-span-1', '<!--Producto 2 (Cuadrado chico - 1x1 convertible a horizontal)-->\n        <a href="#"\n          class="col-span-1 row-span-1');
c = c.replace('<!--Producto 2 (Cuadrado chico - 1x1 convertible a horizontal)-->\r\n        <div\r\n          class="col-span-1 row-span-1', '<!--Producto 2 (Cuadrado chico - 1x1 convertible a horizontal)-->\r\n        <a href="#"\r\n          class="col-span-1 row-span-1');

// Card 3
c = c.replace('<!--Producto 3 (Cuadrado chico - 1x1 convertible a horizontal)-->\n        <div\n          class="col-span-1 row-span-1', '<!--Producto 3 (Cuadrado chico - 1x1 convertible a horizontal)-->\n        <a href="#"\n          class="col-span-1 row-span-1');
c = c.replace('<!--Producto 3 (Cuadrado chico - 1x1 convertible a horizontal)-->\r\n        <div\r\n          class="col-span-1 row-span-1', '<!--Producto 3 (Cuadrado chico - 1x1 convertible a horizontal)-->\r\n        <a href="#"\r\n          class="col-span-1 row-span-1');

// Card 4
c = c.replace('<!--Producto 4 (Horizontal chico - 2x1 Estilo Termo)-->\n        <div', '<!--Producto 4 (Horizontal chico - 2x1 Estilo Termo)-->\n        <a href="#"');
c = c.replace('<!--Producto 4 (Horizontal chico - 2x1 Estilo Termo)-->\r\n        <div', '<!--Producto 4 (Horizontal chico - 2x1 Estilo Termo)-->\r\n        <a href="#"');
c = c.replace('group-hover:bg-indigo-danielle/20">\n          </div>\n        </div>', 'group-hover:bg-indigo-danielle/20">\n          </div>\n        </a>');
c = c.replace('group-hover:bg-indigo-danielle/20">\r\n          </div>\r\n        </div>', 'group-hover:bg-indigo-danielle/20">\r\n          </div>\r\n        </a>');

// Card 5
c = c.replace('<!--Producto 5 (Cuadrado chico - 1x1 convertible a horizontal)-->\n        <div\n          class="col-span-1 row-span-1', '<!--Producto 5 (Cuadrado chico - 1x1 convertible a horizontal)-->\n        <a href="#"\n          class="col-span-1 row-span-1');
c = c.replace('<!--Producto 5 (Cuadrado chico - 1x1 convertible a horizontal)-->\r\n        <div\r\n          class="col-span-1 row-span-1', '<!--Producto 5 (Cuadrado chico - 1x1 convertible a horizontal)-->\r\n        <a href="#"\r\n          class="col-span-1 row-span-1');

// Closing for smaller cards
c = c.replaceAll('hover:shadow-sm">Añadir</button>\n          </div>\n        </div>', 'hover:shadow-sm">Añadir</button>\n          </div>\n        </a>');
c = c.replaceAll('hover:shadow-sm">Añadir</button>\r\n          </div>\r\n        </div>', 'hover:shadow-sm">Añadir</button>\r\n          </div>\r\n        </a>');

// Button padding
c = c.replaceAll('text-[10px] py-1 mt-0.5', 'text-[10px] py-1.5 md:py-1 mt-0.5');
c = c.replaceAll('text-[10px] py-1 mt-0', 'text-[10px] py-1.5 md:py-1 mt-0');

// 6. JS Resize Bug
const js_resize = `          header.classList.add("bg-black/60", "shadow-md");
        }
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1280 && menuOpen) {
        menuBtn.click();
      }
    });

    //Carrusel`;
c = c.replace(/          header\.classList\.add\("bg-black\/60", "shadow-md"\);\r?\n        \}\r?\n      \}\r?\n    \}\);\r?\n\r?\n    \/\/Carrusel/, js_resize);

fs.writeFileSync(fp, c, 'utf-8');
console.log("Updated HTML successfully.");
