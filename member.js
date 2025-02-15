function skillsMember() {
  var member = {
    name: "John",
    age: 30,
    skills: ["Javascript", "React", "Node"],
    details: function() {
      this.skills.forEach((skill) => {
        console.log(`${this.name} knows ${skill}`);
      });
    },
  };
  return member;
}