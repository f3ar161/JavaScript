/**
 * MascotaController
 *
 * @description :: Server-side logic for managing Mascotas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  crearMascota: function (req, res) {
    var parametros = req.allParams();
    if (req.method == 'POST') {
      if (parametros.nombre && parametros.paisNacimiento && parametros.idRaza) {
        Mascota.create({
          nombre: parametros.nombre,
          fechaNacimiento: parametros.fechaNacimiento,
          paisNacimiento: parametros.paisNacimiento,
          idRaza: parametros.idRaza,
        }).exec(function (error, mascotaCreado) {
          if (error) return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'Hubo Problemas creando la mascota, intentalo de nuevo: ' + error,
              url: '/crearMascota'
            }
          });
          Mascota.find().exec(function (error, mascotasEncontrados) {
            if (error) return res.serverError()
            sails.log.info(mascotasEncontrados);
            return res.view('vistas/Mascota/listarMascotas', {
              title: 'Lista de Mascotas',
              mascotas: mascotasEncontrados
            })
          });

        });
      } else {
        // bad Request
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            url: '/crearMascota'
          }
        });
      }
    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/crearMascota'
        }
      });
    }

  },
  BorrarMascota: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      Mascota.destroy({
        id: parametros.id
      }).exec(function (errorInesperado, MascotaRemovido) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              desripcion: "Error Inesperado",
              rawError: errorInesperado,
              url: "/ListarMascotas"
            }
          });
        }
        Mascota.find()
          .exec(function (errorIndefinido, mascotasEncontrados) {
            if (errorIndefinido) {
              res.view('vistas/Error', {
                error: {
                  desripcion: "Hubo un problema cargando las mascotas",
                  rawError: errorIndefinido,
                  url: "/ListarMascotas"
                }
              });
            }
            res.view('vistas/Mascota/ListarMascotas', {
              mascotas: mascotasEncontrados
            });
          })
      })
    } else {
      return res.view('vistas/Error', {
        error: {
          desripcion: "Necesitamos el ID para borrar la mascota",
          rawError: "No envia ID",
          url: "/ListarMascotas"
        }
      });
    }
  },
  editarMascota: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id && (parametros.nombre || parametros.fechaNacimiento || parametros.paisNacimiento || parametros.idRaza)) {
      var mascotaAEditar = {
        nombre: parametros.nombre,
        fechaNacimiento: parametros.fechaNacimiento,
        paisNacimiento: parametros.paisNacimiento,
        idRaza: parametros.idRaza
      }
      if (mascotaAEditar.nombre == "") {
        delete mascotaAEditar.nombre
      }
      if (mascotaAEditar.fechaNacimiento == "") {
        delete mascotaAEditar.fechaNacimiento
      }
      if (mascotaAEditar.paisNacimiento == "") {
        delete mascotaAEditar.paisNacimiento
      }
      if (mascotaAEditar.idRaza == "") {
        delete mascotaAEditar.idRaza
      }

      Mascota.update({
        id: parametros.id
      }, mascotaAEditar)
        .exec(function (errorInesperado, MascotaRemovido) {
          if (errorInesperado) {
            return res.view('vistas/Error', {
              error: {
                desripcion: "Error Inesperado",
                rawError: errorInesperado,
                url: "/ListarMascotas"
              }
            });
          }
          Mascota.find()
            .exec(function (errorIndefinido, mascotasEncontrados) {
              if (errorIndefinido) {
                res.view('vistas/Error', {
                  error: {
                    desripcion: "Hubo un problema cargando las mascotas",
                    rawError: errorIndefinido,
                    url: "/ListarMascotas"
                  }
                });
              }
              res.view('vistas/Mascota/ListarMascotas', {
                mascotas: mascotasEncontrados
              });
            })
        })
    } else {
      return res.view('vistas/Error', {
        error: {
          desripcion: "Necesitamos que envies el ID, nombre, fecha",
          rawError: "No envia Parametros",
          url: "/ListarMascotas"
        }
      });
    }
  }
};
