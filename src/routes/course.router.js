import { get, post, put, del } from "../app";
import service from "../services/course.service";

/**
 * Roteador para entidade curso
 */

get("/cursos", async (req, res, next) => {
  const response = await service.findAll();
  res.json(response);
  return next();
});

get("/cursos/:id", async (req, res, next) => {
  const { response, status } = await service.findById(req, params.id);
  res.status(status);
  res.json(response);
  return next();
});

post("/cursos", async (req, res, next) => {
  const { response, status } = await service.save(req, params.id);
  res.status(status);
  res.json(response);
  return next();
});

put("/cursos/:id", async (req, res, next) => {
  const { response, status } = await service.updateById(req, params.id);
  res.status(status);
  res.json(response);
  return next();
});

del("/cursos/:id", async (req, res, next) => {
  const { response, status } = await service.deleteById(params.id);
  res.status(status);
  res.json(response);
  return next();
});
