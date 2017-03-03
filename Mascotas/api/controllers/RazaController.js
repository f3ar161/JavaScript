/**
 * RazaController
 *
 * @description :: Server-side logic for managing Razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  crearRaza: function (req, res) {
    var parametros = req.allParams();

    if (req.method == 'POST') {
      if (parametros.nombre) {
        Raza.create({
          nombre: parametros.nombre,
        }).exec(function (error, razaCreado) {
          if (error) return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'Hubo Problemas creando la raza, intentalo de nuevo: '+error,
              url: '/crearRaza'
            }
          });
          Raza.find().exec(function (error, razasEncontrados) {
            if (error) return res.serverError()
            sails.log.info(razasEncontrados);
            return res.view('vistas/Raza/listarRazas', {
              title: 'Lista de Razas',
              razas: razasEncontrados
            })
          });
        });
      } else {
        // bad Request
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            url: '/crearRaza'
          }
        });
      }
    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/crearRaza'
        }
      });
    }

  },
  BorrarRaza: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      Raza.destroy({
        id: parametros.id
      }).exec(function (errorInesperado, RazaRemovido) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              desripcion: "Error Inesperado",
              rawError: errorInesperado,
              url: "/ListarRazas"
            }
          });
        }
        Raza.find()
          .exec(function (errorIndefinido, razaEncontrados) {
            if (errorIndefinido) {
              res.view('vistas/Error', {
                error: {
                  desripcion: "Hubo un problema cargando las razas",
                  rawError: errorIndefinido,
                  url: "/ListarRazas"
                }
              });
            }
            res.view('vistas/Raza/ListarRazas', {
              razas: razaEncontrados
            });
          })
      })

    } else {
      return res.view('vistas/Error', {
        error: {
          desripcion: "Necesitamos el ID para borrar la raza",
          rawError: "No envia ID",
          url: "/ListarRazas"
        }
      });
    }
  },
  editarRaza: function (req, res) {
    var parametros = req.allParams();
    if (parametros.idRaza && (parametros.nombre)) {
      var razaAEditar = {
        nombre: parametros.nombre
      }
      if (razaAEditar.nombre == "") {
        delete razaAEditar.nombre
      }
      Raza.update({
        id: parametros.idRaza
      }, razaAEditar)
        .exec(function (errorInesperado, razaRemovido) {
          if (errorInesperado) {
            return res.view('vistas/Error', {
              error: {
                desripcion: "Error Inesperado",
                rawError: errorInesperado,
                url: "/ListarRazas"
              }
            });
          }
          Raza.find()
            .exec(function (errorIndefinido, razasEncontrados) {
              if (errorIndefinido) {
                res.view('Vistas/Error', {
                  error: {
                    desripcion: "Hubo un problema cargando las razas",
                    rawError: errorIndefinido,
                    url: "/ListarRazas"
                  }
                });
              }
              res.view('vistas/Raza/ListarRazas', {
                razas: razasEncontrados
              });
            })
        })
    } else {
      return res.view('Vistas/Error', {
        error: {
          desripcion: "Necesitamos que envies el ID, nombre, topico, fecha",
          rawError: "No envia Parametros",
          url: "/ListarMateria"
        }
      });
    }
  }
};
