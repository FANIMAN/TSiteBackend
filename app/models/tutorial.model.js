module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      productionarea: String,
      measurement: String,
      prevprice: Number,
      currentprice:Number,
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
