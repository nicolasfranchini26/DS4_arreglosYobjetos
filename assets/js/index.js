export function propiedades(arrayPropiedades, contenedor) {

    let contenidoHTML = '';
    let contador = 0;
    

    for (let propiedad of arrayPropiedades) {

        if (contador < 3) {
          
          let mascotas = (propiedad.smoke?
            
            `<p class="text-danger">
            <i class="fas fa-smoking-ban"></i> No se permite fumar
        </p>`
            :
            `<p class="text-success">
            <i class="fas fa-smoking"></i> Permitido fumar
        </p>`)

        
        let fumar = (propiedad.animales?
          
            `<p class="text-danger">
            <i class="fas fa-ban"></i> No se permiten mascotas
            </p>`
            :
            `<p class="text-success">
                <i class="fas fa-paw"></i> Mascotas permitidas
            </p>`)
        
        contenidoHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img
                        src=${propiedad.src}
                        class="card-img-top"
                        alt="Imagen del departamento"
                    />
                    <div class="card-body">
                        <h5 class="card-title">
                            ${propiedad.nombre}
                        </h5>
                        <p class="card-text">
                            ${propiedad.descripcion}
                        </p>
                        <p>
                            <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                        </p>
                        <p>
                            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                            <i class="fas fa-bath"></i> ${propiedad.baños} Baños
                        </p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                        ${fumar}
                        ${mascotas}
                    </div>
                </div>
            </div>
        `;
        contador++;
        
    }else{
        break;
    }
}

contenedor.innerHTML = contenidoHTML;

}