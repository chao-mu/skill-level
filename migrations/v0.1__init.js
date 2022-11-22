module.exports.migrate = async ({firestore, FieldValue}) => {
  const quest_col = firestore.collection('quests');

  await quest_col.drop()

  function experience(creation, communication, community) {
    return [{creation:creation, communication:communication, community:community}]
  }
  [
    {
      name: "PyCon 2022 Lightning Talks (Part 1)",
      slug: "pycon-2022-lighting-1",
      description: "The coven of snake wizards are gathering once again to discuss ancient secrets. What can over hear?",
      url: "https://www.youtube.com/watch?v=r-rpo4Xm_lM",
      experience: experience(0, 10, 20),
    },
    {
      name: "PyCon 2022 Lightning Talks (Part 2)",
      slug: "pycon-2022-lighting-2",
      description: "The coven of snake wizards are gathering once again to discuss ancient secrets. What can over hear?",
      url: "https://www.youtube.com/watch?v=r-rpo4Xm_lM",
      experience: experience(0, 10, 20),
    },
    {
      name: "PyCon 2022 Lightning Talks (Part 3)",
      slug: "pycon-2022-lighting-3",
      description: "The coven of snake wizards are gathering once again to discuss ancient secrets. What can over hear?",
      url: "https://www.youtube.com/watch?v=r-rpo4Xm_lM",
      experience: experience(0, 10, 20),
    },
  ].forEach(v => quest_col.add(v));
};
