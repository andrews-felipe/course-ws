const courseSchema = mongoose.Schema({
  img: { type: String, require: true },
  title: { type: String, require: true },
  price: { type: String, require: true },
});

exports.courseSchema = courseSchema;
