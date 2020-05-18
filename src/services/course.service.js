import courseSchema from "../models/course.model";

/**
 * Serviço para conexão com repositórios
 *
 */

const Course = mongoose.model("course", courseSchema);

export default {
  findAll() {
    return Course.find();
  },

  findById(req, id) {
    Course.findById(req, id).then((course) => {
      if (task) {
        return {
          status: 200,
          response: course,
        };
      } else {
        return {
          status: 404,
          response: "item não encontrado",
        };
      }
    });
  },

  save(body) {
    let newCourse = new Course(body);
    newCourse
      .save()
      .then((newCourse) => {
        return {
          status: 200,
          response: newCourse,
        };
      })
      .catch((error) => {
        return {
          status: 400,
          response: error.message,
        };
      });
  },
  updateById(body, id) {
    Course.findByIdAndUpdate(id, { $set: body })
      .then(() => {
        return {
          status: 201,
          response: body,
        };
      })
      .catch((error) => {
        return {
          status: 400,
          response: error.message,
        };
      });
  },
  deleteById(id) {
    Task.findByIdAndDelete(req.params.id)
      .then(() => {
        return {
          status: 200,
          response: "Curso Excluído com sucesso!",
        };
      })
      .catch((error) => {
        return {
          status: 400,
          response: error.message,
        };
      });
  },
};
