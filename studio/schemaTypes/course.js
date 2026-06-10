export default {
  name: "course",
  title: "Courses",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Course Title",
      type: "string",
    },

    {
      name: "category",
      title: "Category",
      type: "string",
    },

    {
      name: "duration",
      title: "Duration",
      type: "string",
    },

    {
      name: "students",
      title: "Students",
      type: "string",
    },

    {
      name: "price",
      title: "Price",
      type: "number",
    },

    {
      name: "rating",
      title: "Rating",
      type: "number",
    },

    {
      name: "image",
      title: "Course Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};