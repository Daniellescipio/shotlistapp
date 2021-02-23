const productionObjectExample = {
  _id: { $oid: "60345e3cb60abc4c101365f3" },
  name: "Kihn - Jacobi - Sleek Plastic Cheese",
  brief: "String Sentance",
  scenes: [
    {
      _id: { $oid: "60345e3c4a3fe64c10679d6e" },
      location: "String",
      date: { $date: "2021-02-07T19:34:14.484Z" },
      notes: "String paragraphs",
      thumbnail: "http://placeimg.com/640/480/city",
    },
  ],
  shots: [
    {
      _id: { $oid: "60345e3c4a3fe64c10679d73" },
      shotType: "string",
      done: Boolean,
      description: "String Paragraph",
      thumbnail: "url",
      referenceImage: "url",
      sceneId: { $oid: "60345e3c4a3fe64c10679d6e" },
    },
  ],
};
